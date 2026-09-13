import { Processor } from "@/components/bento-one/cards/processor";

export const ComponentsDashboardsAndEverything = () => {
  return (
    <div className="relative p-4">
      <div className="absolute inset-0">
        <Processor />
      </div>
      <div className="relative z-10 flex flex-col gap-2">
        <div className="text-lg leading-6 font-medium tracking-tight">
          Canadian-Owned
        </div>
        <p className="text-base text-neutral-600">
          Built and operated in Canada, for Canadian businesses. Your project
          stays local.
        </p>
      </div>
    </div>
  );
};

