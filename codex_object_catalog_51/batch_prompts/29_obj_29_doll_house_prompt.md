# CODEX PROMPT — Кукольный домик / Doll House

Ты создаёшь browser-ready 3D-модель для WebGL / Three.js **по ортографическим чертежным видам**.

## Обязательные правила
1. Строго соблюдай крупные пропорции и планы по чертежам.
2. Не добавляй перспективу, 2.5D и художественную интерпретацию в саму форму.
3. Не строй одноразовый монолитный mesh.
4. Сначала выбери template family.
5. Сначала собери recipe, потом runtime builder.
6. Модель должна быть пригодна для дальнейшей:
   - смены шейдера
   - смены материала
   - перекраски
   - деформации
   - анимации
7. Обязательно создай:
   - part graph
   - material slots
   - pivots
   - sockets
   - deform zones
   - animation hooks
8. Соблюдай poly budget.
9. Используй только допустимые primitives и shape ops из системных документов.
10. Если в чертежах есть неоднозначность, не фантазируй агрессивно: сохрани габариты и явно пометь интерпретации.

## Сначала прочитай
- `00_READ_FIRST.md`
- `01_SYSTEM_OVERVIEW.md`
- `02_BLUEPRINT_INPUT_SPEC.md`
- `03_MODEL_RECIPE_SCHEMA.json`
- `04_TEMPLATE_LIBRARY.md`
- `05_PRIMITIVE_LIBRARY.md`
- `06_MATERIAL_SHADER_HOOKS.md`
- `07_DEFORMATION_AND_ANIMATION_HOOKS.md`
- `08_ACCEPTANCE_CRITERIA.md`
- `10_CODEX_EXECUTION_PROTOCOL.md`

## Текущий объект
- `id`: `obj_29_doll_house`
- `displayNameRu`: `Кукольный домик`
- `displayNameEn`: `Doll House`
- `category`: `toy`
- `family`: `toyStructure`
- `template`: `templateToyHouse`
- `spec file`: `specs/obj_29_doll_house_spec.json`

## Входные данные
- top view image: `[ВСТАВИТЬ TOP IMAGE]`
- front view image: `[ВСТАВИТЬ FRONT IMAGE]`
- side view image: `[ВСТАВИТЬ SIDE IMAGE]`
- back view image: `[ОПЦИОНАЛЬНО]`
- object spec JSON:

```json
{
  "id": "obj_29_doll_house",
  "number": 29,
  "displayNameRu": "Кукольный домик",
  "displayNameEn": "Doll House",
  "category": "toy",
  "family": "toyStructure",
  "template": "templateToyHouse",
  "styleProfile": "cartoon_soft_lowpoly",
  "units": "meters",
  "dimensions": {
    "width": 0.82,
    "height": 0.78,
    "depth": 0.34
  },
  "detailLevel": "medium",
  "polyBudget": {
    "targetTris": 900,
    "maxTris": 1500
  },
  "symmetry": {
    "x": true,
    "y": false,
    "z": false
  },
  "allowedPrimitives": [
    "roundedBox",
    "panelRect",
    "cone"
  ],
  "requiredParts": [
    "mainBody",
    "roof",
    "doorZone",
    "windowZoneLeft",
    "windowZoneRight"
  ],
  "requiredHooks": [
    "floor_attach",
    "roof_top_center"
  ],
  "requiredMaterialSlots": [
    "plasticMain",
    "woodAccent",
    "paintedFrame"
  ],
  "deformationProfile": "rigid",
  "animationPotential": [
    "front_door_optional"
  ],
  "notes": "Игрушечная архитектура, не реалистичный дом."
}
```

## Что нужно сделать
1. Проанализируй виды и выдели:
   - bounding dimensions
   - main masses
   - symmetry
   - likely template family
   - likely part breakdown
   - uncertain areas
2. Проверь соответствие template `templateToyHouse`.
3. Создай `object_recipe.json`.
4. Создай runtime builder на Three.js.
5. Зарегистрируй:
   - material slots
   - pivots
   - sockets
   - deform zones
   - animation hooks
6. Соблюди `targetTris = 900` и `maxTris = 1500`.
7. Убедись, что объект можно без переписывания:
   - перекрасить
   - перешейдерить
   - деформировать
   - анимировать
   - переиспользовать в другой сцене

## Специальные требования к этому объекту
- required parts: mainBody, roof, doorZone, windowZoneLeft, windowZoneRight
- required hooks: floor_attach, roof_top_center
- required material slots: plasticMain, woodAccent, paintedFrame
- deformation profile: rigid
- animation potential: front_door_optional
- notes: Игрушечная архитектура, не реалистичный дом.

## Формат ответа
Верни результат строго в таком порядке:

### 1. ANALYSIS
Краткий анализ чертежей:
- размеры
- симметрия
- template
- ключевые массы
- неоднозначности

### 2. RECIPE
Полный `object_recipe.json`

### 3. RUNTIME BUILDER
Готовый JS-код сборки объекта в Three.js

### 4. HOOKS SUMMARY
- material slots
- pivots
- sockets
- deform zones
- animation hooks

### 5. QA CHECK
- tri estimate
- template compliance
- editability compliance
- unresolved risks

## Важно
Если какая-то часть спорная, выбери самый простой и редактируемый вариант, но не ломай общий silhouette и пропорции.
