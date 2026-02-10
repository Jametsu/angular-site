# Quick Start Guide

## Prerequisites

Ensure you have the following installed:
- **nvm** (Node Version Manager)
- **Git**
- **GitHub account**

## Setup

### 1. Node.js Setup

Switch to Node.js 23.5.0 using nvm:

```bash
nvm use 23.5.0
```

If you don't have Node 23.5.0 installed:

```bash
nvm install 23.5.0
nvm use 23.5.0
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm start
```

Open your browser and navigate to `http://localhost:4200/`

## Available Commands

### Development
```bash
npm start                  # Start dev server
npm run watch             # Build in watch mode
```

### Building
```bash
npm run build             # Build for production
npm run build:prod        # Build with GitHub Pages base href
```

### Testing
```bash
npm test                  # Run tests
```

### Deployment
```bash
npm run deploy            # Deploy to GitHub Pages
./deploy.sh               # Use deployment script
```

## GitHub Pages Deployment

### First Time Setup

1. **Create a GitHub repository**
   
   Go to [GitHub](https://github.com/new) and create a new repository named `site` (or any name you prefer).

2. **Add remote and push**

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to GitHub Pages**

   ```bash
   npm run deploy
   ```

   Or use the deployment script:

   ```bash
   ./deploy.sh
   ```

4. **Enable GitHub Pages**

   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select the `gh-pages` branch
   - Click **Save**

   Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Subsequent Deployments

After making changes:

```bash
git add .
git commit -m "Your commit message"
git push
npm run deploy
```

Or simply:

```bash
./deploy.sh
```

## Project Structure

```
angular-site/
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   └── data.service.ts    # Data service
│   │   ├── app.ts                 # Main component
│   │   ├── app.html               # Template
│   │   ├── app.scss               # Styles
│   │   ├── app.config.ts          # App configuration
│   │   └── app.routes.ts          # Routes
│   ├── assets/
│   │   └── data/
│   │       ├── products.json      # Products data
│   │       └── users.json         # Users data
│   └── styles.scss                # Global styles
├── angular.json                   # Angular CLI config
├── package.json                   # Dependencies
├── deploy.sh                      # Deployment script
└── README.md                      # Documentation
```

## Customization

### Adding Data

Edit JSON files in `src/assets/data/`:
- `products.json` - Product catalog
- `users.json` - User directory

### Changing Theme

Update `src/app/app.config.ts`:

```typescript
import Aura from '@primeuix/themes/aura';        // Default
// import Material from '@primeuix/themes/material';
// import Lara from '@primeuix/themes/lara';
// import Nora from '@primeuix/themes/nora';

providePrimeNG({
  theme: {
    preset: Aura  // Change to your preferred theme
  }
})
```

### Modifying Styles

- **Global styles**: `src/styles.scss`
- **Component styles**: `src/app/app.scss`

## Troubleshooting

### Node Version Warnings

If you see warnings about Node 23.5.0 being unsupported, these are informational only. The app will still work. For production, consider using Node 22.x (LTS).

### Build Errors

If you encounter build errors:

```bash
# Clean node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Angular cache
rm -rf .angular/cache
```

### Port Already in Use

If port 4200 is already in use:

```bash
npm start -- --port 4201
```

## Support

For issues or questions:
- Check the [Angular documentation](https://angular.dev)
- Check the [PrimeNG documentation](https://primeng.org)
- Review the project's README.md

## License

MIT
