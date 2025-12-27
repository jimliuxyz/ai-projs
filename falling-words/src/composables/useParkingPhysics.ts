import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { onUnmounted } from 'vue';
import { vocabularyStore } from '../store/vocabulary';

// --- Configuration ---
const CAR_MASS = 2000;
const OBSTACLE_MASS = 80; // Slightly lighter
const DRIVE_FORCE = 350000; // Stronger push
const MAX_VELOCITY = 100;
const BOOST_IMPULSE = 15000;
const VIEW_SIZE = 36; // Increased magnification (Original: 55 / 1.5)
const COLLISION_KNOCKBACK = 50000;

const ZHUYIN_CHARSET = 'ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄧㄨㄩㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦ'.split('');
const ALPHA_CHARSET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

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
    const walls: { body: CANNON.Body, mesh: THREE.Mesh }[] = [];
    let entryBarriers: { mesh: THREE.Mesh, body: CANNON.Body }[] = [];
    let exitFinishedTime = 0;

    let scores = { P1: 0, P2: 0 };
    let gameState = {
        word: [] as string[],
        nextSlotIndex: 0,
        isGameOver: false,
        gameOverTime: 0,
        isClearing: false,
        currentWordIndex: 0
    };

    let p1Label: THREE.Mesh, p2Label: THREE.Mesh;
    const matCar = new CANNON.Material('car');
    const matGround = new CANNON.Material('ground');
    const matObstacle = new CANNON.Material('obstacle');

    // --- Helpers ---
    function createTextTexture(text: string, bgColor: string, color: string = 'white', size: number = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = size; canvas.height = size;
        const ctx = canvas.getContext('2d')!;
        ctx.fillStyle = bgColor; ctx.fillRect(0, 0, size, size);
        ctx.fillStyle = color;
        ctx.font = `bold ${size * 0.7}px Arial`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(text, size / 2, size * 0.45);

        const isAlphabet = /^[a-zA-Z0-9]$/.test(text);
        if (!isAlphabet) {
            ctx.fillRect(size * 0.2, size * 0.85, size * 0.6, size * 0.08);
        }
        return new THREE.CanvasTexture(canvas);
    }

    function createRoadLabel(text: string, color: string = 'rgba(255,255,255,0.2)', width: number = 10) {
        const canvas = document.createElement('canvas');
        canvas.width = 512; canvas.height = 128;
        const ctx = canvas.getContext('2d')!;
        ctx.fillStyle = 'rgba(0,0,0,0)'; ctx.fillRect(0, 0, 512, 128);
        ctx.fillStyle = color;
        ctx.font = 'bold 60px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(text, 256, 64);
        const tex = new THREE.CanvasTexture(canvas);
        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, width / 4), new THREE.MeshBasicMaterial({ map: tex, transparent: true }));
        mesh.rotation.x = -Math.PI / 2;
        mesh.raycast = () => { };
        return mesh;
    }

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
            const cw = 4.5, ch = 2.0, cl = 8.5; this.mesh = new THREE.Group();
            const bMat = new THREE.MeshStandardMaterial({ color, metalness: 0.9, roughness: 0.15 });

            const base = new THREE.Mesh(new THREE.BoxGeometry(cw, ch * 0.6, cl), bMat);
            base.position.y = ch * 0.3;
            base.castShadow = true; base.receiveShadow = true; // Cars should receive shadows too
            this.mesh.add(base);

            const cabin = new THREE.Mesh(new THREE.BoxGeometry(cw * 0.85, ch * 0.5, cl * 0.45), bMat);
            cabin.position.set(0, ch * 0.75, -0.6);
            cabin.castShadow = true; cabin.receiveShadow = true;
            this.mesh.add(cabin);

            const ws = new THREE.Mesh(
                new THREE.BoxGeometry(cw * 0.82, ch * 0.7, 0.1),
                new THREE.MeshStandardMaterial({ color: 0x88ccff, transparent: true, opacity: 0.4, metalness: 1, roughness: 0 })
            );
            ws.position.set(0, ch * 0.85, 1.4); ws.rotation.x = -Math.PI / 3.5;
            ws.castShadow = true;
            this.mesh.add(ws);

            const hlGeo = new THREE.BoxGeometry(0.8, 0.4, 0.2);
            const hlMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1 });
            const hlL = new THREE.Mesh(hlGeo, hlMat); hlL.position.set(-1.4, ch * 0.3, cl / 2); this.mesh.add(hlL);
            const hlR = new THREE.Mesh(hlGeo, hlMat); hlR.position.set(1.4, ch * 0.3, cl / 2); this.mesh.add(hlR);

            const lbMat = new THREE.MeshBasicMaterial({ map: createTextTexture(char, '#00000000', 'white'), transparent: true, side: THREE.DoubleSide });
            const lb = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), lbMat);
            lb.rotation.x = -Math.PI / 2; lb.rotation.z = Math.PI;
            lb.position.set(0, ch + 0.1, -1.2);
            this.mesh.add(lb);

            this.lightBeams = new THREE.Group();
            const bGeo = new THREE.PlaneGeometry(1.2, 12);
            const posAttr = bGeo.attributes.position;
            (posAttr as any).setX(2, -4.5); (posAttr as any).setX(3, 4.5);

            const bCan = document.createElement('canvas'); bCan.width = 128; bCan.height = 256;
            const bCtx = bCan.getContext('2d')!;
            const bG = bCtx.createRadialGradient(64, 10, 0, 64, 10, 240);
            bG.addColorStop(0, 'rgba(255,255,255,0.5)'); bG.addColorStop(0.2, 'rgba(255,255,255,0.2)');
            bG.addColorStop(0.6, 'rgba(255,255,255,0.05)'); bG.addColorStop(1, 'rgba(255,255,255,0)');
            bCtx.fillStyle = bG; bCtx.fillRect(0, 0, 128, 256);
            const bTex = new THREE.CanvasTexture(bCan);
            const bMatL = new THREE.MeshBasicMaterial({ map: bTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });

            const bPos = [[-1.4, 0.12, cl / 2 + 6], [1.4, 0.12, cl / 2 + 6]];
            bPos.forEach(p => {
                const b = new THREE.Mesh(bGeo, bMatL);
                b.rotation.x = -Math.PI / 2; b.position.set(p[0], p[1], p[2]);
                this.lightBeams.add(b);
            });
            this.mesh.add(this.lightBeams); this.lightBeams.visible = false;

            scene.add(this.mesh);
            this.body = new CANNON.Body({ mass: CAR_MASS, material: matCar, linearDamping: 0.75, angularDamping: 0.95 });
            this.body.addShape(new CANNON.Box(new CANNON.Vec3(cw / 2, ch / 2, cl / 2)));
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
            if (Math.abs(dz) < 1.0) { this.isEntering = false; this.body.velocity.set(0, 0, 0); return; }
            const fwd = new CANNON.Vec3(0, 0, 1); this.body.quaternion.vmult(fwd, fwd);
            const sMult = this.team === 'P1' ? options.p1Speed.value : options.p2Speed.value;
            // Slightly lower force for entry to prevent tunneling through barriers
            this.body.applyForce(fwd.scale(DRIVE_FORCE * 1.2 * this.entrySpeedMult * sMult), new CANNON.Vec3(0, 0, 0));
            this.body.velocity.x *= 0.95;
        }

        driveToExit() {
            const tarZ = this.exitTargetZ;
            const dx = 0 - this.body.position.x; const dz = tarZ - this.body.position.z;
            const tAng = Math.atan2(dx, dz); const fwd = new CANNON.Vec3(0, 0, 1); this.body.quaternion.vmult(fwd, fwd);
            const cAng = Math.atan2(fwd.x, fwd.z); let diff = tAng - cAng;
            while (diff > Math.PI) diff -= Math.PI * 2; while (diff < -Math.PI) diff += Math.PI * 2;
            this.body.angularVelocity.y = diff * 5;
            const sMult = this.team === 'P1' ? options.p1Speed.value : options.p2Speed.value;
            if (Math.cos(diff) > 0.1) this.body.applyForce(fwd.scale(DRIVE_FORCE * sMult), new CANNON.Vec3(0, 0, 0));
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
            this.body.velocity.x -= side.x * this.body.velocity.dot(side) * 0.97;
            this.body.velocity.z -= side.z * this.body.velocity.dot(side) * 0.97;
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
            this.body.quaternion.setFromEuler(0, this.team === 'P1' ? Math.PI : 0, 0);
            this.body.type = CANNON.Body.STATIC; this.body.mass = 0; this.body.updateMassProperties();
            if (this.team === 'P1') { scores.P1++; } else { scores.P2++; }
            updateRoadScores(this.team);
            options.onParkSuccess();
        }

        park(spot: typeof spots[0]) { this.targetSpot = spot; this.isParking = true; this.body.wakeUp(); }
        exit() {
            this.isExiting = true; this.isParkedFinal = false; this.isParking = false;
            this.body.type = CANNON.Body.DYNAMIC; this.body.mass = CAR_MASS; this.body.updateMassProperties();
            this.exitTargetZ = this.team === 'P1' ? 150 : -150; this.body.wakeUp();
        }
    }

    function updateRoadScores(scoringTeam?: 'P1' | 'P2') {
        const tex1 = (p1Label.material as THREE.MeshBasicMaterial).map;
        if (tex1) {
            const ctx = (tex1.image as HTMLCanvasElement).getContext('2d')!;
            ctx.clearRect(0, 0, 512, 128); ctx.fillStyle = '#2563eb'; ctx.font = 'bold 70px Arial'; ctx.textAlign = 'center';
            ctx.fillText(`P1 SCORE: ${scores.P1}`, 256, 64); tex1.needsUpdate = true;
        }
        const tex2 = (p2Label.material as THREE.MeshBasicMaterial).map;
        if (tex2) {
            const ctx = (tex2.image as HTMLCanvasElement).getContext('2d')!;
            ctx.clearRect(0, 0, 512, 128); ctx.fillStyle = '#dc2626'; ctx.font = 'bold 70px Arial'; ctx.textAlign = 'center';
            ctx.fillText(`P2 SCORE: ${scores.P2}`, 256, 64); tex2.needsUpdate = true;
        }
        if (scoringTeam) options.onScore(scoringTeam, scores.P1 + scores.P2);
    }



    function initScene() {
        scene = new THREE.Scene(); scene.background = new THREE.Color(0x050505); scene.fog = new THREE.Fog(0x050505, 150, 400);
        renderer = new THREE.WebGLRenderer({ antialias: true, canvas: container as HTMLCanvasElement });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.shadowMap.enabled = true;

        updateCamera();
        window.addEventListener('resize', updateCamera);

        scene.add(new THREE.AmbientLight(0xffffff, 0.4));
        const sun = new THREE.DirectionalLight(0xffffff, 0.8);
        sun.position.set(40, 180, 40); // More vertical angle
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
        world.addContactMaterial(new CANNON.ContactMaterial(matCar, matObstacle, { friction: 0.1, restitution: 0.1 })); // Lower friction for sliding
        world.addContactMaterial(new CANNON.ContactMaterial(matCar, matCar, { friction: 0.5, restitution: 0.0 }));

        const gMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.8, metalness: 0 });
        groundMesh = new THREE.Mesh(new THREE.PlaneGeometry(1000, 1000), gMat); groundMesh.rotation.x = -Math.PI / 2; groundMesh.receiveShadow = true; scene.add(groundMesh);
        groundBody = new CANNON.Body({ mass: 0, material: matGround }); groundBody.addShape(new CANNON.Plane()); groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0); world.addBody(groundBody);

        addYellowLines(-200, 200);

        p1Label = createRoadLabel('P1 SCORE: 0', '#2563eb', 15); p1Label.position.set(-30, 0.1, 15); scene.add(p1Label);
        p2Label = createRoadLabel('P2 SCORE: 0', '#dc2626', 15); p2Label.position.set(30, 0.1, -15); scene.add(p2Label);

        // Walls (Boundary) - Neon Pink for visibility
        const wallMat = new THREE.MeshBasicMaterial({ color: 0xff00ff, transparent: true, opacity: 0.6, depthTest: false, depthWrite: false });
        for (let i = 0; i < 4; i++) {
            const body = new CANNON.Body({ mass: 0, material: matGround });
            body.collisionFilterGroup = GROUP_WALL;
            body.collisionFilterMask = GROUP_CAR;
            world.addBody(body);

            const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), wallMat);
            mesh.renderOrder = 999;
            scene.add(mesh);
            walls.push({ body, mesh });
        }
        updateCamera(); // Initialize wall shapes based on current view

        window.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === 't') spawnTestCar();
        });

        initRound();
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
        const limitZ = (adaptiveSize + 0.5) * wallScale;
        const thick = 50; const wallH = 100; const visibleThick = 1.0;

        // North
        walls[0].body.position.set(0, 0, -limitZ - thick / 2);
        walls[0].body.shapes = []; walls[0].body.addShape(new CANNON.Box(new CANNON.Vec3(limitX + thick, wallH / 2, thick / 2)));
        walls[0].mesh.position.set(0, wallH / 2, -limitZ + visibleThick / 2);
        walls[0].mesh.scale.set(limitX * 2 + 2, wallH, visibleThick);

        // South
        walls[1].body.position.set(0, 0, limitZ + thick / 2);
        walls[1].body.shapes = []; walls[1].body.addShape(new CANNON.Box(new CANNON.Vec3(limitX + thick, wallH / 2, thick / 2)));
        walls[1].mesh.position.set(0, wallH / 2, limitZ - visibleThick / 2);
        walls[1].mesh.scale.set(limitX * 2 + 2, wallH, visibleThick);

        // West
        walls[2].body.position.set(-limitX - thick / 2, 0, 0);
        walls[2].body.shapes = []; walls[2].body.addShape(new CANNON.Box(new CANNON.Vec3(thick / 2, wallH / 2, limitZ + thick)));
        walls[2].mesh.position.set(-limitX + visibleThick / 2, wallH / 2, 0);
        walls[2].mesh.scale.set(visibleThick, wallH, limitZ * 2 + 2);

        // East
        walls[3].body.position.set(limitX + thick / 2, 0, 0);
        walls[3].body.shapes = []; walls[3].body.addShape(new CANNON.Box(new CANNON.Vec3(thick / 2, wallH / 2, limitZ + thick)));
        walls[3].mesh.position.set(limitX - visibleThick / 2, wallH / 2, 0);
        walls[3].mesh.scale.set(visibleThick, wallH, limitZ * 2 + 2);
    }

    function addYellowLines(zStart: number, zEnd: number) {
        const thickness = 1.0;
        const separation = 2.5; // Wider gap
        const mat = new THREE.MeshBasicMaterial({ color: 0xff9900 }); // Warmer orange-yellow

        // First Segment (from zStart to parking zone start)
        const len1 = -15 - zStart;
        if (len1 > 0) {
            const g1 = new THREE.PlaneGeometry(thickness, len1);
            const l1_1 = new THREE.Mesh(g1, mat); l1_1.rotation.x = -Math.PI / 2; l1_1.position.set(-separation / 2, 0.06, zStart + len1 / 2); scene.add(l1_1);
            const l1_2 = new THREE.Mesh(g1, mat); l1_2.rotation.x = -Math.PI / 2; l1_2.position.set(separation / 2, 0.06, zStart + len1 / 2); scene.add(l1_2);
        }

        // Second Segment (from parking zone end to zEnd)
        const len2 = zEnd - 15;
        if (len2 > 0) {
            const g2 = new THREE.PlaneGeometry(thickness, len2);
            const l2_1 = new THREE.Mesh(g2, mat); l2_1.rotation.x = -Math.PI / 2; l2_1.position.set(-separation / 2, 0.06, 15 + len2 / 2); scene.add(l2_1);
            const l2_2 = new THREE.Mesh(g2, mat); l2_2.rotation.x = -Math.PI / 2; l2_2.position.set(separation / 2, 0.06, 15 + len2 / 2); scene.add(l2_2);
        }
    }

    function initRound() {
        wallScale = 5.0;
        const list = vocabularyStore.currentList.value;
        if (list.length === 0) return;
        const word = list[Math.floor(Math.random() * list.length)];
        gameState.word = word.text.split('');
        gameState.nextSlotIndex = 0;
        gameState.isGameOver = false;
        gameState.isClearing = false;

        spots.length = 0;
        const numSpots = gameState.word.length;
        const sptSpacing = 12;
        const spotW = 7; const spotL = 11;
        for (let i = 0; i < numSpots; i++) {
            const x = (i - (numSpots - 1) / 2) * sptSpacing;
            spots.push({ char: gameState.word[i], occupied: false, x, z: 0, winnerTeam: null });

            const lineMat = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.6, emissive: 0xffffff, emissiveIntensity: 0.2 });
            const top = new THREE.Mesh(new THREE.PlaneGeometry(spotW, 0.3), lineMat);
            top.rotation.x = -Math.PI / 2; top.position.set(x, 0.07, -spotL / 2); top.name = `spot_frame_${i}_t`; top.receiveShadow = true; scene.add(top);
            const bottom = new THREE.Mesh(new THREE.PlaneGeometry(spotW, 0.3), lineMat);
            bottom.rotation.x = -Math.PI / 2; bottom.position.set(x, 0.07, spotL / 2); bottom.name = `spot_frame_${i}_b`; bottom.receiveShadow = true; scene.add(bottom);
            const left = new THREE.Mesh(new THREE.PlaneGeometry(0.3, spotL), lineMat);
            left.rotation.x = -Math.PI / 2; left.position.set(x - spotW / 2, 0.07, 0); left.name = `spot_frame_${i}_l`; left.receiveShadow = true; scene.add(left);
            const right = new THREE.Mesh(new THREE.PlaneGeometry(0.3, spotL), lineMat);
            right.rotation.x = -Math.PI / 2; right.position.set(x + spotW / 2, 0.07, 0); right.name = `spot_frame_${i}_r`; right.receiveShadow = true; scene.add(right);

            const lbl = new THREE.Mesh(new THREE.PlaneGeometry(5.5, 5.5), new THREE.MeshStandardMaterial({
                map: createTextTexture(gameState.word[i], '#00000000', 'rgba(255,255,255,0.4)'),
                transparent: true,
                emissive: 0xffffff,
                emissiveIntensity: 0.1
            }));
            lbl.name = `spot_label_${i}`; lbl.rotation.x = -Math.PI / 2; lbl.position.set(x, 0.08, 0); lbl.raycast = () => { };
            lbl.receiveShadow = true;
            scene.add(lbl);
        }

        for (let i = 0; i < 15; i++) {
            const s = 2 + Math.random() * 3;
            const pos = new CANNON.Vec3((Math.random() - 0.5) * 110, s / 2, (Math.random() - 0.5) * 30);
            const mesh = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), new THREE.MeshStandardMaterial({
                color: getRandomDarkWarmColor(),
                metalness: 0.6,
                roughness: 0.4
            }));
            mesh.castShadow = true; mesh.receiveShadow = true;
            scene.add(mesh);
            const bb = new CANNON.Body({ mass: OBSTACLE_MASS, material: matObstacle, position: pos });
            bb.addShape(new CANNON.Box(new CANNON.Vec3(s / 2, s / 2, s / 2))); world.addBody(bb);
            obstacles.push({ mesh, body: bb });
        }

        // Add Entry Barriers (Semi-transparent red walls)
        const barrierHeight = 15;
        const bThickness = 5;
        const bMatMesh = new THREE.MeshStandardMaterial({ color: 0xff3333, transparent: true, opacity: 0.4 });
        const bZPos = [10, -10]; // Closer to the spots to definitely block entry
        bZPos.forEach(bz => {
            const body = new CANNON.Body({ mass: 0 });
            body.addShape(new CANNON.Box(new CANNON.Vec3(150, barrierHeight / 2, bThickness / 2)));
            body.position.set(0, barrierHeight / 2, bz);
            body.collisionFilterGroup = GROUP_BARRIER;
            body.collisionFilterMask = GROUP_CAR;
            world.addBody(body);

            const mesh = new THREE.Mesh(new THREE.BoxGeometry(300, barrierHeight, bThickness), bMatMesh);
            mesh.position.set(0, barrierHeight / 2, bz);
            scene.add(mesh);
            entryBarriers.push({ mesh, body });
        });

        spawnTeam('P1', 22, 0x0164e8); spawnTeam('P2', -22, 0xe81123);

        // Speak word at start
        options.onSpeak(gameState.word.join(''));
    }

    function spawnTeam(t: 'P1' | 'P2', zBase: number, col: number) {
        const isEnglish = gameState.word.some(c => /^[a-zA-Z]$/.test(c));
        const charset = isEnglish ? ALPHA_CHARSET : ZHUYIN_CHARSET;

        // Ensure characters are plentiful: 
        // 2 copies of each character in the word per team + 4 random characters
        const wordChars = [...gameState.word, ...gameState.word];
        const randomChars = Array(4).fill(0).map(() => charset[Math.floor(Math.random() * charset.length)]);
        const chars = [...wordChars, ...randomChars].sort(() => Math.random() - 0.5);

        // Calculate safe spawn width based on current aspect
        const aspect = container.clientWidth / container.clientHeight;
        const adaptiveSize = container.clientHeight > container.clientWidth ? VIEW_SIZE / (aspect * 1.5) : VIEW_SIZE;
        const spawnLimitX = (adaptiveSize * aspect) * 0.8;

        chars.forEach((char, i) => {
            const spawnZ = t === 'P1' ? 140 : -140;
            // Space out cars along X significantly to prevent spawn overlap
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
                options.onSpeak(gameState.word.join(''));
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

        // Apply drag force
        if (dragState.isDragging && dragState.car) {
            const body = dragState.car.body;
            // P-Controller for velocity to reach target
            const speed = 10;
            body.velocity.x = (dragState.targetPos.x - body.position.x) * speed;
            body.velocity.z = (dragState.targetPos.z - body.position.z) * speed;
            body.angularVelocity.set(0, 0, 0); // Prevent spin
            body.quaternion.setFromEuler(0, 0, 0); // Keep upright (optional, or just let it be)
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
        targetPos: new THREE.Vector3(),
        plane: new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
    };

    function nextMission() {
        cars.forEach(c => { scene.remove(c.mesh); world.removeBody(c.body); }); cars.length = 0;
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
        const m = new THREE.Vector2(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
        dragState.startPos.set(e.clientX, e.clientY);

        const ray = new THREE.Raycaster(); ray.setFromCamera(m, camera);
        const hits = ray.intersectObjects(scene.children, true);

        for (const h of hits) {
            let o: THREE.Object3D | null = h.object;
            while (o && o.userData.carId === undefined && o.parent) o = o.parent;
            if (o && o.userData.carId !== undefined) {
                const c = cars.find(car => car.id === o!.userData.carId);
                // Allow dragging if not entering, and NOT fully parked
                if (c && !c.isEntering && !c.isParkedFinal) {
                    dragState.car = c;
                    dragState.isDragging = false; // Wait for move to confirm drag

                    // Logic to find intersection with ground for initial target
                    ray.ray.intersectPlane(dragState.plane, dragState.targetPos);
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
            const rect = container.getBoundingClientRect();
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

    function onPointerUp(e: PointerEvent) {
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
