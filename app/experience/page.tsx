import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience",
  description: "See where I've worked, present and past",
};

export default function GalleryPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-light mb-8">Work Experience</h1>
    </div>
  );
}

