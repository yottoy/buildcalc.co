#!/bin/bash

# Build Calculators - Automated Deployment Setup
# This script helps you set up GitHub and Vercel in minutes

set -e

echo "🚀 Build Calculators - Deployment Setup"
echo "========================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: Build Calculators with 23 calculators"
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

echo ""
echo "📋 Next Steps:"
echo ""
echo "1️⃣  CREATE GITHUB REPOSITORY"
echo "   - Go to: https://github.com/new"
echo "   - Repository name: buildcalc.co"
echo "   - Description: Free construction material calculators"
echo "   - Make it Public"
echo "   - DON'T initialize with README (we already have files)"
echo "   - Click 'Create repository'"
echo ""
echo "2️⃣  PUSH TO GITHUB"
read -p "   Enter your GitHub username: " github_username
echo ""
echo "   Run these commands:"
echo "   git remote add origin https://github.com/$github_username/buildcalc.co.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3️⃣  DEPLOY TO VERCEL"
echo "   - Go to: https://vercel.com/new"
echo "   - Click 'Import Git Repository'"
echo "   - Select: $github_username/buildcalc.co"
echo "   - Framework: Next.js (auto-detected)"
echo "   - Click 'Deploy'"
echo "   - Wait 2-3 minutes for deployment"
echo ""
echo "4️⃣  CONFIGURE DOMAIN (You'll handle this)"
echo "   - In Vercel project settings > Domains"
echo "   - Add: buildcalc.co"
echo "   - Follow DNS instructions"
echo ""
echo "✨ That's it! Your site will be live at buildcalc.co"
echo ""

# Ask if user wants to proceed with GitHub setup
read -p "Do you want to set up the GitHub remote now? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    read -p "Enter your GitHub username: " github_username
    git remote add origin "https://github.com/$github_username/buildcalc.co.git" 2>/dev/null || echo "Remote already exists"
    git branch -M main
    echo ""
    echo "✅ GitHub remote configured!"
    echo "Now run: git push -u origin main"
fi
