import * as THREE from 'three';

export const createTextTexture = (text: string, bgColor: string, color: string = 'white', size: number = 256) => {
    const canvas = document.createElement('canvas');
    canvas.width = size; canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = bgColor; ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = color;
    ctx.font = `bold ${size * 0.7}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text, size / 2, size * 0.45);

    // Directional Underline - even fainter for less distraction
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.fillRect(size * 0.2, size * 0.82, size * 0.6, size * 0.08);
    return new THREE.CanvasTexture(canvas);
};

export const createRoundedExtrude = (w: number, l: number, h: number, r: number) => {
    const shape = new THREE.Shape();
    const x = -w / 2, y = -l / 2;
    shape.moveTo(x + r, y);
    shape.lineTo(x + w - r, y);
    shape.quadraticCurveTo(x + w, y, x + w, y + r);
    shape.lineTo(x + w, y + l - r);
    shape.quadraticCurveTo(x + w, y + l, x + w - r, y + l);
    shape.lineTo(x + r, y + l);
    shape.quadraticCurveTo(x, y + l, x, y + l - r);
    shape.lineTo(x, y + r);
    shape.quadraticCurveTo(x, y, x + r, y);
    return new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: true, bevelThickness: 0.2, bevelSize: 0.2, bevelSegments: 3 });
};

// Generic Prism Helper for Trapezoidal Shapes
// Creates a box-like shape tapering from bottom to top
// Width is W (X-axis), Length is L (Z-axis), Height is H (Y-axis)
// offsetZ: Shifts the top face along Z axis (negative = back, positive = forward)
const createPrism = (w1: number, l1: number, w2: number, l2: number, h: number, offsetZ: number = 0) => {
    // w1, l1: Bottom dimensions
    // w2, l2: Top dimensions
    // h: Height

    // Vertices
    // Bottom (y=0)
    const x1 = w1 / 2; const z1 = l1 / 2;
    // Top (y=h)
    const x2 = w2 / 2; const z2 = l2 / 2;

    // Apply offset to top vertices Z
    const tz1 = -z2 + offsetZ; // Top Back Z
    const tz2 = z2 + offsetZ;  // Top Front Z

    const vertices = [
        // Bottom (y=0)
        -x1, 0, -z1, // 0: BL
        x1, 0, -z1, // 1: BR
        x1, 0, z1, // 2: FR
        -x1, 0, z1, // 3: FL

        // Top (y=h)
        -x2, h, tz1, // 4: BL Top
        x2, h, tz1, // 5: BR Top
        x2, h, tz2, // 6: FR Top
        -x2, h, tz2  // 7: FL Top
    ];

    // Indices for triangles (Counter-Clockwise for outward facing normals)
    const indices = [
        // Bottom (facing down)
        0, 1, 3, 1, 2, 3,
        // Top (facing up)
        4, 7, 5, 5, 7, 6,
        // Front (Z+)
        3, 2, 7, 2, 6, 7,
        // Back (Z-)
        0, 4, 1, 1, 4, 5,
        // Right (X+)
        1, 5, 2, 5, 6, 2,
        // Left (X-)
        0, 3, 4, 3, 7, 4
    ];

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return geo;
};


export const createCarMesh = (color: number, char: string = 'A') => {
    const group = new THREE.Group();

    // Dimensions
    const cw = 4.0; // Top Width of Chassis
    const cl = 8.5; // Top Length of Chassis
    const ch = 1.4; // Chassis Height

    // Wide Body Chassis
    const chassisTopW = cw;
    const chassisTopL = cl;
    const chassisBottomW = cw + 0.4; // Wider bottom
    const chassisBottomL = cl + 0.4; // Longer bottom

    const wheelRadius = 0.75;
    const wheelWidth = 0.6;

    const chassisBottomY = wheelRadius + 0.1;

    // Cabin Dimensions
    const cabinH = 1.05; // Lower roof for sleeker look
    const cabinBottomW = cw * 0.85;
    const cabinBottomL = cl * 0.7; // Slightly shorter base to allow position shift
    const cabinTopW = cw * 0.7; // Tapered width
    const cabinTopL = cl * 0.30;
    const cabinBottomY = chassisBottomY + ch;

    const bodyMat = new THREE.MeshStandardMaterial({ color, metalness: 0.2, roughness: 0.6, flatShading: true });
    const blackMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.2, roughness: 0.8 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 2.0 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0xff0000, emissiveIntensity: 2.0 });

    // 1. Wheels (Pushed out)
    const wheelGeo = new THREE.CylinderGeometry(wheelRadius, wheelRadius, wheelWidth, 24);
    wheelGeo.rotateZ(Math.PI / 2);
    // Push wheels out so they are slightly exposed
    const wOffX = (chassisBottomW / 2) - 0.1;
    const wOffZ = cl * 0.35;

    const wheelPositions = [
        [-wOffX, wheelRadius, -wOffZ], [wOffX, wheelRadius, -wOffZ], // Rear
        [-wOffX, wheelRadius, wOffZ], [wOffX, wheelRadius, wOffZ]    // Front
    ];
    wheelPositions.forEach(pos => {
        const w = new THREE.Mesh(wheelGeo, blackMat);
        w.position.set(pos[0], pos[1], pos[2]);
        w.castShadow = true;
        group.add(w);
    });

    // 2. Chassis (Trapezoid Body)
    const baseGeo = createPrism(chassisBottomW, chassisBottomL, chassisTopW, chassisTopL, ch, 0);
    const base = new THREE.Mesh(baseGeo, bodyMat);
    base.name = 'car_body';
    base.position.y = chassisBottomY;
    base.castShadow = true; base.receiveShadow = true;
    group.add(base);

    // 3. Cabin (Asymmetric Trapezoid Top)
    // Create a sleek roofline: long front slope, gradual rear slope (Fastback)
    const cabinOffsetZ = -0.8;
    const cabinGeo = createPrism(cabinBottomW, cabinBottomL, cabinTopW, cabinTopL, cabinH, cabinOffsetZ);
    const cabin = new THREE.Mesh(cabinGeo, bodyMat);
    cabin.name = 'car_body';
    // Shift cabin back to create longer hood
    cabin.position.set(0, cabinBottomY, -1.0);
    cabin.castShadow = true; cabin.receiveShadow = true;
    group.add(cabin);

    // 4. Windows REMOVED

    // 5. Lights (Attached to Chassis Front Face)
    const lgW = 0.8, lgH = 0.3, lgD = 0.2;
    const hlGeo = new THREE.BoxGeometry(lgW, lgH, lgD);

    // Position
    const lightH_ratio = 0.7;
    const lightY = chassisBottomY + ch * lightH_ratio;

    const z_at_y = (chassisBottomL / 2) * (1 - lightH_ratio) + (chassisTopL / 2) * lightH_ratio;

    const lightX = cw / 3;

    // Headlights (White) - Front
    const hlL = new THREE.Mesh(hlGeo, whiteMat);
    hlL.position.set(-lightX, lightY, z_at_y);
    hlL.translateZ(lgD / 2); // Push OUT
    // Match slope angle
    // Angle of slope is atan( (bottomL - topL)/2 / h )
    const chassisSlopeAngle = Math.atan2((chassisBottomL - chassisTopL) / 2, ch);
    hlL.rotation.x = -chassisSlopeAngle;
    group.add(hlL);

    const hlR = new THREE.Mesh(hlGeo, whiteMat);
    hlR.position.set(lightX, lightY, z_at_y);
    hlR.rotation.x = -chassisSlopeAngle;
    hlR.translateZ(lgD / 2);
    group.add(hlR);

    // Taillights (Red) - Back
    const tlL = new THREE.Mesh(hlGeo, redMat);
    tlL.rotation.x = chassisSlopeAngle;
    tlL.position.set(-lightX, lightY, -z_at_y);
    // For rear, -z_at_y is the face. Normal is tilting UP (if chassisSlope is positive).
    // Actually chassis slope means bottom is wider. So face tilts "forward" (top is forward of bottom? No top is narrower).
    // Top is narrower (closer to 0). Bottom is wider (further from 0).
    // So Rear Face: Bottom at -5, Top at -4. Face tilts "Forward" /
    // Front Face: Bottom at 5, Top at 4. Face tilts "Back" \
    // So Front rotation -slope is correct \
    // Rear rotation +slope is correct /
    tlL.translateZ(-lgD / 2); // Move in world -Z direction? No, local Z.
    // If we rotate X positive, local Z points Up-Back.
    // -lgD/2 moves Down-Front.
    // We want to move Back (World -Z).
    // Simple: Position at -z, rotation correct, subtract z.
    tlL.position.z -= lgD / 2;
    group.add(tlL);

    const tlR = new THREE.Mesh(hlGeo, redMat);
    tlR.rotation.x = chassisSlopeAngle;
    tlR.position.set(lightX, lightY, -z_at_y);
    tlR.position.z -= lgD / 2;
    group.add(tlR);

    // 6. Label
    const lbMat = new THREE.MeshBasicMaterial({
        map: createTextTexture(char, '#00000000', 'white'),
        transparent: true,
        side: THREE.DoubleSide
    });
    // Increased size for better visibility
    const lb = new THREE.Mesh(new THREE.PlaneGeometry(5.0, 5.0), lbMat);
    lb.rotation.x = -Math.PI / 2;
    lb.rotation.z = Math.PI;
    // Moved further back to center on roof (offsetZ of cabin is -0.8)
    lb.position.set(0, cabinBottomY + cabinH + 0.05, -1.5);
    group.add(lb);

    // 7. Light Beams - Flared trapezoid for wider angle
    const beams = new THREE.Group();
    beams.name = 'light_beams';

    // Create trapezoid geometry: narrow at car (w=1.0), wide at distance (w=7.0)
    const beamL = 14; const beamW1 = 1.0; const beamW2 = 7.0;
    const bGeo = new THREE.BufferGeometry();
    const verts = new Float32Array([
        -beamW1 / 2, 0, 0,   // 0: Car L
        beamW1 / 2, 0, 0,   // 1: Car R
        -beamW2 / 2, 0, beamL, // 2: Far L
        beamW2 / 2, 0, beamL  // 3: Far R
    ]);
    const uvs = new Float32Array([0, 1, 1, 1, 0, 0, 1, 0]); // V=1 is Car (Bright), V=0 is Far (Fade)
    bGeo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
    bGeo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    bGeo.setIndex([0, 1, 3, 0, 3, 2]);

    const bCan = document.createElement('canvas'); bCan.width = 128; bCan.height = 256;
    const bCtx = bCan.getContext('2d')!;
    // Hotspot is at the top of the texture
    const bG = bCtx.createRadialGradient(64, 10, 0, 64, 10, 240);
    bG.addColorStop(0, 'rgba(255,255,255,0.4)');
    bG.addColorStop(0.4, 'rgba(255,255,255,0.1)'); // Softer fade
    bG.addColorStop(1, 'rgba(255,255,255,0)');
    bCtx.fillStyle = bG; bCtx.fillRect(0, 0, 128, 256);
    const bTex = new THREE.CanvasTexture(bCan);
    const bMatL = new THREE.MeshBasicMaterial({
        map: bTex, transparent: true, blending: THREE.AdditiveBlending,
        depthWrite: false, side: THREE.DoubleSide
    });

    // Position beams at headlights, pointing FORWARD (+Z in local space)
    const beamY = lightY - 0.5;
    const bL = new THREE.Mesh(bGeo, bMatL);
    bL.position.set(-lightX, beamY, z_at_y);
    beams.add(bL);

    const bR = new THREE.Mesh(bGeo, bMatL);
    bR.position.set(lightX, beamY, z_at_y);
    beams.add(bR);

    beams.visible = false;
    group.add(beams);

    return group;
};
