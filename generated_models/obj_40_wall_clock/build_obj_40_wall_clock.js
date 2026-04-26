import * as THREE from "three";
import { cylinderMesh, makeStandardMaterial, roundedBoxMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_40_wall_clock";

  const faceMat = makeStandardMaterial(config.faceMain ?? "#faf7ff", 0.9);
  const ringMat = makeStandardMaterial(config.ringAccent ?? "#ead1dc", 0.92);
  const handMat = makeStandardMaterial(config.handAccent ?? "#677088", 0.58);

  const face = cylinderMesh(0.13, 0.13, 0.025, faceMat, 48);
  face.rotation.x = Math.PI / 2;
  face.position.z = 0;
  face.name = "round_clock_face";
  group.add(face);

  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.105, 0.004, 8, 48), ringMat);
  ring.position.z = 0.017;
  ring.name = "pale_inner_clock_ring";
  group.add(ring);

  const hour = roundedBoxMesh(0.01, 0.075, 0.006, 0.003, handMat, 2);
  hour.position.set(0, 0.04, 0.025);
  hour.name = "vertical_clock_hand";
  group.add(hour);

  const minute = roundedBoxMesh(0.065, 0.008, 0.006, 0.003, handMat, 2);
  minute.position.set(0.032, 0, 0.026);
  minute.name = "horizontal_clock_hand";
  group.add(minute);

  const center = cylinderMesh(0.01, 0.01, 0.008, handMat, 16);
  center.rotation.x = Math.PI / 2;
  center.position.z = 0.03;
  center.name = "clock_center_pin";
  group.add(center);

  finalizeGroup(group, {
    materialSlots: ["faceMain", "ringAccent", "handAccent"],
    sockets: { wall_attach_center: new THREE.Vector3(0, 0, -0.02) },
    vectorSources: [
      "room_objects_51_images/40_wall_clock_front_view.svg",
      "room_objects_51_images/40_wall_clock_top_view.svg",
      "room_objects_51_images/40_wall_clock_side_view.svg"
    ]
  });
  return group;
}
