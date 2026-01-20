"use client";

import { useState } from "react";
import Image from "next/image";
import MediaViewer from "./MediaViewer";
import { getMediaItems } from "@/content/galleries/utils";
import type { Gallery } from "@/content/galleries/types";

interface PhotoGridProps {
  gallery: Gallery;
}

export default function PhotoGrid({ gallery }: PhotoGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const mediaItems = getMediaItems(gallery);

  return (
    <>
      <div className="grid grid-cols-3 gap-1">
        {mediaItems.map((item, index) => (
          <button
            key={item.src}
            onClick={() => setSelectedIndex(index)}
            className="relative aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-900 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
            aria-label={`View ${item.type} ${index + 1} of ${mediaItems.length}`}
          >
            {item.type === "video" ? (
              <>
                <video
                  src={item.src}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/60 rounded-full p-3">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </>
            ) : (
              <Image
                src={item.src}
                alt={`Photo ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <MediaViewer
          media={mediaItems}
          initialIndex={selectedIndex}
          caption={gallery.caption}
          date={gallery.date}
          location={gallery.location}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  );
}
