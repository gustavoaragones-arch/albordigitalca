"use client";

import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="max-w-3xl">
      <div className="text-heading -tracking-xs text-4xl font-semibold tracking-tight text-balance md:text-5xl">
        Build{" "}
        <span className="relative inline-block align-baseline">
          <FlipWords words={words} className="text-dusty-green" />
        </span>{" "}
        <br />
        websites with Aceternity UI
      </div>
    </div>
  );
}
