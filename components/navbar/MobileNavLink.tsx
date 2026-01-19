import Link from "next/link";

export default function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded"
    >
      {children}
    </Link>
  );
}
