import * as THREE from "three";
import { ellipsoidMesh, makeStandardMaterial, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_05_bed_toy";

  const plush = makeStandardMaterial(config.plush ?? "#7fd0b5", 0.96);
  const accent = makeStandardMaterial(config.fabricAccent ?? "#ea8fb2", 0.94);
  const dark = makeStandardMaterial("#2f2530", 0.9);

  const torso = ellipsoidMesh(0.5, plush, new THREE.Vector3(0.09, 0.062, 0.122), 30);
  torso.position.set(0, 0.062, 0.03);
  torso.name = "torso";
  group.add(torso);

  const head = ellipsoidMesh(0.5, plush, new THREE.Vector3(0.056, 0.056, 0.056), 28);
  head.position.set(0, 0.15, -0.06);
  head.name = "head";
  group.add(head);

  for (const [name, x] of [["ear_left", -0.042], ["ear_right", 0.042]]) {
    const ear = ellipsoidMesh(0.5, plush, new THREE.Vector3(0.02, 0.04, 0.02), 20);
    ear.position.set(x, 0.205, -0.095);
    ear.name = name;
    group.add(ear);
  }

  for (const [name, x, z] of [
    ["arm_left", -0.1, 0.0],
    ["arm_right", 0.1, 0.0],
    ["leg_left", -0.042, 0.07],
    ["leg_right", 0.042, 0.07]
  ]) {
    const scale = name.includes("arm")
      ? new THREE.Vector3(0.016, 0.014, 0.022)
      : new THREE.Vector3(0.026, 0.024, 0.026);
    const part = ellipsoidMesh(0.5, plush, scale, 18);
    part.position.set(x, name.includes("arm") ? 0.06 : 0.026, z);
    part.name = name;
    group.add(part);
  }

  const nose = ellipsoidMesh(0.5, accent, new THREE.Vector3(0.012, 0.007, 0.01), 16);
  nose.position.set(0, 0.144, -0.108);
  group.add(nose);

  for (const x of [-0.018, 0.018]) {
    const eye = ellipsoidMesh(0.5, dark, new THREE.Vector3(0.006, 0.006, 0.005), 14);
    eye.position.set(x, 0.15, -0.104);
    group.add(eye);
  }

  finalizeGroup(group, {
    materialSlots: ["plush", "fabricAccent"],
    sockets: { bed_plush_slot: new THREE.Vector3(0, 0.03, 0) },
    vectorSources: [
      "room_objects_51_images/05_bed_toy_front_view.svg",
      "room_objects_51_images/05_bed_toy_top_view.svg",
      "room_objects_51_images/05_bed_toy_side_view.svg"
    ]
  });
  return group;
}
