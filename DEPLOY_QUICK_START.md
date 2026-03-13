# 🚀 Quick Deploy to Cloudflare Pages

## 5-Minute Setup

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Connect to Cloudflare

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Click **Pages** → **Create a project**
3. Select **Connect to Git**
4. Authorize GitHub
5. Select your repository
6. Click **Begin setup**

### Step 3: Configure Build

Fill in these settings:

| Setting | Value |
|---------|-------|
| **Project name** | `portfolio` |
| **Production branch** | `main` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Node.js version** | `18.x` |

### Step 4: Add Environment Variables (Optional)

If using Web3Forms or Resend:

1. Go to **Settings** → **Environment variables**
2. Add:
   ```
   VITE_WEB3FORMS_KEY = your_key_here
   ```
3. Click **Save**

### Step 5: Deploy

Click **Save and Deploy**

✅ **Done!** Your site is live at `https://portfolio-[random].pages.dev`

---

## Custom Domain (Optional)

1. Go to **Custom domains**
2. Add your domain
3. Update DNS records as shown
4. Wait for SSL certificate (5-10 minutes)

---

## Verify Deployment

```bash
# Check build locally first
npm run build

# View the dist folder
ls -la dist/

# Should contain: index.html, assets/, etc.
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Check Node.js version (18+) in settings |
| 404 errors | `_redirects` file handles routing |
| Slow site | Enable Cloudflare caching in settings |
| Env vars not working | Redeploy after adding variables |

---

## Next Steps

1. ✅ Monitor deployment in Cloudflare dashboard
2. ✅ Set up custom domain
3. ✅ Configure email service
4. ✅ Enable Cloudflare security features

**Your portfolio is now live! 🎉**

For detailed guide, see [DEPLOYMENT.md](./DEPLOYMENT.md)
