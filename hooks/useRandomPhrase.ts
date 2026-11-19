import { useEffect, useState } from "react";

export default function useRandomPhrase(phrases: string[]) {
  const [randomPhrase, setRandomPhrase] = useState("");

  useEffect(() => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setRandomPhrase(randomPhrase);
    const randomPhraseInterval = setInterval(() => {
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      setRandomPhrase(randomPhrase);
    }, 5000);

    return () => clearInterval(randomPhraseInterval);
  }, [phrases]);

  return randomPhrase;
}
