import * as THREE from "three";
import { makeStandardMaterial, roundedBoxMesh, cylinderMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_47_purple_rug_cube";

  const purple = makeStandardMaterial(config.plasticMain ?? "#c7b2ff", 0.86);
  const white = makeStandardMaterial(config.accent ?? "#ffffff", 0.92);

  const cube = roundedBoxMesh(0.09, 0.08, 0.09, 0.012, purple, 5);
  cube.position.y = 0.04;
  cube.name = "rounded_purple_block";
  group.add(cube);

  const topDot = cylinderMesh(0.017, 0.017, 0.005, white, 24);
  topDot.position.set(0, 0.083, 0);
  topDot.name = "white_top_dot";
  group.add(topDot);

  finalizeGroup(group, {
    materialSlots: ["plasticMain", "accent"],
    sockets: { floor_attach: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/47_purple_rug_cube_front_view.svg",
      "room_objects_51_images/47_purple_rug_cube_top_view.svg",
      "room_objects_51_images/47_purple_rug_cube_side_view.svg"
    ]
  });
  return group;
}
