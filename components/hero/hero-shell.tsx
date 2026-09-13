import { HeroBackground } from "@/components/hero/hero-background";

export const HeroShell = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="h-[60vh] w-full p-2 md:h-screen">
      <div className="text-natural-white relative m-0 h-full w-full overflow-hidden rounded-3xl bg-black">
        <HeroBackground />
        {children}
      </div>
    </div>
  );
};
