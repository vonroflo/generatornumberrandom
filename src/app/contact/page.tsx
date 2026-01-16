import { Metadata } from "next";
import ToolChips from "@/components/ToolChips";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact GeneratorNumberRandom.com - Get in touch with us for questions, feedback, or support.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      <div className="space-y-8 text-foreground-muted">
        <section>
          <p className="text-lg">
            Have a question, suggestion, or found a bug? We&apos;d love to hear from you!
          </p>
        </section>

        <section className="bg-background-card rounded-xl p-6 border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4">Get In Touch</h2>
          <p className="mb-4">
            The best way to reach us is via email:
          </p>
          <a
            href="mailto:hello@generatornumberrandom.com"
            className="inline-flex items-center gap-2 text-accent-primary hover:underline text-lg font-medium"
          >
            hello@generatornumberrandom.com
          </a>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">What We Can Help With</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Bug Reports:</strong> Found something not working? Let us know!</li>
            <li><strong>Feature Requests:</strong> Have an idea for a new tool or improvement?</li>
            <li><strong>General Questions:</strong> Questions about how our tools work</li>
            <li><strong>Feedback:</strong> We appreciate hearing what you think</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Response Time</h2>
          <p>
            We aim to respond to all inquiries within 2-3 business days. For common questions, you might find answers on our tool pages or in our{" "}
            <a href="/about" className="text-accent-primary hover:underline">
              about page
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Before You Contact Us</h2>
          <p className="mb-3">
            Please note that all our tools are:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Completely free (no paid support available)</li>
            <li>Run entirely in your browser (we don&apos;t store your data)</li>
            <li>Designed for general use (not for cryptographic purposes)</li>
          </ul>
        </section>

        <section className="pt-4">
          <h2 className="text-xl font-semibold text-foreground mb-6">Explore Our Tools</h2>
          <ToolChips currentPath="/contact" />
        </section>
      </div>
    </div>
  );
}
