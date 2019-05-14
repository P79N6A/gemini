import { Object3D } from "three";

/* eslint-disable func-names */
export const getAllChildren = (node: Object3D) => {
  const children: Object3D[] = [];
  const pushChildren = (node: Object3D) => {
    children.push(node);
    if (node.children) node.children.forEach(child => pushChildren(child));
  };
  pushChildren(node);
  return children;
};