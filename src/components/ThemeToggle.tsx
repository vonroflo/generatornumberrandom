"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cycleTheme = () => {
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  const getIcon = () => {
    if (theme === "system") {
      return "💻";
    }
    return resolvedTheme === "dark" ? "🌙" : "☀️";
  };

  const getLabel = () => {
    if (theme === "system") {
      return "System";
    }
    return theme === "dark" ? "Dark" : "Light";
  };

  // Render placeholder during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className="w-9 h-9 flex items-center justify-center rounded-lg text-base bg-background-card border border-border transition-colors shrink-0"
        aria-label="Theme toggle"
      >
        🌙
      </button>
    );
  }

  return (
    <button
      onClick={cycleTheme}
      className="w-9 h-9 flex items-center justify-center rounded-lg text-base bg-background-card border border-border hover:border-accent-primary active:scale-95 transition-all shrink-0"
      title={`Theme: ${getLabel()}`}
      aria-label={`Current theme: ${getLabel()}. Click to change.`}
    >
      {getIcon()}
    </button>
  );
}
