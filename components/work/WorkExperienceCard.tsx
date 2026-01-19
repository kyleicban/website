import Image from "next/image";
import Link from "next/link";
import { WorkExperience } from "@/content/work/types";
import { formatDateRange } from "@/lib/work-dates";

interface Props {
  item: WorkExperience;
}

export default function WorkExperienceCard({ item }: Props) {
  return (
    <Link
      href={item.url}
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
          src={item.logo}
          alt={`${item.company} logo`}
          width={48}
          height={48}
          className="rounded"
        />

        <div>
          <h3 className="font-medium transition-colors group-hover:text-neutral-900 dark:group-hover:text-white">
            {item.company}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {item.role}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm text-neutral-500">
        {formatDateRange(item.startDate, item.endDate)}
      </p>
    </Link>
  );
}
