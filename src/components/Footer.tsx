import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 sm:px-6 border-t border-border mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <nav className="flex flex-wrap justify-center gap-4 text-sm text-foreground-muted">
          <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>
        <p className="text-sm text-foreground-muted">
          © {new Date().getFullYear()} GeneratorNumberRandom
        </p>
      </div>
    </footer>
  );
}
