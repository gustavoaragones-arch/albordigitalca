"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const team = [
  {
    title: "Gustavo Aragones-Malmborg",
    designation: "Founder, Designer & Developer",
    src: "/3.webp",
  },
  {
    title: "Agentic Collaborators",
    designation: "AI Agents · Claude & ChatGPT",
    src: "/1.webp",
  },
];

export function TeamSectionWithScales() {
  return (
    <section
      className="w-full pt-20 md:pt-28 [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/5"
    >
      <h2 className="text-heading max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        One designer behind the work — with Claude and ChatGPT agents in the
        build.
      </h2>
      <div className="mt-8 grid grid-cols-1 justify-items-start gap-4 md:mt-12 md:grid-cols-2 md:gap-12">
        {team.map((member) => (
          <div key={member.title} className="group/team w-[70%]">
            <div
              className="relative overflow-hidden rounded-2xl bg-neutral-200/50 transition duration-200 dark:bg-neutral-950"
            >
              <div
                className="absolute inset-0 h-full w-full bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[5px_5px] bg-fixed"
              />
              <GridLineHorizontal className="top-6" offset="200px" />
              <GridLineHorizontal className="top-auto bottom-6" offset="200px" />
              <GridLineVertical className="left-6" offset="80px" />
              <GridLineVertical className="right-6 left-auto" offset="80px" />
              <div className="p-6">
                <div className="relative overflow-hidden">
                  <Image
                    src={member.src}
                    alt={member.title}
                    height={1020}
                    width={1024}
                    className="aspect-square w-full rounded-2xl object-cover duration-200 will-change-transform group-hover/team:scale-105"
                  />
                </div>
              </div>
            </div>
            <p className="text-heading mt-4 text-lg font-semibold tracking-tight text-balance md:text-2xl">
              {member.title}
            </p>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              {member.designation}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "[--color-dark:var(--color-neutral-800)] [--color:var(--color-neutral-400)]",
        "absolute left-[calc(var(--offset)/2*-1)] h-(--height) w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "bg-size-[var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),linear-gradient(black,black)]",
        "mask-exclude",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    />
  );
};

export const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "[--color-dark:var(--color-neutral-800)] [--color:var(--color-neutral-400)]",
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-(--width)",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "bg-size-[var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),linear-gradient(black,black)]",
        "mask-exclude",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    />
  );
};
