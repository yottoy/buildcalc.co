# Quick Deploy Checklist - Redirect Fix

## ✅ Changes Made

1. **Created `middleware.ts`**
   - Handles www redirect (301 permanent)
   - Enforces HTTPS in production
   - Excludes static files for performance

2. **Created `vercel.json`**
   - Platform-level www redirect
   - Security headers (HSTS, XSS protection, etc.)
   - Backup for middleware

3. **Updated `next.config.ts`**
   - Added security headers to all pages
   - Properly formatted for Next.js 15

## 🚀 Deploy Now

```bash
# 1. Review changes
git status

# 2. Add all files
git add middleware.ts vercel.json next.config.ts REDIRECT_FIX_GUIDE.md QUICK_DEPLOY_REDIRECT_FIX.md

# 3. Commit with clear message
git commit -m "Fix: Add 301 redirects for SEO validation

- Add middleware.ts for www redirect (301 permanent)
- Add vercel.json for platform-level redirects
- Update next.config.ts with security headers
- Fixes Google Search Console redirect validation failures"

# 4. Push to deploy (Vercel will auto-deploy)
git push origin main
```

## 🧪 Test After Deploy (Wait 2-3 Minutes)

```bash
# Test 1: Non-www should redirect to www
curl -I http://buildcalc.co/concrete-cost-calculator

# Expected: HTTP/1.1 301 Moved Permanently
# Location: https://www.buildcalc.co/concrete-cost-calculator

# Test 2: HTTPS non-www should redirect
curl -I https://buildcalc.co/

# Expected: HTTP/1.1 301 Moved Permanently
# Location: https://www.buildcalc.co/

# Test 3: Final URL should work
curl -I https://www.buildcalc.co/

# Expected: HTTP/2 200 OK

# Test 4: See full redirect chain
curl -IL http://buildcalc.co/ | grep -E "HTTP|Location"

# Expected: ONE 301 redirect to https://www.buildcalc.co/
```

## 📊 Google Search Console Actions

### 1. Test Failed URL
1. Go to https://search.google.com/search-console
2. URL Inspection → Enter: `https://buildcalc.co/concrete-cost-calculator`
3. Click "Test Live URL"
4. Should show: Redirect to `https://www.buildcalc.co/concrete-cost-calculator`

### 2. Request Indexing for www Version
1. URL Inspection → Enter: `https://www.buildcalc.co/concrete-cost-calculator`
2. Click "Test Live URL"
3. Should show: 200 OK
4. Click "Request Indexing"

### 3. Repeat for Homepage
1. Test: `http://buildcalc.co/`
2. Should redirect to: `https://www.buildcalc.co/`
3. Request indexing for: `https://www.buildcalc.co/`

## ⏱️ Timeline

- **Immediate:** Redirects working (test with curl)
- **24-48 hours:** Google validates redirects
- **3-7 days:** Pages move to "Indexed" status
- **1-2 weeks:** Full SEO impact

## 🔍 Monitoring

**Daily (Week 1):**
- Check GSC → Coverage → "Page with redirect" (should decrease)
- Run curl tests to verify redirects still working

**Weekly (Weeks 2-4):**
- GSC → Performance → Track impressions/clicks
- All 23 calculator pages should be indexed

## 📝 What Changed

### The Problem:
- `buildcalc.co` was redirecting with 307 (temporary) instead of 301 (permanent)
- Search engines couldn't validate the redirect properly
- HTTP wasn't properly redirecting to HTTPS

### The Solution:
- **middleware.ts**: Application-level 301 redirects
- **vercel.json**: Platform-level redirect configuration
- **next.config.ts**: Security headers for all pages

### Why It Works:
- 301 status code tells search engines "this redirect is permanent"
- Vercel handles redirect at edge (fastest, before app runs)
- Middleware provides backup if edge redirect doesn't fire
- All URLs now consistently point to `https://www.buildcalc.co`

## ❓ Troubleshooting

**Q: Still seeing 307 redirects?**
A: Check Vercel dashboard → Settings → Domains → Set www as primary

**Q: Getting redirect loops?**
A: Check DNS settings - should only redirect non-www → www (not both ways)

**Q: Pages still not indexing?**
A: Wait 7 days, then request indexing manually in GSC

---

**Status:** ✅ Ready to Deploy
**Files:** 3 new/modified
**Breaking Changes:** None
**Rollback:** Delete middleware.ts and vercel.json if issues occur
