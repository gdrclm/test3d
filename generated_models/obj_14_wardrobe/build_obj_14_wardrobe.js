import * as THREE from "three";
import { cylinderMesh, makeStandardMaterial, roundedBoxMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_14_wardrobe";

  const woodMain = makeStandardMaterial(config.woodMain ?? "#d6a47a", 0.84);
  const woodAccent = makeStandardMaterial(config.woodAccent ?? "#e8c09b", 0.88);
  const doorInset = makeStandardMaterial(config.doorInset ?? "#f5d4bd", 0.9);
  doorInset.transparent = true;
  doorInset.opacity = 0.68;
  const metalAccent = makeStandardMaterial(config.metalAccent ?? "#fff2b2", 0.45, 0.06);

  const body = roundedBoxMesh(1.6, 2.0, 0.62, 0.04, woodMain, 8);
  body.position.y = 1;
  body.name = "wardrobe_outer_body";
  group.add(body);

  const backInset = roundedBoxMesh(1.48, 1.86, 0.035, 0.025, woodAccent, 5);
  backInset.position.set(0, 1, 0.328);
  backInset.name = "front_recessed_door_field";
  group.add(backInset);

  for (const [x, name] of [[-0.39, "left_door_panel"], [0.39, "right_door_panel"]]) {
    const door = roundedBoxMesh(0.7, 1.74, 0.045, 0.025, doorInset, 6);
    door.position.set(x, 1, 0.36);
    door.name = name;
    group.add(door);
  }

  const centerGap = roundedBoxMesh(0.035, 1.78, 0.055, 0.008, woodAccent, 3);
  centerGap.position.set(0, 1, 0.388);
  centerGap.name = "central_vertical_seam";
  group.add(centerGap);

  const topCap = roundedBoxMesh(1.7, 0.09, 0.68, 0.03, woodAccent, 5);
  topCap.position.y = 2.045;
  topCap.name = "slightly_overhanging_top_cap";
  group.add(topCap);

  const plinth = roundedBoxMesh(1.68, 0.1, 0.66, 0.025, woodAccent, 5);
  plinth.position.y = 0.05;
  plinth.name = "bottom_plinth";
  group.add(plinth);

  for (const x of [-0.08, 0.08]) {
    const handle = cylinderMesh(0.012, 0.012, 0.62, metalAccent, 16);
    handle.position.set(x, 1.05, 0.425);
    handle.name = "vertical_pull_handle";
    group.add(handle);
  }

  finalizeGroup(group, {
    materialSlots: ["woodMain", "woodAccent", "doorInset", "metalAccent"],
    sockets: {
      door_left_hinge: new THREE.Vector3(-0.78, 1, 0.34),
      door_right_hinge: new THREE.Vector3(0.78, 1, 0.34),
      top_surface_center: new THREE.Vector3(0, 2.09, 0)
    },
    vectorSources: [
      "room_objects_51_images/14_wardrobe_front_view.svg",
      "room_objects_51_images/14_wardrobe_top_view.svg",
      "room_objects_51_images/14_wardrobe_side_view.svg"
    ]
  });
  return group;
}
