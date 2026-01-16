"use client";

import { useState } from "react";
import ToolCard from "../ToolCard";
import ResultDisplay from "../ResultDisplay";
import GenerateButton from "../GenerateButton";
import CopyButton from "../CopyButton";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function RandomLetterTool() {
  const [quantity, setQuantity] = useState(1);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [animationKey, setAnimationKey] = useState(0);

  const generate = () => {
    const letters: string[] = [];

    for (let i = 0; i < quantity; i++) {
      let letter = alphabet[Math.floor(Math.random() * 26)];

      if (includeUppercase && includeLowercase) {
        letter = Math.random() < 0.5 ? letter : letter.toLowerCase();
      } else if (includeLowercase) {
        letter = letter.toLowerCase();
      }

      letters.push(letter);
    }

    setResults(letters);
    setAnimationKey((prev) => prev + 1);
    window.dispatchEvent(new CustomEvent("tool-generate"));
  };

  const resultText = results.join(quantity > 1 ? ", " : "");

  return (
    <ToolCard>
      <div className="space-y-6">
        {/* Quantity */}
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium mb-2 text-foreground-muted">
            How many letters?
          </label>
          <input
            id="quantity"
            type="number"
            min={1}
            max={100}
            value={quantity}
            onChange={(e) => setQuantity(Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
          />
        </div>

        {/* Options */}
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => {
                if (!e.target.checked && !includeLowercase) {
                  setIncludeLowercase(true);
                }
                setIncludeUppercase(e.target.checked);
              }}
              className="w-5 h-5 rounded border-border bg-background text-accent-primary focus:ring-accent-primary"
            />
            <span className="text-sm">Uppercase (A-Z)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => {
                if (!e.target.checked && !includeUppercase) {
                  setIncludeUppercase(true);
                }
                setIncludeLowercase(e.target.checked);
              }}
              className="w-5 h-5 rounded border-border bg-background text-accent-primary focus:ring-accent-primary"
            />
            <span className="text-sm">Lowercase (a-z)</span>
          </label>
        </div>

        {/* Generate Button */}
        <GenerateButton onClick={generate}>
          Generate Letters 🔠
        </GenerateButton>

        {/* Results Display */}
        {results.length > 0 && (
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
