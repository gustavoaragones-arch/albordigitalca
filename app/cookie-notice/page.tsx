import { getSEO } from "@/lib/seo";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata = getSEO({
  title: "Cookie Notice",
  description:
    "Cookie Notice for Albor Digital Canada. Aligned with CASL and Alberta PIPA.",
  path: "/cookie-notice",
  siteName: "Albor Digital Canada",
});

const CookieNoticePage = () => {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Container className="relative h-38 md:h-70">
        <PageHeader className="top-10 md:top-16 lg:top-18">
          Cookie Notice
        </PageHeader>
      </Container>
      <Container className="prose prose-neutral max-w-3xl mx-auto px-6 py-16 pb-20 md:pb-30">
        <p className="text-sm text-neutral-500 mb-8">
          Albor Digital Canada · Aligned with CASL and Alberta PIPA · Effective:
          January 1, 2026
        </p>

        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Canada&apos;s Anti-Spam Legislation (CASL, SC 2010, c 23) and Alberta
          PIPA govern the use of cookies and similar tracking technologies on
          Canadian websites. This notice explains what we use and how you can
          control it.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          1. What Are Cookies
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Cookies are small text files placed on your device when you visit a
          website. They help websites function properly, remember your
          preferences, and provide analytical information to site operators.
          Similar technologies such as local storage and tracking pixels may also
          be used.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          2. How We Use Cookies
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Albor Digital Canada uses cookies to: (a) ensure our website functions
          correctly (strictly necessary cookies); (b) understand how visitors use
          our website through anonymised analytics; and (c) remember your
          preferences between visits.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          We do not use advertising or behavioural tracking cookies on our
          website. We do not sell or share cookie data with advertising
          networks.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          3. Types of Cookies We Use
        </h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left font-semibold text-neutral-900 border-b border-neutral-300 pb-2 pr-6">
                  Type
                </th>
                <th className="text-left font-semibold text-neutral-900 border-b border-neutral-300 pb-2 pr-6">
                  Purpose
                </th>
                <th className="text-left font-semibold text-neutral-900 border-b border-neutral-300 pb-2 pr-6">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-neutral-700 py-3 pr-6 align-top border-b border-neutral-100 leading-relaxed">
                  Strictly Necessary
                </td>
                <td className="text-neutral-700 py-3 pr-6 align-top border-b border-neutral-100 leading-relaxed">
                  Core website functionality and security. These cannot be disabled.
                </td>
                <td className="text-neutral-700 py-3 pr-6 align-top border-b border-neutral-100 leading-relaxed">
                  Session
                </td>
              </tr>
              <tr>
                <td className="text-neutral-700 py-3 pr-6 align-top border-b border-neutral-100 leading-relaxed">
                  Functional
                </td>
                <td className="text-neutral-700 py-3 pr-6 align-top border-b border-neutral-100 leading-relaxed">
                  Remembers your preferences (e.g. language, form data).
                </td>
                <td className="text-neutral-700 py-3 pr-6 align-top border-b border-neutral-100 leading-relaxed">
                  Up to 1 year
                </td>
              </tr>
              <tr>
                <td className="text-neutral-700 py-3 pr-6 align-top border-b border-neutral-100 leading-relaxed">
                  Analytics
                </td>
                <td className="text-neutral-700 py-3 pr-6 align-top border-b border-neutral-100 leading-relaxed">
                  Aggregate, anonymised data via tools such as Google Analytics to
                  help us improve our website. No personal profiles are built.
                </td>
                <td className="text-neutral-700 py-3 pr-6 align-top border-b border-neutral-100 leading-relaxed">
                  Up to 2 years
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          4. CASL and Consent
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Under Canada&apos;s Anti-Spam Legislation (CASL), the installation of
          certain tracking technologies on your device may require your express
          consent. We display a cookie consent notice on your first visit to
          albordigital.ca. Strictly necessary cookies do not require consent as
          they are essential to website operation. Analytics and functional
          cookies require your consent before being activated.
        </p>
        <div className="bg-neutral-100 border-l-4 border-neutral-400 px-5 py-4 my-6 rounded-sm">
          <strong className="font-semibold">CASL note:</strong> Installing a
          computer program (including certain cookies and tracking scripts) on a
          user&apos;s device without consent may violate CASL (SC 2010, c 23, s.
          8). Our cookie consent mechanism is designed to comply with this
          requirement.
        </div>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          5. Third-Party Cookies
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Some cookies on our website are placed by third-party services,
          including Google Analytics. These third parties have their own cookie
          and privacy policies. We encourage you to review Google&apos;s Privacy
          Policy at policies.google.com.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          6. Your Choices
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          You can control and manage cookies through: (a) the cookie consent
          banner on your first visit to our website, where you may accept or
          decline non-essential cookies; (b) your browser settings, where you can
          block or delete cookies at any time; and (c) the Google Analytics
          opt-out browser add-on available at tools.google.com/dlpage/gaoptout.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Disabling strictly necessary cookies may affect the functionality of
          our website.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          7. Do Not Track
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          Some browsers include a &quot;Do Not Track&quot; (DNT) signal. Our
          website currently does not respond to DNT signals, as there is no
          binding Canadian legal standard for this feature. We continue to monitor
          developments in this area.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          8. Updates to This Notice
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          We may update this Cookie Notice as our website evolves or applicable
          regulations change, including any developments under Bill C-27 (Consumer
          Privacy Protection Act). Updates will be posted on albordigital.ca
          with a revised effective date.
        </p>

        <h2 className="text-base font-semibold text-neutral-900 mt-10 mb-3">
          9. Contact
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          For questions about our use of cookies: gus@albor.digital
        </p>

        <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify">
          These documents apply to albordigital.ca and all websites and digital
          properties operated under the Albor Digital Canada brand. | Complaints
          may be directed to the Office of the Information and Privacy
          Commissioner of Alberta (OIPC) at www.oipc.ab.ca or the Office of the
          Privacy Commissioner of Canada at www.priv.gc.ca. Copyright 2026 Albor
          Digital Canada. All rights reserved.
        </p>
      </Container>
    </div>
  );
};

export default CookieNoticePage;
