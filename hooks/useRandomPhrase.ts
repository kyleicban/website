import { useEffect, useState } from "react";

interface RandomPhraseParams {
  phrases: string[];
}

export default function useRandomPhrase(phrases: string[]) {
  const [randomPhrase, setRandomPhrase] = useState("");

  useEffect(() => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setRandomPhrase(randomPhrase);
  }, []);

  return randomPhrase;
}
