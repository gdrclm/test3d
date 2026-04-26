# Scene Viewer

Локальный браузерный viewer для этого репозитория.

## Что умеет
- открывает 3D-сцену в браузере
- подгружает все `object_specs_51/specs/*.json`
- подгружает все blueprint-изображения из `room_objects_51_images` через `scene_viewer/blueprint_manifest.json`
- создаёт первый blueprint-aware procedural pass для всех 51 объектов по размерам, template и внешнему виду из чертежей
- если сохранённого layout нет, автоматически показывает стартовую сцену с кроватью
- позволяет добавлять, выбирать, двигать, вращать и удалять предметы
- сохраняет layout в `localStorage`

## Как запустить
Из корня репозитория:

```bash
python3 -m http.server 4173
```

Потом откройте:

```text
http://localhost:4173/scene_viewer/
```

Важно: viewer нужно открывать через сервер, иначе `fetch()` не сможет прочитать JSON-спеки.
