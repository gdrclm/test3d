import * as THREE from "three";
import { makeStandardMaterial, ellipsoidMesh, tubeCurveMesh, finalizeGroup } from "../shared/projection_model_utils.js";

function addSlipper(group, x, upperMaterial) {
  const soleMat = makeStandardMaterial("#fff3dc", 0.96);
  const sole = ellipsoidMesh(1, soleMat, new THREE.Vector3(0.095, 0.028, 0.15), 32);
  sole.position.set(x, 0.035, 0);
  sole.name = "cream_soft_slipper_sole";
  group.add(sole);

  const upper = ellipsoidMesh(1, upperMaterial, new THREE.Vector3(0.082, 0.032, 0.068), 28);
  upper.position.set(x, 0.075, -0.025);
  upper.name = "colored_slipper_upper";
  group.add(upper);

  const seam = tubeCurveMesh([
    new THREE.Vector3(x - 0.06, 0.086, -0.055),
    new THREE.Vector3(x, 0.102, -0.075),
    new THREE.Vector3(x + 0.06, 0.086, -0.055)
  ], 0.0035, makeStandardMaterial("#2f2530", 0.75), 24);
  seam.name = "thin_upper_edge";
  group.add(seam);
}

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_49_slippers";

  addSlipper(group, -0.095, makeStandardMaterial(config.leftUpper ?? "#ffd4e4", 0.9));
  addSlipper(group, 0.095, makeStandardMaterial(config.rightUpper ?? "#86d7c0", 0.9));

  finalizeGroup(group, {
    materialSlots: ["soleCream", "leftUpper", "rightUpper"],
    sockets: { floor_attach: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/49_slippers_front_view.svg",
      "room_objects_51_images/49_slippers_top_view.svg",
      "room_objects_51_images/49_slippers_side_view.svg"
    ]
  });
  return group;
}
