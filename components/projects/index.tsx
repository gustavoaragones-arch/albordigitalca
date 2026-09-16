"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { RightArrow } from "@/components/icons/general";
import { PageHeader } from "@/components/page-header";

export type Project = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  title: string;
  summary: string;
  client: string;
  category: string;
  timeline: string;
  deliverables: string[];
  impact: string;
};

// PLACEHOLDER: Replace with real client work when available.
const defaultProjects = [
  {
    src: "/assets/project-1.webp",
    alt: "Small business website design for hospitality business in Canmore Alberta",
    width: 2400,
    height: 1564,
    className: "col-span-14 md:col-span-7 lg:col-span-9",
    title: "Small Business Website — Hospitality, Canmore AB",
    summary:
      "A clean, mobile-ready website for a local hospitality business. Designed to help visitors find key information quickly.",
    client: "Hospitality, Canmore AB",
    category: "Website Design",
    timeline: "4 weeks",
    deliverables: ["Website design", "Development", "Launch"],
    impact:
      "Placeholder project — details to be updated with real client work.",
  },
  // PLACEHOLDER: Replace with real client work when available.
  {
    src: "/assets/project-2.webp",
    alt: "Brand identity and website for trades company in Alberta",
    width: 1248,
    height: 1320,
    className: "col-span-14 md:col-span-7 lg:col-span-5",
    title: "Brand Identity + Website — Trades Company, Alberta",
    summary:
      "Logo, colours, and a professional website for a trades business. Built to look consistent across print and online.",
    client: "Trades Company, Alberta",
    category: "Brand Identity, Website Design",
    timeline: "5 weeks",
    deliverables: ["Logo", "Brand assets", "Website"],
    impact:
      "Placeholder project — details to be updated with real client work.",
  },
  // PLACEHOLDER: Replace with real client work when available.
  {
    src: "/assets/project-3.webp",
    alt: "Website redesign for professional services business in Calgary Alberta",
    width: 1824,
    height: 1320,
    className: "col-span-14 md:col-span-7 lg:col-span-7",
    title: "Website Redesign — Professional Services, Calgary AB",
    summary:
      "A refreshed website for a professional services firm. Clear structure, updated look, and improved mobile experience.",
    client: "Professional Services, Calgary AB",
    category: "Website Design",
    timeline: "3 weeks",
    deliverables: ["Redesign", "Development", "Launch"],
    impact:
      "Placeholder project — details to be updated with real client work.",
  },
  // PLACEHOLDER: Replace with real client work when available.
  {
    src: "/assets/project-4.webp",
    alt: "Launch website for new retail business in Banff Alberta",
    width: 1824,
    height: 1320,
    className: "col-span-14 md:col-span-7 lg:col-span-7",
    title: "Business Launch Website — Retail, Banff AB",
    summary:
      "A launch-ready website for a new Bow Valley retail business. Built to go live before opening day with clear messaging and a mobile-first experience.",
    client: "Retail, Banff AB",
    category: "Website Design",
    timeline: "3 weeks",
    deliverables: ["Launch pages", "Mobile design", "Go-live support"],
    impact:
      "Placeholder project — details to be updated with real client work.",
  },
] satisfies Project[];

const overlayVariants: Variants = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 30,
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const overlayItemVariants: Variants = {
  rest: { opacity: 0, y: 18 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export const Projects = ({
  disabelHeader = false,
  headerTitle = "Featured Work",
  projects = defaultProjects,
  ctaLabel,
}: {
  disabelHeader?: boolean;
  headerTitle?: string;
  projects?: Project[];
  ctaLabel?: string;
}) => {
  return (
    <section className="w-full">
      <Container className="relative flex w-full flex-col gap-20 overflow-hidden pt-40 pb-20 md:pt-65 md:pb-30 lg:pt-80 lg:pb-30">
        {!disabelHeader && (
          <div>
            <PageHeader>{headerTitle}</PageHeader>
          </div>
        )}
        {/* grids */}
        <div
          className={cn(
            "z-10 grid grid-cols-14 gap-6",
            "[--card-height:min(72vw,320px)] sm:[--card-height:380px] lg:[--card-height:440px]",
            "*:data-[slot='card']:max-h-(--card-height) *:data-[slot='card']:min-h-(--card-height) *:data-[slot='card']:overflow-hidden *:data-[slot='card']:rounded-3xl",
          )}
        >
          {projects.map((project) => (
            <MotionLink
              key={project.src}
              href="#"
              data-slot="card"
              initial="rest"
              animate="rest"
              whileHover="hover"
              className={cn("group relative block text-left", project.className)}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(min-width: 1024px) 68vw, 100vw"
                className="rounded-3xl object-cover object-center"
                priority
              />
              <motion.div
                variants={overlayVariants}
                className="bg-natural-black/50 absolute inset-0 flex flex-col justify-between rounded-3xl p-6 backdrop-blur-md md:p-8"
              >
                <motion.div variants={overlayItemVariants} className="space-y-2">
                  <div className="text-natural-white -tracking-sm text-2xl leading-8 font-medium">
                    {project.title}
                  </div>
                  <p className="text-natural-white/80 text-base leading-6 font-medium">
                    {project.summary}
                  </p>
                </motion.div>
                <motion.div
                  variants={overlayItemVariants}
                  className="flex w-full items-end justify-between gap-4"
                >
                  <div className="flex items-center gap-1">
                    <span className="text-natural-white tracking-xs text-sm leading-3.5 font-medium">
                      View Details
                    </span>
                    <RightArrow />
                  </div>
                  <span className="-tracking-xs text-natural-white/80 text-right text-sm leading-3.5 font-medium">
                    {project.category}
                  </span>
                </motion.div>
              </motion.div>
            </MotionLink>
          ))}
        </div>
        {ctaLabel && (
          <div className="z-10 flex justify-center">
            <Button text={ctaLabel} showAvatar={false} />
          </div>
        )}
      </Container>
    </section>
  );
};
