# CODEX EXECUTION PROTOCOL

## Обязательный порядок работы Codex

### Шаг 1. Прочитать документы
Codex обязан прочитать:
- system overview
- blueprint input spec
- recipe schema
- template library
- primitive library
- material/shader hooks
- deformation/animation hooks
- acceptance criteria

### Шаг 2. Проанализировать чертежи
Codex обязан явно выделить:
- bounding dimensions
- template family
- main masses
- symmetry
- probable parts
- uncertain areas

### Шаг 3. Выбрать template
Codex не имеет права сразу писать mesh-код без выбора template family.

### Шаг 4. Сформировать recipe draft
До runtime builder должен существовать draft recipe.

### Шаг 5. Построить runtime builder
Создать `THREE.Group` на базе primitives + shape ops.

### Шаг 6. Зарегистрировать hooks
- pivots
- sockets
- material slots
- deform zones
- animation hooks

### Шаг 7. Самопроверка
Проверить:
- пропорции
- poly budget
- читаемость
- editability
- runtime integrity

### Шаг 8. Выдать результат
Формат результата:
1. summary
2. выбранный template
3. recipe
4. runtime builder
5. notes about uncertain parts

## Запреты
- не строить модель одним монолитным мешем
- не игнорировать blueprint proportions
- не вшивать шейдерные решения в геометрию
- не терять pivots и sockets
- не выходить за poly budget без причины
