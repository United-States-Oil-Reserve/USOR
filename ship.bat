@echo off
set /p name="Enter Git Username: "
set /p email="Enter Git Email: "
set /p url="Enter Git Repo URL: "

powershell -ExecutionPolicy Bypass -File .\git-push.ps1 -UserName "%name%" -UserEmail "%email%" -RepoUrl "%url%"
pause
