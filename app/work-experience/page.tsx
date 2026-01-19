"use client"

import WorkExperienceSection from "@/components/work/WorkExperienceSection";
import TypeWriterDescription from "@/components/TypeWriterDescription";

export default function WorkExperiencePage() {
  const phrases = [
    "Currently breaking prod...",
    "Blocked by CORS policy...",
    "Sorting linked lists in my day-to-day...",
    "Listening to LoFi...",
    "404 on vacation...",
    "Vibing..."
  ];
  
  // Pick a phrase only after the component mounts on the client
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-light mb-2">Work Experience</h1>
      <h2 className="text-l md:text-xl text-neutral-600 dark:text-neutral-400 font-mono mb-2 italic">UI Engineer</h2>
      <h2 className="text-l md:text-xl text-neutral-600 dark:text-neutral-400 font-mono mb-8 italic">mailto: kicban29 at gmail dot com</h2>
      <TypeWriterDescription phrase={randomPhrase} />
      <WorkExperienceSection/>
    </div>
  );
}

