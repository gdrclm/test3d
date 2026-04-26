import * as THREE from "three";
import { makeStandardMaterial, roundedBoxMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_15_bookshelf";

  const woodMain = makeStandardMaterial(config.woodMain ?? "#d6a47a", 0.86);
  const woodAccent = makeStandardMaterial(config.woodAccent ?? "#e8c09b", 0.9);
  const shadowBack = makeStandardMaterial(config.shadowBack ?? "#f5d4bd", 0.95);

  const back = roundedBoxMesh(1.34, 1.12, 0.035, 0.018, shadowBack, 4);
  back.position.set(0, 0.62, -0.17);
  back.name = "thin_back_panel";
  group.add(back);

  for (const x of [-0.68, 0.68]) {
    const side = roundedBoxMesh(0.08, 1.2, 0.35, 0.02, woodMain, 5);
    side.position.set(x, 0.6, 0);
    side.name = "rounded_side_stile";
    group.add(side);
  }

  for (const y of [0.06, 0.41, 0.78, 1.15]) {
    const shelf = roundedBoxMesh(1.4, 0.08, 0.35, 0.018, woodMain, 5);
    shelf.position.y = y;
    shelf.name = "horizontal_shelf_board";
    group.add(shelf);
  }

  const topLip = roundedBoxMesh(1.5, 0.08, 0.39, 0.022, woodAccent, 5);
  topLip.position.y = 1.24;
  topLip.name = "top_rounded_lip";
  group.add(topLip);

  finalizeGroup(group, {
    materialSlots: ["woodMain", "woodAccent", "shadowBack"],
    sockets: {
      shelf_slot_lower: new THREE.Vector3(0, 0.45, 0),
      shelf_slot_middle: new THREE.Vector3(0, 0.82, 0),
      shelf_slot_top: new THREE.Vector3(0, 1.18, 0)
    },
    vectorSources: [
      "room_objects_51_images/15_bookshelf_front_view.svg",
      "room_objects_51_images/15_bookshelf_top_view.svg",
      "room_objects_51_images/15_bookshelf_side_view.svg"
    ]
  });
  return group;
}
