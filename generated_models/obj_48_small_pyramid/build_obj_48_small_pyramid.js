import * as THREE from "three";
import { makeStandardMaterial, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_48_small_pyramid";

  const blue = makeStandardMaterial(config.blueFace ?? "#aee3ff", 0.86);
  const pink = makeStandardMaterial(config.pinkFace ?? "#ffd4e4", 0.88);
  const cream = makeStandardMaterial(config.creamFace ?? "#fff4c7", 0.9);

  const geometry = new THREE.ConeGeometry(0.055, 0.11, 4);
  geometry.rotateY(Math.PI / 4);
  geometry.translate(0, 0.055, 0);
  const pyramid = new THREE.Mesh(geometry, [blue, pink, cream, blue]);
  pyramid.name = "small_four_sided_pyramid";
  group.add(pyramid);

  finalizeGroup(group, {
    materialSlots: ["blueFace", "pinkFace", "creamFace"],
    sockets: { floor_attach: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/48_small_pyramid_front_view.svg",
      "room_objects_51_images/48_small_pyramid_top_view.svg",
      "room_objects_51_images/48_small_pyramid_side_view.svg"
    ]
  });
  return group;
}
