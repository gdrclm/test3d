# CODEX PROMPT — Клавиатура / Keyboard

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
- `id`: `obj_23_keyboard`
- `displayNameRu`: `Клавиатура`
- `displayNameEn`: `Keyboard`
- `category`: `electronics`
- `family`: `desktopAccessory`
- `template`: `templateKeyboard`
- `spec file`: `specs/obj_23_keyboard_spec.json`

## Входные данные
- top view image: `[ВСТАВИТЬ TOP IMAGE]`
- front view image: `[ВСТАВИТЬ FRONT IMAGE]`
- side view image: `[ВСТАВИТЬ SIDE IMAGE]`
- back view image: `[ОПЦИОНАЛЬНО]`
- object spec JSON:

```json
{
  "id": "obj_23_keyboard",
  "number": 23,
  "displayNameRu": "Клавиатура",
  "displayNameEn": "Keyboard",
  "category": "electronics",
  "family": "desktopAccessory",
  "template": "templateKeyboard",
  "styleProfile": "cartoon_soft_lowpoly",
  "units": "meters",
  "dimensions": {
    "width": 0.42,
    "height": 0.03,
    "depth": 0.16
  },
  "detailLevel": "low",
  "polyBudget": {
    "targetTris": 120,
    "maxTris": 220
  },
  "symmetry": {
    "x": true,
    "y": false,
    "z": false
  },
  "allowedPrimitives": [
    "roundedBox",
    "panelRect"
  ],
  "requiredParts": [
    "base",
    "keySurfaceZone"
  ],
  "requiredHooks": [
    "desktop_attach_center"
  ],
  "requiredMaterialSlots": [
    "plasticMain"
  ],
  "deformationProfile": "rigid",
  "animationPotential": [],
  "notes": "Клавиши можно оставить как surface zone без поштучной геометрии."
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
2. Проверь соответствие template `templateKeyboard`.
3. Создай `object_recipe.json`.
4. Создай runtime builder на Three.js.
5. Зарегистрируй:
   - material slots
   - pivots
   - sockets
   - deform zones
   - animation hooks
6. Соблюди `targetTris = 120` и `maxTris = 220`.
7. Убедись, что объект можно без переписывания:
   - перекрасить
   - перешейдерить
   - деформировать
   - анимировать
   - переиспользовать в другой сцене

## Специальные требования к этому объекту
- required parts: base, keySurfaceZone
- required hooks: desktop_attach_center
- required material slots: plasticMain
- deformation profile: rigid
- animation potential: none
- notes: Клавиши можно оставить как surface zone без поштучной геометрии.

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
