@echo off
echo Pulling and pushing CineCast to GitHub...

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

echo Pulling remote changes...
git pull origin main --allow-unrelated-histories

echo Now pushing your changes...
git push -u origin main

echo Done! 