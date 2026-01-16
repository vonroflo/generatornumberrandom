import { Metadata } from "next";
import PageContent from "@/components/PageContent";
import RandomNamePickerTool from "@/components/tools/RandomNamePickerTool";

export const metadata: Metadata = {
  title: "Random Name Picker - Pick Names Randomly",
  description: "Free random name picker. Enter a list of names and randomly select winners. Perfect for giveaways, classroom selection, and team assignments.",
  openGraph: {
    title: "Random Name Picker - Pick Names Randomly | GeneratorNumberRandom",
    description: "Free random name picker. Enter a list of names and randomly select winners.",
    url: "https://generatornumberrandom.com/random-name-picker",
  },
};

export default function RandomNamePickerPage() {
  return (
    <PageContent
      title="Random Name Picker"
      tool={<RandomNamePickerTool />}
      currentPath="/random-name-picker"
      description="Need to pick a random person from a group? Our random name picker makes it easy and fair. Just enter your list of names and let the tool randomly select one or more people. Ideal for teachers picking students, managers assigning tasks, hosts selecting giveaway winners, or anyone who needs to make a random, unbiased selection from a group of people."
      howToUse={[
        "Enter names separated by commas or on new lines",
        "Choose how many names you want to pick",
        "Click 'Pick Names' to get your random selection",
        "Copy the result to share or record it",
      ]}
      faqs={[
        {
          question: "Is the selection truly random?",
          answer: "Yes! Each name has an equal chance of being selected. The tool uses a cryptographically secure random algorithm to ensure fair selection.",
        },
        {
          question: "Can I pick multiple names at once?",
          answer: "You can pick as many names as you want (up to the total number of names in your list). Each name can only be picked once per selection.",
        },
        {
          question: "What's the best way to format my name list?",
          answer: "You can enter names separated by commas (Alice, Bob, Charlie) or put each name on its own line. Both formats work perfectly.",
        },
        {
          question: "Can I use this for giveaways?",
          answer: "Absolutely! This tool is perfect for fairly selecting winners from a list of participants. Just paste in all the names and pick your winner(s).",
        },
      ]}
    />
  );
}
