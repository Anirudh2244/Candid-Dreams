import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const staticPart = "We Capture"; // static text part
  const dynamicWords = ["Emotions!❤️", "Memories!✨", "Heart!❤️", "Feelings!✨"];
  const typingSpeed = 100;
  const backspaceSpeed = 50;
  const delayBetweenWords = 1000;

  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    let timeout;

    const fullText = `${staticPart} ${dynamicWords[wordIndex]}`;

    if (phase === "typing") {
      if (displayedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setPhase("deleting");
        }, delayBetweenWords);
      }
    }

    if (phase === "deleting") {
      const lastWord = dynamicWords[wordIndex];
      const baseLength = `${staticPart} `.length;

      if (displayedText.length > baseLength) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, backspaceSpeed);
      } else {
        // Move to next word
        timeout = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % dynamicWords.length);
          setPhase("typing");
        }, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, phase, wordIndex]);

  return (
    <h1 style={{ whiteSpace: "pre" }}>
      {displayedText}
      <span className="cursor">|</span>
    </h1>
  );
};

export default Typewriter;
