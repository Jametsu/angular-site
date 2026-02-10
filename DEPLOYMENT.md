# GitHub Pages Deployment Instructions

This guide walks you through deploying your Angular site to GitHub Pages.

## Prerequisites

- Git installed and configured
- GitHub account
- The project is already initialized with Git (✓)
- Node.js 23.5.0 is active via nvm (✓)

## Step-by-Step Deployment

### Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Repository name: `site` (or your preferred name)
3. Description: "Angular 21 + PrimeNG 21 website"
4. Choose: Public or Private
5. **Do NOT initialize with README, .gitignore, or license** (we already have these)
6. Click **Create repository**

### Step 2: Connect Your Local Repository to GitHub

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/site.git
git branch -M main
git push -u origin main
```

Example:
```bash
git remote add origin https://github.com/johndoe/site.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to GitHub Pages

Run the deployment command:

```bash
npm run deploy
```

This will:
1. Build your application with the correct base href
2. Create a `gh-pages` branch
3. Push the built files to that branch

**Note**: The first deployment may take a few minutes.

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

### Step 5: Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/site/
```

**Note**: It may take 1-2 minutes for the site to become available after the first deployment.

## Alternative: Using the Deployment Script

You can use the provided deployment script for automated deployment:

```bash
./deploy.sh
```

This script will:
- Build the production version
- Deploy to GitHub Pages
- Show success/error messages

## Subsequent Deployments

After making changes to your site:

```bash
# 1. Stage and commit your changes
git add .
git commit -m "Your commit message"

# 2. Push to GitHub (optional but recommended)
git push

# 3. Deploy to GitHub Pages
npm run deploy
```

Or simply use the script:
```bash
./deploy.sh
```

## Updating Base Href

If you used a different repository name than `site`, update the base href:

1. Open `package.json`
2. Find the `build:prod` and `deploy` scripts
3. Change `/site/` to `/YOUR_REPO_NAME/`

Example for repository named `my-website`:
```json
"build:prod": "ng build --configuration production --base-href /my-website/",
"deploy": "ng deploy --base-href=/my-website/"
```

## Troubleshooting

### Issue: GitHub Pages Not Working

**Solution**: Make sure GitHub Pages is enabled and the `gh-pages` branch is selected.

### Issue: 404 Error on Page Refresh

**Solution**: This is normal for Angular apps on GitHub Pages. The app uses client-side routing. You can add a 404.html that redirects to index.html, or use hash-based routing.

To use hash-based routing, update `app.config.ts`:

```typescript
import { provideRouter, withHashLocation } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    // ... other providers
  ]
};
```

### Issue: Assets Not Loading

**Solution**: Check that the base href is correctly set in the build:prod and deploy scripts.

### Issue: Deploy Command Not Found

**Solution**: Make sure `angular-cli-ghpages` is installed:

```bash
npm install --save-dev angular-cli-ghpages
```

### Issue: Permission Denied

**Solution**: You may need to authenticate with GitHub. Use SSH or HTTPS with a personal access token.

## Custom Domain (Optional)

To use a custom domain:

1. In your repository, go to Settings → Pages
2. Under "Custom domain", enter your domain
3. Add a CNAME record in your domain's DNS settings pointing to `YOUR_USERNAME.github.io`
4. Wait for DNS propagation (up to 24 hours)

## Automatic Deployment with GitHub Actions (Optional)

For automatic deployment on every push, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '22'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build:prod
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/cinderellaschool/browser
```

## Monitoring Deployment

You can monitor the deployment status:

1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. You'll see the deployment workflow (if using GitHub Actions)
4. Or check the **Environments** section to see deployment history

## Rolling Back

To roll back to a previous version:

```bash
# Find the commit hash you want to roll back to
git log --oneline

# Reset to that commit
git reset --hard COMMIT_HASH

# Force push to gh-pages
git push origin main --force

# Redeploy
npm run deploy
```

## Security Considerations

- Never commit sensitive data (API keys, passwords)
- Use environment variables for configuration
- Review the `.gitignore` file to ensure secrets are excluded
- Consider using GitHub Secrets for sensitive configuration

## Support

If you encounter issues:

1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the [angular-cli-ghpages documentation](https://github.com/angular-schule/angular-cli-ghpages)
3. Check the GitHub repository's Issues page

## Summary

✅ Repository created on GitHub  
✅ Code pushed to GitHub  
✅ Deployed to GitHub Pages  
✅ GitHub Pages enabled  
✅ Site accessible at https://YOUR_USERNAME.github.io/site/

**Congratulations! Your Angular site is now live on GitHub Pages! 🎉**
