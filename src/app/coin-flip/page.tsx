import { Metadata } from "next";
import PageContent from "@/components/PageContent";
import CoinFlipTool from "@/components/tools/CoinFlipTool";

export const metadata: Metadata = {
  title: "Coin Flip - Heads or Tails",
  description: "Free online coin flip simulator. Flip a virtual coin to get heads or tails instantly. Perfect for making quick decisions or settling disputes.",
  openGraph: {
    title: "Coin Flip - Heads or Tails | GeneratorNumberRandom",
    description: "Free online coin flip simulator. Flip a virtual coin to get heads or tails instantly.",
    url: "https://generatornumberrandom.com/coin-flip",
  },
};

export default function CoinFlipPage() {
  return (
    <PageContent
      title="Coin Flip - Heads or Tails"
      tool={<CoinFlipTool />}
      currentPath="/coin-flip"
      description="Need to make a quick decision? Our free online coin flip simulator gives you a random heads or tails result instantly. Just click the button and let fate decide. Perfect for settling debates, making choices, or adding a bit of randomness to your day. The coin flips with a satisfying animation, making it feel like the real thing."
      howToUse={[
        "Click the 'Flip Coin' button",
        "Watch the coin spin through the air",
        "Get your result: Heads or Tails",
        "Flip again as many times as you want",
      ]}
      faqs={[
        {
          question: "Is the coin flip truly random?",
          answer: "Yes! Each flip has an exactly 50/50 chance of landing on heads or tails, using JavaScript's cryptographically secure random number generator.",
        },
        {
          question: "Can I flip multiple coins at once?",
          answer: "This tool is designed for single coin flips. For multiple random selections, try our Random Number Generator or Dice Roller.",
        },
        {
          question: "What are common uses for coin flips?",
          answer: "Coin flips are great for making binary decisions, settling disputes fairly, choosing who goes first in games, or any situation where you need a quick, unbiased choice between two options.",
        },
        {
          question: "Is this free to use?",
          answer: "Yes! Our coin flip tool is completely free with no signup required. Flip as many times as you like.",
        },
      ]}
    />
  );
}
