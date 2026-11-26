import { notFound } from "next/navigation";
import { galleries } from "@/content/galleries";
import GalleryContent from "@/components/gallery/GalleryContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function GallerySlugPage({ params }: PageProps) {
  const { slug } = await params;
  const gallery = galleries.find((g) => g.slug === slug);

  if (!gallery) {
    notFound();
  }

  return <GalleryContent gallery={gallery} />;
}
