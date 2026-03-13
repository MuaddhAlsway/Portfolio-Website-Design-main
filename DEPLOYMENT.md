# Deployment Guide - Cloudflare Pages

This guide will help you deploy your portfolio to Cloudflare Pages.

## Prerequisites

- Cloudflare account (free at [cloudflare.com](https://cloudflare.com))
- GitHub account with your repository
- Git installed locally

## Step 1: Prepare Your Repository

1. Make sure all changes are committed:
   ```bash
   git add .
   git commit -m "Prepare for Cloudflare Pages deployment"
   git push origin main
   ```

2. Verify your build works locally:
   ```bash
   npm run build
   ```

## Step 2: Connect to Cloudflare Pages

### Option A: Via Cloudflare Dashboard (Recommended)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your account
3. Go to **Pages** in the left sidebar
4. Click **Create a project**
5. Select **Connect to Git**
6. Authorize Cloudflare to access your GitHub
7. Select your repository
8. Click **Begin setup**

### Option B: Via Wrangler CLI

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy dist
```

## Step 3: Configure Build Settings

In the Cloudflare Pages dashboard:

1. **Project name**: `portfolio` (or your preferred name)
2. **Production branch**: `main`
3. **Build command**: `npm run build`
4. **Build output directory**: `dist`
5. **Node.js version**: `18.x` or higher

### Environment Variables

Add these in Cloudflare Pages settings:

```
VITE_WEB3FORMS_KEY=your_web3forms_key
VITE_RESEND_API_KEY=your_resend_api_key
```

## Step 4: Custom Domain (Optional)

1. In Cloudflare Pages project settings
2. Go to **Custom domains**
3. Add your domain (e.g., `muaddhalsway.com`)
4. Follow DNS setup instructions

## Step 5: Deploy

### Automatic Deployment

Every push to `main` branch automatically deploys:

```bash
git push origin main
# Cloudflare automatically builds and deploys
```

### Manual Deployment

```bash
# Build locally
npm run build

# Deploy using Wrangler
wrangler pages deploy dist
```

## Deployment Status

Check deployment status:

1. Go to Cloudflare Pages dashboard
2. Select your project
3. View **Deployments** tab
4. Click on any deployment to see logs

## Troubleshooting

### Build fails with "command not found"

**Solution**: Ensure Node.js version is set correctly in Cloudflare Pages settings (18.x or higher)

### Environment variables not working

**Solution**: 
1. Add variables in Cloudflare Pages settings
2. Restart deployment
3. Check variable names match `.env` file

### 404 errors on routes

**Solution**: Add `_redirects` file:

```
/* /index.html 200
```

This file is already in the project root.

### Slow performance

**Solution**:
1. Enable Cloudflare caching
2. Minify assets (Vite does this automatically)
3. Use Cloudflare's image optimization

## Monitoring

### View Logs

```bash
# Stream logs from deployment
wrangler pages deployment tail
```

### Analytics

In Cloudflare Pages dashboard:
- View page views
- Monitor errors
- Check performance metrics

## Rollback

To rollback to a previous deployment:

1. Go to **Deployments** tab
2. Find the previous deployment
3. Click **Rollback to this deployment**

## Custom Headers

Add custom headers in `_headers` file:

```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

## Performance Tips

1. **Enable Caching**:
   - Cloudflare > Caching > Cache Level: Cache Everything
   - Browser Cache TTL: 1 hour

2. **Enable Compression**:
   - Cloudflare > Speed > Brotli: On

3. **Enable HTTP/2**:
   - Cloudflare > Network > HTTP/2: On

4. **Enable HTTP/3**:
   - Cloudflare > Network > HTTP/3 (QUIC): On

## Security

1. **Enable SSL/TLS**:
   - Cloudflare > SSL/TLS > Full (Strict)

2. **Enable DDoS Protection**:
   - Cloudflare > Security > DDoS Protection: On

3. **Enable WAF**:
   - Cloudflare > Security > WAF: Enable

## Environment Setup

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Production

Your site will be available at:
- `https://portfolio-[random].pages.dev` (default)
- `https://yourdomain.com` (if custom domain configured)

## Next Steps

1. ✅ Deploy to Cloudflare Pages
2. ✅ Set up custom domain
3. ✅ Configure email service (Web3Forms/Resend)
4. ✅ Monitor performance
5. ✅ Set up analytics

## Support

- Cloudflare Pages Docs: [pages.cloudflare.com](https://pages.cloudflare.com)
- Wrangler CLI: [developers.cloudflare.com/workers/wrangler](https://developers.cloudflare.com/workers/wrangler)
- Community: [Cloudflare Community](https://community.cloudflare.com)

---

**Your portfolio will be live in minutes!** 🚀
