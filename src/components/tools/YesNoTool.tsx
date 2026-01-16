"use client";

import { useState } from "react";
import ToolCard from "../ToolCard";
import GenerateButton from "../GenerateButton";

export default function YesNoTool() {
  const [result, setResult] = useState<"yes" | "no" | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const decide = () => {
    const outcome = Math.random() < 0.5 ? "yes" : "no";
    setResult(outcome);
    setAnimationKey((prev) => prev + 1);
    window.dispatchEvent(new CustomEvent("tool-generate"));
  };

  return (
    <ToolCard>
      <div className="space-y-6">
        {/* Result Display */}
        <div className="flex justify-center py-8">
          {result ? (
            <div
              key={animationKey}
              className={`text-6xl sm:text-8xl font-bold animate-fadeScale ${
                result === "yes" ? "text-green-400" : "text-red-400"
              }`}
            >
              {result === "yes" ? "YES" : "NO"}
            </div>
          ) : (
            <div className="text-6xl sm:text-8xl text-foreground-muted">
              ?
            </div>
          )}
        </div>

        {/* Emoji indicator */}
        {result && (
          <div className="text-center animate-fadeScale">
            <span className="text-5xl">
              {result === "yes" ? "✅" : "❌"}
            </span>
          </div>
        )}

        {/* Decide Button */}
        <GenerateButton onClick={decide}>
          Decide for Me
        </GenerateButton>
      </div>
    </ToolCard>
  );
}
