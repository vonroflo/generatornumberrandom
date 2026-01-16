export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background */}
      <rect width="40" height="40" rx="8" className="fill-accent-primary" />

      {/* Dice dots pattern */}
      <circle cx="12" cy="12" r="3" className="fill-background" />
      <circle cx="28" cy="12" r="3" className="fill-background" />
      <circle cx="20" cy="20" r="3" className="fill-background" />
      <circle cx="12" cy="28" r="3" className="fill-background" />
      <circle cx="28" cy="28" r="3" className="fill-background" />
    </svg>
  );
}
