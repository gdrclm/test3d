import * as THREE from "three";
import { ellipsoidMesh, makeStandardMaterial, cylinderMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_43_blue_rug_toy";

  const blue = makeStandardMaterial(config.plasticMain ?? "#aee3ff", 0.86);
  const cream = makeStandardMaterial(config.accent ?? "#fff4c7", 0.9);

  const body = ellipsoidMesh(1, blue, new THREE.Vector3(0.055, 0.052, 0.055), 36);
  body.position.y = 0.058;
  body.name = "round_blue_rug_toy_body";
  group.add(body);

  const dot = cylinderMesh(0.024, 0.024, 0.006, cream, 28);
  dot.rotation.x = Math.PI / 2;
  dot.position.set(0, 0.064, 0.056);
  dot.name = "cream_front_dot";
  group.add(dot);

  finalizeGroup(group, {
    materialSlots: ["plasticMain", "accent"],
    sockets: { floor_attach: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/43_blue_rug_toy_front_view.svg",
      "room_objects_51_images/43_blue_rug_toy_top_view.svg",
      "room_objects_51_images/43_blue_rug_toy_side_view.svg"
    ]
  });
  return group;
}
