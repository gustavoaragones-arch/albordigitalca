"use client";

import { CONTACT_PATH } from "@/lib/paths";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Button = ({
  text = "Start Your Project",
  href = CONTACT_PATH,
  showAvatar = true,
  containerClassName,
  avatar,
}: {
  text?: string;
  href?: string;
  showAvatar?: boolean;
  containerClassName?: string;
  avatar?: string;
}) => {
  const linkHref = text === "Start Your Project" ? CONTACT_PATH : href;

  return (
    <Link
      href={linkHref}
      className={cn(
        "group relative flex w-fit cursor-pointer items-center gap-2 rounded-lg border border-white/20 bg-black py-2 pr-4 pl-11 tracking-tight",
        containerClassName,
      )}
    >
      <Box showAvatar={showAvatar} avatar={avatar} />
      <div className="absolute -inset-px rounded-lg bg-white/20 transition-[clip-path] duration-400 ease-out [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0%_0_0)]" />
      <span className="inline-block text-white transition-transform duration-400 group-hover:-translate-x-8">
        {text}
      </span>
    </Link>
  );
};

const Box = ({
  showAvatar,
  avatar,
}: {
  showAvatar?: boolean;
  avatar?: string;
}) => {
  return (
    <div
      data-slot="button-box"
      className="bg-primary absolute inset-y-0 left-1 z-40 my-auto flex size-8 flex-col items-center justify-center gap-px rounded-[5px] transition-all duration-400 ease-out group-hover:left-[calc(100%-2.3rem)] group-hover:rotate-180 group-hover:transform"
    >
      <BubblesGroup showAvatar={showAvatar} />
      {showAvatar && <Avatar avatar={avatar} />}
    </div>
  );
};

const Avatar = ({ avatar }: { avatar?: string }) => {
  return (
    <Image
      src={avatar || "/albor.webp"}
      alt="Albor Digital"
      width={32}
      height={32}
      className="hidden rotate-180 rounded-[5px] blur-sm transition-all duration-400 ease-out group-hover:block group-hover:blur-none"
    />
  );
};

const BubblesGroup = ({ showAvatar }: { showAvatar?: boolean }) => {
  return (
    <div
      className={cn("flex flex-col gap-px", showAvatar && "group-hover:hidden")}
    >
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble highlight />
        <Bubble />
        <Bubble />
      </div>
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble highlight />
        <Bubble />
      </div>
      <div className="flex gap-px">
        <Bubble highlight />
        <Bubble highlight />
        <Bubble highlight />
        <Bubble highlight />
        <Bubble highlight />
      </div>
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble highlight />
        <Bubble />
      </div>
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble highlight />
        <Bubble />
        <Bubble />
      </div>
    </div>
  );
};

const Bubble = ({ highlight }: { highlight?: boolean }) => {
  return (
    <span
      className={cn(
        "inline-block size-0.75 shrink-0 rounded-full bg-white/25",
        highlight && "bg-white duration-200 ease-linear",
      )}
    />
  );
};
