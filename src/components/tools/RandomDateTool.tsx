"use client";

import { useState } from "react";
import ToolCard from "../ToolCard";
import ResultDisplay from "../ResultDisplay";
import GenerateButton from "../GenerateButton";
import CopyButton from "../CopyButton";

export default function RandomDateTool() {
  const currentYear = new Date().getFullYear();
  const [startDate, setStartDate] = useState(`${currentYear}-01-01`);
  const [endDate, setEndDate] = useState(`${currentYear}-12-31`);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const generate = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      setError("Please enter valid dates");
      setResult(null);
      return;
    }

    if (start > end) {
      setError("Start date must be before end date");
      setResult(null);
      return;
    }

    setError(null);

    const startTime = start.getTime();
    const endTime = end.getTime();
    const randomTime = startTime + Math.random() * (endTime - startTime);
    const randomDate = new Date(randomTime);

    const formatted = randomDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setResult(formatted);
    setAnimationKey((prev) => prev + 1);
    window.dispatchEvent(new CustomEvent("tool-generate"));
  };

  return (
    <ToolCard>
      <div className="space-y-6">
        {/* Date Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium mb-2 text-foreground-muted">
              From
            </label>
            <input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium mb-2 text-foreground-muted">
              To
            </label>
            <input
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
            />
          </div>
        </div>

        {/* Generate Button */}
        <GenerateButton onClick={generate}>
          Pick Random Date 📅
        </GenerateButton>

        {/* Error Display */}
        {error && (
          <p className="text-red-400 text-center text-sm">{error}</p>
        )}

        {/* Result Display */}
        {result && !error && (
          <div className="mt-4">
            <ResultDisplay
              result={result}
              animationKey={animationKey}
              className="text-accent-primary"
              size="normal"
            />
            <div className="flex justify-center mt-4">
              <CopyButton text={result} />
            </div>
          </div>
        )}
      </div>
    </ToolCard>
  );
}
