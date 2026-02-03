# 🚀 WellPlan Quick Start

Get up and running in 5 minutes.

## 1. Installation

```bash
# Clone
git clone https://github.com/yourusername/wellplan.git
cd wellplan

# Install
npm install

# Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## 2. Make It Yours

### Change the Brand Name

**File:** `lib/data.ts`
```typescript
export const siteConfig = {
  name: 'MyApp',  // Change this
  description: 'My awesome app',
}
```

Also update:
- `app/layout.tsx` - Page title
- `components/navbar.tsx` - Logo text

### Update Colors

**File:** `tailwind.config.ts`
```typescript
colors: {
  navy: '#YourDarkColor',
  primary: '#YourMainColor',
  // ...
}
```

### Add Your Content

**File:** `lib/data.ts`

```typescript
// Edit objectives
export const objectives = [
  {
    id: 'your-objective',
    slug: 'your-objective',
    title: 'Your Title',
    description: 'Your description',
    // ... rest of config
  },
]

// Edit testimonials
export const testimonials = [
  {
    name: 'Customer Name',
    title: 'Their Title',
    avatar: '😊',
    quote: 'What they said',
    metric: 'Impact metric',
  },
]
```

## 3. Customize Pages

### Home Page
**File:** `app/page.tsx`

- HeroSection - Update heading and CTA
- StatsSection - Add your metrics
- ObjectivesSection - Update cards
- FeaturesSection - List your features

### Detail Pages
**File:** `app/objectives/[slug]/content.tsx`

Automatically generated from `lib/data.ts`.
Add benefits, features, and case studies there.

### Navigation
**File:** `components/navbar.tsx`

- Logo
- Menu items
- CTA button

## 4. Styling

### Tailwind Classes
```tsx
<div className="text-primary hover:text-accent-orange">
  Text with custom colors
</div>
```

### Animations
```tsx
import { FloatingElement, GlassmorphicCard } from '@/components/animations'

<GlassmorphicCard hoverable>
  <FloatingElement>
    Animated content
  </FloatingElement>
</GlassmorphicCard>
```

### Custom CSS
**File:** `app/globals.css`

Add global styles and CSS animations here.

## 5. Add New Sections

### New Component

```tsx
// components/my-component.tsx
'use client'

import { motion } from 'framer-motion'

export const MyComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-white"
    >
      My awesome component
    </motion.div>
  )
}
```

### Use in Page

```tsx
// app/page.tsx
import { MyComponent } from '@/components/my-component'

export default function Home() {
  return (
    <main>
      {/* ... other sections ... */}
      <MyComponent />
    </main>
  )
}
```

## 6. Deploy to Production

### Vercel (1 Click)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Click Deploy
5. Done! ✅

### Docker

```bash
docker build -t myapp .
docker run -p 3000:3000 myapp
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for full guide.

## 7. Useful Commands

```bash
# Development
npm run dev        # Start dev server

# Production
npm run build      # Build for production
npm start          # Run production build

# Maintenance
npm audit         # Check security
npm update        # Update dependencies
npm run lint      # Check code

# Git
git status        # See changes
git add .         # Stage changes
git commit -m "message"  # Commit
git push          # Push to GitHub
```

## 8. Project Structure

```
wellplan/
├── app/              # Pages and layouts
├── components/       # React components
├── lib/
│   └── data.ts      # ⭐ All your content here!
├── public/          # Images, fonts
└── tailwind.config.ts  # Colors and theme
```

## 9. Tips & Tricks

### Faster Development
- Use VS Code for IntelliSense
- Install "Tailwind CSS IntelliSense" extension
- Use browser DevTools for styling
- Check Lighthouse for performance

### Testing
```bash
# Build locally to test
npm run build
npm start

# Then visit http://localhost:3000
```

### Performance
- Keep animations under 0.5s
- Use `transform: translateY()` instead of `top:`
- Compress images to <100KB
- Test on slow 4G network (DevTools)

## 10. Common Issues

**Q: Port 3000 in use**
```bash
# Use different port
PORT=3001 npm run dev
```

**Q: TypeScript errors**
```bash
# Usually auto-fixes on save
# Or restart dev server
```

**Q: Build fails**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

**Q: Git issues**
```bash
# Check status
git status

# See what changed
git diff

# Undo changes
git checkout -- .
```

## Next Steps

1. ✅ Read [README.md](README.md) for full docs
2. ✅ Check [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines
3. ✅ View [DEPLOYMENT.md](DEPLOYMENT.md) to go live
4. ✅ Join our community

## Support

- 📖 [Next.js Docs](https://nextjs.org/docs)
- 🎬 [Framer Motion Docs](https://www.framer.com/motion)
- 🎨 [Tailwind Docs](https://tailwindcss.com)
- 💬 [GitHub Discussions](https://github.com/yourusername/wellplan/discussions)

---

**Ready to build something amazing?** 🚀

Edit `lib/data.ts` and watch your site transform!
