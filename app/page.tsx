"use client"; // Required for Hooks in Next.js App Router

import { useState, useEffect } from 'react';

export default function Home() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const phrases = [
      "Reminiscing about 2016...",
      "Denying that I'm Gen Z...",
      "Loreming and ipsuming...",
      "Probably watching One Piece...",
      "Drinking overpriced matcha...",
      "Honk..."
    ];

    // Pick a phrase only after the component mounts on the client
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    let charIndex = 0;

    // Typewriter Animation
    const typeInterval = setInterval(() => {
      if (charIndex <= randomPhrase.length) {
        setDisplayText(randomPhrase.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 60);

    // Cleanup intervals on unmount
    return () => {
      clearInterval(typeInterval);
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-white dark:bg-neutral-950">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
          KYLE DRAKE ICBAN
        </h1>
        {/* Fixed height container prevents layout shift while typing */}
        <div className="h-8"> 
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-mono italic">
            {displayText}
            <span className="ml-1 animate-pulse border-r-2 border-neutral-500 h-5 inline-block align-middle">&nbsp;</span>
          </p>
        </div>
      </div>
    </main>
  );
}