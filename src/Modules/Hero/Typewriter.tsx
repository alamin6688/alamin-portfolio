import React, { useEffect, useRef, useState } from "react";

type Props = {
  words: string[];
  loop?: number; // number of times to loop through all words (1 = once). 0 or undefined = infinite
  cursor?: boolean;
  cursorStyle?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  // variance is percent (0..1) that randomizes the per-character delay
  variance?: number;
  // easing: 'linear' | 'ease-in' | 'ease-out'
  easing?: "linear" | "ease-in" | "ease-out";
  onLoopDone?: () => void;
};

const Typewriter: React.FC<Props> = ({
  words,
  loop = 0,
  cursor = true,
  cursorStyle = "_",
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
  onLoopDone,
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [loopCount, setLoopCount] = useState(0);
  const { variance = 0.12, easing = "ease-out" } = {} as Partial<Props>;

  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    let timeout: number | undefined;

    const current = words[wordIndex % words.length] || "";

    // small helper to get randomized delay with easing
    const rand = () => (Math.random() - 0.5) * 2 * variance; // -variance..+variance
    const easingFactor = (pos: number) => {
      // pos 0..1
      switch (easing) {
        case "ease-in":
          return Math.pow(pos, 2);
        case "ease-out":
          return 1 - Math.pow(1 - pos, 2);
        default:
          return 1;
      }
    };

    if (!isDeleting) {
      // typing
      const progress = current.length > 0 ? text.length / current.length : 0;
      const factor = easingFactor(progress) || 1;
      const delay = Math.max(20, Math.round(typeSpeed * factor * (1 + rand())));

      timeout = window.setTimeout(() => {
        if (!mounted.current) return;
        setText(current.substring(0, text.length + 1));
        if (text.length + 1 === current.length) {
          // smoother pause then start deleting
          timeout = window.setTimeout(() => {
            if (!mounted.current) return;
            setIsDeleting(true);
          }, Math.round(delaySpeed * (0.9 + Math.random() * 0.2))); // tiny jitter
        }
      }, delay);
    } else {
      // deleting
      const progress =
        current.length > 0
          ? (current.length - text.length) / current.length
          : 0;
      const factor = easingFactor(progress) || 1;
      const delay = Math.max(
        12,
        Math.round(deleteSpeed * factor * (1 + rand()))
      );

      timeout = window.setTimeout(() => {
        if (!mounted.current) return;
        setText(current.substring(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((wi) => wi + 1);
          // loop counting
          const nextLoopCount =
            (wordIndex + 1) % words.length === 0 ? loopCount + 1 : loopCount;
          setLoopCount(nextLoopCount);
          if (loop > 0 && nextLoopCount >= loop) {
            if (typeof onLoopDone === "function") onLoopDone();
          }
        }
      }, delay);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    variance,
    easing,
  ]);

  return (
    <>
      <span>{text}</span>
      {cursor && <span style={{ marginLeft: 4 }}>{cursorStyle}</span>}
    </>
  );
};

export default Typewriter;
