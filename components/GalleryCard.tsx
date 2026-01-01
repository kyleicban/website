import Link from "next/link";
import Image from "next/image";
import type { Gallery } from "@/content/galleries/types";

interface GalleryCardProps {
  gallery: Gallery;
}

export default function GalleryCard({ gallery }: GalleryCardProps) {
  const firstPhoto = gallery.photos[0];
  
  return (
    <Link 
      href={`/gallery/${gallery.slug}`}
      className="group relative aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-900"
      aria-label={`View gallery: ${gallery.title || gallery.slug}`}
    >
      <Image
        src={firstPhoto}
        alt={gallery.caption || gallery.title || gallery.slug}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {gallery.photos.length > 1 && (
        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
          {gallery.photos.length}
        </div>
      )}
    </Link>
  );
}

