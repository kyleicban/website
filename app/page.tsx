import TypeWriterDescription from "@/components/TypeWriterDescription";
import useRandomPhrase from "@/hooks/useRandomPhrase";

export default function Home() {
  const phrases = [
    "Learning Mario Kart World shortcuts...",
    "Denying that I'm Gen Z...",
    "Loreming and ipsuming...",
    "Probably watching One Piece...",
    "Drinking overpriced matcha...",
    "Honk...",
  ];

  const randomPhrase = useRandomPhrase(phrases);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-white dark:bg-neutral-950">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
          KYLE DRAKE ICBAN
        </h1>
        {/* Fixed height container prevents layout shift while typing */}
        <div className="h-8">
          <TypeWriterDescription phrase={randomPhrase} />
        </div>
      </div>
    </main>
  );
}
