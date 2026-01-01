```md
# Personal Photo Gallery – Implementation Plan

A static, Instagram-like personal photo website built with:

- Next.js (App Router)
- TypeScript
- Next/Image
- Tailwind CSS
- Framer Motion
- File-based content
- Deployed on Vercel

The site supports:

- Static photo viewing only
- Grouped photos per post
- Captions, date, and location
- Swipeable photo viewing
- Simple routing (`/`, `/gallery`, `/gallery/[slug]`)

No backend, no authentication, no social features.

---

## 1. Project Goals & Constraints

### Goals

- Minimal, distraction-free photo sharing
- Fully static deployment
- Manual photo uploads via Git
- Instagram-like UX (grid + swipe)
- Strong TypeScript guarantees
- Scalable content organization

### Constraints

- No CMS
- No database
- No runtime data fetching
- No user-generated content

---

## 2. Tech Stack

| Layer     | Technology              |
| --------- | ----------------------- |
| Framework | Next.js (App Router)    |
| Language  | TypeScript              |
| Styling   | Tailwind CSS            |
| Images    | Next/Image              |
| Animation | Framer Motion           |
| Hosting   | Vercel                  |
| Content   | File-based (TypeScript) |

---

## 3. Directory Structure
```

/
├─ app/
│ ├─ layout.tsx
│ ├─ page.tsx
│ └─ gallery/
│ ├─ layout.tsx
│ ├─ page.tsx
│ └─ [slug]/
│ └─ page.tsx
│
├─ components/
│ ├─ GalleryGrid.tsx
│ ├─ GalleryCard.tsx
│ ├─ PhotoGrid.tsx
│ ├─ PhotoViewer.tsx
│ └─ CaptionOverlay.tsx
│
├─ content/
│ └─ galleries/
│ ├─ types.ts
│ ├─ index.ts
│ └─ kyoto-trip.ts
│
├─ public/
│ └─ photos/
│ └─ kyoto/
│ ├─ 1.jpg
│ ├─ 2.jpg
│ └─ 3.jpg
│
├─ styles/
│ └─ globals.css
│
└─ tailwind.config.ts

````

---

## 4. Routing Strategy

| Route | Description |
|-----|------------|
| `/` | Landing page / intro |
| `/gallery` | Grid of all gallery posts |
| `/gallery/[slug]` | Individual photo post |

Routing is handled via Next.js App Router and file-based routes.

---

## 5. Content Model (File-Based)

### Gallery Type

```ts
export interface Gallery {
  slug: string;
  title?: string;
  date: string;
  location?: string;
  caption?: string;
  photos: string[];
}
````

### Individual Gallery File

```ts
const kyotoTrip: Gallery = {
  slug: "kyoto-trip",
  date: "2024-03-14",
  location: "Kyoto, Japan",
  caption: "Early mornings in Gion.",
  photos: ["/photos/kyoto/1.jpg", "/photos/kyoto/2.jpg", "/photos/kyoto/3.jpg"],
};

export default kyotoTrip;
```

### Gallery Index

```ts
import kyotoTrip from "./kyoto-trip";

export const galleries = [kyotoTrip];
```

This index file is the single source of truth for all galleries.

---

## 6. Rendering Strategy

### Server Components (Default)

Used for:

- Gallery grids
- Static layouts
- Metadata
- SEO

### Client Components

Used only for:

- Swipe gestures
- Animations
- Keyboard navigation

Client components must be explicitly marked with `"use client"`.

---

## 7. Gallery Grid Implementation

- Use CSS Grid via Tailwind
- 3-column layout on desktop
- Responsive fallback on mobile

```css
grid grid-cols-3 gap-1
```

Each gallery card:

- Shows preview images
- Links to `/gallery/[slug]`
- Uses Next/Image for optimization

---

## 8. Individual Gallery Page

### Responsibilities

- Render all photos for a single gallery
- Display metadata (date, location)
- Show caption
- Enable swipe navigation

### Photo Display Modes

- Grid overview (3×n)
- Fullscreen swipe viewer

---

## 9. Swipe & Animation (Framer Motion)

Use Framer Motion for:

- Horizontal drag/swipe between images
- Smooth fade/slide transitions
- Optional shared layout transitions

Avoid animating layout-heavy components unnecessarily.

---

## 10. Image Optimization

- All images stored in `/public/photos`
- Rendered via `next/image`
- Lazy loading enabled by default
- Responsive sizing based on viewport

Optional enhancements:

- Blur placeholders
- Aspect-ratio locking
- Progressive loading

---

## 11. Styling & Design System

### Tailwind Guidelines

- Use utility-first styling
- Extract repeated patterns into components
- Keep typography minimal

### Design Tokens

- Neutral background
- Subtle captions
- Minimal borders
- Focus on imagery

---

## 12. Accessibility

- Keyboard navigation for galleries
- Focus trapping in fullscreen viewer
- `aria-label`s for interactive controls
- Respect `prefers-reduced-motion`

---

## 13. SEO & Metadata

Each gallery page should generate:

- Title (date + location)
- Description (caption)
- Open Graph image (first photo)

All metadata generated at build time.

---

## 14. Deployment Workflow (Vercel)

### Publishing New Photos

1. Add images to `/public/photos`
2. Create a new gallery file in `/content/galleries`
3. Export it in `index.ts`
4. Commit and push to main branch
5. Vercel builds and deploys automatically

No runtime dependencies.

---

## 15. Future Extensions (Optional)

- Tags or categories
- Year-based grouping
- MDX captions
- Light/dark mode
- RSS feed
- Static search

All possible without changing the core architecture.

---

## 16. Non-Goals

- Authentication
- Likes, comments, followers
- Upload UI
- Admin dashboard
- Backend APIs

This project intentionally avoids these.

---

## End

This architecture prioritizes simplicity, performance, and ownership.
