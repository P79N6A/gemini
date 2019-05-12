import * as THREE from 'three';
import Poul from './components/poul';
import './index.css';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// 初始化场景
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const poul = new Poul();
scene.add(poul);

const animate = () => {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
