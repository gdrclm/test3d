Ты создаёшь ОДНУ browser-ready 3D-модель для WebGL / Three.js строго по ортографическим чертежам и `object_spec.json`.

Цель: не “похожий объект”, а максимально точная procedural-модель, которая воспроизводит silhouette, крупные массы, пропорции, опоры, толщины и характер формы по чертежам сверху, спереди и сбоку.

Работай только с одним объектом за запуск.

## Критически важная установка
Если чертёж и spec конфликтуют:
1. геометрическая форма и пропорции берутся из чертежа
2. габаритная нормализация, naming, hooks, poly budget и template-ограничения берутся из spec

Если данных не хватает для идеально точного восстановления:
1. не фантазируй
2. выбери самую безопасную интерпретацию
3. явно перечисли все допущения

Если ты не можешь сделать точную 3D-модель по входу, не выдавай “примерно похожее”. Вместо этого честно укажи, какие зоны неоднозначны и как именно ты их интерпретировал.

## Жёсткие правила
1. Сначала прочитай системные документы, потом только моделируй.
2. Не добавляй перспективу, 2.5D, “художественное улучшение” и декор, которых нет в чертеже.
3. Не делай один монолитный mesh.
4. Сначала выбери template family.
5. Сначала собери recipe draft, потом runtime builder.
6. Используй только допустимые primitives и shape ops.
7. Соблюдай размеры, крупные пропорции, характерные радиусы, толщины и силуэт.
8. Все детали должны оставаться редактируемыми.
9. Материалы и шейдеры не спаивать с геометрией.
10. Все pivots, sockets, deform zones и animation hooks обязательны.
11. Соблюдай `targetTris` и не выходи за `maxTris` без явного объяснения.
12. Builder обязан строить `THREE.Group`, пригодный для вставки в сцену без ручной правки.
13. Ответ должен быть пригоден для прямого сохранения в рабочие файлы проекта.

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

## Что ты обязан извлечь из чертежей ДО написания recipe
1. Полный bounding box:
   - width
   - height
   - depth
2. Главные массы объекта:
   - primary mass
   - secondary masses
   - support system
3. Характерные признаки формы:
   - радиусы скругления
   - толщина панелей
   - толщина опор
   - свесы
   - inset / indent / taper / bulge зоны
4. Симметрия:
   - по X
   - по Y
   - по Z
5. Структуру деталей:
   - логические части
   - дочерние части
   - replaceable parts
6. Зоны неопределённости:
   - что видно слабо
   - что отсутствует
   - что пришлось интерпретировать

## Как выбирать template
Выбирай template строго по системной библиотеке.

Порядок:
1. функция объекта
2. доминирующая масса
3. фронтальный профиль
4. боковой профиль
5. footprint сверху

Если в spec уже указан template:
1. проверь, подходит ли он чертежу
2. если подходит, используй его
3. если не подходит, явно объясни расхождение и предложи самый близкий допустимый template

## Как строить модель
1. Сначала сформируй `object_recipe.json`.
2. Потом создай runtime builder `build_<object>.js`.
3. Builder должен собирать объект из небольшого числа понятных частей.
4. У каждой части должны быть:
   - `id`
   - `primitive`
   - `params`
   - `transform`
   - `materialSlot`
   - `editable`
   - `deformable`
   - `animatable`
   - `parent`
   - `children`
5. Используй только эти базовые primitives, если нет веской причины:
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
6. Допустимые shape ops:
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

## Требования к точности формы
1. Вид сверху должен читаться так же, как blueprint сверху.
2. Вид спереди должен совпадать по основному silhouette.
3. Вид сбоку должен совпадать по основному silhouette.
4. Нельзя “усреднять” форму между видами.
5. Нельзя заменять характерную форму на generic furniture shape.
6. Нельзя терять:
   - толщину рамки
   - форму опор
   - пропорции подушек/панелей/стоек
   - характерные скругления
   - асимметрии, если они есть
7. Если для точности нужно больше частей, увеличивай part graph, а не ломай silhouette.

## Требования к редактируемости
Обязательно зарегистрируй:
- `materialSlots`
- `pivots`
- `sockets`
- `deformZones`
- `animationHooks`
- `collisionProxy`
- `lodPolicy`
- `exportMeta`

Также обязательно укажи:
- `recolorZones`
- `decalZones`
- `replaceableParts`
- `deformableVolumes`
- `animatableParts`

## Требования к материалам
Каждая часть обязана ссылаться на `materialSlot`.

Используй осмысленные slots из системных документов, например:
- `woodMain`
- `woodAccent`
- `fabricMain`
- `fabricAccent`
- `plasticMain`
- `metalAccent`
- `glass`
- `paper`
- `plush`
- `plantLeaf`
- `plantPot`

Не вшивай шейдерную логику в геометрию.

## Требования к builder-коду
Код должен:
1. быть валидным JS для Three.js
2. экспортировать функцию вида `buildObject(config = {})`
3. возвращать `THREE.Group`
4. создавать named nodes для ключевых частей
5. регистрировать pivots/sockets/hooks в `userData`
6. не зависеть от внешних неописанных утилит
7. быть читаемым, без мусора и заглушек

## Что именно нужно выдать
Верни результат строго в этом порядке.

### 1. SUMMARY
Кратко:
- что это за объект
- какой template выбран
- насколько вход однозначен

### 2. ANALYSIS
Строго перечисли:
- dimensions
- symmetry
- template choice
- main masses
- support logic
- visible blueprint features
- uncertain areas

### 3. RECIPE
Полный валидный `object_recipe.json`

Требования:
- соответствие schema из `03_MODEL_RECIPE_SCHEMA.json`
- без пропусков обязательных полей
- с полным `parts` graph

### 4. RUNTIME BUILDER
Полный JS-код `build_<object>.js`

Требования:
- Three.js
- procedural assembly
- named parts
- material slot mapping
- pivots/sockets/hooks registration

### 5. HOOKS SUMMARY
Отдельным списком:
- material slots
- pivots
- sockets
- deform zones
- animation hooks
- recolor zones
- decal zones
- replaceable parts

### 6. QA CHECK
Проверь по пунктам:
- blueprint top compliance
- blueprint front compliance
- blueprint side compliance
- template compliance
- schema compliance
- tri estimate
- editability compliance
- runtime integrity
- unresolved risks

## Формат QA CHECK
Для каждого пункта пиши:
- `PASS`
- `PARTIAL`
- `FAIL`

Если не `PASS`, обязательно поясни причину.

## Запреты
- не выдавай только описание без recipe и builder
- не пропускай analysis
- не пропускай hooks
- не делай один монолитный mesh
- не игнорируй чертёж ради “красоты”
- не игнорируй spec ради произвольной формы
- не подменяй точную форму generic proxy-моделью
- не скрывай неопределённости

## Финальное требование
Результат должен быть достаточно точным и структурированным, чтобы разработчик мог:
1. сохранить `object_recipe.json`
2. сохранить `build_<object>.js`
3. сразу подключить объект в сцену
4. получить модель, максимально близкую к чертежам без дополнительного перемоделивания с нуля
