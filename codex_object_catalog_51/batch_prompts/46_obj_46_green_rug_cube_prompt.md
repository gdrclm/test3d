# CODEX PROMPT — Зелёный кубик на ковре / Green Cube on Rug

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
- `id`: `obj_46_green_rug_cube`
- `displayNameRu`: `Зелёный кубик на ковре`
- `displayNameEn`: `Green Cube on Rug`
- `category`: `toy`
- `family`: `blockToy`
- `template`: `templateBlock`
- `spec file`: `specs/obj_46_green_rug_cube_spec.json`

## Входные данные
- top view image: `[ВСТАВИТЬ TOP IMAGE]`
- front view image: `[ВСТАВИТЬ FRONT IMAGE]`
- side view image: `[ВСТАВИТЬ SIDE IMAGE]`
- back view image: `[ОПЦИОНАЛЬНО]`
- object spec JSON:

```json
{
  "id": "obj_46_green_rug_cube",
  "number": 46,
  "displayNameRu": "Зелёный кубик на ковре",
  "displayNameEn": "Green Cube on Rug",
  "category": "toy",
  "family": "blockToy",
  "template": "templateBlock",
  "styleProfile": "cartoon_soft_lowpoly",
  "units": "meters",
  "dimensions": {
    "width": 0.09,
    "height": 0.08,
    "depth": 0.09
  },
  "detailLevel": "low",
  "polyBudget": {
    "targetTris": 40,
    "maxTris": 100
  },
  "symmetry": {
    "x": true,
    "y": false,
    "z": true
  },
  "allowedPrimitives": [
    "roundedBox"
  ],
  "requiredParts": [
    "mainBlock"
  ],
  "requiredHooks": [
    "floor_attach"
  ],
  "requiredMaterialSlots": [
    "plasticMain"
  ],
  "deformationProfile": "rigid",
  "animationPotential": [],
  "notes": "Самый простой блоковый проп."
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
2. Проверь соответствие template `templateBlock`.
3. Создай `object_recipe.json`.
4. Создай runtime builder на Three.js.
5. Зарегистрируй:
   - material slots
   - pivots
   - sockets
   - deform zones
   - animation hooks
6. Соблюди `targetTris = 40` и `maxTris = 100`.
7. Убедись, что объект можно без переписывания:
   - перекрасить
   - перешейдерить
   - деформировать
   - анимировать
   - переиспользовать в другой сцене

## Специальные требования к этому объекту
- required parts: mainBlock
- required hooks: floor_attach
- required material slots: plasticMain
- deformation profile: rigid
- animation potential: none
- notes: Самый простой блоковый проп.

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
