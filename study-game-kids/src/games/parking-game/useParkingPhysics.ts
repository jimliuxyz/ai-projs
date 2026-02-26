import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { onUnmounted, watch } from 'vue';
import { useParkingGameStore } from './ParkingGameStore';
import { useSettingsStore } from '~/stores/settings.store';
import { createCarMesh, createTextTexture, createRoundedExtrude } from './utils/carMesh';
import { findTargetSpot, type LogicSpot, type LogicCar } from './utils/gameLogic';
import type { GameDataItem } from '~/types/game.types';

// --- Configuration ---
const CAR_MASS = 2000;
const OBSTACLE_MASS = 80;
const DRIVE_FORCE = 350000;
const MAX_VELOCITY = 100;
const BOOST_IMPULSE = 15000;
const VIEW_SIZE = 36;
const COLLISION_KNOCKBACK = 50000;
const DEBUG_WALLS = false;

// Collision Groups
const GROUP_GROUND = 1;
const GROUP_OBSTACLE = 2;
const GROUP_CAR = 4;
const GROUP_WALL = 8;
const GROUP_BARRIER = 16;

export function useParkingPhysics(container: HTMLElement, options: {
    p1Speed: { value: number },
    p2Speed: { value: number },
    onScore: (team: 'P1' | 'P2', total: number) => void,
    onWin: () => void,
    onSpeak: (text: string) => void,
    onParkSuccess: () => void,
    onParkFail: () => void,
    onComplete: () => void
}) {
    const gameStore = useParkingGameStore();
    const settingsStore = useSettingsStore();

    let scene: THREE.Scene, camera: THREE.OrthographicCamera, renderer: THREE.WebGLRenderer, world: CANNON.World;
    let groundMesh: THREE.Mesh, groundBody: CANNON.Body;

    // --- Performance Optimization: Reusable Objects ---
    const v3_tmp = new CANNON.Vec3();
    const v3_fwd_base = new CANNON.Vec3(0, 0, 1);
    const v3_zero = new CANNON.Vec3(0, 0, 0);
    const v3_side = new CANNON.Vec3();
    const v3_up = new CANNON.Vec3(0, 1, 0);
    const v3_target = new CANNON.Vec3();
    const v3_force = new CANNON.Vec3();

    // THREE Reusable
    const t_v3_tmp = new THREE.Vector3();
    const t_m_pos = new THREE.Vector2();
    const t_raycaster = new THREE.Raycaster();

    const cars: GameCar[] = [];
    const spots: (LogicSpot & { frameMeshes: THREE.Object3D[], labelMesh?: THREE.Object3D })[] = [];
    const obstacles: { mesh: THREE.Mesh, body: CANNON.Body }[] = [];
    const dogs: StrayDog[] = [];
    const walls: { body: CANNON.Body, mesh: THREE.Mesh }[] = [];
    let entryBarriers: { mesh: THREE.Mesh, body: CANNON.Body }[] = [];
    let exitFinishedTime = 0;

    // --- Layout Caching ---
    let layout = {
        w: 0, h: 0, aspect: 1, adaptiveSize: VIEW_SIZE, viewportWidth: VIEW_SIZE * 2,
        zBound: VIEW_SIZE * 0.9, spawnLimitX: VIEW_SIZE * 0.8
    };

    function updateLayoutCache() {
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (w === layout.w && h === layout.h) return;

        const aspect = w / h;
        const adaptiveSize = h > w ? VIEW_SIZE / (aspect * 1.5) : VIEW_SIZE;
        const viewportWidth = adaptiveSize * aspect * 2;

        layout = {
            w, h, aspect, adaptiveSize, viewportWidth,
            zBound: adaptiveSize * 0.9,
            spawnLimitX: (adaptiveSize * aspect) * 0.8
        };
    }
    updateLayoutCache();

    let scores = { P1: 0, P2: 0 };
    let gameState = {
        word: [] as string[],
        currentData: null as GameDataItem | null,
        nextSlotIndex: 0,
        isGameOver: false,
        gameOverTime: 0,
        isClearing: false,
        currentIndex: 0,
    };

    const matCar = new CANNON.Material('car');
    const matGround = new CANNON.Material('ground');
    const matObstacle = new CANNON.Material('obstacle');

    function getRandomDarkWarmColor() {
        const color = new THREE.Color();
        const hue = Math.random() * 0.12;
        const saturation = 0.4 + Math.random() * 0.4;
        const lightness = 0.15 + Math.random() * 0.15;
        color.setHSL(hue, saturation, lightness);
        return color;
    }

    class GameCar implements LogicCar {
        mesh: THREE.Group; body: CANNON.Body; id: number; char: string; team: 'P1' | 'P2';
        isParking = false; targetSpot: LogicSpot | null = null; isParkedFinal = false;
        lightBeams!: THREE.Group; isExiting = false; exitTargetZ = 0;
        isEntering = true; targetEntryZ = 0; entrySpeedMult = 1;
        shakeTime = 0;
        stuckTimer = 0;
        reverseTimer = 0;

        constructor(id: number, x: number, z: number, colors: { body: number, tires: number }, char: string, team: 'P1' | 'P2') {
            this.id = id; this.char = char; this.team = team;
            this.mesh = createCarMesh(colors, char);

            const beams = this.mesh.getObjectByName('light_beams');
            if (beams instanceof THREE.Group) {
                this.lightBeams = beams;
            } else {
                this.lightBeams = new THREE.Group();
                this.mesh.add(this.lightBeams);
            }

            scene.add(this.mesh);
            this.body = new CANNON.Body({ mass: CAR_MASS, material: matCar, linearDamping: 0.75, angularDamping: 0.95 });

            const cw = 4.2;
            const ch = 1.5;
            const cl = 8.5;
            this.body.addShape(new CANNON.Box(new CANNON.Vec3(cw / 2, ch / 2, (cl * 0.95) / 2)));
            this.body.position.set(x, 2, z);
            if (team === 'P1') this.body.quaternion.setFromEuler(0, Math.PI, 0);
            this.body.angularFactor.set(0, 1, 0);

            this.body.collisionFilterGroup = GROUP_CAR;
            this.body.collisionFilterMask = GROUP_GROUND | GROUP_OBSTACLE | GROUP_CAR;

            world.addBody(this.body); this.mesh.userData.carId = id;
            this.body.allowSleep = false;

            this.body.addEventListener('collide', (e: any) => {
                if (this.isParkedFinal) return;
                const other = e.body;
                if (other.material?.name === 'car') {
                    const otherCar = cars.find(c => c.body === other);
                    if (otherCar && !otherCar.isParkedFinal && this.isParking && otherCar.isParking) {
                        const tar = new CANNON.Vec3(this.targetSpot!.x, 0, this.targetSpot!.z);
                        if (this.body.position.distanceTo(tar) < other.position.distanceTo(tar)) {
                            other.applyImpulse(other.position.vsub(this.body.position).unit().scale(COLLISION_KNOCKBACK), new CANNON.Vec3(0, 0, 0));
                        }
                    }
                }
            });
        }

        applySeparation(allCars: GameCar[]) {
            if (this.isParkedFinal || this.isExiting) return;
            const myPos = this.body.position;
            const minDist = 6.0;
            const minDistSq = minDist * minDist;

            for (let i = 0; i < allCars.length; i++) {
                const other = allCars[i];
                if (other === this || other.isExiting || other.isParkedFinal) continue;

                const otherPos = other.body.position;
                const dx = myPos.x - otherPos.x;
                const dz = myPos.z - otherPos.z;
                const dSq = dx * dx + dz * dz;

                if (dSq < minDistSq && dSq > 0.001) {
                    const dist = Math.sqrt(dSq);
                    const dir = v3_tmp;
                    dir.set(dx, 0, dz);
                    dir.normalize();
                    const force = (minDist - dist) * 50000;
                    this.body.applyImpulse(dir.scale(force, v3_force), v3_zero);
                }
            }
        }

        update() {
            const v = this.body.velocity;
            const speed = v.length();
            if (speed > MAX_VELOCITY) {
                v.scale(MAX_VELOCITY / speed, v);
            }

            this.mesh.position.copy(this.body.position as any);
            this.mesh.quaternion.copy(this.body.quaternion as any);

            if (this.shakeTime > 0) {
                this.shakeTime -= 0.016;
                const s = Math.sin(this.shakeTime * 40) * this.shakeTime;
                this.mesh.position.y += Math.abs(s) * 1.2;
                this.mesh.rotation.z += s * 0.2;
            }

            if (!this.isParkedFinal && Math.abs(this.body.velocity.y) > 0.1) {
                this.body.velocity.y *= 0.8;
            }

            if (!this.isExiting) {
                this.body.collisionFilterMask = GROUP_GROUND | GROUP_OBSTACLE | GROUP_CAR | GROUP_WALL | GROUP_BARRIER;
            }

            if (this.isExiting) { this.driveToExit(); this.lightBeams.visible = true; }
            else if (this.isEntering) { this.driveToEntry(); this.lightBeams.visible = true; }
            else if (this.isParking && this.targetSpot && !this.isParkedFinal) { this.driveToTarget(); this.lightBeams.visible = true; }
            else { this.lightBeams.visible = false; }
        }

        driveToEntry() {
            const dz = this.targetEntryZ - this.body.position.z;
            const isP1 = this.team === 'P1';
            const direction = isP1 ? -1 : 1;
            this.body.quaternion.setFromEuler(0, isP1 ? Math.PI : 0, 0);
            this.body.angularVelocity.set(0, 0, 0);
            const dist = Math.abs(dz);
            const reached = (isP1) ? (dz >= -2.0) : (dz <= 2.0);

            if (reached) {
                this.isEntering = false;
                this.body.velocity.set(0, 0, 0);
                this.body.force.set(0, 0, 0);
                this.stuckTimer = 0;
                return;
            }

            if (this.body.velocity.length() < 2.0) {
                this.stuckTimer++;
                if (this.stuckTimer > 60) {
                    this.isEntering = false;
                    this.body.velocity.set(0, 0, 0);
                    this.body.force.set(0, 0, 0);
                    this.stuckTimer = 0;
                    return;
                }
            } else {
                this.stuckTimer = 0;
            }

            let forceMult = 1.0;
            if (dist < 15) {
                forceMult = dist / 15;
                this.body.velocity.scale(0.92, this.body.velocity);
            }

            const speed = 1.2;
            const force = DRIVE_FORCE * 1.1 * this.entrySpeedMult * speed * forceMult;
            v3_force.set(0, 0, direction * force);
            this.body.applyForce(v3_force, v3_zero);
            this.body.velocity.x *= 0.95;
        }

        driveToExit() {
            this.body.collisionFilterMask = GROUP_GROUND | GROUP_OBSTACLE | GROUP_CAR;
            const tarZ = this.exitTargetZ;
            const dx = 0 - this.body.position.x; const dz = tarZ - this.body.position.z;
            const tAng = Math.atan2(dx, dz);
            const fwd = v3_tmp;
            this.body.quaternion.vmult(v3_fwd_base, fwd);
            const cAng = Math.atan2(fwd.x, fwd.z);
            let diff = tAng - cAng;
            while (diff > Math.PI) diff -= Math.PI * 2; while (diff < -Math.PI) diff += Math.PI * 2;
            this.body.angularVelocity.y = diff * 5;
            const speed = 1.8;
            if (Math.cos(diff) > 0.1) this.body.applyForce(fwd.scale(DRIVE_FORCE * speed, v3_force), v3_zero);
        }

        driveToTarget() {
            if (!this.targetSpot) return;
            if (this.targetSpot.occupied) { this.isParking = false; this.targetSpot = null; this.body.velocity.set(0, 0, 0); this.body.angularVelocity.set(0, 0, 0); return; }

            const tar = v3_target;
            tar.set(this.targetSpot.x || 0, 0.5, this.targetSpot.z || 0);

            const dx = tar.x - this.body.position.x; const dz = tar.z - this.body.position.z; const d = Math.sqrt(dx * dx + dz * dz);
            const tAng = Math.atan2(dx, dz);
            const fwd = v3_tmp;
            this.body.quaternion.vmult(v3_fwd_base, fwd);
            const cAng = Math.atan2(fwd.x, fwd.z);
            let diff = tAng - cAng;
            while (diff > Math.PI) diff -= Math.PI * 2; while (diff < -Math.PI) diff += Math.PI * 2;
            const absDiff = Math.abs(diff);

            if (Math.abs(this.body.position.z) > layout.zBound) {
                const nudgeAmount = this.body.position.z > 0 ? -100000 : 100000;
                v3_force.set(0, 0, nudgeAmount);
                this.body.applyForce(v3_force, v3_zero);
            }

            if (d < 1.8 && absDiff < 1.2) { this.finishParking(tar); return; }

            const sMult = this.team === 'P1' ? options.p1Speed.value : options.p2Speed.value;

            if (this.reverseTimer > 0) {
                this.reverseTimer--;
                this.body.angularVelocity.y = -Math.sin(diff) * 5;
                const revForce = DRIVE_FORCE * 0.8 * sMult;
                this.body.applyForce(fwd.scale(-revForce, v3_force), v3_zero);
                const side = v3_side;
                v3_up.cross(fwd, side);
                this.body.velocity.x -= side.x * this.body.velocity.dot(side) * 0.95;
                this.body.velocity.z -= side.z * this.body.velocity.dot(side) * 0.95;
                return;
            }

            if ((absDiff > 2.0) || (d < 20 && absDiff > 1.0 && this.body.velocity.length() < 5)) {
                this.reverseTimer = 50;
                return;
            }

            this.body.angularVelocity.y = diff * 5;
            if (Math.cos(diff) > 0.1) {
                const forceAmt = DRIVE_FORCE * Math.min(1, d / 6) * sMult;
                this.body.applyForce(fwd.scale(forceAmt, v3_force), v3_zero);
            }
            const side = v3_side;
            v3_up.cross(fwd, side);
            this.body.velocity.x -= side.x * this.body.velocity.dot(side) * 0.8;
            this.body.velocity.z -= side.z * this.body.velocity.dot(side) * 0.8;
        }

        boost() { if (this.isParkedFinal) return; const f = new CANNON.Vec3(0, 0, 1); this.body.quaternion.vmult(f, f); this.body.applyImpulse(f.scale(BOOST_IMPULSE), new CANNON.Vec3(0, 0, 0)); }
        shake() {
            this.shakeTime = 0.4;
            if (!this.isParkedFinal) {
                this.body.applyImpulse(new CANNON.Vec3(0, 2000, 0), new CANNON.Vec3(0.5, 0, 0.5));
                const nudge = new CANNON.Vec3((Math.random() - 0.5) * 15000, 0, (Math.random() - 0.5) * 15000);
                this.body.applyImpulse(nudge, new CANNON.Vec3(0, 0, 0));
            }
        }

        finishParking(tar: CANNON.Vec3) {
            if (this.targetSpot!.occupied) { this.isParking = false; this.targetSpot = null; return; }
            this.targetSpot!.occupied = true;
            this.targetSpot!.winnerTeam = this.team;
            this.isParkedFinal = true;
            this.isParking = false;
            this.body.position.copy(tar); this.body.velocity.set(0, 0, 0); this.body.angularVelocity.set(0, 0, 0);
            this.body.type = CANNON.Body.STATIC; this.body.mass = 0; this.body.updateMassProperties();
            if (this.team === 'P1') {
                scores.P1++;
                options.onScore('P1', scores.P1);
            } else {
                scores.P2++;
                options.onScore('P2', scores.P2);
            }
            options.onParkSuccess();
        }

        updateColors(colors: { body: number, tires: number }) {
            this.mesh.traverse(child => {
                if (child instanceof THREE.Mesh) {
                    if (child.name === 'car_body' && child.material instanceof THREE.MeshStandardMaterial) {
                        child.material.color.set(colors.body);
                    } else if (child.name === 'car_tire' && child.material instanceof THREE.MeshStandardMaterial) {
                        child.material.color.set(colors.tires);
                    }
                }
            });
        }
        park(spot: LogicSpot) {
            this.targetSpot = spot;
            this.isParking = true;
            this.isEntering = false;
            this.body.wakeUp();
        }
        exit() {
            this.isExiting = true; this.isParkedFinal = false; this.isParking = false;
            this.body.type = CANNON.Body.DYNAMIC; this.body.mass = CAR_MASS; this.body.updateMassProperties();
            this.exitTargetZ = this.team === 'P1' ? 150 : -150; this.body.wakeUp();
        }
    }

    class StrayDog {
        mesh: THREE.Group; body: CANNON.Body;
        legs: THREE.Mesh[] = [];
        tail: THREE.Mesh | null = null;
        target = new THREE.Vector3();
        state: 'idle' | 'walking' = 'idle';
        timer = 0;
        team: 'P1' | 'P2' | null = null;

        constructor(x: number, z: number, color: number, team: 'P1' | 'P2' | null = null) {
            this.team = team;
            this.mesh = new THREE.Group();
            const dMat = new THREE.MeshStandardMaterial({ color, roughness: 0.8 });
            const dr = 0.5;

            const bodyGeo = createRoundedExtrude(1.8, 3.0, 1.2, dr);
            const body = new THREE.Mesh(bodyGeo, dMat);
            body.rotation.x = Math.PI / 2; body.position.y = 1.3; body.castShadow = true;
            this.mesh.add(body);

            const headGeo = createRoundedExtrude(1.2, 1.2, 1.2, dr * 0.8);
            const head = new THREE.Mesh(headGeo, dMat);
            head.rotation.x = Math.PI / 2; head.position.set(0, 2.0, 1.5); head.castShadow = true;
            this.mesh.add(head);

            const eMat = new THREE.MeshStandardMaterial({ color: 0x5d2e0d });
            const earGeo = createRoundedExtrude(0.4, 0.4, 0.8, 0.15);
            const earL = new THREE.Mesh(earGeo, eMat);
            earL.rotation.x = Math.PI / 2; earL.position.set(0.5, 2.6, 1.5); this.mesh.add(earL);
            const earR = new THREE.Mesh(earGeo, eMat);
            earR.rotation.x = Math.PI / 2; earR.position.set(-0.5, 2.6, 1.5); this.mesh.add(earR);

            if (this.team && settingsStore.gameSpecificSettings['parking-game']) {
                const p = settingsStore.gameSpecificSettings['parking-game'];
                const c = this.team === 'P1' ? p.p1Car.body : p.p2Car.body;
                const collarMat = new THREE.MeshStandardMaterial({
                    color: c, emissive: c, emissiveIntensity: 0.5
                });
                const collarGeo = createRoundedExtrude(1.3, 1.3, 0.3, 0.1);
                const collar = new THREE.Mesh(collarGeo, collarMat);
                collar.rotation.x = Math.PI / 2; collar.position.set(0, 1.8, 1.0);
                this.mesh.add(collar);
            }

            const lGeo = createRoundedExtrude(0.5, 0.5, 1.0, 0.25);
            const lPos = [[0.6, 0.5, 1.0], [-0.6, 0.5, 1.0], [0.6, 0.5, -1.0], [-0.6, 0.5, -1.0]];
            lPos.forEach(p => {
                const l = new THREE.Mesh(lGeo, dMat);
                l.rotation.x = Math.PI / 2; l.position.set(p[0], p[1], p[2]);
                this.mesh.add(l);
                this.legs.push(l);
            });

            const tailGeo = createRoundedExtrude(0.3, 1.0, 0.3, 0.1);
            this.tail = new THREE.Mesh(tailGeo, dMat);
            this.tail.rotation.x = Math.PI / 2;
            this.tail.position.set(0, 1.5, -1.5);
            this.mesh.add(this.tail);

            this.mesh.traverse(child => {
                if (child instanceof THREE.Mesh) child.raycast = () => { };
            });
            scene.add(this.mesh);
            this.body = new CANNON.Body({ mass: 10, material: matObstacle });
            this.body.addShape(new CANNON.Box(new CANNON.Vec3(0.9, 0.6, 1.5)));
            this.body.position.set(x, 0.5, z);
            this.body.collisionFilterGroup = GROUP_OBSTACLE;
            this.body.collisionFilterMask = GROUP_GROUND | GROUP_CAR | GROUP_OBSTACLE;
            world.addBody(this.body);
            this.body.angularFactor.set(0, 1, 0);
            this.body.quaternion.set(0, 0, 0, 1);
            this.pickNewTarget();
        }

        pickNewTarget() {
            if (this.team && !gameState.isGameOver && spots.length > 0) {
                const nextSpot = spots.find((s, idx) => !s.occupied && idx >= gameState.nextSlotIndex);
                if (nextSpot) {
                    const targetCar = cars.find(c => c.team === this.team && c.char === nextSpot.char && !c.isParkedFinal && !c.isParking);
                    if (targetCar) {
                        this.target.copy(targetCar.mesh.position as any);
                        this.state = 'walking';
                        this.timer = 60;
                        return;
                    }
                }
            }
            const w = container.clientWidth, h = container.clientHeight;
            const aspect = w / h;
            const adaptiveSize = h > w ? VIEW_SIZE / (aspect * 1.5) : VIEW_SIZE;
            const limitX = adaptiveSize * aspect;
            const limitZ = adaptiveSize * (1 - 120 / h);
            this.target.set((Math.random() - 0.5) * limitX * 1.6, 0, (Math.random() - 0.5) * limitZ * 1.6);
            this.state = 'walking';
            this.timer = 100;
        }

        update() {
            this.mesh.position.copy(this.body.position as any);
            this.mesh.quaternion.copy(this.body.quaternion as any);

            if (this.team && !gameState.isGameOver) {
                const nextSpot = spots.find((s, idx) => !s.occupied && idx >= gameState.nextSlotIndex);
                if (nextSpot) {
                    const targetCar = cars.find(c => c.team === this.team && c.char === nextSpot.char && !c.isParkedFinal && !c.isParking);
                    if (targetCar) {
                        this.target.copy(targetCar.mesh.position as any);
                        const dirToDog = new THREE.Vector3().subVectors(this.mesh.position, targetCar.mesh.position).normalize();
                        this.target.add(dirToDog.multiplyScalar(4.5));
                        this.state = 'walking';
                    } else {
                        if (this.timer <= 0) this.pickNewTarget();
                    }
                }
            }

            if (this.state === 'walking') {
                const diff = this.target.clone().sub(this.mesh.position);
                diff.y = 0;
                if (diff.length() < 1.5 || this.timer <= 0) {
                    this.state = 'idle';
                    this.timer = this.team ? 10 : 60 + Math.random() * 120;
                    this.body.velocity.set(0, 0, 0);
                } else {
                    this.timer--;
                    const desiredYaw = Math.atan2(diff.x, diff.z);
                    const euler = new CANNON.Vec3();
                    this.body.quaternion.toEuler(euler);
                    const curYaw = euler.y;
                    let yawDiff = desiredYaw - curYaw;
                    while (yawDiff > Math.PI) yawDiff -= Math.PI * 2;
                    while (yawDiff < -Math.PI) yawDiff += Math.PI * 2;
                    this.body.angularVelocity.y = yawDiff * 5;
                    const fwd = new CANNON.Vec3(0, 0, 1);
                    this.body.quaternion.vmult(fwd, fwd);
                    const speed = this.team ? 12 : 8;
                    this.body.velocity.x = fwd.x * speed;
                    this.body.velocity.z = fwd.z * speed;
                    this.legs.forEach((l, i) => {
                        l.position.y = 0.5 + Math.sin(Date.now() * 0.015 + i) * 0.25;
                    });
                }
            } else {
                this.timer--;
                if (this.timer <= 0) this.pickNewTarget();
            }

            if (this.tail) {
                const speed = this.state === 'walking' ? 0.02 : 0.01;
                this.tail.rotation.z = Math.sin(Date.now() * speed) * 0.5;
            }
        }

        destroy() {
            scene.remove(this.mesh);
            world.removeBody(this.body);
        }
    }

    function initScene() {
        scene = new THREE.Scene(); scene.background = new THREE.Color(0x050505); scene.fog = new THREE.Fog(0x050505, 150, 400);
        renderer = new THREE.WebGLRenderer({ antialias: true, canvas: container as HTMLCanvasElement });
        container.style.touchAction = 'none';
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.shadowMap.enabled = true;

        updateCamera();
        window.addEventListener('resize', updateCamera);

        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        const sun = new THREE.DirectionalLight(0xffffff, 0.6);
        sun.position.set(0, 200, 0);
        sun.castShadow = true;
        sun.shadow.camera.left = -200; sun.shadow.camera.right = 200;
        sun.shadow.camera.top = 200; sun.shadow.camera.bottom = -200;
        sun.shadow.camera.near = 1;
        sun.shadow.camera.far = 400;
        sun.shadow.bias = 0.0001;
        sun.shadow.mapSize.set(2048, 2048);
        scene.add(sun);

        world = new CANNON.World(); world.gravity.set(0, -9.82, 0);
        if (world.solver instanceof CANNON.GSSolver) world.solver.iterations = 50;
        world.allowSleep = false;
        world.addContactMaterial(new CANNON.ContactMaterial(matCar, matGround, { friction: 0.05, restitution: 0.1 }));
        world.addContactMaterial(new CANNON.ContactMaterial(matCar, matObstacle, { friction: 0.02, restitution: 0.1 }));
        world.addContactMaterial(new CANNON.ContactMaterial(matCar, matCar, { friction: 0.05, restitution: 0.0 }));

        const gMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.8, metalness: 0 });
        groundMesh = new THREE.Mesh(new THREE.PlaneGeometry(1000, 1000), gMat); groundMesh.rotation.x = -Math.PI / 2; groundMesh.receiveShadow = true; scene.add(groundMesh);
        groundBody = new CANNON.Body({ mass: 0, material: matGround }); groundBody.addShape(new CANNON.Plane()); groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0); world.addBody(groundBody);

        addYellowLines(-200, 200, -15, 15);

        const wallMat = new THREE.MeshStandardMaterial({
            color: 0xff00ff,
            transparent: true,
            opacity: 0.3,
            visible: DEBUG_WALLS
        });
        for (let i = 0; i < 4; i++) {
            const body = new CANNON.Body({ mass: 0, material: matGround });
            body.collisionFilterGroup = GROUP_WALL;
            body.collisionFilterMask = GROUP_CAR;
            world.addBody(body);
            const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), wallMat);
            mesh.renderOrder = 999;
            mesh.raycast = () => { };
            scene.add(mesh);
            walls.push({ body, mesh });
        }
        updateCamera();

        initRound();

        watch(() => settingsStore.gameSpecificSettings['parking-game']?.p1Car, (newCar) => {
            if (!newCar) return;
            cars.filter(c => c.team === 'P1').forEach(c => c.updateColors(newCar));
        }, { deep: true });
        watch(() => settingsStore.gameSpecificSettings['parking-game']?.p2Car, (newCar) => {
            if (!newCar) return;
            cars.filter(c => c.team === 'P2').forEach(c => c.updateColors(newCar));
        }, { deep: true });

        animate();
    }

    function updateCamera() {
        const w = container.clientWidth;
        const h = container.clientHeight;
        const aspect = w / h;
        const adaptiveSize = h > w ? VIEW_SIZE / (aspect * 1.5) : VIEW_SIZE;
        if (!camera) {
            camera = new THREE.OrthographicCamera(-adaptiveSize * aspect, adaptiveSize * aspect, adaptiveSize, -adaptiveSize, 0.1, 1000);
            camera.position.set(0, 150, 0);
            camera.lookAt(0, 0, 0);
        } else {
            camera.left = -adaptiveSize * aspect; camera.right = adaptiveSize * aspect;
            camera.top = adaptiveSize; camera.bottom = -adaptiveSize;
            camera.updateProjectionMatrix();
        }
        renderer.setSize(w, h);
    }

    let wallScale = 5.0;
    let lastReshapeScale = 0;
    function updateWalls() {
        if (walls.length !== 4) return;
        updateLayoutCache();

        if (wallScale > 1.0) {
            wallScale -= 0.04;
            if (wallScale < 1.0) wallScale = 1.0;
        }

        const limitX = (layout.adaptiveSize * layout.aspect + 0.5) * wallScale;
        const limitZ = (layout.adaptiveSize * (1 - 120 / layout.h) + 0.5) * wallScale;
        const thick = 50; const wallH = 100; const visibleThick = 1.0;

        const needsReshape = Math.abs(wallScale - lastReshapeScale) > 0.01;
        if (needsReshape) lastReshapeScale = wallScale;

        walls[0].body.position.set(0, 0, -limitZ - thick / 2);
        if (needsReshape) {
            walls[0].body.shapes = [];
            walls[0].body.addShape(new CANNON.Box(new CANNON.Vec3(limitX + thick, wallH / 2, thick / 2)));
        }
        walls[0].mesh.position.set(0, wallH / 2, -limitZ + visibleThick / 2);
        walls[0].mesh.scale.set(limitX * 2 + 2, wallH, visibleThick);

        walls[1].body.position.set(0, 0, limitZ + thick / 2);
        if (needsReshape) {
            walls[1].body.shapes = [];
            walls[1].body.addShape(new CANNON.Box(new CANNON.Vec3(limitX + thick, wallH / 2, thick / 2)));
        }
        walls[1].mesh.position.set(0, wallH / 2, limitZ - visibleThick / 2);
        walls[1].mesh.scale.set(limitX * 2 + 2, wallH, visibleThick);

        walls[2].body.position.set(-limitX - thick / 2, 0, 0);
        if (needsReshape) {
            walls[2].body.shapes = [];
            walls[2].body.addShape(new CANNON.Box(new CANNON.Vec3(thick / 2, wallH / 2, limitZ + thick)));
        }
        walls[2].mesh.position.set(-limitX + visibleThick / 2, wallH / 2, 0);
        walls[2].mesh.scale.set(visibleThick, wallH, limitZ * 2 + 2);

        walls[3].body.position.set(limitX + thick / 2, 0, 0);
        if (needsReshape) {
            walls[3].body.shapes = [];
            walls[3].body.addShape(new CANNON.Box(new CANNON.Vec3(thick / 2, wallH / 2, limitZ + thick)));
        }
        walls[3].mesh.position.set(limitX - visibleThick / 2, wallH / 2, 0);
        walls[3].mesh.scale.set(visibleThick, wallH, limitZ * 2 + 2);
    }

    function addYellowLines(zStart: number, zEnd: number, gapZMin: number, gapZMax: number) {
        const thickness = 1.0;
        const separation = 2.5;
        const mat = new THREE.MeshBasicMaterial({ color: 0x996600 });
        const len1 = gapZMin - zStart;
        if (len1 > 0) {
            const g1 = new THREE.PlaneGeometry(thickness, len1);
            const l1_1 = new THREE.Mesh(g1, mat); l1_1.rotation.x = -Math.PI / 2; l1_1.position.set(-separation / 2, 0.06, zStart + len1 / 2);
            l1_1.name = 'road_marking'; l1_1.raycast = () => { }; scene.add(l1_1);
            const l1_2 = new THREE.Mesh(g1, mat); l1_2.rotation.x = -Math.PI / 2; l1_2.position.set(separation / 2, 0.06, zStart + len1 / 2);
            l1_2.name = 'road_marking'; l1_2.raycast = () => { }; scene.add(l1_2);
        }
        const len2 = zEnd - gapZMax;
        if (len2 > 0) {
            const g2 = new THREE.PlaneGeometry(thickness, len2);
            const l2_1 = new THREE.Mesh(g2, mat); l2_1.rotation.x = -Math.PI / 2; l2_1.position.set(-separation / 2, 0.06, gapZMax + len2 / 2);
            l2_1.name = 'road_marking'; l2_1.raycast = () => { }; scene.add(l2_1);
            const l2_2 = new THREE.Mesh(g2, mat); l2_2.rotation.x = -Math.PI / 2; l2_2.position.set(separation / 2, 0.06, gapZMax + len2 / 2);
            l2_2.name = 'road_marking'; l2_2.raycast = () => { }; scene.add(l2_2);
        }
    }

    let currentScrollX = 0;
    function updateSpotPositions() {
        if (!spots.length) return;
        updateLayoutCache();
        const spacing = 18;
        const numSpots = spots.length;
        const viewportWidth = layout.viewportWidth;
        const safeWidth = viewportWidth * 0.9;
        const slotsThatFit = Math.floor(safeWidth / spacing) + 1;
        const halfWindow = (slotsThatFit - 1) / 2;
        let targetFocusIndex = 0;

        if (numSpots <= slotsThatFit) {
            targetFocusIndex = (numSpots - 1) / 2;
        } else {
            let parkedFrontier = 0;
            while (parkedFrontier < numSpots && spots[parkedFrontier].occupied) {
                parkedFrontier++;
            }
            const offset = Math.max(0, halfWindow - 2);
            const desiredFocus = parkedFrontier + offset;
            targetFocusIndex = Math.max(halfWindow, Math.min(desiredFocus, numSpots - 1 - halfWindow));
        }

        const targetXOffset = -targetFocusIndex * spacing;
        currentScrollX += (targetXOffset - currentScrollX) * 0.05;
        const visibleThreshold = viewportWidth / 2 + 15;

        for (let i = 0; i < spots.length; i++) {
            const s = spots[i];
            const finalX = (i * spacing) + currentScrollX;
            s.x = finalX;
            const isVisible = Math.abs(finalX) < visibleThreshold;

            s.frameMeshes.forEach(mesh => {
                if (mesh.name.endsWith('_l')) mesh.position.x = finalX - 3.5;
                else if (mesh.name.endsWith('_r')) mesh.position.x = finalX + 3.5;
                else mesh.position.x = finalX;
                mesh.visible = isVisible;
            });

            if (s.labelMesh) {
                s.labelMesh.position.x = finalX;
                s.labelMesh.visible = isVisible;
            }

            if (s.occupied) {
                const car = cars.find(c => c.isParkedFinal && c.targetSpot === s);
                if (car) {
                    car.body.position.x = finalX;
                    car.mesh.position.x = finalX;
                }
            }
        }
    }

    function initRound() {
        wallScale = 5.0;
        const data = gameStore.gameData[gameState.currentIndex];
        if (!data) {
            options.onWin();
            return;
        }

        gameState.currentData = data;
        gameState.word = data.answer.split('');
        gameState.nextSlotIndex = 0;
        gameState.isGameOver = false;
        gameState.isClearing = false;
        spots.length = 0;

        const toRemove: THREE.Object3D[] = [];
        scene.traverse(child => {
            if (child.name && (child.name.startsWith('spot_') || child.name === 'road_marking')) {
                toRemove.push(child);
            }
        });
        toRemove.forEach(obj => scene.remove(obj));

        const spotW = 7; const spotL = 11;
        const numSpots = gameState.word.length;

        const w_init = container.clientWidth;
        const h_init = container.clientHeight;
        const aspect_init = w_init / h_init;
        const adaptiveSize_init = h_init > w_init ? VIEW_SIZE / (aspect_init * 1.5) : VIEW_SIZE;
        const viewportWidth_init = adaptiveSize_init * aspect_init * 2;
        const safeWidth_init = viewportWidth_init * 0.85;
        const slotsThatFit_init = Math.floor(safeWidth_init / 18) + 1;
        const initialSlotsToShow = Math.min(numSpots, slotsThatFit_init);
        const initialCenter = (initialSlotsToShow - 1) / 2;
        currentScrollX = -initialCenter * 18;

        for (let i = 0; i < numSpots; i++) {
            const spotX = (i * 18) + currentScrollX;
            const spotZ = 0;
            const spotObj = {
                char: gameState.word[i], occupied: false, x: spotX, z: spotZ, winnerTeam: null,
                frameMeshes: [] as THREE.Object3D[],
                labelMesh: undefined as THREE.Object3D | undefined
            };
            spots.push(spotObj);

            const lineMat = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.6, emissive: 0xffffff, emissiveIntensity: 0.2 });

            const top = new THREE.Mesh(new THREE.PlaneGeometry(spotW, 0.3), lineMat);
            top.rotation.x = -Math.PI / 2; top.position.set(spotX, 0.07, spotZ - spotL / 2); top.name = `spot_frame_${i}_t`; scene.add(top);
            spotObj.frameMeshes.push(top);

            const bottom = new THREE.Mesh(new THREE.PlaneGeometry(spotW, 0.3), lineMat);
            bottom.rotation.x = -Math.PI / 2; bottom.position.set(spotX, 0.07, spotZ + spotL / 2); bottom.name = `spot_frame_${i}_b`; scene.add(bottom);
            spotObj.frameMeshes.push(bottom);

            const left = new THREE.Mesh(new THREE.PlaneGeometry(0.3, spotL), lineMat);
            left.rotation.x = -Math.PI / 2; left.position.set(spotX - spotW / 2, 0.07, spotZ); left.name = `spot_frame_${i}_l`; scene.add(left);
            spotObj.frameMeshes.push(left);

            const right = new THREE.Mesh(new THREE.PlaneGeometry(0.3, spotL), lineMat);
            right.rotation.x = -Math.PI / 2; right.position.set(spotX + spotW / 2, 0.07, spotZ); right.name = `spot_frame_${i}_r`; scene.add(right);
            spotObj.frameMeshes.push(right);

            const lblSize = 5.0;
            const lblText = gameState.word[i];
            const lbl = new THREE.Mesh(new THREE.PlaneGeometry(lblSize, lblSize), new THREE.MeshStandardMaterial({
                map: createTextTexture(lblText, '#00000000', 'rgba(255,255,255,0.4)'),
                transparent: true, emissive: 0xffffff, emissiveIntensity: 0.1
            }));
            lbl.name = `spot_label_${i}`; lbl.rotation.x = -Math.PI / 2; lbl.position.set(spotX, 0.08, spotZ); scene.add(lbl);
            spotObj.labelMesh = lbl;
        }

        addYellowLines(-500, 500, -10, 10);
        dogs.push(new StrayDog(-20, 0, 0xd2b48c, 'P1'));
        dogs.push(new StrayDog(20, 0, 0xffffff, 'P2'));

        for (let i = 0; i < 15; i++) {
            const s = 2 + Math.random() * 3;
            const pos = new CANNON.Vec3((Math.random() - 0.5) * 110, s / 2, (Math.random() - 0.5) * 40);
            const mesh = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), new THREE.MeshStandardMaterial({
                color: getRandomDarkWarmColor(), metalness: 0.6, roughness: 0.4
            }));
            mesh.castShadow = true; mesh.receiveShadow = true; mesh.raycast = () => { }; scene.add(mesh);
            const bb = new CANNON.Body({ mass: OBSTACLE_MASS, material: matObstacle, position: pos });
            bb.addShape(new CANNON.Box(new CANNON.Vec3(s / 2, s / 2, s / 2))); world.addBody(bb);
            obstacles.push({ mesh, body: bb });
        }

        const bThickness = 2; const barrierHeight = 15;
        const bMatMesh = new THREE.MeshStandardMaterial({ color: 0xff00ff, transparent: true, opacity: 0.3, visible: DEBUG_WALLS });
        [13, -13].forEach(bz => {
            const body = new CANNON.Body({ mass: 0 });
            body.addShape(new CANNON.Box(new CANNON.Vec3(150, barrierHeight / 2, bThickness / 2)));
            body.position.set(0, barrierHeight / 2, bz);
            body.collisionFilterGroup = GROUP_BARRIER; body.collisionFilterMask = GROUP_CAR;
            world.addBody(body);
            const mesh = new THREE.Mesh(new THREE.BoxGeometry(300, barrierHeight, bThickness), bMatMesh);
            mesh.position.set(0, barrierHeight / 2, bz);
            mesh.raycast = () => { }; scene.add(mesh);
            entryBarriers.push({ mesh, body });
        });

        const pSettings = settingsStore.gameSpecificSettings['parking-game'] || { p1Car: { body: 0x0164e8, tires: 0x333333 }, p2Car: { body: 0xe81123, tires: 0x333333 } };
        spawnTeam('P1', pSettings.p1Car);
        spawnTeam('P2', pSettings.p2Car);

        options.onSpeak(data.question);
    }

    let animationId: number;
    function animate() {
        animationId = requestAnimationFrame(animate);
        world.step(1 / 60);
        updateWalls();
        updateSpotPositions();

        if (!gameState.isGameOver) {
            while (gameState.nextSlotIndex < spots.length && spots[gameState.nextSlotIndex].occupied) {
                gameState.nextSlotIndex++;
            }
            if (spots.every(s => s.occupied)) {
                gameState.isGameOver = true; gameState.gameOverTime = Date.now();
                options.onSpeak(gameState.currentData?.answer || '');
            }
        } else if (!gameState.isClearing) {
            if (Date.now() - gameState.gameOverTime > 800) {
                gameState.isClearing = true;
                // Open entry barriers
                if (entryBarriers.length > 0) {
                    entryBarriers.forEach(b => { scene.remove(b.mesh); world.removeBody(b.body); });
                    entryBarriers = [];
                }
                cars.forEach(c => c.exit());
            }
        } else {
            const allExited = cars.every(c => Math.abs(c.body.position.z) > 120);
            if (allExited) {
                if (exitFinishedTime === 0) exitFinishedTime = Date.now();
                if (Date.now() - exitFinishedTime > 300) {
                    exitFinishedTime = 0;
                    nextMission();
                }
            }
        }

        cars.forEach(c => {
            c.applySeparation(cars);
            c.update();
        });
        dogs.forEach(d => d.update());

        if (dragState.isDragging && dragState.car) {
            const car = dragState.car;
            const body = car.body;
            const speed = 20;
            body.velocity.x = (dragState.targetPos.x - body.position.x) * speed;
            body.velocity.z = (dragState.targetPos.z - body.position.z) * speed;
            if (!car.isParking) {
                body.angularVelocity.set(0, 0, 0);
                body.quaternion.copy(dragState.startRot);
            }
        }

        obstacles.forEach(o => {
            const v = o.body.velocity;
            if (v.length() > MAX_VELOCITY) v.scale(MAX_VELOCITY / v.length(), v);
            o.mesh.position.copy(o.body.position as any);
            o.mesh.quaternion.copy(o.body.quaternion as any);
        });
        renderer.render(scene, camera);
    }

    function spawnTeam(t: 'P1' | 'P2', colors: { body: number, tires: number }): void {
        updateLayoutCache();
        const wantedCount = Math.ceil(gameState.word.length * 1.5);
        const count = Math.max(gameState.word.length, Math.min(10, wantedCount));
        const chars: string[] = [...gameState.word];

        // Collect all characters from the current mission list as a pool for noise
        const allPossibleChars = gameStore.gameData.flatMap(d => d.answer.split(''));
        const noisePool = [...new Set(allPossibleChars)].filter(c => !gameState.word.includes(c));

        // Shuffle noise pool and fill up to the desired count
        noisePool.sort(() => Math.random() - 0.5);
        let poolIdx = 0;
        while (chars.length < count && poolIdx < noisePool.length) {
            chars.push(noisePool[poolIdx++]);
        }

        chars.sort(() => Math.random() - 0.5);

        const adaptiveSize = layout.adaptiveSize;
        const spawnLimitX = layout.spawnLimitX;
        const rowSize = Math.ceil(chars.length / 2);

        chars.forEach((char, i) => {
            const rowIdx = Math.floor(i / rowSize);
            const posInRow = i % rowSize;
            const countInThisRow = (rowIdx === 0) ? rowSize : (chars.length - rowSize);
            const spacing = (spawnLimitX * 2.0) / (countInThisRow + 1);
            const rowXOffset = (rowIdx % 2 === 1) ? (spacing * 0.45) : 0;
            const spawnX = -spawnLimitX + (posInRow + 1) * spacing - (rowXOffset / 2) + (Math.random() - 0.5) * 6;
            const barrierEdge = 15;
            const screenEdge = adaptiveSize - 3;
            const totalRows = Math.ceil(chars.length / rowSize);
            const availableDepth = Math.max(10, screenEdge - barrierEdge);
            const idealStep = 14;
            const neededDepth = (totalRows - 1) * idealStep;
            let actualStep = idealStep;
            if (totalRows > 1 && neededDepth > availableDepth) actualStep = availableDepth / (totalRows - 1);
            const depthStress = Math.min(1, neededDepth / availableDepth);
            const randRange = (1 - depthStress) * 4 + 2;
            const rowZ = barrierEdge + (rowIdx * actualStep) + 3;
            const safeTargetZ = Math.min(rowZ, screenEdge);
            const direction = t === 'P1' ? 1 : -1;
            const finalTargetEntryZ = direction * (safeTargetZ + (Math.random() - 0.5) * randRange);
            const spawnZ = finalTargetEntryZ + (direction * 35);

            const car = new GameCar(cars.length, spawnX, spawnZ, colors, char, t);
            car.targetEntryZ = finalTargetEntryZ;
            const randomAng = (Math.random() - 0.5) * 0.4;
            car.body.quaternion.setFromEuler(0, (t === 'P1' ? Math.PI : 0) + randomAng, 0);
            car.entrySpeedMult = 0.8 + Math.random() * 0.6;
            cars.push(car);
        });
    }

    const dragState = {
        car: null as GameCar | null,
        isDragging: false,
        startPos: new THREE.Vector2(),
        startRot: new CANNON.Quaternion(),
        targetPos: new THREE.Vector3(),
        plane: new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
        rect: null as DOMRect | null
    };

    function nextMission() {
        gameState.currentIndex++;
        if (gameState.currentIndex >= gameStore.gameData.length) {
            options.onComplete();
            return;
        }
        cars.forEach(c => { scene.remove(c.mesh); world.removeBody(c.body); }); cars.length = 0;
        dogs.forEach(d => d.destroy()); dogs.length = 0;
        obstacles.forEach(o => { scene.remove(o.mesh); world.removeBody(o.body); }); obstacles.length = 0;
        const toRemove: THREE.Object3D[] = [];
        scene.traverse(child => { if (child.name && child.name.startsWith('spot_')) toRemove.push(child); });
        toRemove.forEach(obj => scene.remove(obj));
        initRound();
    }

    function onPointerDown(e: PointerEvent) {
        if (entryBarriers.length > 0) {
            entryBarriers.forEach(b => { scene.remove(b.mesh); world.removeBody(b.body); });
            entryBarriers = [];
        }
        const rect = container.getBoundingClientRect();
        dragState.rect = rect;
        t_m_pos.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
        dragState.startPos.set(e.clientX, e.clientY);
        t_raycaster.setFromCamera(t_m_pos, camera);
        const hits = t_raycaster.intersectObjects(scene.children, true);
        for (const h of hits) {
            if (h.object.name && (h.object.name.startsWith('spot_'))) {
                options.onSpeak(gameState.currentData?.answer || '');
                break;
            }
            let o: THREE.Object3D | null = h.object;
            while (o && o.userData.carId === undefined && o.parent && o.parent.type !== 'Scene') o = o.parent;
            if (o && o.userData.carId !== undefined) {
                const c = cars.find(car => car.id === o!.userData.carId);
                if (c && !c.isParkedFinal && Math.abs(c.body.position.z) < 135) {
                    c.isEntering = false;
                    dragState.car = c;
                    dragState.isDragging = false;
                    dragState.startRot.copy(c.body.quaternion);
                    t_raycaster.ray.intersectPlane(dragState.plane, dragState.targetPos);
                    break;
                }
            }
        }
    }

    function onPointerMove(e: PointerEvent) {
        if (!dragState.car) return;
        if (!dragState.isDragging) {
            const dist = Math.sqrt(Math.pow(e.clientX - dragState.startPos.x, 2) + Math.pow(e.clientY - dragState.startPos.y, 2));
            if (dist > 5) dragState.isDragging = true;
        }
        if (dragState.isDragging) {
            const rect = dragState.rect || container.getBoundingClientRect();
            t_m_pos.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
            t_raycaster.setFromCamera(t_m_pos, camera);
            t_raycaster.ray.intersectPlane(dragState.plane, dragState.targetPos);
            if (dragState.car.isParking) dragState.car.stuckTimer = 0;
        }
    }

    function onPointerUp() {
        if (dragState.car) {
            if (!dragState.isDragging) {
                const c = dragState.car;
                if (!c.isParking && !c.isParkedFinal) {
                    options.onSpeak(c.char);
                    const result = findTargetSpot(c.char, c.team, spots, cars, gameState.nextSlotIndex);
                    if (result) {
                        c.park(result.spot);
                        if (result.isUnlock) gameState.nextSlotIndex++;
                    } else {
                        options.onParkFail();
                        c.shake();
                    }
                } else {
                    c.shake();
                    if (c.isParking) c.boost();
                }
            }
            dragState.car = null; dragState.isDragging = false;
        }
    }

    initScene();
    container.addEventListener('pointerdown', onPointerDown as any);
    document.addEventListener('pointermove', onPointerMove as any);
    document.addEventListener('pointerup', onPointerUp as any);

    onUnmounted(() => {
        cancelAnimationFrame(animationId);
        container.removeEventListener('pointerdown', onPointerDown as any);
        document.removeEventListener('pointermove', onPointerMove as any);
        document.removeEventListener('pointerup', onPointerUp as any);
        window.removeEventListener('resize', updateCamera);
        renderer.dispose();
    });

    return { scores, gameState };
}
