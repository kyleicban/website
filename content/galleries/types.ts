export interface Gallery {
  slug: string;
  title?: string;
  date: string;
  location?: string;
  caption?: string;
  photos: string[];
  videos?: string[];
}

export interface MediaItem {
  src: string;
  type: "image" | "video";
}

export function isVideo(src: string): boolean {
  const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi"];
  return videoExtensions.some((ext) => src.toLowerCase().endsWith(ext));
}

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
