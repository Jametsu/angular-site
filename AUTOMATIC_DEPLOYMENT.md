# Automatic Deployment with GitHub Actions

This project is configured with **GitHub Actions** for automatic deployment to GitHub Pages.

## 🚀 How It Works

Every time you push code to the `main` branch, GitHub automatically:

1. ✅ Checks out your code
2. ✅ Sets up Node.js 22.22.0
3. ✅ Installs dependencies
4. ✅ Builds your Angular app for production
5. ✅ Deploys to GitHub Pages
6. ✅ Your site is live at: https://jametsu.github.io/cinderellaschool/

## ⚡ Workflow Trigger

The deployment runs automatically when:
- You push code to the `main` branch
- You manually trigger it from GitHub Actions tab

## 📁 Workflow File

Location: `.github/workflows/deploy.yml`

```yaml
on:
  push:
    branches: [ main ]  # Triggers on push to main
  workflow_dispatch:    # Allows manual trigger
```

## 🔍 Monitoring Deployments

### View Workflow Status

1. Go to your repository: https://github.com/Jametsu/cinderellaschool
2. Click the **Actions** tab
3. You'll see all deployment runs with status:
   - ✅ Green checkmark = Success
   - ❌ Red X = Failed
   - 🟡 Yellow circle = In progress

### View Live Deployment

1. Go to: https://github.com/Jametsu/cinderellaschool/deployments
2. See all deployment history
3. Click on a deployment to see details

## 💻 Development Workflow

### Option 1: Automatic Deployment (Recommended)

Simply push your changes:

```bash
# Make your code changes
git add .
git commit -m "Your commit message"
git push origin main

# GitHub Actions automatically builds and deploys! 🎉
```

Wait 1-2 minutes, then visit: https://jametsu.github.io/cinderellaschool/

### Option 2: Manual Deployment

If you want to deploy manually without pushing:

```bash
npm run deploy
```

This uses `angular-cli-ghpages` directly.

## 🔧 Testing Before Deployment

Always test locally before pushing:

```bash
# Start development server
npm start
# Visit http://localhost:4200/

# Or test production build locally
npm run build:prod
npx http-server dist/cinderellaschool/browser -p 8080
# Visit http://localhost:8080/cinderellaschool/
```

## 📊 Deployment Timing

- **Trigger**: Instant when you push
- **Build time**: ~30-60 seconds
- **Deploy time**: ~10-20 seconds
- **DNS propagation**: Usually instant, max 1-2 minutes
- **Total**: ~1-2 minutes from push to live

## 🎯 Benefits of GitHub Actions

✅ **Automatic** - No manual deployment needed  
✅ **Free** - Unlimited for public repositories  
✅ **Fast** - Deploys in 1-2 minutes  
✅ **Reliable** - GitHub's infrastructure  
✅ **History** - Track all deployments  
✅ **Rollback** - Easy to revert if needed  
✅ **Branch protection** - Only deploy from main  

## 🔒 Permissions

The workflow has these permissions:
- `contents: write` - To read code and write to gh-pages branch
- `pages: write` - To deploy to GitHub Pages
- `id-token: write` - For secure authentication

These are safe and standard for GitHub Pages deployment.

## 🐛 Troubleshooting

### Deployment Failed

1. Check the Actions tab for error details
2. Common issues:
   - Build errors (fix code and push again)
   - Missing dependencies (update package.json)
   - Node version mismatch (already set to 22.22.0)

### Site Not Updating

1. Check if workflow ran successfully in Actions tab
2. Wait 2-3 minutes for CDN cache to clear
3. Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

### Need to Disable Auto-Deploy

Delete or rename the workflow file:

```bash
git rm .github/workflows/deploy.yml
git commit -m "Disable auto-deployment"
git push origin main
```

## 🎨 Customizing the Workflow

Edit `.github/workflows/deploy.yml` to customize:

### Deploy on Different Branch

```yaml
on:
  push:
    branches: [ develop ]  # Change to your branch
```

### Add Tests Before Deploy

```yaml
- name: Run tests
  run: npm test

- name: Build Angular application
  run: npm run build:prod
```

### Deploy on Pull Request

```yaml
on:
  pull_request:
    branches: [ main ]
```

### Add Notifications

Use GitHub Actions Slack/Discord integrations for deployment notifications.

## 📈 Workflow Status Badge

Add this to your README.md to show build status:

```markdown
![Deploy Status](https://github.com/Jametsu/cinderellaschool/actions/workflows/deploy.yml/badge.svg)
```

Result: ![Deploy Status](https://github.com/Jametsu/cinderellaschool/actions/workflows/deploy.yml/badge.svg)

## 🎉 Summary

You now have a **professional CI/CD pipeline**! 

Every code change you push automatically:
- ✅ Builds
- ✅ Tests (if you add them)
- ✅ Deploys
- ✅ Goes live

Just code, commit, push, and relax! ☕
