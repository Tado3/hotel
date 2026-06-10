# Serenova — Boutique Hotel Website

A luxury boutique hotel website built with **React + TypeScript + Vite**, with full SEO support.

## Getting Started

```bash
npm install
npm run dev
```

Open **http://localhost:5173**

## Project Structure

```
hotel/
├── index.html              ← SEO meta tags live here
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   ├── robots.txt          ← Search engine crawl rules
│   └── sitemap.xml         ← Site map for Google
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── data/index.ts       ← Edit all content here (rooms, images, prices)
    ├── styles/global.css   ← Global design tokens & utilities
    └── components/
        ├── Navbar.tsx / .module.css
        ├── Hero.tsx / .module.css
        ├── Booking.tsx / .module.css
        ├── Rooms.tsx / .module.css
        ├── Dining.tsx / .module.css
        ├── Amenities.tsx / .module.css
        ├── Gallery.tsx / .module.css
        ├── Contact.tsx / .module.css
        └── Footer.tsx / .module.css
```

## SEO Checklist

- [x] Title & meta description in `index.html`
- [x] Open Graph tags (Facebook, WhatsApp previews)
- [x] Twitter Card tags
- [x] robots.txt in `public/`
- [x] sitemap.xml in `public/`
- [ ] Replace `https://www.yourhotelwebsite.com` with your real domain everywhere
- [ ] Add a real `og-image.jpg` to the `public/` folder (1200x630px recommended)
- [ ] Register on Google Search Console and submit sitemap
- [ ] Create a Google Business Profile

## Customising Content

- **Hotel name, images, prices, rooms** → edit `src/data/index.ts`
- **Colours & fonts** → edit CSS variables at the top of `src/styles/global.css`
- **SEO meta tags** → edit `index.html`
- **To rename from "Serenova"** → find & replace in `Navbar.tsx`, `Hero.tsx`, `Footer.tsx`, `index.html`
- **Images** load from Unsplash (free). Replace URLs in `src/data/index.ts` with your own photos.

## Deploying (to go live)

The easiest free option is **Netlify**:
1. Run `npm run build` — creates a `dist/` folder
2. Go to netlify.com → drag and drop the `dist/` folder
3. Get a free live URL instantly
"# hotel" 
