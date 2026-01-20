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
