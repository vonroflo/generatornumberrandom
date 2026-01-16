"use client";

import { useState } from "react";
import ToolCard from "../ToolCard";
import ResultDisplay from "../ResultDisplay";
import GenerateButton from "../GenerateButton";
import CopyButton from "../CopyButton";

export default function RandomNamePickerTool() {
  const [input, setInput] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [results, setResults] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const pick = () => {
    // Parse input - accept comma or newline separated values
    const names = input
      .split(/[,\n]+/)
      .map((name) => name.trim())
      .filter((name) => name.length > 0);

    if (names.length === 0) {
      setError("Please enter some names to pick from");
      setResults([]);
      return;
    }

    if (quantity > names.length) {
      setError(`Can't pick ${quantity} names from a list of ${names.length}`);
      setResults([]);
      return;
    }

    setError(null);

    // Fisher-Yates shuffle and pick
    const shuffled = [...names];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setResults(shuffled.slice(0, quantity));
    setAnimationKey((prev) => prev + 1);
    window.dispatchEvent(new CustomEvent("tool-generate"));
  };

  const resultText = results.join(", ");

  return (
    <ToolCard>
      <div className="space-y-6">
        {/* Input Field */}
        <div>
          <label htmlFor="names" className="block text-sm font-medium mb-2 text-foreground-muted">
            Enter names (separated by commas or new lines)
          </label>
          <textarea
            id="names"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Alice, Bob, Charlie&#10;or&#10;Alice&#10;Bob&#10;Charlie"
            rows={5}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors resize-none"
          />
        </div>

        {/* Quantity */}
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium mb-2 text-foreground-muted">
            How many to pick?
          </label>
          <input
            id="quantity"
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
          />
        </div>

        {/* Pick Button */}
        <GenerateButton onClick={pick}>
          Pick Names 👤
        </GenerateButton>

        {/* Error Display */}
        {error && (
          <p className="text-red-400 text-center text-sm">{error}</p>
        )}

        {/* Results Display */}
        {results.length > 0 && !error && (
          <div className="mt-4">
            <ResultDisplay
              result={results.length === 1 ? results[0] : results}
              animationKey={animationKey}
              className="text-accent-primary"
            />
            <div className="flex justify-center mt-4">
              <CopyButton text={resultText} />
            </div>
          </div>
        )}
      </div>
    </ToolCard>
  );
}
