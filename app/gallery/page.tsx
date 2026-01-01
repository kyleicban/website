import { galleries } from "@/content/galleries";
import GalleryGrid from "@/components/GalleryGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Photo Gallery",
  description: "Browse all photo galleries",
};

export default function GalleryPage() {
  // Sort galleries by date (newest first)
  const sortedGalleries = [...galleries].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-light mb-8">Gallery</h1>
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

