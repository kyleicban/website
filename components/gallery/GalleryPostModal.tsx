"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MediaViewer from "./MediaViewer";
import GalleryContent from "./GalleryContent";
import { getMediaItems } from "@/content/galleries/utils";
import type { Gallery } from "@/content/galleries/types";

interface GalleryPostModalProps {
  gallery: Gallery;
}

export default function GalleryPostModal({ gallery }: GalleryPostModalProps) {
  const router = useRouter();
  const media = getMediaItems(gallery);

  useEffect(() => {
    const scrollY = window.scrollY;
    const { style } = document.body;

    const previous = {
      position: style.position,
      top: style.top,
      left: style.left,
      right: style.right,
      width: style.width,
    };

    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";

    return () => {
      style.position = previous.position;
      style.top = previous.top;
      style.left = previous.left;
      style.right = previous.right;
      style.width = previous.width;
      window.scrollTo(0, scrollY);
    };
  }, []);

  useEffect(() => {
    if (media.length !== 1) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          router.back();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [router]);

  if (media.length === 0) {
    return null;
  }

  // A single item should open directly in the media viewer.
  if (media.length === 1) {
    return (
      <MediaViewer
        media={media}
        caption={gallery.caption}
        date={gallery.date}
        location={gallery.location}
        onClose={() => router.back()}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-40 overflow-y-auto bg-white dark:bg-neutral-950 pt-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <GalleryContent gallery={gallery} isModal />
      </main>
    </div>
  );
}
