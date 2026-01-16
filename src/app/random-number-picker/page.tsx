import { Metadata } from "next";
import PageContent from "@/components/PageContent";
import RandomNumberPickerTool from "@/components/tools/RandomNumberPickerTool";

export const metadata: Metadata = {
  title: "Random Number Picker - Pick From Your List",
  description: "Free random number picker. Enter your own list of numbers and randomly pick one or more. Perfect for raffles, drawings, and random selection.",
  openGraph: {
    title: "Random Number Picker - Pick From Your List | GeneratorNumberRandom",
    description: "Free random number picker. Enter your own list of numbers and randomly pick one or more.",
    url: "https://generatornumberrandom.com/random-number-picker",
  },
};

export default function RandomNumberPickerPage() {
  return (
    <PageContent
      title="Random Number Picker"
      tool={<RandomNumberPickerTool />}
      currentPath="/random-number-picker"
      description="Have a specific list of numbers to choose from? Our random number picker lets you enter your own numbers and randomly select from them. Unlike a range-based generator, this tool picks specifically from the numbers YOU provide. Perfect for raffles, lottery pools, random assignment, or any situation where you need to pick from a predefined set of numbers."
      howToUse={[
        "Enter your numbers separated by commas or new lines",
        "Choose how many numbers you want to pick",
        "Click 'Pick Random' to get your selection",
        "Copy your results to use elsewhere",
      ]}
      faqs={[
        {
          question: "How is this different from the Random Number Generator?",
          answer: "The Random Number Generator creates numbers within a range (like 1-100). This picker lets you provide your own specific list of numbers and randomly selects from that list.",
        },
        {
          question: "Can I pick multiple numbers at once?",
          answer: "Yes! Set the quantity to pick multiple numbers. Each number from your list can only be picked once per generation.",
        },
        {
          question: "What formats can I use to enter numbers?",
          answer: "You can separate numbers with commas (1, 5, 10, 15) or put each number on a new line. The tool handles both formats.",
        },
        {
          question: "Is this good for raffles?",
          answer: "This is perfect for raffles where participants have specific ticket numbers. Enter all the ticket numbers and let the tool pick the winner(s) randomly.",
        },
      ]}
    />
  );
}
