import * as THREE from "three";
import { cylinderMesh, makeStandardMaterial, roundedBoxMesh, tubeCurveMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_42_poster_02";

  const paper = makeStandardMaterial(config.paper ?? "#faf7ff", 0.94);
  const blue = makeStandardMaterial(config.graphicMain ?? "#aee3ff", 0.93);
  const cream = makeStandardMaterial(config.sunAccent ?? "#fff4c7", 0.9);
  const white = makeStandardMaterial(config.lineAccent ?? "#ffffff", 0.9);

  const panel = roundedBoxMesh(0.42, 0.6, 0.02, 0.012, paper, 4);
  panel.position.y = 0.3;
  panel.name = "rounded_poster_panel";
  group.add(panel);

  const field = roundedBoxMesh(0.37, 0.52, 0.008, 0.009, blue, 3);
  field.position.set(0, 0.3, 0.016);
  field.name = "blue_graphic_zone";
  group.add(field);

  const mountain = tubeCurveMesh([
    new THREE.Vector3(-0.12, 0.13, 0.029),
    new THREE.Vector3(-0.055, 0.31, 0.032),
    new THREE.Vector3(0, 0.45, 0.032),
    new THREE.Vector3(0.065, 0.29, 0.032),
    new THREE.Vector3(0.12, 0.13, 0.029)
  ], 0.008, white, 44);
  mountain.name = "white_svg_mountain_line";
  group.add(mountain);

  const sunDisc = cylinderMesh(0.025, 0.025, 0.007, cream, 32);
  sunDisc.rotation.x = Math.PI / 2;
  sunDisc.position.set(-0.095, 0.46, 0.026);
  sunDisc.name = "small_cream_sun_disc";
  group.add(sunDisc);

  finalizeGroup(group, {
    materialSlots: ["paper", "graphicMain", "sunAccent", "lineAccent"],
    sockets: { wall_mount_center: new THREE.Vector3(0, 0.3, -0.012) },
    vectorSources: [
      "room_objects_51_images/42_poster_02_front_view.svg",
      "room_objects_51_images/42_poster_02_top_view.svg",
      "room_objects_51_images/42_poster_02_side_view.svg"
    ]
  });
  return group;
}
