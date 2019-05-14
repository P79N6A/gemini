import {
  Scene, Mesh, PlaneBufferGeometry, ShaderMaterial, TextureLoader,
} from 'three';
import Boat from './boat';

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
export default class Poul {
  geometry: PlaneBufferGeometry;
  material: ShaderMaterial;
  mesh: Mesh;
  constructor(scene: Scene) {
    this.geometry = new PlaneBufferGeometry(10, 10, 10, 10);
    const bTexture = new TextureLoader().load('./img/poul.jpg');
    this.material = new ShaderMaterial({
      uniforms: {
        tBorder: { value: bTexture },
      },
      vertexShader,
      fragmentShader,
    });
    this.material.transparent = true;
    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.name = 'poul';
    this.mesh.rotateX(-Math.PI / 2);

    this.createBoats();

    scene.add(this.mesh);
  }

  createBoats() {
    const boat0 = new Boat('boat_0');
    this.mesh.add(boat0.mesh);
  }
}
