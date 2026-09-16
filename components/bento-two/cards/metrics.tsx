"use client";

import { RoundedGridPattern } from "@/components/bento-one/cards/rounded-grid-pattern";
import { SlidingNumber } from "@/components/sliding-number";
import React, { useEffect, useState } from "react";

export const Metrics = () => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full flex-col justify-between gap-16 p-8">
      <div className="absolute inset-0">
        <RoundedGridPattern />
      </div>
      <div className="z-10 flex flex-col gap-3">
        <span className="-tracking-xl flex text-[6.25rem] leading-25 font-medium">
          <SlidingNumber value={value} />
        </span>
        <span className="text-muted-foreground -tracking-xs text-lg leading-6.5 font-medium">
          Weeks to launch
        </span>
      </div>
      <div className="z-10">
        <span className="-tracking-xs text-muted-foreground text-base leading-6">
          Most website projects are delivered in 3 to 6 weeks. Clear timelines,
          fixed scope, no open-ended retainers.
        </span>
      </div>
    </div>
  );
};

