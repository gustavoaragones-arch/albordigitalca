import { getSEO } from "@/lib/seo";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata = getSEO({
  title: "Disclaimer",
  description: "Disclaimer for Albor Digital Canada. Effective January 1, 2026.",
  path: "/disclaimer",
  siteName: "Albor Digital Canada",
});

const DisclaimerPage = () => {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Container className="relative h-38 md:h-70">
        <PageHeader className="top-10 md:top-16 lg:top-18">
          Disclaimer
        </PageHeader>
      </Container>
      <Container className="prose prose-neutral max-w-3xl mx-auto px-6 py-16 pb-20 md:pb-30">
        <p className="text-sm text-neutral-500 mb-8">
          Albor Digital Canada · Effective: January 1, 2026
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          1. General Disclaimer
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          The website, content, and information provided by Albor Digital Canada
          are offered for general informational purposes only. While we strive
          for accuracy, we make no representations or warranties, express or
          implied, regarding the completeness, accuracy, reliability, or
          suitability of any information on our website for any particular
          purpose. All use is at your own risk.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          2. No Professional Advice
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Nothing on our website constitutes legal, financial, marketing, tax, or
          other professional advice. Any information about web design, digital
          presence, or business operations is general in nature and should not be
          relied upon as a substitute for advice from a qualified professional.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          3. Service Results
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          We make no guarantees regarding specific results from our web design or
          branding services, including but not limited to search engine
          rankings, traffic volumes, or business outcomes. Results depend on many
          factors outside our control, including search engine algorithms, market
          conditions, and client implementation.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          4. External Links
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Our website may reference or link to external websites and resources.
          Albor Digital Canada does not control and is not responsible for the
          content, accuracy, or availability of external sites. Inclusion of a
          link does not imply endorsement.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          5. Limitation of Liability
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          To the fullest extent permitted by Alberta and Canadian law, Albor
          Digital Canada and its owner shall not be liable for any direct,
          indirect, incidental, consequential, or punitive damages arising from
          reliance on or use of our website or general informational content.
        </p>
        <div className="bg-neutral-100 border-l-4 border-neutral-400 px-5 py-4 my-6 rounded-sm">
          <strong className="font-semibold">
            Alberta Consumer Protection Act note:
          </strong>{" "}
          This limitation does not restrict any rights you may have under the
          Alberta Consumer Protection Act or other mandatory consumer protection
          legislation applicable in Alberta.
        </div>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          6. Jurisdictional Notice
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Albor Digital Canada operates from Canmore, Alberta, Canada. Our
          services are intended primarily for Canadian clients. We make no
          representation that our services are appropriate or available for use
          outside Canada. Users who access our website from outside Canada do so
          at their own initiative and are responsible for compliance with their
          local laws.
        </p>
      </Container>
    </div>
  );
};

export default DisclaimerPage;
