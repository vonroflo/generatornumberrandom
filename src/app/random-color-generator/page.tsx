import { Metadata } from "next";
import PageContent from "@/components/PageContent";
import RandomColorTool from "@/components/tools/RandomColorTool";

export const metadata: Metadata = {
  title: "Random Color Generator - Generate Random Colors",
  description: "Free random color generator. Generate random colors with HEX and RGB values instantly. Perfect for designers, artists, and developers.",
  openGraph: {
    title: "Random Color Generator - Generate Random Colors | GeneratorNumberRandom",
    description: "Free random color generator. Generate random colors with HEX and RGB values instantly.",
    url: "https://generatornumberrandom.com/random-color-generator",
  },
};

export default function RandomColorPage() {
  return (
    <PageContent
      title="Random Color Generator"
      tool={<RandomColorTool />}
      currentPath="/random-color-generator"
      description="Discover new colors with our random color generator. Each click generates a completely random color from the full spectrum of over 16 million possibilities. The tool displays both HEX and RGB color codes, making it easy to use your new color in any design software, website, or application. Great for finding color inspiration, creating palettes, or just exploring the world of color."
      howToUse={[
        "Click 'Generate Color' to create a random color",
        "View the color preview and its values",
        "Copy the HEX or RGB code you need",
        "Generate more colors until you find one you love",
      ]}
      faqs={[
        {
          question: "What color formats are provided?",
          answer: "Each generated color shows both HEX format (#FF5733) and RGB format (rgb(255, 87, 51)). You can copy either format with one click.",
        },
        {
          question: "Are all colors equally likely?",
          answer: "Yes! The generator can produce any of the 16,777,216 possible RGB colors with equal probability. Each of the red, green, and blue channels randomly selects a value from 0-255.",
        },
        {
          question: "Can I save colors I like?",
          answer: "You can copy the color codes to save them. We recommend pasting favorite colors into a note or design tool to build your palette.",
        },
        {
          question: "Is this useful for web design?",
          answer: "Absolutely! The HEX and RGB values work directly in CSS, design tools like Figma, and any application that accepts standard color formats.",
        },
      ]}
    />
  );
}
