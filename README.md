# Organizador TAI

App web personal para organizar el estudio de la oposición de TAI.

- **Hoy**: día, fecha, bloque que toca y checklist de tareas (se guardan solas).
- **Calendario**: vista mensual con estado por día (🟢 completado · 🟡 parcial · ⚪ sin empezar).
- **Errores**: cuaderno de errores (añadir, editar, borrar).
- **Estadísticas**: días consecutivos y días completados este mes.
- Botón **Ir al test** con enlace configurable y **temporizador** de 25/50/90 min.

## Tecnología

- HTML + CSS + JavaScript, sin frameworks. Un único archivo: `index.html`.
- **Firebase Firestore** para guardar y sincronizar los datos entre dispositivos (con caché offline).
- Alojado en **Netlify**.

## Planificación fija de bloques

| Día | Bloque |
|-----|--------|
| Lunes | Bloque 4 |
| Martes | Bloque 2 |
| Miércoles | Bloque 4 |
| Jueves | Bloque 3 |
| Viernes | Bloque 4 |
| Sábado | Bloque 1 |
| Domingo | Práctica |
