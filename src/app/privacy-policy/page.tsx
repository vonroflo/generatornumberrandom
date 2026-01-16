import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for GeneratorNumberRandom.com - Learn how we handle your data and protect your privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <p className="text-foreground-muted mb-6">
        Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </p>

      <div className="space-y-8 text-foreground-muted">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Introduction</h2>
          <p>
            GeneratorNumberRandom.com (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you use our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
          <p className="mb-3">
            <strong>We do not collect personal information.</strong> Our tools run entirely in your browser, and we do not store any numbers you generate or lists you enter.
          </p>
          <p>However, we may collect anonymous usage data through:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Google Analytics 4 (page views, general usage patterns)</li>
            <li>Google AdSense (for serving relevant advertisements)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Cookies and Tracking</h2>
          <p>
            We use cookies to improve your experience and serve advertisements. These cookies may be set by:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Google Analytics:</strong> To understand how visitors use our site</li>
            <li><strong>Google AdSense:</strong> To display relevant advertisements</li>
          </ul>
          <p className="mt-3">
            You can control cookies through your browser settings. Disabling cookies may affect some site functionality.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Third-Party Advertising</h2>
          <p>
            We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" className="text-accent-primary hover:underline" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Data Security</h2>
          <p>
            Since we don&apos;t collect personal data, there&apos;s minimal risk to your privacy. All random generation happens locally in your browser—nothing is sent to our servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Children&apos;s Privacy</h2>
          <p>
            Our website is suitable for all ages. We do not knowingly collect any personal information from anyone, including children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us through our{" "}
            <a href="/contact" className="text-accent-primary hover:underline">
              contact page
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
