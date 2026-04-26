import * as THREE from "three";
import { cylinderMesh, ellipsoidMesh, lampShadeMesh, makeStandardMaterial, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_12_ceiling_lamp";

  const metalAccent = makeStandardMaterial(config.metalAccent ?? "#d6a47a", 0.5, 0.05);
  const shadeOuter = makeStandardMaterial(config.plasticMain ?? "#78c6ea", 0.78);
  const glass = makeStandardMaterial(config.glass ?? "#fff0c7", 0.22);
  glass.transparent = true;
  glass.opacity = 0.78;

  const cap = cylinderMesh(0.095, 0.115, 0.045, metalAccent, 32);
  cap.position.y = 0.528;
  cap.name = "ceiling_cap";
  group.add(cap);

  const cord = cylinderMesh(0.01, 0.01, 0.22, metalAccent, 16);
  cord.position.y = 0.405;
  cord.name = "vertical_cord";
  group.add(cord);

  const neck = cylinderMesh(0.055, 0.045, 0.055, metalAccent, 24);
  neck.position.y = 0.275;
  neck.name = "shade_neck";
  group.add(neck);

  const shade = lampShadeMesh(0.42, 0.23, shadeOuter);
  shade.position.y = 0.125;
  shade.name = "curved_blue_shade";
  group.add(shade);

  const bulb = ellipsoidMesh(1, glass, new THREE.Vector3(0.07, 0.095, 0.07), 24);
  bulb.position.y = 0.12;
  bulb.name = "warm_light_emitter";
  group.add(bulb);

  finalizeGroup(group, {
    materialSlots: ["metalAccent", "glass", "plasticMain"],
    sockets: {
      ceiling_mount: new THREE.Vector3(0, 0.55, 0),
      light_emitter: new THREE.Vector3(0, 0.12, 0)
    },
    vectorSources: [
      "room_objects_51_images/12_ceiling_lamp_front_view.svg",
      "room_objects_51_images/12_ceiling_lamp_top_view.svg",
      "room_objects_51_images/12_ceiling_lamp_side_view.svg"
    ]
  });
  return group;
}
