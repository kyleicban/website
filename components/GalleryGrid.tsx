import type { Gallery } from "@/content/galleries/types";
import GalleryCard from "./GalleryCard";

interface GalleryGridProps {
  galleries: Gallery[];
}

export default function GalleryGrid({ galleries }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
      {galleries.map((gallery) => (
        <GalleryCard key={gallery.slug} gallery={gallery} />
      ))}
    </div>
  );
}

