import { Metadata } from "next";
import PageContent from "@/components/PageContent";
import YesNoTool from "@/components/tools/YesNoTool";

export const metadata: Metadata = {
  title: "Yes or No Generator - Random Decision Maker",
  description: "Free yes or no generator for quick random decisions. Let the generator decide for you instantly. Perfect for making choices when you can't decide.",
  openGraph: {
    title: "Yes or No Generator - Random Decision Maker | GeneratorNumberRandom",
    description: "Free yes or no generator for quick random decisions. Let the generator decide for you instantly.",
    url: "https://generatornumberrandom.com/yes-no-generator",
  },
};

export default function YesNoPage() {
  return (
    <PageContent
      title="Yes or No Generator"
      tool={<YesNoTool />}
      currentPath="/yes-no-generator"
      description="Can't decide? Let our Yes or No generator make the choice for you. This simple decision-making tool gives you a random Yes or No answer with a single click. It's the perfect solution when you're stuck between two options and just need someone (or something) to decide. Each result has an equal 50/50 chance, making it completely fair and unbiased."
      howToUse={[
        "Think of your yes/no question",
        "Click the 'Decide for Me' button",
        "Get your instant answer: Yes or No",
        "Follow the answer, or ask again if you dare",
      ]}
      faqs={[
        {
          question: "Is the result truly random?",
          answer: "Yes! Each click has exactly 50% chance of Yes and 50% chance of No. The result is generated using a cryptographically secure random function.",
        },
        {
          question: "Should I always follow the answer?",
          answer: "That's up to you! Some people use it as a decision-maker, others use it to reveal what they were secretly hoping for. If you're disappointed with the answer, that tells you something!",
        },
        {
          question: "What kind of questions work best?",
          answer: "Any question with a binary yes/no answer works great. 'Should I order pizza?' 'Should I go to the gym?' 'Should I text them back?' The possibilities are endless.",
        },
        {
          question: "Can I use this for important decisions?",
          answer: "While it's fun for casual choices, we recommend using your own judgment for truly important life decisions. This is best for those small, everyday choices where you just need a nudge.",
        },
      ]}
    />
  );
}
