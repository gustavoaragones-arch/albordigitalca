import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ComparisonData } from "@/components/comparison/comparison-tabel";
import { Logo } from "@/components/logo";
import { GreenCheckIcon, WarningIcon } from "@/components/icons/general";

export const ComparisonAccordion = ({ cards }: { cards: ComparisonData[] }) => {
  return (
    <div className="w-full">
      <Accordion defaultValue={[cards[0].title]} className="gap-4">
        {cards.map((card) => (
          <AccordionItem
            key={card.title}
            value={card.title}
            className="bg-natural-white rounded-3xl p-6"
          >
            <AccordionTrigger className="items-center py-0">
              <div className="relative flex items-center gap-3">
                <span className="z-10">{card.icon}</span>
                <span className="-tracking-sm z-10 text-lg leading-4.5 font-medium">
                  {card.title}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-6 flex flex-col gap-6">
              <div className="bg-natural-black/7 h-px w-full" />

              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <Logo variant="logotype" className="h-6 w-auto md:h-7" />
                </div>
                <div className="flex items-start gap-3">
                  <GreenCheckIcon className="mt-1 shrink-0" />
                  <span className="-tracking-sm text-base leading-6 font-medium md:text-lg md:leading-4.5">
                    {card.aceternity}
                  </span>
                </div>
              </div>

              <div className="bg-natural-black/7 h-px w-full" />

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="-tracking-sm text-muted-foreground text-lg leading-4.5 font-medium">
                    Traditional Agencies
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <WarningIcon className="mt-1 shrink-0" />
                  <span className="-tracking-sm text-base leading-6 font-medium md:text-lg md:leading-4.5">
                    {card.traditional}
                  </span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
