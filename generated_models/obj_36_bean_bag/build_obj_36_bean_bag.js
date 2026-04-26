import * as THREE from "three";
import { cubicBezier2D, makeStandardMaterial, svgSilhouetteMoundMesh, finalizeGroup } from "../shared/projection_model_utils.js";

const v = (x, y) => new THREE.Vector2(x, y);

function beanBagFrontOutline() {
  return [
    ...cubicBezier2D(v(74, 286), v(84, 220), v(132, 154), v(212, 128), 44),
    ...cubicBezier2D(v(212, 128), v(302, 100), v(408, 116), v(466, 168), 44).slice(1),
    ...cubicBezier2D(v(466, 168), v(500, 198), v(512, 240), v(506, 286), 44).slice(1),
    v(74, 286)
  ];
}

function beanBagSideOutline() {
  return [
    ...cubicBezier2D(v(210, 286), v(212, 220), v(256, 154), v(336, 128), 44),
    ...cubicBezier2D(v(336, 128), v(432, 98), v(556, 118), v(630, 170), 44).slice(1),
    ...cubicBezier2D(v(630, 170), v(676, 202), v(704, 240), v(698, 286), 44).slice(1),
    v(210, 286)
  ];
}

function beanBagTopOutline() {
  return [
    ...cubicBezier2D(v(250, 322), v(206, 260), v(238, 168), v(338, 142), 44),
    ...cubicBezier2D(v(338, 142), v(434, 116), v(564, 130), v(628, 200), 44).slice(1),
    ...cubicBezier2D(v(628, 200), v(684, 262), v(678, 350), v(590, 386), 44).slice(1),
    ...cubicBezier2D(v(590, 386), v(508, 418), v(316, 406), v(250, 322), 44).slice(1)
  ];
}

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_36_bean_bag";

  const fabric = makeStandardMaterial(config.fabricMain ?? "#c9b5ff", 0.98);

  const body = svgSilhouetteMoundMesh(0.95, 0.46, 0.88, fabric, {
    radialSegments: 168,
    heightSegments: 50,
    frontPoints: beanBagFrontOutline(),
    sidePoints: beanBagSideOutline(),
    topPoints: beanBagTopOutline(),
    frontBox: { left: 74, right: 506, top: 148, bottom: 286, centerX: 290 },
    sideBox: { left: 210, right: 698, top: 148, bottom: 286, centerX: 454 },
    topBox: { left: 250, right: 678, top: 116, bottom: 418, centerX: 464, centerY: 267 },
    boundTolerance: 3.2,
    topFillRings: 8,
    topFillSag: 0.004
  });
  body.name = "single_svg_profiled_bean_bag_body";
  group.add(body);

  finalizeGroup(group, {
    materialSlots: ["fabricMain"],
    sockets: { floor_attach: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/36_bean_bag_front_view.svg",
      "room_objects_51_images/36_bean_bag_top_view.svg",
      "room_objects_51_images/36_bean_bag_side_view.svg"
    ]
  });
  return group;
}
