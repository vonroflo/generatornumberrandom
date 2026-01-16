"use client";

import { useState, useCallback } from "react";
import ToolCard from "../ToolCard";
import ResultDisplay from "../ResultDisplay";
import GenerateButton from "../GenerateButton";
import CopyButton from "../CopyButton";
import DownloadCSVButton from "../DownloadCSVButton";

interface RandomNumberToolProps {
  defaultMin?: number;
  defaultMax?: number;
}

type SortOption = "none" | "ascending" | "descending";

export default function RandomNumberTool({
  defaultMin = 1,
  defaultMax = 100,
}: RandomNumberToolProps) {
  const [min, setMin] = useState(defaultMin);
  const [max, setMax] = useState(defaultMax);
  const [quantity, setQuantity] = useState(1);
  const [allowDuplicates, setAllowDuplicates] = useState(true);
  const [sorting, setSorting] = useState<SortOption>("none");
  const [results, setResults] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const validate = useCallback((): string | null => {
    if (isNaN(min) || isNaN(max) || isNaN(quantity)) {
      return "Please enter valid numbers";
    }
    if (min > max) {
      return "Min can't be greater than Max";
    }
    if (quantity < 1 || quantity > 10000) {
      return "Quantity must be between 1 and 10,000";
    }
    if (min < -999999999 || max > 999999999) {
      return "Numbers must be between -999,999,999 and 999,999,999";
    }
    if (!allowDuplicates && quantity > max - min + 1) {
      return `Can't generate ${quantity} unique numbers in range ${min}-${max}`;
    }
    return null;
  }, [min, max, quantity, allowDuplicates]);

  const generate = useCallback(() => {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setResults([]);
      return;
    }

    setError(null);
    let generated: number[] = [];

    if (allowDuplicates) {
      for (let i = 0; i < quantity; i++) {
        generated.push(Math.floor(Math.random() * (max - min + 1)) + min);
      }
    } else {
      const pool: number[] = [];
      for (let i = min; i <= max; i++) {
        pool.push(i);
      }
      for (let i = 0; i < quantity; i++) {
        const index = Math.floor(Math.random() * pool.length);
        generated.push(pool[index]);
        pool.splice(index, 1);
      }
    }

    if (sorting === "ascending") {
      generated.sort((a, b) => a - b);
    } else if (sorting === "descending") {
      generated.sort((a, b) => b - a);
    }

    setResults(generated);
    setAnimationKey((prev) => prev + 1);

    // Dispatch event for ad loading
    window.dispatchEvent(new CustomEvent("tool-generate"));
  }, [min, max, quantity, allowDuplicates, sorting, validate]);

  const resultText = results.length === 1 ? results[0].toString() : results.join(", ");

  return (
    <ToolCard>
      <div className="space-y-6">
        {/* Input Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="min" className="block text-sm font-medium mb-2 text-foreground-muted">
              From
            </label>
            <input
              id="min"
              type="number"
              value={min}
              onChange={(e) => setMin(parseInt(e.target.value) || 0)}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
            />
          </div>
          <div>
            <label htmlFor="max" className="block text-sm font-medium mb-2 text-foreground-muted">
              To
            </label>
            <input
              id="max"
              type="number"
              value={max}
              onChange={(e) => setMax(parseInt(e.target.value) || 0)}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium mb-2 text-foreground-muted">
            How many?
          </label>
          <input
            id="quantity"
            type="number"
            min={1}
            max={10000}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
          />
        </div>

        {/* Options */}
        <div className="flex flex-wrap gap-4 items-center">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={!allowDuplicates}
              onChange={(e) => setAllowDuplicates(!e.target.checked)}
              className="w-5 h-5 rounded border-border bg-background text-accent-primary focus:ring-accent-primary"
            />
            <span className="text-sm">Unique only</span>
          </label>

          <div className="flex items-center gap-2">
            <label htmlFor="sorting" className="text-sm text-foreground-muted">
              Sort:
            </label>
            <select
              id="sorting"
              value={sorting}
              onChange={(e) => setSorting(e.target.value as SortOption)}
              className="px-3 py-2 bg-background border border-border rounded-lg text-sm focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
            >
              <option value="none">None</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
        </div>

        {/* Generate Button */}
        <GenerateButton onClick={generate}>
          Generate
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

            {/* Action Buttons */}
            <div className="flex justify-center gap-3 mt-4">
              <CopyButton text={resultText} />
              <DownloadCSVButton data={results} min={min} max={max} />
            </div>
          </div>
        )}
      </div>
    </ToolCard>
  );
}
