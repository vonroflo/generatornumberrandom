"use client";

import { useState } from "react";
import ToolCard from "../ToolCard";
import GenerateButton from "../GenerateButton";
import CopyButton from "../CopyButton";

interface ColorResult {
  hex: string;
  rgb: string;
}

export default function RandomColorTool() {
  const [result, setResult] = useState<ColorResult | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const generate = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const hex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`.toUpperCase();
    const rgb = `rgb(${r}, ${g}, ${b})`;

    setResult({ hex, rgb });
    setAnimationKey((prev) => prev + 1);
    window.dispatchEvent(new CustomEvent("tool-generate"));
  };

  return (
    <ToolCard>
      <div className="space-y-6">
        {/* Color Display */}
        <div className="flex justify-center py-4">
          <div
            key={animationKey}
            className={`w-40 h-40 sm:w-48 sm:h-48 rounded-2xl border-4 border-border shadow-lg ${
              result ? "animate-fadeScale" : ""
            }`}
            style={{ backgroundColor: result?.hex || "#1e293b" }}
          />
        </div>

        {/* Color Values */}
        {result && (
          <div className="space-y-4 animate-fadeScale" key={`values-${animationKey}`}>
            <div className="flex items-center justify-between bg-background rounded-lg p-4">
              <div>
                <p className="text-sm text-foreground-muted">HEX</p>
                <p className="text-xl font-bold font-mono">{result.hex}</p>
              </div>
              <CopyButton text={result.hex} />
            </div>
            <div className="flex items-center justify-between bg-background rounded-lg p-4">
              <div>
                <p className="text-sm text-foreground-muted">RGB</p>
                <p className="text-xl font-bold font-mono">{result.rgb}</p>
              </div>
              <CopyButton text={result.rgb} />
            </div>
          </div>
        )}

        {/* Generate Button */}
        <GenerateButton onClick={generate}>
          Generate Color 🎨
        </GenerateButton>
      </div>
    </ToolCard>
  );
}
