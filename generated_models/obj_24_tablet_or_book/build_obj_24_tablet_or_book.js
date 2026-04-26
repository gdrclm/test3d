import * as THREE from "three";
import { makeStandardMaterial, roundedBoxMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_24_tablet_or_book";

  const cover = makeStandardMaterial(config.coverMain ?? "#c9b5ff", 0.84);
  const page = makeStandardMaterial(config.pageMain ?? "#faf7ff", 0.92);
  const lineMat = makeStandardMaterial(config.lineAccent ?? "#ead1dc", 0.95);

  const base = roundedBoxMesh(0.28, 0.02, 0.22, 0.014, cover, 5);
  base.position.y = 0.01;
  base.name = "lavender_flat_cover";
  group.add(base);

  const inset = roundedBoxMesh(0.25, 0.008, 0.17, 0.01, page, 4);
  inset.position.y = 0.026;
  inset.name = "pale_inner_page";
  group.add(inset);

  const spine = roundedBoxMesh(0.006, 0.01, 0.17, 0.002, lineMat, 2);
  spine.position.set(0, 0.032, 0);
  spine.name = "center_spine_line";
  group.add(spine);

  finalizeGroup(group, {
    materialSlots: ["coverMain", "pageMain", "lineAccent"],
    sockets: { desktop_attach_center: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/24_tablet_or_book_top_view.svg",
      "room_objects_51_images/24_tablet_or_book_top_view.svg",
      "room_objects_51_images/24_tablet_or_book_side_view.svg"
    ]
  });
  return group;
}
