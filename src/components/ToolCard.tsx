interface ToolCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function ToolCard({ children, className = "" }: ToolCardProps) {
  return (
    <div
      className={`bg-background-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border max-w-xl mx-auto w-full ${className}`}
    >
      {children}
    </div>
  );
}
