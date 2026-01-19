import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-lg font-medium text-neutral-900 dark:text-neutral-100 hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded"
          >
            KYLE DRAKE ICBAN
          </Link>
          {/* <div className="flex justify-between items-center h-16 gap-1 divide-x divide-gray-400"> */}
            {/* <Link
              href="/experience"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded"
            >
              Work Experience
            </Link> */}
            <Link
              href="/gallery"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded"
            >
              Gallery
            </Link>
          {/* </div> */}
        </div>
      </div>
    </nav>
  );
}

