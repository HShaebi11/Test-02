import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// Cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 111111 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Cube1
const cube1geometry = new THREE.BoxGeometry( 1, 1, 1 );
const cube1material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube1 = new THREE.Mesh( cube1geometry, cube1material );
scene.add( cube1 );



// Oribit
camera.position.z = 15;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render( scene, camera );

    cube1.rotation.x += 0.02;
	cube1.rotation.y += 0.02;
	renderer.render( scene, camera );

}