# 🚀 Quick Deploy Guide

## Option 1: Automated Script (Recommended)

```bash
./setup-deploy.sh
```

Follow the prompts!

## Option 2: Manual Steps (5 minutes)

### Step 1: Create GitHub Repository

1. Go to **https://github.com/new**
2. Repository name: `buildcalc.co`
3. Description: `Free construction material calculators`
4. Make it **Public**
5. **DON'T** check "Initialize with README" (we have files already)
6. Click **Create repository**

### Step 2: Push Code to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: Build Calculators"

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/buildcalc.co.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to **https://vercel.com/new**
2. Sign in with GitHub
3. Click **Import Git Repository**
4. Select your repository: `YOUR_USERNAME/buildcalc.co`
5. Framework: **Next.js** (auto-detected)
6. Click **Deploy**
7. Wait 2-3 minutes ☕

### Step 4: Configure Domain (You'll handle)

Once deployed:
1. Go to Vercel project > **Settings** > **Domains**
2. Add custom domain: `buildcalc.co`
3. Follow DNS configuration instructions
4. Add DNS records at your domain registrar

---

## What Each Platform Does

### GitHub
- Stores your code
- Tracks all changes (version control)
- Enables collaboration
- Backs up your work

### Vercel
- Hosts your website
- Provides free SSL certificate
- Global CDN for fast loading
- Auto-deploys when you push to GitHub

---

## Future Updates (After Setup)

```bash
# Make changes to your code
# Then:
git add .
git commit -m "Description of changes"
git push

# Vercel automatically deploys! 🎉
```

---

## Troubleshooting

**"Remote already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/buildcalc.co.git
```

**"Permission denied"**
- You need to authenticate with GitHub
- Use: `gh auth login` (if you have GitHub CLI)
- Or set up SSH keys: https://docs.github.com/en/authentication

**Need help?**
- GitHub docs: https://docs.github.com
- Vercel docs: https://vercel.com/docs

---

## URLs After Deployment

- **GitHub Repo**: `https://github.com/YOUR_USERNAME/buildcalc.co`
- **Vercel Project**: `https://vercel.com/YOUR_USERNAME/buildcalc-co`
- **Live Site**: `https://buildcalc.co` (after domain setup)
- **Vercel Preview**: `https://buildcalc-co.vercel.app` (immediate)

---

**Estimated Time**: 5 minutes total ⏱️

**Cost**: $0 (both are free!) 💰
