import * as THREE from "three";
import { makeStandardMaterial, roundedBoxMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_19_shelf_box";

  const bodyMat = makeStandardMaterial(config.bodyMain ?? "#c9b5ff", 0.88);
  const lidMat = makeStandardMaterial(config.lidAccent ?? "#aa92ef", 0.86);
  const handleMat = makeStandardMaterial(config.handleAccent ?? "#fff2b2", 0.72);

  const body = roundedBoxMesh(0.18, 0.11, 0.18, 0.018, bodyMat, 6);
  body.position.y = 0.055;
  body.name = "rounded_storage_box_body";
  group.add(body);

  const lid = roundedBoxMesh(0.205, 0.035, 0.205, 0.017, lidMat, 6);
  lid.position.y = 0.127;
  lid.name = "overhanging_rounded_lid";
  group.add(lid);

  const handle = roundedBoxMesh(0.072, 0.018, 0.028, 0.006, handleMat, 4);
  handle.position.set(0, 0.157, 0);
  handle.name = "top_lid_handle";
  group.add(handle);

  finalizeGroup(group, {
    materialSlots: ["bodyMain", "lidAccent", "handleAccent"],
    sockets: { shelf_contact: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/19_shelf_box_front_view.svg",
      "room_objects_51_images/19_shelf_box_top_view.svg",
      "room_objects_51_images/19_shelf_box_side_view.svg"
    ]
  });
  return group;
}
