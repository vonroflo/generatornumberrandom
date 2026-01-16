import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageContent from "@/components/PageContent";
import RandomNumberTool from "@/components/tools/RandomNumberTool";

// Define the preset ranges we support
const presetRanges: Record<string, { min: number; max: number; description: string; useCases: string[] }> = {
  "1-10": {
    min: 1,
    max: 10,
    description: "Generate random numbers between 1 and 10 instantly. This compact range is perfect for simple decisions, small group selections, rating scales, or any situation where you need a quick number from one to ten. Whether you're picking a number for a game, assigning tasks, or making a quick choice, this tool delivers instant results.",
    useCases: [
      "Rating something on a scale of 1-10",
      "Small group random selection",
      "Simple board games and activities",
      "Quick decision making between 10 options",
    ],
  },
  "1-100": {
    min: 1,
    max: 100,
    description: "The classic random number generator range. Generate numbers from 1 to 100 for percentages, probability games, or general-purpose random selection. This is the most popular range for random number generation, used in everything from classroom activities to statistical sampling.",
    useCases: [
      "Percentage-based decisions",
      "Raffle and lottery number selection",
      "Statistical sampling",
      "General-purpose random selection",
    ],
  },
  "1-20": {
    min: 1,
    max: 20,
    description: "Generate random numbers from 1 to 20 instantly. This range is particularly popular among tabletop gamers as it matches the iconic d20 die. Also great for classroom activities, medium-sized group selections, and any situation where you need a bit more range than 1-10.",
    useCases: [
      "Simulating a d20 die roll",
      "Tabletop RPG random events",
      "Classroom student selection",
      "Medium-sized group random picks",
    ],
  },
  "1-50": {
    min: 1,
    max: 50,
    description: "Generate random numbers between 1 and 50. This mid-range option is perfect for lottery-style games, moderate-sized raffles, and situations where you need more options than 1-20 but don't need a full 1-100 range. Great for state lottery picks and bingo-style games.",
    useCases: [
      "Lottery number selection",
      "Bingo-style games",
      "Medium-sized raffle drawings",
      "Team assignment for groups of 50",
    ],
  },
  "1-1000": {
    min: 1,
    max: 1000,
    description: "Generate random numbers from 1 to 1000 for larger-scale random selection needs. Perfect for big raffles, prize drawings with many participants, or any situation where you need a wider range of possible numbers. Each number has an equal chance of being selected.",
    useCases: [
      "Large raffle drawings",
      "Prize giveaways with many entries",
      "Random ID or reference number generation",
      "Large-scale random sampling",
    ],
  },
  "1-6": {
    min: 1,
    max: 6,
    description: "Simulate a standard six-sided die with our 1-6 random number generator. Get instant results equivalent to rolling a single die. Perfect for board games when you don't have dice handy, or for quick random selections from six options.",
    useCases: [
      "Simulating a single die roll",
      "Board game replacement die",
      "Choosing between 6 options",
      "Simple probability experiments",
    ],
  },
  "0-1": {
    min: 0,
    max: 1,
    description: "Generate binary random numbers (0 or 1). This is the simplest form of random generation, perfect for yes/no decisions, binary choices, or simulating coin flips numerically. Each generation has exactly 50% chance of producing 0 or 1.",
    useCases: [
      "Binary decision making (0=no, 1=yes)",
      "Simulating coin flips numerically",
      "Programming and testing boolean logic",
      "Simple probability demonstrations",
    ],
  },
  "1-52": {
    min: 1,
    max: 52,
    description: "Generate random numbers from 1 to 52, matching a standard deck of playing cards. Use this to randomly select card positions, simulate drawing from a deck, or for card game randomization. Perfect for when you need deck-of-cards style randomness.",
    useCases: [
      "Random card selection from a deck",
      "Card game simulations",
      "Weekly planning (52 weeks in a year)",
      "Deck-based probability exercises",
    ],
  },
  "1-365": {
    min: 1,
    max: 365,
    description: "Generate random numbers from 1 to 365, representing days of the year. Perfect for randomly selecting a day, birthday probability experiments, or any calendar-based random selection. Note: Does not account for leap years (366 days).",
    useCases: [
      "Random day of the year selection",
      "Birthday probability experiments",
      "Daily challenge or activity selection",
      "Calendar-based random events",
    ],
  },
  "1-12": {
    min: 1,
    max: 12,
    description: "Generate random numbers from 1 to 12, matching the months of the year or hours on a clock. This range is perfect for monthly selections, clock-based games, or any situation with 12 options to choose from.",
    useCases: [
      "Random month selection",
      "Clock-based games and activities",
      "12-team tournament brackets",
      "Astrological sign selection (by month)",
    ],
  },
};

interface PageProps {
  params: Promise<{ "min": string; "max": string }>;
}

export async function generateStaticParams() {
  return Object.keys(presetRanges).map((range) => {
    const [min, max] = range.split("-");
    return { "min": min, "max": max };
  });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rangeKey = `${resolvedParams["min"]}-${resolvedParams["max"]}`;
  const preset = presetRanges[rangeKey];

  if (!preset) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `Random Number Generator ${preset.min}-${preset.max}`,
    description: `Generate random numbers between ${preset.min} and ${preset.max} instantly. Free online tool, no signup required.`,
    openGraph: {
      title: `Random Number Generator ${preset.min}-${preset.max} | GeneratorNumberRandom`,
      description: `Generate random numbers between ${preset.min} and ${preset.max} instantly. Free online tool.`,
      url: `https://generatornumberrandom.com/random-number-${preset.min}-${preset.max}`,
    },
  };
}

export default async function PresetRangePage({ params }: PageProps) {
  const resolvedParams = await params;
  const rangeKey = `${resolvedParams["min"]}-${resolvedParams["max"]}`;
  const preset = presetRanges[rangeKey];

  if (!preset) {
    notFound();
  }

  return (
    <PageContent
      title={`Random Number Generator ${preset.min}-${preset.max}`}
      tool={<RandomNumberTool defaultMin={preset.min} defaultMax={preset.max} />}
      currentPath={`/random-number-${preset.min}-${preset.max}`}
      description={preset.description}
      howToUse={[
        `The range is preset to ${preset.min}-${preset.max}, but you can adjust if needed`,
        "Choose how many random numbers you want to generate",
        "Toggle 'Unique only' if you don't want duplicates",
        "Click 'Generate' to get your random numbers instantly",
        "Copy your results or download them as a CSV file",
      ]}
      faqs={[
        {
          question: `Why use the ${preset.min}-${preset.max} range?`,
          answer: `This range is commonly used for: ${preset.useCases.slice(0, 2).join(", ")}. It provides the right balance of options for these specific use cases.`,
        },
        {
          question: "Can I change the range after loading this page?",
          answer: "Yes! While the range is preset for convenience, you can adjust the minimum and maximum values to any numbers you need.",
        },
        {
          question: "Are all numbers equally likely?",
          answer: `Yes! Every number from ${preset.min} to ${preset.max} has an equal chance of being selected. The randomness is powered by a secure algorithm.`,
        },
        {
          question: "Can I generate multiple numbers?",
          answer: "You can generate up to 10,000 numbers at once. Use the 'Unique only' option if you need each number to appear only once.",
        },
      ]}
    />
  );
}
