import * as THREE from "three";
import { ellipsoidMesh, makeStandardMaterial, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_17_shelf_plush";

  const furMain = makeStandardMaterial(config.furMain ?? "#78c6ea", 0.98);
  const muzzle = makeStandardMaterial(config.muzzle ?? "#aee3ff", 0.96);
  const dark = makeStandardMaterial(config.darkAccent ?? "#2f2530", 0.7);

  const body = ellipsoidMesh(1, furMain, new THREE.Vector3(0.078, 0.105, 0.06), 22);
  body.position.y = 0.105;
  body.name = "rounded_plush_body";
  group.add(body);

  const head = ellipsoidMesh(1, furMain, new THREE.Vector3(0.07, 0.068, 0.058), 22);
  head.position.y = 0.195;
  head.name = "round_plush_head";
  group.add(head);

  for (const x of [-0.044, 0.044]) {
    const ear = ellipsoidMesh(1, furMain, new THREE.Vector3(0.026, 0.032, 0.018), 16);
    ear.position.set(x, 0.252, 0);
    ear.name = "small_round_ear";
    group.add(ear);

    const eye = ellipsoidMesh(1, dark, new THREE.Vector3(0.007, 0.007, 0.004), 12);
    eye.position.set(x * 0.58, 0.205, 0.054);
    eye.name = "tiny_front_eye";
    group.add(eye);
  }

  const snout = ellipsoidMesh(1, muzzle, new THREE.Vector3(0.03, 0.022, 0.012), 16);
  snout.position.set(0, 0.185, 0.062);
  snout.name = "front_muzzle_patch";
  group.add(snout);

  for (const x of [-0.08, 0.08]) {
    const paw = ellipsoidMesh(1, furMain, new THREE.Vector3(0.025, 0.045, 0.025), 14);
    paw.position.set(x, 0.055, 0.018);
    paw.name = "small_lower_paw";
    group.add(paw);
  }

  finalizeGroup(group, {
    materialSlots: ["furMain", "muzzle", "darkAccent"],
    sockets: { shelf_contact: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/17_shelf_plush_front_view.svg",
      "room_objects_51_images/17_shelf_plush_top_view.svg",
      "room_objects_51_images/17_shelf_plush_side_view.svg"
    ]
  });
  return group;
}
