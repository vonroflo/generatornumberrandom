import PageContent from "@/components/PageContent";
import RandomNumberTool from "@/components/tools/RandomNumberTool";

export default function HomePage() {
  return (
    <PageContent
      title="Random Number Generator"
      tool={<RandomNumberTool />}
      currentPath="/"
      description="Generate random numbers instantly with our free online tool. Set your minimum and maximum range, choose how many numbers you need, and get results in a single click. Perfect for games, raffles, statistical sampling, or any time you need truly random numbers. No signup required—just pure randomness at your fingertips."
      howToUse={[
        "Set your minimum number in the 'From' field (default is 1)",
        "Set your maximum number in the 'To' field (default is 100)",
        "Choose how many random numbers you want to generate",
        "Toggle 'Unique only' if you don't want duplicate numbers",
        "Click 'Generate' to get your random numbers instantly",
        "Copy your results or download them as a CSV file",
      ]}
      faqs={[
        {
          question: "Can I generate multiple random numbers at once?",
          answer: "Yes! Use the 'How many?' field to generate up to 10,000 random numbers at once. You can also choose to sort them or ensure they're all unique.",
        },
        {
          question: "Are the numbers truly random?",
          answer: "We use JavaScript's Math.random() function, which provides cryptographically secure pseudo-random numbers. For most purposes like games, raffles, and sampling, this provides excellent randomness.",
        },
        {
          question: "What's the maximum range I can use?",
          answer: "You can generate numbers from -999,999,999 to 999,999,999. This covers virtually any use case you might have.",
        },
        {
          question: "Can I download the generated numbers?",
          answer: "Yes! When you generate 2 or more numbers, a 'Download CSV' button appears. Click it to download your numbers as a spreadsheet-compatible file.",
        },
        {
          question: "Is this tool completely free?",
          answer: "Absolutely! No signup, no email, no hidden fees. Generate as many random numbers as you need, forever free.",
        },
      ]}
    />
  );
}
