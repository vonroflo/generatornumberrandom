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
        className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-sm font-medium bg-background-card border border-border transition-colors"
        aria-label="Theme toggle"
      >
        <span>🌙</span>
        <span className="hidden sm:inline">Dark</span>
      </button>
    );
  }

  return (
    <button
      onClick={cycleTheme}
      className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-sm font-medium bg-background-card border border-border hover:border-accent-primary transition-colors"
      title={`Theme: ${getLabel()}`}
      aria-label={`Current theme: ${getLabel()}. Click to change.`}
    >
      <span>{getIcon()}</span>
      <span className="hidden sm:inline">{getLabel()}</span>
    </button>
  );
}
