import type { Gallery, MediaItem } from "./types";

export function getMediaItems(gallery: Gallery): MediaItem[] {
  const items: MediaItem[] = [];

  gallery.photos.forEach((photo) => {
    if (photo.endsWith(".mov")) {
      items.push({ src: photo, type: "video" });
      return;
    }
    items.push({ src: photo, type: "image" });
  });

  return items;
}

/**
 * Formats a date string (YYYY-MM-DD) as a local date string.
 * Parses the date as a local date to avoid timezone shifts.
 */
export function formatDate(dateString: string): string {
  // Parse YYYY-MM-DD format and create a local date
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
