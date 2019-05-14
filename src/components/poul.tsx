import {
  Mesh, PlaneBufferGeometry, ShaderMaterial, TextureLoader,
} from 'three';
import Boat from './boat.tsx';

const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;
const fragmentShader = `
varying vec2 vUv;
uniform sampler2D tBorder;
void main() {
    float border = 1.0 - texture2D( tBorder, vUv ).r;
    gl_FragColor = vec4(0.1, 0.2, 0.8, border);
}`;
export default function Poul(scene) {
  // 湖水本体
  const geometry = new PlaneBufferGeometry(10, 10, 10, 10);
  const bTexture = new TextureLoader().load('./img/poul.jpg');
  const material = new ShaderMaterial({
    uniforms: {
      tBorder: { value: bTexture },
    },
    vertexShader,
    fragmentShader,
  });
  material.transparent = true;
  const plane = new Mesh(geometry, material);
  plane.name = 'poul';
  plane.rotateX(-Math.PI / 2);
  scene.add(plane);

  // 船只
  const boat0 = new Boat('boat_0');
  plane.add(boat0.mesh);

  return plane;
}
