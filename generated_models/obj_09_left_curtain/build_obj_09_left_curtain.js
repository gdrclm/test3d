import * as THREE from "three";
import { curtainMesh, roundedBoxMesh, makeStandardMaterial, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_09_left_curtain";

  const rodAccent = makeStandardMaterial(config.rodAccent ?? "#d1a076", 0.84);
  const fabricMain = makeStandardMaterial(config.fabricMain ?? "#b09af0", 0.96);

  const rod = roundedBoxMesh(0.28, 0.03, 0.03, 0.008, rodAccent, 4);
  rod.position.set(0, 1.085, 0);
  rod.name = "curtain_rod_stub";
  group.add(rod);

  const cloth = curtainMesh(0.28, 1.02, 0.09, fabricMain, "left");
  cloth.position.set(0, 0.57, 0);
  cloth.name = "cloth_body";
  group.add(cloth);

  finalizeGroup(group, {
    materialSlots: ["fabricMain", "rodAccent"],
    sockets: { curtain_mount_top_left: new THREE.Vector3(0, 1.1, 0) },
    vectorSources: [
      "room_objects_51_images/09_left_curtain_front_view.svg",
      "room_objects_51_images/09_left_curtain_top_view.svg",
      "room_objects_51_images/09_left_curtain_side_view.svg"
    ]
  });
  return group;
}
