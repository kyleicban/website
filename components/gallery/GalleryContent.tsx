"use client";

import { useRouter } from "next/navigation";
import PhotoGrid from "@/components/gallery/PhotoGrid";
import type { Gallery } from "@/content/galleries/types";
import { formatDate } from "@/content/galleries/utils";

interface GalleryContentProps {
  gallery: Gallery;
  isModal?: boolean;
}

export default function GalleryContent({
  gallery,
  isModal,
}: GalleryContentProps) {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="flex justify-between items-start gap-4 mb-8">
        <div className="min-w-0">
          {gallery.title && (
            <h1 className="text-3xl md:text-4xl font-light mb-4">
              {gallery.title}
            </h1>
          )}

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-neutral-600 dark:text-neutral-400 text-sm">
            {gallery.date && <span>{formatDate(gallery.date)}</span>}
            {gallery.location && <span>{gallery.location}</span>}
          </div>

          {gallery.caption && (
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">
              {gallery.caption}
            </p>
          )}
        </div>

        <button
          onClick={() => {
            if (isModal) {
              router.back();
            } else {
              router.push("/gallery");
            }
          }}
          className="shrink-0 flex items-center text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          aria-label="Back to gallery"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <PhotoGrid gallery={gallery} />
    </div>
  );
}
