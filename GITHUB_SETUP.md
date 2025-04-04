# GitHub Setup Guide

This guide will help you set up GitHub authentication for pushing your CineCast project to GitHub.

## Option 1: Using HTTPS with Personal Access Token (Recommended)

1. **Create a Personal Access Token on GitHub**:
   - Go to GitHub.com and log in
   - Click on your profile picture in the top right corner
   - Select "Settings"
   - Scroll down and click on "Developer settings" in the left sidebar
   - Click on "Personal access tokens" and then "Tokens (classic)"
   - Click "Generate new token" and then "Generate new token (classic)"
   - Give your token a descriptive name (e.g., "CineCast Development")
   - Select the following scopes:
     - `repo` (all)
     - `workflow`
   - Click "Generate token"
   - **IMPORTANT**: Copy the token immediately and store it securely. You won't be able to see it again.

2. **Use the token when pushing to GitHub**:
   - When prompted for your password, use the personal access token instead
   - You can also store the credentials to avoid entering them each time:
     ```
     git config --global credential.helper store
     ```

## Option 2: Using SSH

1. **Generate an SSH key** (if you don't already have one):
   ```
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   - Press Enter to accept the default file location
   - Enter a secure passphrase when prompted (or press Enter for no passphrase)

2. **Add the SSH key to your GitHub account**:
   - Copy your public key:
     ```
     cat ~/.ssh/id_ed25519.pub
     ```
   - Go to GitHub.com and log in
   - Click on your profile picture in the top right corner
   - Select "Settings"
   - Click on "SSH and GPG keys" in the left sidebar
   - Click "New SSH key"
   - Give your key a descriptive title
   - Paste your public key into the "Key" field
   - Click "Add SSH key"

3. **Change your remote URL to use SSH**:
   ```
   git remote set-url origin git@github.com:username/cinecast.git
   ```

## Troubleshooting

- **Authentication failed**: Make sure you're using the correct username and password/token
- **Permission denied**: Ensure you have the necessary permissions on the repository
- **Repository not found**: Check that the repository URL is correct and that you have access to it

## Additional Resources

- [GitHub Authentication Documentation](https://docs.github.com/en/authentication)
- [Creating a Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [Adding a New SSH Key to Your GitHub Account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) 