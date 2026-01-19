import Link from "next/link";

export default function NavLink({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) {
    return (
      <Link
        href={href}
        className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded"
      >
        {children}
      </Link>
    );
  }