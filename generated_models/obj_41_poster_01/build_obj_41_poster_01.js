import * as THREE from "three";
import { cylinderMesh, makeStandardMaterial, roundedBoxMesh, tubeCurveMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_41_poster_01";

  const paper = makeStandardMaterial(config.paper ?? "#faf7ff", 0.94);
  const graphic = makeStandardMaterial(config.graphicMain ?? "#ffd4e4", 0.96);
  const sun = makeStandardMaterial(config.sunAccent ?? "#fff4c7", 0.9);
  const line = makeStandardMaterial(config.lineAccent ?? "#ffffff", 0.9);
  const lavender = makeStandardMaterial(config.lavenderAccent ?? "#aa92ef", 0.88);

  const panel = roundedBoxMesh(0.42, 0.6, 0.02, 0.012, paper, 4);
  panel.position.y = 0.3;
  panel.name = "rounded_poster_panel";
  group.add(panel);

  const field = roundedBoxMesh(0.37, 0.52, 0.008, 0.009, graphic, 3);
  field.position.set(0, 0.3, 0.016);
  field.name = "pink_graphic_zone";
  group.add(field);

  const sunDisc = cylinderMesh(0.055, 0.055, 0.007, sun, 40);
  sunDisc.rotation.x = Math.PI / 2;
  sunDisc.position.set(0, 0.415, 0.024);
  sunDisc.name = "cream_sun_disc";
  group.add(sunDisc);

  const whiteArc = tubeCurveMesh([
    new THREE.Vector3(-0.115, 0.205, 0.028),
    new THREE.Vector3(-0.055, 0.31, 0.03),
    new THREE.Vector3(0.055, 0.31, 0.03),
    new THREE.Vector3(0.115, 0.205, 0.028)
  ], 0.008, line, 32);
  whiteArc.name = "white_svg_smile_arc";
  group.add(whiteArc);

  const lavenderArc = tubeCurveMesh([
    new THREE.Vector3(-0.115, 0.145, 0.03),
    new THREE.Vector3(-0.035, 0.235, 0.032),
    new THREE.Vector3(0, 0.255, 0.032),
    new THREE.Vector3(0.118, 0.145, 0.03)
  ], 0.005, lavender, 32);
  lavenderArc.name = "lavender_lower_graphic_arc";
  group.add(lavenderArc);

  finalizeGroup(group, {
    materialSlots: ["paper", "graphicMain", "sunAccent", "lineAccent", "lavenderAccent"],
    sockets: { wall_mount_center: new THREE.Vector3(0, 0.3, -0.012) },
    vectorSources: [
      "room_objects_51_images/41_poster_01_front_view.svg",
      "room_objects_51_images/41_poster_01_top_view.svg",
      "room_objects_51_images/41_poster_01_side_view.svg"
    ]
  });
  return group;
}
