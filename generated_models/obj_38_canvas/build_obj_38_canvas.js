import * as THREE from "three";
import { makeStandardMaterial, roundedBoxMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_38_canvas";

  const outer = makeStandardMaterial(config.canvasOuter ?? "#faf7ff", 0.92);
  const inner = makeStandardMaterial(config.canvasInner ?? "#ffffff", 0.96);

  const frame = roundedBoxMesh(0.48, 0.62, 0.03, 0.014, outer, 5);
  frame.position.y = 0.31;
  frame.name = "pale_canvas_panel";
  group.add(frame);

  const face = roundedBoxMesh(0.42, 0.53, 0.008, 0.01, inner, 3);
  face.position.set(0, 0.31, 0.02);
  face.name = "white_inner_canvas_face";
  group.add(face);

  finalizeGroup(group, {
    materialSlots: ["canvasOuter", "canvasInner"],
    sockets: { easel_attach_center: new THREE.Vector3(0, 0.31, -0.02) },
    vectorSources: [
      "room_objects_51_images/38_canvas_front_view.svg",
      "room_objects_51_images/38_canvas_top_view.svg",
      "room_objects_51_images/38_canvas_side_view.svg"
    ]
  });
  return group;
}
