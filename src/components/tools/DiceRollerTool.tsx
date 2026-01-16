"use client";

import { useState } from "react";
import ToolCard from "../ToolCard";
import GenerateButton from "../GenerateButton";
import CopyButton from "../CopyButton";

const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

export default function DiceRollerTool() {
  const [numberOfDice, setNumberOfDice] = useState(1);
  const [results, setResults] = useState<number[]>([]);
  const [isRolling, setIsRolling] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const roll = () => {
    setIsRolling(true);
    setAnimationKey((prev) => prev + 1);

    setTimeout(() => {
      const newResults: number[] = [];
      for (let i = 0; i < numberOfDice; i++) {
        newResults.push(Math.floor(Math.random() * 6) + 1);
      }
      setResults(newResults);
      setIsRolling(false);
      window.dispatchEvent(new CustomEvent("tool-generate"));
    }, 500);
  };

  const total = results.reduce((sum, val) => sum + val, 0);

  return (
    <ToolCard>
      <div className="space-y-6">
        {/* Number of Dice */}
        <div>
          <label htmlFor="numDice" className="block text-sm font-medium mb-2 text-foreground-muted">
            Number of dice
          </label>
          <input
            id="numDice"
            type="number"
            min={1}
            max={10}
            value={numberOfDice}
            onChange={(e) => setNumberOfDice(Math.min(10, Math.max(1, parseInt(e.target.value) || 1)))}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
          />
        </div>

        {/* Dice Display */}
        <div className="flex justify-center flex-wrap gap-3 py-4">
          {results.length > 0 ? (
            results.map((value, index) => (
              <div
                key={`${animationKey}-${index}`}
                className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-4xl sm:text-5xl bg-background-card border-2 border-accent-primary rounded-lg ${
                  isRolling ? "animate-diceRoll" : "animate-fadeScale"
                }`}
              >
                {diceEmojis[value - 1]}
              </div>
            ))
          ) : (
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-4xl sm:text-5xl bg-background-card border-2 border-border rounded-lg">
              🎲
            </div>
          )}
        </div>

        {/* Total */}
        {results.length > 0 && !isRolling && (
          <div className="text-center animate-fadeScale">
            <p className="text-sm text-foreground-muted mb-1">Total</p>
            <p className="text-4xl sm:text-5xl font-bold text-accent-primary">
              {total}
            </p>
          </div>
        )}

        {isRolling && (
          <div className="text-center">
            <p className="text-2xl text-foreground-muted">Rolling...</p>
          </div>
        )}

        {/* Roll Button */}
        <GenerateButton onClick={roll} disabled={isRolling}>
          {isRolling ? "Rolling..." : "Roll Dice 🎲"}
        </GenerateButton>

        {/* Copy Button */}
        {results.length > 0 && !isRolling && (
          <div className="flex justify-center">
            <CopyButton text={results.length === 1 ? results[0].toString() : `${results.join(", ")} (Total: ${total})`} />
          </div>
        )}
      </div>
    </ToolCard>
  );
}
