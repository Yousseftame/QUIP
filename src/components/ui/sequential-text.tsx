import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

type WordState = "pending" | "active" | "done";

type SequentialTextProps = {
  children?: string;
  lines?: string[];
  className?: string;
  startOnView?: boolean;
  delay?: number;
  wordDuration?: number;
  wordGap?: number;
};

function ScrambleWord({
  word,
  state,
  wordDuration,
}: {
  word: string;
  state: WordState;
  wordDuration: number;
}) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (state === "pending") {
      setDisplay("");
      return;
    }

    if (state === "done") {
      setDisplay(word);
      return;
    }

    const letters = word.split("");
    let frameId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / wordDuration, 1);
      const lockedCount = Math.floor(progress * letters.length);

      setDisplay(
        letters
          .map((letter, index) =>
            index < lockedCount
              ? letter
              : CHARSET[Math.floor(Math.random() * CHARSET.length)],
          )
          .join(""),
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setDisplay(word);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [state, word, wordDuration]);

  if (state === "pending") {
    return null;
  }

  return (
    <span className="inline whitespace-pre">
      {display.toUpperCase()}
      {" "}
    </span>
  );
}

export function SequentialText({
  children = "",
  lines,
  className,
  startOnView = true,
  delay = 250,
  wordDuration = 320,
  wordGap = 90,
}: SequentialTextProps) {
  const textLines = lines ?? [children];
  const words = textLines.flatMap((line) => line.split(/\s+/).filter(Boolean));
  const lineOffsets = textLines.reduce<number[]>((offsets, _line, index) => {
    if (index === 0) {
      return [0];
    }
    const previousCount = textLines
      .slice(0, index)
      .flatMap((entry) => entry.split(/\s+/).filter(Boolean)).length;
    return [...offsets, previousCount];
  }, []);
  const fullLabel = textLines.join(" ");
  const ref = useRef<HTMLParagraphElement>(null);
  const [started, setStarted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    if (!startOnView) {
      const timer = setTimeout(() => setStarted(true), delay);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setStarted(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (!started || words.length === 0) {
      return;
    }

    setActiveIndex(0);
    setCompletedCount(0);
  }, [started, words.length]);

  useEffect(() => {
    if (activeIndex < 0 || activeIndex >= words.length) {
      return;
    }

    const timer = setTimeout(() => {
      setCompletedCount((count) => count + 1);
      setActiveIndex((index) => index + 1);
    }, wordDuration + wordGap);

    return () => clearTimeout(timer);
  }, [activeIndex, wordDuration, wordGap, words.length]);

  return (
    <p ref={ref} className={cn(className)} aria-label={fullLabel}>
      {textLines.map((line, lineIndex) => {
        const lineWords = line.split(/\s+/).filter(Boolean);
        const lineStart = lineOffsets[lineIndex];

        return (
          <span key={lineIndex} className="video-section__text-line">
            {lineWords.map((word, wordIndex) => {
              const index = lineStart + wordIndex;
              const state: WordState =
                index < completedCount
                  ? "done"
                  : index === activeIndex
                    ? "active"
                    : "pending";

              return (
                <ScrambleWord
                  key={`${lineIndex}-${word}-${wordIndex}`}
                  word={word}
                  state={state}
                  wordDuration={wordDuration}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
}

export default SequentialText;
