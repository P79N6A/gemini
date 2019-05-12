import {
  Mesh, PlaneBufferGeometry, ShaderMaterial, TextureLoader,
} from 'three';

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
    gl_FragColor = vec4(0.1, 0.2, 1.0, border);
}`;
export default function Poul() {
  const geometry = new PlaneBufferGeometry(2, 2, 10, 10);
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
  return plane;
}
