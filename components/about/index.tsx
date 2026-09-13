import Image from "next/image";
import { Container } from "@/components/container";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
  return (
    <section className="bg-natural-black text-natural-white relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <div className="absolute top-71 -left-140 h-125.5 w-122 rounded-full bg-white blur-[214px]" />
          <div className="absolute top-0 -left-40 h-293 w-180 rounded-full bg-[#27251F] blur-[287px]" />
          <div className="absolute top-0 -right-100 h-293.75 w-180 rounded-full bg-[#27251F] blur-[287px]" />
          <div
            className={cn(
              "absolute top-10 right-52 h-141 w-197",
              "bg-[linear-gradient(to_right,#181816_1px,transparent_1px),linear-gradient(to_bottom,#181816_1px,transparent_1px)] bg-size-[44px_44px]",
              "mask-[radial-gradient(circle,black_10%,transparent_100%)]",
            )}
          ></div>
        </div>
      </div>

      <Container className="relative z-20 flex w-full flex-col gap-20 pt-20 pb-30">
        <div className="-tracking-xl text-6xl leading-18 font-medium">
          Built in Canmore. Built for Canada.
        </div>
        <div className="grid w-full grid-cols-1 justify-between gap-30 lg:grid-cols-5">
          <div className="relative lg:col-span-2">
            <Image
              src={"/assets/workers.webp"}
              alt="Canadian web studio based in Canmore Alberta"
              width={1200}
              height={1200}
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex h-full w-full flex-col justify-between gap-15 lg:col-span-3">
            <div className="flex flex-col gap-6">
              <span className="-tracking-xs text-lg leading-6.5 font-medium">
                Albor Digital is a Canadian-owned web studio based in
                Canmore, Alberta. We build websites and brand identities for
                small businesses — focused work, fixed scope, no retainers.
              </span>
              <Link
                href="/about"
                className="-tracking-xs text-lg leading-6.5 font-medium underline"
              >
                About us →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
