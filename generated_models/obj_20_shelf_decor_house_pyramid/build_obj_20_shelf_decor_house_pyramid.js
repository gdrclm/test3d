import * as THREE from "three";
import { extrudeShapeMesh, makeStandardMaterial, roundedBoxMesh, finalizeGroup } from "../shared/projection_model_utils.js";

function roofPrism(width, height, depth, material) {
  const shape = new THREE.Shape();
  shape.moveTo(-width * 0.5, -height * 0.5);
  shape.lineTo(0, height * 0.5);
  shape.lineTo(width * 0.5, -height * 0.5);
  shape.lineTo(-width * 0.5, -height * 0.5);
  const mesh = extrudeShapeMesh(shape, depth, material, {
    bevelThickness: 0.006,
    bevelSize: 0.006,
    bevelSegments: 2,
    curveSegments: 2
  });
  return mesh;
}

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_20_shelf_decor_house_pyramid";

  const wallMat = makeStandardMaterial(config.wallMain ?? "#fff4c7", 0.88);
  const roofMat = makeStandardMaterial(config.roofAccent ?? "#ffd4e4", 0.86);
  const detailMat = makeStandardMaterial(config.detailAccent ?? "#ffffff", 0.92);

  const base = roundedBoxMesh(0.16, 0.085, 0.14, 0.012, wallMat, 5);
  base.position.y = 0.042;
  base.name = "small_house_body";
  group.add(base);

  const roof = roofPrism(0.19, 0.095, 0.155, roofMat);
  roof.position.y = 0.13;
  roof.name = "triangular_prism_roof";
  group.add(roof);

  const door = roundedBoxMesh(0.035, 0.052, 0.008, 0.004, detailMat, 3);
  door.position.set(-0.034, 0.033, 0.075);
  door.name = "tiny_front_door";
  group.add(door);

  const window = roundedBoxMesh(0.032, 0.028, 0.008, 0.004, detailMat, 3);
  window.position.set(0.038, 0.054, 0.075);
  window.name = "tiny_front_window";
  group.add(window);

  finalizeGroup(group, {
    materialSlots: ["wallMain", "roofAccent", "detailAccent"],
    sockets: { shelf_contact: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/20_shelf_decor_house_pyramid_front_view.svg",
      "room_objects_51_images/20_shelf_decor_house_pyramid_top_view.svg",
      "room_objects_51_images/20_shelf_decor_house_pyramid_side_view.svg"
    ]
  });
  return group;
}
