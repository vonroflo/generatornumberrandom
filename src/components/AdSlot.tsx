"use client";

import { useEffect, useState } from "react";

interface AdSlotProps {
  slot: "top" | "bottom";
  className?: string;
}

export default function AdSlot({ slot, className = "" }: AdSlotProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Load ads after 3 seconds or on first generate (handled by parent)
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 3000);

    // Listen for generate event to load ads sooner
    const handleGenerate = () => {
      setTimeout(() => setShouldLoad(true), 1000);
    };

    window.addEventListener("tool-generate", handleGenerate);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("tool-generate", handleGenerate);
    };
  }, []);

  const height = slot === "top" ? "h-[250px]" : "h-[90px] sm:h-[250px]";

  return (
    <div
      className={`w-full flex items-center justify-center bg-background-card/50 border border-border rounded-lg ${height} ${className}`}
    >
      {shouldLoad ? (
        <div className="text-foreground-muted text-sm">
          {/* AdSense code would go here */}
          Ad Space
        </div>
      ) : (
        <div className="text-foreground-muted text-sm opacity-50">
          Loading...
        </div>
      )}
    </div>
  );
}
