import { getSEO } from "@/lib/seo";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/button";

export const metadata = getSEO({
  title: "Website Design Alberta",
  description:
    "Complete website design and development for small businesses in Alberta. Mobile-ready, fixed pricing, no retainers. Albor Digital.",
  path: "/website-design",
  keywords: [
    "website design Alberta",
    "web design Canmore",
    "small business website Canada",
    "affordable website design Alberta",
    "website design for small business Alberta",
  ],
});

const WebsiteDesignPage = () => {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Container className="relative h-38 md:h-70">
        <PageHeader className="top-10 md:top-16 lg:top-18">
          Website Design
        </PageHeader>
      </Container>
      <Container className="flex flex-col gap-16 pb-20 md:pb-30">
        <div className="flex max-w-3xl flex-col gap-6">
          <Header>Website Design</Header>
          <p className="-tracking-xs text-base leading-7 font-medium text-muted-foreground">
            A complete website built for your business — designed, developed,
            and launched. Mobile-ready, fast-loading, and built to represent
            your business properly online.
          </p>
        </div>

        <div className="flex max-w-3xl flex-col gap-6">
          <Header>Includes</Header>
          <ul className="-tracking-xs flex list-disc flex-col gap-2 pl-5 text-base leading-7 font-medium text-muted-foreground">
            <li>Custom design tailored to your business</li>
            <li>Development and mobile responsiveness</li>
            <li>Basic on-page SEO setup at launch</li>
            <li>Content structure and page layout</li>
            <li>Launch and handoff with your files</li>
          </ul>
        </div>

        <div className="flex max-w-3xl flex-col gap-6">
          <Header>Who It Is For</Header>
          <p className="-tracking-xs text-base leading-7 font-medium text-muted-foreground">
            Small businesses in Alberta and across Canada that need a
            professional online presence without the agency price tag or ongoing
            retainer.
          </p>
        </div>

        <div className="flex max-w-3xl flex-col gap-6">
          <Header>Pricing and Timeline</Header>
          <p className="-tracking-xs text-base leading-7 font-medium text-muted-foreground">
            Starting from CAD $2,500. Most projects are delivered in 3 to 4
            weeks. Fixed price, confirmed before work begins.
          </p>
        </div>

        <div>
          <Button text="Start Your Project" />
        </div>
      </Container>
    </div>
  );
};

export default WebsiteDesignPage;
