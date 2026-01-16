import { Metadata } from "next";
import PageContent from "@/components/PageContent";
import RandomDateTool from "@/components/tools/RandomDateTool";

export const metadata: Metadata = {
  title: "Random Date Generator - Generate Random Dates",
  description: "Free random date generator. Generate random dates within any range. Perfect for testing, scheduling, games, and creative projects.",
  openGraph: {
    title: "Random Date Generator - Generate Random Dates | GeneratorNumberRandom",
    description: "Free random date generator. Generate random dates within any range.",
    url: "https://generatornumberrandom.com/random-date-generator",
  },
};

export default function RandomDatePage() {
  return (
    <PageContent
      title="Random Date Generator"
      tool={<RandomDateTool />}
      currentPath="/random-date-generator"
      description="Generate random dates within any date range you specify. Whether you need a random birthday for a game, test data for an application, or just want to pick a random day for an event, this tool makes it easy. Set your start and end dates, click generate, and get a random date complete with the day of the week. The result is formatted in a clear, readable way."
      howToUse={[
        "Set your start date using the date picker",
        "Set your end date for the range",
        "Click 'Pick Random Date' to generate",
        "Copy the formatted date for your use",
      ]}
      faqs={[
        {
          question: "What date range can I use?",
          answer: "You can use any valid date range. Set dates in the past for historical random dates, or in the future for planning purposes. The end date must be after the start date.",
        },
        {
          question: "Is every day in the range equally likely?",
          answer: "Yes! Every day between your start and end dates has an equal chance of being selected. There's no weighting for weekdays, weekends, or any other factor.",
        },
        {
          question: "What format is the date displayed in?",
          answer: "Dates are displayed in a readable format including the day of the week, month, day, and year (e.g., 'Tuesday, March 15, 2025').",
        },
        {
          question: "What are common uses for random dates?",
          answer: "Random dates are useful for generating test data, planning surprise events, creating game scenarios, educational activities about calendars, and any creative project needing arbitrary dates.",
        },
      ]}
    />
  );
}
