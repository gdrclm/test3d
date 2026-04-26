import * as THREE from "three";
import { makeStandardMaterial, roundedBoxMesh, finalizeGroup } from "../shared/projection_model_utils.js";

export function buildObject(config = {}) {
  const group = new THREE.Group();
  group.name = "obj_16_books_set";

  const colors = config.bookColors ?? ["#ff9faf", "#aee3ff", "#c9b5ff", "#86d7c0", "#fff4c7", "#ffd4e4", "#ff9faf"];
  const pageMat = makeStandardMaterial(config.pageAccent ?? "#fff4c7", 0.92);

  const widths = [0.042, 0.036, 0.047, 0.034, 0.041, 0.039, 0.044];
  const heights = [0.225, 0.25, 0.218, 0.242, 0.21, 0.248, 0.225];
  let x = -0.168;
  for (let i = 0; i < widths.length; i += 1) {
    const w = widths[i];
    const mat = makeStandardMaterial(colors[i], 0.86);
    const book = roundedBoxMesh(w, heights[i], 0.18, 0.006, mat, 3);
    book.position.set(x + w * 0.5, heights[i] * 0.5, 0);
    book.rotation.z = i === 3 ? -0.12 : i === 1 ? 0.05 : 0;
    book.name = "individual_book_spine";
    group.add(book);

    const page = roundedBoxMesh(w * 0.72, 0.018, 0.185, 0.003, pageMat, 2);
    page.position.set(book.position.x, heights[i] - 0.028, 0.004);
    page.rotation.z = book.rotation.z;
    page.name = "visible_page_band";
    group.add(page);
    x += w + 0.012;
  }

  const base = roundedBoxMesh(0.36, 0.018, 0.2, 0.005, pageMat, 2);
  base.position.set(0, 0.009, 0);
  base.name = "thin_book_cluster_base";
  group.add(base);

  finalizeGroup(group, {
    materialSlots: ["bookColors", "pageAccent"],
    sockets: { shelf_contact: new THREE.Vector3(0, 0, 0) },
    vectorSources: [
      "room_objects_51_images/16_books_set_front_view.svg",
      "room_objects_51_images/16_books_set_top_view.svg",
      "room_objects_51_images/16_books_set_side_view.svg"
    ]
  });
  return group;
}
