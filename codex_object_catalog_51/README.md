# CODEX OBJECT CATALOG 51

Этот архив содержит:
- `OBJECT_CATALOG_51.md` — общий каталог всех 51 объектов
- `BATCH_RUN_ORDER.md` — рекомендуемый порядок запуска
- `BATCH_PROMPTS_INDEX.json` / `.csv` — индекс prompt-файлов
- `batch_prompts/` — 51 готовый prompt, по одному на объект

## Как использовать
1. Дай Codex системный пакет `codex_modeling_docs_pack.zip`.
2. Дай пакет со spec-файлами `object_specs_51_pack.zip`.
3. Выбери нужный prompt из `batch_prompts/`.
4. Подставь в него:
   - top image
   - front image
   - side image
   - back image при необходимости
5. Запусти prompt.

## Что уже встроено в каждый prompt
- id объекта
- template
- category/family
- poly budget
- required parts
- required hooks
- material slots
- deformation profile
- animation potential
- полный JSON spec прямо внутри prompt

## Рекомендуемый workflow
Не запускать все 51 предмет подряд без проверки.
Лучше идти батчами:
1. крупная мебель
2. текстиль и мягкие объекты
3. рабочая группа
4. полочная группа
5. мелкие props
6. декор и завершающие объекты
