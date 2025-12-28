import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { onUnmounted, watch } from 'vue';
import { vocabularyStore } from '../store/vocabulary';
import { settings } from '../store/settings';
import { createCarMesh, createTextTexture, createRoundedExtrude } from '../utils/carMesh';

// --- Configuration ---
const CAR_MASS = 2000;
const OBSTACLE_MASS = 80;
const DRIVE_FORCE = 350000;
const MAX_VELOCITY = 100;
const BOOST_IMPULSE = 15000;
const VIEW_SIZE = 36;
const COLLISION_KNOCKBACK = 50000;
const DEBUG_WALLS = false; // Set to true to see invisible walls

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
    onParkFail: () => void
}) {
    let scene: THREE.Scene, camera: THREE.OrthographicCamera, renderer: THREE.WebGLRenderer, world: CANNON.World;
    let groundMesh: THREE.Mesh, groundBody: CANNON.Body;

    const cars: GameCar[] = [];
    const spots: { char: string, occupied: boolean, x: number, z: number, winnerTeam: string | null }[] = [];
    const obstacles: { mesh: THREE.Mesh, body: CANNON.Body }[] = [];
    const dogs: StrayDog[] = [];
    const walls: { body: CANNON.Body, mesh: THREE.Mesh }[] = [];
    let entryBarriers: { mesh: THREE.Mesh, body: CANNON.Body }[] = [];
    let exitFinishedTime = 0;

    let scores = { P1: 0, P2: 0 };
    let gameState = {
        word: [] as string[],
        currentQ: '',
        currentExp: '',
        nextSlotIndex: 0,
        isGameOver: false,
        gameOverTime: 0,
        isClearing: false,
        currentWordIndex: 0
    };

    const matCar = new CANNON.Material('car');
    const matGround = new CANNON.Material('ground');
    const matObstacle = new CANNON.Material('obstacle');

    // --- Helpers ---
    function getRandomDarkWarmColor() {
        // Random dark warm colors (Browns, Deep Reds, Dark Oranges)
        const color = new THREE.Color();
        const hue = Math.random() * 0.12; // 0 to 0.12 (Red to Yellow-Orange)
        const saturation = 0.4 + Math.random() * 0.4;
        const lightness = 0.15 + Math.random() * 0.15;
        color.setHSL(hue, saturation, lightness);
        return color;
    }

    // --- Car Class ---
    class GameCar {
        mesh: THREE.Group; body: CANNON.Body; id: number; char: string; team: 'P1' | 'P2';
        isParking = false; targetSpot: typeof spots[0] | null = null; isParkedFinal = false;
        lightBeams!: THREE.Group; isExiting = false; exitTargetZ = 0;
        isEntering = true; targetEntryZ = 0; entrySpeedMult = 1;
        shakeTime = 0;
        stuckTimer = 0;
        reverseTimer = 0; // New reversing timer

        constructor(id: number, x: number, z: number, color: number, char: string, team: 'P1' | 'P2') {
            this.id = id; this.char = char; this.team = team;
            this.mesh = createCarMesh(color, char);
            this.updateColor(color); // Apply initial color

            // Re-bind lightBeams reference from the standardized mesh
            const beams = this.mesh.getObjectByName('light_beams');
            if (beams instanceof THREE.Group) {
                this.lightBeams = beams;
            } else {
                // Fallback (should not happen if utility is correct)
                this.lightBeams = new THREE.Group();
                this.mesh.add(this.lightBeams);
            }

            scene.add(this.mesh);
            this.body = new CANNON.Body({ mass: CAR_MASS, material: matCar, linearDamping: 0.75, angularDamping: 0.95 });

            // Physics shape must match the new mesh visuals
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
            if (this.isParkedFinal) return;
            for (const other of allCars) {
                if (other === this || other.isExiting) continue;
                const dist = this.body.position.distanceTo(other.body.position);
                const minDist = 6.0; // Minimal safe distance (car width ~4.5, length ~8.5)
                if (dist < minDist) {
                    const dir = this.body.position.vsub(other.body.position);
                    dir.y = 0;
                    if (dir.length() < 0.1) dir.x = 1;
                    const force = (minDist - dist) * 50000;
                    this.body.applyImpulse(dir.unit().scale(force), new CANNON.Vec3(0, 0, 0));
                }
            }
        }

        update() {
            // Velocity Clamping to prevent physics "explosions"
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
                this.mesh.position.y += Math.abs(s) * 1.2; // Hop
                this.mesh.rotation.z += s * 0.2; // Tilt
            }

            // Keep cars grounded: Damp Y velocity only if it starts flying
            if (!this.isParkedFinal && Math.abs(this.body.velocity.y) > 0.1) {
                this.body.velocity.y *= 0.8;
            }

            if (this.isExiting) {
                this.body.collisionFilterMask = GROUP_GROUND | GROUP_OBSTACLE | GROUP_CAR;
            } else if (this.isEntering) {
                // Now that walls shrink, we can keep the wall collision ACTIVE even during entry
                // The walls start wide and push everyone in!
                this.body.collisionFilterMask = GROUP_GROUND | GROUP_OBSTACLE | GROUP_CAR | GROUP_WALL | GROUP_BARRIER;
            } else {
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

            // Lock orientation/physics during entry to prevent spinning or reversing from collisions
            this.body.quaternion.setFromEuler(0, isP1 ? Math.PI : 0, 0);
            this.body.angularVelocity.set(0, 0, 0);

            // If we've reached or passed the target Z in the correct direction
            if ((direction === -1 && dz > -0.5) || (direction === 1 && dz < 0.5)) {
                this.isEntering = false;
                this.body.velocity.set(0, 0, 0);
                this.body.force.set(0, 0, 0); // Explicitly kill engine force
                return;
            }

            const speed = 1.5;
            // Use world-space direction instead of local forward to ensure it always moves towards parking
            const forceVec = new CANNON.Vec3(0, 0, direction * DRIVE_FORCE * 1.2 * this.entrySpeedMult * speed);
            this.body.applyForce(forceVec, new CANNON.Vec3(0, 0, 0));
            this.body.velocity.x *= 0.95;
        }

        driveToExit() {
            const tarZ = this.exitTargetZ;
            const dx = 0 - this.body.position.x; const dz = tarZ - this.body.position.z;
            const tAng = Math.atan2(dx, dz); const fwd = new CANNON.Vec3(0, 0, 1); this.body.quaternion.vmult(fwd, fwd);
            const cAng = Math.atan2(fwd.x, fwd.z); let diff = tAng - cAng;
            while (diff > Math.PI) diff -= Math.PI * 2; while (diff < -Math.PI) diff += Math.PI * 2;
            this.body.angularVelocity.y = diff * 5;
            const speed = 1.8; // Fixed fast speed for exit
            if (Math.cos(diff) > 0.1) this.body.applyForce(fwd.scale(DRIVE_FORCE * speed), new CANNON.Vec3(0, 0, 0));
        }

        driveToTarget() {
            if (!this.targetSpot) return;
            if (this.targetSpot.occupied) { this.isParking = false; this.targetSpot = null; this.body.velocity.set(0, 0, 0); this.body.angularVelocity.set(0, 0, 0); return; }

            const tar = new CANNON.Vec3(this.targetSpot.x, 0.5, this.targetSpot.z);
            const dx = tar.x - this.body.position.x; const dz = tar.z - this.body.position.z; const d = Math.sqrt(dx * dx + dz * dz);

            // Calculate angle FIRST to decide if we can park
            const tAng = Math.atan2(dx, dz);
            const fwd = new CANNON.Vec3(0, 0, 1); this.body.quaternion.vmult(fwd, fwd);
            const cAng = Math.atan2(fwd.x, fwd.z);
            let diff = tAng - cAng;
            while (diff > Math.PI) diff -= Math.PI * 2; while (diff < -Math.PI) diff += Math.PI * 2;
            const absDiff = Math.abs(diff);

            // --- Wall Avoidance (Nudge away from Z boundaries) ---
            const zBound = (container.clientHeight > container.clientWidth ? VIEW_SIZE / ((container.clientWidth / container.clientHeight) * 1.5) : VIEW_SIZE) * 0.9;
            if (Math.abs(this.body.position.z) > zBound) {
                const nudge = this.body.position.z > 0 ? -100000 : 100000;
                this.body.applyForce(new CANNON.Vec3(0, 0, nudge), new CANNON.Vec3(0, 0, 0));
            }

            // Only finish if close AND reasonably aligned (not parking backwards)
            if (d < 1.8 && absDiff < 1.2) { this.finishParking(tar); return; }

            const sMult = this.team === 'P1' ? options.p1Speed.value : options.p2Speed.value;

            // --- Reversing Logic (for adjusting angle) ---
            if (this.reverseTimer > 0) {
                this.reverseTimer--;
                this.body.angularVelocity.y = -Math.sin(diff) * 5;
                const revForce = DRIVE_FORCE * 0.8 * sMult;
                this.body.applyForce(fwd.scale(-revForce), new CANNON.Vec3(0, 0, 0));

                const side = new CANNON.Vec3(0, 1, 0).cross(fwd, new CANNON.Vec3());
                this.body.velocity.x -= side.x * this.body.velocity.dot(side) * 0.95;
                this.body.velocity.z -= side.z * this.body.velocity.dot(side) * 0.95;
                return;
            }

            // --- Forward Logic ---

            // Trigger Reverse if:
            // 1. Facing completely away (> 115 deg)
            // 2. Getting close (< 20) but angle is bad (> 60 deg), forcing a maneuver
            if ((absDiff > 2.0) || (d < 20 && absDiff > 1.0 && this.body.velocity.length() < 5)) {
                this.reverseTimer = 50; // Reverse for a bit less than 1s
                return;
            }

            // Normal driving
            this.body.angularVelocity.y = diff * 5;

            if (Math.cos(diff) > 0.1) {
                const force = DRIVE_FORCE * Math.min(1, d / 6) * sMult;
                this.body.applyForce(fwd.scale(force), new CANNON.Vec3(0, 0, 0));
            }

            const side = new CANNON.Vec3(0, 1, 0).cross(fwd, new CANNON.Vec3());
            this.body.velocity.x -= side.x * this.body.velocity.dot(side) * 0.8; // Reduced damping to allow more sliding
            this.body.velocity.z -= side.z * this.body.velocity.dot(side) * 0.8;
        }

        boost() { if (this.isParkedFinal) return; const f = new CANNON.Vec3(0, 0, 1); this.body.quaternion.vmult(f, f); this.body.applyImpulse(f.scale(BOOST_IMPULSE), new CANNON.Vec3(0, 0, 0)); }
        shake() {
            this.shakeTime = 0.4;
            if (!this.isParkedFinal) {
                // Apply a physical "hop" and nudge to unstick the car
                this.body.applyImpulse(new CANNON.Vec3(0, 2000, 0), new CANNON.Vec3(0.5, 0, 0.5));
                const nudge = new CANNON.Vec3((Math.random() - 0.5) * 15000, 0, (Math.random() - 0.5) * 15000);
                this.body.applyImpulse(nudge, new CANNON.Vec3(0, 0, 0));
            }
        }

        finishParking(tar: CANNON.Vec3) {
            if (this.targetSpot!.occupied) { this.isParking = false; this.targetSpot = null; return; }
            this.targetSpot!.occupied = true; this.isParkedFinal = true; this.isParking = false;
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

        updateColor(color: number) {
            this.mesh.traverse(child => {
                if (child instanceof THREE.Mesh && child.name === 'car_body') {
                    if (child.material instanceof THREE.MeshStandardMaterial) {
                        child.material.color.set(color);
                    }
                }
            });
        }
        park(spot: typeof spots[0]) { this.targetSpot = spot; this.isParking = true; this.body.wakeUp(); }
        exit() {
            this.isExiting = true; this.isParkedFinal = false; this.isParking = false;
            this.body.type = CANNON.Body.DYNAMIC; this.body.mass = CAR_MASS; this.body.updateMassProperties();
            this.exitTargetZ = this.team === 'P1' ? 150 : -150; this.body.wakeUp();
        }
    }

    // --- Stray Dog Class ---
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
            const dr = 0.5; // Dog roundness radius

            // Body (Rounded)
            const bodyGeo = createRoundedExtrude(1.8, 3.0, 1.2, dr);
            const body = new THREE.Mesh(bodyGeo, dMat);
            body.rotation.x = Math.PI / 2; body.position.y = 1.3; body.castShadow = true;
            this.mesh.add(body);

            // Head (Rounded)
            const headGeo = createRoundedExtrude(1.2, 1.2, 1.2, dr * 0.8);
            const head = new THREE.Mesh(headGeo, dMat);
            head.rotation.x = Math.PI / 2; head.position.set(0, 2.0, 1.5); head.castShadow = true;
            this.mesh.add(head);

            // Ears (Small Rounded)
            const eMat = new THREE.MeshStandardMaterial({ color: 0x5d2e0d });
            const earGeo = createRoundedExtrude(0.4, 0.4, 0.8, 0.15);
            const earL = new THREE.Mesh(earGeo, eMat);
            earL.rotation.x = Math.PI / 2; earL.position.set(0.5, 2.6, 1.5); this.mesh.add(earL);
            const earR = new THREE.Mesh(earGeo, eMat);
            earR.rotation.x = Math.PI / 2; earR.position.set(-0.5, 2.6, 1.5); this.mesh.add(earR);
            // Collar (Team Color Indicator)
            if (this.team) {
                const collarMat = new THREE.MeshStandardMaterial({
                    color: this.team === 'P1' ? settings.p1Color : settings.p2Color,
                    emissive: this.team === 'P1' ? settings.p1Color : settings.p2Color,
                    emissiveIntensity: 0.5
                });
                const collarGeo = createRoundedExtrude(1.3, 1.3, 0.3, 0.1);
                const collar = new THREE.Mesh(collarGeo, collarMat);
                collar.rotation.x = Math.PI / 2; collar.position.set(0, 1.8, 1.0);
                this.mesh.add(collar);
            }

            // Legs (Rounded)
            const lGeo = createRoundedExtrude(0.5, 0.5, 1.0, 0.25);
            const lPos = [[0.6, 0.5, 1.0], [-0.6, 0.5, 1.0], [0.6, 0.5, -1.0], [-0.6, 0.5, -1.0]];
            lPos.forEach(p => {
                const l = new THREE.Mesh(lGeo, dMat);
                l.rotation.x = Math.PI / 2; l.position.set(p[0], p[1], p[2]);
                this.mesh.add(l);
                this.legs.push(l);
            });

            // Tail (Rounded & Wagging)
            const tailGeo = createRoundedExtrude(0.3, 1.0, 0.3, 0.1);
            this.tail = new THREE.Mesh(tailGeo, dMat);
            this.tail.rotation.x = Math.PI / 2;
            this.tail.position.set(0, 1.5, -1.5); // At the back
            this.mesh.add(this.tail);

            scene.add(this.mesh);
            this.body = new CANNON.Body({ mass: 10, material: matObstacle });
            this.body.addShape(new CANNON.Box(new CANNON.Vec3(0.9, 0.6, 1.5)));
            this.body.position.set(x, 0.5, z);
            this.body.collisionFilterGroup = GROUP_OBSTACLE;
            this.body.collisionFilterMask = GROUP_GROUND | GROUP_CAR | GROUP_OBSTACLE;
            world.addBody(this.body);
            this.body.angularFactor.set(0, 1, 0); // Lock rotation to Y axis (no flipping)
            this.body.quaternion.set(0, 0, 0, 1); // Ensure starting upright
            this.pickNewTarget();
        }

        pickNewTarget() {
            if (this.team && !gameState.isGameOver && spots.length > 0) {
                const nextSpot = spots.find((s, idx) => !s.occupied && idx >= gameState.nextSlotIndex);
                if (nextSpot) {
                    // Find a car of the same team with this char that isn't parked
                    const targetCar = cars.find(c => c.team === this.team && c.char === nextSpot.char && !c.isParkedFinal && !c.isParking);
                    if (targetCar) {
                        // Target is now the CAR's position
                        this.target.copy(targetCar.mesh.position as any);
                        this.state = 'walking';
                        this.timer = 60; // Refresh quickly to follow movement
                        return;
                    }
                }
            }
            // Fallback: random wandering if no specific car needs attention
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

            // Team dogs: Follow the correct car dynamically
            if (this.team && !gameState.isGameOver) {
                const nextSpot = spots.find((s, idx) => !s.occupied && idx >= gameState.nextSlotIndex);
                if (nextSpot) {
                    const targetCar = cars.find(c => c.team === this.team && c.char === nextSpot.char && !c.isParkedFinal && !c.isParking);
                    if (targetCar) {
                        // Point towards the car's current position
                        this.target.copy(targetCar.mesh.position as any);
                        // Offset slightly so it follows "behind" or "beside" instead of colliding
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
                    this.timer = this.team ? 10 : 60 + Math.random() * 120; // Team dogs stay alert
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
                    const speed = this.team ? 12 : 8; // Team dogs run faster
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

            // Always wag the tail if it's happy (walking) or just alive
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
        sun.position.set(0, 200, 0); // Perfectly centered top-down
        sun.castShadow = true;
        sun.shadow.camera.left = -200; sun.shadow.camera.right = 200;
        sun.shadow.camera.top = 200; sun.shadow.camera.bottom = -200;
        sun.shadow.camera.near = 1;
        sun.shadow.camera.far = 400;
        sun.shadow.bias = 0.0001; // Small positive bias to fix shadow acne/floating
        sun.shadow.mapSize.set(2048, 2048);
        scene.add(sun);

        world = new CANNON.World(); world.gravity.set(0, -9.82, 0);
        if (world.solver instanceof CANNON.GSSolver) world.solver.iterations = 50; // Increased iterations
        world.allowSleep = false;
        world.addContactMaterial(new CANNON.ContactMaterial(matCar, matGround, { friction: 0.05, restitution: 0.1 }));
        world.addContactMaterial(new CANNON.ContactMaterial(matCar, matObstacle, { friction: 0.02, restitution: 0.1 })); // Very slippery
        world.addContactMaterial(new CANNON.ContactMaterial(matCar, matCar, { friction: 0.05, restitution: 0.0 })); // Prevent rear-sticking

        const gMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.8, metalness: 0 });
        groundMesh = new THREE.Mesh(new THREE.PlaneGeometry(1000, 1000), gMat); groundMesh.rotation.x = -Math.PI / 2; groundMesh.receiveShadow = true; scene.add(groundMesh);
        groundBody = new CANNON.Body({ mass: 0, material: matGround }); groundBody.addShape(new CANNON.Plane()); groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0); world.addBody(groundBody);

        addYellowLines(-200, 200, -15, 15);

        // Walls (Boundary) - Sharing style with barriers
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
            mesh.raycast = () => { }; // Fix: Walls should not block clicks
            scene.add(mesh);
            walls.push({ body, mesh });
        }
        updateCamera(); // Initialize wall shapes based on current view

        window.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === 't') spawnTestCar();
        });

        initRound();

        // Reactive color updates
        watch(() => settings.p1Color, (newCol) => {
            if (newCol === undefined) return;
            cars.filter(c => c.team === 'P1').forEach(c => c.updateColor(newCol));
        });
        watch(() => settings.p2Color, (newCol) => {
            if (newCol === undefined) return;
            cars.filter(c => c.team === 'P2').forEach(c => c.updateColor(newCol));
        });

        animate();
    }

    function spawnTestCar() {
        const t = Math.random() > 0.5 ? 'P1' : 'P2';
        const car = new GameCar(cars.length, 0, 0, 0xffffff, 'T', t);
        car.isEntering = false;
        // Launch it at high speed in a random direction
        const ang = Math.random() * Math.PI * 2;
        car.body.velocity.set(Math.cos(ang) * 150, 0, Math.sin(ang) * 150);
        cars.push(car);
        console.log("Test Car Spawned!");
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

    // Dynamic wall shrinking variables step
    let wallScale = 5.0;
    let lastReshapeScale = 0;

    function updateWalls() {
        if (walls.length !== 4) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        const aspect = w / h;
        const adaptiveSize = h > w ? VIEW_SIZE / (aspect * 1.5) : VIEW_SIZE;

        // Shrink at a steady pace
        if (wallScale > 1.0) {
            wallScale -= 0.04;
            if (wallScale < 1.0) wallScale = 1.0;
        }

        const limitX = (adaptiveSize * aspect + 0.5) * wallScale;
        // LimitZ should precisely stop at the 60px function area. 
        // Offset = (60px / h) * (adaptiveSize * 2) = 120 * adaptiveSize / h
        const limitZ = (adaptiveSize * (1 - 120 / h) + 0.5) * wallScale;
        const thick = 50; const wallH = 100; const visibleThick = 1.0;

        const needsReshape = Math.abs(wallScale - lastReshapeScale) > 0.1;
        if (needsReshape) lastReshapeScale = wallScale;

        // North
        walls[0].body.position.set(0, 0, -limitZ - thick / 2);
        if (needsReshape) {
            walls[0].body.shapes = [];
            walls[0].body.addShape(new CANNON.Box(new CANNON.Vec3(limitX + thick, wallH / 2, thick / 2)));
        }
        walls[0].mesh.position.set(0, wallH / 2, -limitZ + visibleThick / 2);
        walls[0].mesh.scale.set(limitX * 2 + 2, wallH, visibleThick);

        // South
        walls[1].body.position.set(0, 0, limitZ + thick / 2);
        if (needsReshape) {
            walls[1].body.shapes = [];
            walls[1].body.addShape(new CANNON.Box(new CANNON.Vec3(limitX + thick, wallH / 2, thick / 2)));
        }
        walls[1].mesh.position.set(0, wallH / 2, limitZ - visibleThick / 2);
        walls[1].mesh.scale.set(limitX * 2 + 2, wallH, visibleThick);

        // West
        walls[2].body.position.set(-limitX - thick / 2, 0, 0);
        if (needsReshape) {
            walls[2].body.shapes = [];
            walls[2].body.addShape(new CANNON.Box(new CANNON.Vec3(thick / 2, wallH / 2, limitZ + thick)));
        }
        walls[2].mesh.position.set(-limitX + visibleThick / 2, wallH / 2, 0);
        walls[2].mesh.scale.set(visibleThick, wallH, limitZ * 2 + 2);

        // East
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
        const separation = 2.5; // Wider gap
        const mat = new THREE.MeshBasicMaterial({ color: 0x996600 }); // Muted, less bright yellow

        // First Segment (from zStart to gapZMin)
        const len1 = gapZMin - zStart;
        if (len1 > 0) {
            const g1 = new THREE.PlaneGeometry(thickness, len1);
            const l1_1 = new THREE.Mesh(g1, mat); l1_1.rotation.x = -Math.PI / 2; l1_1.position.set(-separation / 2, 0.06, zStart + len1 / 2);
            l1_1.name = 'road_marking'; scene.add(l1_1);
            const l1_2 = new THREE.Mesh(g1, mat); l1_2.rotation.x = -Math.PI / 2; l1_2.position.set(separation / 2, 0.06, zStart + len1 / 2);
            l1_2.name = 'road_marking'; scene.add(l1_2);
        }

        // Second Segment (from gapZMax to zEnd)
        const len2 = zEnd - gapZMax;
        if (len2 > 0) {
            const g2 = new THREE.PlaneGeometry(thickness, len2);
            const l2_1 = new THREE.Mesh(g2, mat); l2_1.rotation.x = -Math.PI / 2; l2_1.position.set(-separation / 2, 0.06, gapZMax + len2 / 2);
            l2_1.name = 'road_marking'; scene.add(l2_1);
            const l2_2 = new THREE.Mesh(g2, mat); l2_2.rotation.x = -Math.PI / 2; l2_2.position.set(separation / 2, 0.06, gapZMax + len2 / 2);
            l2_2.name = 'road_marking'; scene.add(l2_2);
        }
    }

    function initRound() {
        wallScale = 5.0;
        const list = vocabularyStore.currentList.value;
        if (list.length === 0) return;
        const word = list[Math.floor(Math.random() * list.length)];
        gameState.word = (word.a || word.q).split('');
        gameState.currentQ = word.q;
        gameState.currentExp = (word.exps && word.exps.length > 0) ? `，${word.exps[0]}` : '';
        gameState.nextSlotIndex = 0;
        gameState.isGameOver = false;
        gameState.isClearing = false;

        spots.length = 0;
        const w = container.clientWidth;
        const h = container.clientHeight;
        const aspect = w / h;
        const adaptiveSize = h > w ? VIEW_SIZE / (aspect * 1.5) : VIEW_SIZE;

        const toRemove: THREE.Object3D[] = [];
        scene.traverse(child => {
            if (child.name && (child.name.startsWith('spot_') || child.name === 'road_marking')) {
                toRemove.push(child);
            }
        });
        toRemove.forEach(obj => scene.remove(obj));

        const numSpots = gameState.word.length;
        const fieldWidth = (adaptiveSize * aspect * 2) * 0.9;

        const sptSpacingX = 12;
        const sptSpacingZ = 16;
        const maxPerRow = Math.max(1, Math.floor(fieldWidth / sptSpacingX));
        const numRows = Math.ceil(numSpots / maxPerRow);
        const spotW = 7; const spotL = 11;

        let minZ = 0, maxZ = 0;

        for (let i = 0; i < numSpots; i++) {
            const row = Math.floor(i / maxPerRow);
            const col = i % maxPerRow;
            const spotsInThisRow = (row === numRows - 1) ? (numSpots % maxPerRow || maxPerRow) : maxPerRow;
            const x = (col - (spotsInThisRow - 1) / 2) * sptSpacingX;
            const z = (row - (numRows - 1) / 2) * sptSpacingZ;

            if (i === 0) { minZ = z; maxZ = z; }
            else { minZ = Math.min(minZ, z); maxZ = Math.max(maxZ, z); }

            spots.push({ char: gameState.word[i], occupied: false, x, z, winnerTeam: null });

            const lineMat = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.6, emissive: 0xffffff, emissiveIntensity: 0.2 });
            const top = new THREE.Mesh(new THREE.PlaneGeometry(spotW, 0.3), lineMat);
            top.rotation.x = -Math.PI / 2; top.position.set(x, 0.07, z - spotL / 2); top.name = `spot_frame_${i}_t`; scene.add(top);
            const bottom = new THREE.Mesh(new THREE.PlaneGeometry(spotW, 0.3), lineMat);
            bottom.rotation.x = -Math.PI / 2; bottom.position.set(x, 0.07, z + spotL / 2); bottom.name = `spot_frame_${i}_b`; scene.add(bottom);
            const left = new THREE.Mesh(new THREE.PlaneGeometry(0.3, spotL), lineMat);
            left.rotation.x = -Math.PI / 2; left.position.set(x - spotW / 2, 0.07, z); left.name = `spot_frame_${i}_l`; scene.add(left);
            const right = new THREE.Mesh(new THREE.PlaneGeometry(0.3, spotL), lineMat);
            right.rotation.x = -Math.PI / 2; right.position.set(x + spotW / 2, 0.07, z); right.name = `spot_frame_${i}_r`; scene.add(right);

            const lblSize = 5.0; // Larger labels
            const lbl = new THREE.Mesh(new THREE.PlaneGeometry(lblSize, lblSize), new THREE.MeshStandardMaterial({
                map: createTextTexture(gameState.word[i], '#00000000', 'rgba(255,255,255,0.4)'),
                transparent: true, emissive: 0xffffff, emissiveIntensity: 0.1
            }));
            lbl.name = `spot_label_${i}`; lbl.rotation.x = -Math.PI / 2; lbl.position.set(x, 0.08, z); lbl.raycast = () => { }; scene.add(lbl);
        }

        // Add dynamic road markings
        const gapPadding = 10;
        addYellowLines(-200, 200, minZ - gapPadding, maxZ + gapPadding);

        // Guide Dogs for each player
        dogs.push(new StrayDog(-20, 0, 0xd2b48c, 'P1')); // Tan dog for P1
        dogs.push(new StrayDog(20, 0, 0xffffff, 'P2'));  // White dog for P2

        for (let i = 0; i < 15; i++) {
            const s = 2 + Math.random() * 3;
            const pos = new CANNON.Vec3((Math.random() - 0.5) * 110, s / 2, (Math.random() - 0.5) * (maxZ - minZ + 20));
            const mesh = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), new THREE.MeshStandardMaterial({
                color: getRandomDarkWarmColor(), metalness: 0.6, roughness: 0.4
            }));
            mesh.castShadow = true; mesh.receiveShadow = true; scene.add(mesh);
            const bb = new CANNON.Body({ mass: OBSTACLE_MASS, material: matObstacle, position: pos });
            bb.addShape(new CANNON.Box(new CANNON.Vec3(s / 2, s / 2, s / 2))); world.addBody(bb);
            obstacles.push({ mesh, body: bb });
        }

        // Add Entry Barriers
        const barrierHeight = 15; const bThickness = 2; // Thinner barrier
        const bMatMesh = new THREE.MeshStandardMaterial({
            color: 0xff00ff,
            transparent: true,
            opacity: 0.3,
            visible: DEBUG_WALLS
        });
        const bZPos = [maxZ + gapPadding, minZ - gapPadding]; // Align precisely with yellow line gaps
        bZPos.forEach(bz => {
            const body = new CANNON.Body({ mass: 0 });
            body.addShape(new CANNON.Box(new CANNON.Vec3(150, barrierHeight / 2, bThickness / 2)));
            body.position.set(0, barrierHeight / 2, bz);
            body.collisionFilterGroup = GROUP_BARRIER; body.collisionFilterMask = GROUP_CAR;
            world.addBody(body);
            const mesh = new THREE.Mesh(new THREE.BoxGeometry(300, barrierHeight, bThickness), bMatMesh);
            mesh.position.set(0, barrierHeight / 2, bz);
            mesh.raycast = () => { }; // Fix: Barriers should not block clicks
            scene.add(mesh);
            entryBarriers.push({ mesh, body });
        });

        spawnTeam('P1', maxZ + 22, settings.p1Color || 0x0164e8);
        spawnTeam('P2', minZ - 22, settings.p2Color || 0xe81123);

        options.onSpeak(gameState.currentQ + gameState.currentExp);
    }

    function spawnTeam(t: 'P1' | 'P2', zBase: number, col: number) {
        // Each team gets at least 4 cars, or 1.5x the word length (ceil)
        const count = Math.max(4, Math.ceil(gameState.word.length * 1.5));

        const isZhuyin = gameState.word.some(c => /[\u3105-\u3129\u312A-\u312F\u02CA\u02C7\u02CB\u02D9]/.test(c));
        const alphabet = isZhuyin
            ? 'ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄧㄨㄩㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦˊˇˋ'.split('')
            : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

        const chars: string[] = [];
        // 1. Ensure each char of the target word is present at least once
        for (let i = 0; i < gameState.word.length; i++) {
            chars.push(gameState.word[i]);
        }
        // 2. Fill the rest with random distraction characters from the alphabet
        while (chars.length < count) {
            const randChar = alphabet[Math.floor(Math.random() * alphabet.length)];
            // Avoid adding the exact same character if it's already in the word (optional, but makes it cleaner)
            if (!gameState.word.includes(randChar)) {
                chars.push(randChar);
            }
        }
        chars.sort(() => Math.random() - 0.5);

        const aspect = container.clientWidth / container.clientHeight;
        const adaptiveSize = container.clientHeight > container.clientWidth ? VIEW_SIZE / (aspect * 1.5) : VIEW_SIZE;
        const spawnLimitX = (adaptiveSize * aspect) * 0.8;

        chars.forEach((char, i) => {
            const spawnZ = t === 'P1' ? 140 : -140;
            const spacing = (spawnLimitX * 2) / (chars.length + 1);
            const spawnX = -spawnLimitX + (i + 1) * spacing + (Math.random() - 0.5) * 5;

            const car = new GameCar(cars.length, spawnX, spawnZ, col, char, t);
            const randomAng = (Math.random() - 0.5) * 0.4;
            car.body.quaternion.setFromEuler(0, (t === 'P1' ? Math.PI : 0) + randomAng, 0);
            car.body.quaternion.setFromEuler(0, (t === 'P1' ? Math.PI : 0) + randomAng, 0);
            car.targetEntryZ = zBase + (Math.random() - 0.5) * 10;
            car.entrySpeedMult = 1.0 + Math.random() * 0.8;
            cars.push(car);
        });
    }

    let animationId: number;
    function animate() {
        animationId = requestAnimationFrame(animate);
        world.step(1 / 60);

        updateWalls();

        if (!gameState.isGameOver) {
            // Sequential pointer for UI/Guide
            while (gameState.nextSlotIndex < spots.length && spots[gameState.nextSlotIndex].occupied) {
                gameState.nextSlotIndex++;
            }
            // Check absolute completion: All spots must be occupied
            if (spots.every(s => s.occupied)) {
                gameState.isGameOver = true; gameState.gameOverTime = Date.now();
                options.onSpeak(gameState.currentQ);
            }
        } else if (!gameState.isClearing) {
            if (Date.now() - gameState.gameOverTime > 800) {
                gameState.isClearing = true;
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

        // Apply drag force
        if (dragState.isDragging && dragState.car) {
            const car = dragState.car;
            const body = car.body;
            // P-Controller for linear velocity
            const speed = 20;
            body.velocity.x = (dragState.targetPos.x - body.position.x) * speed;
            body.velocity.z = (dragState.targetPos.z - body.position.z) * speed;

            if (!car.isParking) {
                // If NOT parking, lock its orientation to the starting angle
                body.angularVelocity.set(0, 0, 0);
                body.quaternion.copy(dragState.startRot);
            } else {
                // If parking, let driveToTarget() handle the rotation logic.
                // We don't zero angularVelocity here so the car keeps steering towards target.
            }
        }

        // Also clamp obstacle velocities
        obstacles.forEach(o => {
            const v = o.body.velocity;
            if (v.length() > MAX_VELOCITY) v.scale(MAX_VELOCITY / v.length(), v);
            o.mesh.position.copy(o.body.position as any);
            o.mesh.quaternion.copy(o.body.quaternion as any);
        });
        renderer.render(scene, camera);
    }

    // Drag State
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
        cars.forEach(c => { scene.remove(c.mesh); world.removeBody(c.body); }); cars.length = 0;
        dogs.forEach(d => d.destroy()); dogs.length = 0;
        obstacles.forEach(o => { scene.remove(o.mesh); world.removeBody(o.body); }); obstacles.length = 0;

        const toRemove: THREE.Object3D[] = [];
        scene.traverse(child => {
            if (child.name && (child.name.startsWith('spot_') || child.name === 'mission_complete_label')) {
                toRemove.push(child);
            }
        });
        toRemove.forEach(obj => scene.remove(obj));

        initRound();
    }

    function removeEntryBarriers() {
        if (entryBarriers.length === 0) return;
        entryBarriers.forEach(b => {
            scene.remove(b.mesh);
            world.removeBody(b.body);
        });
        entryBarriers = [];
    }

    function onPointerDown(e: PointerEvent) {
        removeEntryBarriers();
        const rect = container.getBoundingClientRect();
        dragState.rect = rect;
        const m = new THREE.Vector2(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
        dragState.startPos.set(e.clientX, e.clientY);

        const ray = new THREE.Raycaster(); ray.setFromCamera(m, camera);
        const hits = ray.intersectObjects(scene.children, true);

        // More detailed Logging
        console.log(`Click detected. Hits: ${hits.length}`);
        hits.forEach((h, i) => console.log(` Hit ${i}: ${h.object.name || 'unnamed'} (Parent: ${h.object.parent?.name || 'none'})`));

        let carFound = false;
        for (const h of hits) {
            let o: THREE.Object3D | null = h.object;
            // Climb hierarchy to find carId on any hit object
            while (o && o.userData.carId === undefined && o.parent) o = o.parent;

            if (o && o.userData.carId !== undefined) {
                const id = o.userData.carId;
                const c = cars.find(car => car.id === id);
                if (c) {
                    console.log(`Found Car ID: ${id}, Team: ${c.team}, isEntering: ${c.isEntering}, isParkedFinal: ${c.isParkedFinal}, Z: ${c.body.position.z.toFixed(1)}`);

                    // Allow interaction if not fully parked AND it has at least started to enter the main area
                    // (abs Z < 135 means it's no longer way out in the spawn zone)
                    if (!c.isParkedFinal && Math.abs(c.body.position.z) < 135) {
                        dragState.car = c;
                        dragState.isDragging = false;
                        dragState.startRot.copy(c.body.quaternion); // Lock initial rotation
                        ray.ray.intersectPlane(dragState.plane, dragState.targetPos);
                        carFound = true;
                        console.log("-> SUCCESS: Car selected for drag/click.");
                        break;
                    } else {
                        console.log(`-> REJECTED: Car state or position not valid for interaction.`);
                    }
                }
            }
        }
        if (!carFound) {
            console.warn("No car found at click position.");
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
            const m = new THREE.Vector2(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
            const ray = new THREE.Raycaster(); ray.setFromCamera(m, camera);
            ray.ray.intersectPlane(dragState.plane, dragState.targetPos);

            // Keep parking active but prevent stuck logic from firing
            if (dragState.car.isParking) {
                // We do NOT cancel parking. 
                // Instead we reset stuck timer so it doesn't think it's stuck while being dragged.
                dragState.car.stuckTimer = 0;
            }
        }
    }

    function onPointerUp() {
        if (dragState.car) {
            if (!dragState.isDragging) {
                // It was a click! Execute original click logic
                const c = dragState.car;
                if (!c.isParking && !c.isParkedFinal) {
                    options.onSpeak(c.char);
                    let targetFound = false;
                    for (let i = gameState.nextSlotIndex; i < gameState.word.length; i++) {
                        if (spots[i].char === c.char && !spots[i].occupied) {
                            const alreadyTargetedByTeam = cars.some(other => other.team === c.team && other.isParking && other.targetSpot === spots[i]);
                            if (alreadyTargetedByTeam) continue;
                            const isPrevTargeted = i === gameState.nextSlotIndex || cars.some(other => other.isParking && other.targetSpot === spots[i - 1]);
                            if (isPrevTargeted) { c.park(spots[i]); targetFound = true; break; }
                        }
                    }
                    if (!targetFound) { options.onParkFail(); c.shake(); }
                } else {
                    c.shake();
                    if (c.isParking) c.boost();
                }
            }
            // Reset drag state
            dragState.car = null;
            dragState.isDragging = false;
        }
    }

    initScene();
    container.addEventListener('pointerdown', onPointerDown as any);
    document.addEventListener('pointermove', onPointerMove as any); // Document level for smooth drag out
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
