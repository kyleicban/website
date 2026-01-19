"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { Gallery } from "@/content/galleries/types";
import GalleryCard from "./GalleryCard";

interface GalleryGridProps {
  galleries: Gallery[];
}

const INITIAL_BATCH_SIZE = 18;
const LOAD_MORE_BATCH_SIZE = 6;
const BATCH_LOAD_DELAY = 500;

export default function GalleryGrid({ galleries }: GalleryGridProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH_SIZE);
  const observerTarget = useRef<HTMLDivElement>(null);
  const isLoadingRef = useRef(false);
  const loadTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 1. Move the loading logic into a reusable function
  const loadMore = useCallback(() => {
    if (isLoadingRef.current || visibleCount >= galleries.length) return;
    isLoadingRef.current = true;
  
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_BATCH_SIZE, galleries.length)
    );
  }, [visibleCount, galleries.length]);
  
  useEffect(() => {
    if (!isLoadingRef.current) return;
  
    const timeout = setTimeout(() => {
      isLoadingRef.current = false;
    }, BATCH_LOAD_DELAY);
  
    return () => clearTimeout(timeout);
  }, [visibleCount]);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      {
        threshold: 0,
        rootMargin: "400px",
      }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    
      if (currentTarget.getBoundingClientRect().top < window.innerHeight) {
        loadMore();
      }
    }

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
      if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current);
    };
  }, [loadMore]);

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
          className="flex justify-center items-center py-12 min-h-[100px]"
        >
          {/* 2. Hidden button/link fallback */}
          <button
            onClick={loadMore}
            className="text-neutral-400 dark:text-neutral-600 text-sm hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
            aria-label="Manually load more galleries"
          >
            {isLoadingRef.current ? "Loading..." : "Loading more (or click to force)"}
          </button>
        </div>
      )}
    </>
  );
}