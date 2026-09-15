"use client";

import React, { useCallback, useId, useState } from "react";
import { Container } from "@/components/container";
import { Turnstile } from "@/components/contact/turnstile";
import { SiteIcon } from "@/components/ui/site-icon";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const GRID_PATTERN: number[][] = [
  [9, 2],
  [8, 4],
  [10, 1],
  [7, 3],
  [9, 5],
];

const whatWeBuild = [
  {
    icon: "laptop",
    label: "Website design for small businesses",
    className: "text-heading",
  },
  {
    icon: "palette",
    label: "Brand identity — logo, colours, typography",
    className: "text-heading",
  },
  {
    icon: "unity",
    label: "Website + brand in one fixed-scope project",
    className: "text-heading",
  },
] as const;

const whatHappensNext = [
  {
    icon: "mail-out",
    label: "We respond within one business day",
    className: "text-dusty-green",
  },
  {
    icon: "badge-check",
    label: "We confirm fit, scope, and fixed price",
    className: "text-heading",
  },
  {
    icon: "flash",
    label: "Work starts when you are ready to proceed",
    className: "text-primary",
  },
] as const;

export function ContactFormGridWithDetails() {
  return (
    <section className="w-full">
      <Container className="relative z-10 flex w-full flex-col overflow-visible pt-40 pb-20 md:pt-65 md:pb-30 lg:pt-80 lg:pb-30">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="relative flex flex-col items-center lg:items-start">
            <div className="flex items-start justify-start">
              <FeatureIconContainer className="flex items-center justify-center overflow-hidden">
                <SiteIcon name="mail-out" size={24} className="text-primary" />
              </FeatureIconContainer>
            </div>
            <h2 className="mt-9 text-left text-2xl leading-8 font-medium text-black">
              Start Your Project
            </h2>
            <p className="mt-4 max-w-lg text-center text-base text-neutral-600 md:text-left">
              Tell us what your business needs — a new website, a brand
              identity, or both. We work with small businesses in Alberta and
              across Canada on fixed-scope projects with clear pricing.
            </p>

            <ContactPillList title="What We Build" items={whatWeBuild} />
            <ContactPillList
              title="What Happens Next"
              items={whatHappensNext}
              className="mt-8"
            />

            <div className="mt-10 hidden flex-col items-center gap-4 md:flex-row lg:flex">
              <a
                href="mailto:hello@albordigital.ca"
                className="text-sm text-neutral-500 hover:text-neutral-700"
              >
                hello@albordigital.ca
              </a>

              <div className="h-1 w-1 rounded-full bg-neutral-400" />
              <p className="text-sm text-neutral-500">Canmore, Alberta</p>
              <div className="h-1 w-1 rounded-full bg-neutral-400" />

              <p className="text-sm text-neutral-500">Canadian-owned</p>
            </div>
            <div className="relative mt-20 flex w-full -translate-x-[60px] items-start justify-start overflow-visible [perspective:800px] [transform-style:preserve-3d]">
              <Pin className="-top-[38px] left-[-57px] sm:-top-[42px]" />

              <img
                src="/world.svg"
                width={500}
                height={500}
                alt="World map"
                className="origin-top-left [transform:rotateX(45deg)_translateZ(0px)_scale(1.5)]"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(32%) sepia(93%) saturate(2476%) hue-rotate(250deg) brightness(91%) contrast(96%)",
                  opacity: 0.25,
                }}
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

function ContactForm() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaResetKey, setCaptchaResetKey] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");

  const resetCaptcha = () => {
    setCaptchaToken(null);
    setCaptchaResetKey((key) => key + 1);
  };

  const handleCaptchaVerify = useCallback((token: string) => {
    setCaptchaToken(token);
    if (status === "error" && statusMessage.includes("captcha")) {
      setStatus("idle");
      setStatusMessage("");
    }
  }, [status, statusMessage]);

  const handleCaptchaExpire = useCallback(() => {
    setCaptchaToken(null);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    setStatusMessage("");

    if (!captchaToken) {
      setStatus("error");
      setStatusMessage("Please complete the captcha before sending your message.");
      return;
    }

    const formData = new FormData(event.currentTarget);

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: captchaToken,
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          projectType: formData.get("project-type"),
          message: formData.get("message"),
        }),
      });

      const result = (await response.json()) as {
        error?: string;
        message?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(result.error ?? "Something went wrong. Please try again.");
        resetCaptcha();
        return;
      }

      setStatus("success");
      setStatusMessage(
        result.message ?? "Message sent. We will respond within one business day.",
      );
      event.currentTarget.reset();
      resetCaptcha();
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
      resetCaptcha();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-b from-gray-100 to-gray-200 p-4 sm:p-10"
    >
      <Grid size={20} />
      <div className="relative z-20 mb-4 w-full">
        <label
          className="mb-2 inline-block text-sm font-medium text-neutral-600"
          htmlFor="name"
        >
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none"
        />
      </div>
      <div className="relative z-20 mb-4 w-full">
        <label
          className="mb-2 inline-block text-sm font-medium text-neutral-600"
          htmlFor="email"
        >
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@yourbusiness.com"
          className="shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none"
        />
      </div>
      <div className="relative z-20 mb-4 w-full">
        <label
          className="mb-2 inline-block text-sm font-medium text-neutral-600"
          htmlFor="company"
        >
          Business name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Your business name"
          className="shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none"
        />
      </div>
      <div className="relative z-20 mb-4 w-full">
        <label
          className="mb-2 inline-block text-sm font-medium text-neutral-600"
          htmlFor="project-type"
        >
          What do you need?
        </label>
        <select
          id="project-type"
          name="project-type"
          required
          defaultValue=""
          className="shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none"
        >
          <option value="" disabled>Select a service</option>
          <option value="website">Website design</option>
          <option value="brand">Brand identity</option>
          <option value="both">Website + brand identity</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>
      <div className="relative z-20 mb-4 w-full">
        <label
          className="mb-2 inline-block text-sm font-medium text-neutral-600"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your business, timeline, and what you are looking for"
          className="shadow-input w-full rounded-md border border-transparent bg-white pt-4 pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="relative z-10 flex items-center justify-center rounded-md border border-transparent bg-neutral-800 px-4 py-2 text-sm font-medium text-white shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200 hover:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-60 md:text-sm"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
      <div className="relative z-10 w-full">
        <Turnstile
          key={captchaResetKey}
          onVerify={handleCaptchaVerify}
          onExpire={handleCaptchaExpire}
          onError={handleCaptchaExpire}
        />
      </div>
      {statusMessage ? (
        <p
          role="status"
          className={cn(
            "relative z-10 text-sm",
            status === "success" ? "text-dusty-green" : "text-red-600",
          )}
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}

const ContactPillList = ({
  title,
  items,
  className,
}: {
  title: string;
  items: readonly {
    icon: string;
    label: string;
    className: string;
  }[];
  className?: string;
}) => {
  return (
    <div className={cn("mt-8 w-full max-w-md", className)}>
      <h3 className="text-base font-medium text-black">{title}</h3>
      <div className="relative mt-6 flex flex-col gap-4 pl-7">
        <DashedConnector itemCount={items.length} />
        {items.map((item) => (
          <p
            key={item.label}
            className="relative z-10 flex w-fit items-center gap-1 rounded-full bg-natural-white px-2 py-0.5 text-xs text-neutral-600 shadow-sm ring-1 shadow-black/5 ring-neutral-200"
          >
            <SiteIcon name={item.icon} size={16} className={item.className} />
            {item.label}
          </p>
        ))}
      </div>
    </div>
  );
};

const DashedConnector = ({ itemCount }: { itemCount: number }) => {
  const x = 8;
  const r = 8;
  const endX = 28;
  const itemHeight = 20;
  const gap = 16;
  const step = itemHeight + gap;

  const centers = Array.from(
    { length: itemCount },
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
      className="pointer-events-none absolute top-0 left-0 text-neutral-300"
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

const Pin = ({ className }: { className?: string }) => {
  return (
    <motion.div
      style={{ transform: "translateZ(1px)" }}
      className={cn(
        "pointer-events-none absolute z-[60] flex h-40 w-96 items-center justify-center opacity-100 transition duration-500",
        className,
      )}
    >
      <div className="h-full w-full">
        <div className="absolute inset-x-0 top-0 z-20 mx-auto inline-block w-fit rounded-lg bg-neutral-200 px-2 py-1 text-xs font-normal text-neutral-700">
          Canmore, AB
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-blue-400/0 via-blue-400/90 to-blue-400/0 transition-opacity duration-500" />
        </div>

        <div
          style={{
            perspective: "800px",
            transform: "rotateX(70deg) translateZ(0px)",
          }}
          className="absolute top-1/2 left-1/2 mt-4 ml-[0.09375rem] -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 0 }}
            className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 4 }}
            className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
        </div>

        <motion.div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-blue-500 blur-[2px]" />
        <motion.div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-blue-500" />
        <motion.div className="absolute right-1/2 bottom-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-blue-600 blur-[3px]" />
        <motion.div className="absolute right-1/2 bottom-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-blue-300" />
      </div>
    </motion.div>
  );
};

export const FeatureIconContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-14 w-14 rounded-md bg-gradient-to-b from-gray-50 to-neutral-200 p-[4px]",
        className,
      )}
    >
      <div
        className={cn(
          "relative z-20 h-full w-full rounded-[5px] bg-gray-50",
          className,
        )}
      >
        {children}
      </div>
      <div className="absolute inset-x-0 bottom-0 z-30 mx-auto h-4 w-full rounded-full bg-neutral-600 opacity-50 blur-lg" />
      <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
    </div>
  );
};

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? GRID_PATTERN;

  return (
    <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-zinc-900/30 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-10">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full fill-black/100 stroke-black/100 mix-blend-overlay"
        />
      </div>
    </div>
  );
};

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  className,
}: {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][] | null;
  className?: string;
}) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" className={className}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([squareX, squareY], idx) => (
            <rect
              strokeWidth="0"
              key={`${squareX}-${squareY}-${idx}`}
              width={width + 1}
              height={height + 1}
              x={squareX * width}
              y={squareY * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
