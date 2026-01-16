"use client";

interface ResultDisplayProps {
  result: string | number | (string | number)[];
  animationKey?: number;
  className?: string;
  size?: "normal" | "large";
}

export default function ResultDisplay({
  result,
  animationKey,
  className = "",
  size = "large",
}: ResultDisplayProps) {
  const displayValue = Array.isArray(result) ? result.join(", ") : result;
  const sizeClass = size === "large" ? "text-4xl sm:text-5xl md:text-6xl" : "text-2xl sm:text-3xl";

  return (
    <div
      key={animationKey}
      className={`font-bold text-center py-6 animate-fadeScale ${sizeClass} ${className}`}
    >
      {displayValue}
    </div>
  );
}
