import * as THREE from "three";
import { makeStandardMaterial, roundedBoxMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_22_monitor";

  const frame = makeStandardMaterial(config.plasticMain ?? "#677088", 0.76);
  const glass = makeStandardMaterial(config.glass ?? "#dff4ff", 0.28);
  const standMat = makeStandardMaterial(config.standAccent ?? "#d7dbe6", 0.62);

  const panel = roundedBoxMesh(0.52, 0.31, 0.045, 0.018, frame, 6);
  panel.position.set(0, 0.265, 0);
  panel.name = "dark_rounded_screen_frame";
  group.add(panel);

  const screen = roundedBoxMesh(0.46, 0.235, 0.012, 0.012, glass, 4);
  screen.position.set(0, 0.27, 0.03);
  screen.name = "pale_screen_plane";
  group.add(screen);

  const neck = roundedBoxMesh(0.035, 0.07, 0.04, 0.01, standMat, 4);
  neck.position.set(0, 0.075, 0);
  neck.name = "small_center_stand";
  group.add(neck);

  const foot = roundedBoxMesh(0.155, 0.035, 0.09, 0.012, standMat, 5);
  foot.position.set(0, 0.018, 0);
  foot.name = "rounded_monitor_foot";
  group.add(foot);

  finalizeGroup(group, {
    materialSlots: ["plasticMain", "glass", "standAccent"],
    sockets: {
      desktop_attach_center: new THREE.Vector3(0, 0, 0),
      screen_tilt_pivot: new THREE.Vector3(0, 0.12, 0)
    },
    vectorSources: [
      "room_objects_51_images/22_monitor_front_view.svg",
      "room_objects_51_images/22_monitor_top_view.svg",
      "room_objects_51_images/22_monitor_side_view.svg"
    ]
  });
  return group;
}
