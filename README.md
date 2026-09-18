# LeKilleRGallet.github.io

Sitio personal de Augusto Rico, construido con Astro y publicado con GitHub Pages.

## Qué contiene

- perfil profesional y académico;
- CV web y PDF;
- working papers y manuscritos con estado explícito;
- agenda de investigación;
- página para colaboración por proyecto;
- fichas de proyectos desde Astro Content Collections.

## Estructura

```text
src/
  components/
  content/proyectos/
  layouts/
  pages/
documentos/
  cv/main.tex
plantillas/proyecto/
scripts/
```

Los documentos LaTeX ubicados en `documentos/<slug>/main.tex` se compilan en GitHub Actions y se publican en `/pdf/<slug>.pdf`.

## Desarrollo

```bash
npm ci
npm run dev
npm run build
```

## Nuevo proyecto

Desde PowerShell:

```powershell
nuevoASTRO nombre-del-proyecto
```

o directamente:

```powershell
.\scripts\nuevo-proyecto.ps1 nombre-del-proyecto
```

Esto crea:

- `documentos/<slug>/main.tex`
- `src/content/proyectos/<slug>.md`

La ficha queda privada por defecto (`public: false`) hasta que se revise.

## Publicar

```powershell
publicarASTRO "mensaje del commit"
```

El script hace commit, push y observa el workflow de GitHub Pages.

## Regla editorial

Una entrada en `Investigación` debe indicar su estado real: working paper, manuscrito en desarrollo, proyecto, etc. Las ideas que todavía no son manuscritos deben aparecer en `/agenda/`, no como publicaciones terminadas.
