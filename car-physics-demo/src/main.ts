import './style.css'
import * as THREE from 'three'
import * as CANNON from 'cannon-es'

// --- Configuration ---
const CAR_MASS = 2000
const OBSTACLE_MASS = 100
const DRIVE_FORCE = 180000
const BOOST_IMPULSE = 15000
const VIEW_SIZE = 55
const COLLISION_KNOCKBACK = 50000

const ZHUYIN_CHARSET = ['ㄅ', 'ㄆ', 'ㄇ', 'ㄈ', 'ㄉ', 'ㄊ', 'ㄋ', 'ㄌ', 'ㄍ', 'ㄎ', 'ㄏ', 'ㄐ', 'ㄑ', 'ㄒ', 'ㄓ', 'ㄔ', 'ㄕ', 'ㄖ', 'ㄗ', 'ㄘ', 'ㄙ', 'ㄚ', 'ㄛ', 'ㄜ', 'ㄝ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ', 'ㄦ', 'ㄧ', 'ㄨ', 'ㄩ']
const MISSION_WORDS = [['ㄅ', 'ㄚ', 'ㄅ', 'ㄚ'], ['ㄇ', 'ㄚ', 'ㄇ', 'ㄚ'], ['ㄌ', 'ㄚ', 'ㄌ', 'ㄚ'], ['ㄅ', 'ㄛ', 'ㄅ', 'ㄛ'], ['ㄆ', 'ㄚ', 'ㄆ', 'ㄚ']]
let currentWordIndex = 0

// --- Helper: Text Texture ---
function createTextTexture(text: string, bgColor: string, color: string = 'white', size: number = 256) {
  const canvas = document.createElement('canvas')
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = bgColor; ctx.fillRect(0, 0, size, size)
  ctx.fillStyle = color
  ctx.font = `bold ${size * 0.7}px Arial`
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
  ctx.fillText(text, size / 2, size * 0.45)
  // Add underline for orientation
  ctx.fillRect(size * 0.2, size * 0.85, size * 0.6, size * 0.08)
  return new THREE.CanvasTexture(canvas)
}

function createRoadLabel(text: string, color: string = 'rgba(255,255,255,0.2)', width: number = 10) {
  const canvas = document.createElement('canvas')
  canvas.width = 512; canvas.height = 128
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = 'rgba(0,0,0,0)'; ctx.fillRect(0, 0, 512, 128)
  ctx.fillStyle = color
  ctx.font = 'bold 60px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
  ctx.fillText(text, 256, 64)
  const tex = new THREE.CanvasTexture(canvas)
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, width / 4), new THREE.MeshBasicMaterial({ map: tex, transparent: true }))
  mesh.rotation.x = -Math.PI / 2
  mesh.raycast = () => { } // Make labels click-through
  return mesh
}

// --- Scene Setup ---
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x050505)
scene.fog = new THREE.Fog(0x050505, 150, 400)

const aspect = window.innerWidth / window.innerHeight
const camera = new THREE.OrthographicCamera(-VIEW_SIZE * aspect, VIEW_SIZE * aspect, VIEW_SIZE, -VIEW_SIZE, 0.1, 1000)
camera.position.set(0, 150, 0); camera.lookAt(0, 0, 0)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

scene.add(new THREE.AmbientLight(0xffffff, 0.3))
const sun = new THREE.DirectionalLight(0xffffff, 0.7)
sun.position.set(100, 200, 100); sun.castShadow = true
sun.shadow.camera.left = -200; sun.shadow.camera.right = 200
sun.shadow.camera.top = 200; sun.shadow.camera.bottom = -200
sun.shadow.mapSize.set(2048, 2048)
scene.add(sun)

// --- Physics ---
const world = new CANNON.World()
world.gravity.set(0, -9.82, 0)
if (world.solver instanceof CANNON.GSSolver) {
  world.solver.iterations = 30
}
world.allowSleep = false
const matGround = new CANNON.Material('ground')
const matCar = new CANNON.Material('car')
const matObstacle = new CANNON.Material('obstacle')
world.addContactMaterial(new CANNON.ContactMaterial(matCar, matGround, { friction: 0.01, restitution: 0.1 }))
world.addContactMaterial(new CANNON.ContactMaterial(matCar, matObstacle, { friction: 0.1, restitution: 0.3 }))
world.addContactMaterial(new CANNON.ContactMaterial(matCar, matCar, { friction: 0.1, restitution: 0.5 }))

// --- Asphalt Ground ---
const groundMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.8, metalness: 0 })
const groundMesh = new THREE.Mesh(new THREE.PlaneGeometry(1000, 1000), groundMat)
groundMesh.rotation.x = -Math.PI / 2; groundMesh.receiveShadow = true; scene.add(groundMesh)

const canvasGrain = document.createElement('canvas'); canvasGrain.width = 256; canvasGrain.height = 256;
const ctxGrain = canvasGrain.getContext('2d')!;
for (let i = 0; i < 10000; i++) {
  const x = Math.random() * 256, y = Math.random() * 256, g = 20 + Math.random() * 20;
  ctxGrain.fillStyle = `rgb(${g},${g},${g})`; ctxGrain.fillRect(x, y, 1, 1);
}
const grainTex = new THREE.CanvasTexture(canvasGrain); grainTex.wrapS = grainTex.wrapT = THREE.RepeatWrapping; grainTex.repeat.set(50, 50);
groundMat.map = grainTex;

const groundBody = new CANNON.Body({ mass: 0, material: matGround })
groundBody.addShape(new CANNON.Plane()); groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0)
world.addBody(groundBody)

// --- Broken Yellow Lines (Skip parking area at Z=0) ---
function addYellowLines(zStart: number, zEnd: number) {
  for (let i = zStart; i < zEnd; i += 10) {
    if (Math.abs(i) < 15) continue; // Skip parking zone
    const geo = new THREE.PlaneGeometry(0.4, 6); const mat = new THREE.MeshBasicMaterial({ color: 0xffcc00 })
    const l1 = new THREE.Mesh(geo, mat); l1.rotation.x = -Math.PI / 2; l1.position.set(-0.35, 0.06, i)
    const l2 = new THREE.Mesh(geo, mat); l2.rotation.x = -Math.PI / 2; l2.position.set(0.35, 0.06, i)
    scene.add(l1); scene.add(l2)
  }
}
addYellowLines(-200, 200)

// --- Score Tracking ---
let scores = { P1: 0, P2: 0 }
const p1Label = createRoadLabel('P1 SCORE: 0', '#2563eb', 15)
p1Label.position.set(-30, 0.1, 15); scene.add(p1Label)
const p2Label = createRoadLabel('P2 SCORE: 0', '#dc2626', 15)
p2Label.position.set(30, 0.1, -15); scene.add(p2Label)
const missionLabel = createRoadLabel('MISSION: ㄅㄚㄅㄚ', 'white', 25)
missionLabel.position.set(0, 0.1, 20); scene.add(missionLabel)

function updateRoadScores() {
  const tex1 = (p1Label.material as THREE.MeshBasicMaterial).map; if (tex1) {
    const ctx = (tex1 as any).image.getContext('2d')
    ctx.clearRect(0, 0, 512, 128); ctx.fillStyle = '#2563eb'
    ctx.font = 'bold 70px Arial'; ctx.textAlign = 'center'
    ctx.fillText(`P1 SCORE: ${scores.P1}`, 256, 64); (tex1 as any).needsUpdate = true
  }
  const tex2 = (p2Label.material as THREE.MeshBasicMaterial).map; if (tex2) {
    const ctx = (tex2 as any).image.getContext('2d')
    ctx.clearRect(0, 0, 512, 128); ctx.fillStyle = '#dc2626'
    ctx.font = 'bold 70px Arial'; ctx.textAlign = 'center'
    ctx.fillText(`P2 SCORE: ${scores.P2}`, 256, 64); (tex2 as any).needsUpdate = true
  }
}

function updateMissionLabel(word: string[]) {
  const tex = (missionLabel.material as THREE.MeshBasicMaterial).map; if (tex) {
    const ctx = (tex as any).image.getContext('2d')
    ctx.clearRect(0, 0, 512, 128); ctx.fillStyle = 'white'
    ctx.font = 'bold 60px Arial'; ctx.textAlign = 'center'
    ctx.fillText(`MISSION: ${word.join('')}`, 256, 64); (tex as any).needsUpdate = true
  }
}

// --- Parking Spots (Rectangular Frames) ---
const spots: { char: string, occupied: boolean, x: number, z: number, winnerTeam: string | null }[] = []
const numSpots = 4; const spotW = 7; const spotL = 11; const sptSpacing = 12

for (let i = 0; i < numSpots; i++) {
  const x = (i - (numSpots - 1) / 2) * sptSpacing; const z = 0;

  // Four line frame
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });
  const top = new THREE.Mesh(new THREE.PlaneGeometry(spotW, 0.3), lineMat);
  top.rotation.x = -Math.PI / 2; top.position.set(x, 0.07, z - spotL / 2); scene.add(top);
  const bottom = new THREE.Mesh(new THREE.PlaneGeometry(spotW, 0.3), lineMat);
  bottom.rotation.x = -Math.PI / 2; bottom.position.set(x, 0.07, z + spotL / 2); scene.add(bottom);
  const left = new THREE.Mesh(new THREE.PlaneGeometry(0.3, spotL), lineMat);
  left.rotation.x = -Math.PI / 2; left.position.set(x - spotW / 2, 0.07, z); scene.add(left);
  const right = new THREE.Mesh(new THREE.PlaneGeometry(0.3, spotL), lineMat);
  right.rotation.x = -Math.PI / 2; right.position.set(x + spotW / 2, 0.07, z); scene.add(right);

  const char = MISSION_WORDS[currentWordIndex][i]
  spots.push({ char, occupied: false, x, z, winnerTeam: null })

  const lbl = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), new THREE.MeshBasicMaterial({
    map: createTextTexture(char, '#00000000', 'rgba(255,255,255,0.4)'), transparent: true
  }));
  lbl.name = `spot_label_${i}`
  lbl.rotation.x = -Math.PI / 2; lbl.position.set(x, 0.08, z);
  lbl.raycast = () => { }; // Click through
  scene.add(lbl)
}

function updateSpotChars(word: string[]) {
  spots.forEach((s, i) => {
    s.char = word[i]; s.occupied = false;
    const lbl = scene.getObjectByName(`spot_label_${i}`) as THREE.Mesh
    if (lbl) {
      const mat = lbl.material as THREE.MeshBasicMaterial
      if (mat.map) mat.map.dispose()
      mat.map = createTextTexture(word[i], '#00000000', 'rgba(255,255,255,0.4)')
    }
  })
}

// --- Obstacles ---
const obstacles: { mesh: THREE.Mesh, body: CANNON.Body }[] = []
for (let i = 0; i < 15; i++) {
  const s = 2 + Math.random() * 3
  const pos = new THREE.Vector3((Math.random() - 0.5) * 110, s / 2, (Math.random() - 0.5) * 30)
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8, roughness: 0.2 }))
  mesh.castShadow = true; scene.add(mesh)
  const bb = new CANNON.Body({ mass: OBSTACLE_MASS, material: matObstacle, position: new CANNON.Vec3(pos.x, pos.y, pos.z) })
  bb.addShape(new CANNON.Box(new CANNON.Vec3(s / 2, s / 2, s / 2))); world.addBody(bb)
  obstacles.push({ mesh, body: bb })
}

// --- Game Logic ---
let gameState = {
  word: MISSION_WORDS[currentWordIndex],
  nextSlotIndex: 0,
  isGameOver: false,
  gameOverTime: 0,
  isClearing: false
}
const cars: GameCar[] = []
let winLabelMesh: THREE.Mesh | null = null

// --- Car Class (Tesla x1.5) ---
class GameCar {
  mesh: THREE.Group; body: CANNON.Body; id: number; char: string; team: 'P1' | 'P2'
  isParking = false; targetSpot: typeof spots[0] | null = null; isParkedFinal = false
  lightBeams: THREE.Group; isExiting = false; exitTargetZ = 0
  isEntering = true; targetEntryZ = 0; entrySpeedMult = 1

  constructor(id: number, x: number, z: number, color: number, char: string, team: 'P1' | 'P2') {
    this.id = id; this.char = char; this.team = team
    const cw = 4.5, ch = 2.0, cl = 8.5; this.mesh = new THREE.Group() // Slightly larger for better hit box
    const bMat = new THREE.MeshStandardMaterial({ color, metalness: 0.9, roughness: 0.15 })

    const base = new THREE.Mesh(new THREE.BoxGeometry(cw, ch * 0.6, cl), bMat)
    base.position.y = ch * 0.3; base.castShadow = true; this.mesh.add(base)
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(cw * 0.85, ch * 0.5, cl * 0.45), bMat)
    cabin.position.set(0, ch * 0.75, -0.6); this.mesh.add(cabin)

    // Windshield: Taller and Transparent
    const ws = new THREE.Mesh(
      new THREE.BoxGeometry(cw * 0.82, ch * 0.7, 0.1),
      new THREE.MeshStandardMaterial({ color: 0x88ccff, transparent: true, opacity: 0.4, metalness: 1, roughness: 0 })
    )
    ws.position.set(0, ch * 0.85, 1.4); ws.rotation.x = -Math.PI / 3.5; this.mesh.add(ws)

    // Physical Headlights (White Emissive)
    const hlGeo = new THREE.BoxGeometry(0.8, 0.4, 0.2);
    const hlMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1 });
    const hlL = new THREE.Mesh(hlGeo, hlMat); hlL.position.set(-1.4, ch * 0.3, cl / 2); this.mesh.add(hlL);
    const hlR = new THREE.Mesh(hlGeo, hlMat); hlR.position.set(1.4, ch * 0.3, cl / 2); this.mesh.add(hlR);

    const lbMat = new THREE.MeshBasicMaterial({ map: createTextTexture(char, '#00000000', 'white'), transparent: true, side: THREE.DoubleSide })
    const lb = new THREE.Mesh(new THREE.PlaneGeometry(3, 3), lbMat)
    lb.rotation.x = -Math.PI / 2;
    lb.rotation.z = Math.PI; // Flip character so it faces the player (bottom of car is toward player)
    lb.position.set(0, ch + 0.1, -1.8); // Moved back to avoid windshield
    this.mesh.add(lb)

    this.lightBeams = new THREE.Group();
    // Trapezoidal cone: wider at the end
    const bGeo = new THREE.PlaneGeometry(1.2, 12);
    const posAttr = bGeo.attributes.position;
    // Morph the plane into a cone
    // Vertices [2,3] are far end (z+). Widen them for volumetric feel.
    (posAttr as any).setX(2, -4.5); // bottom left x (far) - wider
    (posAttr as any).setX(3, 4.5);  // bottom right x (far) - wider

    const bCan = document.createElement('canvas'); bCan.width = 128; bCan.height = 256;
    const bCtx = bCan.getContext('2d')!;

    // Use a radial gradient for softer edges and more realistic falloff
    const bG = bCtx.createRadialGradient(64, 10, 0, 64, 10, 240);
    bG.addColorStop(0, 'rgba(255,255,255,0.6)');    // Bright at source
    bG.addColorStop(0.2, 'rgba(255,255,255,0.3)');  // Gradual fade
    bG.addColorStop(0.6, 'rgba(255,255,255,0.05)'); // Very soft tail
    bG.addColorStop(1, 'rgba(255,255,255,0)');     // Fully transparent
    bCtx.fillStyle = bG; bCtx.fillRect(0, 0, 128, 256)
    const bTex = new THREE.CanvasTexture(bCan);
    const lightBeamMat = new THREE.MeshBasicMaterial({ map: bTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })

    // Position beams at headlights
    const bPos = [[-1.4, 0.12, cl / 2 + 6], [1.4, 0.12, cl / 2 + 6]]
    bPos.forEach(p => {
      const b = new THREE.Mesh(bGeo, lightBeamMat);
      b.rotation.x = -Math.PI / 2;
      b.position.set(p[0], p[1], p[2]);
      this.lightBeams.add(b)
    })
    this.mesh.add(this.lightBeams); this.lightBeams.visible = false

    scene.add(this.mesh)
    this.body = new CANNON.Body({ mass: CAR_MASS, material: matCar, linearDamping: 0.75, angularDamping: 0.95 })
    this.body.addShape(new CANNON.Box(new CANNON.Vec3(cw / 2, ch / 2, cl / 2)))
    this.body.position.set(x, 2, z)
    if (team === 'P1') this.body.quaternion.setFromEuler(0, Math.PI, 0)
    this.body.angularFactor.set(0, 1, 0) // Prevent flipping - only rotate around Y
    world.addBody(this.body); this.mesh.userData.carId = id
    this.body.allowSleep = false // Ensure cars always respond

    this.body.addEventListener('collide', (e: any) => {
      if (this.isParkedFinal) return
      const other = e.body
      if (other.material?.name === 'car') {
        const otherCar = cars.find(c => c.body === other)
        if (otherCar && !otherCar.isParkedFinal && this.isParking && otherCar.isParking) {
          const tar = new CANNON.Vec3(this.targetSpot!.x, 0, this.targetSpot!.z)
          if (this.body.position.distanceTo(tar) < other.position.distanceTo(tar)) {
            other.applyImpulse(other.position.vsub(this.body.position).unit().scale(COLLISION_KNOCKBACK), new CANNON.Vec3(0, 0, 0))
          }
        }
      }
    })
  }

  update() {
    this.mesh.position.copy(this.body.position as any)
    this.mesh.quaternion.copy(this.body.quaternion as any)
    if (this.isExiting) {
      this.driveToExit(); this.lightBeams.visible = true
    } else if (this.isEntering) {
      this.driveToEntry(); this.lightBeams.visible = true
    } else if (this.isParking && this.targetSpot && !this.isParkedFinal) {
      this.driveToTarget(); this.lightBeams.visible = true
    } else { this.lightBeams.visible = false }
  }

  driveToEntry() {
    const dz = this.targetEntryZ - this.body.position.z
    if (Math.abs(dz) < 1.0) {
      this.isEntering = false; this.body.velocity.set(0, 0, 0); return
    }
    const fwd = new CANNON.Vec3(0, 0, 1); this.body.quaternion.vmult(fwd, fwd)
    this.body.applyForce(fwd.scale(DRIVE_FORCE * 1.5 * this.entrySpeedMult), new CANNON.Vec3(0, 0, 0))
    // Damp side movement
    this.body.velocity.x *= 0.95
  }

  driveToExit() {
    const tarZ = this.exitTargetZ
    const dx = 0 - this.body.position.x; const dz = tarZ - this.body.position.z
    const tAng = Math.atan2(dx, dz); const fwd = new CANNON.Vec3(0, 0, 1); this.body.quaternion.vmult(fwd, fwd)
    const cAng = Math.atan2(fwd.x, fwd.z); let diff = tAng - cAng
    while (diff > Math.PI) diff -= Math.PI * 2; while (diff < -Math.PI) diff += Math.PI * 2
    this.body.angularVelocity.y = diff * 5
    if (Math.cos(diff) > 0.1) this.body.applyForce(fwd.scale(DRIVE_FORCE), new CANNON.Vec3(0, 0, 0))
  }

  driveToTarget() {
    if (!this.targetSpot) return
    if (this.targetSpot.occupied) {
      // Spot was taken by someone else!
      this.isParking = false; this.targetSpot = null
      this.body.velocity.set(0, 0, 0); this.body.angularVelocity.set(0, 0, 0)
      return
    }
    const tar = new CANNON.Vec3(this.targetSpot.x, 0.5, this.targetSpot.z)
    const dx = tar.x - this.body.position.x; const dz = tar.z - this.body.position.z; const d = Math.sqrt(dx * dx + dz * dz)
    if (d < 0.5) { this.finishParking(tar); return }
    const tAng = Math.atan2(dx, dz); const fwd = new CANNON.Vec3(0, 0, 1); this.body.quaternion.vmult(fwd, fwd)
    const cAng = Math.atan2(fwd.x, fwd.z); let diff = tAng - cAng
    while (diff > Math.PI) diff -= Math.PI * 2; while (diff < -Math.PI) diff += Math.PI * 2
    this.body.angularVelocity.y = diff * 5
    const aln = Math.cos(diff)
    if (aln > 0.1) this.body.applyForce(fwd.scale(DRIVE_FORCE * Math.min(1, d / 5)), new CANNON.Vec3(0, 0, 0))
    const side = new CANNON.Vec3(0, 1, 0).cross(fwd, new CANNON.Vec3())
    this.body.velocity.x -= side.x * this.body.velocity.dot(side) * 0.96
    this.body.velocity.z -= side.z * this.body.velocity.dot(side) * 0.96
    if (d > 2 && this.body.velocity.length() < 1.0) this.body.applyImpulse(new CANNON.Vec3(dx, 0, dz).unit().scale(10000), new CANNON.Vec3(0, 0, 0))
  }

  boost() { if (this.isParkedFinal) return; const f = new CANNON.Vec3(0, 0, 1); this.body.quaternion.vmult(f, f); this.body.applyImpulse(f.scale(BOOST_IMPULSE), new CANNON.Vec3(0, 0, 0)) }

  finishParking(tar: CANNON.Vec3) {
    if (this.targetSpot!.occupied) { this.isParking = false; this.targetSpot = null; return }
    this.targetSpot!.occupied = true; this.isParkedFinal = true; this.isParking = false

    // Snap and Lock
    this.body.position.copy(tar)
    this.body.velocity.set(0, 0, 0); this.body.angularVelocity.set(0, 0, 0)
    this.body.quaternion.setFromEuler(0, this.team === 'P1' ? Math.PI : 0, 0)

    // Make absolute static
    this.body.type = CANNON.Body.STATIC
    this.body.mass = 0
    this.body.updateMassProperties()

    if (this.team === 'P1') { scores.P1++; updateRoadScores() } else { scores.P2++; updateRoadScores() }
  }

  park(spot: typeof spots[0]) {
    this.targetSpot = spot
    this.isParking = true
    this.body.wakeUp()
    console.log(`Car ${this.id} (${this.char}, ${this.team}) started parking to spot ${spots.indexOf(spot)}`);
  }

  exit() {
    this.isExiting = true; this.isParkedFinal = false; this.isParking = false
    this.body.type = CANNON.Body.DYNAMIC; this.body.mass = CAR_MASS; this.body.updateMassProperties()
    this.exitTargetZ = this.team === 'P1' ? 150 : -150
    this.body.wakeUp()
  }
}

// --- Interaction ---
window.addEventListener('pointerdown', (e) => {
  const m = new THREE.Vector2((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1)
  const ray = new THREE.Raycaster(); ray.setFromCamera(m, camera)
  const hits = ray.intersectObjects(scene.children, true)

  for (const h of hits) {
    let o: THREE.Object3D | null = h.object;
    while (o && o.userData.carId === undefined && o.parent) o = o.parent

    if (o && o.userData.carId !== undefined) {
      const c = cars.find(car => car.id === o.userData.carId)
      if (c && !c.isEntering) {
        console.log(`Clicked Car: ID=${c.id}, Char=${c.char}, TargetExpectedIndex=${gameState.nextSlotIndex}`);
        if (!c.isParking && !c.isParkedFinal) {
          // Check if this car's char matches the current or NEXT available slots
          let targetFound = false;
          for (let i = gameState.nextSlotIndex; i < gameState.word.length; i++) {
            if (spots[i].char === c.char && !spots[i].occupied) {
              // Check if THIS team already has a car headed for this spot
              const alreadyTargetedByTeam = cars.some(other => other.team === c.team && other.isParking && other.targetSpot === spots[i]);
              if (alreadyTargetedByTeam) continue;

              // Only allow "skipping" if previous spots are already being targeted by some car
              const isPrevTargeted = i === gameState.nextSlotIndex || cars.some(other => other.isParking && other.targetSpot === spots[i - 1]);
              if (isPrevTargeted) {
                c.park(spots[i]);
                targetFound = true;
                break;
              }
            }
          }
          if (!targetFound) {
            console.log("No valid slot for this character yet.");
            c.body.applyImpulse(new CANNON.Vec3(0, 1500, 0), new CANNON.Vec3(1, 0, 0))
          }
        } else if (c.isParking) {
          console.log("Boosting!");
          c.boost()
        }
      }
      break
    }
  }
})

function initGame() {
  const spawn = (t: 'P1' | 'P2', zBase: number, col: number) => {
    const word = MISSION_WORDS[currentWordIndex]
    const chars = [...word, ...Array(2).fill(0).map(() => ZHUYIN_CHARSET[Math.floor(Math.random() * ZHUYIN_CHARSET.length)])].sort(() => Math.random() - 0.5)
    chars.forEach((char, i) => {
      const spawnZ = t === 'P1' ? 140 : -140
      const car = new GameCar(cars.length, (Math.random() - 0.5) * 85, spawnZ, col, char, t)

      // Randomize initial direction slightly
      const randomAng = (Math.random() - 0.5) * 0.4
      car.body.quaternion.setFromEuler(0, (t === 'P1' ? Math.PI : 0) + randomAng, 0)

      car.targetEntryZ = zBase + (Math.random() - 0.5) * 15 // Tighten range
      car.entrySpeedMult = 1.0 + Math.random() * 0.8 // Faster entry
      cars.push(car)
    })
  }
  spawn('P1', 35, 0x0164e8); spawn('P2', -35, 0xe81123)
}

function nextMission() {
  // Cleanup
  cars.forEach(c => { scene.remove(c.mesh); world.removeBody(c.body) })
  cars.length = 0
  if (winLabelMesh) { scene.remove(winLabelMesh); winLabelMesh = null }

  // Reset spots
  currentWordIndex = (currentWordIndex + 1) % MISSION_WORDS.length
  const newWord = MISSION_WORDS[currentWordIndex]
  updateSpotChars(newWord)
  updateMissionLabel(newWord)

  // Game state
  gameState.word = newWord
  gameState.nextSlotIndex = 0
  gameState.isGameOver = false
  gameState.isClearing = false
  missionLabel.visible = true

  initGame()
}

function animate() {
  requestAnimationFrame(animate)
  world.step(1 / 60)

  if (!gameState.isGameOver) {
    const s = spots[gameState.nextSlotIndex]
    if (s && s.occupied) {
      gameState.nextSlotIndex++;
      if (gameState.nextSlotIndex >= gameState.word.length) {
        gameState.isGameOver = true
        gameState.gameOverTime = Date.now()
        missionLabel.visible = false
        winLabelMesh = createRoadLabel('MISSION COMPLETE', '#4fd1c5', 30);
        winLabelMesh.position.set(0, 0.2, 35); // Moved away from cars
        scene.add(winLabelMesh)
      }
    }
    missionLabel.scale.setScalar(1 + Math.sin(Date.now() * 0.005) * 0.05);
  } else if (!gameState.isClearing) {
    if (Date.now() - gameState.gameOverTime > 2000) {
      gameState.isClearing = true
      cars.forEach(c => c.exit())
    }
  } else {
    // Check if all cars exited
    const allExited = cars.every(c => Math.abs(c.body.position.z) > 120)
    if (allExited) nextMission()
  }

  cars.forEach(c => c.update())
  obstacles.forEach(({ mesh, body }) => { mesh.position.copy(body.position as any); mesh.quaternion.copy(body.quaternion as any) })
  renderer.render(scene, camera)
}
initGame()
animate()
window.addEventListener('resize', () => {
  const asp = window.innerWidth / window.innerHeight
  camera.left = -VIEW_SIZE * asp; camera.right = VIEW_SIZE * asp; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight)
})
