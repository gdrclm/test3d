import * as THREE from "three";
import { cylinderMesh, makeStandardMaterial, roundedBoxMesh, finalizeGroup } from "../shared/projection_model_utils.js";

function beam(length, radius, material, position, rotationZ = 0, rotationX = 0) {
  const mesh = cylinderMesh(radius, radius, length, material, 12);
  mesh.rotation.z = rotationZ;
  mesh.rotation.x = rotationX;
  mesh.position.copy(position);
  return mesh;
}

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_37_easel";

  const wood = makeStandardMaterial(config.woodMain ?? "#d6a47a", 0.82);
  const woodLight = makeStandardMaterial(config.woodAccent ?? "#e8c09b", 0.84);

  const left = beam(1.55, 0.018, wood, new THREE.Vector3(-0.16, 0.78, 0), -0.28);
  left.name = "left_front_easel_leg";
  group.add(left);

  const right = beam(1.55, 0.018, wood, new THREE.Vector3(0.16, 0.78, 0), 0.28);
  right.name = "right_front_easel_leg";
  group.add(right);

  const center = beam(1.45, 0.016, wood, new THREE.Vector3(0, 0.72, -0.12), 0, 0.22);
  center.name = "rear_center_leg";
  group.add(center);

  const shelf = roundedBoxMesh(0.72, 0.055, 0.06, 0.012, woodLight, 4);
  shelf.position.set(0, 0.6, 0.02);
  shelf.name = "canvas_support_shelf";
  group.add(shelf);

  const clamp = roundedBoxMesh(0.16, 0.08, 0.05, 0.012, woodLight, 4);
  clamp.position.set(0, 1.18, 0.02);
  clamp.name = "top_canvas_clamp";
  group.add(clamp);

  finalizeGroup(group, {
    materialSlots: ["woodMain", "woodAccent"],
    sockets: { canvas_mount_center: new THREE.Vector3(0, 0.83, 0.055) },
    vectorSources: [
      "room_objects_51_images/37_easel_front_view.svg",
      "room_objects_51_images/37_easel_top_view.svg",
      "room_objects_51_images/37_easel_side_view.svg"
    ]
  });
  return group;
}
