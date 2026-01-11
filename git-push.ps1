# git-sync.ps1
# Usage: ./git-sync.ps1 -UserName "John Doe" -UserEmail "john@example.com" -RepoUrl "https://github.com/user/repo.git"

param (
    [Parameter(Mandatory=$true)]
    [string]$UserName,
    
    [Parameter(Mandatory=$true)]
    [string]$UserEmail,
    
    [Parameter(Mandatory=$true)]
    [string]$RepoUrl,

    [string]$CommitMessage = "Build: Update USO-International repository"
)

$ErrorActionPreference = "Stop"

try {
    Write-Host "--- USO-International Git Sync ---" -ForegroundColor Green

    # 1. Local Git Configuration
    Write-Host "[1/4] Configuring local user: $UserName <$UserEmail>" -ForegroundColor Cyan
    git config user.name "$UserName"
    git config user.email "$UserEmail"

    # 2. Remote Configuration
    $remoteName = "origin"
    Write-Host "[2/4] Setting remote '$remoteName' to: $RepoUrl" -ForegroundColor Cyan
    
    # Check if remote exists
    $remotes = git remote
    if ($remotes -contains $remoteName) {
        git remote set-url $remoteName $RepoUrl
    } else {
        git remote add $remoteName $RepoUrl
    }

    # 3. Stage and Commit
    Write-Host "[3/4] Staging and committing changes..." -ForegroundColor Cyan
    git add -A
    
    # Check if there are changes to commit
    $status = git status --porcelain
    if ($null -ne $status -and $status.Length -gt 0) {
        git commit -m "$CommitMessage"
        Write-Host "Changes committed." -ForegroundColor Gray
    } else {
        Write-Host "No changes to commit." -ForegroundColor Yellow
    }

    # 4. Push
    $currentBranch = git branch --show-current
    if ([string]::IsNullOrWhiteSpace($currentBranch)) {
        $currentBranch = "main" # Fallback
    }
    
    Write-Host "[4/4] Pushing to $remoteName/$currentBranch..." -ForegroundColor Cyan
    git push $remoteName $currentBranch --force

    Write-Host "`nSUCCESS: Changes pushed to $RepoUrl" -ForegroundColor Green
}
catch {
    Write-Host "`nERROR: Git sync failed." -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}
