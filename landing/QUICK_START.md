# Quick Start Guide

Get your landing page up and running in 2 minutes.

## 🚀 Start Development Server

```bash
cd landing
npm run dev
```

Visit **http://localhost:3000** in your browser.

## 📝 Make Your First Edit

### 1. Change the Headline

Edit `src/components/Hero.tsx`:

```typescript
<h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
  Your custom headline here
</h1>
```

Save the file and see the change instantly (hot reload).

### 2. Change the Button Color

Edit `src/app/globals.css`:

```css
:root {
  --accent: #3b82f6;  /* Change to blue */
}
```

### 3. Update Product Name

Edit `src/components/Footer.tsx`:

```typescript
<p className="text-lg font-medium text-foreground">
  Your Product Name
</p>
```

## 🎨 Common Customizations

### Change Colors
File: `src/app/globals.css`
```css
:root {
  --background: #fafaf9;    /* Page background */
  --foreground: #292524;    /* Text color */
  --accent: #ea580c;        /* Button color */
  --accent-light: #fed7aa;  /* Badge background */
  --muted: #78716c;         /* Secondary text */
}
```

### Update SEO
File: `src/app/layout.tsx`
```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your description",
};
```

### Connect CTA Button
File: `src/app/page.tsx`
```typescript
const handleGetStarted = () => {
  // Option 1: Navigate to signup page
  window.location.href = '/signup';
  
  // Option 2: Open external link
  // window.open('https://app.yoursite.com/signup', '_blank');
  
  // Option 3: Scroll to form
  // document.getElementById('form')?.scrollIntoView();
};
```

## 📱 Test Responsive Design

1. Open DevTools (F12 or Cmd+Option+I)
2. Click device toolbar icon (Cmd+Shift+M)
3. Test different screen sizes:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1440px)

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in `.next/` folder.

## 🚢 Deploy

### Vercel (Easiest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`

### Other Platforms
```bash
npm run build
npm start
```

## 📚 Learn More

- **Customize everything**: Read `CUSTOMIZATION_GUIDE.md`
- **Understand structure**: Read `PAGE_STRUCTURE.md`
- **Check implementation**: Read `IMPLEMENTATION_SUMMARY.md`

## 🆘 Troubleshooting

### Port 3000 already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Changes not showing
1. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
2. Clear browser cache
3. Restart dev server

### Build errors
```bash
# Check TypeScript
npx tsc --noEmit

# Check linter
npm run lint
```

## ✅ Checklist

- [ ] Dev server running on http://localhost:3000
- [ ] Changed headline in Hero section
- [ ] Updated product name in Footer
- [ ] Connected CTA button to your signup flow
- [ ] Updated SEO metadata
- [ ] Tested on mobile, tablet, desktop
- [ ] Production build successful
- [ ] Ready to deploy

## 🎯 Next Steps

1. **Customize content** - Update all text to match your brand
2. **Connect CTAs** - Link buttons to your signup/onboarding
3. **Add analytics** - Track visitor behavior
4. **Test conversion** - A/B test different headlines
5. **Deploy** - Ship to production

---

**Need help?** Check the other documentation files in this directory.

**Ready to deploy?** Your landing page is production-ready!
