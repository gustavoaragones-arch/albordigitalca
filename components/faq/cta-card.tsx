import { Button } from "@/components/button";

export const CTACard = () => {
  return (
    <div className="bg-natural-white flex flex-col gap-8 rounded-3xl px-6 py-8 shadow-card-md w-full lg:max-w-lg">
      <div className="flex flex-col gap-3">
        <span className="font-medium text-2xl leading-8 -tracking-sm">
          Ready to get your business online?
        </span>
        <span className="font-medium text-muted-foreground text-base -tracking-xs leading-6">
          Tell us what you need and we will confirm whether we can help and what
          it will cost.
        </span>
      </div>
      <div>
        <Button text="Start Your Project" />
      </div>
    </div>
  );
};

