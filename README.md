# 📚 Organizador TAI

App web para organizar el estudio de la oposición de TAI (Técnico Auxiliar de Informática).

**[▶ Demo en vivo](https://kagobio.github.io/organizadortai/)**

![Captura del organizador](https://raw.githubusercontent.com/kagobio/kagobio.github.io/main/img/organizadortai.png)

## Características

- **Hoy**: día, fecha, bloque que toca y checklist de tareas (se guardan solas).
- **Calendario**: vista mensual con estado por día (🟢 completado · 🟡 parcial · ⚪ sin empezar).
- **Errores**: cuaderno de errores (añadir, editar, borrar).
- **Estadísticas**: días consecutivos y días completados este mes.
- Temporizador de sesiones de 25/50/90 min y enlace configurable al test.
- Sincronización entre dispositivos con Firebase Firestore y caché offline. Instalable como app (PWA).

## Tecnología

HTML + CSS + JavaScript, sin frameworks, en un único archivo `index.html`. Firebase Firestore para guardar y sincronizar los datos entre dispositivos.
