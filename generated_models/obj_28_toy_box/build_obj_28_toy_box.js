import * as THREE from "three";
import { makeStandardMaterial, roundedBoxMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_28_toy_box";

  const woodMain = makeStandardMaterial(config.woodMain ?? "#f5d4bd", 0.88);
  const lidAccent = makeStandardMaterial(config.lidAccent ?? "#e8c09b", 0.84);
  const handleAccent = makeStandardMaterial(config.handleAccent ?? "#fff2b2", 0.72);

  const body = roundedBoxMesh(0.48, 0.24, 0.32, 0.025, woodMain, 6);
  body.position.y = 0.12;
  body.name = "rounded_toy_box_body";
  group.add(body);

  const lid = roundedBoxMesh(0.52, 0.055, 0.34, 0.02, lidAccent, 6);
  lid.position.y = 0.27;
  lid.name = "overhanging_toy_box_lid";
  group.add(lid);

  const handle = roundedBoxMesh(0.075, 0.025, 0.05, 0.008, handleAccent, 4);
  handle.position.set(0, 0.31, 0);
  handle.name = "top_center_handle";
  group.add(handle);

  finalizeGroup(group, {
    materialSlots: ["woodMain", "lidAccent", "handleAccent"],
    sockets: { floor_attach: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/28_toy_box_front_view.svg",
      "room_objects_51_images/28_toy_box_top_view.svg",
      "room_objects_51_images/28_toy_box_side_view.svg"
    ]
  });
  return group;
}
