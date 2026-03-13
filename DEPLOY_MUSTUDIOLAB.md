# Deploy to mustudiolab.pages.dev

Complete guide to deploy your portfolio to Cloudflare Pages at `mustudiolab.pages.dev`

## Prerequisites

✅ Cloudflare account (with mustudiolab project)
✅ GitHub repository with your code
✅ Git installed locally

## Step 1: Prepare Your Code

```bash
# Make sure everything is committed
git add .
git commit -m "Deploy to mustudiolab.pages.dev"
git push origin main
```

## Step 2: Connect to Cloudflare Pages

### Via Cloudflare Dashboard (Recommended)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your account
3. Go to **Pages** in the left sidebar
4. Click **Create a project** or **Create an application**
5. Select **Connect to Git**
6. Authorize Cloudflare to access your GitHub
7. Select your repository (MuaddhAlsway/portfolio or similar)
8. Click **Begin setup**

## Step 3: Configure Build Settings

In the Cloudflare Pages setup form, enter:

| Field | Value |
|-------|-------|
| **Project name** | `mustudiolab` |
| **Production branch** | `main` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Node.js version** | `18.x` or `20.x` |

## Step 4: Environment Variables

1. After creating the project, go to **Settings** → **Environment variables**
2. Add the following variables:

```
VITE_WEB3FORMS_KEY = your_web3forms_access_key
VITE_RESEND_API_KEY = your_resend_api_key (optional)
```

3. Click **Save**

## Step 5: Deploy

1. Click **Save and Deploy**
2. Wait for the build to complete (usually 2-5 minutes)
3. Once deployed, your site will be available at:

```
https://mustudiolab.pages.dev
```

## Verify Deployment

Check that everything is working:

```bash
# 1. Visit the site
https://mustudiolab.pages.dev

# 2. Test all pages load
- Home page
- Portfolio section
- Contact form
- Project details

# 3. Check console for errors
- Open DevTools (F12)
- Check Console tab for errors
```

## View Deployment Logs

1. Go to Cloudflare Pages dashboard
2. Select **mustudiolab** project
3. Click **Deployments** tab
4. Click on the latest deployment to see logs

## Automatic Deployments

Every time you push to `main` branch, Cloudflare automatically:

1. Pulls your latest code
2. Runs `npm run build`
3. Deploys the `dist` folder
4. Updates `mustudiolab.pages.dev`

```bash
# Just push to deploy
git push origin main
# Cloudflare handles the rest!
```

## Manual Deployment with Wrangler

If you prefer command-line deployment:

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build locally
npm run build

# Deploy to mustudiolab.pages.dev
wrangler pages deploy dist --project-name=mustudiolab
```

## Custom Domain (Optional)

To use a custom domain instead of `mustudiolab.pages.dev`:

1. Go to **Custom domains** in your project settings
2. Click **Add custom domain**
3. Enter your domain (e.g., `muaddhalsway.com`)
4. Follow the DNS setup instructions
5. Wait for SSL certificate (5-10 minutes)

## Troubleshooting

### Build Fails

**Error**: "command not found: npm"

**Solution**: 
- Check Node.js version in Cloudflare settings (should be 18.x or higher)
- Ensure `package.json` exists in root directory
- Check `npm run build` works locally

### 404 Errors on Routes

**Error**: Navigating to `/project/1` shows 404

**Solution**: 
- The `_redirects` file in `public/` handles this
- Ensure it contains: `/* /index.html 200`
- Redeploy after verifying

### Environment Variables Not Working

**Error**: Contact form not sending emails

**Solution**:
1. Add variables in Cloudflare Pages settings
2. Redeploy the project
3. Check variable names match exactly
4. Verify API keys are correct

### Slow Performance

**Solution**:
1. Enable Cloudflare caching:
   - Go to Cloudflare > Caching > Cache Level: Cache Everything
2. Enable compression:
   - Cloudflare > Speed > Brotli: On
3. Enable HTTP/3:
   - Cloudflare > Network > HTTP/3: On

### Site Not Updating After Push

**Solution**:
1. Check deployment status in Cloudflare dashboard
2. Wait for build to complete
3. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
4. Clear browser cache if needed

## Performance Optimization

### Enable Caching

1. Go to Cloudflare dashboard
2. Select your domain
3. Go to **Caching** > **Cache Level**: Select "Cache Everything"
4. Set **Browser Cache TTL**: 1 hour

### Enable Compression

1. Go to **Speed** > **Optimization**
2. Enable **Brotli** compression
3. Enable **Minify** (CSS, JavaScript, HTML)

### Enable HTTP/3

1. Go to **Network** settings
2. Enable **HTTP/3 (QUIC)**
3. Enable **HTTP/2**

## Monitoring

### View Analytics

1. Go to Cloudflare Pages project
2. Click **Analytics** tab
3. View:
   - Page views
   - Unique visitors
   - Request count
   - Error rate

### View Logs

```bash
# Stream real-time logs
wrangler pages deployment tail --project-name=mustudiolab
```

## Rollback to Previous Deployment

If something goes wrong:

1. Go to **Deployments** tab
2. Find the previous working deployment
3. Click **Rollback to this deployment**
4. Confirm the rollback

## Security Headers

Your site includes security headers configured in `public/_headers`:

- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## SSL/TLS

Your site is automatically secured with:

- Free SSL certificate from Let's Encrypt
- HTTPS enabled by default
- Automatic certificate renewal

## Next Steps

1. ✅ Deploy to mustudiolab.pages.dev
2. ✅ Test all functionality
3. ✅ Set up custom domain (optional)
4. ✅ Configure email service
5. ✅ Monitor performance
6. ✅ Enable security features

## Support

- **Cloudflare Pages Docs**: https://pages.cloudflare.com
- **Wrangler CLI**: https://developers.cloudflare.com/workers/wrangler
- **Cloudflare Community**: https://community.cloudflare.com
- **Your Email**: muaddhalsway@gmail.com
- **Your WhatsApp**: +966 560 394 576

---

## Deployment Status

- **Project Name**: mustudiolab
- **URL**: https://mustudiolab.pages.dev
- **Build Command**: npm run build
- **Output Directory**: dist
- **Status**: Ready to deploy ✅

**Your portfolio will be live in minutes!** 🚀
