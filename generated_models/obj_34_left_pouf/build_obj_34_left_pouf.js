import * as THREE from "three";
import { cubicBezier2D, makeStandardMaterial, svgSilhouetteMoundMesh, finalizeGroup } from "../shared/projection_model_utils.js";

const v = (x, y) => new THREE.Vector2(x, y);

function poufFrontOutline() {
  return [
    ...cubicBezier2D(v(110, 286), v(108, 236), v(136, 182), v(188, 156), 36),
    ...cubicBezier2D(v(188, 156), v(238, 132), v(322, 128), v(380, 144), 36).slice(1),
    ...cubicBezier2D(v(380, 144), v(438, 160), v(452, 212), v(450, 286), 36).slice(1),
    v(110, 286)
  ];
}

function poufSideOutline() {
  return [
    ...cubicBezier2D(v(258, 286), v(252, 238), v(278, 182), v(328, 158), 36),
    ...cubicBezier2D(v(328, 158), v(382, 132), v(468, 128), v(542, 144), 36).slice(1),
    ...cubicBezier2D(v(542, 144), v(606, 160), v(656, 212), v(662, 286), 36).slice(1),
    v(258, 286)
  ];
}

function poufTopOutline() {
  return [
    ...cubicBezier2D(v(344, 210), v(368, 166), v(440, 146), v(516, 164), 36),
    ...cubicBezier2D(v(516, 164), v(584, 180), v(622, 230), v(610, 282), 36).slice(1),
    ...cubicBezier2D(v(610, 282), v(596, 338), v(536, 372), v(456, 374), 36).slice(1),
    ...cubicBezier2D(v(456, 374), v(378, 376), v(316, 342), v(300, 286), 36).slice(1),
    ...cubicBezier2D(v(300, 286), v(286, 244), v(302, 224), v(344, 210), 36).slice(1)
  ];
}

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_34_left_pouf";

  const fabric = makeStandardMaterial(config.fabricMain ?? "#c9b5ff", 0.96);

  const body = svgSilhouetteMoundMesh(0.34, 0.2, 0.34, fabric, {
    radialSegments: 144,
    heightSegments: 42,
    frontPoints: poufFrontOutline(),
    sidePoints: poufSideOutline(),
    topPoints: poufTopOutline(),
    frontBox: { left: 110, right: 450, top: 158, bottom: 286, centerX: 280 },
    sideBox: { left: 258, right: 662, top: 158, bottom: 286, centerX: 460 },
    topBox: { left: 300, right: 610, top: 146, bottom: 374, centerX: 455, centerY: 260 },
    boundTolerance: 2.6,
    topFillRings: 7,
    topFillSag: 0.002
  });
  body.name = "svg_profiled_left_pouf_body";
  group.add(body);

  finalizeGroup(group, {
    materialSlots: ["fabricMain"],
    sockets: { floor_attach: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/34_left_pouf_front_view.svg",
      "room_objects_51_images/34_left_pouf_top_view.svg",
      "room_objects_51_images/34_left_pouf_side_view.svg"
    ]
  });
  return group;
}
