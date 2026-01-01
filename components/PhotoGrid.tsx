"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoViewer from "./PhotoViewer";

interface PhotoGridProps {
  photos: string[];
  caption?: string;
  date?: string;
  location?: string;
}

export default function PhotoGrid({
  photos,
  caption,
  date,
  location,
}: PhotoGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {photos.map((photo, index) => (
          <button
            key={photo}
            onClick={() => setSelectedIndex(index)}
            className="relative aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-900 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
            aria-label={`View photo ${index + 1} of ${photos.length}`}
          >
            <Image
              src={photo}
              alt={`Photo ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <PhotoViewer
          photos={photos}
          initialIndex={selectedIndex}
          caption={caption}
          date={date}
          location={location}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  );
}

