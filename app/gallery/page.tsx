"use client"

import { galleries } from "@/content/galleries";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import TypeWriterDescription from "@/components/TypeWriterDescription";

export default function GalleryPage() {
  const phrases = [
    "F*ck Instagram...",
    "Reminiscing about 2016...",
    "Romanticizing my life...",
    "Planning my next vacation...",
  ];
  
  // Pick a phrase only after the component mounts on the client
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

  // Sort galleries by date (newest first)
  const sortedGalleries = [...galleries].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-light mb-8">Gallery</h1>
      <TypeWriterDescription phrase={randomPhrase} />
      {sortedGalleries.length > 0 ? (
        <GalleryGrid galleries={sortedGalleries} />
      ) : (
        <p className="text-neutral-600 dark:text-neutral-400">
          No galleries yet. Check back soon!
        </p>
      )}
    </div>
  );
}

