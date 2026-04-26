import * as THREE from "three";
import { cylinderMesh, makeStandardMaterial, tubeCurveMesh, finalizeGroup } from "../shared/projection_model_utils.js";

function leafMesh(material, scale, rotationZ, position) {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(-0.08, 0.09, -0.07, 0.2, 0, 0.28);
  shape.bezierCurveTo(0.09, 0.2, 0.08, 0.08, 0, 0);
  const geometry = new THREE.ShapeGeometry(shape, 24);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.scale.set(scale.x, scale.y, scale.z);
  mesh.rotation.set(-Math.PI / 2.8, 0, rotationZ);
  mesh.position.copy(position);
  return mesh;
}

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_50_plant_in_pot";

  const potOuter = makeStandardMaterial(config.potOuter ?? "#f5d4bd", 0.9);
  const potInner = makeStandardMaterial(config.potInner ?? "#e8c09b", 0.92);
  const leafA = makeStandardMaterial(config.leafA ?? "#9dd7a9", 0.88);
  const leafB = makeStandardMaterial(config.leafB ?? "#86d7c0", 0.88);
  const stem = makeStandardMaterial(config.stem ?? "#5c8f67", 0.8);

  const pot = cylinderMesh(0.16, 0.12, 0.22, potOuter, 48);
  pot.position.y = 0.11;
  pot.name = "soft_terracotta_pot";
  group.add(pot);

  const rim = cylinderMesh(0.18, 0.18, 0.035, potInner, 48);
  rim.position.y = 0.225;
  rim.name = "warm_pot_rim";
  group.add(rim);

  const stalk = cylinderMesh(0.012, 0.016, 0.24, stem, 16);
  stalk.position.y = 0.34;
  stalk.name = "central_green_stem";
  group.add(stalk);

  const leaves = [
    leafMesh(leafA, new THREE.Vector3(1.1, 1.2, 1), -0.75, new THREE.Vector3(-0.02, 0.34, 0.02)),
    leafMesh(leafB, new THREE.Vector3(1.0, 1.1, 1), 0.75, new THREE.Vector3(0.03, 0.35, 0.01)),
    leafMesh(leafA, new THREE.Vector3(0.9, 1.15, 1), 0.22, new THREE.Vector3(0.02, 0.42, -0.02)),
    leafMesh(leafB, new THREE.Vector3(0.85, 1.0, 1), -0.25, new THREE.Vector3(-0.04, 0.42, -0.01))
  ];
  leaves.forEach((leaf, index) => {
    leaf.name = `svg_leaf_${index + 1}`;
    group.add(leaf);
  });

  const vein = tubeCurveMesh([
    new THREE.Vector3(0, 0.24, 0.015),
    new THREE.Vector3(0.02, 0.39, 0.025),
    new THREE.Vector3(0.0, 0.56, 0.015)
  ], 0.004, stem, 24);
  vein.name = "visible_center_plant_curve";
  group.add(vein);

  finalizeGroup(group, {
    materialSlots: ["potOuter", "potInner", "leafA", "leafB", "stem"],
    sockets: { floor_attach: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/50_plant_in_pot_front_view.svg",
      "room_objects_51_images/50_plant_in_pot_top_view.svg",
      "room_objects_51_images/50_plant_in_pot_side_view.svg"
    ]
  });
  return group;
}
