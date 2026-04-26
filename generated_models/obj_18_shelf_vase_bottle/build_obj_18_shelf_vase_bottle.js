import * as THREE from "three";
import { makeStandardMaterial, finalizeGroup } from "../shared/projection_model_utils.js";
import { applyAutoSmoothToGeometry } from "../shared/auto_smooth.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_18_shelf_vase_bottle";

  const glassMain = makeStandardMaterial(config.glassMain ?? "#78c6ea", 0.35);
  glassMain.transparent = true;
  glassMain.opacity = 0.82;
  const rimAccent = makeStandardMaterial(config.rimAccent ?? "#aee3ff", 0.62);

  const points = [
    new THREE.Vector2(0.038, 0),
    new THREE.Vector2(0.052, 0.035),
    new THREE.Vector2(0.055, 0.13),
    new THREE.Vector2(0.035, 0.19),
    new THREE.Vector2(0.022, 0.245),
    new THREE.Vector2(0.028, 0.28)
  ];
  const bodyGeo = applyAutoSmoothToGeometry(new THREE.LatheGeometry(points, 32));
  const body = new THREE.Mesh(bodyGeo, glassMain);
  body.name = "lathed_bottle_body";
  group.add(body);

  const rimGeo = applyAutoSmoothToGeometry(new THREE.TorusGeometry(0.026, 0.005, 10, 24));
  const rim = new THREE.Mesh(rimGeo, rimAccent);
  rim.position.y = 0.28;
  rim.name = "thin_open_rim";
  group.add(rim);

  const baseGeo = applyAutoSmoothToGeometry(new THREE.CylinderGeometry(0.048, 0.052, 0.012, 32));
  const base = new THREE.Mesh(baseGeo, rimAccent);
  base.position.y = 0.006;
  base.name = "small_weighted_base";
  group.add(base);

  finalizeGroup(group, {
    materialSlots: ["glassMain", "rimAccent"],
    sockets: { shelf_contact: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/18_shelf_vase_bottle_front_view.svg",
      "room_objects_51_images/18_shelf_vase_bottle_top_view.svg",
      "room_objects_51_images/18_shelf_vase_bottle_side_view.svg"
    ]
  });
  return group;
}
