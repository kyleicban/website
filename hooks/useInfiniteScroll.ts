import { Gallery } from "@/content/galleries/types";
import { useCallback, useEffect, useRef, useState } from "react";

interface InfiniteScrollParams {
  galleries: Gallery[];
}

const INITIAL_BATCH_SIZE = 18;
const LOAD_MORE_BATCH_SIZE = 18;
const BATCH_LOAD_DELAY = 500;

export default function useInfiniteScroll(galleries: Gallery[]) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH_SIZE);
  const observerTarget = useRef<HTMLDivElement>(null);
  const isLoadingRef = useRef(false);
  const loadTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 1. Move the loading logic into a reusable function
  const loadMore = useCallback(() => {
    if (isLoadingRef.current || visibleCount >= galleries.length) return;
    isLoadingRef.current = true;

    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_BATCH_SIZE, galleries.length),
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
      },
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

  return { loadMore, visibleGalleries, hasMore, observerTarget };
}
