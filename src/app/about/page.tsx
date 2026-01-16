import { Metadata } from "next";
import ToolChips from "@/components/ToolChips";

export const metadata: Metadata = {
  title: "About",
  description: "About GeneratorNumberRandom.com - Learn about our free random number generator tools and our mission to provide fast, fun randomization utilities.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">About GeneratorNumberRandom</h1>

      <div className="space-y-8 text-foreground-muted">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Our Mission</h2>
          <p>
            GeneratorNumberRandom.com exists to provide the fastest, most fun, and completely free random generator tools on the web. We believe randomization utilities should be instant, enjoyable to use, and accessible to everyone without barriers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">What We Offer</h2>
          <p className="mb-4">
            We provide a suite of free random generator tools designed for everyday use:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Random Number Generator:</strong> Generate numbers in any range with customizable options</li>
            <li><strong>Coin Flip:</strong> Quick heads or tails decisions</li>
            <li><strong>Dice Roller:</strong> Roll virtual dice for games</li>
            <li><strong>Yes/No Generator:</strong> Instant binary decisions</li>
            <li><strong>Name Picker:</strong> Randomly select from a list of names</li>
            <li><strong>Letter Generator:</strong> Random A-Z letters</li>
            <li><strong>Color Generator:</strong> Discover random colors</li>
            <li><strong>Date Generator:</strong> Pick random dates</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Our Principles</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground">100% Free</h3>
              <p>Every tool is completely free. No premium tiers, no subscriptions, no hidden costs. Ever.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">No Account Required</h3>
              <p>Just visit and use. No signup, no login, no email required. Your privacy matters.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Fast & Instant</h3>
              <p>All randomization happens instantly in your browser. No loading, no waiting.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Fun Design</h3>
              <p>We believe utilities can be enjoyable. Our tools feature playful animations and a friendly interface.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">How It Works</h2>
          <p>
            All our random generators run entirely in your web browser using JavaScript. When you click &quot;Generate,&quot; your browser performs the randomization locally—nothing is sent to our servers. This means instant results and complete privacy for any data you enter.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Who Uses Our Tools?</h2>
          <p>Our users include:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Teachers selecting students for activities</li>
            <li>Giveaway hosts picking winners fairly</li>
            <li>Gamers who need dice or random numbers</li>
            <li>Developers testing with random data</li>
            <li>Anyone making quick, unbiased decisions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
          <p>
            Have questions, suggestions, or feedback? We&apos;d love to hear from you. Visit our{" "}
            <a href="/contact" className="text-accent-primary hover:underline">
              contact page
            </a>{" "}
            to get in touch.
          </p>
        </section>

        <section className="pt-4">
          <h2 className="text-xl font-semibold text-foreground mb-6">Try Our Tools</h2>
          <ToolChips currentPath="/about" />
        </section>
      </div>
    </div>
  );
}
