import * as THREE from "three";
import { cylinderMesh, makeStandardMaterial, roundedBoxMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_27_office_chair";

  const fabric = makeStandardMaterial(config.fabricMain ?? "#ffd4e4", 0.94);
  const metal = makeStandardMaterial(config.metalAccent ?? "#677088", 0.52);
  const wheel = makeStandardMaterial(config.wheelAccent ?? "#d7dbe6", 0.68);

  const back = roundedBoxMesh(0.46, 0.43, 0.08, 0.045, fabric, 8);
  back.position.set(0, 0.66, -0.18);
  back.name = "rounded_pink_backrest";
  group.add(back);

  const seat = roundedBoxMesh(0.38, 0.09, 0.34, 0.035, fabric, 8);
  seat.position.set(0, 0.39, 0.02);
  seat.name = "rounded_pink_seat";
  group.add(seat);

  const post = cylinderMesh(0.018, 0.022, 0.32, metal, 18);
  post.position.y = 0.2;
  post.name = "central_grey_support";
  group.add(post);

  for (let i = 0; i < 5; i += 1) {
    const angle = (i / 5) * Math.PI * 2;
    const arm = roundedBoxMesh(0.2, 0.025, 0.025, 0.01, metal, 3);
    arm.position.set(Math.cos(angle) * 0.1, 0.055, Math.sin(angle) * 0.1);
    arm.rotation.y = -angle;
    arm.name = "five_star_base_arm";
    group.add(arm);

    const caster = cylinderMesh(0.026, 0.026, 0.018, wheel, 16);
    caster.rotation.z = Math.PI / 2;
    caster.position.set(Math.cos(angle) * 0.22, 0.026, Math.sin(angle) * 0.22);
    caster.name = "small_caster_wheel";
    group.add(caster);
  }

  finalizeGroup(group, {
    materialSlots: ["fabricMain", "metalAccent", "wheelAccent"],
    sockets: {
      seat_center: new THREE.Vector3(0, 0.43, 0.02),
      chair_spin_axis: new THREE.Vector3(0, 0.2, 0)
    },
    vectorSources: [
      "room_objects_51_images/27_rolling_chair_front_view.svg",
      "room_objects_51_images/27_rolling_chair_top_view.svg",
      "room_objects_51_images/27_rolling_chair_side_view.svg"
    ]
  });
  return group;
}
