import Link from "next/link";
import Image from "next/image";
import { getMediaItems } from "@/content/galleries/utils";
import type { Gallery } from "@/content/galleries/types";

interface GalleryCardProps {
  gallery: Gallery;
  priority?: boolean;
}

export default function GalleryCard({
  gallery,
  priority = false,
}: GalleryCardProps) {
  const mediaItems = getMediaItems(gallery);
  const firstMedia = mediaItems[0];
  const totalCount = mediaItems.length;

  if (!firstMedia) {
    console.error("Received undefined media!");
    return null;
  }

  return (
    <Link
      href={`/gallery/${gallery.slug}`}
      className="group relative aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-900"
      aria-label={`View gallery: ${gallery.title || gallery.slug}`}
    >
      {firstMedia.type === "video" ? (
        <>
          <video
            src={firstMedia.src}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            muted
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/60 rounded-full p-2">
              <svg
                className="w-6 h-6 text-white"
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
          src={firstMedia.src}
          alt={gallery.caption || gallery.title || gallery.slug}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
      )}
      {totalCount > 1 && (
        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
          {totalCount}
        </div>
      )}
    </Link>
  );
}
