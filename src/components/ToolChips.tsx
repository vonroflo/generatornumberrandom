import Link from "next/link";

const tools = [
  { name: "Numbers", emoji: "🔢", href: "/" },
  { name: "Picker", emoji: "🎯", href: "/random-number-picker" },
  { name: "Coin Flip", emoji: "🪙", href: "/coin-flip" },
  { name: "Dice", emoji: "🎲", href: "/dice-roller" },
  { name: "Yes/No", emoji: "✅", href: "/yes-no-generator" },
  { name: "Names", emoji: "👤", href: "/random-name-picker" },
  { name: "Letters", emoji: "🔠", href: "/random-letter-generator" },
  { name: "Colors", emoji: "🎨", href: "/random-color-generator" },
  { name: "Dates", emoji: "📅", href: "/random-date-generator" },
];

interface ToolChipsProps {
  currentPath?: string;
  className?: string;
}

export default function ToolChips({ currentPath, className = "" }: ToolChipsProps) {
  const filteredTools = tools.filter((tool) => tool.href !== currentPath);

  return (
    <div className={`overflow-x-auto scrollbar-hide ${className}`}>
      <div className="flex gap-2 sm:gap-3 flex-wrap justify-center">
        {filteredTools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="inline-flex items-center gap-1.5 py-2 px-4 bg-background-card border border-border rounded-full text-sm font-medium hover:border-accent-primary hover:text-accent-primary transition-colors whitespace-nowrap"
          >
            <span>{tool.emoji}</span>
            <span>{tool.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
