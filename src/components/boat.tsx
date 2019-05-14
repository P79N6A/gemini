import { BoxBufferGeometry, MeshBasicMaterial, Mesh } from 'three';

export default class Boat {
  name: string;
  geometry: BoxBufferGeometry;
  material: MeshBasicMaterial;
  mesh: Mesh;
  constructor(name: string) {
    this.name = name;
    this.geometry = new BoxBufferGeometry(1, 1, 1);
    this.material = new MeshBasicMaterial({ color: 0x00ff00 });
    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.name = name;
  }
}
