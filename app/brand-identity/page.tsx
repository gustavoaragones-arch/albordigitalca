import { getSEO } from "@/lib/seo";
import { BentoGridExampleThree } from "@/components/brand-identity/bento-grid-example-three";
import { Container } from "@/components/container";
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
      <Container className="relative h-38 overflow-visible md:h-70">
        <PageHeader className="top-10 overflow-visible md:top-16 lg:top-18">
          Brand Identity
        </PageHeader>
      </Container>
      <div className="**:data-[slot=container]:pt-0">
        <BentoGridExampleThree />
      </div>
      <Container className="pb-20 md:pb-30">
        <Button text="Start Your Project" />
      </Container>
    </div>
  );
};

export default BrandIdentityPage;
