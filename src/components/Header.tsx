import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-4 sm:px-6 border-b border-border">
      <div className="max-w-4xl mx-auto flex items-center justify-center">
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold text-foreground hover:text-accent-primary transition-colors"
        >
          GeneratorNumberRandom
        </Link>
      </div>
    </header>
  );
}
