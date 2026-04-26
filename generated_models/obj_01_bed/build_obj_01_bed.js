import * as THREE from "three";
import { applyAutoSmoothToGeometry, applyAutoSmoothToObject } from "../shared/auto_smooth.js";

const PX = 0.003125;
const TOP_CENTER_X = 450;
const TOP_CENTER_Y = 267;
const SIDE_CENTER_X = 450;
const GROUND_Y = 285;

const VIEW = {
  outer: topRect(130, 115, 640, 304),
  headboardTop: topRect(144, 129, 80, 276),
  footboardTop: topRect(716, 131, 32, 272),
  mattressTop: topRect(152, 137, 596, 260),
  pillowLeftTop: topRect(168, 151, 64, 110),
  pillowRightTop: topRect(168, 279, 64, 110),
  blanketTop: topRect(252, 151, 450, 232),
  headboardSide: sideRect(130, 135, 68, 150),
  footboardSide: sideRect(712, 180, 58, 105),
  railBandSide: sideRect(166, 213, 568, 72),
  mattressSide: sideRect(192, 173, 516, 48),
  pillowSide: sideRect(206, 141, 110, 48),
  blanketSide: sideRect(320, 161, 364, 38),
  rearFootSide: sideRect(172, 251, 28, 34),
  centerFootSide: sideRect(436, 251, 28, 34),
  frontFootSide: sideRect(700, 251, 28, 34),
  baseFront: frontRect(128, 213, 304, 72),
  mattressFront: frontRect(150, 172, 260, 48),
  blanketFront: frontRect(162, 149, 236, 54)
};

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_01_bed";

  const materials = createMaterialSet(config.materials);

  const headboard = roundedBox(
    VIEW.headboardTop.width,
    VIEW.headboardSide.height,
    VIEW.headboardSide.depth,
    0.04,
    materials.woodMain,
    10
  );
  headboard.position.set(0, VIEW.headboardSide.centerY, VIEW.headboardSide.centerZ);
  headboard.name = "headboard";
  group.add(headboard);

  const footboard = roundedBox(
    VIEW.footboardTop.width,
    VIEW.footboardSide.height,
    VIEW.footboardSide.depth,
    0.03,
    materials.woodMain,
    8
  );
  footboard.position.set(0, VIEW.footboardSide.centerY, VIEW.footboardSide.centerZ);
  footboard.name = "footboard";
  group.add(footboard);

  const railWidth = (VIEW.outer.width - VIEW.mattressTop.width) * 0.5;
  const railDepth =
    VIEW.railBandSide.depth - VIEW.headboardSide.depth * 0.65 - VIEW.footboardSide.depth * 0.45;
  const railHeight = 0.06;
  const railCenterZ =
    (VIEW.headboardSide.centerZ + VIEW.footboardSide.centerZ) * 0.5 +
    (VIEW.headboardSide.depth - VIEW.footboardSide.depth) * 0.1;
  const railCenterY = railHeight * 0.5 + 0.03;

  const sideRailLeft = roundedBox(
    railWidth,
    railHeight,
    railDepth,
    0.018,
    materials.woodMain,
    6
  );
  sideRailLeft.position.set(-(VIEW.outer.width * 0.5 - railWidth * 0.5), railCenterY, railCenterZ);
  sideRailLeft.name = "side_rail_left";
  group.add(sideRailLeft);

  const sideRailRight = roundedBox(
    railWidth,
    railHeight,
    railDepth,
    0.018,
    materials.woodMain,
    6
  );
  sideRailRight.position.set(VIEW.outer.width * 0.5 - railWidth * 0.5, railCenterY, railCenterZ);
  sideRailRight.name = "side_rail_right";
  group.add(sideRailRight);

  const basePlatform = roundedBox(
    VIEW.baseFront.width,
    VIEW.railBandSide.height,
    VIEW.railBandSide.depth,
    0.02,
    materials.woodAccent,
    8
  );
  basePlatform.position.set(0, VIEW.railBandSide.centerY, VIEW.railBandSide.centerZ);
  basePlatform.name = "base_platform";
  group.add(basePlatform);

  const mattress = mattressShape(VIEW.mattressTop.width, VIEW.mattressSide.height, VIEW.mattressTop.depth, materials.fabricMain);
  mattress.position.set(0, VIEW.mattressSide.centerY, VIEW.mattressSide.centerZ);
  mattress.name = "mattress_zone";
  group.add(mattress);

  const pillowLeft = pillowShape(
    VIEW.pillowLeftTop.width,
    VIEW.pillowSide.height,
    VIEW.pillowLeftTop.depth,
    materials.fabricMain
  );
  pillowLeft.position.set(
    VIEW.pillowLeftTop.centerX,
    VIEW.pillowSide.centerY,
    VIEW.pillowLeftTop.centerZ
  );
  pillowLeft.name = "pillow_left";
  group.add(pillowLeft);

  const pillowRight = pillowShape(
    VIEW.pillowRightTop.width,
    VIEW.pillowSide.height,
    VIEW.pillowRightTop.depth,
    materials.fabricMain
  );
  pillowRight.position.set(
    VIEW.pillowRightTop.centerX,
    VIEW.pillowSide.centerY,
    VIEW.pillowRightTop.centerZ
  );
  pillowRight.name = "pillow_right";
  group.add(pillowRight);

  const blanket = blanketShape(
    VIEW.blanketFront.width,
    VIEW.blanketFront.height,
    VIEW.blanketTop.depth,
    materials.fabricAccent
  );
  blanket.position.set(0, VIEW.blanketFront.centerY, VIEW.blanketTop.centerZ);
  blanket.name = "blanket_zone";
  group.add(blanket);

  for (const footData of [
    ["support_rear", VIEW.rearFootSide.centerZ],
    ["support_center", VIEW.centerFootSide.centerZ],
    ["support_front", VIEW.frontFootSide.centerZ]
  ]) {
    const foot = roundedBox(
      28 * PX,
      VIEW.rearFootSide.height,
      28 * PX,
      0.012,
      materials.woodAccent,
      4
    );
    foot.position.set(0, VIEW.rearFootSide.centerY, footData[1]);
    foot.name = footData[0];
    group.add(foot);
  }

  finalize(group);
  registerMetadata(group);
  return group;
}

function topRect(x, y, width, height) {
  return {
    width: height * PX,
    depth: width * PX,
    centerX: (y + height * 0.5 - TOP_CENTER_Y) * PX,
    centerZ: (x + width * 0.5 - TOP_CENTER_X) * PX
  };
}

function sideRect(x, y, width, height) {
  return {
    depth: width * PX,
    height: height * PX,
    centerY: (GROUND_Y - (y + height * 0.5)) * PX,
    centerZ: (x + width * 0.5 - SIDE_CENTER_X) * PX
  };
}

function frontRect(x, y, width, height) {
  const centerX = 280;
  return {
    width: width * PX,
    height: height * PX,
    centerY: (GROUND_Y - (y + height * 0.5)) * PX,
    centerX: (x + width * 0.5 - centerX) * PX
  };
}

function createMaterialSet(overrides = {}) {
  return {
    woodMain: new THREE.MeshStandardMaterial({
      color: overrides.woodMain ?? "#e1b38b",
      roughness: 0.88
    }),
    woodAccent: new THREE.MeshStandardMaterial({
      color: overrides.woodAccent ?? "#cb9568",
      roughness: 0.9
    }),
    fabricMain: new THREE.MeshStandardMaterial({
      color: overrides.fabricMain ?? "#fff7fb",
      roughness: 0.98
    }),
    fabricAccent: new THREE.MeshStandardMaterial({
      color: overrides.fabricAccent ?? "#ef7faf",
      roughness: 0.95
    })
  };
}

function roundedBox(width, height, depth, radius, material, segments = 6) {
  const geometry = new THREE.BoxGeometry(width, height, depth, segments, segments, segments);
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();
  for (let index = 0; index < position.count; index += 1) {
    vertex.fromBufferAttribute(position, index);
    vertex.x += Math.sign(vertex.x) * radius * 0.08;
    vertex.y += Math.sign(vertex.y) * radius * 0.06;
    vertex.z += Math.sign(vertex.z) * radius * 0.08;
    position.setXYZ(index, vertex.x, vertex.y, vertex.z);
  }
  geometry.computeVertexNormals();
  return new THREE.Mesh(applyAutoSmoothToGeometry(geometry), material);
}

function mattressShape(width, height, depth, material) {
  const geometry = new THREE.BoxGeometry(width, height, depth, 12, 8, 16);
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();
  const halfWidth = width * 0.5;
  const halfDepth = depth * 0.5;
  for (let index = 0; index < position.count; index += 1) {
    vertex.fromBufferAttribute(position, index);
    const xNorm = 1 - Math.abs(vertex.x) / halfWidth;
    const zNorm = 1 - Math.abs(vertex.z) / halfDepth;
    const puff = Math.max(0, xNorm) * Math.max(0, zNorm);
    if (vertex.y > 0) {
      vertex.y += puff * 0.012;
    }
    position.setXYZ(index, vertex.x, vertex.y, vertex.z);
  }
  geometry.computeVertexNormals();
  return new THREE.Mesh(applyAutoSmoothToGeometry(geometry), material);
}

function pillowShape(width, height, depth, material) {
  const geometry = new THREE.BoxGeometry(width, height, depth, 8, 8, 8);
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();
  const halfWidth = width * 0.5;
  const halfDepth = depth * 0.5;
  for (let index = 0; index < position.count; index += 1) {
    vertex.fromBufferAttribute(position, index);
    const xNorm = 1 - Math.abs(vertex.x) / halfWidth;
    const zNorm = 1 - Math.abs(vertex.z) / halfDepth;
    const puff = Math.max(0, xNorm) * Math.max(0, zNorm);
    vertex.y += puff * 0.02;
    vertex.x *= 1 + puff * 0.03;
    vertex.z *= 1 + puff * 0.02;
    position.setXYZ(index, vertex.x, vertex.y, vertex.z);
  }
  geometry.computeVertexNormals();
  return new THREE.Mesh(applyAutoSmoothToGeometry(geometry), material);
}

function blanketShape(width, height, depth, material) {
  const geometry = new THREE.BoxGeometry(width, height, depth, 12, 8, 20);
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();
  const halfWidth = width * 0.5;
  const halfDepth = depth * 0.5;
  for (let index = 0; index < position.count; index += 1) {
    vertex.fromBufferAttribute(position, index);
    const xNorm = 1 - Math.abs(vertex.x) / halfWidth;
    const zNorm = 1 - Math.abs(vertex.z) / halfDepth;
    const ripple = Math.max(0, xNorm) * Math.max(0, zNorm);
    if (vertex.y > 0) {
      vertex.y += ripple * 0.015;
    }
    if (vertex.z > 0) {
      vertex.y += 0.005;
    }
    position.setXYZ(index, vertex.x, vertex.y, vertex.z);
  }
  geometry.computeVertexNormals();
  return new THREE.Mesh(applyAutoSmoothToGeometry(geometry), material);
}

function finalize(group) {
  applyAutoSmoothToObject(group);
  group.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
}

function registerMetadata(group) {
  group.userData.materialSlots = ["woodMain", "woodAccent", "fabricMain", "fabricAccent"];
  group.userData.pivots = {
    floor_center: new THREE.Vector3(0, 0, 0),
    bed_center: new THREE.Vector3(0, VIEW.baseFront.height * 0.5, 0)
  };
  group.userData.sockets = {
    blanket_anchor: new THREE.Vector3(0, VIEW.blanketFront.centerY, VIEW.blanketTop.centerZ),
    pillow_slot_left: new THREE.Vector3(
      VIEW.pillowLeftTop.centerX,
      VIEW.pillowSide.centerY,
      VIEW.pillowLeftTop.centerZ
    ),
    pillow_slot_right: new THREE.Vector3(
      VIEW.pillowRightTop.centerX,
      VIEW.pillowSide.centerY,
      VIEW.pillowRightTop.centerZ
    ),
    plush_slot: new THREE.Vector3(0, VIEW.mattressSide.centerY + 0.03, -0.18)
  };
  group.userData.vectorSources = [
    "generated_models/obj_01_bed/sources/bed_front_view.svg",
    "generated_models/obj_01_bed/sources/bed_top_view.svg",
    "generated_models/obj_01_bed/sources/bed_side_view.svg"
  ];
}
