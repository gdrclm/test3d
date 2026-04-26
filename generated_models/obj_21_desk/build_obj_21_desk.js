import * as THREE from "three";
import { makeStandardMaterial, roundedBoxMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_21_desk";

  const woodMain = makeStandardMaterial(config.woodMain ?? "#f5d4bd", 0.86);
  const woodAccent = makeStandardMaterial(config.woodAccent ?? "#e8c09b", 0.88);
  const legMat = makeStandardMaterial(config.legAccent ?? "#d6a47a", 0.88);

  const top = roundedBoxMesh(1.6, 0.08, 0.6, 0.025, woodMain, 6);
  top.position.y = 0.71;
  top.name = "rounded_desktop";
  group.add(top);

  const frontLip = roundedBoxMesh(1.48, 0.055, 0.055, 0.012, woodAccent, 4);
  frontLip.position.set(0, 0.665, 0.265);
  frontLip.name = "front_apron_strip";
  group.add(frontLip);

  for (const x of [-0.65, 0.65]) {
    const sideSupport = roundedBoxMesh(0.095, 0.68, 0.54, 0.014, legMat, 4);
    sideSupport.position.set(x, 0.34, 0);
    sideSupport.name = "full_depth_side_support";
    group.add(sideSupport);
  }

  finalizeGroup(group, {
    materialSlots: ["woodMain", "woodAccent", "legAccent"],
    sockets: {
      desktop_monitor_slot: new THREE.Vector3(0, 0.77, -0.16),
      desktop_keyboard_slot: new THREE.Vector3(0, 0.77, 0.16),
      desktop_book_slot: new THREE.Vector3(-0.42, 0.77, 0.08),
      desktop_lamp_slot: new THREE.Vector3(0.55, 0.77, -0.08)
    },
    vectorSources: [
      "room_objects_51_images/21_desk_front_view.svg",
      "room_objects_51_images/21_desk_top_view.svg",
      "room_objects_51_images/21_desk_side_view.svg"
    ]
  });
  return group;
}
