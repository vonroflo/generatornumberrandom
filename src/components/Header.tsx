"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const tools = [
  { name: "Random Number", href: "/", emoji: "🔢" },
  { name: "Coin Flip", href: "/coin-flip", emoji: "🪙" },
  { name: "Dice Roller", href: "/dice-roller", emoji: "🎲" },
  { name: "Yes/No", href: "/yes-no-generator", emoji: "✅" },
  { name: "Number Picker", href: "/random-number-picker", emoji: "🎯" },
  { name: "Name Picker", href: "/random-name-picker", emoji: "👤" },
  { name: "Letter Generator", href: "/random-letter-generator", emoji: "🔤" },
  { name: "Color Generator", href: "/random-color-generator", emoji: "🎨" },
  { name: "Date Generator", href: "/random-date-generator", emoji: "📅" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="w-full py-3 px-4 sm:px-6 border-b border-border">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground hover:text-accent-primary transition-colors"
        >
          <Logo className="w-8 h-8 sm:w-9 sm:h-9 shrink-0" />
          <span className="text-lg sm:text-2xl font-bold truncate font-heading">
            GeneratorNumberRandom
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Tools Menu */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium bg-background-card border border-border hover:border-accent-primary active:scale-95 transition-all shrink-0"
              aria-label="Open tools menu"
              aria-expanded={isOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </>
                )}
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-background-card border border-border rounded-xl shadow-lg py-2 z-50 animate-fadeScale">
                <div className="px-3 py-2 text-xs font-semibold text-foreground-muted uppercase tracking-wide">
                  Generators
                </div>
                {tools.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-background transition-colors"
                  >
                    <span className="text-base">{tool.emoji}</span>
                    <span>{tool.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
