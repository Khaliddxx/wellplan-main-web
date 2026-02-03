# Contributing to WellPlan

We love your input! Whether it's bug reports, feature requests, or code contributions, your help makes WellPlan better.

## Getting Started

### Local Development

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/wellplan.git
   cd wellplan
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start dev server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000)

### Project Structure

```
wellplan/
├── app/                    # Next.js app router
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── objectives/        # Dynamic objective pages
├── components/            # Reusable React components
│   ├── animations.tsx     # Animation utilities
│   ├── navbar.tsx        # Navigation
│   └── footer.tsx        # Footer
├── lib/                  # Utility functions and data
│   └── data.ts          # Site content (easy to update!)
├── public/              # Static files
└── tailwind.config.ts   # Tailwind configuration
```

## Making Changes

### Content Updates

All site content lives in `lib/data.ts`. Easy updates:

```typescript
// Add a new objective
export const objectives: Objective[] = [
  {
    id: 'finance',
    slug: 'finance',
    title: 'Financial Planning',
    // ... rest of config
  },
]

// Add testimonials
export const testimonials = [
  {
    name: 'Your Name',
    quote: 'Amazing platform!',
    // ...
  },
]
```

### Component Updates

Components are in `components/` folder:
- Edit to update styling or functionality
- Reusable animations in `animations.tsx`
- Keep components small and focused

### Styling

- Use Tailwind CSS for utility classes
- Custom animations in `app/globals.css`
- Design tokens in `tailwind.config.ts`

**Colors** (defined in Tailwind config):
- Navy: `#0f172a`
- Primary Blue: `#214CE5`
- Orange: `#FF6B35`
- Purple: `#7C3AED`

## Code Style

### TypeScript

- Strict mode enabled
- Full type annotations
- No `any` types (use `unknown` + type guard)

### Components

```tsx
// ✅ Good
'use client'

import { motion } from 'framer-motion'

interface ComponentProps {
  title: string
  onClick?: () => void
}

export const Component = ({ title, onClick }: ComponentProps) => {
  return <motion.div>{title}</motion.div>
}

// ❌ Avoid
const component = ({ props }: any) => {
  return <div onClick={props.onClick}>{props.title}</div>
}
```

### Animations

Use Framer Motion for all animations:

```tsx
// ✅ Good
<motion.button
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
  Click me
</motion.button>

// ❌ Avoid
<button style={{ transform: 'scale(1)' }}>
  Click me
</button>
```

## Testing

Currently no automated tests, but manual testing:

```bash
# Test all pages load
npm run build

# Test mobile responsiveness
npm run dev
# Use browser DevTools for mobile view

# Test performance
npm run build
# Check .next output size
```

## Git Workflow

1. **Create feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes**
   ```bash
   git add .
   git commit -m "feat: Add amazing feature"
   ```

3. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

4. **Open Pull Request**
   - Describe changes clearly
   - Link any related issues
   - Include screenshots if UI changes

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`

**Examples**:
- `feat(home): Add mouse-tracked hero background`
- `fix(animations): Correct stagger timing`
- `docs: Update deployment guide`
- `style(colors): Update primary color gradient`

## Pull Request Process

1. **Update documentation** if needed
2. **Test locally** (`npm run dev` and `npm run build`)
3. **Keep PR focused** on single feature/fix
4. **Write clear description** explaining changes
5. **Link related issues** with `Closes #123`

## Adding Features

### New Page

1. Create in `app/my-page/page.tsx`
2. Add to navbar links in `components/navbar.tsx`
3. Add any new components to `components/`
4. Style with Tailwind and animations

### New Animation

Add to `components/animations.tsx`:

```tsx
export const myAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}
```

### New Data Type

Update `lib/data.ts`:

```tsx
export interface MyData {
  id: string
  title: string
  // ...
}

export const myData: MyData[] = [
  // ...
]
```

## Performance Guidelines

- Use `transform` and `opacity` for animations (GPU accelerated)
- Lazy load images with `next/image`
- Code split with dynamic imports
- Avoid layout shift (reserve space)
- Test with DevTools Lighthouse

## Accessibility

- Semantic HTML (`<button>`, `<nav>`, etc.)
- ARIA labels where needed
- Color contrast ≥ 4.5:1
- Keyboard navigation support
- Test with screen readers

## Documentation

- Update README for major changes
- Comment complex logic
- Include JSDoc for functions
- Update DEPLOYMENT.md if needed

## Questions?

- Open a GitHub Discussion
- Check existing issues
- Read the docs folder

## Code of Conduct

- Be respectful and inclusive
- Welcome all experience levels
- Provide constructive feedback
- Help others learn

---

**Thank you for contributing!** 🎉

Every contribution helps make WellPlan better for everyone.
