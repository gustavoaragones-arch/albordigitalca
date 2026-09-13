import { getSEO } from "@/lib/seo";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { FlipWordsDemo } from "@/components/about/flip-words-demo";
import { TeamSectionWithScales } from "@/components/about/team-section-with-scales";
import { HeroShell } from "@/components/hero/hero-shell";
import { InlineIllustrationIcon } from "@/components/about/inline-illustration-icon";
import { cn } from "@/lib/utils";

export const metadata = getSEO({
  title: "About",
  description:
    "Albor Digital is a Canadian-owned web studio in Canmore, Alberta. We build websites and brand identities for small businesses.",
  path: "/about",
});

const AboutPage = () => {
  return (
    <section className="flex max-w-screen flex-col items-center justify-center overflow-x-hidden">
      <HeroShell>
        <Container className="relative z-10 flex h-full flex-col justify-between">
          <div className="pt-32 md:pt-42 lg:pt-75">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:gap-10">
              <div className="lg:max-w-xl lg:flex-1">
                <h1 className="text-natural-white -tracking-xl text-3xl font-semibold text-balance sm:text-4xl md:text-5xl lg:text-7xl">
                  Who We Are
                </h1>
                <p className="mt-4 max-w-md text-base text-neutral-400">
                  Albor Digital is an agency based in Canmore,
                  Alberta. We build websites and brand identities for Canadian
                  small businesses. No team of account managers. No strategy
                  workshops. Just focused digital work from someone who lives
                  and works in the same community you do.
                </p>
                <div className="mt-6">
                  <InlineIllustrationIcon />
                </div>
              </div>
              <div className="w-full shrink-0 lg:ml-auto lg:max-w-md lg:w-auto">
                <h2 className="text-sm font-medium text-balance text-neutral-300 sm:text-base lg:text-lg">
                  We offer two services: website design and brand identity. That
                  means complete websites built for small businesses, and visual
                  brand work — logo, colours, typography, and the assets your
                  business needs to look consistent everywhere.
                </h2>
                <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-sm font-medium text-neutral-300 sm:text-base lg:text-lg">
                  <li>Website design and development</li>
                  <li>Logo and brand identity design</li>
                  <li>Fixed-scope projects with clear pricing</li>
                  <li>Remote delivery across Canada</li>
                </ul>
                <Button
                  text="Start Your Project"
                  containerClassName="mt-6 md:mt-8"
                />
              </div>
            </div>
          </div>
          <div className="relative h-18 sm:h-48 md:h-72">
            <h2
              className={cn(
                "from-natural-white/10 -tracking-xl to-heading/0 bg-linear-to-r bg-clip-text text-transparent",
                "absolute -top-10 left-1/2 -translate-x-1/2 text-center text-[100px] font-semibold sm:text-[6rem] md:-top-6 md:mt-10 md:text-[160px] lg:-top-18 lg:text-[300px]",
              )}
            >
              About
            </h2>
          </div>
        </Container>
      </HeroShell>
      <Container className="flex flex-col gap-16 pb-16">
        <TeamSectionWithScales />
        <FlipWordsDemo />

        <div>
          <Button text="Start Your Project" />
        </div>
      </Container>
    </section>
  );
};

export default AboutPage;
