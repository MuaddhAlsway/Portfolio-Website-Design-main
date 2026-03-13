# 🚀 Quick Deploy to mustudiolab.pages.dev

## 3-Step Deployment

### Step 1: Push Code to GitHub
```bash
git add .
git commit -m "Deploy to mustudiolab.pages.dev"
git push origin main
```

### Step 2: Connect to Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Click **Pages** → **Create a project**
3. Select **Connect to Git**
4. Authorize GitHub
5. Select your repository

### Step 3: Configure & Deploy

**Build Settings:**
- Project name: `mustudiolab`
- Production branch: `main`
- Build command: `npm run build`
- Build output: `dist`
- Node.js: `18.x`

**Environment Variables:**
```
VITE_WEB3FORMS_KEY = your_key_here
```

Click **Save and Deploy** ✅

---

## Your Site is Live! 🎉

```
https://mustudiolab.pages.dev
```

---

## Automatic Updates

Every push to `main` automatically deploys:

```bash
git push origin main
# Site updates automatically!
```

---

## View Deployment Status

1. Go to Cloudflare Pages dashboard
2. Select **mustudiolab** project
3. Check **Deployments** tab

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails | Check Node.js version (18+) |
| 404 errors | `_redirects` file handles routing |
| Env vars not working | Redeploy after adding variables |
| Site not updating | Hard refresh (Ctrl+Shift+R) |

---

## Useful Commands

```bash
# Build locally
npm run build

# Deploy with Wrangler
wrangler pages deploy dist --project-name=mustudiolab

# View logs
wrangler pages deployment tail --project-name=mustudiolab
```

---

## Support

- 📧 Email: muaddhalsway@gmail.com
- 💬 WhatsApp: +966 560 394 576
- 📚 Full Guide: See DEPLOY_MUSTUDIOLAB.md

---

**Status**: Ready to deploy ✅

**URL**: https://mustudiolab.pages.dev
