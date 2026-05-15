import Link from "next/link";
import { BookOpen } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-paper/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-ocean-100 text-ocean-700 dark:bg-ocean-500/15 dark:text-ocean-200">
            <BookOpen size={20} />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-[0.18em] text-slate-500 dark:text-slate-400">
              REFLEXÃO
            </span>
            <span className="block font-serif text-xl text-slate-950 dark:text-white">
              Diária AA
            </span>
          </span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
