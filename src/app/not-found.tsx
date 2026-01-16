import Link from "next/link";
import ToolChips from "@/components/ToolChips";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
      <div className="text-8xl mb-6">🔢</div>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-foreground-muted text-lg mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist. Maybe it was randomly generated somewhere else?
      </p>

      <Link
        href="/"
        className="inline-block py-3 px-8 bg-accent-primary hover:bg-accent-primary-hover text-white font-bold rounded-xl transition-colors mb-12"
      >
        Go to Homepage
      </Link>

      <div className="pt-8 border-t border-border">
        <h2 className="text-xl font-semibold mb-6">Or try one of our tools:</h2>
        <ToolChips />
      </div>
    </div>
  );
}
