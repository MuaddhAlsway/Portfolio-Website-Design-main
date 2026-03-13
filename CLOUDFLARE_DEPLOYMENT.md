# Cloudflare Pages Deployment Guide

Deploy your portfolio to `mustudiolab.pages.dev`

## Prerequisites

- Cloudflare account (free)
- GitHub account with your repository
- Git installed locally

## Step 1: Prepare Your Repository

```bash
# Make sure everything is committed
git add .
git commit -m "Prepare for Cloudflare Pages deployment"
git push origin main
```

## Step 2: Connect to Cloudflare Pages

### Option A: Via Cloudflare Dashboard (Recommended)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select **Pages** from the left sidebar
3. Click **Create a project**
4. Select **Connect to Git**
5. Authorize Cloudflare to access your GitHub
6. Select your repository
7. Click **Begin setup**

### Configuration Settings

When prompted, use these settings:

**Project name**: `mustudiolab-portfolio`

**Production branch**: `main`

**Build command**: 
```
npm run build
```

**Build output directory**: 
```
dist
```

**Environment variables** (if needed):
```
VITE_WEB3FORMS_KEY=your_key_here
```

8. Click **Save and Deploy**

---

## Step 2B: Via CLI (Alternative)

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy dist --project-name=mustudiolab-portfolio
```

---

## Step 3: Configure Custom Domain (Optional)

1. In Cloudflare Pages project settings
2. Go to **Custom domains**
3. Add your custom domain if you have one
4. Follow DNS configuration steps

---

## Step 4: Verify Deployment

After deployment completes:

1. Visit `https://mustudiolab.pages.dev`
2. Check that all pages load correctly
3. Test the contact form
4. Verify images and assets load

---

## Automatic Deployments

Once connected to GitHub:

- **Every push to `main`** → Automatic deployment
- **Pull requests** → Preview deployments
- **Rollback** → Available in deployment history

---

## Environment Variables

To add environment variables:

1. Go to **Settings** → **Environment variables**
2. Add variables for each environment:
   - **Production**: Variables for live site
   - **Preview**: Variables for PR previews

Example:
```
VITE_WEB3FORMS_KEY=your_production_key
VITE_RESEND_API_KEY=your_resend_key
```

---

## Build Settings

### Current Configuration

- **Framework**: Vite + React
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Node version**: 18+ (default)

### Troubleshooting Build Issues

If build fails:

1. Check build logs in Cloudflare dashboard
2. Verify `npm run build` works locally:
   ```bash
   npm run build
   npm run preview
   ```
3. Check for missing environment variables
4. Ensure all dependencies are in `package.json`

---

## Performance Optimization

Cloudflare Pages automatically:

- ✅ Minifies CSS/JS
- ✅ Compresses images
- ✅ Caches assets globally
- ✅ Serves from edge locations

---

## Monitoring & Analytics

In Cloudflare Pages dashboard:

- **Deployments**: View all deployment history
- **Analytics**: Track page views and performance
- **Logs**: Check build and runtime logs
- **Settings**: Configure domain, environment, etc.

---

## Rollback to Previous Version

1. Go to **Deployments**
2. Find the previous working deployment
3. Click **Rollback to this deployment**

---

## Custom Headers & Redirects

Create `_headers` file in `public/` directory:

```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

Create `_redirects` file in `public/` directory:

```
# Redirect old URLs
/old-page /new-page 301

# SPA routing
/* /index.html 200
```

---

## Troubleshooting

### Site shows 404

- Check build output directory is `dist`
- Verify `npm run build` creates files in `dist/`
- Check for routing issues in React Router

### Styles not loading

- Verify Tailwind CSS is building correctly
- Check CSS file paths are relative
- Clear Cloudflare cache: Settings → Caching → Purge Cache

### Environment variables not working

- Verify variables are added in Cloudflare dashboard
- Check variable names match your code
- Redeploy after adding variables

### Contact form not sending

- Check Web3Forms/Resend API keys in environment
- Verify API keys are correct
- Check browser console for errors
- Test with mailto fallback

---

## Next Steps

1. ✅ Deploy to Cloudflare Pages
2. ✅ Set up custom domain (optional)
3. ✅ Configure environment variables
4. ✅ Test all functionality
5. ✅ Monitor analytics

---

## Support

- **Cloudflare Docs**: https://developers.cloudflare.com/pages/
- **Vite Docs**: https://vitejs.dev/
- **React Router**: https://reactrouter.com/

---

## Deployment Checklist

- [ ] Repository pushed to GitHub
- [ ] Cloudflare account created
- [ ] Pages project connected to GitHub
- [ ] Build settings configured
- [ ] Environment variables added
- [ ] Site deployed successfully
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Images/assets display
- [ ] Performance acceptable

---

**Your site will be live at**: `https://mustudiolab.pages.dev`

Enjoy your deployed portfolio! 🚀
