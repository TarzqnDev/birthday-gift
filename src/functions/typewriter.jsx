import { useState, useEffect } from "react";

export function Typewriter({ texts, typingSpeed = 75, pauseTime = 1000, className = "" }) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blinking
  useEffect(() => {
    const cursorBlink = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(cursorBlink);
  }, []);

  // Typing logic
  useEffect(() => {
    let timeout;
    if (charIndex < texts[textIndex].length) {
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setTextIndex((textIndex + 1) % texts.length);
      }, pauseTime);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, textIndex, texts, typingSpeed, pauseTime]);

  return (
    <h2 className={`font-Itim whitespace-nowrap overflow-hidden ${className}`}>
      {displayedText}
      <span>{showCursor ? "|" : " "}</span>
    </h2>
  );
}