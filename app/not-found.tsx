import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-light mb-4">404</h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        Not found.
      </p>
      <Link
        href="/"
        className="text-neutral-900 dark:text-neutral-100 hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

