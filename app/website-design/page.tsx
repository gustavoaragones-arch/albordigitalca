import { getSEO } from "@/lib/seo";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Projects } from "@/components/projects";
import { websiteDesignCards } from "@/components/website-design/service-cards";

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
      <div className="**:data-[slot=container]:pt-0">
        <Projects
          disabelHeader
          projects={websiteDesignCards}
          ctaLabel="Start Your Project"
        />
      </div>
    </div>
  );
};

export default WebsiteDesignPage;
