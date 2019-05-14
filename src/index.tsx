/* eslint-disable no-unused-vars */
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import { getAllChildren } from './util';
import CameraRaycaster from './components/ray';
import Poul from './components/poul';
import './index.css';


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// 初始化场景
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 10, 10);
const controls = new OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(0, 0, 0);

/* 灯光配置 */
const lights = [];
lights[0] = new THREE.PointLight(0xffffff, 1, 0);
lights[1] = new THREE.PointLight(0xffffff, 1, 0);
lights[2] = new THREE.PointLight(0xffffff, 1, 0);

lights[0].position.set(0, 200, 0);
lights[1].position.set(100, 200, 100);
lights[2].position.set(-100, -200, -100);

scene.add(lights[0]);
scene.add(lights[1]);
scene.add(lights[2]);

/* 言叶之海配置 */
const poul = new Poul(scene);

// 点击拾取
const cameraRaycaster = new CameraRaycaster(camera, getAllChildren(scene));

document.addEventListener('click', (e) => {
  const mouse = new THREE.Vector2();
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  const result = cameraRaycaster.raycast(mouse);
  console.log(result && result[0] && result[0].object.name);
});

const animate = () => {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
