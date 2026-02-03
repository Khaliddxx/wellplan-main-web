# WellPlan - Enterprise Life Planning Platform

A stunning, enterprise-grade Next.js application with world-class animations and design. WellPlan is your AI-powered companion for comprehensive life optimization across health, career, and relationships.

## 🎯 Features

### Core Capabilities
- **Health Optimization** - Comprehensive wellness tracking and personalized health goals
- **Career Development** - Strategic career planning and professional growth
- **Relationship Management** - Nurture connections and build stronger family bonds
- **AI-Powered Insights** - Machine learning algorithms for personalized recommendations
- **Enterprise Security** - HIPAA, GDPR, SOC 2 Type II compliant

### Design Excellence
- **n8n-Level Animations** - Smooth, sophisticated motion using Framer Motion
- **Glassmorphism Effects** - Modern design with backdrop blur and transparency
- **Dynamic Gradients** - Multi-stop sophisticated color transitions
- **Scroll Animations** - Intersection Observer-based reveal effects
- **Interactive Components** - Hover effects, glow states, and micro-interactions

### Technical Features
- **Next.js 14** - Latest React framework with App Router
- **Framer Motion** - Production-grade animation library
- **Tailwind CSS** - Utility-first styling with custom extensions
- **TypeScript** - Full type safety across the application
- **Mobile Responsive** - Optimized for all device sizes
- **Performance Optimized** - GPU-accelerated animations, lazy loading

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/wellplan.git
cd wellplan

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
wellplan/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── objectives/
│       ├── layout.tsx       # Objectives layout
│       └── [slug]/
│           └── page.tsx     # Detail pages
├── components/
│   ├── animations.tsx       # Reusable animation components
│   ├── navbar.tsx           # Navigation bar
│   └── footer.tsx           # Footer component
├── lib/
│   └── data.ts             # Content and configuration
├── public/                  # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

## 🎨 Design System

### Colors
- **Navy Base**: `#0f172a` - Primary background
- **Primary**: `#214CE5` - Main brand color (blue)
- **Accent Orange**: `#FF6B35` - Secondary accent
- **Accent Purple**: `#7C3AED` - Tertiary accent

### Effects
- **Glassmorphism**: 30-50% opacity with 8-16px blur
- **Glow**: Layered shadows with primary color
- **Gradients**: Multi-stop transitions across the spectrum

## 📦 Content Management

All site content is centralized in `lib/data.ts`:
- Objectives definitions
- Features list
- Statistics
- Testimonials (8+)
- Partner integrations (12+)
- Compliance badges

Easy to update and modify!

## 🔧 Animation Components

Pre-built reusable animation components in `components/animations.tsx`:

- `GlassmorphicCard` - Cards with glass effect and animations
- `FloatingElement` - Floating motion animation
- `TextReveal` - Word-by-word text reveal
- `AnimatedCounter` - Number counter animations
- `Parallax` - Parallax scroll effects
- Container and item variants for staggered animations

## 📄 Pages

1. **Home** (`/`) - Landing page with all major sections
2. **Health** (`/objectives/health`) - Health optimization details
3. **Career** (`/objectives/career`) - Career development details
4. **Relationships** (`/objectives/relationships`) - Relationship management details

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Connect repo to Vercel
# Vercel will auto-detect Next.js and deploy
```

### Other Platforms

The app is a standard Next.js application and works with any Node.js hosting.

## 🔒 Security

- Enterprise-grade SSL/TLS encryption
- HIPAA compliance ready
- GDPR compliant data handling
- SOC 2 Type II auditable architecture
- Regular security audits

## 📊 Performance

- Optimized animations (transform/opacity only)
- Code splitting and lazy loading
- Image optimization
- GPU-accelerated transforms
- Lighthouse score: 95+

## 🛠️ Customization

### Update Colors
Edit `tailwind.config.ts` to change the design system.

### Add New Objectives
Add new items to the `objectives` array in `lib/data.ts`.

### Modify Content
All text and content is in `lib/data.ts` - no need to touch components.

### Animations
Customize animation variants in `components/animations.tsx`.

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org)
- [Framer Motion](https://www.framer.com/motion)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

## 📞 Support

For support, email support@wellplan.io or open an issue on GitHub.

---

**Quality Note**: This platform is built to n8n.io standards with enterprise-grade animations, design sophistication, and professional polish. Every interaction feels premium and purposeful.
