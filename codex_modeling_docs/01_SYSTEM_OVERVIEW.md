# SYSTEM OVERVIEW

## Что строим
Система превращает набор ортографических видов объекта:
- сверху
- спереди
- сбоку
- при необходимости сзади

в procedural 3D-модель для WebGL / Three.js.

## Слои системы

### 1. Blueprint Input
Входные чертежи, контуры, размеры, категории.

### 2. Blueprint Descriptor
Нормализованное описание объекта:
- bounding box
- symmetry
- silhouette hints
- category
- template hint
- part hints

### 3. Template Family
Семейство модели:
- bed
- cabinet
- desk
- bookshelf
- soft seat
- wall object
- small prop
- lighting
- decor

### 4. Primitive Library
Базовые примитивы:
- roundedBox
- softBox
- panelRect
- cylinder
- capsule
- sphere
- cone
- frameRect
- blob
- lathe profile

### 5. Shape Ops
Операции над формой:
- bevel
- taper
- inset
- bulge
- squash
- stretch
- symmetry
- rounded edges
- top indent
- silhouette fit

### 6. Model Recipe
Источник истины о модели:
- parts
- transforms
- material slots
- pivots
- sockets
- deform zones
- animation hooks

### 7. Runtime Builder
Код, который строит `THREE.Group` из recipe.

### 8. Post Layers
Независимые слои:
- shader preset
- material palette
- recolor
- decals
- deformation
- animation

## Обязательный выход на каждый объект
На каждый объект обязаны существовать:

1. `object_spec.json`
2. `object_recipe.json`
3. `build_<object>.js`
4. `preview_<object>.js` или сцена-превью
5. при необходимости `notes_<object>.md`

## Базовый контракт
Каждый объект обязан иметь:
- `id`
- `family`
- `template`
- `dimensions`
- `parts`
- `materialSlots`
- `pivots`
- `sockets`
- `deformZones`
- `animationHooks`
- `collisionProxy`
- `lodPolicy`
- `exportMeta`
