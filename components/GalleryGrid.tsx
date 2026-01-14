"use client";

import { useState, useEffect, useRef } from "react";
import type { Gallery } from "@/content/galleries/types";
import GalleryCard from "./GalleryCard";

interface GalleryGridProps {
  galleries: Gallery[];
}

const INITIAL_BATCH_SIZE = 18;
const LOAD_MORE_BATCH_SIZE = 6;
const BATCH_LOAD_DELAY = 500; // Delay in ms before allowing next batch to load

export default function GalleryGrid({ galleries }: GalleryGridProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH_SIZE);
  const observerTarget = useRef<HTMLDivElement>(null);
  const isLoadingRef = useRef(false);
  const loadTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !isLoadingRef.current &&
          visibleCount < galleries.length
        ) {
          isLoadingRef.current = true;

          // Clear any existing timeout
          if (loadTimeoutRef.current) {
            clearTimeout(loadTimeoutRef.current);
          }

          setVisibleCount((prev) => {
            const newCount = Math.min(
              prev + LOAD_MORE_BATCH_SIZE,
              galleries.length
            );

            // Reset loading flag after a delay to allow images to render
            loadTimeoutRef.current = setTimeout(() => {
              isLoadingRef.current = false;
            }, BATCH_LOAD_DELAY);

            return newCount;
          });
        }
      },
      {
        threshold: 0.1,
        rootMargin: "200px", // Start loading when 200px away from viewport
      }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
      }
    };
  }, [visibleCount, galleries.length]);

  const visibleGalleries = galleries.slice(0, visibleCount);
  const hasMore = visibleCount < galleries.length;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
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
          className="flex justify-center items-center py-8 min-h-[100px]"
          aria-label="Loading more galleries"
        >
          <div className="text-neutral-400 dark:text-neutral-600 text-sm">
            Loading more...
          </div>
        </div>
      )}
    </>
  );
}
