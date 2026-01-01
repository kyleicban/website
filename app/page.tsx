import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-light mb-6">
          Photo Gallery
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8">
          A collection of moments, captured in time.
        </p>
        <Link
          href="/gallery"
          className="inline-block px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-neutral-500"
        >
          View Gallery
        </Link>
      </div>
    </main>
  );
}

