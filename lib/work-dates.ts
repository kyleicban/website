import { WorkDate, WorkExperience } from "@/content/work/types";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export function formatDate(date: WorkDate): string {
  return `${MONTHS[date.month - 1]} ${date.year}`;
}

export function formatDateRange(
  start: WorkDate,
  end?: WorkDate
): string {
  const startLabel = formatDate(start);
  const endLabel = end ? formatDate(end) : "Present";
  return `${startLabel} – ${endLabel}`;
}

export function sortWorkExperience(
  items: WorkExperience[]
): WorkExperience[] {
  return [...items].sort((a, b) => {
    const aEnd = a.endDate ?? { year: 9999, month: 12 };
    const bEnd = b.endDate ?? { year: 9999, month: 12 };

    if (aEnd.year !== bEnd.year) {
      return bEnd.year - aEnd.year;
    }

    if (aEnd.month !== bEnd.month) {
      return bEnd.month - aEnd.month;
    }

    return b.startDate.year - a.startDate.year;
  });
}
