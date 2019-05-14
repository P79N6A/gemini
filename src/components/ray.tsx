import { Raycaster } from 'three';

export default function CameraRaycaster(camera, objects) {
  this.camera = camera;
  this.objects = objects;
  this.raycaster = new Raycaster();
  this.raycast = (screenPos) => {
    this.raycaster.setFromCamera(screenPos, this.camera);
    const intersects = this.raycaster.intersectObjects(this.objects);
    return intersects;
  };
}
