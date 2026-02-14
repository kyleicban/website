"use client";

import type { Gallery } from "@/content/galleries/types";
import GalleryCard from "./GalleryCard";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

interface GalleryGridProps {
  galleries: Gallery[];
}

export default function GalleryGrid({ galleries }: GalleryGridProps) {
  const { loadMore, visibleGalleries, hasMore, observerTarget } =
    useInfiniteScroll(galleries);

  return (
    <>
      <div className="grid grid-cols-3 gap-1">
        {visibleGalleries.map((gallery, index) => (
          <GalleryCard
            key={gallery.slug}
            gallery={gallery}
            priority={index < 6}
          />
        ))}
      </div>

      {hasMore && (
        <div
          ref={observerTarget}
          className="flex justify-center items-center py-12 min-h-[100px]"
        >
          {/* 2. Hidden button/link fallback */}
          <button
            onClick={loadMore}
            className="text-neutral-400 dark:text-neutral-600 text-sm hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
            aria-label="Manually load more galleries"
          >
            Loading...
          </button>
        </div>
      )}
    </>
  );
}
