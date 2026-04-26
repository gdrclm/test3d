import * as THREE from "three";
import { toCreasedNormals } from "three/addons/utils/BufferGeometryUtils.js";

export const DEFAULT_AUTO_SMOOTH_ANGLE_DEG = 46;

export function applyAutoSmoothToGeometry(geometry, angleDeg = DEFAULT_AUTO_SMOOTH_ANGLE_DEG) {
  if (!geometry?.isBufferGeometry) {
    return geometry;
  }

  const creaseAngle = THREE.MathUtils.degToRad(angleDeg);
  const smoothed = toCreasedNormals(geometry, creaseAngle);
  smoothed.computeBoundingBox();
  smoothed.computeBoundingSphere();
  return smoothed;
}

export function enableAutoSmoothMaterial(material) {
  if (!material) {
    return;
  }

  if (Array.isArray(material)) {
    material.forEach(enableAutoSmoothMaterial);
    return;
  }

  material.flatShading = false;
  material.needsUpdate = true;
}

export function applyAutoSmoothToObject(root, angleDeg = DEFAULT_AUTO_SMOOTH_ANGLE_DEG) {
  if (!root) {
    return root;
  }

  root.traverse((child) => {
    if (!child.isMesh || !child.geometry) {
      return;
    }

    child.geometry = applyAutoSmoothToGeometry(child.geometry, angleDeg);
    enableAutoSmoothMaterial(child.material);
  });

  return root;
}
