@echo off
echo Force pushing CineCast to GitHub (WARNING: This will overwrite remote content)...

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

echo Force pushing to GitHub (this will overwrite remote content)...
git push -f -u origin main

echo Done! 