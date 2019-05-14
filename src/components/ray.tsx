import { Camera, Raycaster, Object3D, Vector2 } from 'three';

export default class CameraRaycaster{
  camera: Camera;
  objects: Object3D[];
  raycaster: Raycaster;
  constructor(camera: Camera, objects: Object3D[]) {
    this.camera = camera;
    this.objects = objects;
    this.raycaster = new Raycaster();
  }
  raycast = (screenPos: Vector2) => {
    this.raycaster.setFromCamera(screenPos, this.camera);
    const intersects = this.raycaster.intersectObjects(this.objects);
    return intersects;
  };
}