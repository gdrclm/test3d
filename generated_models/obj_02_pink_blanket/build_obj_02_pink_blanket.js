import * as THREE from "three";
import {
  blanketMesh,
  makeStandardMaterial,
  finalizeGroup,
  extrudedRoundedRectMesh
} from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_02_pink_blanket";

  const fabricMain = makeStandardMaterial(config.fabricMain ?? "#f19ac0", 0.97);
  const fabricAccent = makeStandardMaterial(config.fabricAccent ?? "#ffd6e6", 0.98);

  const body = blanketMesh(0.78, 0.11, 1.8, fabricMain);
  body.position.set(0, 0.055, 0);
  body.name = "blanket_mass";
  group.add(body);

  const topSkin = extrudedRoundedRectMesh(0.742, 1.72, 0.016, 0.05, fabricAccent, {
    bevelThickness: 0.004,
    bevelSize: 0.004
  });
  topSkin.rotation.x = Math.PI / 2;
  topSkin.position.set(0, 0.097, 0);
  topSkin.name = "front_fold";
  group.add(topSkin);

  finalizeGroup(group, {
    materialSlots: ["fabricMain", "fabricAccent"],
    sockets: { bed_attach_zone: new THREE.Vector3(0, 0.01, 0) },
    vectorSources: [
      "room_objects_51_images/02_pink_blanket_front_view.svg",
      "room_objects_51_images/02_pink_blanket_top_view.svg",
      "room_objects_51_images/02_pink_blanket_side_view.svg"
    ]
  });
  return group;
}
