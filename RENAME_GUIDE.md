# Repository Rename Guide

## ✅ Code Updated

All code references have been changed from "angular-site" to "cinderellaschool":
- ✅ package.json (project name)
- ✅ angular.json (project configuration)
- ✅ All URLs updated
- ✅ GitHub Actions workflow
- ✅ Deployment scripts
- ✅ All documentation files

## 🔄 Steps to Rename GitHub Repository

### 1. Rename on GitHub (Web Interface)

1. **Go to your repository:**
   - https://github.com/Jametsu/angular-site

2. **Click Settings** (top right menu)

3. **Scroll to "Repository name" section**

4. **Change name:**
   - Old: `angular-site`
   - New: `cinderellaschool`

5. **Click "Rename"**

GitHub will show a warning that this will break existing links. That's OK - we've already updated everything!

### 2. Update Local Git Remote

After renaming on GitHub, update your local repository:

```bash
cd /Users/giulioforlani/site/angular-site
git remote set-url origin https://github.com/Jametsu/cinderellaschool.git
git remote -v  # Verify the change
```

### 3. Rename Local Folder (Optional but Recommended)

```bash
cd /Users/giulioforlani/site
mv angular-site cinderellaschool
cd cinderellaschool
```

### 4. Verify Everything Works

```bash
# Test git connection
git fetch

# Test build
npm run build

# Push to verify
git push origin main
```

## 🌐 New URLs

After renaming:

**GitHub Repository:**
- Old: https://github.com/Jametsu/angular-site
- New: https://github.com/Jametsu/cinderellaschool

**GitHub Pages:**
- Old: https://jametsu.github.io/angular-site/
- New: https://jametsu.github.io/cinderellaschool/

**Important:** GitHub will automatically redirect the old URL to the new one for a while!

## ⚠️ What Happens After Rename

### Automatic (GitHub Handles):
- ✅ Old URL redirects to new URL
- ✅ Git operations work with new URL
- ✅ GitHub Pages automatically updates
- ✅ Issues, PRs, Actions all preserved

### You Need to Update:
- External links to your repository
- Bookmarks
- Documentation on other sites
- Social media links

## 📋 Post-Rename Checklist

After renaming on GitHub:

- [ ] Update local git remote URL
- [ ] Rename local folder (optional)
- [ ] Test `git push`
- [ ] Verify GitHub Pages works at new URL
- [ ] Update Google Search Console (add new property)
- [ ] Update any external links

## 🔧 If You Encounter Issues

### "Remote not found"
```bash
git remote set-url origin https://github.com/Jametsu/cinderellaschool.git
```

### "GitHub Pages not working"
- Wait 2-3 minutes after rename
- Check Settings → Pages is still configured for gh-pages branch

### "Old URL still showing"
- GitHub redirects can take a few minutes
- Clear browser cache

## 🎉 Ready!

Once you rename on GitHub, everything will automatically work at:
**https://jametsu.github.io/cinderellaschool/**

GitHub's automatic redirects mean the old URL will still work temporarily!
