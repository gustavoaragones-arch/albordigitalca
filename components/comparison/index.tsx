import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { InfoCards, InfoCardsProps } from "@/components/comparison/info-cards";
import {
  ChipIcon,
  CubeIcon,
  DimondIcon,
  DocsIcon,
  DoorsOpenIcon,
  HandShakeIocn,
  HandsIcon,
  MessageIcon,
  MessageSend,
  NodeLines,
} from "@/components/icons/general";
import { ComparisonTabel, ComparisonData } from "@/components/comparison/comparison-tabel";
import { ComparisonAccordion } from "@/components/comparison/comparison-accordion";
import { Button } from "@/components/button";

const cardsData: InfoCardsProps[] = [
  {
    title: "Canadian-owned",
    description:
      "Not a foreign studio, not a reseller. Built and operated in Canada.",
    icon: <DoorsOpenIcon />,
  },
  {
    title: "Canmore-based",
    description:
      "We understand the Bow Valley market and the businesses that run in it.",
    icon: <DocsIcon />,
  },
  {
    title: "Websites only",
    description:
      "We do not sell strategy packages, consulting, or social media retainers. If you need a website, that is what we do.",
    icon: <HandsIcon />,
  },
];

const comparisonData: ComparisonData[] = [
  {
    title: "Approach",
    aceternity: "Fixed-scope website and brand projects",
    traditional: "Open-ended retainers and consulting",
    icon: <DimondIcon />,
  },
  {
    title: "Process",
    aceternity: "Clear timelines, defined deliverables",
    traditional: "Vague scopes, endless revisions",
    icon: <ChipIcon />,
  },
  {
    title: "Pricing",
    aceternity: "Fixed price, confirmed before work starts",
    traditional: "Hourly billing, surprise invoices",
    icon: <NodeLines />,
  },
  {
    title: "Services",
    aceternity: "Website design and brand identity only",
    traditional: "Marketing, SEO, social media bundles",
    icon: <CubeIcon />,
  },
  {
    title: "Communication",
    aceternity: "Direct contact, no account managers",
    traditional: "Layers of middlemen",
    icon: <MessageIcon />,
  },
  {
    title: "Deliverables",
    aceternity: "Finished website and brand assets",
    traditional: "Strategy decks and mockups",
    icon: <MessageSend />,
  },
  {
    title: "Ownership",
    aceternity: "Canadian-owned, local market knowledge",
    traditional: "Offshore or white-label studios",
    icon: <HandShakeIocn />,
  },
];

export const Comparison = () => {
  return (
    <section className="w-full">
      <Container className="flex flex-col gap-15 py-20 md:py-30">
        <div className="flex flex-col gap-6">
          <Header>Albor Digital vs Traditional Agencies</Header>
          <div className="block lg:hidden">
            <Button text="Start Your Project" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {/* for desktop only */}
          <div className="bg-natural-white hidden w-full rounded-3xl lg:block">
            <ComparisonTabel cards={comparisonData} />
          </div>

          {/* for mobile and tablet */}
          <div className="block w-full lg:hidden">
            <ComparisonAccordion cards={comparisonData} />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {cardsData.map((item) => (
              <InfoCards key={item.title} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

