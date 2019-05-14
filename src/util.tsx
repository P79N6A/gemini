/* eslint-disable func-names */
import * as THREE from 'three';

THREE.Object3D.prototype.getAllChildren = function () {
  const children = [];
  const pushChildren = (node) => {
    children.push(node);
    if (node.children) node.children.forEach(child => pushChildren(child));
  };
  pushChildren(this);
  return children;
};

export const add = (a: number, b: number) => a + b;
export const add2 = (a, b) => a + b;
