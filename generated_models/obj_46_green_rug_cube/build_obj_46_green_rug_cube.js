import * as THREE from "three";
import { makeStandardMaterial, roundedBoxMesh, cylinderMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_46_green_rug_cube";

  const green = makeStandardMaterial(config.plasticMain ?? "#9dd7a9", 0.86);
  const cream = makeStandardMaterial(config.accent ?? "#fff4c7", 0.9);

  const cube = roundedBoxMesh(0.09, 0.08, 0.09, 0.012, green, 5);
  cube.position.y = 0.04;
  cube.name = "rounded_green_block";
  group.add(cube);

  const topDot = cylinderMesh(0.018, 0.018, 0.005, cream, 24);
  topDot.position.set(0, 0.083, 0);
  topDot.name = "cream_top_dot";
  group.add(topDot);

  finalizeGroup(group, {
    materialSlots: ["plasticMain", "accent"],
    sockets: { floor_attach: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/46_green_rug_cube_front_view.svg",
      "room_objects_51_images/46_green_rug_cube_top_view.svg",
      "room_objects_51_images/46_green_rug_cube_side_view.svg"
    ]
  });
  return group;
}
