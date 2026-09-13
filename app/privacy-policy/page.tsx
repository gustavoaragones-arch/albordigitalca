import { getSEO } from "@/lib/seo";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata = getSEO({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Albor Digital Canada. Compliant with Alberta PIPA and federal PIPEDA.",
  path: "/privacy-policy",
  siteName: "Albor Digital Canada",
});

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Container className="relative h-38 md:h-70">
        <PageHeader className="top-10 md:top-16 lg:top-18">
          Privacy Policy
        </PageHeader>
      </Container>
      <Container className="prose prose-neutral max-w-3xl mx-auto px-6 py-16 pb-20 md:pb-30">
        <p className="text-sm text-neutral-500 mb-8">
          Albor Digital Canada · Compliant with Alberta PIPA and Federal PIPEDA
          · Effective: January 1, 2026
        </p>

        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          This Privacy Policy is drafted in accordance with Alberta&apos;s
          Personal Information Protection Act (PIPA, SA 2003, c P-6.5) and the
          federal Personal Information Protection and Electronic Documents Act
          (PIPEDA). Alberta PIPA applies to intra-provincial commercial
          activity. PIPEDA applies to cross-provincial and cross-border
          transfers. Both laws govern this business.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          1. Introduction
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Albor Digital Canada (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) is committed to protecting the privacy of individuals
          who interact with our website and services. This Privacy Policy
          explains how we collect, use, disclose, and safeguard personal
          information in compliance with Alberta PIPA and federal PIPEDA.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          By using our website or engaging our services, you consent to the
          practices described in this policy.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          2. Accountability
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Albor Digital Canada is responsible for personal information under its
          control. The owner of Albor Digital Canada serves as the designated
          privacy officer responsible for ensuring compliance with PIPA and
          PIPEDA. Privacy inquiries can be directed to: gus@albor.digital.
        </p>
        <div className="bg-neutral-100 border-l-4 border-neutral-400 px-5 py-4 my-6 rounded-sm">
          <strong className="font-semibold">PIPA requirement:</strong>{" "}
          Organizations must designate an individual responsible for their
          compliance with PIPA. As a sole proprietorship, the owner fulfils
          this role.
        </div>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          3. Information We Collect
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          <strong className="font-semibold text-neutral-900">
            Information you provide directly:
          </strong>{" "}
          Name, business name, email address, phone number, and project details
          submitted through our contact form or by direct communication.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          <strong className="font-semibold text-neutral-900">Usage data:</strong>{" "}
          Pages visited, time spent, device type, browser type, IP address, and
          referring URLs collected through analytics tools such as Google
          Analytics.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          <strong className="font-semibold text-neutral-900">
            Cookies and tracking data:
          </strong>{" "}
          See our Cookie Notice for full details.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          We collect only the minimum personal information necessary to respond
          to your inquiry or deliver our services. We do not collect sensitive
          personal information as defined under PIPA.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          4. Purposes for Collection
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          We collect and use personal information only for the following
          purposes, which a reasonable person would consider appropriate: (a) to
          respond to inquiries and provide quotes for our services; (b) to
          enter into and perform client service agreements; (c) to invoice and
          receive payment for services rendered; (d) to improve our website and
          service quality; and (e) to comply with legal obligations under
          Canadian law.
        </p>
        <div className="bg-neutral-100 border-l-4 border-neutral-400 px-5 py-4 my-6 rounded-sm">
          <strong className="font-semibold">PIPA requirement:</strong> Personal
          information may only be collected for purposes that a reasonable
          person would consider appropriate in the circumstances (PIPA, s. 11).
        </div>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          5. Consent
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          We obtain your consent before or at the time of collecting personal
          information. For non-sensitive information (such as your name and email
          submitted via our contact form), implied consent is generally
          acceptable under PIPA. For any secondary use of your information
          beyond the original purpose, we will seek express consent.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          You may withdraw consent at any time, subject to legal and contractual
          restrictions, by contacting us at gus@albor.digital. Withdrawing
          consent may affect our ability to provide services to you.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          6. Disclosure of Information
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          We do not sell, trade, or rent your personal information to third
          parties. We may share your information with: (a) service providers who
          assist in operating our website or delivering services (such as website
          hosting providers or payment processors), under confidentiality
          obligations consistent with PIPA; (b) law enforcement or regulatory
          bodies when required by Canadian law; and (c) a successor entity in
          the event of a business transfer or sale, with prior notice to
          affected individuals.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          7. Data Retention
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          We retain personal information only as long as necessary to fulfil the
          purposes for which it was collected, or as required by applicable
          Canadian law. Client project information is retained for a minimum of
          seven years for tax and legal purposes, consistent with CRA
          requirements. Contact form inquiries that do not result in a project
          are retained for a maximum of twelve months.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          When personal information is no longer required, it is securely
          destroyed or anonymised.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          8. Access and Correction Rights
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Under PIPA and PIPEDA, you have the right to request access to the
          personal information we hold about you, and to request correction of
          any inaccurate information. To make a request, contact us at
          gus@albor.digital. We will respond within 30 days of receiving your
          request, as required by PIPA.
        </p>
        <div className="bg-neutral-100 border-l-4 border-neutral-400 px-5 py-4 my-6 rounded-sm">
          <strong className="font-semibold">PIPA requirement:</strong> Individuals
          have the right to access their personal information and to challenge
          its accuracy. Response is required within 30 days (PIPA, ss. 24-25).
        </div>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          9. Data Security
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          We implement reasonable administrative, technical, and physical
          safeguards appropriate to the sensitivity of the personal information
          we hold. These include use of HTTPS on our website, restricted access
          to client data, and use of reputable third-party hosting providers
          with appropriate security practices.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          No method of electronic transmission or storage is 100% secure. We
          cannot guarantee absolute security, but we are committed to promptly
          addressing any identified vulnerabilities.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          10. Breach Notification
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          In the event of a privacy breach that poses a real risk of significant
          harm to individuals, we will notify the Office of the Information and
          Privacy Commissioner of Alberta (OIPC) and affected individuals as
          required under PIPA. We maintain records of all privacy breaches
          regardless of whether notification is required.
        </p>
        <div className="bg-neutral-100 border-l-4 border-neutral-400 px-5 py-4 my-6 rounded-sm">
          <strong className="font-semibold">PIPA requirement:</strong> Mandatory
          breach notification applies to breaches posing real risk of significant
          harm. The OIPC Alberta has binding order-making power and penalties up
          to CAD $100,000 for organisations.
        </div>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          11. Cross-Border Data Transfers
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Some third-party services we use (such as website hosting or analytics
          platforms) may process data outside of Canada, including in the United
          States. We take reasonable steps to ensure that personal information
          transferred outside Canada receives comparable protection. By using our
          services, you consent to such transfers consistent with Canadian law.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          12. Children&apos;s Privacy
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Our website and services are intended for businesses and adults only.
          We do not knowingly collect personal information from individuals
          under 18 years of age. If we become aware that we have inadvertently
          collected such information, we will delete it promptly.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          13. Third-Party Links
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices of those sites and encourage you
          to review their privacy policies before providing any personal
          information.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          14. Changes to This Policy
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          We may update this Privacy Policy periodically. Changes will be posted
          on albordigital.ca with a revised effective date. Continued use of our
          website after changes constitutes acceptance of the updated policy.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          15. Contact and Complaints
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          For privacy-related questions or to exercise your rights under PIPA or
          PIPEDA: gus@albor.digital | albordigital.ca | Canmore, Alberta,
          Canada.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          If you are not satisfied with our response to a privacy concern, you
          have the right to file a complaint with the Office of the Information
          and Privacy Commissioner of Alberta (OIPC Alberta) at www.oipc.ab.ca.
        </p>
      </Container>
    </div>
  );
};

export default PrivacyPolicyPage;
