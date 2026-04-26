import * as THREE from "three";
import { ellipsoidMesh, extrudeShapeMesh, makeStandardMaterial, finalizeGroup } from "../shared/projection_model_utils.js";

function starShape(radiusOuter, radiusInner) {
  const shape = new THREE.Shape();
  for (let i = 0; i < 10; i += 1) {
    const radius = i % 2 === 0 ? radiusOuter : radiusInner;
    const angle = -Math.PI / 2 + (i * Math.PI) / 5;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  return shape;
}

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_33_small_table_toy";

  const mint = makeStandardMaterial(config.mintMain ?? "#86d7c0", 0.9);
  const pink = makeStandardMaterial(config.starAccent ?? "#ffd4e4", 0.86);

  const ball = ellipsoidMesh(1, mint, new THREE.Vector3(0.04, 0.04, 0.04), 24);
  ball.position.y = 0.04;
  ball.name = "mint_round_toy";
  group.add(ball);

  const star = extrudeShapeMesh(starShape(0.028, 0.014), 0.006, pink, { bevelThickness: 0.001, bevelSize: 0.001, bevelSegments: 1 });
  star.position.set(0, 0.042, 0.043);
  star.name = "pink_star_badge";
  group.add(star);

  finalizeGroup(group, {
    materialSlots: ["mintMain", "starAccent"],
    sockets: { tabletop_contact: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/33_small_table_toy_front_view.svg",
      "room_objects_51_images/33_small_table_toy_top_view.svg",
      "room_objects_51_images/33_small_table_toy_side_view.svg"
    ]
  });
  return group;
}
