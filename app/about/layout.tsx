import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "About Kyle",
};

export default function WorkExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
