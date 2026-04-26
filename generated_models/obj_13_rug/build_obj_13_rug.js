import * as THREE from "three";
import { makeStandardMaterial, finalizeGroup } from "../shared/projection_model_utils.js";

function ovalDisk(width, depth, height, material, segments = 80) {
  const geometry = new THREE.CylinderGeometry(0.5, 0.5, height, segments);
  geometry.scale(width, 1, depth);
  const mesh = new THREE.Mesh(geometry, material);
  return mesh;
}

function ovalStroke(width, depth, tubeRadius, material) {
  const geometry = new THREE.TorusGeometry(1, tubeRadius, 8, 96);
  geometry.scale(width * 0.5, depth * 0.5, 1);
  geometry.rotateX(Math.PI / 2);
  return new THREE.Mesh(geometry, material);
}

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_13_rug";

  const fabricMain = makeStandardMaterial(config.fabricMain ?? "#ffd4e4", 0.96);
  const borderAccent = makeStandardMaterial(config.borderAccent ?? "#e56fa0", 0.94);
  const innerAccent = makeStandardMaterial(config.innerAccent ?? "#aa92ef", 0.97);

  const base = ovalDisk(2.6, 1.7, 0.026, fabricMain);
  base.position.y = 0.013;
  base.name = "large_oval_rug_body";
  group.add(base);

  const outerLine = ovalStroke(2.34, 1.44, 0.006, borderAccent);
  outerLine.position.y = 0.033;
  outerLine.name = "thin_pink_oval_outline";
  group.add(outerLine);

  const innerLine = ovalStroke(1.6, 0.91, 0.008, innerAccent);
  innerLine.position.y = 0.04;
  innerLine.name = "thin_lavender_inner_oval";
  group.add(innerLine);

  finalizeGroup(group, {
    materialSlots: ["fabricMain", "borderAccent", "innerAccent"],
    sockets: { floor_anchor_center: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/13_rug_front_view.svg",
      "room_objects_51_images/13_rug_top_view.svg",
      "room_objects_51_images/13_rug_side_view.svg"
    ]
  });
  return group;
}
