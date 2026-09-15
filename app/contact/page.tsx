import { getSEO } from "@/lib/seo";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { ContactFormGridWithDetails } from "@/components/contact/contact-form-grid";

export const metadata = getSEO({
  title: "Contact Albor Digital",
  description:
    "Start your website or brand identity project with Albor Digital. Based in Canmore, Alberta. Fixed pricing, one business day response.",
  path: "/contact",
  keywords: [
    "contact web designer Alberta",
    "website quote Canmore",
    "brand identity inquiry Canada",
    "Albor Digital contact",
  ],
});

const ContactPage = () => {
  return (
    <div className="max-w-screen overflow-x-visible">
      <Container className="relative h-38 md:h-70">
        <PageHeader className="top-10 md:top-16 lg:top-18">Contact</PageHeader>
      </Container>
      <div className="**:data-[slot=container]:pt-0">
        <ContactFormGridWithDetails />
      </div>
    </div>
  );
};

export default ContactPage;
