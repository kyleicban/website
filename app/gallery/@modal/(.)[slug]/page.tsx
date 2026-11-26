import { notFound } from "next/navigation";
import { galleries } from "@/content/galleries";
import GalleryPostModal from "@/components/gallery/GalleryPostModal";
import type { Gallery } from "@/content/galleries/types";

interface PageProps {
  params: { slug: string };
}

export default function InterceptedGalleryPostPage({ params }: PageProps) {
  const gallery: Gallery | undefined = galleries.find(
    (item) => item.slug === params.slug,
  );

  if (!gallery) {
    notFound();
  }

  return <GalleryPostModal gallery={gallery} />;
}
