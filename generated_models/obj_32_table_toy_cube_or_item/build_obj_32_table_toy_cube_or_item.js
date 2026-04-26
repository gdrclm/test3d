import * as THREE from "three";
import { cylinderMesh, makeStandardMaterial, roundedBoxMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_32_table_toy_cube_or_item";

  const blue = makeStandardMaterial(config.blueMain ?? "#aee3ff", 0.86);
  const cream = makeStandardMaterial(config.creamAccent ?? "#fff4c7", 0.82);

  const cube = roundedBoxMesh(0.09, 0.09, 0.09, 0.016, blue, 6);
  cube.position.y = 0.045;
  cube.name = "rounded_blue_cube";
  group.add(cube);

  const dot = cylinderMesh(0.02, 0.02, 0.008, cream, 24);
  dot.rotation.x = Math.PI / 2;
  dot.position.set(0, 0.045, 0.05);
  dot.name = "cream_front_dot";
  group.add(dot);

  finalizeGroup(group, {
    materialSlots: ["blueMain", "creamAccent"],
    sockets: { tabletop_contact: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/32_table_toy_cube_or_item_front_view.svg",
      "room_objects_51_images/32_table_toy_cube_or_item_top_view.svg",
      "room_objects_51_images/32_table_toy_cube_or_item_side_view.svg"
    ]
  });
  return group;
}
