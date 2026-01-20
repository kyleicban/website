import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Checkout my redbubble shop!",
};

export default function WorkExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
