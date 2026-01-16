"use client";

import { useState } from "react";

interface GenerateButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export default function GenerateButton({
  onClick,
  children,
  disabled = false,
  className = "",
}: GenerateButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    onClick();
    setTimeout(() => setIsAnimating(false), 150);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`w-full py-4 px-6 bg-accent-primary hover:bg-accent-primary-hover text-white font-bold text-lg rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${
        isAnimating ? "animate-bounce-click" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}
