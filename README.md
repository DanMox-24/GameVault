# GameVault - Biblioteca Personal de Videojuegos

Aplicación móvil desarrollada con Ionic y Angular para gestionar una colección personal de videojuegos.

## Descripción

GameVault permite a los usuarios organizar su biblioteca de videojuegos, explorar por género y plataforma, y llevar un registro de su progreso en cada juego.

## Estructura del proyecto

- **Tabs**: Navegación principal con tres pestañas (Biblioteca, Explorar, Perfil)
- **Lista de Juegos**: Muestra todos los juegos con filtros por estado
- **Agregar Juego**: Formulario para añadir nuevos juegos a la biblioteca

## Características principales

- Gestión de biblioteca personal de videojuegos
- Estadísticas de progreso (completados, jugando, pendientes)
- Exploración por géneros y plataformas
- Filtros por estado del juego
- Sistema de calificación personal
- Perfil de usuario con estadísticas
- Interfaz moderna con tema gaming

## Requisitos previos

- Node.js instalado
- Ionic CLI instalado
- Angular instalado

## Instalación

1. Clonar el repositorio
2. Navegar a la carpeta del proyecto
3. Ejecutar:
```bash
npm install
```

## Ejecutar la aplicación
```bash
ionic serve
```

## Tecnologías utilizadas

- Ionic 7
- Angular
- TypeScript
- SCSS

## Estructura de archivos
```
src/
├── app/
│   ├── tabs/
│   │   ├── biblioteca/
│   │   ├── explorar/
│   │   └── perfil/
│   ├── lista-juegos/
│   ├── agregar-juego/
│   └── app-routing.module.ts
```

## Navegación

- Inicio en tab Biblioteca
- Navegación a Lista completa desde Biblioteca
- Navegación a Agregar juego desde Biblioteca
- Tabs accesibles desde cualquier pantalla
- Botón de regreso en todas las páginas secundarias

## Funcionalidades

### Biblioteca
- Resumen de estadísticas
- Últimos juegos agregados
- Acceso rápido a lista completa y formulario

### Explorar
- Vista por géneros
- Vista por plataformas
- Contador de juegos por categoría

### Lista de Juegos
- Listado completo de juegos
- Filtros por estado (Todos, Completados, Jugando)
- Información detallada de cada juego
- Badges de estado con colores

### Agregar Juego
- Formulario completo
- Campos: nombre, plataforma, género, estado, calificación, notas
- Confirmación visual al guardar

### Perfil
- Avatar de usuario
- Estadísticas generales
- Configuración de notificaciones
- Información de la app

## Autor

Daniel Mateus

## Versión

1.0.0
