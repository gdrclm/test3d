# MATERIAL AND SHADER HOOKS

Материалы и шейдеры не должны быть жёстко спаяны с геометрией.

## Каждая модель обязана иметь material slots

### Рекомендуемые material slots
- woodMain
- woodAccent
- fabricMain
- fabricAccent
- plasticMain
- metalAccent
- glass
- paper
- plush
- plantLeaf
- plantPot

## Каждая часть обязана ссылаться на materialSlot
Пример:
- tabletop -> woodMain
- pillow_01 -> fabricMain
- handle -> metalAccent

## Shader profile должен назначаться отдельно
Примеры:
- `shader_unlit_flat`
- `shader_stylized_soft`
- `shader_toon_clean`
- `shader_pbr_lite`
- `shader_gradient_painted`

## Что должно быть возможно без пересборки геометрии
- смена базового цвета
- смена roughness / spec balance
- включение toon ramp
- включение rim light
- включение градиента
- замена палитры объекта
- включение декалей

## Texture hooks
Даже если текстур пока нет, объект должен иметь места, куда их можно навесить:
- decal zones
- front panels
- top surfaces
- label slots
- poster surfaces
