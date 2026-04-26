import * as THREE from "three";
import { cylinderMesh, makeStandardMaterial, roundedBoxMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_25_notebook_or_sheet";

  const cover = makeStandardMaterial(config.coverMain ?? "#faf7ff", 0.92);
  const page = makeStandardMaterial(config.pageMain ?? "#ffffff", 0.96);
  const binder = makeStandardMaterial(config.binderAccent ?? "#ffd4e4", 0.9);
  const lineMat = makeStandardMaterial(config.lineAccent ?? "#ead1dc", 0.95);

  const base = roundedBoxMesh(0.22, 0.02, 0.28, 0.012, cover, 5);
  base.position.y = 0.01;
  base.name = "notebook_outer_stack";
  group.add(base);

  const sheet = roundedBoxMesh(0.2, 0.006, 0.25, 0.008, page, 4);
  sheet.position.y = 0.026;
  sheet.name = "white_top_sheet";
  group.add(sheet);

  const strip = roundedBoxMesh(0.024, 0.008, 0.25, 0.003, binder, 2);
  strip.position.set(-0.085, 0.032, 0);
  strip.name = "pink_binder_strip";
  group.add(strip);

  for (let i = 0; i < 5; i += 1) {
    const hole = cylinderMesh(0.004, 0.004, 0.004, lineMat, 10);
    hole.position.set(-0.085, 0.039, -0.09 + i * 0.045);
    hole.name = "binder_hole_dot";
    group.add(hole);
  }

  for (let i = 0; i < 3; i += 1) {
    const line = roundedBoxMesh(0.15, 0.003, 0.004, 0.001, lineMat, 1);
    line.position.set(0.025, 0.037, -0.065 + i * 0.045);
    line.name = "pale_notebook_rule";
    group.add(line);
  }

  finalizeGroup(group, {
    materialSlots: ["coverMain", "pageMain", "binderAccent", "lineAccent"],
    sockets: { desktop_attach_center: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/25_notebook_front_view.svg",
      "room_objects_51_images/25_notebook_top_view.svg",
      "room_objects_51_images/25_notebook_side_view.svg"
    ]
  });
  return group;
}
