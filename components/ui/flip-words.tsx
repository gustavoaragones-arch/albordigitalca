"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const wordsRef = useRef(words);
  wordsRef.current = words;
  const currentWord = words[wordIndex % words.length];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((index) => (index + 1) % wordsRef.current.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <motion.span
      key={wordIndex}
      initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className={cn("inline-block px-2 text-left", className)}
    >
      {currentWord}
    </motion.span>
  );
};
