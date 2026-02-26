import * as THREE from 'three';

export const computeTextAspect = (text: string, size: number = 256) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    ctx.font = `bold ${size * 0.7}px Arial`;
    const metrics = ctx.measureText(text);
    return Math.max(1.0, (metrics.width + size * 0.3) / size);
};

export const createTextTexture = (text: string, bgColor: string, color: string = 'white', size: number = 256, aspect: number = 1.0) => {
    const canvas = document.createElement('canvas');
    canvas.width = size * aspect;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = bgColor; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;

    const fontSize = size * 0.7;
    ctx.font = `bold ${fontSize}px Arial`;

    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height * 0.45);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.fillRect(canvas.width * 0.2, canvas.height * 0.82, canvas.width * 0.6, canvas.height * 0.08);
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

const createPrism = (w1: number, l1: number, w2: number, l2: number, h: number, offsetZ: number = 0) => {
    const x1 = w1 / 2; const z1 = l1 / 2;
    const x2 = w2 / 2; const z2 = l2 / 2;
    const tz1 = -z2 + offsetZ;
    const tz2 = z2 + offsetZ;

    const vertices = [
        -x1, 0, -z1,
        x1, 0, -z1,
        x1, 0, z1,
        -x1, 0, z1,
        -x2, h, tz1,
        x2, h, tz1,
        x2, h, tz2,
        -x2, h, tz2
    ];

    const indices = [
        0, 1, 3, 1, 2, 3,
        4, 7, 5, 5, 7, 6,
        3, 2, 7, 2, 6, 7,
        0, 4, 1, 1, 4, 5,
        1, 5, 2, 5, 6, 2,
        0, 3, 4, 3, 7, 4
    ];

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return geo;
};


export const createCarMesh = (colors: { body: number, tires: number }, char: string = 'A') => {
    const group = new THREE.Group();

    const cw = 4.0;
    const cl = 8.5;
    const ch = 1.4;

    const chassisTopW = cw;
    const chassisTopL = cl;
    const chassisBottomW = cw + 0.4;
    const chassisBottomL = cl + 0.4;

    const wheelRadius = 0.75;
    const wheelWidth = 0.6;
    const chassisBottomY = wheelRadius + 0.1;

    const cabinH = 1.05;
    const cabinBottomW = cw * 0.85;
    const cabinBottomL = cl * 0.7;
    const cabinTopW = cw * 0.7;
    const cabinTopL = cl * 0.30;
    const cabinBottomY = chassisBottomY + ch;

    const bodyMat = new THREE.MeshStandardMaterial({ color: colors.body, metalness: 0.2, roughness: 0.6, flatShading: true });
    const tireMat = new THREE.MeshStandardMaterial({ color: colors.tires, metalness: 0.2, roughness: 0.8 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 2.0 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0xff0000, emissiveIntensity: 2.0 });

    const wheelGeo = new THREE.CylinderGeometry(wheelRadius, wheelRadius, wheelWidth, 24);
    wheelGeo.rotateZ(Math.PI / 2);
    const wOffX = (chassisBottomW / 2) - 0.1;
    const wOffZ = cl * 0.35;

    const wheelPositions = [
        [-wOffX, wheelRadius, -wOffZ], [wOffX, wheelRadius, -wOffZ],
        [-wOffX, wheelRadius, wOffZ], [wOffX, wheelRadius, wOffZ]
    ];
    wheelPositions.forEach(pos => {
        const w = new THREE.Mesh(wheelGeo, tireMat);
        w.name = 'car_tire';
        w.position.set(pos[0], pos[1], pos[2]);
        w.castShadow = true;
        group.add(w);
    });

    const baseGeo = createPrism(chassisBottomW, chassisBottomL, chassisTopW, chassisTopL, ch, 0);
    const base = new THREE.Mesh(baseGeo, bodyMat);
    base.name = 'car_body';
    base.position.y = chassisBottomY;
    base.castShadow = true; base.receiveShadow = true;
    group.add(base);

    const cabinOffsetZ = -0.8;
    const cabinGeo = createPrism(cabinBottomW, cabinBottomL, cabinTopW, cabinTopL, cabinH, cabinOffsetZ);
    const cabin = new THREE.Mesh(cabinGeo, bodyMat);
    cabin.name = 'car_body';
    cabin.position.set(0, cabinBottomY, -1.0);
    cabin.castShadow = true; cabin.receiveShadow = true;
    group.add(cabin);

    const lgW = 0.8, lgH = 0.3, lgD = 0.2;
    const hlGeo = new THREE.BoxGeometry(lgW, lgH, lgD);

    const lightH_ratio = 0.7;
    const lightY = chassisBottomY + ch * lightH_ratio;
    const z_at_y = (chassisBottomL / 2) * (1 - lightH_ratio) + (chassisTopL / 2) * lightH_ratio;
    const lightX = cw / 3;

    const hlL = new THREE.Mesh(hlGeo, whiteMat);
    hlL.position.set(-lightX, lightY, z_at_y);
    hlL.translateZ(lgD / 2);
    const chassisSlopeAngle = Math.atan2((chassisBottomL - chassisTopL) / 2, ch);
    hlL.rotation.x = -chassisSlopeAngle;
    group.add(hlL);

    const hlR = new THREE.Mesh(hlGeo, whiteMat);
    hlR.position.set(lightX, lightY, z_at_y);
    hlR.rotation.x = -chassisSlopeAngle;
    hlR.translateZ(lgD / 2);
    group.add(hlR);

    const tlL = new THREE.Mesh(hlGeo, redMat);
    tlL.rotation.x = chassisSlopeAngle;
    tlL.position.set(-lightX, lightY, -z_at_y);
    tlL.position.z -= lgD / 2;
    group.add(tlL);

    const tlR = new THREE.Mesh(hlGeo, redMat);
    tlR.rotation.x = chassisSlopeAngle;
    tlR.position.set(lightX, lightY, -z_at_y);
    tlR.position.z -= lgD / 2;
    group.add(tlR);

    const aspect = computeTextAspect(char);
    const lbHeight = 5.0;
    const lbWidth = lbHeight * aspect;

    const lbMat = new THREE.MeshBasicMaterial({
        map: createTextTexture(char, '#00000000', 'white', 256, aspect),
        transparent: true,
        side: THREE.DoubleSide
    });

    const lb = new THREE.Mesh(new THREE.PlaneGeometry(lbWidth, lbHeight), lbMat);
    lb.rotation.x = -Math.PI / 2;
    lb.rotation.z = Math.PI;
    lb.position.set(0, cabinBottomY + cabinH + 0.05, -1.5);
    group.add(lb);

    const beams = new THREE.Group();
    beams.name = 'light_beams';

    const beamL = 14; const beamW1 = 1.0; const beamW2 = 7.0;
    const bGeo = new THREE.BufferGeometry();
    const verts = new Float32Array([
        -beamW1 / 2, 0, 0,
        beamW1 / 2, 0, 0,
        -beamW2 / 2, 0, beamL,
        beamW2 / 2, 0, beamL
    ]);
    const uvs = new Float32Array([0, 1, 1, 1, 0, 0, 1, 0]);
    bGeo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
    bGeo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    bGeo.setIndex([0, 1, 3, 0, 3, 2]);

    const bCan = document.createElement('canvas'); bCan.width = 128; bCan.height = 256;
    const bCtx = bCan.getContext('2d')!;
    const bG = bCtx.createRadialGradient(64, 10, 0, 64, 10, 240);
    bG.addColorStop(0, 'rgba(255,255,255,0.4)');
    bG.addColorStop(0.4, 'rgba(255,255,255,0.1)');
    bG.addColorStop(1, 'rgba(255,255,255,0)');
    bCtx.fillStyle = bG; bCtx.fillRect(0, 0, 128, 256);
    const bTex = new THREE.CanvasTexture(bCan);
    const bMatL = new THREE.MeshBasicMaterial({
        map: bTex, transparent: true, blending: THREE.AdditiveBlending,
        depthWrite: false, side: THREE.DoubleSide
    });

    const beamY = lightY - 0.5;
    const bL = new THREE.Mesh(bGeo, bMatL);
    bL.position.set(-lightX, beamY, z_at_y);
    bL.raycast = () => { };
    beams.add(bL);

    const bR = new THREE.Mesh(bGeo, bMatL);
    bR.position.set(lightX, beamY, z_at_y);
    bR.raycast = () => { };
    beams.add(bR);

    beams.visible = false;
    group.add(beams);

    const logoMat = new THREE.MeshBasicMaterial({
        map: createTeslaLogoTexture(),
        transparent: true
    });
    const logoGeo = new THREE.PlaneGeometry(0.65, 0.65);
    const logo = new THREE.Mesh(logoGeo, logoMat);
    logo.rotation.x = -Math.PI / 2;
    logo.position.set(0, chassisBottomY + ch + 0.01, 4.0);
    group.add(logo);

    return group;
};

export const createTeslaLogoTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, 128, 128);
    ctx.fillStyle = "white";

    const path1 = new Path2D("M126.806 252.502l35.476-199.519c33.815 0 44.481 3.708 46.021 18.843 0 0 22.684-8.458 34.125-25.636-44.646-20.688-89.505-21.621-89.505-21.621l-26.176 31.882.059-.004-26.176-31.883s-44.86.934-89.5 21.622c11.431 17.178 34.124 25.636 34.124 25.636 1.549-15.136 12.202-18.844 45.79-18.868l35.762 199.548");
    const path2 = new Path2D("M126.792 15.36c36.09-.276 77.399 5.583 119.687 24.014 5.652-10.173 7.105-14.669 7.105-14.669C207.357 6.416 164.066.157 126.787 0 89.51.157 46.221 6.417 0 24.705c0 0 2.062 5.538 7.1 14.669 42.28-18.431 83.596-24.29 119.687-24.014h.005");

    ctx.save();
    ctx.translate(64, 64);
    const scale = 125 / 378.75;
    ctx.scale(scale, scale);
    ctx.translate(-126.79, -126.25);

    ctx.fill(path1);
    ctx.fill(path2);
    ctx.restore();

    return new THREE.CanvasTexture(canvas);
};
