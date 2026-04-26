import * as THREE from "three";
import { applyAutoSmoothToGeometry, applyAutoSmoothToObject } from "./auto_smooth.js";

export function makeStandardMaterial(color, roughness = 0.9, metalness = 0) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness });
}

export function roundedRectShape(width, height, radius) {
  const hw = width * 0.5;
  const hh = height * 0.5;
  const r = Math.min(radius, hw, hh);
  const shape = new THREE.Shape();
  shape.moveTo(-hw + r, -hh);
  shape.lineTo(hw - r, -hh);
  shape.quadraticCurveTo(hw, -hh, hw, -hh + r);
  shape.lineTo(hw, hh - r);
  shape.quadraticCurveTo(hw, hh, hw - r, hh);
  shape.lineTo(-hw + r, hh);
  shape.quadraticCurveTo(-hw, hh, -hw, hh - r);
  shape.lineTo(-hw, -hh + r);
  shape.quadraticCurveTo(-hw, -hh, -hw + r, -hh);
  return shape;
}

export function extrudeShapeMesh(shape, depth, material, options = {}) {
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: options.bevelEnabled ?? true,
    bevelThickness: options.bevelThickness ?? Math.min(depth * 0.18, 0.018),
    bevelSize: options.bevelSize ?? Math.min(depth * 0.18, 0.018),
    bevelSegments: options.bevelSegments ?? 4,
    curveSegments: options.curveSegments ?? 20,
    steps: options.steps ?? 1
  });
  geometry.center();
  return new THREE.Mesh(applyAutoSmoothToGeometry(geometry), material);
}

export function extrudedRoundedRectMesh(width, height, depth, radius, material, options = {}) {
  return extrudeShapeMesh(roundedRectShape(width, height, radius), depth, material, options);
}

export function roundedBoxMesh(width, height, depth, radius, material, segments = 6) {
  const geometry = new THREE.BoxGeometry(width, height, depth, segments, segments, segments);
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();
  for (let i = 0; i < position.count; i += 1) {
    vertex.fromBufferAttribute(position, i);
    const nx = Math.abs(vertex.x) / (width * 0.5);
    const ny = Math.abs(vertex.y) / (height * 0.5);
    const nz = Math.abs(vertex.z) / (depth * 0.5);
    vertex.x += Math.sign(vertex.x) * radius * (0.02 + 0.04 * (1 - nx));
    vertex.y += Math.sign(vertex.y) * radius * (0.02 + 0.04 * (1 - ny));
    vertex.z += Math.sign(vertex.z) * radius * (0.02 + 0.04 * (1 - nz));
    position.setXYZ(i, vertex.x, vertex.y, vertex.z);
  }
  geometry.computeVertexNormals();
  return new THREE.Mesh(applyAutoSmoothToGeometry(geometry), material);
}

export function softBoxMesh(width, height, depth, material, puffY = 0.02, segments = [12, 8, 12]) {
  const geometry = new THREE.BoxGeometry(width, height, depth, segments[0], segments[1], segments[2]);
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();
  const halfWidth = width * 0.5;
  const halfDepth = depth * 0.5;
  const halfHeight = height * 0.5;
  for (let i = 0; i < position.count; i += 1) {
    vertex.fromBufferAttribute(position, i);
    const xNorm = Math.max(0, 1 - Math.abs(vertex.x) / halfWidth);
    const zNorm = Math.max(0, 1 - Math.abs(vertex.z) / halfDepth);
    const yNorm = Math.max(0, 1 - Math.abs(vertex.y) / halfHeight);
    const puff = xNorm * zNorm;
    vertex.x *= 1 + puff * 0.05;
    vertex.z *= 1 + puff * 0.04;
    if (vertex.y > 0) {
      vertex.y += puff * puffY;
    }
    if (Math.abs(vertex.y) > halfHeight * 0.7) {
      vertex.y *= 1 - yNorm * 0.06;
    }
    position.setXYZ(i, vertex.x, vertex.y, vertex.z);
  }
  geometry.computeVertexNormals();
  return new THREE.Mesh(applyAutoSmoothToGeometry(geometry), material);
}

export function pillowMesh(width, height, depth, material) {
  const geometry = new THREE.BoxGeometry(width, height, depth, 18, 10, 14);
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();
  const halfWidth = width * 0.5;
  const halfDepth = depth * 0.5;
  for (let i = 0; i < position.count; i += 1) {
    vertex.fromBufferAttribute(position, i);
    const xNorm = Math.max(0, 1 - Math.abs(vertex.x) / halfWidth);
    const zNorm = Math.max(0, 1 - Math.abs(vertex.z) / halfDepth);
    const puff = xNorm * zNorm;
    vertex.x *= 1 + puff * 0.08;
    vertex.z *= 1 + puff * 0.08;
    if (vertex.y > 0) {
      vertex.y += puff * 0.028;
      vertex.y -= Math.max(0, 1 - Math.abs(vertex.x) / (halfWidth * 0.22)) * 0.008;
    }
    position.setXYZ(i, vertex.x, vertex.y, vertex.z);
  }
  geometry.computeVertexNormals();
  return new THREE.Mesh(applyAutoSmoothToGeometry(geometry), material);
}

export function blanketMesh(width, height, depth, material) {
  const mesh = extrudedRoundedRectMesh(width, depth, height, Math.min(width, depth) * 0.08, material, {
    bevelThickness: Math.min(height * 0.4, 0.015),
    bevelSize: Math.min(height * 0.35, 0.015),
    curveSegments: 24
  });
  mesh.rotation.x = Math.PI / 2;

  const geometry = mesh.geometry;
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();
  const halfWidth = width * 0.5;
  const halfDepth = depth * 0.5;
  for (let i = 0; i < position.count; i += 1) {
    vertex.fromBufferAttribute(position, i);
    const wave = Math.sin((vertex.x / halfWidth) * Math.PI * 3.2) * 0.006;
    const sag = Math.cos((vertex.z / halfDepth) * Math.PI * 1.6) * 0.004;
    const center = Math.max(0, 1 - Math.abs(vertex.x) / halfWidth) * Math.max(0, 1 - Math.abs(vertex.z) / halfDepth);
    if (vertex.y > 0) {
      vertex.y += wave + sag + center * 0.008;
    }
    position.setXYZ(i, vertex.x, vertex.y, vertex.z);
  }
  geometry.computeVertexNormals();
  mesh.geometry = applyAutoSmoothToGeometry(geometry);
  return mesh;
}

export function ellipsoidMesh(radius, material, scale, segments = 24) {
  const geometry = new THREE.SphereGeometry(radius, segments, Math.max(12, Math.floor(segments * 0.7)));
  const mesh = new THREE.Mesh(applyAutoSmoothToGeometry(geometry), material);
  mesh.scale.copy(scale);
  return mesh;
}

export function profiledSoftMoundMesh(width, height, depth, material, options = {}) {
  const radialSegments = options.radialSegments ?? 96;
  const heightSegments = options.heightSegments ?? 36;
  const xProfile = options.xProfile ?? [
    [0, 0.5],
    [0.28, 0.5],
    [0.62, 0.42],
    [0.86, 0.25],
    [1, 0.02]
  ];
  const zProfile = options.zProfile ?? xProfile;
  const shiftX = options.shiftX ?? (() => 0);
  const shiftZ = options.shiftZ ?? (() => 0);
  const angleScale = options.angleScale ?? (() => 1);
  const vertices = [];
  const normals = [];
  const indices = [];
  const uvs = [];

  const sampleProfile = (profile, t) => {
    for (let i = 0; i < profile.length - 1; i += 1) {
      const [ta, va] = profile[i];
      const [tb, vb] = profile[i + 1];
      if (t >= ta && t <= tb) {
        const local = (t - ta) / Math.max(0.0001, tb - ta);
        const eased = local * local * (3 - 2 * local);
        return THREE.MathUtils.lerp(va, vb, eased);
      }
    }
    return profile[profile.length - 1][1];
  };

  for (let yIndex = 0; yIndex <= heightSegments; yIndex += 1) {
    const t = yIndex / heightSegments;
    const xRadius = sampleProfile(xProfile, t) * width;
    const zRadius = sampleProfile(zProfile, t) * depth;
    const y = t * height;
    const cx = shiftX(t) * width;
    const cz = shiftZ(t) * depth;

    for (let angleIndex = 0; angleIndex < radialSegments; angleIndex += 1) {
      const u = angleIndex / radialSegments;
      const angle = u * Math.PI * 2;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const superEllipse = Math.pow(Math.abs(cos), 2.6) + Math.pow(Math.abs(sin), 2.6);
      const shapeBias = Math.pow(superEllipse, -1 / 2.6);
      const scale = shapeBias * angleScale(angle, t);
      vertices.push(cx + cos * xRadius * scale, y, cz + sin * zRadius * scale);
      normals.push(cos, 0.65, sin);
      uvs.push(u, t);
    }
  }

  for (let yIndex = 0; yIndex < heightSegments; yIndex += 1) {
    const row = yIndex * radialSegments;
    const nextRow = (yIndex + 1) * radialSegments;
    for (let angleIndex = 0; angleIndex < radialSegments; angleIndex += 1) {
      const next = (angleIndex + 1) % radialSegments;
      indices.push(row + angleIndex, nextRow + angleIndex, row + next);
      indices.push(row + next, nextRow + angleIndex, nextRow + next);
    }
  }

  const addCap = (rowIndex, y, v) => {
    const row = rowIndex * radialSegments;
    let centerX = 0;
    let centerZ = 0;
    for (let angleIndex = 0; angleIndex < radialSegments; angleIndex += 1) {
      const positionIndex = (row + angleIndex) * 3;
      centerX += vertices[positionIndex];
      centerZ += vertices[positionIndex + 2];
    }
    centerX /= radialSegments;
    centerZ /= radialSegments;
    const centerIndex = vertices.length / 3;
    vertices.push(centerX, y, centerZ);
    uvs.push(0.5, v);
    for (let angleIndex = 0; angleIndex < radialSegments; angleIndex += 1) {
      const next = (angleIndex + 1) % radialSegments;
      if (rowIndex === 0) {
        indices.push(centerIndex, row + angleIndex, row + next);
      } else {
        indices.push(centerIndex, row + next, row + angleIndex);
      }
    }
  };

  addCap(0, 0, 0);
  addCap(heightSegments, height, 1);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  if (material?.side !== undefined) {
    material.side = THREE.DoubleSide;
  }
  return new THREE.Mesh(applyAutoSmoothToGeometry(geometry), material);
}

export function cubicBezier2D(a, b, c, d, steps = 32) {
  const points = [];
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const mt = 1 - t;
    points.push(new THREE.Vector2(
      mt ** 3 * a.x + 3 * mt ** 2 * t * b.x + 3 * mt * t ** 2 * c.x + t ** 3 * d.x,
      mt ** 3 * a.y + 3 * mt ** 2 * t * b.y + 3 * mt * t ** 2 * c.y + t ** 3 * d.y
    ));
  }
  return points;
}

export function svgSilhouetteMoundMesh(width, height, depth, material, options = {}) {
  const radialSegments = options.radialSegments ?? 144;
  const heightSegments = options.heightSegments ?? 56;
  const frontPoints = options.frontPoints;
  const sidePoints = options.sidePoints;
  const topPoints = options.topPoints;
  const frontBox = options.frontBox;
  const sideBox = options.sideBox;
  const topBox = options.topBox;
  const vertices = [];
  const indices = [];
  const uvs = [];
  const topPlateau = options.topPlateau ?? 0;
  const topFillRings = options.topFillRings ?? 4;

  const sampleBounds = (points, y) => {
    const tolerance = options.boundTolerance ?? 3.8;
    const near = points.filter((point) => Math.abs(point.y - y) <= tolerance);
    const source = near.length >= 2 ? near : points
      .map((point) => ({ point, distance: Math.abs(point.y - y) }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 12)
      .map((entry) => entry.point);
    let min = Infinity;
    let max = -Infinity;
    for (const point of source) {
      min = Math.min(min, point.x);
      max = Math.max(max, point.x);
    }
    return [min, max];
  };

  const normalizeTopPoint = (point) => new THREE.Vector2(
    ((point.x - topBox.centerX) / (topBox.right - topBox.left)) * width,
    ((topBox.centerY - point.y) / (topBox.bottom - topBox.top)) * depth
  );
  const topShape = topPoints.map(normalizeTopPoint);

  const topRadiusForAngle = (angle) => {
    const dir = new THREE.Vector2(Math.cos(angle), Math.sin(angle));
    let best = 0;
    for (const point of topShape) {
      const along = point.dot(dir);
      if (along > 0) {
        const side = Math.abs(point.x * dir.y - point.y * dir.x);
        best = Math.max(best, along - side * 0.18);
      }
    }
    return best;
  };

  for (let yIndex = 0; yIndex <= heightSegments; yIndex += 1) {
    const t = yIndex / heightSegments;
    const profileT = topPlateau > 0 ? Math.min(t, topPlateau) / topPlateau : t;
    const frontY = THREE.MathUtils.lerp(frontBox.bottom, frontBox.top, profileT);
    const sideY = THREE.MathUtils.lerp(sideBox.bottom, sideBox.top, profileT);
    const [frontMin, frontMax] = sampleBounds(frontPoints, frontY);
    const [sideMin, sideMax] = sampleBounds(sidePoints, sideY);
    const left = ((frontMin - frontBox.centerX) / (frontBox.right - frontBox.left)) * width;
    const right = ((frontMax - frontBox.centerX) / (frontBox.right - frontBox.left)) * width;
    const back = ((sideMin - sideBox.centerX) / (sideBox.right - sideBox.left)) * depth;
    const front = ((sideMax - sideBox.centerX) / (sideBox.right - sideBox.left)) * depth;
    const centerX = (left + right) * 0.5;
    const centerZ = (back + front) * 0.5;
    const radiusX = Math.max(0.001, (right - left) * 0.5);
    const radiusZ = Math.max(0.001, (front - back) * 0.5);
    const y = t * height;

    for (let angleIndex = 0; angleIndex < radialSegments; angleIndex += 1) {
      const u = angleIndex / radialSegments;
      const angle = u * Math.PI * 2;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const ellipseRadius = 1 / Math.sqrt((cos * cos) / (radiusX * radiusX) + (sin * sin) / (radiusZ * radiusZ));
      const topRadius = topRadiusForAngle(angle);
      const footprintRadius = THREE.MathUtils.lerp(topRadius, ellipseRadius, Math.min(1, t * 1.2));
      const radius = Math.min(ellipseRadius, footprintRadius || ellipseRadius);
      vertices.push(centerX + cos * radius, y, centerZ + sin * radius);
      uvs.push(u, t);
    }
  }

  for (let yIndex = 0; yIndex < heightSegments; yIndex += 1) {
    const row = yIndex * radialSegments;
    const nextRow = (yIndex + 1) * radialSegments;
    for (let angleIndex = 0; angleIndex < radialSegments; angleIndex += 1) {
      const next = (angleIndex + 1) % radialSegments;
      indices.push(row + angleIndex, nextRow + angleIndex, row + next);
      indices.push(row + next, nextRow + angleIndex, nextRow + next);
    }
  }

  const addBottomCap = () => {
    let centerX = 0;
    let centerZ = 0;
    for (let angleIndex = 0; angleIndex < radialSegments; angleIndex += 1) {
      const positionIndex = angleIndex * 3;
      centerX += vertices[positionIndex];
      centerZ += vertices[positionIndex + 2];
    }
    centerX /= radialSegments;
    centerZ /= radialSegments;
    const centerIndex = vertices.length / 3;
    vertices.push(centerX, 0, centerZ);
    uvs.push(0.5, 0);
    for (let angleIndex = 0; angleIndex < radialSegments; angleIndex += 1) {
      const next = (angleIndex + 1) % radialSegments;
      indices.push(centerIndex, angleIndex, next);
    }
  };

  const addSoftTopFill = () => {
    const outerRow = heightSegments * radialSegments;
    let centerX = 0;
    let centerY = 0;
    let centerZ = 0;
    for (let angleIndex = 0; angleIndex < radialSegments; angleIndex += 1) {
      const positionIndex = (outerRow + angleIndex) * 3;
      centerX += vertices[positionIndex];
      centerY += vertices[positionIndex + 1];
      centerZ += vertices[positionIndex + 2];
    }
    centerX /= radialSegments;
    centerY /= radialSegments;
    centerZ /= radialSegments;

    let previousRow = outerRow;
    const topSag = options.topFillSag ?? height * 0.025;
    for (let ringIndex = 1; ringIndex <= topFillRings; ringIndex += 1) {
      const shrink = 1 - ringIndex / (topFillRings + 1);
      const rowStart = vertices.length / 3;
      const sag = Math.sin((ringIndex / (topFillRings + 1)) * Math.PI) * topSag;
      for (let angleIndex = 0; angleIndex < radialSegments; angleIndex += 1) {
        const positionIndex = (outerRow + angleIndex) * 3;
        vertices.push(
          centerX + (vertices[positionIndex] - centerX) * shrink,
          centerY - sag,
          centerZ + (vertices[positionIndex + 2] - centerZ) * shrink
        );
        uvs.push(angleIndex / radialSegments, 1);
      }
      for (let angleIndex = 0; angleIndex < radialSegments; angleIndex += 1) {
        const next = (angleIndex + 1) % radialSegments;
        indices.push(previousRow + angleIndex, rowStart + angleIndex, previousRow + next);
        indices.push(previousRow + next, rowStart + angleIndex, rowStart + next);
      }
      previousRow = rowStart;
    }

    const centerIndex = vertices.length / 3;
    vertices.push(centerX, centerY - topSag, centerZ);
    uvs.push(0.5, 1);
    for (let angleIndex = 0; angleIndex < radialSegments; angleIndex += 1) {
      const next = (angleIndex + 1) % radialSegments;
      indices.push(previousRow + angleIndex, centerIndex, previousRow + next);
    }
  };

  addBottomCap();
  addSoftTopFill();

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  if (material?.side !== undefined) {
    material.side = THREE.DoubleSide;
  }
  return new THREE.Mesh(applyAutoSmoothToGeometry(geometry), material);
}

export function tubeCurveMesh(points, radius, material, segments = 32) {
  const curve = new THREE.CatmullRomCurve3(points);
  const geometry = new THREE.TubeGeometry(curve, segments, radius, 8, false);
  return new THREE.Mesh(applyAutoSmoothToGeometry(geometry), material);
}

export function cylinderMesh(radiusTop, radiusBottom, height, material, segments = 24) {
  const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments);
  return new THREE.Mesh(applyAutoSmoothToGeometry(geometry), material);
}

export function curtainShape(width, height, variant = "left") {
  const hw = width * 0.5;
  const hh = height * 0.5;
  const dir = variant === "left" ? -1 : 1;
  const shape = new THREE.Shape();
  shape.moveTo(-hw * 0.9, hh);
  shape.lineTo(hw * 0.92, hh);
  shape.bezierCurveTo(hw * 0.9, hh * 0.68, hw * 0.92, hh * 0.25, hw * 0.96, -hh * 0.15);
  shape.bezierCurveTo(hw * 0.98, -hh * 0.45, hw * 0.86, -hh * 0.86, hw * 0.72, -hh);
  shape.lineTo(-hw * 0.72, -hh);
  shape.bezierCurveTo(-hw * 0.88, -hh * 0.92, -hw * 1.02, -hh * 0.46, -hw * 1.0, -hh * 0.12);
  shape.bezierCurveTo(-hw * 0.98, hh * 0.18, -hw * 0.92, hh * 0.55, -hw * 0.9, hh);
  if (dir === 1) {
    const points = shape.getPoints(40).map((p) => new THREE.Vector2(-p.x, p.y));
    const mirrored = new THREE.Shape(points);
    return mirrored;
  }
  return shape;
}

export function curtainMesh(width, height, depth, material, variant = "left") {
  const mesh = extrudeShapeMesh(curtainShape(width, height, variant), depth, material, {
    bevelThickness: Math.min(depth * 0.2, 0.01),
    bevelSize: Math.min(depth * 0.16, 0.008),
    curveSegments: 28,
    bevelSegments: 3
  });
  const geometry = mesh.geometry;
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();
  const hw = width * 0.5;
  const hh = height * 0.5;
  const mirror = variant === "left" ? -1 : 1;
  for (let i = 0; i < position.count; i += 1) {
    vertex.fromBufferAttribute(position, i);
    const xUnit = (vertex.x / hw + 1) * 0.5;
    const yUnit = (vertex.y / hh + 1) * 0.5;
    const folds = Math.sin((xUnit * 3.7 + yUnit * 0.35) * Math.PI) * 0.012;
    vertex.z += folds * mirror * yUnit;
    vertex.x += Math.sin(yUnit * Math.PI) * 0.01 * mirror;
    position.setXYZ(i, vertex.x, vertex.y, vertex.z);
  }
  geometry.computeVertexNormals();
  mesh.geometry = applyAutoSmoothToGeometry(geometry);
  return mesh;
}

export function lampShadeMesh(width, height, material) {
  const halfWidth = width * 0.5;
  const points = [
    new THREE.Vector2(halfWidth * 0.34, 0),
    new THREE.Vector2(halfWidth * 0.5, height * 0.16),
    new THREE.Vector2(halfWidth * 0.98, height * 0.9),
    new THREE.Vector2(halfWidth * 0.58, height)
  ];
  const geometry = new THREE.LatheGeometry(points, 32);
  geometry.rotateX(Math.PI);
  geometry.translate(0, height * 0.5, 0);
  return new THREE.Mesh(applyAutoSmoothToGeometry(geometry), material);
}

export function finalizeGroup(group, meta = {}) {
  applyAutoSmoothToObject(group);
  group.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  Object.assign(group.userData, meta);
  return group;
}
