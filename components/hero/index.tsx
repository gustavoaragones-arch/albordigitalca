"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import { HeroShell } from "@/components/hero/hero-shell";

export const Hero = () => {
  return (
    <HeroShell>
        <Container className="relative z-10 flex h-full flex-col justify-between">
          <div className="pt-32 md:pt-42 lg:pt-75">
            <div className="flex w-fit rounded-full bg-neutral-900 p-1 shadow-lg shadow-black">
              <div className="flex max-w-full flex-wrap items-center gap-1 sm:gap-2">
                <div className="rounded-full bg-neutral-950 px-2 py-1 text-[10px] sm:text-xs">
                  Canadian-Owned Web Studio
                </div>
                <div className="text-natural-white rounded-full pr-2 text-[10px] sm:text-xs">
                  Canmore, Alberta
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col items-start gap-6 md:mt-10 lg:flex-row lg:gap-10">
              <h1 className="text-natural-white -tracking-xl text-3xl font-semibold text-balance sm:text-4xl md:text-5xl lg:text-7xl">
                Websites for Canadian Small Business
              </h1>
              <div className="lg:max-w-md">
                <h2 className="text-sm font-medium text-balance text-neutral-300 sm:text-base lg:text-lg">
                  Albor Digital builds websites and brand identities for
                  small businesses across Alberta and Canada. No retainers. No
                  strategy packages. Just solid digital work, delivered.
                </h2>
                <Button
                  text="Start Your Project"
                  containerClassName="mt-6 md:mt-8"
                />
              </div>
            </div>
          </div>
          <div className="relative h-18 sm:h-48 md:h-72">
            <p
              className={cn(
                "from-natural-white/10 -tracking-xl to-heading/0 bg-linear-to-r bg-clip-text text-transparent",
                "absolute -top-10 left-1/2 -translate-x-1/2 text-center text-[100px] font-semibold sm:text-[6rem] md:-top-6 md:mt-10 md:text-[160px] lg:-top-18 lg:text-[300px]",
              )}
            >
              Albor
            </p>
          </div>
        </Container>
    </HeroShell>
  );
};
