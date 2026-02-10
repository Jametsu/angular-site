# Angular Site with PrimeNG

A modern Angular application with PrimeNG components, featuring a product catalog and user directory backed by JSON files.

## Technology Stack

- **Angular 21.1** - Latest version with standalone components
- **PrimeNG** - Rich UI component library
- **Node.js 23.5.0** - Using nvm for version management
- **Backend** - Simple JSON files for data storage
- **Deployment** - GitHub Pages with angular-cli-ghpages

## Prerequisites

- Node.js 23.5.0 (managed via nvm)
- npm 10.9.2
- Git

## Setup Instructions

1. **Switch to Node 23.5.0 using nvm:**
   ```bash
   nvm use 23.5.0
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/`

## Project Structure

```
angular-site/
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   └── data.service.ts    # Service for loading JSON data
│   │   ├── app.ts                 # Main app component
│   │   ├── app.html               # App template with PrimeNG components
│   │   ├── app.scss               # App styles
│   │   ├── app.config.ts          # App configuration
│   │   └── app.routes.ts          # Routing configuration
│   ├── assets/
│   │   └── data/
│   │       ├── products.json      # Product catalog data
│   │       └── users.json         # User directory data
│   └── styles.scss                # Global styles
├── angular.json                   # Angular CLI configuration
└── package.json                   # Dependencies and scripts
```

## Features

- **Product Catalog**: Browse products with details, prices, and stock status
- **User Directory**: View user information with roles and join dates
- **Responsive Design**: Mobile-friendly layout with PrimeNG components
- **Data Management**: Simple JSON-based backend
- **Modern UI**: Clean interface using PrimeNG component library

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run build:prod` - Build with GitHub Pages base href
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages

## Deployment to GitHub Pages

### First Time Setup

1. **Initialize git repository (if not already):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a GitHub repository** and add it as remote:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

   This will:
   - Build the production version
   - Create a `gh-pages` branch
   - Push the build output to GitHub Pages

4. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Select `gh-pages` branch as source
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Subsequent Deployments

Simply run:
```bash
npm run deploy
```

## PrimeNG Components Used

- **TabView**: Tabbed interface for organizing content
- **Table**: Data tables for products and users
- **Card**: Content containers with headers
- **Button**: Action buttons with icons
- **Tag**: Status indicators for stock and roles

## Customization

### Adding New Data

Edit JSON files in `src/assets/data/`:
- `products.json` - Product catalog
- `users.json` - User directory

### Changing Theme

Update PrimeNG theme in `angular.json`:
```json
"styles": [
  "node_modules/primeng/resources/themes/YOUR_THEME/theme.css",
  ...
]
```

Available themes: lara-light-blue, lara-dark-blue, md-light-indigo, etc.

## Development Notes

- Node.js 23.5.0 shows warnings as it's an odd-numbered version (not LTS)
- The warnings are informational and don't affect functionality
- Consider using Node.js 22.x (LTS) for production environments

## License

MIT
