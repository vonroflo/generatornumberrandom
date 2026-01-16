import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Random Number Generator - Free Online Tool | GeneratorNumberRandom",
    template: "%s | GeneratorNumberRandom",
  },
  description: "Free random number generator. Generate random numbers instantly with customizable ranges, quantities, and options. No signup required.",
  keywords: ["random number generator", "random number", "number generator", "random picker", "random"],
  authors: [{ name: "GeneratorNumberRandom" }],
  creator: "GeneratorNumberRandom",
  metadataBase: new URL("https://generatornumberrandom.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://generatornumberrandom.com",
    siteName: "GeneratorNumberRandom",
    title: "Random Number Generator - Free Online Tool",
    description: "Free random number generator. Generate random numbers instantly with customizable ranges, quantities, and options.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GeneratorNumberRandom - Free Random Number Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Number Generator - Free Online Tool",
    description: "Free random number generator. Generate random numbers instantly with customizable ranges, quantities, and options.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Analytics />
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
