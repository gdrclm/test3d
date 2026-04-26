import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { TransformControls } from "three/addons/controls/TransformControls.js";
import { applyAutoSmoothToGeometry, applyAutoSmoothToObject } from "../generated_models/shared/auto_smooth.js";
import { buildObject as buildObj01Bed } from "../generated_models/obj_01_bed/build_obj_01_bed.js";
import { buildObject as buildObj02Blanket } from "../generated_models/obj_02_pink_blanket/build_obj_02_pink_blanket.js";
import { buildObject as buildObj03Pillow } from "../generated_models/obj_03_white_pillow/build_obj_03_white_pillow.js";
import { buildObject as buildObj04YellowPillow } from "../generated_models/obj_04_yellow_pillow/build_obj_04_yellow_pillow.js";
import { buildObject as buildObj05BedToy } from "../generated_models/obj_05_bed_toy/build_obj_05_bed_toy.js";
import { buildObject as buildObj06Nightstand } from "../generated_models/obj_06_nightstand/build_obj_06_nightstand.js";
import { buildObject as buildObj07BedsideLamp } from "../generated_models/obj_07_bedside_lamp/build_obj_07_bedside_lamp.js";
import { buildObject as buildObj08Window } from "../generated_models/obj_08_window/build_obj_08_window.js";
import { buildObject as buildObj09LeftCurtain } from "../generated_models/obj_09_left_curtain/build_obj_09_left_curtain.js";
import { buildObject as buildObj10RightCurtain } from "../generated_models/obj_10_right_curtain/build_obj_10_right_curtain.js";
import { buildObject as buildObj11Door } from "../generated_models/obj_11_door/build_obj_11_door.js";
import { buildObject as buildObj12CeilingLamp } from "../generated_models/obj_12_ceiling_lamp/build_obj_12_ceiling_lamp.js";
import { buildObject as buildObj13Rug } from "../generated_models/obj_13_rug/build_obj_13_rug.js";
import { buildObject as buildObj14Wardrobe } from "../generated_models/obj_14_wardrobe/build_obj_14_wardrobe.js";
import { buildObject as buildObj15Bookshelf } from "../generated_models/obj_15_bookshelf/build_obj_15_bookshelf.js";
import { buildObject as buildObj16BooksSet } from "../generated_models/obj_16_books_set/build_obj_16_books_set.js";
import { buildObject as buildObj17ShelfPlush } from "../generated_models/obj_17_shelf_plush/build_obj_17_shelf_plush.js";
import { buildObject as buildObj18ShelfVaseBottle } from "../generated_models/obj_18_shelf_vase_bottle/build_obj_18_shelf_vase_bottle.js";
import { buildObject as buildObj19ShelfBox } from "../generated_models/obj_19_shelf_box/build_obj_19_shelf_box.js";
import { buildObject as buildObj20ShelfDecorHousePyramid } from "../generated_models/obj_20_shelf_decor_house_pyramid/build_obj_20_shelf_decor_house_pyramid.js";
import { buildObject as buildObj21Desk } from "../generated_models/obj_21_desk/build_obj_21_desk.js";
import { buildObject as buildObj22Monitor } from "../generated_models/obj_22_monitor/build_obj_22_monitor.js";
import { buildObject as buildObj23Keyboard } from "../generated_models/obj_23_keyboard/build_obj_23_keyboard.js";
import { buildObject as buildObj24TabletOrBook } from "../generated_models/obj_24_tablet_or_book/build_obj_24_tablet_or_book.js";
import { buildObject as buildObj25NotebookOrSheet } from "../generated_models/obj_25_notebook_or_sheet/build_obj_25_notebook_or_sheet.js";
import { buildObject as buildObj26DeskLamp } from "../generated_models/obj_26_desk_lamp/build_obj_26_desk_lamp.js";
import { buildObject as buildObj27OfficeChair } from "../generated_models/obj_27_office_chair/build_obj_27_office_chair.js";
import { buildObject as buildObj28ToyBox } from "../generated_models/obj_28_toy_box/build_obj_28_toy_box.js";
import { buildObject as buildObj29DollHouse } from "../generated_models/obj_29_doll_house/build_obj_29_doll_house.js";
import { buildObject as buildObj30RoundPlayTable } from "../generated_models/obj_30_round_play_table/build_obj_30_round_play_table.js";
import { buildObject as buildObj31ToyTeapotOrCup } from "../generated_models/obj_31_toy_teapot_or_cup/build_obj_31_toy_teapot_or_cup.js";
import { buildObject as buildObj32TableToyCubeOrItem } from "../generated_models/obj_32_table_toy_cube_or_item/build_obj_32_table_toy_cube_or_item.js";
import { buildObject as buildObj33SmallTableToy } from "../generated_models/obj_33_small_table_toy/build_obj_33_small_table_toy.js";
import { buildObject as buildObj34LeftPouf } from "../generated_models/obj_34_left_pouf/build_obj_34_left_pouf.js";
import { buildObject as buildObj35RightPouf } from "../generated_models/obj_35_right_pouf/build_obj_35_right_pouf.js";
import { buildObject as buildObj36BeanBag } from "../generated_models/obj_36_bean_bag/build_obj_36_bean_bag.js";
import { buildObject as buildObj37Easel } from "../generated_models/obj_37_easel/build_obj_37_easel.js";
import { buildObject as buildObj38Canvas } from "../generated_models/obj_38_canvas/build_obj_38_canvas.js";
import { buildObject as buildObj39StarMobile } from "../generated_models/obj_39_star_mobile/build_obj_39_star_mobile.js";
import { buildObject as buildObj40WallClock } from "../generated_models/obj_40_wall_clock/build_obj_40_wall_clock.js";
import { buildObject as buildObj41Poster01 } from "../generated_models/obj_41_poster_01/build_obj_41_poster_01.js";
import { buildObject as buildObj42Poster02 } from "../generated_models/obj_42_poster_02/build_obj_42_poster_02.js";
import { buildObject as buildObj43BlueRugToy } from "../generated_models/obj_43_blue_rug_toy/build_obj_43_blue_rug_toy.js";
import { buildObject as buildObj44PinkRugToy } from "../generated_models/obj_44_pink_rug_toy/build_obj_44_pink_rug_toy.js";
import { buildObject as buildObj45YellowRugToy } from "../generated_models/obj_45_yellow_rug_toy/build_obj_45_yellow_rug_toy.js";
import { buildObject as buildObj46GreenRugCube } from "../generated_models/obj_46_green_rug_cube/build_obj_46_green_rug_cube.js";
import { buildObject as buildObj47PurpleRugCube } from "../generated_models/obj_47_purple_rug_cube/build_obj_47_purple_rug_cube.js";
import { buildObject as buildObj48SmallPyramid } from "../generated_models/obj_48_small_pyramid/build_obj_48_small_pyramid.js";
import { buildObject as buildObj49Slippers } from "../generated_models/obj_49_slippers/build_obj_49_slippers.js";
import { buildObject as buildObj50PlantInPot } from "../generated_models/obj_50_plant_in_pot/build_obj_50_plant_in_pot.js";
import { buildObject as buildObj51LaundryBasket } from "../generated_models/obj_51_laundry_basket/build_obj_51_laundry_basket.js";

const ROOM = {
  width: 10.8,
  depth: 9,
  height: 2.8,
};
const WALL_HEIGHT = ROOM.height;
const CEILING_EDGE_OVERLAP_PX = 0;
const FLOOR_ZONE_Y = 0.018;
const FLOOR_DOORWAY_ZONE_Y = 0.034;
const FLOOR_GRID_Y = 0.048;

const STORAGE_KEY = "codex-3dgen-scene-layout-v20-room-plan-anchored";
const CUSTOM_BUILDERS = new Map([
  ["obj_01_bed", buildObj01Bed],
  ["obj_02_pink_blanket", buildObj02Blanket],
  ["obj_03_white_pillow", buildObj03Pillow],
  ["obj_04_yellow_pillow", buildObj04YellowPillow],
  ["obj_05_bed_toy", buildObj05BedToy],
  ["obj_06_nightstand", buildObj06Nightstand],
  ["obj_07_bedside_lamp", buildObj07BedsideLamp],
  ["obj_08_window", buildObj08Window],
  ["obj_09_left_curtain", buildObj09LeftCurtain],
  ["obj_10_right_curtain", buildObj10RightCurtain],
  ["obj_11_door", buildObj11Door],
  ["obj_12_ceiling_lamp", buildObj12CeilingLamp],
  ["obj_13_rug", buildObj13Rug],
  ["obj_14_wardrobe", buildObj14Wardrobe],
  ["obj_15_bookshelf", buildObj15Bookshelf],
  ["obj_16_books_set", buildObj16BooksSet],
  ["obj_17_shelf_plush", buildObj17ShelfPlush],
  ["obj_18_shelf_vase_bottle", buildObj18ShelfVaseBottle],
  ["obj_19_shelf_box", buildObj19ShelfBox],
  ["obj_20_shelf_decor_house_pyramid", buildObj20ShelfDecorHousePyramid],
  ["obj_21_desk", buildObj21Desk],
  ["obj_22_monitor", buildObj22Monitor],
  ["obj_23_keyboard", buildObj23Keyboard],
  ["obj_24_tablet_or_book", buildObj24TabletOrBook],
  ["obj_25_notebook_or_sheet", buildObj25NotebookOrSheet],
  ["obj_26_desk_lamp", buildObj26DeskLamp],
  ["obj_27_office_chair", buildObj27OfficeChair],
  ["obj_28_toy_box", buildObj28ToyBox],
  ["obj_29_doll_house", buildObj29DollHouse],
  ["obj_30_round_play_table", buildObj30RoundPlayTable],
  ["obj_31_toy_teapot_or_cup", buildObj31ToyTeapotOrCup],
  ["obj_32_table_toy_cube_or_item", buildObj32TableToyCubeOrItem],
  ["obj_33_small_table_toy", buildObj33SmallTableToy],
  ["obj_34_left_pouf", buildObj34LeftPouf],
  ["obj_35_right_pouf", buildObj35RightPouf],
  ["obj_36_bean_bag", buildObj36BeanBag],
  ["obj_37_easel", buildObj37Easel],
  ["obj_38_canvas", buildObj38Canvas],
  ["obj_39_star_mobile", buildObj39StarMobile],
  ["obj_40_wall_clock", buildObj40WallClock],
  ["obj_41_poster_01", buildObj41Poster01],
  ["obj_42_poster_02", buildObj42Poster02],
  ["obj_43_blue_rug_toy", buildObj43BlueRugToy],
  ["obj_44_pink_rug_toy", buildObj44PinkRugToy],
  ["obj_45_yellow_rug_toy", buildObj45YellowRugToy],
  ["obj_46_green_rug_cube", buildObj46GreenRugCube],
  ["obj_47_purple_rug_cube", buildObj47PurpleRugCube],
  ["obj_48_small_pyramid", buildObj48SmallPyramid],
  ["obj_49_slippers", buildObj49Slippers],
  ["obj_50_plant_in_pot", buildObj50PlantInPot],
  ["obj_51_laundry_basket", buildObj51LaundryBasket],
]);

const PLAN_BOUNDS = {
  x: 70,
  y: 70,
  width: 1260,
  height: 1040,
};

const ROOM_LEVELS = {
  floor: 0,
  rugTop: 0.035,
  bedTop: 0.45,
  nightstandTop: 0.5,
  bookshelfLowShelf: 0.45,
  bookshelfMidShelf: 0.82,
  bookshelfTop: 1.19,
  deskTop: 0.74,
  playTableTop: 0.505,
  easelCanvasRail: 0.605,
  windowBottom: 0.92,
  curtainBottom: 0.62,
  doorBottom: 0,
  wallPosterBottom: 1.18,
  wallClockBottom: 1.58,
  highMobileBottom: 2.05,
  doorwayMobileBottom: 1.85,
};

const ROOM_ANCHORS = {
  rightWallInnerX: ROOM.width / 2 - (22 / PLAN_BOUNDS.width) * ROOM.width,
  backWallInnerZ: -ROOM.depth / 2 + (24 / PLAN_BOUNDS.height) * ROOM.depth,
  wardrobeBackWallX: planToWorld(688, 242).x - 0.3,
  nightstand: planToWorld(331, 159),
  window: planToWorld(420, 86),
  doorwayLeftHinge: planToWorld(600, 624),
  doorwayRightHinge: planToWorld(820, 624),
  bookshelf: planToWorld(264, 561),
  desk: planToWorld(995, 164),
  easel: planToWorld(1178, 471),
};

const PLAN_LAYOUT = [
  { number: 1, px: 193, py: 252, surfaceY: ROOM_LEVELS.floor },
  { number: 2, px: 193, py: 301, surfaceY: ROOM_LEVELS.bedTop },
  { number: 3, px: 156, py: 158, surfaceY: ROOM_LEVELS.bedTop },
  { number: 4, px: 226, py: 158, surfaceY: ROOM_LEVELS.bedTop },
  { number: 5, px: 236, py: 324, surfaceY: ROOM_LEVELS.bedTop },
  { number: 6, px: 331, py: 159, surfaceY: ROOM_LEVELS.floor },
  { number: 7, px: 331, py: 125, surfaceY: ROOM_LEVELS.nightstandTop, worldX: ROOM_ANCHORS.nightstand.x, worldZ: ROOM_ANCHORS.nightstand.z },
  { number: 8, px: 420, py: 86, surfaceY: ROOM_LEVELS.windowBottom, worldZ: ROOM_ANCHORS.backWallInnerZ + 0.01 },
  { number: 9, px: 277, py: 100, surfaceY: ROOM_LEVELS.curtainBottom, worldX: ROOM_ANCHORS.window.x - 0.98, worldZ: ROOM_ANCHORS.backWallInnerZ + 0.035 },
  { number: 10, px: 563, py: 100, surfaceY: ROOM_LEVELS.curtainBottom, worldX: ROOM_ANCHORS.window.x + 0.98, worldZ: ROOM_ANCHORS.backWallInnerZ + 0.035 },
  { number: 11, px: 598, py: 607, surfaceY: ROOM_LEVELS.doorBottom, worldX: ROOM_ANCHORS.doorwayLeftHinge.x - 0.08, worldZ: ROOM_ANCHORS.doorwayLeftHinge.z + 0.53, rotationY: -Math.PI / 2 },
  { number: 11, px: 822, py: 607, surfaceY: ROOM_LEVELS.doorBottom, worldX: ROOM_ANCHORS.doorwayRightHinge.x + 0.08, worldZ: ROOM_ANCHORS.doorwayRightHinge.z + 0.53, rotationY: -Math.PI / 2 },
  { number: 12, px: 428, py: 300, surfaceY: ROOM.height - 0.55 },
  { number: 13, px: 440, py: 340, surfaceY: ROOM_LEVELS.floor },
  { number: 13, px: 640, py: 950, surfaceY: ROOM_LEVELS.floor },
  { number: 14, px: 622, py: 242, surfaceY: ROOM_LEVELS.floor, worldX: ROOM_ANCHORS.wardrobeBackWallX, rotationY: -Math.PI / 2 },
  { number: 15, px: 264, py: 561, surfaceY: ROOM_LEVELS.floor, rotationY: Math.PI },
  { number: 16, px: 150, py: 534, surfaceY: ROOM_LEVELS.bookshelfLowShelf, worldX: ROOM_ANCHORS.bookshelf.x - 0.31, worldZ: ROOM_ANCHORS.bookshelf.z, rotationY: Math.PI },
  { number: 17, px: 262, py: 540, surfaceY: ROOM_LEVELS.bookshelfTop, worldX: ROOM_ANCHORS.bookshelf.x - 0.06, worldZ: ROOM_ANCHORS.bookshelf.z, rotationY: Math.PI },
  { number: 18, px: 363, py: 535, surfaceY: ROOM_LEVELS.bookshelfTop, worldX: ROOM_ANCHORS.bookshelf.x + 0.28, worldZ: ROOM_ANCHORS.bookshelf.z, rotationY: Math.PI },
  { number: 19, px: 191, py: 587, surfaceY: ROOM_LEVELS.bookshelfLowShelf, worldX: ROOM_ANCHORS.bookshelf.x - 0.08, worldZ: ROOM_ANCHORS.bookshelf.z, rotationY: Math.PI },
  { number: 20, px: 362, py: 590, surfaceY: ROOM_LEVELS.bookshelfMidShelf, worldX: ROOM_ANCHORS.bookshelf.x + 0.26, worldZ: ROOM_ANCHORS.bookshelf.z, rotationY: Math.PI },
  { number: 21, px: 995, py: 164, surfaceY: ROOM_LEVELS.floor },
  { number: 22, px: 996, py: 139, surfaceY: ROOM_LEVELS.deskTop, worldX: ROOM_ANCHORS.desk.x, worldZ: ROOM_ANCHORS.desk.z - 0.18 },
  { number: 23, px: 980, py: 188, surfaceY: ROOM_LEVELS.deskTop, worldX: ROOM_ANCHORS.desk.x - 0.12, worldZ: ROOM_ANCHORS.desk.z + 0.18 },
  { number: 24, px: 1103, py: 146, surfaceY: ROOM_LEVELS.deskTop, worldX: ROOM_ANCHORS.desk.x + 0.45, worldZ: ROOM_ANCHORS.desk.z - 0.12 },
  { number: 25, px: 1088, py: 201, surfaceY: ROOM_LEVELS.deskTop, worldX: ROOM_ANCHORS.desk.x + 0.38, worldZ: ROOM_ANCHORS.desk.z + 0.18 },
  { number: 26, px: 860, py: 160, surfaceY: ROOM_LEVELS.deskTop, worldX: ROOM_ANCHORS.desk.x - 0.47, worldZ: ROOM_ANCHORS.desk.z - 0.12 },
  { number: 27, px: 947, py: 274, surfaceY: ROOM_LEVELS.floor },
  { number: 28, px: 210, py: 750, surfaceY: ROOM_LEVELS.floor },
  { number: 29, px: 190, py: 900, surfaceY: ROOM_LEVELS.floor, scale: 2 },
  { number: 30, px: 510, py: 825, surfaceY: ROOM_LEVELS.floor },
  { number: 31, px: 480, py: 795, surfaceY: ROOM_LEVELS.playTableTop },
  { number: 32, px: 526, py: 804, surfaceY: ROOM_LEVELS.playTableTop },
  { number: 33, px: 559, py: 809, surfaceY: ROOM_LEVELS.playTableTop },
  { number: 34, px: 505, py: 907, surfaceY: ROOM_LEVELS.floor },
  { number: 35, px: 601, py: 915, surfaceY: ROOM_LEVELS.floor },
  { number: 36, px: 930, py: 820, surfaceY: ROOM_LEVELS.floor },
  { number: 37, px: 1178, py: 471, surfaceY: ROOM_LEVELS.floor, rotationY: -Math.PI / 2 },
  { number: 38, px: 1214, py: 395, surfaceY: ROOM_LEVELS.easelCanvasRail, worldX: ROOM_ANCHORS.easel.x - 0.04, worldZ: ROOM_ANCHORS.easel.z, rotationY: -Math.PI / 2 },
  { number: 39, px: 924, py: 137, surfaceY: ROOM_LEVELS.highMobileBottom },
  { number: 39, px: 796, py: 701, surfaceY: ROOM_LEVELS.doorwayMobileBottom },
  { number: 40, px: 806, py: 116, surfaceY: ROOM_LEVELS.wallClockBottom, worldX: ROOM_ANCHORS.rightWallInnerX - 0.026, rotationY: -Math.PI / 2 },
  { number: 41, px: 1115, py: 470, surfaceY: ROOM_LEVELS.wallPosterBottom, worldX: ROOM_ANCHORS.rightWallInnerX - 0.012, rotationY: -Math.PI / 2 },
  { number: 42, px: 1218, py: 275, surfaceY: ROOM_LEVELS.wallPosterBottom, worldX: ROOM_ANCHORS.rightWallInnerX - 0.012, rotationY: -Math.PI / 2 },
  { number: 43, px: 591, py: 961, surfaceY: ROOM_LEVELS.rugTop },
  { number: 44, px: 641, py: 975, surfaceY: ROOM_LEVELS.rugTop },
  { number: 45, px: 616, py: 1011, surfaceY: ROOM_LEVELS.rugTop },
  { number: 46, px: 552, py: 976, surfaceY: ROOM_LEVELS.rugTop },
  { number: 47, px: 714, py: 976, surfaceY: ROOM_LEVELS.rugTop },
  { number: 48, px: 631, py: 1003, surfaceY: ROOM_LEVELS.rugTop },
  { number: 49, px: 162, py: 474, surfaceY: ROOM_LEVELS.floor },
  { number: 50, px: 628, py: 511, surfaceY: ROOM_LEVELS.floor },
  { number: 50, px: 1240, py: 1009, surfaceY: ROOM_LEVELS.floor },
  { number: 51, px: 470, py: 551, surfaceY: ROOM_LEVELS.floor },
  { number: 51, px: 1080, py: 981, surfaceY: ROOM_LEVELS.floor },
];

const dom = {
  canvas: document.querySelector("#viewport"),
  catalogList: document.querySelector("#catalog-list"),
  placedList: document.querySelector("#placed-list"),
  libraryCount: document.querySelector("#library-count"),
  placedCount: document.querySelector("#placed-count"),
  statusLine: document.querySelector("#status-line"),
  searchInput: document.querySelector("#search-input"),
  selectionMeta: document.querySelector("#selection-meta"),
  selectionPill: document.querySelector("#selection-pill"),
  selectionBlueprint: document.querySelector("#selection-blueprint"),
  selectionBlueprintCaption: document.querySelector("#selection-blueprint-caption"),
  comparePanel: document.querySelector("#compare-panel"),
  compareTitle: document.querySelector("#compare-title"),
  compareGrid: document.querySelector("#compare-grid"),
  resetCameraBtn: document.querySelector("#reset-camera-btn"),
  saveLayoutBtn: document.querySelector("#save-layout-btn"),
  loadLayoutBtn: document.querySelector("#load-layout-btn"),
  sceneResetBtn: document.querySelector("#scene-reset-btn"),
  sceneSaveBtn: document.querySelector("#scene-save-btn"),
  sceneLoadBtn: document.querySelector("#scene-load-btn"),
  fpsToggleBtn: document.querySelector("#fps-toggle-btn"),
  sceneLoading: document.querySelector("#scene-loading"),
  sceneLoadingLabel: document.querySelector("#scene-loading-label"),
  sceneLoadingBar: document.querySelector("#scene-loading-bar"),
  viewportWrap: document.querySelector(".viewport-wrap"),
  mobileFpsControls: document.querySelector("#mobile-fps-controls"),
  mobileJumpBtn: document.querySelector("#mobile-jump-btn"),
  moveStick: document.querySelector('[data-stick="move"]'),
  lookStick: document.querySelector('[data-stick="look"]'),
  moveStickKnob: document.querySelector("#move-stick-knob"),
  lookStickKnob: document.querySelector("#look-stick-knob"),
  viewFrontBtn: document.querySelector("#view-front-btn"),
  viewTopBtn: document.querySelector("#view-top-btn"),
  viewSideBtn: document.querySelector("#view-side-btn"),
  applyTransformBtn: document.querySelector("#apply-transform-btn"),
  focusSelectionBtn: document.querySelector("#focus-selection-btn"),
  duplicateBtn: document.querySelector("#duplicate-btn"),
  deleteBtn: document.querySelector("#delete-btn"),
  posX: document.querySelector("#pos-x"),
  posY: document.querySelector("#pos-y"),
  posZ: document.querySelector("#pos-z"),
  rotY: document.querySelector("#rot-y"),
  uniformScale: document.querySelector("#uniform-scale"),
};

const sceneState = {
  catalog: [],
  filteredCatalog: [],
  placed: [],
  selectedId: null,
  hoverPlane: null,
  blueprintsByNumber: new Map(),
  compareRig: null,
  selectionHelper: null,
  wallColliders: [],
  colliderCache: {
    solid: [],
    standable: [],
  },
  collidersDirty: true,
  placedListRenderQueued: false,
  sceneReady: false,
};

const renderer = new THREE.WebGLRenderer({
  canvas: dom.canvas,
  antialias: true,
  alpha: true,
  powerPreference: "high-performance",
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.22;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color("#c9c9f0");
scene.fog = new THREE.Fog("#c9c9f0", 12, 25);

const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
camera.position.set(8.6, 7.2, 9.8);

const orbit = new OrbitControls(camera, dom.canvas);
orbit.enableDamping = true;
orbit.target.set(0, 0.8, 0);
orbit.maxPolarAngle = Math.PI / 2.08;
orbit.minDistance = 2;
orbit.maxDistance = 24;

const transform = new TransformControls(camera, dom.canvas);
transform.addEventListener("dragging-changed", (event) => {
  orbit.enabled = !event.value;
});
transform.addEventListener("objectChange", () => {
  markCollidersDirty();
  syncTransformInputs();
  schedulePlacedListRender();
});
scene.add(transform);

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const textureLoader = new THREE.TextureLoader();
const clock = new THREE.Clock();
const fpsState = {
  enabled: false,
  pointerLocked: false,
  yaw: 0,
  pitch: 0,
  velocityY: 0,
  eyeHeight: 0.53,
  moveSpeed: 1.45,
  jumpSpeed: 3,
  gravity: 11,
  radius: 0.08,
  bodyHeight: 0.72,
  groundY: 0,
  spawnPoint: new THREE.Vector3(0.15, 0.53, 1.25),
  keys: new Set(),
  mobileMove: new THREE.Vector2(),
  mobileLook: new THREE.Vector2(),
};

setSceneReady(false, "Загружаю сцену...", 0);
buildEnvironment();
resizeRenderer();
window.addEventListener("resize", resizeRenderer);
dom.canvas.addEventListener("pointerdown", onPointerDown);
dom.canvas.addEventListener("dblclick", onCanvasDoubleClick);
document.addEventListener("pointerlockchange", onPointerLockChange);
document.addEventListener("mousemove", onPointerLockMouseMove);
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

wireUI();
animate();
loadCatalog();

function wireUI() {
  dom.searchInput.addEventListener("input", () => {
    applyCatalogFilter(dom.searchInput.value);
  });

  dom.resetCameraBtn.addEventListener("click", resetCamera);
  dom.saveLayoutBtn.addEventListener("click", saveLayout);
  dom.loadLayoutBtn.addEventListener("click", loadSavedLayout);
  dom.sceneResetBtn.addEventListener("click", resetCamera);
  dom.sceneSaveBtn.addEventListener("click", saveLayout);
  dom.sceneLoadBtn.addEventListener("click", loadSavedLayout);
  dom.fpsToggleBtn.addEventListener("click", toggleFirstPersonMode);
  setupMobileFpsStick(dom.moveStick, dom.moveStickKnob, fpsState.mobileMove, { invertY: true });
  setupMobileFpsStick(dom.lookStick, dom.lookStickKnob, fpsState.mobileLook);
  dom.mobileJumpBtn.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    jumpFirstPerson();
  });
  dom.viewFrontBtn.addEventListener("click", () => setPresetView("front"));
  dom.viewTopBtn.addEventListener("click", () => setPresetView("top"));
  dom.viewSideBtn.addEventListener("click", () => setPresetView("side"));
  dom.applyTransformBtn.addEventListener("click", applyTransformInputs);
  dom.focusSelectionBtn.addEventListener("click", focusSelection);
  dom.duplicateBtn.addEventListener("click", duplicateSelection);
  dom.deleteBtn.addEventListener("click", deleteSelection);
}

async function loadCatalog() {
  try {
    setSceneReady(false, "Загружаю спецификации...", 4);
    const blueprintManifestPromise = fetch("./blueprint_manifest.json")
      .then((response) => response.json())
      .catch(() => []);
    const response = await fetch("../object_specs_51/object_specs_index.json");
    const index = await response.json();
    setSceneReady(false, "Получаю список объектов...", 14);
    const blueprintManifest = await blueprintManifestPromise;
    setSceneReady(false, "Загружаю чертежи...", 20);
    sceneState.blueprintsByNumber = new Map(
      blueprintManifest.map((entry) => [entry.number, entry.image]),
    );
    let loadedSpecs = 0;
    const specs = await Promise.all(
      index.map(async (entry) => {
        const specResponse = await fetch(`../object_specs_51/${entry.file}`);
        const spec = await specResponse.json();
        spec.blueprintImage = sceneState.blueprintsByNumber.get(spec.number) ?? null;
        loadedSpecs += 1;
        const specProgress = 20 + Math.round((loadedSpecs / index.length) * 68);
        setSceneReady(false, `Осталось ${index.length - loadedSpecs}/${index.length}`, specProgress);
        return spec;
      }),
    );

    sceneState.catalog = specs.sort((a, b) => a.number - b.number);
    setSceneReady(false, "Готовлю каталог...", 90);
    applyCatalogFilter("");
    dom.statusLine.textContent = `Спецификации загружены: ${sceneState.catalog.length} объектов.`;
    setSceneReady(false, "Собираю комнату...", 94);
    loadSavedLayout();
    setSceneReady(false, "Финальная проверка...", 98);
    await waitForSceneSettle();
    setSceneReady(true, "FPS готов", 100);
  } catch (error) {
    console.error(error);
    setSceneReady(false, "Ошибка загрузки", 100);
    dom.statusLine.textContent =
      "Не удалось загрузить JSON. Откройте viewer через локальный сервер, а не file://.";
    dom.catalogList.innerHTML =
      '<article class="catalog-item"><h3>Каталог не загрузился</h3><div class="catalog-meta">Запустите `python3 serve_viewer.py` и откройте `http://127.0.0.1:4173/scene_viewer/`.</div></article>';
  }
}

function setSceneReady(ready, label, progress = ready ? 100 : 0) {
  const progressValue = THREE.MathUtils.clamp(Math.round(progress), 0, 100);
  sceneState.sceneReady = ready;
  dom.fpsToggleBtn.disabled = !ready;
  dom.fpsToggleBtn.title = ready ? "" : "FPS станет доступен после загрузки сцены";
  dom.sceneLoading.classList.toggle("ready", ready);
  dom.sceneLoading.setAttribute("aria-hidden", ready ? "true" : "false");
  dom.sceneLoadingLabel.textContent = label;
  dom.sceneLoadingBar.style.width = `${progressValue}%`;
  dom.sceneLoadingBar.setAttribute("aria-valuenow", String(progressValue));
}

function waitForSceneSettle() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve);
    });
  });
}

function applyCatalogFilter(query) {
  const normalized = query.trim().toLowerCase();
  sceneState.filteredCatalog = sceneState.catalog.filter((spec) => {
    if (!normalized) {
      return true;
    }

    return [
      spec.id,
      spec.displayNameRu,
      spec.displayNameEn,
      spec.category,
      spec.template,
    ]
      .join(" ")
      .toLowerCase()
      .includes(normalized);
  });

  dom.libraryCount.textContent = String(sceneState.filteredCatalog.length);
  renderCatalog();
}

function renderCatalog() {
  dom.catalogList.innerHTML = "";

  if (sceneState.catalog.length === 0) {
    dom.catalogList.innerHTML =
      '<article class="catalog-item"><h3>Каталог пуст</h3><div class="catalog-meta">Спеки ещё не загружены. Проверьте, что viewer открыт через локальный сервер.</div></article>';
    return;
  }

  if (sceneState.filteredCatalog.length === 0) {
    dom.catalogList.innerHTML =
      '<article class="catalog-item"><h3>Ничего не найдено</h3><div class="catalog-meta">Попробуйте очистить поиск или использовать `bed`, `кровать`, `bookshelf`.</div></article>';
    return;
  }

  for (const spec of sceneState.filteredCatalog) {
    const card = document.createElement("article");
    card.className = "catalog-item";

    if (spec.blueprintImage) {
      const thumb = document.createElement("img");
      thumb.className = "catalog-thumb";
      thumb.src = spec.blueprintImage;
      thumb.alt = `Чертёж ${spec.displayNameRu}`;
      thumb.loading = "lazy";
      card.append(thumb);
    }

    const title = document.createElement("h3");
    title.textContent = `${spec.number}. ${spec.displayNameRu}`;

    const meta = document.createElement("div");
    meta.className = "catalog-meta";
    meta.textContent =
      `${spec.displayNameEn} | ${spec.category} | ${spec.template} | ` +
      `${spec.dimensions.width} x ${spec.dimensions.height} x ${spec.dimensions.depth} м`;

    const actions = document.createElement("div");
    actions.className = "catalog-actions";

    const addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.textContent = "Добавить";
    addBtn.addEventListener("click", () => {
      const placed = createPlacedObject(spec);
      selectPlaced(placed.id);
    });

    const previewBtn = document.createElement("button");
    previewBtn.type = "button";
    previewBtn.className = "secondary";
    previewBtn.textContent = "Инфо";
    previewBtn.addEventListener("click", () => {
      dom.selectionMeta.textContent =
        `${spec.displayNameRu} (${spec.displayNameEn}) | template: ${spec.template} | ` +
        `hooks: ${spec.requiredHooks.join(", ") || "нет"}`;
      renderSelectionBlueprint(spec);
    });

    actions.append(addBtn, previewBtn);
    card.append(title, meta, actions);
    dom.catalogList.append(card);
  }
}

function createPlacedObject(spec, placement = null, options = {}) {
  const root = new THREE.Group();
  root.name = spec.id;

  const proxy = buildProxyMesh(spec);
  root.add(proxy);
  root.userData = {
    spec,
    proxyType: spec.template,
  };

  const stagedPosition = nextPlacementPosition(spec);
  const position = placement?.position ?? stagedPosition;
  const rotationY = placement?.rotationY ?? 0;
  const scale = placement?.scale ?? 1;

  root.position.set(position.x, position.y, position.z);
  root.rotation.y = rotationY;
  root.scale.setScalar(scale);
  addLightForLamp(root, spec);

  scene.add(root);

  const placed = {
    id: crypto.randomUUID(),
    specId: spec.id,
    label: spec.displayNameRu,
    object3d: root,
  };

  root.userData.placedId = placed.id;
  sceneState.placed.push(placed);
  markCollidersDirty();
  if (options.renderList !== false) {
    renderPlacedList();
  }
  return placed;
}

function addLightForLamp(root, spec) {
  const emitter = root.children[0]?.userData?.normalizedSockets?.light_emitter;
  if (!emitter) {
    return;
  }

  const lightRig = new THREE.Group();
  lightRig.name = `${spec.id}_light_rig`;
  lightRig.position.copy(emitter);

  if (spec.id === "obj_12_ceiling_lamp") {
    const light = new THREE.PointLight("#ffb15d", 2.15, 7, 1.35);
    lightRig.add(light);
  } else if (spec.id === "obj_26_desk_lamp") {
    const point = new THREE.PointLight("#ff9c4b", 1.15, 2.7, 1.65);
    const spot = new THREE.SpotLight("#ffb066", 1.95, 3.8, Math.PI / 5.5, 0.5, 1.65);
    spot.position.set(0, 0.02, 0);
    spot.target.position.set(0, -0.8, 0.22);
    lightRig.add(point, spot, spot.target);
  } else if (spec.id === "obj_07_bedside_lamp") {
    const light = new THREE.PointLight("#ff9f4a", 1.35, 3.0, 1.6);
    lightRig.add(light);
  }

  if (lightRig.children.length > 0) {
    root.add(lightRig);
  }
}

function nextPlacementPosition(spec) {
  const index = sceneState.placed.length;
  const width = spec.dimensions.width;
  const depth = spec.dimensions.depth;
  const x = -2 + (index % 4) * 1.25;
  const z = -1.2 + Math.floor(index / 4) * 1.15;
  const y = placementYForSurface(spec, defaultSurfaceYForSpec(spec));
  return {
    x: clampToRoom(x, width, ROOM.width),
    y,
    z: clampToRoom(z, depth, ROOM.depth),
  };
}

function placementYForSurface(spec, surfaceY, scale = 1) {
  return Math.max(surfaceY + (spec.dimensions.height * scale) / 2, 0.02);
}

function defaultSurfaceYForSpec(spec) {
  if (spec.template === "templateCeilingLamp") {
    return ROOM.height - spec.dimensions.height;
  }

  if (spec.template === "templateWindowFlat") {
    return ROOM_LEVELS.windowBottom;
  }

  if (spec.template === "templateCurtain") {
    return ROOM_LEVELS.curtainBottom;
  }

  if (spec.template === "templateDoorFlat") {
    return ROOM_LEVELS.doorBottom;
  }

  if (spec.template === "templatePoster") {
    return ROOM_LEVELS.wallPosterBottom;
  }

  if (spec.template === "templateWallClock") {
    return ROOM_LEVELS.wallClockBottom;
  }

  if (spec.template === "templateMobile") {
    return ROOM_LEVELS.highMobileBottom;
  }

  return ROOM_LEVELS.floor;
}

function renderPlacedList() {
  dom.placedList.innerHTML = "";
  dom.placedCount.textContent = String(sceneState.placed.length);

  for (const placed of sceneState.placed) {
    const item = document.createElement("article");
    item.className = "placed-item";
    if (placed.id === sceneState.selectedId) {
      item.style.outline = "2px solid rgba(31,122,108,0.35)";
    }

    const title = document.createElement("strong");
    title.textContent = placed.label;

    const info = document.createElement("small");
    const p = placed.object3d.position;
    info.textContent = `x ${p.x.toFixed(2)} | y ${p.y.toFixed(2)} | z ${p.z.toFixed(2)}`;

    const actions = document.createElement("div");
    actions.className = "placed-actions";

    const selectBtn = document.createElement("button");
    selectBtn.type = "button";
    selectBtn.textContent = "Выбрать";
    selectBtn.addEventListener("click", () => selectPlaced(placed.id));

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "secondary";
    removeBtn.textContent = "Убрать";
    removeBtn.addEventListener("click", () => {
      if (sceneState.selectedId === placed.id) {
        clearSelection();
      }
      placed.object3d.removeFromParent();
      sceneState.placed = sceneState.placed.filter((entry) => entry.id !== placed.id);
      markCollidersDirty();
      renderPlacedList();
    });

    actions.append(selectBtn, removeBtn);
    item.append(title, info, actions);
    dom.placedList.append(item);
  }
}

function schedulePlacedListRender() {
  if (sceneState.placedListRenderQueued) {
    return;
  }

  sceneState.placedListRenderQueued = true;
  requestAnimationFrame(() => {
    sceneState.placedListRenderQueued = false;
    renderPlacedList();
  });
}

function selectPlaced(id) {
  const placed = sceneState.placed.find((entry) => entry.id === id);
  if (!placed) {
    return;
  }

  sceneState.selectedId = id;
  transform.attach(placed.object3d);
  setSelectionOutline();
  syncTransformInputs();
  renderPlacedList();

  const spec = placed.object3d.userData.spec;
  dom.selectionPill.textContent = spec.number.toString();
  dom.selectionMeta.textContent =
    `${spec.displayNameRu} | ${spec.displayNameEn} | template: ${spec.template} | ` +
    `dims: ${spec.dimensions.width} x ${spec.dimensions.height} x ${spec.dimensions.depth} м`;
  renderSelectionBlueprint(spec);
  renderComparePanel(placed);
  updateCompareRig(placed);
}

function clearSelection() {
  sceneState.selectedId = null;
  transform.detach();
  setSelectionOutline();
  dom.selectionPill.textContent = "Нет";
  dom.selectionMeta.textContent = "Выберите предмет в сцене или добавьте новый из каталога.";
  renderSelectionBlueprint(null);
  renderComparePanel(null);
  updateCompareRig(null);
  renderPlacedList();
}

function renderSelectionBlueprint(spec) {
  if (!spec?.blueprintImage) {
    dom.selectionBlueprint.hidden = true;
    dom.selectionBlueprint.removeAttribute("src");
    dom.selectionBlueprintCaption.textContent = "Чертёж появится после выбора объекта.";
    return;
  }

  dom.selectionBlueprint.hidden = false;
  dom.selectionBlueprint.src = spec.blueprintImage;
  dom.selectionBlueprint.alt = `Чертёж ${spec.displayNameRu}`;
  dom.selectionBlueprintCaption.textContent =
    `Blueprint: ${spec.displayNameRu} | template ${spec.template}`;
}

function renderComparePanel(placed) {
  const sources = getPlacedVectorSources(placed);
  if (!placed || sources.length === 0) {
    dom.comparePanel.hidden = true;
    dom.compareGrid.innerHTML = "";
    dom.compareTitle.textContent = "Выберите объект";
    return;
  }

  dom.comparePanel.hidden = false;
  dom.compareGrid.innerHTML = "";
  dom.compareTitle.textContent = placed.label;

  const labels = ["Front", "Top", "Side"];
  sources.forEach((src, index) => {
    const card = document.createElement("div");
    card.className = "compare-card";

    const label = document.createElement("span");
    label.textContent = labels[index] ?? `View ${index + 1}`;

    const image = document.createElement("img");
    image.src = `../${src}`;
    image.alt = `${placed.label} ${label.textContent}`;

    card.append(label, image);
    dom.compareGrid.append(card);
  });
}

function getPlacedVectorSources(placed) {
  if (!placed?.object3d) {
    return [];
  }

  const rootChild = placed.object3d.children[0];
  return rootChild?.userData?.vectorSources ?? [];
}

function setPresetView(mode) {
  const placed = getSelectedPlaced();
  if (!placed) {
    return;
  }

  const spec = placed.object3d.userData.spec;
  const center = placed.object3d.position.clone();
  const size = new THREE.Vector3(
    spec.dimensions.width * placed.object3d.scale.x,
    spec.dimensions.height * placed.object3d.scale.x,
    spec.dimensions.depth * placed.object3d.scale.x,
  );
  orbit.target.copy(center);

  if (mode === "front") {
    camera.position.set(center.x, center.y + size.y * 0.15, center.z + Math.max(2.2, size.z * 1.5));
  }
  if (mode === "top") {
    camera.position.set(center.x, center.y + Math.max(2.4, size.y * 5), center.z + 0.001);
  }
  if (mode === "side") {
    camera.position.set(center.x + Math.max(2.2, size.x * 3.5), center.y + size.y * 0.15, center.z);
  }
  orbit.update();
}

function updateCompareRig(placed) {
  if (!sceneState.compareRig) {
    sceneState.compareRig = new THREE.Group();
    sceneState.compareRig.name = "compare_rig";
    scene.add(sceneState.compareRig);
  }

  sceneState.compareRig.clear();

  const sources = getPlacedVectorSources(placed);
  if (!placed || sources.length === 0) {
    sceneState.compareRig.visible = false;
    return;
  }

  sceneState.compareRig.visible = true;

  const spec = placed.object3d.userData.spec;
  const scale = placed.object3d.scale.x;
  const root = placed.object3d;
  const width = spec.dimensions.width * scale;
  const height = spec.dimensions.height * scale;
  const depth = spec.dimensions.depth * scale;

  const [frontSrc, topSrc, sideSrc] = sources;
  const frontPlane = createReferencePlane(`../${frontSrc}`, width, height, 0.45);
  frontPlane.position.set(0, height / 2, depth / 2 + 0.002);
  sceneState.compareRig.add(frontPlane);

  const topPlane = createReferencePlane(`../${topSrc}`, width, depth, 0.45);
  topPlane.rotation.x = -Math.PI / 2;
  topPlane.position.set(0, height + 0.002, 0);
  sceneState.compareRig.add(topPlane);

  const sidePlane = createReferencePlane(`../${sideSrc}`, depth, height, 0.45);
  sidePlane.rotation.y = Math.PI / 2;
  sidePlane.position.set(width / 2 + 0.002, height / 2, 0);
  sceneState.compareRig.add(sidePlane);

  sceneState.compareRig.position.copy(root.position);
  sceneState.compareRig.rotation.copy(root.rotation);
  sceneState.compareRig.scale.setScalar(root.scale.x);
}

function createReferencePlane(src, width, height, opacity) {
  const texture = textureLoader.load(src);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    opacity,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  return new THREE.Mesh(new THREE.PlaneGeometry(width, height), material);
}

function syncTransformInputs() {
  const placed = getSelectedPlaced();
  if (!placed) {
    return;
  }

  const object3d = placed.object3d;
  dom.posX.value = object3d.position.x.toFixed(2);
  dom.posY.value = object3d.position.y.toFixed(2);
  dom.posZ.value = object3d.position.z.toFixed(2);
  dom.rotY.value = THREE.MathUtils.radToDeg(object3d.rotation.y).toFixed(1);
  dom.uniformScale.value = object3d.scale.x.toFixed(2);
}

function applyTransformInputs() {
  const placed = getSelectedPlaced();
  if (!placed) {
    return;
  }

  const object3d = placed.object3d;
  const spec = object3d.userData.spec;
  const scale = Math.max(0.2, Number(dom.uniformScale.value) || 1);
  object3d.scale.setScalar(scale);

  const halfHeight = (spec.dimensions.height * scale) / 2;
  object3d.position.set(
    clampToRoom(Number(dom.posX.value) || 0, spec.dimensions.width * scale, ROOM.width),
    Math.max(Number(dom.posY.value) || halfHeight, halfHeight),
    clampToRoom(Number(dom.posZ.value) || 0, spec.dimensions.depth * scale, ROOM.depth),
  );
  object3d.rotation.y = THREE.MathUtils.degToRad(Number(dom.rotY.value) || 0);
  markCollidersDirty();
  renderPlacedList();
}

function focusSelection() {
  const placed = getSelectedPlaced();
  if (!placed) {
    return;
  }

  const box = new THREE.Box3().setFromObject(placed.object3d);
  const center = box.getCenter(new THREE.Vector3());
  orbit.target.copy(center);
}

function duplicateSelection() {
  const placed = getSelectedPlaced();
  if (!placed) {
    return;
  }

  const spec = placed.object3d.userData.spec;
  const clone = createPlacedObject(spec, {
    position: {
      x: placed.object3d.position.x + 0.35,
      y: placed.object3d.position.y,
      z: placed.object3d.position.z + 0.35,
    },
    rotationY: placed.object3d.rotation.y,
    scale: placed.object3d.scale.x,
  });
  selectPlaced(clone.id);
}

function deleteSelection() {
  const placed = getSelectedPlaced();
  if (!placed) {
    return;
  }

  placed.object3d.removeFromParent();
  sceneState.placed = sceneState.placed.filter((entry) => entry.id !== placed.id);
  markCollidersDirty();
  clearSelection();
  renderPlacedList();
}

function alignCanvasToEasel() {
  const easel = sceneState.placed.find((entry) => entry.specId === "obj_37_easel");
  const canvas = sceneState.placed.find((entry) => entry.specId === "obj_38_canvas");
  if (!easel || !canvas) {
    return;
  }

  const shelfWorld = getEaselShelfTopWorldPosition(easel.object3d);
  const spec = canvas.object3d.userData.spec;
  const canvasBottomCenter = new THREE.Vector3(0, -spec.dimensions.height / 2, 0);
  const rotatedBottomCenter = canvasBottomCenter
    .multiplyScalar(canvas.object3d.scale.x)
    .applyEuler(canvas.object3d.rotation);
  canvas.object3d.position.copy(shelfWorld.sub(rotatedBottomCenter));
  markCollidersDirty();
}

function alignPlayTableToys() {
  const table = sceneState.placed.find((entry) => entry.specId === "obj_30_round_play_table");
  if (!table) {
    return;
  }

  const toyOffsets = {
    obj_31_toy_teapot_or_cup: new THREE.Vector3(-0.16, 0, -0.18),
    obj_32_table_toy_cube_or_item: new THREE.Vector3(0.08, 0, -0.06),
    obj_33_small_table_toy: new THREE.Vector3(0.2, 0, 0.08),
  };
  const tabletopY = table.object3d.position.y + (ROOM_LEVELS.playTableTop - table.object3d.userData.spec.dimensions.height / 2);
  for (const placed of sceneState.placed) {
    const offset = toyOffsets[placed.specId];
    if (!offset) {
      continue;
    }

    placed.object3d.position.x = table.object3d.position.x + offset.x;
    placed.object3d.position.z = table.object3d.position.z + offset.z;
    const itemBox = new THREE.Box3().setFromObject(placed.object3d);
    placed.object3d.position.y += tabletopY - itemBox.min.y;
  }
  markCollidersDirty();
}

function getEaselShelfTopWorldPosition(root) {
  const mountLocal = getSocketLocalPosition(root, "canvas_mount_center");
  const shelfTopLocal = mountLocal?.clone() ?? new THREE.Vector3();
  shelfTopLocal.y = -root.userData.spec.dimensions.height / 2 + ROOM_LEVELS.easelCanvasRail;
  return shelfTopLocal
    .multiplyScalar(root.scale.x)
    .applyEuler(root.rotation)
    .add(root.position);
}

function getSocketWorldPosition(root, socketName) {
  const local = getSocketLocalPosition(root, socketName);
  if (!local) {
    return null;
  }

  return local
    .clone()
    .multiplyScalar(root.scale.x)
    .applyEuler(root.rotation)
    .add(root.position);
}

function getSocketLocalPosition(root, socketName) {
  return root.children[0]?.userData?.normalizedSockets?.[socketName] ?? null;
}

function saveLayout() {
  const payload = sceneState.placed.map((placed) => ({
    specId: placed.specId,
    position: {
      x: Number(placed.object3d.position.x.toFixed(4)),
      y: Number(placed.object3d.position.y.toFixed(4)),
      z: Number(placed.object3d.position.z.toFixed(4)),
    },
    rotationY: Number(placed.object3d.rotation.y.toFixed(4)),
    scale: Number(placed.object3d.scale.x.toFixed(4)),
  }));

  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  dom.statusLine.textContent = `Layout сохранён: ${payload.length} объектов.`;
}

function loadSavedLayout() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (sceneState.catalog.length === 0) {
    return;
  }

  if (!raw) {
    seedDefaultScene();
    return;
  }

  for (const placed of sceneState.placed) {
    placed.object3d.removeFromParent();
  }
  sceneState.placed = [];
  markCollidersDirty();
  clearSelection();

  try {
    const payload = JSON.parse(raw);
    if (!Array.isArray(payload) || payload.length === 0) {
      seedDefaultScene();
      return;
    }

    for (const item of payload) {
      const spec = sceneState.catalog.find((entry) => entry.id === item.specId);
      if (spec) {
        createPlacedObject(spec, item, { renderList: false });
      }
    }
    alignCanvasToEasel();
    alignPlayTableToys();
    renderPlacedList();
    dom.statusLine.textContent = `Layout загружен: ${payload.length} объектов.`;
  } catch (error) {
    console.error(error);
    dom.statusLine.textContent = "Не удалось прочитать сохранённый layout.";
    seedDefaultScene();
  }
}

function seedDefaultScene() {
  for (const placed of sceneState.placed) {
    placed.object3d.removeFromParent();
  }
  sceneState.placed = [];
  markCollidersDirty();
  clearSelection();

  let firstPlaced = null;
  const missing = [];

  for (const entry of PLAN_LAYOUT) {
    const spec = sceneState.catalog.find((item) => item.number === entry.number);
    if (!spec) {
      missing.push(entry.number);
      continue;
    }

    const world = planToWorld(entry.px, entry.py);
    const scale = entry.scale ?? 1;
    const placed = createPlacedObject(spec, {
      position: {
        x: entry.worldX ?? world.x,
        y: placementYForSurface(spec, entry.surfaceY ?? defaultSurfaceYForSpec(spec), scale),
        z: entry.worldZ ?? world.z,
      },
      rotationY: entry.rotationY ?? 0,
      scale,
    }, { renderList: false });

    if (!firstPlaced) {
      firstPlaced = placed;
    }
  }

  alignCanvasToEasel();
  alignPlayTableToys();
  renderPlacedList();

  if (firstPlaced) {
    selectPlaced(firstPlaced.id);
  }

  dom.statusLine.textContent = missing.length
    ? `Сцена собрана по room_plan1/2/3, но не найдены specs: ${missing.join(", ")}.`
    : `Сцена собрана по room_plan1/2/3: 51 модель, ${PLAN_LAYOUT.length} экземпляров по плану.`;
}

function planToWorld(px, py) {
  return {
    x: ((px - (PLAN_BOUNDS.x + PLAN_BOUNDS.width / 2)) / PLAN_BOUNDS.width) * ROOM.width,
    z: ((py - (PLAN_BOUNDS.y + PLAN_BOUNDS.height / 2)) / PLAN_BOUNDS.height) * ROOM.depth,
  };
}

function planSizeToWorld(widthPx, heightPx) {
  return {
    width: (widthPx / PLAN_BOUNDS.width) * ROOM.width,
    depth: (heightPx / PLAN_BOUNDS.height) * ROOM.depth,
  };
}

function addPlanFloorZone(px, py, widthPx, heightPx, color, options = {}) {
  const center = planToWorld(px + widthPx / 2, py + heightPx / 2);
  const size = planSizeToWorld(widthPx, heightPx);
  const y = options.y ?? FLOOR_ZONE_Y;
  const renderOrder = options.renderOrder ?? 1;
  const zone = new THREE.Mesh(
    new THREE.PlaneGeometry(size.width, size.depth),
    new THREE.MeshStandardMaterial({
      color,
      roughness: 0.94,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    }),
  );
  zone.rotation.x = -Math.PI / 2;
  zone.position.set(center.x, y, center.z);
  zone.receiveShadow = true;
  zone.renderOrder = renderOrder;
  scene.add(zone);
}

function addPlanCeilingZone(px, py, widthPx, heightPx, material) {
  const overlappedPx = px - CEILING_EDGE_OVERLAP_PX;
  const overlappedPy = py - CEILING_EDGE_OVERLAP_PX;
  const overlappedWidthPx = widthPx + CEILING_EDGE_OVERLAP_PX * 2;
  const overlappedHeightPx = heightPx + CEILING_EDGE_OVERLAP_PX * 2;
  const center = planToWorld(overlappedPx + overlappedWidthPx / 2, overlappedPy + overlappedHeightPx / 2);
  const size = planSizeToWorld(overlappedWidthPx, overlappedHeightPx);
  const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(size.width, size.depth), material);
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.set(center.x, ROOM.height, center.z);
  ceiling.receiveShadow = true;
  ceiling.renderOrder = 1;
  scene.add(ceiling);
}

function addPlanWall(px, py, widthPx, depthPx, height, material) {
  const center = planToWorld(px + widthPx / 2, py + depthPx / 2);
  const size = planSizeToWorld(widthPx, depthPx);
  const wall = new THREE.Mesh(
    new THREE.BoxGeometry(size.width, height, size.depth),
    material,
  );
  wall.position.set(center.x, height / 2, center.z);
  wall.castShadow = true;
  wall.receiveShadow = true;
  scene.add(wall);
  sceneState.wallColliders.push(new THREE.Box3().setFromObject(wall));
}

function addPlanWallWithOpenings(px, py, widthPx, depthPx, height, material, openings) {
  let cursor = px;
  const end = px + widthPx;
  const sortedOpenings = openings
    .map((opening) => ({
      start: Math.max(px, opening.startPx),
      end: Math.min(end, opening.endPx),
    }))
    .filter((opening) => opening.end > opening.start)
    .sort((a, b) => a.start - b.start);

  for (const opening of sortedOpenings) {
    if (opening.start > cursor) {
      addPlanWall(cursor, py, opening.start - cursor, depthPx, height, material);
    }
    cursor = Math.max(cursor, opening.end);
  }

  if (cursor < end) {
    addPlanWall(cursor, py, end - cursor, depthPx, height, material);
  }
}

function addBackWallWithWindow(material) {
  const windowPx = { start: 318, end: 522 };
  const wallY = 70;
  const wallDepth = 22;
  const wallStart = 70;
  const wallWidth = 1260;
  const windowBottom = ROOM_LEVELS.windowBottom;
  const windowTop = ROOM_LEVELS.windowBottom + 1.18;

  addPlanWall(wallStart, wallY, windowPx.start - wallStart, wallDepth, WALL_HEIGHT, material);
  addPlanWall(windowPx.end, wallY, wallStart + wallWidth - windowPx.end, wallDepth, WALL_HEIGHT, material);
  addPlanWall(windowPx.start, wallY, windowPx.end - windowPx.start, wallDepth, windowBottom, material);
  addElevatedPlanWall(
    windowPx.start,
    wallY,
    windowPx.end - windowPx.start,
    wallDepth,
    Math.max(WALL_HEIGHT - windowTop, 0.05),
    windowTop,
    material,
  );
}

function addElevatedPlanWall(px, py, widthPx, depthPx, height, bottomY, material) {
  const center = planToWorld(px + widthPx / 2, py + depthPx / 2);
  const size = planSizeToWorld(widthPx, depthPx);
  const wall = new THREE.Mesh(
    new THREE.BoxGeometry(size.width, height, size.depth),
    material,
  );
  wall.position.set(center.x, bottomY + height / 2, center.z);
  wall.castShadow = true;
  wall.receiveShadow = true;
  scene.add(wall);
  sceneState.wallColliders.push(new THREE.Box3().setFromObject(wall));
}

function onPointerDown(event) {
  if (fpsState.enabled) {
    if (!fpsState.pointerLocked && event.pointerType === "mouse" && !isMobileFpsMode()) {
      dom.canvas.requestPointerLock();
    }
    return;
  }

  if (transform.dragging) {
    return;
  }

  const rect = dom.canvas.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);

  if (event.shiftKey) {
    const placed = getSelectedPlaced();
    if (placed && movePlacedToPointerHit(placed)) {
      return;
    }
  }

  const hits = raycaster.intersectObjects(sceneState.placed.map((entry) => entry.object3d), true);
  const hit = hits.find((entry) => findPlacedRoot(entry.object)?.userData?.placedId);

  if (!hit) {
    clearSelection();
    return;
  }

  const root = findPlacedRoot(hit.object);
  if (root?.userData?.placedId) {
    selectPlaced(root.userData.placedId);
  }
}

function onCanvasDoubleClick(event) {
  if (fpsState.enabled) {
    return;
  }

  const placed = getSelectedPlaced();
  if (!placed) {
    return;
  }

  const rect = dom.canvas.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  movePlacedToPointerHit(placed);
}

function onKeyDown(event) {
  if (isTypingInField(event.target)) {
    return;
  }

  if (fpsState.enabled && isFirstPersonKey(event.code)) {
    event.preventDefault();
    fpsState.keys.add(event.code);
    if (event.code === "Space") {
      jumpFirstPerson();
    }
    return;
  }

  if (event.key.toLowerCase() === "t") {
    transform.setMode("translate");
  }
  if (event.key.toLowerCase() === "r") {
    transform.setMode("rotate");
  }
  if (event.key.toLowerCase() === "s") {
    transform.setMode("scale");
  }
  if (event.key === "Delete" || event.key === "Backspace") {
    deleteSelection();
  }
}

function onKeyUp(event) {
  if (fpsState.enabled && isFirstPersonKey(event.code)) {
    event.preventDefault();
    fpsState.keys.delete(event.code);
  }
}

function isTypingInField(target) {
  return target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement;
}

function isFirstPersonKey(code) {
  return ["KeyW", "KeyA", "KeyS", "KeyD", "Space", "ShiftLeft", "ShiftRight"].includes(code);
}

function isMobileFpsMode() {
  return window.matchMedia("(max-width: 1100px), (pointer: coarse)").matches;
}

function setupMobileFpsStick(stick, knob, output, options = {}) {
  if (!stick || !knob) {
    return;
  }

  let activePointerId = null;

  const resetStick = () => {
    activePointerId = null;
    output.set(0, 0);
    knob.style.transform = "translate(-50%, -50%)";
  };

  const updateStick = (event) => {
    if (activePointerId !== event.pointerId) {
      return;
    }

    event.preventDefault();
    const rect = stick.getBoundingClientRect();
    const radius = Math.min(rect.width, rect.height) * 0.38;
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(dx, dy);
    const scale = distance > radius ? radius / distance : 1;
    const x = dx * scale;
    const y = dy * scale;

    output.set(x / radius, (options.invertY ? -y : y) / radius);
    knob.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  };

  stick.addEventListener("pointerdown", (event) => {
    if (!fpsState.enabled || activePointerId !== null) {
      return;
    }

    activePointerId = event.pointerId;
    stick.setPointerCapture(event.pointerId);
    updateStick(event);
  });
  stick.addEventListener("pointermove", updateStick);
  stick.addEventListener("pointerup", resetStick);
  stick.addEventListener("pointercancel", resetStick);
  stick.addEventListener("lostpointercapture", resetStick);
}

function jumpFirstPerson() {
  if (!fpsState.enabled || !isFirstPersonGrounded()) {
    return;
  }

  fpsState.velocityY = fpsState.jumpSpeed;
}

function toggleFirstPersonMode() {
  if (!sceneState.sceneReady) {
    dom.statusLine.textContent = "FPS станет доступен, когда сцена закончит загрузку.";
    return;
  }
  setFirstPersonMode(!fpsState.enabled);
}

function setFirstPersonMode(enabled) {
  fpsState.enabled = enabled;
  fpsState.keys.clear();
  fpsState.velocityY = 0;
  orbit.enabled = !enabled;
  transform.enabled = !enabled;
  dom.fpsToggleBtn.classList.toggle("active", enabled);
  dom.fpsToggleBtn.textContent = enabled ? "FPS on" : "FPS";
  dom.viewportWrap.classList.toggle("fps-active", enabled);
  dom.mobileFpsControls.setAttribute("aria-hidden", enabled ? "false" : "true");
  fpsState.mobileMove.set(0, 0);
  fpsState.mobileLook.set(0, 0);
  dom.moveStickKnob.style.transform = "translate(-50%, -50%)";
  dom.lookStickKnob.style.transform = "translate(-50%, -50%)";

  if (enabled) {
    clearSelection();
    syncFirstPersonAnglesFromCamera();
    moveCameraToSafeFirstPersonStart();
    fpsState.groundY = getFirstPersonGroundY(camera.position);
    dom.statusLine.textContent = isMobileFpsMode()
      ? "FPS режим: левый стик для движения, кнопка прыжка, правый стик для камеры."
      : "FPS режим: клик по сцене захватит мышь, WASD движение, Space прыжок, Esc выход.";
    if (!isMobileFpsMode()) {
      dom.canvas.requestPointerLock();
    }
  } else {
    if (document.pointerLockElement === dom.canvas) {
      document.exitPointerLock();
    }
    orbit.target.set(camera.position.x, fpsState.eyeHeight, camera.position.z - 1);
    orbit.update();
    dom.statusLine.textContent = "FPS режим выключен. Orbit и редактирование объектов снова активны.";
  }
}

function syncFirstPersonAnglesFromCamera() {
  const direction = new THREE.Vector3();
  camera.getWorldDirection(direction);
  fpsState.yaw = Math.atan2(-direction.x, -direction.z);
  fpsState.pitch = Math.asin(THREE.MathUtils.clamp(direction.y, -1, 1));
}

function onPointerLockChange() {
  fpsState.pointerLocked = document.pointerLockElement === dom.canvas;
}

function onPointerLockMouseMove(event) {
  if (!fpsState.enabled || !fpsState.pointerLocked) {
    return;
  }

  const sensitivity = 0.0022;
  fpsState.yaw -= event.movementX * sensitivity;
  fpsState.pitch -= event.movementY * sensitivity;
  fpsState.pitch = THREE.MathUtils.clamp(fpsState.pitch, -Math.PI / 2 + 0.05, Math.PI / 2 - 0.05);
  applyFirstPersonLook();
}

function applyFirstPersonLook() {
  camera.rotation.order = "YXZ";
  camera.rotation.y = fpsState.yaw;
  camera.rotation.x = fpsState.pitch;
  camera.rotation.z = 0;
}

function updateFirstPersonController(delta) {
  if (!fpsState.enabled) {
    return;
  }

  if (fpsState.mobileLook.lengthSq() > 0) {
    const lookSpeed = 0.9;
    fpsState.yaw -= fpsState.mobileLook.x * lookSpeed * delta;
    fpsState.pitch -= fpsState.mobileLook.y * lookSpeed * delta;
    fpsState.pitch = THREE.MathUtils.clamp(fpsState.pitch, -Math.PI / 2 + 0.05, Math.PI / 2 - 0.05);
  }

  const forward = new THREE.Vector3(-Math.sin(fpsState.yaw), 0, -Math.cos(fpsState.yaw));
  const right = new THREE.Vector3(Math.cos(fpsState.yaw), 0, -Math.sin(fpsState.yaw));
  const move = new THREE.Vector3();
  const speed = fpsState.keys.has("ShiftLeft") || fpsState.keys.has("ShiftRight")
    ? fpsState.moveSpeed * 1.65
    : fpsState.moveSpeed;

  if (fpsState.keys.has("KeyW")) move.add(forward);
  if (fpsState.keys.has("KeyS")) move.sub(forward);
  if (fpsState.keys.has("KeyD")) move.add(right);
  if (fpsState.keys.has("KeyA")) move.sub(right);
  if (fpsState.mobileMove.lengthSq() > 0) {
    move.addScaledVector(forward, fpsState.mobileMove.y);
    move.addScaledVector(right, fpsState.mobileMove.x);
  }

  if (move.lengthSq() > 0) {
    move.normalize().multiplyScalar(speed * delta);
    moveFirstPersonWithCollisions(move);
  }

  fpsState.groundY = getFirstPersonGroundY(camera.position);
  fpsState.velocityY -= fpsState.gravity * delta;
  camera.position.y += fpsState.velocityY * delta;
  const eyeGroundY = fpsState.groundY + fpsState.eyeHeight;
  if (camera.position.y <= eyeGroundY) {
    camera.position.y = eyeGroundY;
    fpsState.velocityY = 0;
  }

  applyFirstPersonLook();
}

function isFirstPersonGrounded() {
  return camera.position.y <= getFirstPersonGroundY(camera.position) + fpsState.eyeHeight + 0.01;
}

function moveCameraToSafeFirstPersonStart() {
  const current = camera.position.clone();
  current.y = fpsState.eyeHeight;
  if (isSafeFirstPersonPosition(current)) {
    camera.position.copy(current);
    return;
  }

  const candidates = [
    fpsState.spawnPoint,
    new THREE.Vector3(0.15, fpsState.eyeHeight, 1.25),
    new THREE.Vector3(-1.2, fpsState.eyeHeight, 1.6),
    new THREE.Vector3(1.35, fpsState.eyeHeight, 1.6),
    new THREE.Vector3(2.25, fpsState.eyeHeight, -1.25),
    new THREE.Vector3(-2.0, fpsState.eyeHeight, -1.25),
    new THREE.Vector3(0, fpsState.eyeHeight, 0),
  ];

  const safe = candidates.find((candidate) => isSafeFirstPersonPosition(candidate));
  camera.position.copy(safe ?? fpsState.spawnPoint);
}

function isSafeFirstPersonPosition(position) {
  const clamped = new THREE.Vector3(
    clampToRoom(position.x, fpsState.radius * 2, ROOM.width),
    getFirstPersonGroundY(position) + fpsState.eyeHeight,
    clampToRoom(position.z, fpsState.radius * 2, ROOM.depth),
  );
  return clamped.distanceTo(position) < 0.001 && !wouldCollideFirstPerson(clamped);
}

function getFirstPersonGroundY(position) {
  const feetY = position.y - fpsState.eyeHeight;
  let groundY = 0;
  const footprint = getFirstPersonFootprint(position);
  for (const box of getFirstPersonStandableColliders()) {
    if (box.max.y <= groundY || box.max.y > feetY + 0.18) {
      continue;
    }

    if (footprintIntersectsBox(footprint, box)) {
      groundY = box.max.y;
    }
  }

  return groundY;
}

function getFirstPersonFootprint(position) {
  return {
    minX: position.x - fpsState.radius,
    maxX: position.x + fpsState.radius,
    minZ: position.z - fpsState.radius,
    maxZ: position.z + fpsState.radius,
  };
}

function getFirstPersonStandableColliders() {
  ensureColliderCache();
  return sceneState.colliderCache.standable;
}

function footprintIntersectsBox(footprint, box) {
  return (
    footprint.maxX > box.min.x &&
    footprint.minX < box.max.x &&
    footprint.maxZ > box.min.z &&
    footprint.minZ < box.max.z
  );
}

function moveFirstPersonWithCollisions(move) {
  const nextX = new THREE.Vector3(camera.position.x + move.x, camera.position.y, camera.position.z);
  if (!wouldCollideFirstPerson(nextX)) {
    camera.position.x = clampToRoom(nextX.x, fpsState.radius * 2, ROOM.width);
  }

  const nextZ = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z + move.z);
  if (!wouldCollideFirstPerson(nextZ)) {
    camera.position.z = clampToRoom(nextZ.z, fpsState.radius * 2, ROOM.depth);
  }
}

function wouldCollideFirstPerson(position) {
  const playerBox = getFirstPersonBox(position);
  return getFirstPersonColliders().some((box) => playerBox.intersectsBox(box));
}

function getFirstPersonBox(position) {
  const x = clampToRoom(position.x, fpsState.radius * 2, ROOM.width);
  const z = clampToRoom(position.z, fpsState.radius * 2, ROOM.depth);
  const feetY = position.y - fpsState.eyeHeight;
  return new THREE.Box3(
    new THREE.Vector3(x - fpsState.radius, feetY + 0.02, z - fpsState.radius),
    new THREE.Vector3(x + fpsState.radius, feetY + fpsState.bodyHeight, z + fpsState.radius),
  );
}

function getFirstPersonColliders() {
  ensureColliderCache();
  return [...sceneState.wallColliders, ...sceneState.colliderCache.solid];
}

function markCollidersDirty() {
  sceneState.collidersDirty = true;
}

function ensureColliderCache() {
  if (!sceneState.collidersDirty) {
    return;
  }

  const solid = [];
  const standable = [];
  for (const placed of sceneState.placed) {
    if (placed.specId === "obj_27_office_chair") {
      const chairColliders = getOfficeChairColliders(placed.object3d);
      solid.push(...chairColliders.solid);
      standable.push(...chairColliders.standable);
      continue;
    }

    if (!isSolidForFirstPerson(placed.object3d.userData.spec)) {
      continue;
    }

    const box = new THREE.Box3().setFromObject(placed.object3d);
    if (box.isEmpty()) {
      continue;
    }

    solid.push(box);
    if (box.max.y <= 1.05 && box.max.y >= 0.08) {
      standable.push(box);
    }
  }

  sceneState.colliderCache.solid = solid;
  sceneState.colliderCache.standable = standable;
  sceneState.collidersDirty = false;
}

function getOfficeChairColliders(root) {
  const seat = localColliderToWorldBox(
    root,
    new THREE.Vector3(-0.22, -0.44, -0.18),
    new THREE.Vector3(0.22, -0.32, 0.2),
  );
  const back = localColliderToWorldBox(
    root,
    new THREE.Vector3(-0.25, -0.23, -0.25),
    new THREE.Vector3(0.25, 0.26, -0.11),
  );

  return {
    solid: [seat, back],
    standable: [seat],
  };
}

function localColliderToWorldBox(root, min, max) {
  const corners = [
    new THREE.Vector3(min.x, min.y, min.z),
    new THREE.Vector3(min.x, min.y, max.z),
    new THREE.Vector3(min.x, max.y, min.z),
    new THREE.Vector3(min.x, max.y, max.z),
    new THREE.Vector3(max.x, min.y, min.z),
    new THREE.Vector3(max.x, min.y, max.z),
    new THREE.Vector3(max.x, max.y, min.z),
    new THREE.Vector3(max.x, max.y, max.z),
  ];

  const box = new THREE.Box3();
  for (const corner of corners) {
    box.expandByPoint(corner.multiplyScalar(root.scale.x).applyEuler(root.rotation).add(root.position));
  }
  return box;
}

function isSolidForFirstPerson(spec) {
  if (!spec) {
    return false;
  }

  const nonSolidTemplates = new Set([
    "templateRugOval",
    "templatePoster",
    "templateWindowFlat",
    "templateCurtain",
    "templateMobile",
    "templateCeilingLamp",
    "templateFlatPortable",
    "templatePaperProp",
  ]);

  if (nonSolidTemplates.has(spec.template)) {
    return false;
  }

  return Math.max(spec.dimensions.width, spec.dimensions.depth) >= 0.18 || spec.dimensions.height >= 0.18;
}

function movePlacedToPointerHit(placed) {
  if (!placed || !sceneState.hoverPlane) {
    return false;
  }

  const [hit] = raycaster.intersectObject(sceneState.hoverPlane);
  if (!hit) {
    return false;
  }

  const spec = placed.object3d.userData.spec;
  const scale = placed.object3d.scale.x;
  placed.object3d.position.set(
    clampToRoom(hit.point.x, spec.dimensions.width * scale, ROOM.width),
    Math.max((spec.dimensions.height * scale) / 2, 0.01),
    clampToRoom(hit.point.z, spec.dimensions.depth * scale, ROOM.depth),
  );
  markCollidersDirty();
  syncTransformInputs();
  renderPlacedList();
  updateSelectionHelper();
  updateCompareRig(placed);
  return true;
}

function buildEnvironment() {
  scene.add(new THREE.HemisphereLight("#ffbd73", "#5c55b8", 2.05));
  scene.add(new THREE.AmbientLight("#8d74d8", 0.72));

  const sun = new THREE.DirectionalLight("#ffb45f", 2.15);
  sun.position.set(5, 7, 3);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  scene.add(sun);

  const fill = new THREE.DirectionalLight("#6562d6", 1.05);
  fill.position.set(-5, 3, -4);
  scene.add(fill);

  const bounce = new THREE.DirectionalLight("#ff7a32", 0.75);
  bounce.position.set(-2, 1.4, 5);
  scene.add(bounce);

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(ROOM.width, ROOM.depth),
    new THREE.MeshStandardMaterial({ color: "#ffd8a0", roughness: 0.92 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);
  sceneState.hoverPlane = floor;

  addPlanFloorZone(94, 94, 600, 530, "#ffd0cf");
  addPlanFloorZone(694, 94, 612, 530, "#ffe4ad");
  addPlanFloorZone(94, 640, 1212, 446, "#d8d7ff");
  addPlanFloorZone(600, 560, 220, 95, "#ffd6a6", {
    y: FLOOR_DOORWAY_ZONE_Y,
    renderOrder: 2,
  });

  const wallMaterial = new THREE.MeshStandardMaterial({
    color: "#fff0cf",
    roughness: 0.96,
  });
  const partitionMaterial = new THREE.MeshStandardMaterial({
    color: "#f2b87c",
    roughness: 0.96,
  });
  const ceilingMaterial = new THREE.MeshStandardMaterial({
    color: "#ffe4bd",
    roughness: 0.98,
    transparent: true,
    opacity: 0.88,
    side: THREE.DoubleSide,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1,
  });

  addBackWallWithWindow(wallMaterial);
  addPlanWall(70, 1088, 1260, 22, WALL_HEIGHT, wallMaterial);
  addPlanWall(70, 70, 22, 1040, WALL_HEIGHT, wallMaterial);
  addPlanWall(1308, 70, 22, 1040, WALL_HEIGHT, wallMaterial);
  addPlanWall(688, 94, 12, 530, WALL_HEIGHT, partitionMaterial);
  addPlanWallWithOpenings(94, 624, 1212, 16, WALL_HEIGHT, partitionMaterial, [
    { startPx: 600, endPx: 820 },
  ]);
  addPlanWall(600, 560, 12, 80, WALL_HEIGHT, partitionMaterial);
  addPlanWall(808, 560, 12, 80, WALL_HEIGHT, partitionMaterial);
  addPlanCeilingZone(94, 94, 600, 530, ceilingMaterial);
  addPlanCeilingZone(694, 94, 612, 530, ceilingMaterial);
  addPlanCeilingZone(94, 640, 1212, 446, ceilingMaterial);
  addPlanCeilingZone(600, 560, 220, 95, ceilingMaterial);

  const grid = new THREE.GridHelper(Math.max(ROOM.width, ROOM.depth), 18, "#83938d", "#cad3cf");
  grid.scale.z = ROOM.depth / Math.max(ROOM.width, ROOM.depth);
  grid.position.y = FLOOR_GRID_Y;
  grid.renderOrder = 2;
  scene.add(grid);
}

function buildProxyMesh(spec) {
  const customBuilder = CUSTOM_BUILDERS.get(spec.id);
  if (customBuilder) {
    const built = customBuilder({});
    applyAutoSmoothToObject(built);
    normalizeProxyToSpecDimensions(built, spec);
    built.userData.recipeSource = `generated_models/${spec.id}/object_recipe.json`;
    return built;
  }

  const group = new THREE.Group();
  const dims = spec.dimensions;
  const baseMaterial = new THREE.MeshStandardMaterial({
    color: pickColor(spec.category),
    roughness: 0.82,
  });
  const accentMaterial = new THREE.MeshStandardMaterial({
    color: pickAccent(spec.category),
    roughness: 0.72,
  });

  const softMaterial = new THREE.MeshStandardMaterial({
    color: pickSoftColor(spec),
    roughness: 0.96,
  });

  if (spec.template === "templateBed") {
    buildBed(group, spec, baseMaterial, accentMaterial, softMaterial);
  } else if (spec.template === "templateDesk") {
    buildDesk(group, spec, baseMaterial, accentMaterial);
  } else if (spec.template === "templateBookshelf") {
    buildBookshelf(group, spec, baseMaterial, accentMaterial);
  } else if (spec.template === "templateBookCluster") {
    buildBookCluster(group, spec, baseMaterial, accentMaterial);
  } else if (spec.template === "templateLamp" || spec.template === "templateCeilingLamp") {
    buildLamp(group, spec, baseMaterial, accentMaterial);
  } else if (spec.template === "templateCurtain") {
    buildCurtain(group, spec, baseMaterial, accentMaterial);
  } else if (spec.template === "templateRugOval") {
    buildRug(group, spec, baseMaterial);
  } else if (
    spec.template === "templatePillow" ||
    spec.template === "templateSoftSurface" ||
    spec.template === "templateSmallPlush" ||
    spec.template === "templateBeanBag"
  ) {
    buildSoftObject(group, spec, softMaterial, accentMaterial);
  } else if (
    spec.template === "templateCabinetSmall" ||
    spec.template === "templateWardrobe" ||
    spec.template === "templateToyBox"
  ) {
    buildCabinet(group, spec, baseMaterial, accentMaterial);
  } else if (
    spec.template === "templateDoorFlat" ||
    spec.template === "templateWindowFlat" ||
    spec.template === "templatePoster" ||
    spec.template === "templateCanvas"
  ) {
    buildFlatWallObject(group, spec, baseMaterial, accentMaterial);
  } else if (spec.template === "templateMonitor") {
    buildMonitor(group, spec, baseMaterial, accentMaterial);
  } else if (spec.template === "templateKeyboard") {
    buildKeyboard(group, spec, baseMaterial, accentMaterial);
  } else if (spec.template === "templateDeskLamp") {
    buildLamp(group, spec, baseMaterial, accentMaterial);
  } else if (
    spec.template === "templateSmallDecor" ||
    spec.template === "templateBoxProp" ||
    spec.template === "templateLatheProp" ||
    spec.template === "templateFlatPortable" ||
    spec.template === "templateRoundPlayTable" ||
    spec.template === "templateChairOffice" ||
    spec.template === "templatePlantPot" ||
    spec.template === "templateLaundryBasket" ||
    spec.template === "templateWallClock"
  ) {
    buildPropById(group, spec, baseMaterial, accentMaterial, softMaterial);
  } else {
    buildPropById(group, spec, baseMaterial, accentMaterial, softMaterial);
  }

  group.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  applyAutoSmoothToObject(group);
  normalizeProxyToSpecDimensions(group, spec);
  return group;
}

function normalizeProxyToSpecDimensions(group, spec) {
  const box = new THREE.Box3().setFromObject(group);
  const size = box.getSize(new THREE.Vector3());
  if (size.x <= 0 || size.y <= 0 || size.z <= 0) {
    return;
  }

  const dims = spec.dimensions;
  const scale = new THREE.Vector3(
    dims.width / size.x,
    dims.height / size.y,
    dims.depth / size.z,
  );
  const center = box.getCenter(new THREE.Vector3());

  group.scale.multiply(scale);
  group.position.set(
    -center.x * scale.x,
    -(box.min.y * scale.y) - dims.height / 2,
    -center.z * scale.z,
  );
  if (group.userData.sockets) {
    group.userData.normalizedSockets = Object.fromEntries(
      Object.entries(group.userData.sockets).map(([name, socket]) => [
        name,
        new THREE.Vector3(socket.x, socket.y, socket.z)
          .multiply(scale)
          .add(group.position),
      ]),
    );
  }
  group.userData.normalizedDimensions = {
    width: dims.width,
    height: dims.height,
    depth: dims.depth,
  };
}

function addRoundedBox(group, width, height, depth, material, x, y, z) {
  const geometry = applyAutoSmoothToGeometry(new THREE.BoxGeometry(width, height, depth, 2, 2, 2));
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);
}

function addCylinder(group, radiusTop, radiusBottom, height, material, x, y, z, rotation = null) {
  const geometry = applyAutoSmoothToGeometry(
    new THREE.CylinderGeometry(radiusTop, radiusBottom, height, 18),
  );
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  if (rotation) {
    mesh.rotation.set(rotation.x, rotation.y, rotation.z);
  }
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);
}

function addSphere(group, radius, material, x, y, z, scale = null) {
  const geometry = applyAutoSmoothToGeometry(new THREE.SphereGeometry(radius, 18, 16));
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  if (scale) {
    mesh.scale.set(scale.x, scale.y, scale.z);
  }
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);
}

function addCone(group, radius, height, material, x, y, z, rotation = null) {
  const geometry = applyAutoSmoothToGeometry(new THREE.ConeGeometry(radius, height, 18));
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  if (rotation) {
    mesh.rotation.set(rotation.x, rotation.y, rotation.z);
  }
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);
}

function buildBed(group, spec, baseMaterial, accentMaterial, softMaterial) {
  const { width, height, depth } = spec.dimensions;
  addRoundedBox(group, width, height * 0.28, depth, baseMaterial, 0, height * 0.14, 0);
  addRoundedBox(group, width * 0.96, height * 0.24, depth * 0.9, softMaterial, 0, height * 0.35, 0.02);
  addRoundedBox(group, width * 0.95, height * 0.09, depth * 0.78, new THREE.MeshStandardMaterial({ color: "#f7aac9", roughness: 0.95 }), 0, height * 0.44, depth * 0.06);
  addRoundedBox(group, width * 0.98, height * 0.34, depth * 0.08, accentMaterial, 0, height * 0.36, -depth * 0.46);
  addRoundedBox(group, width * 0.25, height * 0.12, depth * 0.18, new THREE.MeshStandardMaterial({ color: "#fff9f1", roughness: 0.98 }), -width * 0.22, height * 0.48, -depth * 0.24);
  addRoundedBox(group, width * 0.25, height * 0.12, depth * 0.18, new THREE.MeshStandardMaterial({ color: "#ffe48a", roughness: 0.98 }), width * 0.22, height * 0.48, -depth * 0.24);
}

function buildDesk(group, spec, baseMaterial, accentMaterial) {
  const { width, height, depth } = spec.dimensions;
  addRoundedBox(group, width, height * 0.09, depth, baseMaterial, 0, height - height * 0.045, 0);
  addLegs(group, spec.dimensions, accentMaterial);
  addRoundedBox(group, width * 0.22, height * 0.18, depth * 0.48, new THREE.MeshStandardMaterial({ color: "#eec7a5", roughness: 0.9 }), width * 0.22, height * 0.62, 0);
}

function buildBookshelf(group, spec, baseMaterial, accentMaterial) {
  const { width, height, depth } = spec.dimensions;
  addRoundedBox(group, width, height, depth, baseMaterial, 0, height / 2, 0);
  addRoundedBox(group, width * 0.9, height * 0.88, depth * 0.72, new THREE.MeshStandardMaterial({ color: "#fff4e5", roughness: 0.98 }), 0, height * 0.5, 0.02);
  for (let index = 1; index <= 3; index += 1) {
    addRoundedBox(group, width * 0.9, 0.03, depth * 0.76, accentMaterial, 0, (height * index) / 4, 0);
  }
  addRoundedBox(group, 0.03, height * 0.92, depth * 0.8, accentMaterial, -width * 0.2, height * 0.48, 0);
  addRoundedBox(group, 0.03, height * 0.92, depth * 0.8, accentMaterial, width * 0.2, height * 0.48, 0);
}

function buildBookCluster(group, spec, baseMaterial, accentMaterial) {
  const widths = [0.08, 0.06, 0.09, 0.07];
  const colors = ["#ff9eb5", "#ffd16f", "#8fc2ff", "#8ed8c4"];
  let offset = -spec.dimensions.width / 2;
  widths.forEach((width, index) => {
    const x = offset + width / 2;
    const material = new THREE.MeshStandardMaterial({
      color: colors[index % colors.length],
      roughness: 0.9,
    });
    addRoundedBox(group, width, spec.dimensions.height, spec.dimensions.depth * 0.72, material, x, spec.dimensions.height / 2, 0);
    addRoundedBox(group, width * 0.12, spec.dimensions.height * 0.98, spec.dimensions.depth * 0.08, accentMaterial, x + width * 0.28, spec.dimensions.height / 2, spec.dimensions.depth * 0.01);
    offset += width + 0.01;
  });
}

function buildLamp(group, spec, baseMaterial, accentMaterial) {
  const { width, height, depth } = spec.dimensions;
  if (spec.id.includes("ceiling")) {
    addCylinder(group, width * 0.08, width * 0.08, height * 0.32, accentMaterial, 0, height * 0.84, 0);
    addSphere(group, Math.min(width, depth) * 0.22, baseMaterial, 0, height * 0.48, 0, { x: 1.3, y: 1.0, z: 1.3 });
    return;
  }

  addCylinder(group, width * 0.18, width * 0.24, height * 0.1, accentMaterial, 0, height * 0.05, 0);
  addCylinder(group, width * 0.05, width * 0.05, height * 0.48, accentMaterial, 0, height * 0.34, 0);
  addCylinder(group, width * 0.24, width * 0.36, height * 0.28, baseMaterial, 0, height * 0.72, 0);
}

function buildCurtain(group, spec, baseMaterial, accentMaterial) {
  const { width, height, depth } = spec.dimensions;
  addCylinder(group, width * 0.04, width * 0.04, width, accentMaterial, 0, height * 0.96, 0, { x: 0, y: 0, z: Math.PI / 2 });
  const folds = 5;
  for (let index = 0; index < folds; index += 1) {
    const x = -width / 2 + (width / (folds - 1)) * index;
    addCylinder(group, width * 0.08, width * 0.08, height * 0.92, baseMaterial, x, height * 0.46, 0, { x: 0, y: 0, z: 0 });
  }
  addRoundedBox(group, width, height * 0.92, depth * 0.18, new THREE.MeshStandardMaterial({ color: "#f5bfd0", roughness: 0.98 }), 0, height * 0.46, 0);
}

function buildRug(group, spec, baseMaterial) {
  const height = Math.max(spec.dimensions.height, 0.03);
  addCylinder(group, spec.dimensions.width / 2, spec.dimensions.width / 2, height, baseMaterial, 0, height / 2, 0);
  group.scale.z = spec.dimensions.depth / spec.dimensions.width;
}

function buildSoftObject(group, spec, softMaterial, accentMaterial) {
  const { width, height, depth } = spec.dimensions;
  if (spec.id.includes("blanket")) {
    addRoundedBox(group, width, Math.max(height, 0.06), depth, new THREE.MeshStandardMaterial({ color: "#f5abc6", roughness: 0.98 }), 0, Math.max(height, 0.06) / 2, 0);
    return;
  }
  if (spec.id.includes("pillow")) {
    addSphere(group, Math.min(width, depth) * 0.34, softMaterial, 0, height / 2, 0, { x: width / Math.min(width, depth), y: height / Math.min(width, depth), z: depth / Math.min(width, depth) });
    return;
  }
  if (spec.id.includes("bean_bag")) {
    addSphere(group, Math.min(width, depth) * 0.44, softMaterial, 0, height * 0.45, 0, { x: width / Math.min(width, depth), y: height / Math.min(width, depth) * 1.25, z: depth / Math.min(width, depth) });
    return;
  }
  addSphere(group, Math.min(width, depth) * 0.35, softMaterial, 0, height * 0.5, 0, { x: width / Math.min(width, depth), y: height / Math.min(width, depth), z: depth / Math.min(width, depth) });
  addSphere(group, Math.min(width, depth) * 0.12, accentMaterial, width * 0.1, height * 0.74, 0);
}

function buildCabinet(group, spec, baseMaterial, accentMaterial) {
  const { width, height, depth } = spec.dimensions;
  addRoundedBox(group, width, height, depth, baseMaterial, 0, height / 2, 0);
  if (spec.id.includes("wardrobe")) {
    addRoundedBox(group, width * 0.46, height * 0.9, depth * 0.92, new THREE.MeshStandardMaterial({ color: "#f3d7b5", roughness: 0.9 }), -width * 0.24, height * 0.5, 0.01);
    addRoundedBox(group, width * 0.46, height * 0.9, depth * 0.92, new THREE.MeshStandardMaterial({ color: "#f3d7b5", roughness: 0.9 }), width * 0.24, height * 0.5, 0.01);
    addRoundedBox(group, width * 0.03, height * 0.56, depth * 0.03, accentMaterial, -width * 0.02, height * 0.5, depth * 0.46);
    addRoundedBox(group, width * 0.03, height * 0.56, depth * 0.03, accentMaterial, width * 0.02, height * 0.5, depth * 0.46);
    return;
  }
  addRoundedBox(group, width * 0.92, height * 0.62, depth * 0.9, new THREE.MeshStandardMaterial({ color: "#f6d0b7", roughness: 0.92 }), 0, height * 0.56, 0.01);
  addRoundedBox(group, width * 0.18, height * 0.05, depth * 0.1, accentMaterial, 0, height * 0.56, depth * 0.48);
  if (spec.id.includes("toy_box")) {
    addRoundedBox(group, width * 0.96, height * 0.18, depth * 0.96, new THREE.MeshStandardMaterial({ color: "#ffb2c8", roughness: 0.95 }), 0, height * 0.94, 0);
  }
}

function buildFlatWallObject(group, spec, baseMaterial, accentMaterial) {
  const { width, height, depth } = spec.dimensions;
  if (spec.id.includes("window")) {
    addRoundedBox(group, width, height, Math.max(depth, 0.08), accentMaterial, 0, height / 2, 0);
    addRoundedBox(group, width * 0.82, height * 0.78, 0.03, new THREE.MeshStandardMaterial({ color: "#cae7ff", roughness: 0.12, metalness: 0.02 }), 0, height * 0.52, 0.03);
    addRoundedBox(group, width * 0.04, height * 0.78, 0.04, accentMaterial, 0, height * 0.52, 0.04);
    addRoundedBox(group, width * 0.82, height * 0.04, 0.04, accentMaterial, 0, height * 0.52, 0.04);
    return;
  }
  if (spec.id.includes("door")) {
    addRoundedBox(group, width, height, Math.max(depth, 0.06), baseMaterial, 0, height / 2, 0);
    addSphere(group, Math.min(width, depth) * 0.12, accentMaterial, width * 0.34, height * 0.5, depth * 0.52);
    return;
  }
  addRoundedBox(group, width, height, Math.max(depth, 0.04), accentMaterial, 0, height / 2, 0);
  addRoundedBox(group, width * 0.9, height * 0.9, 0.02, baseMaterial, 0, height / 2, 0.01);
}

function buildMonitor(group, spec, baseMaterial, accentMaterial) {
  const { width, height, depth } = spec.dimensions;
  addRoundedBox(group, width * 0.82, height * 0.68, 0.04, baseMaterial, 0, height * 0.62, 0);
  addRoundedBox(group, width * 0.72, height * 0.54, 0.02, new THREE.MeshStandardMaterial({ color: "#efeaf9", roughness: 0.22 }), 0, height * 0.62, 0.03);
  addCylinder(group, width * 0.06, width * 0.06, height * 0.28, accentMaterial, 0, height * 0.2, 0);
  addRoundedBox(group, width * 0.24, height * 0.08, depth * 0.34, accentMaterial, 0, height * 0.05, 0);
}

function buildKeyboard(group, spec, baseMaterial, accentMaterial) {
  const h = Math.max(spec.dimensions.height, 0.04);
  addRoundedBox(group, spec.dimensions.width, h, spec.dimensions.depth, baseMaterial, 0, h / 2, 0);
  addRoundedBox(group, spec.dimensions.width * 0.84, h * 0.3, spec.dimensions.depth * 0.72, accentMaterial, 0, h * 0.62, 0);
}

function buildPropById(group, spec, baseMaterial, accentMaterial, softMaterial) {
  const { width, height, depth } = spec.dimensions;

  if (spec.id.includes("office_chair")) {
    addRoundedBox(group, width * 0.56, height * 0.1, depth * 0.62, softMaterial, 0, height * 0.54, 0);
    addRoundedBox(group, width * 0.52, height * 0.34, depth * 0.1, softMaterial, 0, height * 0.78, -depth * 0.24);
    addCylinder(group, width * 0.04, width * 0.04, height * 0.42, accentMaterial, 0, height * 0.28, 0);
    addCylinder(group, width * 0.24, width * 0.24, 0.04, accentMaterial, 0, 0.04, 0, { x: Math.PI / 2, y: 0, z: 0 });
    return;
  }

  if (spec.id.includes("round_play_table")) {
    addCylinder(group, width * 0.5, width * 0.5, height * 0.08, baseMaterial, 0, height - height * 0.04, 0);
    addCylinder(group, width * 0.08, width * 0.1, height * 0.84, accentMaterial, 0, height * 0.42, 0);
    return;
  }

  if (spec.id.includes("monitor")) {
    buildMonitor(group, spec, baseMaterial, accentMaterial);
    return;
  }

  if (spec.id.includes("tablet") || spec.id.includes("notebook")) {
    addRoundedBox(group, width, Math.max(height, 0.03), depth, baseMaterial, 0, Math.max(height, 0.03) / 2, 0);
    addRoundedBox(group, width * 0.78, Math.max(height, 0.03) * 0.22, depth * 0.74, accentMaterial, 0, Math.max(height, 0.03) * 0.7, 0);
    return;
  }

  if (spec.id.includes("vase") || spec.id.includes("bottle")) {
    addCylinder(group, width * 0.18, width * 0.28, height * 0.5, baseMaterial, 0, height * 0.25, 0);
    addCylinder(group, width * 0.08, width * 0.11, height * 0.24, accentMaterial, 0, height * 0.62, 0);
    addSphere(group, width * 0.18, baseMaterial, 0, height * 0.5, 0, { x: 1.1, y: 0.8, z: 1.1 });
    return;
  }

  if (spec.id.includes("box")) {
    addRoundedBox(group, width, height, depth, baseMaterial, 0, height / 2, 0);
    addRoundedBox(group, width * 0.9, height * 0.14, depth * 0.9, accentMaterial, 0, height * 0.86, 0);
    return;
  }

  if (spec.id.includes("decor_house") || spec.id.includes("pyramid")) {
    addRoundedBox(group, width * 0.72, height * 0.56, depth * 0.72, baseMaterial, 0, height * 0.28, 0);
    addCone(group, width * 0.34, height * 0.46, accentMaterial, 0, height * 0.79, 0);
    return;
  }

  if (spec.id.includes("teapot") || spec.id.includes("cup")) {
    addCylinder(group, width * 0.24, width * 0.28, height * 0.48, baseMaterial, 0, height * 0.24, 0);
    addSphere(group, width * 0.08, accentMaterial, width * 0.28, height * 0.26, 0);
    addSphere(group, width * 0.08, accentMaterial, -width * 0.28, height * 0.32, 0);
    return;
  }

  if (spec.id.includes("doll_house")) {
    addRoundedBox(group, width * 0.9, height * 0.62, depth * 0.82, baseMaterial, 0, height * 0.31, 0);
    addCone(group, width * 0.34, height * 0.42, accentMaterial, 0, height * 0.83, 0, { x: 0, y: Math.PI / 4, z: 0 });
    return;
  }

  if (spec.id.includes("mobile")) {
    addCylinder(group, width * 0.03, width * 0.03, height * 0.6, accentMaterial, 0, height * 0.7, 0);
    addCylinder(group, width * 0.01, width * 0.01, width * 0.8, accentMaterial, 0, height * 0.44, 0, { x: 0, y: 0, z: Math.PI / 2 });
    addSphere(group, width * 0.08, baseMaterial, -width * 0.26, height * 0.18, 0);
    addSphere(group, width * 0.08, new THREE.MeshStandardMaterial({ color: "#ffd26f", roughness: 0.85 }), width * 0.26, height * 0.22, 0);
    return;
  }

  if (spec.id.includes("wall_clock")) {
    addCylinder(group, width * 0.5, width * 0.5, Math.max(depth, 0.06), baseMaterial, 0, height / 2, 0);
    addCylinder(group, width * 0.02, width * 0.02, height * 0.24, accentMaterial, 0, height * 0.56, depth * 0.16, { x: 0, y: 0, z: Math.PI / 4 });
    addCylinder(group, width * 0.02, width * 0.02, height * 0.18, accentMaterial, 0, height * 0.46, depth * 0.16, { x: 0, y: 0, z: Math.PI / 1.4 });
    return;
  }

  if (spec.id.includes("poster") || spec.id.includes("canvas") || spec.id.includes("easel")) {
    if (spec.id.includes("easel")) {
      addCylinder(group, width * 0.03, width * 0.03, height, accentMaterial, -width * 0.22, height * 0.5, 0, { x: 0.12, y: 0, z: 0.16 });
      addCylinder(group, width * 0.03, width * 0.03, height, accentMaterial, width * 0.22, height * 0.5, 0, { x: 0.12, y: 0, z: -0.16 });
      addCylinder(group, width * 0.03, width * 0.03, height * 0.86, accentMaterial, 0, height * 0.44, -depth * 0.18, { x: -0.08, y: 0, z: 0 });
      addRoundedBox(group, width * 0.55, height * 0.06, depth * 0.1, baseMaterial, 0, height * 0.42, 0);
      return;
    }
    addRoundedBox(group, width, height, Math.max(depth, 0.04), accentMaterial, 0, height / 2, 0);
    addRoundedBox(group, width * 0.88, height * 0.88, 0.02, new THREE.MeshStandardMaterial({ color: "#ffd9ee", roughness: 0.88 }), 0, height / 2, 0.01);
    return;
  }

  if (spec.id.includes("slippers")) {
    addSphere(group, Math.min(width, depth) * 0.18, baseMaterial, -width * 0.18, height * 0.5, 0, { x: 1.6, y: 0.6, z: 1 });
    addSphere(group, Math.min(width, depth) * 0.18, baseMaterial, width * 0.18, height * 0.5, 0, { x: 1.6, y: 0.6, z: 1 });
    return;
  }

  if (spec.id.includes("plant")) {
    addCylinder(group, width * 0.24, width * 0.3, height * 0.34, accentMaterial, 0, height * 0.17, 0);
    addCone(group, width * 0.18, height * 0.34, baseMaterial, -width * 0.08, height * 0.52, 0.02, { x: -0.2, y: 0, z: 0.25 });
    addCone(group, width * 0.18, height * 0.34, baseMaterial, width * 0.08, height * 0.56, -0.02, { x: 0.2, y: 0, z: -0.25 });
    addCone(group, width * 0.16, height * 0.3, baseMaterial, 0, height * 0.62, 0, { x: 0.08, y: 0, z: 0 });
    return;
  }

  if (spec.id.includes("laundry_basket")) {
    addCylinder(group, width * 0.34, width * 0.28, height * 0.82, baseMaterial, 0, height * 0.41, 0);
    addCylinder(group, width * 0.36, width * 0.36, height * 0.04, accentMaterial, 0, height * 0.85, 0);
    return;
  }

  if (spec.id.includes("cube")) {
    addRoundedBox(group, width, height, depth, baseMaterial, 0, height / 2, 0);
    return;
  }

  if (spec.id.includes("toy") || spec.category === "toy") {
    addSphere(group, Math.min(width, depth) * 0.22, softMaterial, 0, height * 0.42, 0, { x: width / Math.min(width, depth), y: height / Math.min(width, depth), z: depth / Math.min(width, depth) });
    addSphere(group, Math.min(width, depth) * 0.1, accentMaterial, width * 0.16, height * 0.74, 0);
    return;
  }

  addRoundedBox(group, width, height, depth, baseMaterial, 0, height / 2, 0);
}

function addLegs(group, dims, material) {
  const legWidth = Math.min(0.07, dims.width * 0.08);
  const legDepth = Math.min(0.07, dims.depth * 0.08);
  const legHeight = Math.max(0.12, dims.height - 0.09);
  const offsets = [
    [-dims.width / 2 + legWidth, legHeight / 2, -dims.depth / 2 + legDepth],
    [dims.width / 2 - legWidth, legHeight / 2, -dims.depth / 2 + legDepth],
    [-dims.width / 2 + legWidth, legHeight / 2, dims.depth / 2 - legDepth],
    [dims.width / 2 - legWidth, legHeight / 2, dims.depth / 2 - legDepth],
  ];

  for (const [x, y, z] of offsets) {
    addRoundedBox(group, legWidth, legHeight, legDepth, material, x, y, z);
  }
}

function clampToRoom(value, size, roomSize) {
  const half = roomSize / 2 - size / 2 - 0.05;
  return THREE.MathUtils.clamp(value, -half, half);
}

function pickColor(category) {
  const palette = {
    furniture: "#d88f65",
    textile: "#f1c7a3",
    toy: "#f0a6c3",
    decor: "#98c7bc",
    lighting: "#f3df9b",
    electronics: "#7b8798",
    prop: "#c7b0e7",
    wallObject: "#b5cad6",
    architectural: "#d9c8b6",
  };
  return palette[category] ?? "#b8b0a6";
}

function pickSoftColor(spec) {
  if (spec.id.includes("blanket")) {
    return "#f6abc8";
  }
  if (spec.id.includes("white_pillow")) {
    return "#fff7ef";
  }
  if (spec.id.includes("yellow_pillow")) {
    return "#ffe17a";
  }
  if (spec.category === "toy") {
    return "#f3b1cd";
  }
  return "#f1d3bf";
}

function pickAccent(category) {
  const palette = {
    furniture: "#9f5a35",
    textile: "#d8935e",
    toy: "#c96d9e",
    decor: "#4c8f85",
    lighting: "#cfa84c",
    electronics: "#444e5f",
    prop: "#8f79b1",
    wallObject: "#7d99aa",
    architectural: "#b89d87",
  };
  return palette[category] ?? "#6a625a";
}

function resizeRenderer() {
  const width = dom.canvas.clientWidth;
  const height = dom.canvas.clientHeight;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.05);
  updateFirstPersonController(delta);
  if (!fpsState.enabled) {
    orbit.update();
  }
  updateSelectionHelper();
  renderer.render(scene, camera);
}

function resetCamera() {
  setFirstPersonMode(false);
  camera.position.set(8.6, 7.2, 9.8);
  orbit.target.set(0, 0.8, 0);
  orbit.update();
}

function getSelectedPlaced() {
  return sceneState.placed.find((entry) => entry.id === sceneState.selectedId) ?? null;
}

function findPlacedRoot(object) {
  let current = object;
  while (current && !current.userData?.placedId) {
    current = current.parent;
  }
  return current;
}

function setSelectionOutline() {
  for (const entry of sceneState.placed) {
    entry.object3d.traverse((child) => {
      if (!child.isMesh) {
        return;
      }
      child.material.emissive = new THREE.Color(
        entry.id === sceneState.selectedId ? "#6b1010" : "#000000",
      );
      child.material.emissiveIntensity = entry.id === sceneState.selectedId ? 0.08 : 0;
    });
  }

  ensureSelectionHelper();
  updateSelectionHelper();
}

function ensureSelectionHelper() {
  if (sceneState.selectionHelper) {
    return;
  }

  const helper = new THREE.BoxHelper(undefined, "#d62828");
  helper.visible = false;
  helper.material.depthTest = false;
  helper.material.transparent = true;
  helper.material.opacity = 0.95;
  scene.add(helper);
  sceneState.selectionHelper = helper;
}

function updateSelectionHelper() {
  ensureSelectionHelper();
  const helper = sceneState.selectionHelper;
  const placed = getSelectedPlaced();

  if (!placed) {
    helper.visible = false;
    return;
  }

  helper.setFromObject(placed.object3d);
  helper.visible = true;
}
