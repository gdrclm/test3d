import * as THREE from "three";
import { extrudeShapeMesh, makeStandardMaterial, roundedBoxMesh, finalizeGroup } from "../shared/projection_model_utils.js";

function roofPrism(width, height, depth, material) {
  const shape = new THREE.Shape();
  shape.moveTo(-width * 0.5, -height * 0.5);
  shape.lineTo(0, height * 0.5);
  shape.lineTo(width * 0.5, -height * 0.5);
  shape.lineTo(-width * 0.5, -height * 0.5);
  return extrudeShapeMesh(shape, depth, material, {
    bevelThickness: 0.006,
    bevelSize: 0.006,
    bevelSegments: 2,
    curveSegments: 2
  });
}

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_29_doll_house";

  const wall = makeStandardMaterial(config.wallMain ?? "#fff4c7", 0.88);
  const roofMat = makeStandardMaterial(config.roofAccent ?? "#ffd4e4", 0.86);
  const detail = makeStandardMaterial(config.detailAccent ?? "#ffffff", 0.92);
  const chimney = makeStandardMaterial(config.chimneyAccent ?? "#d6a47a", 0.84);

  const base = roundedBoxMesh(0.16, 0.09, 0.12, 0.012, wall, 5);
  base.position.y = 0.045;
  base.name = "small_doll_house_body";
  group.add(base);

  const roof = roofPrism(0.19, 0.09, 0.16, roofMat);
  roof.position.y = 0.135;
  roof.name = "pink_roof_prism";
  group.add(roof);

  const door = roundedBoxMesh(0.032, 0.04, 0.008, 0.004, detail, 3);
  door.position.set(0, 0.04, 0.065);
  door.name = "white_front_door";
  group.add(door);

  const chimneyBox = roundedBoxMesh(0.018, 0.038, 0.025, 0.004, chimney, 3);
  chimneyBox.position.set(0.045, 0.16, 0.025);
  chimneyBox.name = "tiny_roof_chimney";
  group.add(chimneyBox);

  finalizeGroup(group, {
    materialSlots: ["wallMain", "roofAccent", "detailAccent", "chimneyAccent"],
    sockets: { floor_attach: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/29_doll_house_front_view.svg",
      "room_objects_51_images/29_doll_house_top_view.svg",
      "room_objects_51_images/29_doll_house_side_view.svg"
    ]
  });
  return group;
}
