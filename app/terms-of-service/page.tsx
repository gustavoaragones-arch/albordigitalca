import { getSEO } from "@/lib/seo";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata = getSEO({
  title: "Terms of Service",
  description:
    "Terms of Service for Albor Digital Canada. Sole proprietorship, Alberta, Canada.",
  path: "/terms-of-service",
  siteName: "Albor Digital Canada",
});

const TermsOfServicePage = () => {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Container className="relative h-38 md:h-70">
        <PageHeader className="top-10 md:top-16 lg:top-18">
          Terms of Service
        </PageHeader>
      </Container>
      <Container className="prose prose-neutral max-w-3xl mx-auto px-6 py-16 pb-20 md:pb-30">
        <p className="text-sm text-neutral-500 mb-8">
          Albor Digital Canada · Sole Proprietorship, Alberta, Canada ·
          Effective: January 1, 2026
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          1. Acceptance of Terms
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          By accessing or using any website, web application, or digital service
          owned and operated by Albor Digital Canada (&quot;Albor Digital
          Canada,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you
          agree to be bound by these Terms of Service (&quot;Terms&quot;). If you
          do not agree, do not use our services.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          These Terms apply to all websites and digital properties operated under
          the Albor Digital Canada brand, including but not limited to
          albordigital.ca and any associated subdomains or hosted client
          projects.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          2. Who We Are
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Albor Digital Canada is an independent web design and brand identity
          studio operating as a sole proprietorship registered in the Province of
          Alberta, Canada. We provide website design, development, and corporate
          identity services to Canadian small businesses. We do not provide
          marketing consulting, social media management, or advertising
          services.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          <strong className="font-semibold text-neutral-900">
            Regulatory note:
          </strong>{" "}
          Albor Digital Canada operates under the jurisdiction of the Province of
          Alberta and the federal laws of Canada. Alberta&apos;s Personal
          Information Protection Act (PIPA, SA 2003, c P-6.5) is the primary
          privacy law governing this business.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          3. Services
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Our services include website design and development, corporate identity
          and logo design, and related digital deliverables provided to clients
          on a project basis. All services are scoped, priced, and delivered
          under a separate client agreement or service contract, which is
          incorporated into these Terms by reference.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          We reserve the right to modify, suspend, or discontinue any service at
          any time with reasonable notice. We will not be liable to you or any
          third party for any modification, suspension, or discontinuation of
          services where reasonable notice has been provided.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          4. Eligibility
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          You must be at least 18 years of age and legally capable of entering
          into a binding contract under Canadian law to engage our services. By
          using our website or contacting us, you represent that you meet these
          requirements.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          5. Client Responsibilities
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          As a client, you are responsible for: (a) providing accurate and
          complete information required to complete your project; (b) reviewing
          and approving deliverables within agreed timelines; (c) ensuring that
          any content, images, or materials you provide do not infringe
          third-party intellectual property rights; and (d) maintaining the
          confidentiality of any account credentials or login information we
          provide for your project.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          6. Payments and Fees
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          All fees are stated in Canadian dollars (CAD) unless otherwise specified
          in your service agreement. Payment terms, milestones, and cancellation
          conditions are outlined in your individual service contract. Invoices
          are due within the period stated on the invoice. Late payments may be
          subject to interest at a rate of 1.5% per month (18% annually),
          consistent with Alberta commercial practice.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          All applicable taxes, including GST/HST as required under the Excise
          Tax Act (Canada), will be applied to invoices where required by law.
        </p>
        <div className="bg-neutral-100 border-l-4 border-neutral-400 px-5 py-4 my-6 rounded-sm">
          <strong className="font-semibold">GST/HST note:</strong> Albor Digital
          Canada will charge and remit applicable GST/HST once registered
          thresholds are met under the Excise Tax Act (Canada). Clients are
          responsible for their own tax obligations.
        </div>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          7. Intellectual Property
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Upon receipt of full payment, the client receives full ownership of the
          final deliverables (website files, logo files, brand assets) as
          specified in the service agreement. Albor Digital Canada retains the
          right to display completed work in its portfolio unless the client
          requests otherwise in writing.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          All tools, frameworks, third-party libraries, and proprietary processes
          used to create deliverables remain the property of their respective
          owners. Open-source components are governed by their respective
          licences.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Until full payment is received, all work product remains the property of
          Albor Digital Canada.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          8. Acceptable Use of Our Website
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Users of albordigital.ca and any associated websites agree not to: (a)
          violate any applicable Canadian federal or provincial law or
          regulation; (b) infringe on the intellectual property rights of Albor
          Digital Canada or any third party; (c) transmit harmful, abusive, or
          offensive content through our contact forms or communications channels;
          (d) attempt unauthorised access to our systems; or (e) use our website
          for any unlawful commercial purpose.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          9. Third-Party Services
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Our services may involve integration with or recommendations of
          third-party platforms (such as hosting providers, domain registrars,
          payment processors, or content management systems). These third parties
          have their own terms and privacy policies. Albor Digital Canada is not
          responsible for the practices, content, or availability of any
          third-party service.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          10. Disclaimer of Warranties
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Our website and informational content are provided &quot;as is&quot; and
          &quot;as available&quot; without warranties of any kind, express or
          implied. We do not warrant that our website will be error-free,
          uninterrupted, or free from harmful components. This disclaimer does
          not affect any statutory rights you may have under Canadian consumer
          protection law, including the Alberta Consumer Protection Act.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          11. Limitation of Liability
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          To the maximum extent permitted by applicable Canadian law, Albor
          Digital Canada and its owner shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages arising from
          your use of our website or services. Our total liability for any claim
          related to a specific project shall not exceed the total fees paid by
          the client for that project in the twelve months preceding the claim.
        </p>
        <div className="bg-neutral-100 border-l-4 border-neutral-400 px-5 py-4 my-6 rounded-sm">
          <strong className="font-semibold">Alberta note:</strong> Nothing in
          this limitation of liability clause excludes or restricts liability
          that cannot be excluded under the Alberta Consumer Protection Act or
          other applicable Alberta legislation.
        </div>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          12. Indemnification
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          You agree to indemnify, defend, and hold harmless Albor Digital Canada
          and its owner from any claims, damages, liabilities, costs, or expenses
          (including reasonable legal fees) arising from: your use of our website;
          your violation of these Terms; any content or materials you provide
          that infringe third-party rights; or your violation of any applicable
          law.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          13. Governing Law and Disputes
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          These Terms are governed by the laws of the Province of Alberta and the
          federal laws of Canada applicable therein. Any dispute arising from
          these Terms or our services shall first be addressed through good-faith
          negotiation. If unresolved, disputes shall be submitted to mediation or
          binding arbitration in the Province of Alberta in accordance with the
          Arbitration Act (Alberta).
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Notwithstanding the above, Albor Digital Canada may seek injunctive or
          other equitable relief in any court of competent jurisdiction in
          Alberta.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          14. Changes to These Terms
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          We reserve the right to update these Terms at any time. Changes will be
          posted on albordigital.ca with a revised effective date. Your continued
          use of our website or services after any changes constitutes acceptance
          of the revised Terms.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          15. Contact
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          For questions about these Terms: gus@albor.digital | albordigital.ca |
          Canmore, Alberta, Canada
        </p>
      </Container>
    </div>
  );
};

export default TermsOfServicePage;
