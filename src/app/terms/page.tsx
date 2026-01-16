import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for GeneratorNumberRandom.com - Read our terms and conditions for using our free random generator tools.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <p className="text-foreground-muted mb-6">
        Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </p>

      <div className="space-y-8 text-foreground-muted">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Acceptance of Terms</h2>
          <p>
            By accessing and using GeneratorNumberRandom.com, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Description of Service</h2>
          <p>
            GeneratorNumberRandom.com provides free online random generator tools including random number generators, coin flip, dice roller, and other randomization utilities. All tools are provided free of charge and run entirely in your web browser.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Free Service</h2>
          <p>
            All tools on this website are completely free to use. There are no premium features, subscriptions, or hidden fees. We generate revenue through non-intrusive advertising only.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">No Warranty</h2>
          <p>
            Our services are provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, either express or implied. We do not guarantee that:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>The service will be uninterrupted or error-free</li>
            <li>The results will meet your specific requirements</li>
            <li>The randomness will be suitable for any particular purpose</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
          <p>
            GeneratorNumberRandom.com shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Use our service for any illegal purpose</li>
            <li>Attempt to interfere with the proper functioning of the website</li>
            <li>Use automated systems to access the website in a manner that sends more requests than a human could reasonably produce</li>
            <li>Copy, modify, or distribute our content without permission</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Randomness Disclaimer</h2>
          <p>
            Our random generators use JavaScript&apos;s built-in random functions. While suitable for most casual purposes (games, decisions, raffles), they should not be used for cryptographic purposes or high-stakes gambling. For applications requiring certified randomness, please use specialized services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and software, is the property of GeneratorNumberRandom.com and is protected by applicable copyright and trademark laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the service after any changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
          <p>
            For questions about these Terms of Service, please visit our{" "}
            <a href="/contact" className="text-accent-primary hover:underline">
              contact page
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
