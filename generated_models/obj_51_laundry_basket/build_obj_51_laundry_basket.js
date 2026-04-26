import * as THREE from "three";
import { cylinderMesh, makeStandardMaterial, tubeCurveMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_51_laundry_basket";

  const shell = makeStandardMaterial(config.shell ?? "#ffd4e4", 0.94);
  const inner = makeStandardMaterial(config.inner ?? "#faf7ff", 0.96);
  const seam = makeStandardMaterial(config.seam ?? "#ead1dc", 0.9);

  const body = cylinderMesh(0.25, 0.19, 0.34, shell, 64);
  body.position.y = 0.17;
  body.name = "tapered_pink_laundry_basket_body";
  group.add(body);

  const opening = cylinderMesh(0.205, 0.205, 0.025, inner, 64);
  opening.position.y = 0.345;
  opening.name = "pale_open_basket_rim";
  group.add(opening);

  const innerWell = cylinderMesh(0.16, 0.14, 0.07, inner, 48);
  innerWell.position.y = 0.325;
  innerWell.name = "visible_inner_basket_well";
  group.add(innerWell);

  const frontCurve = tubeCurveMesh([
    new THREE.Vector3(-0.13, 0.32, 0.21),
    new THREE.Vector3(0, 0.285, 0.235),
    new THREE.Vector3(0.13, 0.32, 0.21)
  ], 0.006, seam, 36);
  frontCurve.name = "pale_inside_front_curve";
  group.add(frontCurve);

  finalizeGroup(group, {
    materialSlots: ["shell", "inner", "seam"],
    sockets: { floor_attach: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/51_laundry_basket_front_view.svg",
      "room_objects_51_images/51_laundry_basket_top_view.svg",
      "room_objects_51_images/51_laundry_basket_side_view.svg"
    ]
  });
  return group;
}
