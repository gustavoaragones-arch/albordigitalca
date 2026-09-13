import { getSEO } from "@/lib/seo";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/button";

export const metadata = getSEO({
  title: "Brand Identity Design Canada",
  description:
    "Logo, colours, and typography for Canadian small businesses. Corporate identity design from a Canmore-based web studio. Fixed pricing.",
  path: "/brand-identity",
  keywords: [
    "branding Canmore Alberta",
    "corporate identity design Canada",
    "logo design Alberta small business",
    "Canadian-owned web studio",
  ],
});

const BrandIdentityPage = () => {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Container className="relative h-38 md:h-70">
        <PageHeader className="top-10 md:top-16 lg:top-18">
          Brand Identity
        </PageHeader>
      </Container>
      <Container className="flex flex-col gap-16 pb-20 md:pb-30">
        <div className="flex max-w-3xl flex-col gap-6">
          <Header>Brand Identity</Header>
          <p className="-tracking-xs text-base leading-7 font-medium text-muted-foreground">
            Logo, colours, typography, and the visual foundation your business
            needs to look consistent everywhere — online, in print, and across
            your marketing materials.
          </p>
        </div>

        <div className="flex max-w-3xl flex-col gap-6">
          <Header>Includes</Header>
          <ul className="-tracking-xs flex list-disc flex-col gap-2 pl-5 text-base leading-7 font-medium text-muted-foreground">
            <li>Logo design and file delivery</li>
            <li>Colour palette with usage guidance</li>
            <li>Typography selection and pairing</li>
            <li>Basic brand asset package</li>
            <li>Files ready for web and print use</li>
          </ul>
        </div>

        <div className="flex max-w-3xl flex-col gap-6">
          <Header>Who It Is For</Header>
          <p className="-tracking-xs text-base leading-7 font-medium text-muted-foreground">
            Businesses starting fresh or refreshing an existing look. Ideal
            alongside a new website, or as a standalone brand project for
            Alberta small businesses.
          </p>
        </div>

        <div className="flex max-w-3xl flex-col gap-6">
          <Header>Pricing and Timeline</Header>
          <p className="-tracking-xs text-base leading-7 font-medium text-muted-foreground">
            Available as part of our Website + Brand Identity package from CAD
            $3,800. Timeline: 4 to 6 weeks when combined with a website
            project. Fixed price, confirmed before work begins.
          </p>
        </div>

        <div>
          <Button text="Start Your Project" />
        </div>
      </Container>
    </div>
  );
};

export default BrandIdentityPage;
