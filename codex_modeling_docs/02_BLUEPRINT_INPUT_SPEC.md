# BLUEPRINT INPUT SPEC

## Что подаётся Codex
Для одного объекта подаются:

- `top` — вид сверху
- `front` — вид спереди
- `side` — вид сбоку
- `back` — опционально
- `object_spec.json` — метаописание объекта

## Требования к видам
1. Только ортографические виды.
2. Без перспективы.
3. Без 2.5D.
4. Без художественного рендера.
5. Чёткий силуэт.
6. Нормализованный фон.
7. Желательно одинаковый масштаб между видами.
8. Желательно указать реальный размер или относительный масштаб.

## Что Codex должен извлечь
- общую ширину
- общую высоту
- общую глубину
- крупные массы
- симметрию
- тип опор
- положение ключевых поверхностей
- места для sockets
- вероятное template family

## Рекомендуемый object_spec.json
```json
{
  "id": "desk_01",
  "category": "furniture",
  "styleProfile": "cartoon_soft_lowpoly",
  "units": "meters",
  "dimensions": {
    "width": 1.40,
    "height": 0.78,
    "depth": 0.65
  },
  "requiredTemplate": "templateDesk",
  "symmetry": {
    "x": true,
    "y": false,
    "z": false
  },
  "detailLevel": "medium",
  "polyBudget": {
    "targetTris": 900,
    "maxTris": 1400
  },
  "allowedPrimitives": [
    "roundedBox",
    "panelRect",
    "softCylinder"
  ],
  "requiredHooks": [
    "desktop_monitor_slot",
    "desktop_lamp_slot",
    "desktop_notebook_slot"
  ]
}
```

## Если видов недостаточно
Codex не должен фантазировать бесконтрольно.
Он обязан:
1. сохранить крупные пропорции
2. выбрать минимально рискованный template
3. явно пометить, какие части были интерпретированы
4. не добавлять лишний декор без причины

## Система координат
Рекомендуется:
- X = ширина
- Y = высота
- Z = глубина

Плоскость пола:
- `Y = 0`

Pivot по умолчанию:
- `floor_center`
