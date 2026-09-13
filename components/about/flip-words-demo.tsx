"use client";

import { FlipWords } from "@/components/ui/flip-words";

const FLIP_WORDS = ["local", "trusted", "grounded", "familiar"];

export function FlipWordsDemo() {

  return (
    <div className="max-w-3xl">
      <div className="text-heading -tracking-xs text-4xl font-semibold tracking-tight text-balance md:text-5xl">
        Websites built with a{" "}
        <span className="relative inline-block min-w-[9.5ch] align-baseline">
          <FlipWords words={FLIP_WORDS} className="!text-dusty-green" />
        </span>{" "}
        <br />
        understanding of your market
      </div>
    </div>
  );
}
