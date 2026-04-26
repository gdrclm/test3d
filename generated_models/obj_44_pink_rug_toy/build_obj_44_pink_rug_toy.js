import * as THREE from "three";
import { ellipsoidMesh, makeStandardMaterial, cylinderMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_44_pink_rug_toy";

  const pink = makeStandardMaterial(config.plasticMain ?? "#ffd4e4", 0.86);
  const lavender = makeStandardMaterial(config.accent ?? "#c9b5ff", 0.88);

  const body = ellipsoidMesh(1, pink, new THREE.Vector3(0.055, 0.052, 0.055), 36);
  body.position.y = 0.058;
  body.name = "round_pink_rug_toy_body";
  group.add(body);

  const cap = cylinderMesh(0.026, 0.026, 0.006, lavender, 28);
  cap.rotation.x = Math.PI / 2;
  cap.position.set(0, 0.066, 0.056);
  cap.name = "lavender_front_accent";
  group.add(cap);

  finalizeGroup(group, {
    materialSlots: ["plasticMain", "accent"],
    sockets: { floor_attach: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/44_pink_rug_toy_front_view.svg",
      "room_objects_51_images/44_pink_rug_toy_top_view.svg",
      "room_objects_51_images/44_pink_rug_toy_side_view.svg"
    ]
  });
  return group;
}
