# LeKilleRGallet.github.io

Sitio personal y fuente pública canónica de Augusto Rico, construido con Astro y publicado con GitHub Pages.

## Fuente de verdad

Este repositorio es la fuente pública para:

- perfil profesional y académico publicable;
- experiencia, herramientas e idiomas;
- working papers, manuscritos y proyectos con estado explícito;
- PDFs y archivo académico;
- CV público;
- páginas de colaboración y portafolio.

La fuente estructurada principal del perfil es `src/data/publicProfile.ts`.
Los proyectos públicos viven en `src/content/proyectos/`.
El archivo académico vive en `src/data/archive.ts`.

La hoja privada de búsqueda de empleo sigue siendo la fuente operativa para
postulaciones, tracking, recruiters y estados de procesos. Ningún dato privado
o interno de DIAN debe publicarse aquí.

## Endpoints públicos para buscadores y agentes

- `/sitemap.xml`
- `/feed.xml`
- `/llms.txt`
- `/llms-full.txt`
- `/api/profile.json`
- `/api/research.json`
- `/api/archive.json`\n- `/api/topics.json`

## Qué contiene

- home profesional;
- `/sobre-mi/` como perfil canónico;
- `/data/`, `/research/` y `/finance/` como landings;
- `/investigacion/` y fichas de proyectos;\n- `/temas/` y `/en/topics/` como hubs temáticos basados en evidencia;
- `/archivo/` de PDFs y trabajos académicos;
- `/agenda/` para ideas todavía no convertidas en manuscritos;
- `/colaborar/` para trabajo por proyecto;
- CV web y PDF;
- BibTeX y metadatos de citación cuando corresponda.

## Regla editorial

Una entrada debe indicar su estado real. No convertir working papers,
manuscritos, tesis dirigidas, trabajos de curso o ensayos en publicaciones
revisadas por pares. La autoría, dirección y codirección deben mantenerse
separadas.

## Documentos LaTeX

Los documentos en `documentos/<slug>/main.tex` se compilan en GitHub Actions y
se publican en `/pdf/<slug>.pdf`.

## Desarrollo

```bash
npm ci
npm run dev
npm run build
```

## Nuevo proyecto

```powershell
nuevoASTRO nombre-del-proyecto
```

o:

```powershell
.\scripts\nuevo-proyecto.ps1 nombre-del-proyecto
```

La ficha se crea privada (`public: false`) hasta revisión.

## Publicar

```powershell
publicarASTRO "mensaje del commit"
```

El script hace commit, push y observa el workflow de GitHub Pages.
