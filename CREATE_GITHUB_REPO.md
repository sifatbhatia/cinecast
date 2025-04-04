# Creating a GitHub Repository for CineCast

Follow these steps to create a new GitHub repository for your CineCast project:

## Step 1: Create a New Repository on GitHub

1. Go to [GitHub.com](https://github.com) and log in to your account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Enter "cinecast" as the repository name
4. Add a description: "Weather-based film recommendations for filmmakers"
5. Choose whether to make the repository public or private
   - **Public**: Anyone can view your code
   - **Private**: Only you and collaborators you invite can view your code
6. Do NOT initialize the repository with a README, .gitignore, or license (we'll add these files locally)
7. Click "Create repository"

## Step 2: Copy the Repository URL

After creating the repository, GitHub will show you instructions for pushing an existing repository. Copy the HTTPS URL of your repository:

```
https://github.com/yourusername/cinecast.git
```

## Step 3: Use the push-to-github.bat Script

1. Run the `push-to-github.bat` script in your project directory
2. When prompted, paste the repository URL you copied in Step 2
3. Follow the prompts to complete the push

## Alternative: Manual Git Commands

If you prefer to use Git commands manually, follow these steps:

1. Initialize a Git repository (if not already done):
   ```
   git init
   ```

2. Add all files to the repository:
   ```
   git add .
   ```

3. Commit the files:
   ```
   git commit -m "Initial commit: CineCast weather-based film recommendations app"
   ```

4. Add the remote repository:
   ```
   git remote add origin https://github.com/yourusername/cinecast.git
   ```

5. Push to GitHub:
   ```
   git push -u origin main
   ```
   
   Note: If your default branch is named "master" instead of "main", use:
   ```
   git push -u origin master
   ```

## Troubleshooting

- **Repository already exists**: If you get an error saying the repository already exists, you may need to remove the existing remote:
  ```
  git remote remove origin
  ```
  Then add the new remote and push again.

- **Authentication failed**: See the GITHUB_SETUP.md file for authentication help.

- **Branch name issues**: If you get an error about the branch name, you may need to rename your local branch:
  ```
  git branch -M main
  ```
  Then try pushing again. 