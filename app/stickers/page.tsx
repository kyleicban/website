import TypeWriterDescription from "@/components/TypeWriterDescription";
import Link from "next/link";
import Image from "next/image";

export default function StickersPage() {
  const phrases = [
    "Sometimes I draw...",
    "Designing my next tattoo...",
    "Help me get my 3.33% cut...",
    "Searching for inspo...",
  ];

  // Pick a phrase only after the component mounts on the client
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-light mb-8">
        I have a Redbubble shop!
      </h1>
      <TypeWriterDescription phrase={randomPhrase} />
      <Link
        href="https://www.redbubble.com/people/kyleicban/shop"
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
            src={"/logos/redbubble.svg"}
            alt={`Redbubble logo`}
            width={48}
            height={48}
            className="rounded"
          />
          <p className="font-medium text-neutral-700 dark:text-neutral-300">
            Check out my shop ↗
          </p>
        </div>
      </Link>
    </div>
  );
}
