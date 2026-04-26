import * as THREE from "three";
import { cylinderMesh, makeStandardMaterial, finalizeGroup, ellipsoidMesh } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_07_bedside_lamp";

  const shadeMaterial = makeStandardMaterial(config.plasticMain ?? "#81cbeb", 0.58);
  const woodAccent = makeStandardMaterial(config.woodAccent ?? "#d5a177", 0.84);
  const glass = makeStandardMaterial(config.glass ?? "#fff0c7", 0.2, 0.02);
  const dark = makeStandardMaterial("#2f2530", 0.78);

  const base = ellipsoidMesh(0.5, woodAccent, new THREE.Vector3(0.11, 0.018, 0.11), 32);
  base.position.set(0, 0.018, 0);
  base.name = "base";
  group.add(base);

  const stem = roundedStem(woodAccent);
  stem.position.set(0, 0.095, 0);
  stem.name = "stem";
  group.add(stem);

  const shade = facetedShade(shadeMaterial);
  shade.position.set(0, 0.128, 0);
  shade.name = "shade";
  group.add(shade);

  const bulb = ellipsoidMesh(0.5, glass, new THREE.Vector3(0.04, 0.022, 0.04), 22);
  bulb.position.set(0, 0.19, 0);
  bulb.name = "bulb";
  group.add(bulb);

  const pull = cylinderMesh(0.0025, 0.0025, 0.05, dark, 10);
  pull.rotation.z = -0.3;
  pull.position.set(0.03, 0.15, 0);
  group.add(pull);

  finalizeGroup(group, {
    materialSlots: ["plasticMain", "woodAccent", "glass"],
    sockets: {
      light_emitter: new THREE.Vector3(0, 0.19, 0),
      table_attach_center: new THREE.Vector3(0, 0, 0)
    },
    vectorSources: [
      "room_objects_51_images/07_bedside_lamp_front_view.svg",
      "room_objects_51_images/07_bedside_lamp_top_view.svg",
      "room_objects_51_images/07_bedside_lamp_side_view.svg"
    ]
  });
  return group;
}

function roundedStem(material) {
  const mesh = cylinderMesh(0.012, 0.012, 0.086, material, 18);
  return mesh;
}

function facetedShade(material) {
  const points = [
    new THREE.Vector2(0.038, 0),
    new THREE.Vector2(0.05, 0.02),
    new THREE.Vector2(0.11, 0.1),
    new THREE.Vector2(0.082, 0.17)
  ];
  const geometry = new THREE.LatheGeometry(points, 24);
  geometry.rotateX(Math.PI);
  geometry.translate(0, 0.085, 0);
  return new THREE.Mesh(geometry, material);
}
