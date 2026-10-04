# Launch one Claude cloud session per generation batch.
#
#   powershell -ExecutionPolicy Bypass -File gen\launch_sessions.ps1 -From 8 -To 17
#
# `claude --cloud` refuses to run without an interactive terminal, so each
# session is started in its own console window. Sessions share your account's
# rate limits: launch in waves of about 10 rather than all 20 at once.
param([int]$From = 8, [int]$To = 17, [int]$DelaySeconds = 8)

$repo = Split-Path -Parent $PSScriptRoot
for ($i = $From; $i -le $To; $i++) {
    $batch = "gen/batches/batch_{0:D2}.json" -f $i
    if (-not (Test-Path (Join-Path $repo $batch))) { Write-Warning "missing $batch"; continue }
    $task = "Follow gen/BRIEF.md for $batch"
    Start-Process powershell -WorkingDirectory $repo `
        -ArgumentList '-NoExit', '-Command', "claude --cloud `"$task`""
    Write-Host "launched $batch"
    Start-Sleep -Seconds $DelaySeconds
}
