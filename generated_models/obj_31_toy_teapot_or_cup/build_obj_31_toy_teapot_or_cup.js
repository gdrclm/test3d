import * as THREE from "three";
import { cylinderMesh, ellipsoidMesh, makeStandardMaterial, roundedBoxMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_31_toy_teapot_or_cup";

  const pink = makeStandardMaterial(config.pinkMain ?? "#ffd4e4", 0.86);
  const dark = makeStandardMaterial(config.darkAccent ?? "#2f2530", 0.7);

  const body = ellipsoidMesh(1, pink, new THREE.Vector3(0.045, 0.04, 0.045), 24);
  body.position.y = 0.045;
  body.name = "round_pink_teapot_body";
  group.add(body);

  const lid = roundedBoxMesh(0.04, 0.016, 0.026, 0.008, pink, 4);
  lid.position.y = 0.087;
  lid.name = "small_top_lid";
  group.add(lid);

  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.026, 0.004, 8, 24, Math.PI * 1.35), dark);
  handle.position.set(0.045, 0.046, 0);
  handle.rotation.z = Math.PI * 0.5;
  handle.name = "side_handle_arc";
  group.add(handle);

  const spout = cylinderMesh(0.005, 0.011, 0.052, dark, 12);
  spout.rotation.z = Math.PI * 0.62;
  spout.position.set(-0.047, 0.048, 0);
  spout.name = "short_spout";
  group.add(spout);

  finalizeGroup(group, {
    materialSlots: ["pinkMain", "darkAccent"],
    sockets: { tabletop_contact: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/31_toy_teapot_or_cup_front_view.svg",
      "room_objects_51_images/31_toy_teapot_or_cup_top_view.svg",
      "room_objects_51_images/31_toy_teapot_or_cup_side_view.svg"
    ]
  });
  return group;
}
