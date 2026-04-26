import * as THREE from "three";
import { cylinderMesh, ellipsoidMesh, extrudeShapeMesh, makeStandardMaterial, finalizeGroup } from "../shared/projection_model_utils.js";

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

function addCord(group, x, y, length, material) {
  const cord = cylinderMesh(0.004, 0.004, length, material, 8);
  cord.position.set(x, y - length * 0.5, 0);
  cord.name = "thin_mobile_cord";
  group.add(cord);
}

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_39_star_mobile";

  const grey = makeStandardMaterial(config.greyMain ?? "#677088", 0.62);
  const hubMat = makeStandardMaterial(config.hubAccent ?? "#d7dbe6", 0.66);
  const colors = ["#fff4c7", "#c9b5ff", "#aee3ff", "#ffd4e4"];

  addCord(group, 0, 0.52, 0.08, grey);
  const hub = ellipsoidMesh(1, hubMat, new THREE.Vector3(0.035, 0.035, 0.035), 16);
  hub.position.y = 0.42;
  hub.name = "round_top_hub";
  group.add(hub);

  const bar = cylinderMesh(0.006, 0.006, 0.32, grey, 8);
  bar.rotation.z = Math.PI / 2;
  bar.position.y = 0.34;
  bar.name = "horizontal_mobile_bar";
  group.add(bar);

  const points = [[-0.16, 0.22], [0.16, 0.22], [-0.07, 0.08], [0.07, 0.08]];
  points.forEach(([x, y], i) => {
    addCord(group, x, 0.34, 0.34 - y, grey);
    const star = extrudeShapeMesh(starShape(0.035, 0.017), 0.01, makeStandardMaterial(colors[i], 0.88), {
      bevelThickness: 0.001,
      bevelSize: 0.001,
      bevelSegments: 1
    });
    star.position.set(x, y, 0);
    star.name = "hanging_colored_star";
    group.add(star);
  });

  finalizeGroup(group, {
    materialSlots: ["greyMain", "hubAccent", "starColors"],
    sockets: { ceiling_mount: new THREE.Vector3(0, 0.52, 0) },
    vectorSources: [
      "room_objects_51_images/39_star_mobile_front_view.svg",
      "room_objects_51_images/39_star_mobile_top_view.svg",
      "room_objects_51_images/39_star_mobile_side_view.svg"
    ]
  });
  return group;
}
