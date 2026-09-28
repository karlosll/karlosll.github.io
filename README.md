# Portafolio profesional — Carlos Llivisupa

Portafolio web personal de Carlos Llivisupa, estudiante de Ingeniería de Software enfocado en el desarrollo de aplicaciones multiplataforma, backend e integración de inteligencia artificial.

El sitio presenta mi perfil profesional, habilidades técnicas, proyectos destacados, información de contacto y currículum descargable.

## Características

- Sitio multipágina construido con HTML5 semántico.
- Diseño minimalista y responsive para móvil, tablet y escritorio.
- Modos claro y oscuro con preferencia persistente.
- Contenido disponible en español e inglés sin recargar la página.
- Navegación accesible mediante teclado.
- Animaciones compatibles con `prefers-reduced-motion`.
- Proyectos filtrables por tecnología.
- Modal accesible con información detallada de cada proyecto.
- Currículum profesional descargable.
- Design System con colores, tipografía, espaciado y componentes reutilizables.

## Páginas

| Página | Contenido |
| --- | --- |
| `index.html` | Presentación y resumen profesional |
| `sobre-mi.html` | Perfil, formación, certificaciones e intereses |
| `habilidades.html` | Stack tecnológico organizado por categorías |
| `proyectos.html` | Proyectos, filtros y detalles |
| `design-system.html` | Tokens y componentes visuales |
| `contacto.html` | Información profesional, redes y descarga del CV |

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- CSS Custom Properties
- CSS Grid y Flexbox
- Local Storage para tema e idioma
- Intersection Observer para animaciones
- Dialog API para el modal de proyectos

El sitio no requiere frameworks, dependencias ni proceso de compilación.

## Estructura del proyecto

```text
/
├── index.html
├── sobre-mi.html
├── habilidades.html
├── proyectos.html
├── design-system.html
├── contacto.html
├── css/
│   ├── tokens.css
│   ├── base.css
│   ├── components.css
│   └── pages.css
├── js/
│   ├── translations.js
│   ├── i18n.js
│   ├── theme.js
│   ├── menu.js
│   ├── projects.js
│   └── ui.js
├── Foto de Perfil.jpg
├── OSFIN IA.png
├── POS FARMACIA.png
├── OSLY SHOP.png
└── CV - Carlos Llivisupa.pdf
```

## Ejecución local

No es necesario instalar dependencias. Puedes abrir `index.html` directamente en un navegador o iniciar un servidor local:

```bash
npx serve .
```

Después, abre la dirección mostrada por el servidor.

## Publicación en GitHub Pages

El repositorio está preparado para publicarse directamente desde su rama principal:

```bash
git add .
git commit -m "Actualiza portafolio profesional"
git push origin main
```

En GitHub, ve a **Settings → Pages** y selecciona la rama `main` y la carpeta raíz `/` como origen de publicación.

## Proyectos destacados

### OsFin IA

Aplicación para la gestión inteligente de finanzas personales potenciada por inteligencia artificial. Proyecto finalista en la competencia nacional *Hackathon Agentic Scale Ecuador Tech Week 2026*.

### PosFarmacia

Sistema integral de punto de venta de escritorio para farmacias, diseñado con funcionamiento offline y administración de productos.

### Osly Shop

Plataforma de comercio electrónico enfocada en ventas, inventario y una experiencia de compra fluida.

## Contacto

- Correo: [carlosllivisupa25@gmail.com](mailto:carlosllivisupa25@gmail.com)
- LinkedIn: [Carlos Llivisupa](https://www.linkedin.com/in/carlos-llivisupa-/)
- GitHub: [karlosll](https://github.com/karlosll?tab=repositories)

## Autor

Desarrollado por **Carlos Llivisupa**.
