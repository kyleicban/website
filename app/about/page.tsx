"use client"

import TypeWriterDescription from "@/components/TypeWriterDescription";

export default function AboutMePage() {

  const blurb = `Kyle's most cherished memories are living in Honolulu and running the Honolulu marathon, visiting the Philippines for the first time, solo tripping in Japan for the first time, moving to New York after graduating, and making countless memories at the University of California, Los Angeles.

    In his free time, Kyle enjoys running, rock climbing, surfing, drawing, thrifting, and watching anime. Currently, he has finished over 900 episodes of One Piece. He is also trying to learn Mandarin with the help of his beautiful girlfriend. 哇塞

    In December 2021, Kyle graduated from the University of California, Los Angeles with a Bachelor's of Science in Applied Mathematics with a Computing Specialization. Currently, Kyle lives in Santa Clara, California where he works at Apple as a software engineer. Stay tuned to see where he ends up next...`

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-light mb-8">About me</h1>
      <TypeWriterDescription phrase={blurb} typeSpeed={5} />
    </div>
  );
}

