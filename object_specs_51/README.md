# OBJECT SPECS — 51 предмет

Этот архив содержит отдельные spec-файлы для всех 51 предмета комнаты.

## Что внутри
- `specs/` — 51 JSON-файл, по одному на объект
- `object_specs_index.json` — общий индекс
- `object_specs_summary.csv` — краткая таблица

## Назначение
Каждый spec-файл нужен как вход для Codex вместе с чертежными видами:
- top
- front
- side
- back (опционально)

## Базовая логика
Чертежи отвечают за форму.  
Spec-файл отвечает за:
- template family
- category
- размеры
- poly budget
- allowed primitives
- required parts
- required hooks
- material slots
- deformation profile
- animation potential

## Рекомендуемый порядок
1. Дать Codex системные docs из `codex_modeling_docs_pack.zip`
2. На каждый объект дать:
   - соответствующий `*_spec.json`
   - top/front/side images
3. Получить:
   - analysis
   - object_recipe.json
   - runtime builder
   - hooks summary
   - qa check

## Замечание
Размеры и poly budget заданы как рабочие браузерные ориентиры. Их можно уточнять по ходу тестов, не ломая систему.
