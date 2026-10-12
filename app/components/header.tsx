
"use client";

import { useEffect, useState } from "react";

const lines = [
    "Software Developer",
    "BSc in Software · Aalborg University",
  ];

export default function Header() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [stage, setStage] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished || lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];

    const timeout = setTimeout(() => {
      if (stage === 0) {
        setStage(1);
      } else if (stage === 1) {
        if (displayedText.length < currentLine.length) {
          setDisplayedText(
            currentLine.slice(0, displayedText.length + 1)
          );
        } else {
          setStage(2);
        }
      } else if (stage === 2) {
        if (lineIndex < lines.length - 1) {
          setLineIndex((prev) => prev + 1);
          setDisplayedText("");
          setStage(0);
        } else {
          setFinished(true);
        }
      }
    }, stage === 0 ? 500 : stage === 2 ? 700 : 75);

    return () => clearTimeout(timeout);
  }, [lineIndex, displayedText, stage, finished,]);

  return (
    <div className="flex w-full flex-col lg:flex-row border-b bg-gradient-to-l from-projectYellow/50 p-4 gap-8">
      <p className="flex min-h-100 lg:w-1/2 flex-col justify-center lg:text-end text-8xl font-bold">
        Nikolaj Krog van Gool
      </p>

      <div className={`flex flex-col justify-center text-2xl ${finished ? "text-projectYellow" : "font-mono"}`}>
        {lines.map((line, i) => (
          <div key={i}>
            {i <= lineIndex && (
              <>
                {!finished && (
                  <span className="text-projectYellow">{"<p>"}</span>
                )}

                {i === lineIndex ? displayedText : line}

                {i === lineIndex && stage === 1 && !finished && (
                  <span className="animate-pulse">|</span>
                )}

                {!finished && (
                  <span className="text-projectYellow">{"</p>"}</span>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
