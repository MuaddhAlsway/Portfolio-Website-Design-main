#!/bin/bash

# Cloudflare Pages Deployment Script
# Usage: ./deploy.sh

echo "🚀 Starting Cloudflare Pages Deployment..."
echo ""

# Check if git is clean
if ! git diff-index --quiet HEAD --; then
    echo "❌ Error: Uncommitted changes detected"
    echo "Please commit your changes first:"
    echo "  git add ."
    echo "  git commit -m 'Your message'"
    exit 1
fi

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build successful"
echo ""

# Check if Wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "📥 Installing Wrangler CLI..."
    npm install -g wrangler
fi

# Deploy to Cloudflare Pages
echo "🌐 Deploying to Cloudflare Pages..."
wrangler pages deploy dist --project-name=mustudiolab-portfolio

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo "🎉 Your site is live at: https://mustudiolab.pages.dev"
else
    echo "❌ Deployment failed"
    exit 1
fi
