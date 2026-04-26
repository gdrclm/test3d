# OBJECT_CATALOG_51

Каталог всех 51 предмета для пайплайна моделирования через Codex.

## Как использовать
1. Сначала дать Codex системный пакет `codex_modeling_docs_pack.zip`.
2. Потом дать соответствующий `*_spec.json` из пакета `object_specs_51_pack.zip`.
3. Потом дать чертежные виды: `top`, `front`, `side`, опционально `back`.
4. Потом запустить готовый prompt-файл из `batch_prompts/`.

## Batch-порядок
Рекомендуется моделировать не хаотично, а по семействам: крупная мебель → текстиль → настольные объекты → декор → мелкие пропы.

## Family: `sleepingFurniture`

### 01. Кровать / Bed
- `id`: `obj_01_bed`
- `category`: `furniture`
- `template`: `templateBed`
- `dimensions`: 2.0 × 0.55 × 0.95 meters
- `polyBudget`: target 1100 tris, max 1800 tris
- `requiredParts`: frame, mattressZone, blanketZone, pillowSlotLeft, pillowSlotRight
- `requiredHooks`: blanket_anchor, pillow_slot_left, pillow_slot_right, plush_slot
- `materialSlots`: woodMain, fabricMain, fabricAccent
- `deformationProfile`: `mixed`
- `animationPotential`: none
- `spec file`: `specs/obj_01_bed_spec.json`
- `notes`: Основание жёсткое, текстильные элементы отдельными частями.

## Family: `bedTextile`

### 02. Розовое одеяло / Pink Blanket
- `id`: `obj_02_pink_blanket`
- `category`: `textile`
- `template`: `templateSoftSurface`
- `dimensions`: 1.8 × 0.12 × 0.78 meters
- `polyBudget`: target 500 tris, max 900 tris
- `requiredParts`: blanketBody, topFold, sideDrape
- `requiredHooks`: bed_attach_zone
- `materialSlots`: fabricMain, fabricAccent
- `deformationProfile`: `soft`
- `animationPotential`: soft_secondary_motion
- `spec file`: `specs/obj_02_pink_blanket_spec.json`
- `notes`: Должно поддерживать будущую деформацию и смену палитры.

## Family: `softProp`

### 03. Белая подушка / White Pillow
- `id`: `obj_03_white_pillow`
- `category`: `textile`
- `template`: `templatePillow`
- `dimensions`: 0.62 × 0.12 × 0.38 meters
- `polyBudget`: target 280 tris, max 500 tris
- `requiredParts`: pillowMass, seamHint
- `requiredHooks`: bed_pillow_slot
- `materialSlots`: fabricMain
- `deformationProfile`: `soft`
- `animationPotential`: compression_response
- `spec file`: `specs/obj_03_white_pillow_spec.json`
- `notes`: Мягкая форма с лёгкой впадиной сверху.

### 04. Жёлтая подушка / Yellow Pillow
- `id`: `obj_04_yellow_pillow`
- `category`: `textile`
- `template`: `templatePillow`
- `dimensions`: 0.62 × 0.12 × 0.38 meters
- `polyBudget`: target 280 tris, max 500 tris
- `requiredParts`: pillowMass, seamHint
- `requiredHooks`: bed_pillow_slot
- `materialSlots`: fabricMain
- `deformationProfile`: `soft`
- `animationPotential`: compression_response
- `spec file`: `specs/obj_04_yellow_pillow_spec.json`
- `notes`: Та же геометрическая семья, другой материал/цвет.

## Family: `cabinetFurniture`

### 06. Прикроватная тумбочка / Nightstand
- `id`: `obj_06_nightstand`
- `category`: `furniture`
- `template`: `templateCabinetSmall`
- `dimensions`: 0.48 × 0.52 × 0.4 meters
- `polyBudget`: target 600 tris, max 950 tris
- `requiredParts`: body, top, drawerOrFrontPanel, handle
- `requiredHooks`: top_surface_center, front_face_center
- `materialSlots`: woodMain, woodAccent, metalAccent
- `deformationProfile`: `rigid`
- `animationPotential`: drawer_pull_axis
- `spec file`: `specs/obj_06_nightstand_spec.json`
- `notes`: Даже если ящик не анимируется сейчас, ось выдвижения нужна.

### 14. Шкаф / Wardrobe
- `id`: `obj_14_wardrobe`
- `category`: `furniture`
- `template`: `templateWardrobe`
- `dimensions`: 1.6 × 2.0 × 0.62 meters
- `polyBudget`: target 1400 tris, max 2400 tris
- `requiredParts`: body, top, doorLeft, doorRight, handleLeft, handleRight
- `requiredHooks`: door_left_hinge, door_right_hinge, top_surface_center
- `materialSlots`: woodMain, woodAccent, metalAccent
- `deformationProfile`: `rigid`
- `animationPotential`: door_left_open, door_right_open
- `spec file`: `specs/obj_14_wardrobe_spec.json`
- `notes`: Крупная мебель. Пропорции строго по фронтальному и боковому виду.

## Family: `tableLighting`

### 07. Прикроватная лампа / Bedside Lamp
- `id`: `obj_07_bedside_lamp`
- `category`: `lighting`
- `template`: `templateLamp`
- `dimensions`: 0.22 × 0.42 × 0.22 meters
- `polyBudget`: target 350 tris, max 700 tris
- `requiredParts`: base, stand, shade, bulbSlot
- `requiredHooks`: light_emitter, table_attach_center
- `materialSlots`: plasticMain, metalAccent, glass
- `deformationProfile`: `rigid`
- `animationPotential`: lamp_head_tilt
- `spec file`: `specs/obj_07_bedside_lamp_spec.json`
- `notes`: Абажур и база отдельными частями.

### 26. Настольный светильник / Desk Lamp
- `id`: `obj_26_desk_lamp`
- `category`: `lighting`
- `template`: `templateLamp`
- `dimensions`: 0.18 × 0.36 × 0.18 meters
- `polyBudget`: target 320 tris, max 620 tris
- `requiredParts`: base, stand, headOrShade, lightEmitter
- `requiredHooks`: desktop_attach_center, light_emitter, lamp_head_tilt
- `materialSlots`: plasticMain, metalAccent, glass
- `deformationProfile`: `rigid`
- `animationPotential`: lamp_head_tilt
- `spec file`: `specs/obj_26_desk_lamp_spec.json`
- `notes`: Отдельный рабочий светильник для зоны стола.

## Family: `architecturalFlat`

### 08. Окно / Window
- `id`: `obj_08_window`
- `category`: `wallObject`
- `template`: `templateWindowFlat`
- `dimensions`: 2.2 × 0.14 × 0.08 meters
- `polyBudget`: target 180 tris, max 360 tris
- `requiredParts`: outerFrame, glassPaneLeft, glassPaneRight, divider
- `requiredHooks`: wall_mount_center, curtain_rail_left, curtain_rail_right
- `materialSlots`: paintedFrame, glass
- `deformationProfile`: `rigid`
- `animationPotential`: none
- `spec file`: `specs/obj_08_window_spec.json`
- `notes`: Плоский wall-mounted объект, без глубокой архитектурной детализации.

## Family: `wallTextile`

### 09. Левая штора / Left Curtain
- `id`: `obj_09_left_curtain`
- `category`: `textile`
- `template`: `templateCurtain`
- `dimensions`: 0.28 × 1.1 × 0.09 meters
- `polyBudget`: target 280 tris, max 560 tris
- `requiredParts`: clothBody, topGather, waveProfile
- `requiredHooks`: curtain_mount_top_left
- `materialSlots`: fabricMain
- `deformationProfile`: `semiSoft`
- `animationPotential`: curtain_wave_root
- `spec file`: `specs/obj_09_left_curtain_spec.json`
- `notes`: Вертикальная тканевая масса с мягкими складками.

### 10. Правая штора / Right Curtain
- `id`: `obj_10_right_curtain`
- `category`: `textile`
- `template`: `templateCurtain`
- `dimensions`: 0.28 × 1.1 × 0.09 meters
- `polyBudget`: target 280 tris, max 560 tris
- `requiredParts`: clothBody, topGather, waveProfile
- `requiredHooks`: curtain_mount_top_right
- `materialSlots`: fabricMain
- `deformationProfile`: `semiSoft`
- `animationPotential`: curtain_wave_root
- `spec file`: `specs/obj_10_right_curtain_spec.json`
- `notes`: Зеркальная пара левой шторы.

## Family: `ceilingLighting`

### 12. Потолочная лампа / Ceiling Lamp
- `id`: `obj_12_ceiling_lamp`
- `category`: `lighting`
- `template`: `templateCeilingLamp`
- `dimensions`: 0.42 × 0.55 × 0.42 meters
- `polyBudget`: target 380 tris, max 700 tris
- `requiredParts`: ceilingCap, hanger, lampBody, lightEmitter
- `requiredHooks`: ceiling_mount, light_emitter
- `materialSlots`: metalAccent, glass, plasticMain
- `deformationProfile`: `rigid`
- `animationPotential`: gentle_sway_optional
- `spec file`: `specs/obj_12_ceiling_lamp_spec.json`
- `notes`: Нужен отдельный слит light_emitter.

## Family: `floorTextile`

### 13. Ковёр / Rug
- `id`: `obj_13_rug`
- `category`: `textile`
- `template`: `templateRugOval`
- `dimensions`: 2.6 × 0.03 × 1.7 meters
- `polyBudget`: target 180 tris, max 320 tris
- `requiredParts`: baseShape, borderZone, patternZone
- `requiredHooks`: floor_attach
- `materialSlots`: fabricMain, fabricAccent
- `deformationProfile`: `semiSoft`
- `animationPotential`: none
- `spec file`: `specs/obj_13_rug_spec.json`
- `notes`: Очень тонкий объект, важнее контур и зоны узора, чем объём.

## Family: `storageOpen`

### 15. Книжный шкаф / Bookshelf
- `id`: `obj_15_bookshelf`
- `category`: `furniture`
- `template`: `templateBookshelf`
- `dimensions`: 1.4 × 1.2 × 0.35 meters
- `polyBudget`: target 1000 tris, max 1800 tris
- `requiredParts`: frame, shelfTop, shelfMid, shelfBottom, backPanelOptional
- `requiredHooks`: shelf_socket_01, shelf_socket_02, shelf_socket_03, top_surface_center
- `materialSlots`: woodMain, woodAccent
- `deformationProfile`: `rigid`
- `animationPotential`: none
- `spec file`: `specs/obj_15_bookshelf_spec.json`
- `notes`: Нужны shelf sockets для книг и декора.

## Family: `shelfPropGroup`

### 16. Книги на полках / Books Set
- `id`: `obj_16_books_set`
- `category`: `decor`
- `template`: `templateBookCluster`
- `dimensions`: 0.36 × 0.25 × 0.18 meters
- `polyBudget`: target 250 tris, max 550 tris
- `requiredParts`: bookA, bookB, bookC, bookD
- `requiredHooks`: shelf_attach_cluster
- `materialSlots`: paper, fabricAccent
- `deformationProfile`: `rigid`
- `animationPotential`: none
- `spec file`: `specs/obj_16_books_set_spec.json`
- `notes`: Группа книг как единый prop cluster.

## Family: `shelfProp`

### 17. Плюшевая игрушка на полке / Shelf Plush Toy
- `id`: `obj_17_shelf_plush`
- `category`: `toy`
- `template`: `templateSmallPlush`
- `dimensions`: 0.22 × 0.26 × 0.18 meters
- `polyBudget`: target 240 tris, max 520 tris
- `requiredParts`: body, head, smallAccents
- `requiredHooks`: shelf_attach_center
- `materialSlots`: plush, fabricAccent
- `deformationProfile`: `soft`
- `animationPotential`: soft_secondary_motion
- `spec file`: `specs/obj_17_shelf_plush_spec.json`
- `notes`: Небольшой плюшевый акцент для полки.

## Family: `rotationalProp`

### 18. Ваза/бутылка на полке / Shelf Vase or Bottle
- `id`: `obj_18_shelf_vase_bottle`
- `category`: `decor`
- `template`: `templateLatheProp`
- `dimensions`: 0.12 × 0.28 × 0.12 meters
- `polyBudget`: target 160 tris, max 320 tris
- `requiredParts`: mainBody, neckOrLip
- `requiredHooks`: shelf_attach_center
- `materialSlots`: glass, plasticMain
- `deformationProfile`: `rigid`
- `animationPotential`: none
- `spec file`: `specs/obj_18_shelf_vase_bottle_spec.json`
- `notes`: Вращательная форма, без лишних микрофасок.

## Family: `containerProp`

### 19. Коробка на полке / Shelf Box
- `id`: `obj_19_shelf_box`
- `category`: `decor`
- `template`: `templateBoxProp`
- `dimensions`: 0.18 × 0.14 × 0.18 meters
- `polyBudget`: target 90 tris, max 180 tris
- `requiredParts`: body, lidOptional
- `requiredHooks`: shelf_attach_center
- `materialSlots`: paper, fabricAccent
- `deformationProfile`: `rigid`
- `animationPotential`: lid_open_optional
- `spec file`: `specs/obj_19_shelf_box_spec.json`
- `notes`: Простой контейнерный проп.

## Family: `smallAccent`

### 20. Декоративный домик/пирамидка на полке / Shelf Decorative House or Pyramid
- `id`: `obj_20_shelf_decor_house_pyramid`
- `category`: `decor`
- `template`: `templateSmallDecor`
- `dimensions`: 0.16 × 0.18 × 0.14 meters
- `polyBudget`: target 100 tris, max 180 tris
- `requiredParts`: base, topAccent
- `requiredHooks`: shelf_attach_center
- `materialSlots`: plasticMain, woodAccent
- `deformationProfile`: `rigid`
- `animationPotential`: none
- `spec file`: `specs/obj_20_shelf_decor_house_pyramid_spec.json`
- `notes`: Силуэт домика или пирамидки, выбранный по чертежу.

## Family: `workSurface`

### 21. Письменный стол / Desk
- `id`: `obj_21_desk`
- `category`: `furniture`
- `template`: `templateDesk`
- `dimensions`: 1.6 × 0.78 × 0.72 meters
- `polyBudget`: target 900 tris, max 1500 tris
- `requiredParts`: tableTop, supportSystem, legSetOrSidePanels
- `requiredHooks`: desktop_monitor_slot, desktop_keyboard_slot, desktop_book_slot, desktop_lamp_slot
- `materialSlots`: woodMain, woodAccent
- `deformationProfile`: `rigid`
- `animationPotential`: none
- `spec file`: `specs/obj_21_desk_spec.json`
- `notes`: Поверхность обязана поддерживать размещение аксессуаров через sockets.

## Family: `desktopAccessory`

### 22. Монитор/экран на столе / Monitor or Screen
- `id`: `obj_22_monitor`
- `category`: `electronics`
- `template`: `templateMonitor`
- `dimensions`: 0.48 × 0.34 × 0.12 meters
- `polyBudget`: target 220 tris, max 480 tris
- `requiredParts`: screenPanel, frame, stand
- `requiredHooks`: desktop_attach_center, screen_tilt_pivot
- `materialSlots`: plasticMain, glass
- `deformationProfile`: `rigid`
- `animationPotential`: screen_tilt_pivot
- `spec file`: `specs/obj_22_monitor_spec.json`
- `notes`: Экранная плоскость отдельно от корпуса.

### 23. Клавиатура / Keyboard
- `id`: `obj_23_keyboard`
- `category`: `electronics`
- `template`: `templateKeyboard`
- `dimensions`: 0.42 × 0.03 × 0.16 meters
- `polyBudget`: target 120 tris, max 220 tris
- `requiredParts`: base, keySurfaceZone
- `requiredHooks`: desktop_attach_center
- `materialSlots`: plasticMain
- `deformationProfile`: `rigid`
- `animationPotential`: none
- `spec file`: `specs/obj_23_keyboard_spec.json`
- `notes`: Клавиши можно оставить как surface zone без поштучной геометрии.

## Family: `seatingFurniture`

### 27. Стул на колёсиках / Chair on Wheels
- `id`: `obj_27_office_chair`
- `category`: `furniture`
- `template`: `templateOfficeChair`
- `dimensions`: 0.62 × 0.86 × 0.6 meters
- `polyBudget`: target 1000 tris, max 1700 tris
- `requiredParts`: seat, backrest, centralSupport, baseArms, wheelsSimplified
- `requiredHooks`: seat_center, chair_spin_axis
- `materialSlots`: fabricMain, plasticMain, metalAccent
- `deformationProfile`: `mixed`
- `animationPotential`: chair_spin_axis, backrest_tilt_optional
- `spec file`: `specs/obj_27_office_chair_spec.json`
- `notes`: Колёсики могут быть упрощёнными, но база должна читаться.

## Family: `containerFurniture`

### 28. Ящик для игрушек / Toy Box
- `id`: `obj_28_toy_box`
- `category`: `furniture`
- `template`: `templateToyBox`
- `dimensions`: 0.92 × 0.56 × 0.48 meters
- `polyBudget`: target 700 tris, max 1100 tris
- `requiredParts`: body, lid, frontAccent
- `requiredHooks`: lid_hinge_back, top_surface_center
- `materialSlots`: plasticMain, woodAccent, fabricAccent
- `deformationProfile`: `rigid`
- `animationPotential`: lid_open
- `spec file`: `specs/obj_28_toy_box_spec.json`
- `notes`: Крупный детский контейнер с мягкими радиусами.

## Family: `toyStructure`

### 29. Кукольный домик / Doll House
- `id`: `obj_29_doll_house`
- `category`: `toy`
- `template`: `templateToyHouse`
- `dimensions`: 0.82 × 0.78 × 0.34 meters
- `polyBudget`: target 900 tris, max 1500 tris
- `requiredParts`: mainBody, roof, doorZone, windowZoneLeft, windowZoneRight
- `requiredHooks`: floor_attach, roof_top_center
- `materialSlots`: plasticMain, woodAccent, paintedFrame
- `deformationProfile`: `rigid`
- `animationPotential`: front_door_optional
- `spec file`: `specs/obj_29_doll_house_spec.json`
- `notes`: Игрушечная архитектура, не реалистичный дом.

## Family: `playSurface`

### 30. Круглый игровой столик / Round Play Table
- `id`: `obj_30_round_play_table`
- `category`: `furniture`
- `template`: `templateRoundTable`
- `dimensions`: 0.84 × 0.52 × 0.84 meters
- `polyBudget`: target 500 tris, max 900 tris
- `requiredParts`: tableTop, support, base
- `requiredHooks`: top_surface_center, table_accessory_slot_a, table_accessory_slot_b, table_accessory_slot_c
- `materialSlots`: woodMain, woodAccent
- `deformationProfile`: `rigid`
- `animationPotential`: none
- `spec file`: `specs/obj_30_round_play_table_spec.json`
- `notes`: Круглая столешница — важнейшая читаемая масса.

## Family: `tabletopToy`

### 31. Игрушечный чайник/чашка / Toy Teapot or Cup
- `id`: `obj_31_toy_teapot_or_cup`
- `category`: `toy`
- `template`: `templateTeaProp`
- `dimensions`: 0.1 × 0.09 × 0.1 meters
- `polyBudget`: target 100 tris, max 220 tris
- `requiredParts`: body, spoutOrLip, handle, lidOptional
- `requiredHooks`: table_attach_center
- `materialSlots`: plasticMain
- `deformationProfile`: `rigid`
- `animationPotential`: none
- `spec file`: `specs/obj_31_toy_teapot_or_cup_spec.json`
- `notes`: Небольшой stylized tea prop.

## Family: `smallTableProp`

### 32. Игрушечный кубик/предмет на столике / Toy Cube or Item on Table
- `id`: `obj_32_table_toy_cube_or_item`
- `category`: `toy`
- `template`: `templateSmallProp`
- `dimensions`: 0.09 × 0.09 × 0.09 meters
- `polyBudget`: target 60 tris, max 140 tris
- `requiredParts`: mainMass, accentZone
- `requiredHooks`: table_attach_center
- `materialSlots`: plasticMain, fabricAccent
- `deformationProfile`: `rigid`
- `animationPotential`: none
- `spec file`: `specs/obj_32_table_toy_cube_or_item_spec.json`
- `notes`: Универсальный небольшой акцент на столике.

### 33. Маленькая игрушка на столике / Small Toy on Table
- `id`: `obj_33_small_table_toy`
- `category`: `toy`
- `template`: `templateSmallProp`
- `dimensions`: 0.08 × 0.08 × 0.08 meters
- `polyBudget`: target 60 tris, max 140 tris
- `requiredParts`: mainMass, accentZone
- `requiredHooks`: table_attach_center
- `materialSlots`: plasticMain, fabricAccent
- `deformationProfile`: `rigid`
- `animationPotential`: none
- `spec file`: `specs/obj_33_small_table_toy_spec.json`
- `notes`: Может быть шарик, фигурка или маленький наборный элемент.

## Family: `softSeating`

### 34. Левый пуфик / Left Pouf
- `id`: `obj_34_left_pouf`
- `category`: `furniture`
- `template`: `templatePouf`
- `dimensions`: 0.34 × 0.3 × 0.34 meters
- `polyBudget`: target 260 tris, max 500 tris
- `requiredParts`: mainSoftMass, topIndent, seamZone
- `requiredHooks`: floor_attach
- `materialSlots`: fabricMain
- `deformationProfile`: `soft`
- `animationPotential`: compression_response
- `spec file`: `specs/obj_34_left_pouf_spec.json`
- `notes`: Мягкая круглая посадочная форма.

### 35. Правый пуфик / Right Pouf
- `id`: `obj_35_right_pouf`
- `category`: `furniture`
- `template`: `templatePouf`
- `dimensions`: 0.34 × 0.3 × 0.34 meters
- `polyBudget`: target 260 tris, max 500 tris
- `requiredParts`: mainSoftMass, topIndent, seamZone
- `requiredHooks`: floor_attach
- `materialSlots`: fabricMain
- `deformationProfile`: `soft`
- `animationPotential`: compression_response
- `spec file`: `specs/obj_35_right_pouf_spec.json`
- `notes`: Пара к левому пуфику.

### 36. Кресло-мешок / Bean Bag
- `id`: `obj_36_bean_bag`
- `category`: `furniture`
- `template`: `templateBeanBag`
- `dimensions`: 0.95 × 0.68 × 0.88 meters
- `polyBudget`: target 650 tris, max 1100 tris
- `requiredParts`: mainSoftMass, topCompression, seamZone
- `requiredHooks`: floor_attach, seat_center
- `materialSlots`: fabricMain, fabricAccent
- `deformationProfile`: `soft`
- `animationPotential`: compression_response, soft_secondary_motion
- `spec file`: `specs/obj_36_bean_bag_spec.json`
- `notes`: Высокоприоритетный объект для deformation hooks.

## Family: `hangingDecor`

### 39. Мобиль со звёздами / Star Mobile
- `id`: `obj_39_star_mobile`
- `category`: `decor`
- `template`: `templateMobile`
- `dimensions`: 0.44 × 0.52 × 0.44 meters
- `polyBudget`: target 250 tris, max 500 tris
- `requiredParts`: topRig, hangerA, hangerB, starA, starB, starC
- `requiredHooks`: ceiling_mount, mobile_swing_root
- `materialSlots`: metalAccent, plasticMain
- `deformationProfile`: `semiSoft`
- `animationPotential`: mobile_swing_root, star_secondary_sway
- `spec file`: `specs/obj_39_star_mobile_spec.json`
- `notes`: Отдельные подвесы обязательны для лёгкой анимации.

## Family: `flatWallDecor`

### 40. Настенные часы / Wall Clock
- `id`: `obj_40_wall_clock`
- `category`: `wallObject`
- `template`: `templateWallClock`
- `dimensions`: 0.26 × 0.26 × 0.05 meters
- `polyBudget`: target 120 tris, max 220 tris
- `requiredParts`: clockBody, dialZone, handHour, handMinute
- `requiredHooks`: wall_mount_center, clock_hand_pivot
- `materialSlots`: plasticMain, glass, metalAccent
- `deformationProfile`: `rigid`
- `animationPotential`: clock_hand_pivot
- `spec file`: `specs/obj_40_wall_clock_spec.json`
- `notes`: Фронтально читаемый круглый wall object.

### 41. Первый постер / Poster 01
- `id`: `obj_41_poster_01`
- `category`: `wallObject`
- `template`: `templatePoster`
- `dimensions`: 0.38 × 0.28 × 0.01 meters
- `polyBudget`: target 40 tris, max 100 tris
- `requiredParts`: posterPlane, graphicZone
- `requiredHooks`: wall_mount_center
- `materialSlots`: paper
- `deformationProfile`: `semiSoft`
- `animationPotential`: none
- `spec file`: `specs/obj_41_poster_01_spec.json`
- `notes`: Почти плоский объект с decal/graphic zone.

### 42. Второй постер / Poster 02
- `id`: `obj_42_poster_02`
- `category`: `wallObject`
- `template`: `templatePoster`
- `dimensions`: 0.42 × 0.28 × 0.01 meters
- `polyBudget`: target 40 tris, max 100 tris
- `requiredParts`: posterPlane, graphicZone
- `requiredHooks`: wall_mount_center
- `materialSlots`: paper
- `deformationProfile`: `semiSoft`
- `animationPotential`: none
- `spec file`: `specs/obj_42_poster_02_spec.json`
- `notes`: Вторая плоская wall graphic surface.

## Family: `floorSmallProp`

### 43. Синяя игрушка на ковре / Blue Toy on Rug
- `id`: `obj_43_blue_rug_toy`
- `category`: `toy`
- `template`: `templateSmallProp`
- `dimensions`: 0.12 × 0.12 × 0.12 meters
- `polyBudget`: target 80 tris, max 160 tris
- `requiredParts`: mainMass, accentZone
- `requiredHooks`: floor_attach
- `materialSlots`: plasticMain
- `deformationProfile`: `rigid`
- `animationPotential`: none
- `spec file`: `specs/obj_43_blue_rug_toy_spec.json`
- `notes`: Мелкий floor prop синего цветового семейства.

### 44. Розовая игрушка на ковре / Pink Toy on Rug
- `id`: `obj_44_pink_rug_toy`
- `category`: `toy`
- `template`: `templateSmallProp`
- `dimensions`: 0.12 × 0.12 × 0.12 meters
- `polyBudget`: target 80 tris, max 160 tris
- `requiredParts`: mainMass, accentZone
- `requiredHooks`: floor_attach
- `materialSlots`: plasticMain
- `deformationProfile`: `rigid`
- `animationPotential`: none
- `spec file`: `specs/obj_44_pink_rug_toy_spec.json`
- `notes`: Мелкий floor prop розового семейства.

### 45. Жёлтая игрушка на ковре / Yellow Toy on Rug
- `id`: `obj_45_yellow_rug_toy`
- `category`: `toy`
- `template`: `templateSmallProp`
- `dimensions`: 0.11 × 0.11 × 0.11 meters
- `polyBudget`: target 80 tris, max 160 tris
- `requiredParts`: mainMass, accentZone
- `requiredHooks`: floor_attach
- `materialSlots`: plasticMain
- `deformationProfile`: `rigid`
- `animationPotential`: none
- `spec file`: `specs/obj_45_yellow_rug_toy_spec.json`
- `notes`: Мелкий floor prop жёлтого семейства.

## Family: `blockToy`

### 46. Зелёный кубик на ковре / Green Cube on Rug
- `id`: `obj_46_green_rug_cube`
- `category`: `toy`
- `template`: `templateBlock`
- `dimensions`: 0.09 × 0.08 × 0.09 meters
- `polyBudget`: target 40 tris, max 100 tris
- `requiredParts`: mainBlock
- `requiredHooks`: floor_attach
- `materialSlots`: plasticMain
- `deformationProfile`: `rigid`
- `animationPotential`: none
- `spec file`: `specs/obj_46_green_rug_cube_spec.json`
- `notes`: Самый простой блоковый проп.

### 47. Фиолетовый кубик на ковре / Purple Cube on Rug
- `id`: `obj_47_purple_rug_cube`
- `category`: `toy`
- `template`: `templateBlock`
- `dimensions`: 0.09 × 0.08 × 0.09 meters
- `polyBudget`: target 40 tris, max 100 tris
- `requiredParts`: mainBlock
- `requiredHooks`: floor_attach
- `materialSlots`: plasticMain
- `deformationProfile`: `rigid`
- `animationPotential`: none
- `spec file`: `specs/obj_47_purple_rug_cube_spec.json`
- `notes`: Пара зелёному кубику.

## Family: `stackToy`

### 48. Маленькая пирамидка на ковре / Small Pyramid on Rug
- `id`: `obj_48_small_pyramid`
- `category`: `toy`
- `template`: `templatePyramidToy`
- `dimensions`: 0.1 × 0.11 × 0.1 meters
- `polyBudget`: target 60 tris, max 120 tris
- `requiredParts`: base, top
- `requiredHooks`: floor_attach
- `materialSlots`: plasticMain
- `deformationProfile`: `rigid`
- `animationPotential`: none
- `spec file`: `specs/obj_48_small_pyramid_spec.json`
- `notes`: Чистый пирамидальный силуэт.

## Family: `plantProp`

### 50. Растение в горшке / Plant in Pot
- `id`: `obj_50_plant_in_pot`
- `category`: `decor`
- `template`: `templatePottedPlant`
- `dimensions`: 0.42 × 0.68 × 0.42 meters
- `polyBudget`: target 400 tris, max 800 tris
- `requiredParts`: pot, leafClusterA, leafClusterB, leafClusterC
- `requiredHooks`: floor_attach, plant_secondary_sway
- `materialSlots`: plantPot, plantLeaf
- `deformationProfile`: `mixed`
- `animationPotential`: plant_secondary_sway
- `spec file`: `specs/obj_50_plant_in_pot_spec.json`
- `notes`: Горшок жёсткий, листья полумягкие.

## Family: `floorContainer`

### 51. Корзина для белья / Laundry Basket
- `id`: `obj_51_laundry_basket`
- `category`: `containerProp`
- `template`: `templateLaundryBasket`
- `dimensions`: 0.52 × 0.34 × 0.52 meters
- `polyBudget`: target 260 tris, max 500 tris
- `requiredParts`: basketBody, rim, clothInsideOptional
- `requiredHooks`: floor_attach, basket_fill_slot
- `materialSlots`: fabricMain, plasticMain
- `deformationProfile`: `semiSoft`
- `animationPotential`: none
- `spec file`: `specs/obj_51_laundry_basket_spec.json`
- `notes`: Силуэт корзины сверху должен читаться чисто.

## Family: `smallProp`

### 05. Игрушка на кровати / Toy on Bed
- `id`: `obj_05_bed_toy`
- `category`: `toy`
- `template`: `templateSmallPlush`
- `dimensions`: 0.28 × 0.22 × 0.18 meters
- `polyBudget`: target 250 tris, max 500 tris
- `requiredParts`: mainBody, head, accentEars
- `requiredHooks`: bed_plush_slot
- `materialSlots`: plush, fabricAccent
- `deformationProfile`: `soft`
- `animationPotential`: soft_secondary_motion
- `spec file`: `specs/obj_05_bed_toy_spec.json`
- `notes`: Силуэт должен читаться как плюшевая игрушка без микродетали.

## Family: `roomStructure`

### 11. Дверь / Door
- `id`: `obj_11_door`
- `category`: `architectural`
- `template`: `templateDoorFlat`
- `dimensions`: 0.9 × 2.0 × 0.07 meters
- `polyBudget`: target 220 tris, max 420 tris
- `requiredParts`: doorLeaf, knobOrHandle
- `requiredHooks`: door_hinge_side, door_handle_center
- `materialSlots`: woodMain, metalAccent
- `deformationProfile`: `rigid`
- `animationPotential`: door_swing_hinge
- `spec file`: `specs/obj_11_door_spec.json`
- `notes`: Плоская дверная створка с минимальной толщиной.

## Family: `flatProp`

### 24. Планшет/книга на столе / Tablet or Book on Desk
- `id`: `obj_24_tablet_or_book`
- `category`: `prop`
- `template`: `templateFlatPortable`
- `dimensions`: 0.28 × 0.02 × 0.22 meters
- `polyBudget`: target 80 tris, max 180 tris
- `requiredParts`: mainBody, coverOrScreenZone
- `requiredHooks`: desktop_attach_center
- `materialSlots`: paper, plasticMain, glass
- `deformationProfile`: `rigid`
- `animationPotential`: cover_open_optional
- `spec file`: `specs/obj_24_tablet_or_book_spec.json`
- `notes`: Оставить нейтральным, чтобы позже можно было использовать и как книгу, и как планшет.

## Family: `flatPaper`

### 25. Блокнот/листок на столе / Notebook or Sheet on Desk
- `id`: `obj_25_notebook_or_sheet`
- `category`: `paperProp`
- `template`: `templatePaperProp`
- `dimensions`: 0.26 × 0.01 × 0.18 meters
- `polyBudget`: target 50 tris, max 120 tris
- `requiredParts`: paperBody, lineOrCoverZone
- `requiredHooks`: desktop_attach_center
- `materialSlots`: paper
- `deformationProfile`: `semiSoft`
- `animationPotential`: page_flip_optional
- `spec file`: `specs/obj_25_notebook_or_sheet_spec.json`
- `notes`: Очень лёгкий prop, без лишнего объёма.

## Family: `standObject`

### 37. Мольберт / Easel
- `id`: `obj_37_easel`
- `category`: `artFurniture`
- `template`: `templateEasel`
- `dimensions`: 0.62 × 1.45 × 0.55 meters
- `polyBudget`: target 500 tris, max 900 tris
- `requiredParts`: frontLegLeft, frontLegRight, rearLeg, crossBar, canvasSupport
- `requiredHooks`: canvas_mount_center, floor_attach
- `materialSlots`: woodMain, woodAccent
- `deformationProfile`: `rigid`
- `animationPotential`: fold_axis_optional
- `spec file`: `specs/obj_37_easel_spec.json`
- `notes`: Структура стоек должна быть понятной и лёгкой.

## Family: `flatMounted`

### 38. Холст на мольберте / Canvas on Easel
- `id`: `obj_38_canvas`
- `category`: `artObject`
- `template`: `templateCanvas`
- `dimensions`: 0.48 × 0.62 × 0.03 meters
- `polyBudget`: target 80 tris, max 160 tris
- `requiredParts`: canvasPlane, frameThin
- `requiredHooks`: easel_canvas_mount
- `materialSlots`: paper, paintedFrame
- `deformationProfile`: `rigid`
- `animationPotential`: none
- `spec file`: `specs/obj_38_canvas_spec.json`
- `notes`: Отдельный объект, который ставится в canvas_mount_center мольберта.

## Family: `softPairProp`

### 49. Домашние тапочки / Slippers
- `id`: `obj_49_slippers`
- `category`: `wearableProp`
- `template`: `templateSlippersPair`
- `dimensions`: 0.4 × 0.08 × 0.24 meters
- `polyBudget`: target 180 tris, max 360 tris
- `requiredParts`: leftSlipper, rightSlipper
- `requiredHooks`: floor_attach_pair
- `materialSlots`: fabricMain
- `deformationProfile`: `soft`
- `animationPotential`: none
- `spec file`: `specs/obj_49_slippers_spec.json`
- `notes`: Пара мягких тапочек как один grouped prop.
