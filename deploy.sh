#!/bin/bash

# GitHub Pages Deployment Script for Angular Site

echo "🚀 Starting GitHub Pages deployment..."

# Build the production version
echo "📦 Building production version..."
npm run build:prod

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🎉 Your site will be available at: https://YOUR_USERNAME.github.io/site/"
else
    echo "❌ Deployment failed!"
    exit 1
fi
