"use client";

import { SiteIcon } from "@/components/ui/site-icon";

const items = [
  {
    icon: "graph-up",
    label: "Marketing consulting",
    className: "text-dusty-red",
  },
  {
    icon: "multi-bubble",
    label: "Social media management",
    className: "text-dusty-green",
  },
  {
    icon: "activity",
    label: "SEO services or retainers",
    className: "text-neutral-400",
  },
  {
    icon: "dollar",
    label: "Advertising or paid media",
    className: "text-primary",
  },
  {
    icon: "laptop",
    label: "Custom software development",
    className: "text-neutral-400",
  },
] as const;

export function InlineIllustrationIcon() {
  return (
    <div className="w-full max-w-xs">
      <h2 className="text-xl font-medium tracking-tight text-neutral-100">
        We Do Not Do
      </h2>
      <div className="relative mt-6 flex flex-col gap-4 pl-7">
        <DashedConnector />
        {items.map((item) => (
          <p
            key={item.label}
            className="flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-xs text-neutral-400 shadow-sm ring-1 shadow-black/10 ring-white/10"
          >
            <SiteIcon
              name={item.icon}
              size={16}
              className={item.className}
            />
            {item.label}
          </p>
        ))}
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
