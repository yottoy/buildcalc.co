# Redirect Validation Fix Guide

**Date:** January 31, 2026  
**Issue:** Page redirect validation failing for search engines  
**Status:** Ready for deployment

---

## Problem Identified

Your site is experiencing redirect validation failures:

1. **Failed validation:** `https://buildcalc.co/concrete-cost-calculator`
2. **Pending validation:** `http://buildcalc.co/`

### Root Cause

The issue occurs when:
- Non-www domain (`buildcalc.co`) redirects to www (`www.buildcalc.co`)
- The redirect is happening at DNS/hosting level but not properly configured in the application
- Search engines see inconsistent redirect codes (307 temporary vs 301 permanent)
- HTTP to HTTPS redirects are not properly enforced

---

## Fixes Applied

### 1. Created `middleware.ts` (Application-Level Redirects)

**Location:** `/middleware.ts` (root level)

**What it does:**
- Forces 301 permanent redirect from `buildcalc.co` → `www.buildcalc.co`
- Enforces HTTPS for all production traffic
- Returns proper HTTP status codes for SEO

**Key features:**
```typescript
// 301 Permanent redirect (not 307 temporary)
if (hostname === 'buildcalc.co') {
  return NextResponse.redirect(url, { status: 301 });
}
```

### 2. Created `vercel.json` (Platform-Level Redirects)

**Location:** `/vercel.json` (root level)

**What it does:**
- Ensures Vercel handles www redirect at the edge (fastest)
- Sets proper security headers
- Provides backup if middleware doesn't catch the redirect

**Key features:**
```json
{
  "redirects": [
    {
      "source": "/(.*)",
      "has": [{ "type": "host", "value": "buildcalc.co" }],
      "destination": "https://www.buildcalc.co/$1",
      "permanent": true
    }
  ]
}
```

### 3. Updated `next.config.ts` (Security Headers)

**What was added:**
- Security headers for all pages
- HSTS (HTTP Strict Transport Security)
- X-Frame-Options for clickjacking protection
- Content Security headers

---

## Why This Fixes the Problem

### Before (Problem):
1. User/Bot visits `http://buildcalc.co/concrete-cost-calculator`
2. DNS redirects to `https://buildcalc.co/...` (sometimes)
3. Vercel redirects to `https://www.buildcalc.co/...` (307 temporary)
4. **Issue:** Multiple redirects, wrong status code, inconsistent behavior

### After (Fixed):
1. User/Bot visits `http://buildcalc.co/concrete-cost-calculator`
2. Vercel/Middleware immediately redirects to `https://www.buildcalc.co/concrete-cost-calculator` (301 permanent)
3. **Result:** Single redirect, correct status code, consistent behavior

---

## Testing the Fix

### Local Testing

Before deploying, test the redirect logic locally:

```bash
# Build the project
npm run build

# Start production server
npm run start

# Test in another terminal
curl -I http://localhost:3000
```

### Post-Deployment Testing

After deploying to Vercel, run these tests:

#### 1. Test Non-WWW → WWW Redirect
```bash
curl -I http://buildcalc.co/concrete-cost-calculator
```

**Expected output:**
```
HTTP/1.1 301 Moved Permanently
Location: https://www.buildcalc.co/concrete-cost-calculator
```

#### 2. Test HTTP → HTTPS Redirect
```bash
curl -I http://www.buildcalc.co/
```

**Expected output:**
```
HTTP/1.1 301 Moved Permanently
Location: https://www.buildcalc.co/
```

#### 3. Verify Final URL Works
```bash
curl -I https://www.buildcalc.co/concrete-cost-calculator
```

**Expected output:**
```
HTTP/2 200 OK
```

#### 4. Test All Redirect Combinations

```bash
# All should redirect to https://www.buildcalc.co/
curl -I http://buildcalc.co/ | grep -i location
curl -I https://buildcalc.co/ | grep -i location
curl -I http://www.buildcalc.co/ | grep -i location

# This should return 200 OK
curl -I https://www.buildcalc.co/
```

---

## Deployment Steps

### Step 1: Commit Changes

```bash
# Check what's changed
git status

# Add new files
git add middleware.ts vercel.json

# Add modified files
git add next.config.ts

# Commit with descriptive message
git commit -m "Fix: Add proper 301 redirects for www and HTTPS enforcement

- Add middleware.ts for application-level redirects
- Add vercel.json for platform-level www redirect
- Update next.config.ts with security headers
- Fixes redirect validation failures in search engines"
```

### Step 2: Push to GitHub

```bash
git push origin main
```

### Step 3: Verify Vercel Auto-Deploy

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Find your `buildcalc.co` project
3. Wait for deployment to complete (~2-3 minutes)
4. Check deployment logs for any errors

### Step 4: Test Redirects (Critical!)

Run all the curl commands from the "Testing the Fix" section above.

**All non-www and HTTP URLs should redirect to `https://www.buildcalc.co/`**

---

## Vercel Domain Configuration

### Important: Check Your Vercel Domain Settings

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Ensure you have these domains configured:

   - **Primary Domain:** `www.buildcalc.co`
   - **Redirect Domain:** `buildcalc.co` → `www.buildcalc.co`

3. If `buildcalc.co` shows a redirect icon (↗️), you're good!
4. If not, click "Edit" on `buildcalc.co` and select "Redirect to www.buildcalc.co"

---

## Search Engine Re-Validation

### Google Search Console

After deployment, request re-validation:

#### For `https://buildcalc.co/concrete-cost-calculator`:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Go to URL Inspection tool
3. Enter: `https://buildcalc.co/concrete-cost-calculator`
4. Click "Test Live URL"
5. **Expected result:** Should show redirect to `https://www.buildcalc.co/concrete-cost-calculator`
6. The www version should validate successfully

#### For `http://buildcalc.co/`:

1. URL Inspection tool
2. Enter: `http://buildcalc.co/`
3. Click "Test Live URL"
4. **Expected result:** Should show redirect to `https://www.buildcalc.co/`
5. Request indexing for the www version

#### Request Indexing for All Calculator Pages

Run this for each calculator page:

```bash
# Example URLs to request indexing for:
https://www.buildcalc.co/
https://www.buildcalc.co/concrete-cost-calculator
https://www.buildcalc.co/concrete-driveway-calculator
https://www.buildcalc.co/asphalt-calculator
# ... (all 23 calculators)
```

---

## Monitoring

### Week 1: Redirect Validation

**Check daily:**

1. **Google Search Console → Coverage**
   - "Page with redirect" should decrease
   - "Indexed" should increase

2. **Test redirect chains:**
   ```bash
   curl -IL http://buildcalc.co/concrete-cost-calculator
   ```
   Should show only ONE redirect (301)

### Week 2-4: Indexing Status

**Check weekly:**

1. **GSC Coverage Report**
   - All calculator pages should be "Indexed"
   - No "redirect" or "not found" errors

2. **GSC Performance Report**
   - Impressions should increase
   - Clicks should increase
   - Average position may fluctuate initially

---

## Expected Timeline

| Timeframe | Expected Results |
|-----------|-----------------|
| **Immediate** | Redirects working properly (301 status) |
| **24-48 hours** | Google re-crawls and validates redirects |
| **3-7 days** | Pages move from "redirect" to "indexed" |
| **1-2 weeks** | All pages properly indexed |
| **2-4 weeks** | Rankings stabilize and improve |

---

## Troubleshooting

### Issue: Still Seeing 307 Redirects

**Solution:**
1. Check Vercel domain settings (see "Vercel Domain Configuration" above)
2. Ensure both `middleware.ts` and `vercel.json` are deployed
3. Clear Vercel cache: `vercel env pull` and redeploy

### Issue: Redirect Loop

**Solution:**
1. Check if you have multiple www → non-www redirects configured
2. Remove any conflicting redirect rules in DNS/Vercel settings
3. Ensure `middleware.ts` only redirects non-www to www (not both ways)

### Issue: Pages Still Not Indexing

**Solution:**
1. Verify robots.txt allows crawling: `curl https://www.buildcalc.co/robots.txt`
2. Check canonical tags point to www version
3. Submit sitemap manually in GSC: `https://www.buildcalc.co/sitemap.xml`
4. Request indexing for individual pages

---

## Files Changed

### New Files:
- ✅ `middleware.ts` - Application-level redirects
- ✅ `vercel.json` - Platform-level configuration

### Modified Files:
- ✅ `next.config.ts` - Added security headers

### No Changes Needed:
- All calculator `layout.tsx` files already have correct www URLs ✅
- `sitemap.ts` already uses www URLs ✅
- `robots.ts` already references www sitemap ✅

---

## Verification Checklist

After deployment, check these items:

- [ ] `curl -I http://buildcalc.co/` returns 301 redirect
- [ ] `curl -I https://buildcalc.co/` returns 301 redirect
- [ ] `curl -I http://www.buildcalc.co/` returns 301 to HTTPS
- [ ] `curl -I https://www.buildcalc.co/` returns 200 OK
- [ ] Google Search Console shows proper redirect
- [ ] Test 5+ calculator pages for proper redirects
- [ ] Sitemap accessible at `https://www.buildcalc.co/sitemap.xml`
- [ ] All sitemap URLs use `https://www.buildcalc.co/`
- [ ] Request indexing for failed validation pages

---

## Support Resources

- **Vercel Redirects Docs:** https://vercel.com/docs/edge-network/redirects
- **Next.js Middleware Docs:** https://nextjs.org/docs/app/building-your-application/routing/middleware
- **Google Search Console:** https://search.google.com/search-console
- **Test Redirects:** Use `curl -IL <url>` to see full redirect chain

---

**Deployment Status:** ⏳ READY TO DEPLOY  
**Review this document:** Before running `git push`  
**Test after deploy:** Run all curl commands in "Testing the Fix" section

---

## Quick Commands Reference

```bash
# Deploy
git add middleware.ts vercel.json next.config.ts
git commit -m "Fix: Add 301 redirects for www and HTTPS"
git push origin main

# Test after deploy (wait 2-3 mins for Vercel)
curl -I http://buildcalc.co/concrete-cost-calculator
curl -I https://buildcalc.co/
curl -I https://www.buildcalc.co/

# Check redirect chain
curl -IL http://buildcalc.co/ | grep -E "HTTP|Location"
```

All commands should show 301 redirects leading to `https://www.buildcalc.co/`
