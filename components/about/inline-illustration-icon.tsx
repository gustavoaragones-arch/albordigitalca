"use client";

import {
  IconBrandFigma,
  IconBrandSlack,
  IconBrandStripe,
  IconBrandVscode,
} from "@tabler/icons-react";

export function InlineIllustrationIcon() {
  return (
    <div className="w-full max-w-xs">
      <h2 className="text-xl font-medium tracking-tight text-neutral-100">
        We Do Not Do
      </h2>
      <div className="relative mt-6 flex flex-col gap-4 pl-7">
        <DashedConnector />
        <p
          className="flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-xs text-neutral-400 shadow-sm ring-1 shadow-black/10 ring-white/10"
        >
          <IconBrandSlack className="size-4 stroke-[1.5] text-red-500" />
          Marketing consulting
        </p>
        <p
          className="flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-xs text-neutral-400 shadow-sm ring-1 shadow-black/10 ring-white/10"
        >
          <IconBrandStripe className="size-4 stroke-[1.5] text-blue-500" />
          Social media management
        </p>
        <p
          className="flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-xs text-neutral-400 shadow-sm ring-1 shadow-black/10 ring-white/10"
        >
          <IconBrandVscode className="size-4 stroke-[1.5] text-neutral-400" />
          SEO services or retainers
        </p>
        <p
          className="flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-xs text-neutral-400 shadow-sm ring-1 shadow-black/10 ring-white/10"
        >
          <IconBrandFigma className="size-4 stroke-[1.5] text-indigo-500" />
          Advertising or paid media
        </p>
        <p
          className="flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-xs text-neutral-400 shadow-sm ring-1 shadow-black/10 ring-white/10"
        >
          <IconBrandVscode className="size-4 stroke-[1.5] text-neutral-400" />
          Custom software development
        </p>
      </div>
    </div>
  );
}

const DashedConnector = () => {
  const x = 8;
  const r = 8;
  const endX = 28;
  const itemHeight = 20;
  const gap = 16;
  const step = itemHeight + gap;
  const items = 5;

  const centers = Array.from(
    { length: items },
    (_, i) => itemHeight / 2 + i * step,
  );

  const d = centers
    .map((y, i) => {
      const branch = `Q ${x} ${y} ${x + r} ${y} L ${endX} ${y}`;
      if (i === 0) return `M ${x} ${y - r} ${branch}`;
      return `M ${x} ${centers[i - 1]} V ${y - r} ${branch}`;
    })
    .join(" ");

  return (
    <svg
      width="28"
      height={centers[centers.length - 1] + itemHeight / 2}
      className="pointer-events-none absolute top-0 left-0 text-neutral-600"
      fill="none"
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        strokeLinecap="round"
      />
    </svg>
  );
};
