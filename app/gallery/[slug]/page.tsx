import { notFound } from "next/navigation";
import { galleries } from "@/content/galleries";
import PhotoGrid from "@/components/PhotoGrid";
import type { Metadata } from "next";
import type { Gallery } from "@/content/galleries/types";
import { getMediaItems } from "@/content/galleries/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return galleries.map((gallery) => ({
    slug: gallery.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const gallery = galleries.find((g) => g.slug === slug);

  if (!gallery) {
    return {
      title: "Gallery Not Found",
    };
  }

  const title =
    gallery.title ||
    `${gallery.date}${gallery.location ? ` - ${gallery.location}` : ""}`;
  const description = gallery.caption || `Media from ${gallery.date}`;
  const mediaItems = getMediaItems(gallery);
  const firstImage = mediaItems.find((item) => item.type === "image");
  const ogImage = firstImage?.src || "/photos/socal-origins/1.jpeg";

  return {
    title: `${title} | Photo Gallery`,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: gallery.caption || title,
        },
      ],
    },
  };
}

export default async function GallerySlugPage({ params }: PageProps) {
  const { slug } = await params;
  const gallery: Gallery | undefined = galleries.find((g) => g.slug === slug);

  if (!gallery) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      <div className="mb-8">
        {gallery.title && (
          <h1 className="text-3xl md:text-4xl font-light mb-4">
            {gallery.title}
          </h1>
        )}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-neutral-600 dark:text-neutral-400 text-sm">
          {gallery.date && <span>{formatDate(gallery.date)}</span>}
          {gallery.location && <span>{gallery.location}</span>}
        </div>
        {gallery.caption && (
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            {gallery.caption}
          </p>
        )}
      </div>
      <PhotoGrid gallery={gallery} />
    </div>
  );
}
