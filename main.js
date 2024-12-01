import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// Load GLTF model
const loader = new GLTFLoader();
loader.load('/Users/hamzashaebi/Desktop/Projects/Three.js/Test 02/3d.glb', function (gltf) {
    const model = gltf.scene;

    // Apply a white material to all meshes in the model
    model.traverse((node) => {
        if (node.isMesh) {
            node.material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // White material
        }
    });

    model.scale.set(1, 1, 1); // Adjust scale if needed
    scene.add(model);

    // Store the model for animation
    scene.userData.model = model;
}, undefined, function (error) {
    console.error('An error occurred while loading the model:', error);
});

// Set up camera position
camera.position.z = 15;

// Animation loop
function animate() {
    if (scene.userData.model) {
        scene.userData.model.rotation.y += 0.01; // Rotate the model
    }

    renderer.render(scene, camera);
}