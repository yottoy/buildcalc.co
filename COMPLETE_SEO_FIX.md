# Complete SEO Fixes - Final Deployment

**Date:** January 31, 2026  
**Status:** Ready for deployment

---

## Issues Identified and Fixed

### 1. ❌ Pages with Redirect Errors

**Affected URLs:**
- `https://buildcalc.co/concrete-steps-calculator`
- `https://buildcalc.co/asphalt-calculator`
- `https://buildcalc.co/concrete-cost-calculator`

**Root Cause:**
- Non-www domain redirecting with 307 (temporary) instead of 301 (permanent)
- No application-level redirect configuration
- Missing platform-level redirect setup

**Fix Applied:**
- ✅ Created `middleware.ts` - 301 permanent redirects at app level
- ✅ Created `vercel.json` - Platform-level www redirect configuration
- ✅ Updated `next.config.ts` - Security headers

### 2. ❌ Duplicate Canonical Issues

**Affected URLs:**
- `https://www.buildcalc.co/chain-link-fence-calculator`
- `https://www.buildcalc.co/` (homepage)

**Root Cause:**
- Conflicting canonical signals from breadcrumb schema in `CalculatorLayout.tsx`
- Breadcrumbs used `buildcalc.co` instead of `www.buildcalc.co`
- Google received mixed signals about the canonical URL

**Fix Applied:**
- ✅ Updated `components/CalculatorLayout.tsx` breadcrumb schema URLs
- Changed: `https://buildcalc.co` → `https://www.buildcalc.co`

---

## Files Changed

### New Files Created:
1. **`middleware.ts`**
   - Application-level redirects
   - 301 permanent redirect from non-www to www
   - HTTPS enforcement

2. **`vercel.json`**
   - Platform-level redirect configuration
   - Security headers (HSTS, XSS protection)
   - Edge-level redirect handling

3. **`REDIRECT_FIX_GUIDE.md`**
   - Comprehensive technical documentation

4. **`QUICK_DEPLOY_REDIRECT_FIX.md`**
   - Quick reference checklist

### Modified Files:
1. **`next.config.ts`**
   - Added security headers
   - HTTP Strict Transport Security
   - X-Frame-Options and content sniffing prevention

2. **`components/CalculatorLayout.tsx`**
   - Fixed breadcrumb schema URLs
   - Changed from `buildcalc.co` to `www.buildcalc.co`
   - Ensures consistent canonical signals

---

## What These Fixes Do

### Redirect Fixes (Issues #1):

**Before:**
```
http://buildcalc.co/asphalt-calculator
  → 307 temporary redirect
  → https://www.buildcalc.co/asphalt-calculator
```

**After:**
```
http://buildcalc.co/asphalt-calculator
  → 301 permanent redirect
  → https://www.buildcalc.co/asphalt-calculator
```

### Canonical Fixes (Issues #2):

**Before:**
```json
// Page metadata says:
"canonical": "https://www.buildcalc.co/chain-link-fence-calculator"

// But breadcrumb schema says:
"item": "https://buildcalc.co/chain-link-fence-calculator"

// Google confused: "Which one is canonical?"
```

**After:**
```json
// Page metadata:
"canonical": "https://www.buildcalc.co/chain-link-fence-calculator"

// Breadcrumb schema:
"item": "https://www.buildcalc.co/chain-link-fence-calculator"

// Google confident: "www is canonical!"
```

---

## Deployment Commands

```bash
# 1. Check current status
git status

# 2. Add all changed files
git add middleware.ts vercel.json next.config.ts components/CalculatorLayout.tsx

# 3. Add documentation files
git add REDIRECT_FIX_GUIDE.md QUICK_DEPLOY_REDIRECT_FIX.md COMPLETE_SEO_FIX.md

# 4. Commit with descriptive message
git commit -m "Fix: SEO validation and canonical URL issues

- Add middleware.ts for 301 permanent redirects (non-www → www)
- Add vercel.json for platform-level redirect configuration
- Update next.config.ts with security headers
- Fix breadcrumb schema in CalculatorLayout.tsx (buildcalc.co → www.buildcalc.co)
- Resolves Google Search Console redirect validation failures
- Fixes duplicate canonical URL issues on homepage and calculators"

# 5. Push to deploy (Vercel auto-deploys)
git push origin main
```

---

## Testing After Deployment

Wait 2-3 minutes for Vercel to deploy, then run these tests:

### Test 1: Redirect Validation (Fixes Issues #1)

```bash
# Test concrete-steps-calculator redirect
curl -I http://buildcalc.co/concrete-steps-calculator

# Expected:
# HTTP/1.1 301 Moved Permanently
# Location: https://www.buildcalc.co/concrete-steps-calculator

# Test asphalt-calculator redirect
curl -I https://buildcalc.co/asphalt-calculator

# Expected:
# HTTP/1.1 301 Moved Permanently
# Location: https://www.buildcalc.co/asphalt-calculator

# Test homepage redirect
curl -I http://buildcalc.co/

# Expected:
# HTTP/1.1 301 Moved Permanently
# Location: https://www.buildcalc.co/
```

### Test 2: Canonical Consistency (Fixes Issues #2)

```bash
# Check chain-link-fence-calculator breadcrumb schema
curl -s https://www.buildcalc.co/chain-link-fence-calculator | grep -A 15 '"@type":"BreadcrumbList"'

# Expected: All URLs should contain "https://www.buildcalc.co"

# Check homepage canonical
curl -s https://www.buildcalc.co/ | grep -i canonical

# Expected: <link rel="canonical" href="https://www.buildcalc.co"/>
```

### Test 3: Security Headers

```bash
# Check security headers
curl -I https://www.buildcalc.co/ | grep -i "strict-transport"

# Expected: Strict-Transport-Security: max-age=31536000; includeSubDomains
```

### Test 4: Full Redirect Chain

```bash
# See complete redirect chain
curl -IL http://buildcalc.co/concrete-cost-calculator | grep -E "HTTP|Location"

# Expected: Only ONE 301 redirect to https://www.buildcalc.co/concrete-cost-calculator
```

---

## Google Search Console Actions

### For Redirect Errors (Issues #1):

#### 1. Test Failed URLs

Go to Google Search Console → URL Inspection

**Test these URLs:**
- `https://buildcalc.co/concrete-steps-calculator`
- `https://buildcalc.co/asphalt-calculator`
- `https://buildcalc.co/concrete-cost-calculator`

**Expected Result:**
- Should show: "Redirect" with 301 status
- Redirects to: `https://www.buildcalc.co/[calculator-name]`

#### 2. Request Indexing for Canonical Versions

Request indexing for the www versions:
- `https://www.buildcalc.co/concrete-steps-calculator`
- `https://www.buildcalc.co/asphalt-calculator`
- `https://www.buildcalc.co/concrete-cost-calculator`

**Steps:**
1. URL Inspection → Enter URL
2. "Test Live URL" → Should return 200 OK
3. Click "Request Indexing"

### For Duplicate Canonical Issues (Issues #2):

#### 1. Test Homepage Canonical

URL Inspection → Enter: `https://www.buildcalc.co/`

**Check for:**
- User-declared canonical: `https://www.buildcalc.co/`
- Google-selected canonical: `https://www.buildcalc.co/`
- Should match ✅

#### 2. Test Chain Link Fence Calculator

URL Inspection → Enter: `https://www.buildcalc.co/chain-link-fence-calculator`

**Check for:**
- User-declared canonical: `https://www.buildcalc.co/chain-link-fence-calculator`
- Google-selected canonical: `https://www.buildcalc.co/chain-link-fence-calculator`
- Should match ✅

#### 3. Request Re-Indexing

After verifying canonical tags are consistent:
1. Request indexing for both pages
2. Wait 24-48 hours for Google to re-crawl
3. Check again to verify Google chose the correct canonical

---

## Verification Checklist

After deployment, verify:

### Redirects:
- [ ] `curl -I http://buildcalc.co/` → 301 to `https://www.buildcalc.co/`
- [ ] `curl -I https://buildcalc.co/` → 301 to `https://www.buildcalc.co/`
- [ ] `curl -I http://www.buildcalc.co/` → 301 to `https://www.buildcalc.co/`
- [ ] `curl -I https://www.buildcalc.co/` → 200 OK ✅
- [ ] All calculator pages redirect properly (test 3-5 random ones)

### Canonical URLs:
- [ ] Homepage breadcrumb schema uses `www.buildcalc.co`
- [ ] All calculator breadcrumbs use `www.buildcalc.co`
- [ ] No more `buildcalc.co` (non-www) in structured data
- [ ] Google Search Console shows matching canonicals

### Google Search Console:
- [ ] Test 3 redirect error URLs - should show 301 redirects
- [ ] Request indexing for www versions
- [ ] Test 2 duplicate canonical URLs - should show consistent signals
- [ ] Submit sitemap: `https://www.buildcalc.co/sitemap.xml`

---

## Expected Timeline

| Timeframe | Expected Results |
|-----------|-----------------|
| **Immediate** | Redirects working (301 permanent) |
| **2-3 hours** | Breadcrumb schema showing correct URLs |
| **24-48 hours** | Google re-crawls and validates redirects |
| **3-7 days** | Redirect errors → Indexed status |
| **3-7 days** | Duplicate canonical warnings → Resolved |
| **1-2 weeks** | All pages properly indexed |
| **2-4 weeks** | Rankings stabilize and improve |

---

## Impact Analysis

### Before Fixes:

**Redirect Issues:**
- 3+ pages with redirect validation failures
- 307 temporary redirects confusing search engines
- Pages "Discovered but not indexed"

**Canonical Issues:**
- 2+ pages with duplicate canonical warnings
- Google choosing different canonical than declared
- Split authority between non-www and www versions

### After Fixes:

**Redirect Issues:**
- ✅ All redirects use 301 permanent status
- ✅ Consistent redirect behavior
- ✅ Pages will index properly

**Canonical Issues:**
- ✅ Consistent canonical signals throughout site
- ✅ All structured data uses www.buildcalc.co
- ✅ Google will respect declared canonical

---

## Monitoring

### Daily (Week 1):
1. **Google Search Console → Coverage**
   - Watch "Page with redirect" errors decrease
   - Watch "Duplicate, Google chose different canonical" decrease
   - Watch "Indexed" pages increase

2. **Run Curl Tests**
   - Verify redirects still working properly
   - Check random calculator pages

### Weekly (Weeks 2-4):
1. **GSC Coverage Report**
   - All calculator pages should be "Indexed"
   - No redirect or duplicate canonical errors

2. **GSC Performance Report**
   - Track impressions (should increase 3-5x)
   - Track clicks (should increase 2-3x)
   - Monitor average position

---

## Rollback Plan

If issues occur after deployment:

```bash
# Rollback redirect changes
git revert HEAD
git push origin main

# Or manually remove files
rm middleware.ts vercel.json
git checkout next.config.ts components/CalculatorLayout.tsx
git commit -m "Rollback: Remove redirect fixes"
git push origin main
```

**Note:** Rollback should NOT be needed. These are standard SEO best practices.

---

## Summary

**Total Issues Fixed:** 5 pages
- 3 redirect validation errors
- 2 duplicate canonical warnings

**Files Changed:** 5
- 2 new files (middleware.ts, vercel.json)
- 2 modified files (next.config.ts, CalculatorLayout.tsx)
- 3 documentation files

**SEO Impact:**
- ✅ Proper 301 redirects for all non-www URLs
- ✅ Consistent canonical URL signals
- ✅ Improved crawlability and indexing
- ✅ Better authority consolidation on www domain
- ✅ Enhanced security headers

**Breaking Changes:** None

**Risk Level:** Low (standard SEO fixes)

---

## Quick Commands

```bash
# Deploy all fixes
git add middleware.ts vercel.json next.config.ts components/CalculatorLayout.tsx REDIRECT_FIX_GUIDE.md QUICK_DEPLOY_REDIRECT_FIX.md COMPLETE_SEO_FIX.md
git commit -m "Fix: SEO validation and canonical URL issues"
git push origin main

# Wait 2-3 minutes, then test
curl -I http://buildcalc.co/concrete-steps-calculator
curl -I https://buildcalc.co/asphalt-calculator
curl -I https://www.buildcalc.co/chain-link-fence-calculator | grep canonical

# Check breadcrumb schema
curl -s https://www.buildcalc.co/ | grep -A 10 BreadcrumbList | grep item
```

All commands should show `www.buildcalc.co` URLs ✅

---

**Status:** ✅ READY TO DEPLOY  
**Complexity:** Low  
**Time to Deploy:** 5 minutes  
**Time for Google to Re-Index:** 3-7 days
