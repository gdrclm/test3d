import * as THREE from "three";
import { ellipsoidMesh, makeStandardMaterial, cylinderMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_45_yellow_rug_toy";

  const yellow = makeStandardMaterial(config.plasticMain ?? "#fff4c7", 0.86);
  const pink = makeStandardMaterial(config.accent ?? "#ffd4e4", 0.88);

  const body = ellipsoidMesh(1, yellow, new THREE.Vector3(0.05, 0.048, 0.05), 36);
  body.position.y = 0.053;
  body.name = "round_yellow_rug_toy_body";
  group.add(body);

  const stripe = cylinderMesh(0.022, 0.022, 0.006, pink, 28);
  stripe.rotation.x = Math.PI / 2;
  stripe.position.set(0, 0.06, 0.051);
  stripe.name = "pink_front_accent";
  group.add(stripe);

  finalizeGroup(group, {
    materialSlots: ["plasticMain", "accent"],
    sockets: { floor_attach: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/45_yellow_rug_toy_front_view.svg",
      "room_objects_51_images/45_yellow_rug_toy_top_view.svg",
      "room_objects_51_images/45_yellow_rug_toy_side_view.svg"
    ]
  });
  return group;
}
