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

echo Adding remote repository...
git remote add origin %REPO_URL%

echo Pushing to GitHub...
git push -u origin main

echo If the push failed, you may need to:
echo 1. Create a repository on GitHub first
echo 2. Use a different branch name (e.g., master instead of main)
echo 3. Authenticate with GitHub

echo Done! 