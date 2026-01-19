import Image from "next/image";
import Link from "next/link";

export default function LinkedInCard() {
  return (
    <Link
      href="https://www.linkedin.com/in/kyle-icban"
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-neutral-200 bg-white p-5 transition-all
                 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400
                 dark:border-neutral-800 dark:bg-neutral-900
                 dark:hover:border-neutral-700"
    >
      <div className="flex items-center gap-4">
        <Image
          src={"/logos/linkedin.svg"}
          alt={`LinkedIn logo`}
          width={48}
          height={48}
          className="rounded"
        />
        <p className="font-medium text-neutral-700 dark:text-neutral-300">
          See my full work experience ↗
        </p>
      </div>
    </Link>
  );
}
