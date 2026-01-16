import { Metadata } from "next";
import PageContent from "@/components/PageContent";
import DiceRollerTool from "@/components/tools/DiceRollerTool";

export const metadata: Metadata = {
  title: "Dice Roller - Roll Virtual Dice",
  description: "Free online dice roller. Roll 1 to 10 dice instantly and get random results from 1-6. Perfect for board games, RPGs, and tabletop gaming.",
  openGraph: {
    title: "Dice Roller - Roll Virtual Dice | GeneratorNumberRandom",
    description: "Free online dice roller. Roll 1 to 10 dice instantly and get random results from 1-6.",
    url: "https://generatornumberrandom.com/dice-roller",
  },
};

export default function DiceRollerPage() {
  return (
    <PageContent
      title="Dice Roller"
      tool={<DiceRollerTool />}
      currentPath="/dice-roller"
      description="Roll virtual dice online with our free dice roller. Choose from 1 to 10 dice and get instant random results. Each die shows the classic dot patterns you know from physical dice. Perfect for board games when you can't find real dice, tabletop RPGs, classroom activities, or any game that needs random 1-6 rolls. The total of all dice is automatically calculated for you."
      howToUse={[
        "Select how many dice you want to roll (1-10)",
        "Click the 'Roll Dice' button",
        "Watch the dice roll animation",
        "See your individual results and total",
        "Copy the results if needed",
      ]}
      faqs={[
        {
          question: "How many dice can I roll at once?",
          answer: "You can roll anywhere from 1 to 10 dice at once. The tool displays each die's result and automatically calculates the total.",
        },
        {
          question: "Are the dice rolls truly random?",
          answer: "Yes! Each die has an equal 1/6 chance of landing on any number from 1 to 6, using a secure random number generator.",
        },
        {
          question: "Can I use this for D&D or tabletop RPGs?",
          answer: "This roller uses standard 6-sided dice (d6). It's perfect for games like Yahtzee, Monopoly, or any game using d6. For other dice types (d20, d12, etc.), use our Random Number Generator with custom ranges.",
        },
        {
          question: "Is the dice roller free?",
          answer: "Yes! Roll as many dice as you want, as many times as you want, completely free.",
        },
      ]}
    />
  );
}
