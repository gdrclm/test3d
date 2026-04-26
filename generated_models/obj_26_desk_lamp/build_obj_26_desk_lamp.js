import * as THREE from "three";
import { cylinderMesh, ellipsoidMesh, lampShadeMesh, makeStandardMaterial, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_26_desk_lamp";

  const shadeMat = makeStandardMaterial(config.shadeMain ?? "#ffd4e4", 0.86);
  const stemMat = makeStandardMaterial(config.stemAccent ?? "#677088", 0.6);
  const bulbMat = makeStandardMaterial(config.lightEmitter ?? "#fff0c7", 0.2);
  bulbMat.transparent = true;
  bulbMat.opacity = 0.78;

  const base = cylinderMesh(0.09, 0.09, 0.035, shadeMat, 36);
  base.position.y = 0.018;
  base.name = "round_pink_base";
  group.add(base);

  const stem = cylinderMesh(0.012, 0.012, 0.18, stemMat, 16);
  stem.position.y = 0.13;
  stem.name = "thin_grey_stem";
  group.add(stem);

  const shade = lampShadeMesh(0.18, 0.12, shadeMat);
  shade.position.y = 0.23;
  shade.name = "pink_curved_shade";
  group.add(shade);

  const bulb = ellipsoidMesh(1, bulbMat, new THREE.Vector3(0.035, 0.025, 0.035), 18);
  bulb.position.y = 0.21;
  bulb.name = "warm_small_bulb";
  group.add(bulb);

  finalizeGroup(group, {
    materialSlots: ["shadeMain", "stemAccent", "lightEmitter"],
    sockets: {
      desktop_attach_center: new THREE.Vector3(0, 0, 0),
      light_emitter: new THREE.Vector3(0, 0.21, 0)
    },
    vectorSources: [
      "room_objects_51_images/26_desk_lamp_front_view.svg",
      "room_objects_51_images/26_desk_lamp_top_view.svg",
      "room_objects_51_images/26_desk_lamp_side_view.svg"
    ]
  });
  return group;
}
