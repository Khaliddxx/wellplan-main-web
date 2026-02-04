# WellPlan - Modern SaaS Marketing Website

Built with Next.js 14, React, and Tailwind CSS.

## Features

- **Dynamic Pages**: Home, Features, Industries, Pricing, FAQ
- **Industry Templates**: Automatically generated pages for each industry
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Embedded Data**: All content in `app/lib/data.js`
- **Production Ready**: Optimized for Vercel deployment

## Project Structure

```
app/
├── page.jsx              # Home page
├── features/
│   └── page.jsx          # Features & comparison table
├── industries/
│   ├── page.jsx          # Industries listing
│   └── [slug]/
│       └── page.jsx      # Dynamic industry pages
├── pricing/
│   └── page.jsx          # Pricing page
├── faq/
│   └── page.jsx          # FAQ & testimonials
├── components/
│   ├── Navigation.jsx    # Navbar
│   └── Footer.jsx        # Footer
├── lib/
│   └── data.js           # All content data
├── layout.jsx            # Root layout
└── globals.css           # Tailwind styles
```

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Deployment to Vercel

1. Push code to GitHub (already done)
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select `wellplan-main-web` repository
5. Click "Deploy"
6. Get your live URL in ~2 minutes

## Customization

### Update Content
Edit `app/lib/data.js` to update:
- Hero copy
- Features
- Industries
- Testimonials
- FAQ
- Pricing

### Update Colors
Edit `tailwind.config.js` to change:
- Primary color (currently `#214CE5`)
- Other theme colors

### Update Metadata
Edit `app/layout.jsx` for site title and description

## Environment Variables

Create `.env.local` (copy from `.env.example`):

```
NEXT_PUBLIC_SITE_URL=your-vercel-url
```

## Support

For Next.js documentation: https://nextjs.org/docs
For Tailwind CSS: https://tailwindcss.com/docs
# Restored to last known good state
