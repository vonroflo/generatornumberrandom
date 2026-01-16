import { Metadata } from "next";
import PageContent from "@/components/PageContent";
import RandomLetterTool from "@/components/tools/RandomLetterTool";

export const metadata: Metadata = {
  title: "Random Letter Generator - Generate Random A-Z Letters",
  description: "Free random letter generator. Generate random letters from A to Z instantly. Choose uppercase, lowercase, or both. Perfect for games and learning.",
  openGraph: {
    title: "Random Letter Generator - Generate Random A-Z Letters | GeneratorNumberRandom",
    description: "Free random letter generator. Generate random letters from A to Z instantly.",
    url: "https://generatornumberrandom.com/random-letter-generator",
  },
};

export default function RandomLetterPage() {
  return (
    <PageContent
      title="Random Letter Generator"
      tool={<RandomLetterTool />}
      currentPath="/random-letter-generator"
      description="Generate random letters from the alphabet with our free tool. Choose to generate uppercase letters (A-Z), lowercase letters (a-z), or a mix of both. Great for word games like Scrabble or Scattergories, educational activities, creative writing prompts, or any time you need a random letter. Generate one letter or up to 100 at a time."
      howToUse={[
        "Choose how many letters you want to generate",
        "Select uppercase, lowercase, or both",
        "Click 'Generate Letters' to get your random letters",
        "Copy the result for your game or activity",
      ]}
      faqs={[
        {
          question: "Are all 26 letters equally likely?",
          answer: "Yes! Each letter from A to Z has an equal 1/26 chance of being selected. There's no weighting based on letter frequency in English.",
        },
        {
          question: "Can I generate only vowels or consonants?",
          answer: "Currently, the tool generates from all 26 letters. For vowel-only or consonant-only generation, you could use our Random Number Picker with your specific letter list.",
        },
        {
          question: "What's this useful for?",
          answer: "Random letters are great for word games (Scattergories, word association), educational activities, generating initials, creative writing prompts, and coding/testing purposes.",
        },
        {
          question: "How many letters can I generate at once?",
          answer: "You can generate anywhere from 1 to 100 letters at a time. They'll be displayed together so you can easily copy them.",
        },
      ]}
    />
  );
}
