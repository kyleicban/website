import { WorkExperience } from "@/content/work/types";
import WorkExperienceCard from "./WorkExperienceCard";
import LinkedInCard from "./LinkedInCard";

interface Props {
  items: WorkExperience[];
}

export default function WorkExperienceList({ items }: Props) {
  return (
    <div className="flex flex-col space-y-2">
      {items.map((item) => (
        <WorkExperienceCard key={item.id} item={item} />
      ))}
      <LinkedInCard />
    </div>
  );
}
