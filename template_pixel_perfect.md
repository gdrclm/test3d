Ты создаёшь ОДНУ 3D-модель в режиме PIXEL-PERFECT BLUEPRINT RECONSTRUCTION.

Задача: восстановить объект по ортографическим чертежам максимально точно, без стилистических “улучшений”, без усреднения формы и без generic substitute geometry.

Это не режим “похожей модели”.
Это режим: один объект, один blueprint, одна максимально точная procedural reconstruction.

## Главный приоритет
Приоритет №1: silhouette и пропорции из чертежей.

Если между:
- красотой
- удобством
- шаблонностью
- скоростью
- точностью чертежа

есть конфликт, всегда выбирай точность чертежа.

## Абсолютные правила
1. Работай только с одним объектом за один запуск.
2. Сначала прочитай все системные документы.
3. Не начинай builder, пока не завершён точный blueprint analysis.
4. Не делай approximate shape.
5. Не заменяй сложную форму на “похожий примитив”, если это ломает silhouette.
6. Не сглаживай асимметрию, если она есть на чертеже.
7. Не добавляй детали, которых нет на чертеже.
8. Не убирай детали, которые читаются на чертеже.
9. Не выдумывай скрытые стороны агрессивно.
10. Если часть неочевидна, явно зафиксируй допущение.
11. Не выдавай proxy-модель.
12. Не выдавай generic furniture template вместо точной reconstruction.
13. Нельзя отвечать только объяснением. Обязательны recipe и builder.

## Сначала прочитай системные документы
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

## Входные данные
- `top view image`: [ВСТАВИТЬ TOP IMAGE]
- `front view image`: [ВСТАВИТЬ FRONT IMAGE]
- `side view image`: [ВСТАВИТЬ SIDE IMAGE]
- `back view image`: [ОПЦИОНАЛЬНО]
- `object spec JSON`: [ВСТАВИТЬ ПОЛНЫЙ JSON ИЗ НУЖНОГО `*_spec.json`]

## Режим Pixel-Perfect
Под “pixel-perfect” в этом prompt понимается:
1. точное совпадение ключевого silhouette по top/front/side
2. сохранение всех читаемых крупных и средних масс
3. сохранение характерных толщин, радиусов, опор, отступов и свесов
4. запрет на упрощение формы, если упрощение меняет silhouette
5. part breakdown допускается любой сложности, если он нужен для точности

Если добиться буквального pixel-to-pixel совпадения невозможно из-за ограничений 3D-реконструкции или неоднозначности данных, ты обязан:
1. подойти настолько близко, насколько это возможно
2. перечислить все оставшиеся отклонения
3. не скрывать компромиссы

## Обязательная последовательность работы
### Шаг 1. Blueprint Forensics
Сначала сделай forensic-разбор чертежей.

Ты обязан явно выделить:
- bounding width
- bounding height
- bounding depth
- outer silhouette
- internal silhouette breaks
- panel thickness
- support thickness
- offsets
- corner radii
- inset zones
- taper zones
- bulge zones
- symmetry / asymmetry
- contact points with floor/wall/surface

### Шаг 2. Template Validation
Проверь template из spec.

Правила:
1. template можно использовать только как structural family
2. template не имеет права упростить форму
3. если template конфликтует с реальным silhouette объекта, ты обязан это написать
4. даже при использовании template итоговая форма обязана следовать blueprint, а не шаблонной усреднённой версии

### Шаг 3. Part Decomposition
Разбей объект на части так, чтобы:
1. каждая важная масса контролировалась отдельно
2. силуэт можно было точно подогнать
3. editability не ломала форму

Нельзя:
- “слеплять” всё в один part ради простоты
- терять силуэт ради аккуратного part graph

### Шаг 4. Recipe Draft
Сначала создай полный `object_recipe.json`.

Требования:
1. соответствует schema
2. покрывает весь объект
3. не пропускает parts, которые влияют на silhouette
4. у каждой части есть primitive, params, transform, materialSlot, parent/children

### Шаг 5. Runtime Builder
Создай `build_<object>.js`.

Builder обязан:
1. создавать `THREE.Group`
2. собирать объект procedural-способом
3. содержать named nodes
4. регистрировать hooks в `userData`
5. сохранять читаемую структуру

### Шаг 6. Blueprint Compliance Audit
Перед финальным ответом выполни self-audit:
- top silhouette match
- front silhouette match
- side silhouette match
- mass breakdown match
- support system match
- proportion match
- thickness match
- asymmetry match

Если есть несовпадение, укажи его явно.

## Ограничения на геометрию
Используй только разрешённые primitives и shape ops из системных документов.

Разрешено:
- `roundedBox`
- `softBox`
- `panelRect`
- `cylinder`
- `softCylinder`
- `sphere`
- `halfSphere`
- `capsule`
- `cone`
- `frameRect`
- `blob`
- `latheProfile`

Разрешённые shape ops:
- `rounded edges`
- `bevel profile`
- `bulge`
- `taper`
- `inset`
- `indent`
- `squash`
- `stretch`
- `symmetry mirror`
- `safe merge`

Если стандартных primitives недостаточно для точной reconstruction:
1. комбинируй больше частей
2. используй shape ops
3. не переходи к “похожему упрощению”

## Что нельзя делать
- нельзя выдавать low-fidelity approximation
- нельзя делать “cartoon reinterpretation”, если это меняет blueprint
- нельзя пропускать средние детали, влияющие на контур
- нельзя заменять сложный контур на box, cylinder или sphere “по смыслу”
- нельзя игнорировать вид сверху
- нельзя игнорировать вид сбоку
- нельзя игнорировать толщины
- нельзя игнорировать расстояния между частями
- нельзя прятать спорные зоны

## Требования к материалам и hooks
Даже в pixel-perfect режиме модель обязана оставаться production-ready.

Обязательно зарегистрируй:
- `materialSlots`
- `pivots`
- `sockets`
- `deformZones`
- `animationHooks`
- `collisionProxy`
- `lodPolicy`
- `exportMeta`
- `recolorZones`
- `decalZones`
- `replaceableParts`
- `deformableVolumes`
- `animatableParts`

Каждая часть обязана ссылаться на `materialSlot`.

## Poly Budget
Соблюдай `targetTris` и `maxTris` из spec.

Если для silhouette accuracy нужен более высокий tri count:
1. сначала попробуй решить задачу через лучшее part decomposition
2. потом через более точные shape ops
3. только если иначе silhouette ломается, допускается превышение
4. превышение обязательно объяснить в QA

## Формат ответа
Верни результат строго в этом порядке.

### 1. SUMMARY
Коротко:
- объект
- выбранный template
- общая степень определённости входа
- можно ли считать reconstruction high-confidence

### 2. BLUEPRINT FORENSICS
Строго перечисли:
- dimensions
- symmetry / asymmetry
- outer silhouette
- internal mass breakdown
- support logic
- panel/support thicknesses
- corner radii / tapers / insets / bulges
- blueprint-critical features
- uncertain areas

### 3. TEMPLATE DECISION
Ответь явно:
- template from spec
- is it valid for this blueprint: yes/no
- final template used
- why

### 4. RECIPE
Полный валидный `object_recipe.json`

### 5. RUNTIME BUILDER
Полный JS-код `build_<object>.js`

### 6. HOOKS SUMMARY
Списком:
- material slots
- pivots
- sockets
- deform zones
- animation hooks
- recolor zones
- decal zones
- replaceable parts

### 7. PIXEL-PERFECT QA
Проверь отдельно:
- top silhouette match
- front silhouette match
- side silhouette match
- major proportions match
- secondary masses match
- support geometry match
- thickness match
- asymmetry preservation
- schema compliance
- runtime integrity
- tri budget compliance
- remaining deviations

Для каждого пункта используй только:
- `PASS`
- `PARTIAL`
- `FAIL`

Если не `PASS`, обязательно напиши точную причину.

## Финальное требование
Результат должен быть таким, чтобы разработчик мог:
1. сохранить `object_recipe.json`
2. сохранить `build_<object>.js`
3. подключить модель в сцену
4. получить максимально точную reconstruction объекта по чертежу, а не “примерно похожую” модель
