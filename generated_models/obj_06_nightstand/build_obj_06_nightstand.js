import * as THREE from "three";
import {
  roundedBoxMesh,
  makeStandardMaterial,
  finalizeGroup,
  cylinderMesh,
  extrudedRoundedRectMesh
} from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_06_nightstand";

  const woodMain = makeStandardMaterial(config.woodMain ?? "#dfb089", 0.9);
  const woodAccent = makeStandardMaterial(config.woodAccent ?? "#d6a47a", 0.88);
  const metalAccent = makeStandardMaterial(config.metalAccent ?? "#fff2b2", 0.45, 0.08);

  const shell = roundedBoxMesh(0.48, 0.5, 0.4, 0.024, woodMain, 10);
  shell.position.set(0, 0.27, 0);
  shell.name = "carcass";
  group.add(shell);

  const inset = roundedBoxMesh(0.43, 0.44, 0.33, 0.018, makeStandardMaterial("#edc6a3", 0.94), 8);
  inset.position.set(0, 0.27, 0.015);
  inset.name = "inner_inset";
  group.add(inset);

  const topCap = roundedBoxMesh(0.48, 0.04, 0.4, 0.02, woodAccent, 8);
  topCap.position.set(0, 0.5, 0);
  topCap.name = "top_cap";
  group.add(topCap);

  const upperDrawer = extrudedRoundedRectMesh(0.416, 0.08, 0.028, 0.012, makeStandardMaterial("#f0cda8", 0.93), {
    bevelThickness: 0.004,
    bevelSize: 0.004
  });
  upperDrawer.position.set(0, 0.37, 0.186);
  upperDrawer.name = "upper_drawer_front";
  group.add(upperDrawer);

  const lowerDoor = extrudedRoundedRectMesh(0.416, 0.16, 0.028, 0.014, woodMain, {
    bevelThickness: 0.004,
    bevelSize: 0.004
  });
  lowerDoor.position.set(0, 0.16, 0.186);
  lowerDoor.name = "lower_door_front";
  group.add(lowerDoor);

  const seam = roundedBoxMesh(0.42, 0.01, 0.008, 0.003, makeStandardMaterial("#2f2530", 0.8), 3);
  seam.position.set(0, 0.24, 0.195);
  group.add(seam);

  const slot = roundedBoxMesh(0.12, 0.018, 0.02, 0.007, metalAccent, 4);
  slot.position.set(0, 0.37, 0.202);
  slot.name = "handle_slot";
  group.add(slot);

  const knob = cylinderMesh(0.012, 0.012, 0.02, metalAccent, 20);
  knob.rotation.x = Math.PI / 2;
  knob.position.set(0, 0.105, 0.202);
  knob.name = "lower_knob";
  group.add(knob);

  for (const [x, z] of [[-0.18, -0.15], [0.18, -0.15], [-0.18, 0.15], [0.18, 0.15]]) {
    const foot = roundedBoxMesh(0.025, 0.03, 0.025, 0.008, woodAccent, 4);
    foot.position.set(x, 0.015, z);
    group.add(foot);
  }

  finalizeGroup(group, {
    materialSlots: ["woodMain", "woodAccent", "metalAccent"],
    sockets: {
      top_surface_center: new THREE.Vector3(0, 0.52, 0),
      front_face_center: new THREE.Vector3(0, 0.26, 0.2)
    },
    vectorSources: [
      "room_objects_51_images/06_nightstand_front_view.svg",
      "room_objects_51_images/06_nightstand_top_view.svg",
      "room_objects_51_images/06_nightstand_side_view.svg"
    ]
  });
  return group;
}
