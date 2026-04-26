import * as THREE from "three";
import { roundedBoxMesh, makeStandardMaterial, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_08_window";

  const paintedFrame = makeStandardMaterial(config.paintedFrame ?? "#fbf9ff", 0.86);
  const frameAccent = makeStandardMaterial("#d6a47a", 0.84);
  const glass = new THREE.MeshStandardMaterial({
    color: config.glass ?? "#8fd4f5",
    roughness: 0.14,
    metalness: 0.02,
    transparent: true,
    opacity: 0.68
  });

  const leftBar = roundedBoxMesh(0.08, 0.62, 0.08, 0.01, paintedFrame, 4);
  leftBar.position.set(-1.06, 0.31, 0);
  group.add(leftBar);

  const rightBar = roundedBoxMesh(0.08, 0.62, 0.08, 0.01, paintedFrame, 4);
  rightBar.position.set(1.06, 0.31, 0);
  group.add(rightBar);

  const topBar = roundedBoxMesh(2.2, 0.08, 0.08, 0.01, paintedFrame, 4);
  topBar.position.set(0, 0.58, 0);
  group.add(topBar);

  const bottomBar = roundedBoxMesh(2.2, 0.05, 0.08, 0.008, paintedFrame, 4);
  bottomBar.position.set(0, 0.055, 0);
  group.add(bottomBar);

  const mullion = roundedBoxMesh(0.12, 0.56, 0.05, 0.008, frameAccent, 4);
  mullion.position.set(0, 0.33, 0);
  mullion.name = "center_mullion";
  group.add(mullion);

  const paneLeft = roundedBoxMesh(0.86, 0.48, 0.02, 0.006, glass, 3);
  paneLeft.position.set(-0.41, 0.33, 0.022);
  paneLeft.name = "glass_left";
  group.add(paneLeft);

  const paneRight = roundedBoxMesh(0.86, 0.48, 0.02, 0.006, glass, 3);
  paneRight.position.set(0.41, 0.33, 0.022);
  paneRight.name = "glass_right";
  group.add(paneRight);

  const sill = roundedBoxMesh(2.24, 0.03, 0.05, 0.006, makeStandardMaterial("#f2d7bd", 0.88), 4);
  sill.position.set(0, 0.015, 0.01);
  sill.name = "sill";
  group.add(sill);

  finalizeGroup(group, {
    materialSlots: ["paintedFrame", "glass"],
    sockets: {
      wall_mount_center: new THREE.Vector3(0, 0.31, 0),
      curtain_rail_left: new THREE.Vector3(-1.0, 0.62, 0),
      curtain_rail_right: new THREE.Vector3(1.0, 0.62, 0)
    },
    vectorSources: [
      "room_objects_51_images/08_window_front_view.svg",
      "room_objects_51_images/08_window_top_view.svg",
      "room_objects_51_images/08_window_side_view.svg"
    ]
  });
  return group;
}
