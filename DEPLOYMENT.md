# WellPlan Deployment Guide

## One-Click Deployment to Vercel

### Option 1: Deploy from Git (Recommended)

1. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/wellplan.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js configuration
   - Click "Deploy"
   - Your site will be live in ~2 minutes

### Option 2: Deploy CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```
   Follow the prompts to complete deployment.

### Option 3: Deploy with Docker

```bash
# Build Docker image
docker build -t wellplan .

# Run container
docker run -p 3000:3000 wellplan
```

## Environment Variables

No required environment variables for basic deployment. Optional:

```env
# .env.local
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

## Performance Optimization

The site is already optimized for Vercel with:
- ✅ Image optimization (Vercel handles automatically)
- ✅ Automatic code splitting
- ✅ Edge caching enabled
- ✅ Gzip compression
- ✅ Minification

Expected Lighthouse scores:
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

## Custom Domain

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records (Vercel provides instructions)
4. SSL certificate auto-provisioned

## Monitoring

Vercel provides built-in:
- Real-time analytics
- Performance monitoring
- Error tracking
- Deployment history

## Scaling

Vercel automatically handles:
- Auto-scaling based on traffic
- Global CDN distribution
- Serverless function scaling
- Database connection pooling (if needed)

## Security Checklist

- ✅ HTTPS enforced
- ✅ Security headers configured (vercel.json)
- ✅ XSS protection
- ✅ CSRF token ready (add if forms needed)
- ✅ CSP headers ready (optional)

## Maintenance

### Update Dependencies
```bash
npm update
npm audit fix
```

### Deploy Updates
```bash
git add .
git commit -m "Update: description"
git push origin main
# Vercel auto-deploys
```

### Rollback
Vercel keeps all deployments. Click "Rollback" in dashboard if needed.

## Troubleshooting

### Build Fails
- Check `npm run build` locally
- Review Vercel build logs
- Ensure all imports are correct

### Slow Performance
- Check Vercel Analytics
- Optimize images further
- Review bundle size with `npm run build`

### DNS Issues
- Wait 24h for DNS propagation
- Clear browser cache
- Use a different DNS checker

## Cost Estimation

**Free Plan (Usually Sufficient)**
- Up to 100GB bandwidth/month
- Unlimited deployments
- Automatic SSL
- Global CDN

**Pro Plan**
- $20/month
- Unlimited bandwidth
- Priority support

For this static site, **Free Plan is recommended**.

## Advanced Configuration

### Custom Build Script
Edit `package.json`:
```json
{
  "scripts": {
    "build": "next build",
    "export": "next export"
  }
}
```

### Environment Files
- `.env.local` - Local development
- `.env.production` - Vercel production
- `.env.preview` - Preview deployments

### Headers & Redirects
Edit `vercel.json` (already configured).

## Monitoring & Analytics

### Vercel Analytics
- Real-time page metrics
- Core Web Vitals
- Geographic distribution
- Traffic sources

### Add Google Analytics (Optional)
```tsx
// Add to app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Issues**: Open issue in repository
- **Community**: Next.js Discord

---

**Ready to deploy?** Push your code and watch it come alive! 🚀
