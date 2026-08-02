param(
  [Parameter(Mandatory = $true)]
  [string]$Mensaje
)

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

if (-not (git status --porcelain)) {
  Write-Host "No hay cambios para publicar."
  exit 0
}

git add -A
git commit -m $Mensaje
git push

$sha = git rev-parse HEAD
$runId = $null

for ($i = 0; $i -lt 24 -and -not $runId; $i++) {
  Start-Sleep -Seconds 5

  $runs = gh run list `
    --branch main `
    --workflow deploy.yml `
    --limit 10 `
    --json databaseId,headSha |
    ConvertFrom-Json

  $runId = (
    $runs |
    Where-Object { $_.headSha -eq $sha } |
    Select-Object -First 1
  ).databaseId
}

if (-not $runId) {
  throw "No se encontr la ejecucin de GitHub Actions."
}

gh run watch $runId --exit-status
