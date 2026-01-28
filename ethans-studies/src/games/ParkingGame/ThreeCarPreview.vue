<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import * as THREE from 'three';
// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createCarMesh } from './utils/carMesh';

const props = defineProps<{
  color: { body: number, tires: number };
}>();

const container = ref<HTMLDivElement | null>(null);
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let carGroup: THREE.Group;
let animationId: number;

onMounted(() => {
    // Delay initialization to ensure the container has dimensions (crucial inside v-dialog/tabs)
    const tryInit = () => {
        if (!container.value) return;
        if (container.value.clientWidth === 0) {
            setTimeout(tryInit, 50);
            return;
        }
        initThree();
    };
    setTimeout(tryInit, 100);
});

function initThree() {
    if (!container.value) return;

    // 1. Setup Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x333333); 
    // ... rest of init logic is mostly same, just refactored into function ...

    // 2. Setup Camera
    camera = new THREE.PerspectiveCamera(45, container.value.clientWidth / container.value.clientHeight, 0.1, 100);
    camera.position.set(10, 8, 10);
    camera.lookAt(0, 0, 0);

    // 3. Setup Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.value.clientWidth, container.value.clientHeight);
    renderer.shadowMap.enabled = true;
    container.value.appendChild(renderer.domElement);

    // 4. Setup Light
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(10, 20, 10);
    dirLight.castShadow = true;
    scene.add(dirLight);

    // 5. Setup Ground
    const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(50, 50),
        new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 1, metalness: 0 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // 6. Setup Car
    carGroup = createCarMesh(props.color, 'A');
    scene.add(carGroup);

    // 7. Setup Orbit Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = true;
    controls.minDistance = 5;
    controls.maxDistance = 30;
    controls.maxPolarAngle = Math.PI / 2 - 0.1; 
    controls.target.set(0, 1, 0);
    controls.autoRotate = true;       
    controls.autoRotateSpeed = 4.0;    
    controls.enableDamping = true;    
    controls.update();

    animate();
    window.addEventListener('resize', handleResize);
}

onUnmounted(() => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('resize', handleResize);
    if (renderer) renderer.dispose();
});

watch(() => props.color, (newColor) => {
    if (carGroup && scene) {
        scene.remove(carGroup);
        carGroup = createCarMesh(newColor, 'A');
        scene.add(carGroup);
    }
}, { deep: true });

function handleResize() {
    if (!container.value || !camera || !renderer) return;
    camera.aspect = container.value.clientWidth / container.value.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.value.clientWidth, container.value.clientHeight);
}

function animate() {
    animationId = requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
</script>

<template>
  <div ref="container" class="preview-container"></div>
</template>

<style scoped>
.preview-container {
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  background: #222;
  box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
}
</style>
