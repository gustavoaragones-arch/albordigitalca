import { getSEO } from "@/lib/seo";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { ContactFormGridWithDetails } from "@/components/contact/contact-form-grid";

export const metadata = getSEO({
  title: "Contact",
  description:
    "Start your website or brand identity project with Albor Digital. Based in Canmore, Alberta. We respond within one business day.",
  path: "/contact",
});

const ContactPage = () => {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Container className="relative h-38 md:h-70">
        <PageHeader className="top-10 md:top-16 lg:top-18">Contact</PageHeader>
      </Container>
      <ContactFormGridWithDetails />
    </div>
  );
};

export default ContactPage;
