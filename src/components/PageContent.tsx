import ToolChips from "./ToolChips";
import AdSlot from "./AdSlot";
import Script from "next/script";

interface FAQ {
  question: string;
  answer: string;
}

interface PageContentProps {
  title: string;
  tool: React.ReactNode;
  description: string;
  howToUse: string[];
  faqs: FAQ[];
  currentPath: string;
}

export default function PageContent({
  title,
  tool,
  description,
  howToUse,
  faqs,
  currentPath,
}: PageContentProps) {
  // JSON-LD FAQPage schema for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // JSON-LD WebApplication schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: title,
    description: description,
    url: `https://generatornumberrandom.com${currentPath}`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    browserRequirements: "Requires JavaScript",
  };

  // JSON-LD BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://generatornumberrandom.com",
      },
      ...(currentPath !== "/"
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: title,
              item: `https://generatornumberrandom.com${currentPath}`,
            },
          ]
        : []),
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Script
        id={`faq-schema-${currentPath}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id={`webapp-schema-${currentPath}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <Script
        id={`breadcrumb-schema-${currentPath}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        {title}
      </h1>

      {tool}

      <div className="mt-8">
        <AdSlot slot="top" />
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">What This Tool Does</h2>
        <p className="text-foreground-muted leading-relaxed">{description}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">How to Use It</h2>
        <ol className="list-decimal list-inside space-y-2 text-foreground-muted">
          {howToUse.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-foreground-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <AdSlot slot="bottom" />
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Try Another Generator</h2>
        <ToolChips currentPath={currentPath} />
      </section>
    </div>
  );
}
