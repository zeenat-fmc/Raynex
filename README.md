# RAYNEX Website

A 3-page premium marketing site for RAYNEX (lighting & electrical products),
built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Pages

- `/` — Home (hero, brand intro, product highlights, applications, why-choose, final CTA)
- `/products` — Full 9-product showcase grid with a click-to-expand detail view
- `/contact` — Company details, WhatsApp CTA, map placeholder, contact form

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000. (The first `npm run dev`/`npm run build`
needs internet access once, to fetch the Manrope/Inter fonts from Google Fonts.)

```bash
npm run build   # production build
npm run start   # run the production build
```

## Editing content

**Everything you're likely to change lives in `src/lib/products.ts`:**

- `products` — the 9 product entries (name, category, description, optional
  `image` path). Add a real photo by placing it in `public/products/` and
  setting `image: "/products/your-file.jpg"` — the placeholder graphic
  disappears automatically once `image` is set.
- `applications` — the 6 application/use-case labels.
- `benefits` — the "Why Choose RAYNEX" cards.
- `contactDetails` — address, phone, email, business hours shown on the
  Contact page and in the footer.

**Images:** every image slot on the site (hero, brand section, product cards,
application cards, map) uses the `ImagePlaceholder` component
(`src/components/ImagePlaceholder.tsx`). It renders a styled placeholder
until you pass a real `src`, so you can drop in photography section by
section without breaking any layout.

**Colors & type:** brand tokens (the RAYNEX blue sampled from the logo,
charcoal surfaces, type families) live in `src/app/globals.css` under
`:root` and `@theme inline`.

**Logo:** `public/brand/raynex-logo.jpg` — swap this file to update the mark
used in the navbar and footer.

## Structure

```
src/
  app/
    layout.tsx          Root layout, fonts, Navbar/Footer shell
    page.tsx             Home page
    products/page.tsx    Products page
    contact/page.tsx     Contact page
    globals.css          Design tokens + global styles
  components/            Reusable UI (Navbar, Hero, ProductCard, etc.)
  lib/
    products.ts           All editable content lives here
```

No cart, checkout, or account functionality is included by design — this is
a product showcase site, not an e-commerce store.
