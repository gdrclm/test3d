import * as THREE from "three";
import { makeStandardMaterial, roundedBoxMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_23_keyboard";

  const bodyMat = makeStandardMaterial(config.bodyMain ?? "#ffffff", 0.78);
  const keyMat = makeStandardMaterial(config.keyMain ?? "#d7dbe6", 0.72);

  const body = roundedBoxMesh(0.44, 0.03, 0.16, 0.012, bodyMat, 5);
  body.position.y = 0.015;
  body.name = "white_keyboard_body";
  group.add(body);

  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 10; col += 1) {
      const key = roundedBoxMesh(0.026, 0.006, 0.018, 0.003, keyMat, 2);
      key.position.set(-0.17 + col * 0.038 + row * 0.006, 0.034, -0.045 + row * 0.036);
      key.name = "small_keyboard_key";
      group.add(key);
    }
  }

  const space = roundedBoxMesh(0.19, 0.006, 0.022, 0.004, keyMat, 2);
  space.position.set(-0.015, 0.035, 0.055);
  space.name = "long_spacebar_key";
  group.add(space);

  finalizeGroup(group, {
    materialSlots: ["bodyMain", "keyMain"],
    sockets: { desktop_attach_center: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/23_keyboard_front_view.svg",
      "room_objects_51_images/23_keyboard_top_view.svg",
      "room_objects_51_images/23_keyboard_side_view.svg"
    ]
  });
  return group;
}
