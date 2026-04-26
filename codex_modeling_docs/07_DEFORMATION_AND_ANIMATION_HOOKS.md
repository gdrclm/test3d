# DEFORMATION AND ANIMATION HOOKS

## Зачем
Чтобы потом не переделывать модель при запросе:
- смягчить форму
- сделать стилизацию пухлее
- добавить покачивание
- анимировать дверцу, лампу, экран, ткань

## Каждая модель обязана иметь deformZones
Минимум:
- rigid
- semiSoft
- soft

### Пример
- столешница -> rigid
- подушка -> soft
- кресло-мешок -> soft
- дверца шкафа -> rigid
- штора -> semiSoft

## Каждая модель обязана иметь animationHooks
### Примеры:
- `door_left_hinge`
- `drawer_pull_axis`
- `screen_tilt_pivot`
- `mobile_swing_root`
- `curtain_wave_root`
- `plant_secondary_sway`
- `lamp_head_tilt`

## Safe edit zones
Codex обязан указывать:
- `recolorZones`
- `decalZones`
- `replaceableParts`
- `deformableVolumes`
- `animatableParts`

## Нельзя
1. Вписывать анимацию в единый неразделённый меш.
2. Делать деформацию там, где форма должна оставаться жёсткой.
3. Терять pivot-ы ради упрощения кода.
