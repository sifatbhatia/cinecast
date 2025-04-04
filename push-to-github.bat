@echo off
echo Pushing CineCast to GitHub...

echo Initializing Git repository (if not already initialized)...
git init

echo Adding all files to Git...
git add .

echo Creating initial commit...
git commit -m "Initial commit: CineCast weather-based film recommendations app"

echo Setting up remote repository...
echo Please enter your GitHub repository URL (e.g., https://github.com/username/cinecast.git):
set /p REPO_URL=

echo Checking if remote already exists...
git remote -v | findstr "origin" > nul
if %ERRORLEVEL% EQU 0 (
    echo Remote 'origin' already exists. Removing it...
    git remote remove origin
)

echo Adding remote repository...
git remote add origin %REPO_URL%

echo Checking if remote has content...
git ls-remote --heads origin main > nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo Remote repository has content. You have two options:
    echo 1. Pull the remote changes first (recommended if you want to keep the remote content)
    echo 2. Force push your local content (WARNING: this will overwrite the remote content)
    echo.
    echo Enter 1 to pull first, or 2 to force push:
    set /p PUSH_OPTION=
    
    if "%PUSH_OPTION%"=="1" (
        echo Pulling remote changes...
        git pull origin main --allow-unrelated-histories
        echo Now pushing your changes...
        git push -u origin main
    ) else (
        echo Force pushing your changes (this will overwrite remote content)...
        git push -f -u origin main
    )
) else (
    echo Pushing to GitHub...
    git push -u origin main
)

echo If the push failed, you may need to:
echo 1. Create a repository on GitHub first
echo 2. Use a different branch name (e.g., master instead of main)
echo 3. Authenticate with GitHub

echo Done! 