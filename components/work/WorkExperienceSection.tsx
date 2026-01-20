import { workExperience } from "@/content/work";
import { sortWorkExperience } from "@/content/work/utils";
import WorkExperienceList from "./WorkExperienceList";

export default function WorkExperienceSection() {
  const sorted = sortWorkExperience(workExperience);

  return (
    <section>
      <WorkExperienceList items={sorted} />
    </section>
  );
}
