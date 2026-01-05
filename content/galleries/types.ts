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
    items.push({ src: photo, type: "image" });
  });
  
  if (gallery.videos) {
    gallery.videos.forEach((video) => {
      items.push({ src: video, type: "video" });
    });
  }
  
  return items;
}

