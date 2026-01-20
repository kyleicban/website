# Personal Photo Gallery

A static, Instagram-like personal photo website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 📸 Static photo and video viewing
- 🖼️ Grouped media per post
- 🎥 Video support with playback controls
- 📝 Captions, date, and location metadata
- 👆 Swipeable media viewing
- ⌨️ Keyboard navigation
- ♿ Accessibility features
- 🎨 Minimal, distraction-free design

## Getting Started

### Install Dependencies

```bash
npm install
```

### Add Your Media

1. Add images and videos to `/public/photos/[gallery-name]/`
2. Create a new gallery file in `/content/galleries/`
3. Export it in `/content/galleries/index.ts`

Supported video formats: `.mp4`, `.webm`, `.ogg`, `.mov`, `.avi`

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

- `/app` - Next.js App Router pages
- `/components` - React components
- `/content/galleries` - Gallery content files
- `/public/photos` - Image and video files
- `/styles` - Global CSS styles

## Adding New Galleries

1. Create a new TypeScript file in `/content/galleries/` (e.g., `my-trip.ts`)
2. Define your gallery:

```typescript
import type { Gallery } from "./types";

const myTrip: Gallery = {
  slug: "my-trip",
  date: "2024-01-01",
  location: "Somewhere",
  caption: "A beautiful day.",
  photos: ["/photos/my-trip/1.jpg", "/photos/my-trip/2.jpg"],
  videos: ["/photos/my-trip/video.mp4"], // Optional: add videos
};

export default myTrip;
```

3. Import and export it in `/content/galleries/index.ts`:

```typescript
import myTrip from "./my-trip";

export const galleries: Gallery[] = [kyotoTrip, myTrip];
```

4. Add your images and videos to `/public/photos/my-trip/`

## Deployment

This project is designed to be deployed on Vercel. Simply connect your Git repository and Vercel will automatically build and deploy.

## License

MIT
