import * as THREE from "three";
import { cylinderMesh, makeStandardMaterial, roundedBoxMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_11_door";

  const woodMain = makeStandardMaterial(config.woodMain ?? "#d6a47a", 0.82);
  const woodAccent = makeStandardMaterial(config.woodAccent ?? "#e8c09b", 0.86);
  const metalAccent = makeStandardMaterial(config.metalAccent ?? "#fff2b2", 0.48, 0.08);

  const leaf = roundedBoxMesh(0.9, 2.0, 0.07, 0.025, woodMain, 8);
  leaf.position.y = 1;
  leaf.name = "door_leaf_rounded";
  group.add(leaf);

  const innerFrame = roundedBoxMesh(0.77, 1.72, 0.018, 0.018, woodAccent, 6);
  innerFrame.position.set(0, 1.06, 0.046);
  innerFrame.name = "front_inner_frame";
  group.add(innerFrame);

  const panelBack = roundedBoxMesh(0.68, 1.54, 0.014, 0.014, woodMain, 5);
  panelBack.position.set(0, 1.06, 0.058);
  panelBack.name = "front_recess_plane";
  group.add(panelBack);

  for (const [name, y] of [["upper_inset_panel", 1.48], ["lower_inset_panel", 0.74]]) {
    const panel = roundedBoxMesh(0.62, 0.52, 0.018, 0.018, woodAccent, 6);
    panel.position.set(0, y, 0.071);
    panel.name = name;
    group.add(panel);
  }

  const centerRail = roundedBoxMesh(0.68, 0.045, 0.02, 0.01, woodAccent, 4);
  centerRail.position.set(0, 1.1, 0.078);
  centerRail.name = "middle_horizontal_rail";
  group.add(centerRail);

  const knob = cylinderMesh(0.038, 0.035, 0.038, metalAccent, 24);
  knob.rotation.x = Math.PI / 2;
  knob.position.set(0.31, 1.06, 0.105);
  knob.name = "round_knob";
  group.add(knob);

  const knobBase = cylinderMesh(0.05, 0.05, 0.014, metalAccent, 24);
  knobBase.rotation.x = Math.PI / 2;
  knobBase.position.set(0.31, 1.06, 0.079);
  knobBase.name = "knob_backplate";
  group.add(knobBase);

  for (const y of [1.62, 1.06, 0.48]) {
    const hinge = roundedBoxMesh(0.035, 0.2, 0.024, 0.006, metalAccent, 4);
    hinge.position.set(-0.468, y, 0);
    hinge.name = "left_side_hinge_plate";
    group.add(hinge);
  }

  finalizeGroup(group, {
    materialSlots: ["woodMain", "woodAccent", "metalAccent"],
    sockets: {
      door_hinge_side: new THREE.Vector3(-0.45, 1, 0),
      door_handle_center: new THREE.Vector3(0.31, 1.06, 0.105)
    },
    vectorSources: [
      "room_objects_51_images/11_door_front_view.svg",
      "room_objects_51_images/11_door_top_view.svg",
      "room_objects_51_images/11_door_side_view.svg"
    ]
  });
  return group;
}
