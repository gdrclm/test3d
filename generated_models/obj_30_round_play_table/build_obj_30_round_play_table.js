import * as THREE from "three";
import { cylinderMesh, makeStandardMaterial, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_30_round_play_table";

  const woodMain = makeStandardMaterial(config.woodMain ?? "#f5d4bd", 0.86);
  const woodAccent = makeStandardMaterial(config.woodAccent ?? "#e8c09b", 0.88);
  const stemMat = makeStandardMaterial(config.stemAccent ?? "#d6a47a", 0.88);
  const mint = makeStandardMaterial(config.mintAccent ?? "#86d7c0", 0.86);
  const lav = makeStandardMaterial(config.lavenderAccent ?? "#c9b5ff", 0.86);
  const cream = makeStandardMaterial(config.creamAccent ?? "#fff4c7", 0.86);

  const top = cylinderMesh(0.42, 0.42, 0.055, woodMain, 64);
  top.position.y = 0.49;
  top.name = "round_play_table_top";
  group.add(top);

  const inset = cylinderMesh(0.34, 0.34, 0.012, woodAccent, 64);
  inset.position.y = 0.525;
  inset.name = "top_inner_circle";
  group.add(inset);

  const stem = cylinderMesh(0.04, 0.055, 0.39, stemMat, 28);
  stem.position.y = 0.285;
  stem.name = "single_center_pedestal";
  group.add(stem);

  const foot = cylinderMesh(0.22, 0.23, 0.045, woodAccent, 48);
  foot.position.y = 0.06;
  foot.name = "oval_round_base";
  group.add(foot);

  for (const [x, z, mat] of [[-0.13, -0.11, mint], [0.13, -0.11, lav], [0, 0.16, cream]]) {
    const dot = cylinderMesh(0.03, 0.03, 0.012, mat, 20);
    dot.position.set(x, 0.538, z);
    dot.name = "colored_top_dot";
    group.add(dot);
  }

  finalizeGroup(group, {
    materialSlots: ["woodMain", "woodAccent", "stemAccent", "mintAccent", "lavenderAccent", "creamAccent"],
    sockets: { tabletop_center: new THREE.Vector3(0, 0.54, 0) },
    vectorSources: [
      "room_objects_51_images/30_round_play_table_front_view.svg",
      "room_objects_51_images/30_round_play_table_top_view.svg",
      "room_objects_51_images/30_round_play_table_side_view.svg"
    ]
  });
  return group;
}
