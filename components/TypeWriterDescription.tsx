import { useEffect, useState } from "react";

export default function TypeWriterDescription({phrase, typeSpeed = 30}: {phrase: string, typeSpeed?: number}) {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let charIndex = 0;
    
        // Typewriter Animation
        const typeInterval = setInterval(() => {
          if (charIndex <= phrase.length) {
            setDisplayText(phrase.substring(0, charIndex));
            charIndex++;
          } else {
            clearInterval(typeInterval);
          }
        }, typeSpeed);
    
        // Cleanup intervals on unmount
        return () => {
          clearInterval(typeInterval);
        };
      }, []);

    return (
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-mono italic mb-2 whitespace-pre-line">
          {displayText}
          <span className="ml-1 animate-pulse border-r-2 border-neutral-500 h-5 inline-block align-middle">&nbsp;</span>
        </p>
    )
}