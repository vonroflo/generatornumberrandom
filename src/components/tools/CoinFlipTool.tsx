"use client";

import { useState } from "react";
import ToolCard from "../ToolCard";
import GenerateButton from "../GenerateButton";

export default function CoinFlipTool() {
  const [result, setResult] = useState<"heads" | "tails" | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const flip = () => {
    setIsFlipping(true);
    setAnimationKey((prev) => prev + 1);

    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? "heads" : "tails";
      setResult(outcome);
      setIsFlipping(false);
      window.dispatchEvent(new CustomEvent("tool-generate"));
    }, 1000);
  };

  return (
    <ToolCard>
      <div className="space-y-6">
        {/* Coin Display */}
        <div className="flex justify-center py-8">
          <div
            key={animationKey}
            className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center text-6xl sm:text-7xl border-4 border-accent-secondary bg-gradient-to-br from-accent-secondary/20 to-accent-secondary/5 ${
              isFlipping ? "animate-coinFlip" : ""
            }`}
            style={{ perspective: "1000px" }}
          >
            {result === "heads" ? "👑" : result === "tails" ? "🦅" : "🪙"}
          </div>
        </div>

        {/* Result Text */}
        {result && !isFlipping && (
          <div className="text-center animate-fadeScale">
            <p className="text-4xl sm:text-5xl font-bold text-accent-primary capitalize">
              {result}
            </p>
          </div>
        )}

        {isFlipping && (
          <div className="text-center">
            <p className="text-2xl text-foreground-muted">Flipping...</p>
          </div>
        )}

        {/* Flip Button */}
        <GenerateButton onClick={flip} disabled={isFlipping}>
          {isFlipping ? "Flipping..." : "Flip Coin 🪙"}
        </GenerateButton>
      </div>
    </ToolCard>
  );
}
