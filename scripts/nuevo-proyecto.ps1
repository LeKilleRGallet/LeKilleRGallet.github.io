param(
  [Parameter(Mandatory = $true)]
  [ValidatePattern("^[a-z0-9]+(?:-[a-z0-9]+)*$")]
  [string]$Slug
)

$root = Split-Path -Parent $PSScriptRoot
$documentoDestino = Join-Path $root "documentos\$Slug"
$fichaDestino = Join-Path $root "src\content\proyectos\$Slug.md"

if ((Test-Path $documentoDestino) -or (Test-Path $fichaDestino)) {
  throw "Ya existe un proyecto con el slug '$Slug'."
}

New-Item -ItemType Directory -Force $documentoDestino | Out-Null

Copy-Item `
  (Join-Path $root "plantillas\proyecto\main.tex") `
  (Join-Path $documentoDestino "main.tex")

$ficha = Get-Content `
  (Join-Path $root "plantillas\proyecto\ficha.md") `
  -Raw

$ficha = $ficha.Replace("slug-del-proyecto", $Slug)

Set-Content `
  -Path $fichaDestino `
  -Value $ficha `
  -Encoding UTF8

Write-Host ""
Write-Host "Proyecto creado:"
Write-Host "  documentos\$Slug\main.tex"
Write-Host "  src\content\proyectos\$Slug.md"
