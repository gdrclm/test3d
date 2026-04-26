import * as THREE from "three";
import { makeStandardMaterial, finalizeGroup, ellipsoidMesh } from "../shared/projection_model_utils.js";
import { applyAutoSmoothToGeometry } from "../shared/auto_smooth.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_03_white_pillow";

  const fabric = makeStandardMaterial(config.fabricMain ?? "#fffdf8", 0.99);
  const body = createPillowBody(0.62, 0.12, 0.38, fabric);
  body.position.set(0, 0.06, 0);
  body.name = "pillow_mass";
  group.add(body);

  const indent = ellipsoidMesh(0.5, fabric, new THREE.Vector3(0.012, 0.004, 0.09), 18);
  indent.position.set(0, 0.095, 0);
  indent.name = "center_indent";
  group.add(indent);

  finalizeGroup(group, {
    materialSlots: ["fabricMain"],
    sockets: { bed_pillow_slot: new THREE.Vector3(0, 0.02, 0) },
    animationHooks: { compression_response: { parts: ["pillow_mass", "center_indent"] } },
    vectorSources: [
      "room_objects_51_images/03_white_pillow_front_view.svg",
      "room_objects_51_images/03_white_pillow_top_view.svg",
      "room_objects_51_images/03_white_pillow_side_view.svg"
    ]
  });
  return group;
}

function createPillowBody(width, height, depth, material) {
  const geometry = new THREE.BoxGeometry(width, height, depth, 28, 12, 20);
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();
  const halfWidth = width * 0.5;
  const halfDepth = depth * 0.5;
  const halfHeight = height * 0.5;

  for (let index = 0; index < position.count; index += 1) {
    vertex.fromBufferAttribute(position, index);

    const xNorm = Math.abs(vertex.x) / halfWidth;
    const zNorm = Math.abs(vertex.z) / halfDepth;
    const dome = Math.max(0, 1 - xNorm * xNorm) * Math.max(0, 1 - zNorm * zNorm);
    const sideRound = Math.max(0, 1 - xNorm);
    const frontRound = Math.max(0, 1 - zNorm);

    if (vertex.y > 0) {
      vertex.y = -halfHeight * 0.12 + dome * height * 0.88;
      vertex.y -= Math.max(0, 1 - Math.abs(vertex.x) / (halfWidth * 0.12)) * 0.008;
    } else {
      vertex.y = -halfHeight + dome * 0.006;
    }

    vertex.x *= 1 + frontRound * 0.06;
    vertex.z *= 1 + sideRound * 0.04;

    position.setXYZ(index, vertex.x, vertex.y, vertex.z);
  }

  geometry.computeVertexNormals();
  return new THREE.Mesh(applyAutoSmoothToGeometry(geometry), material);
}
