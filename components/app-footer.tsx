import { BookOpen, Instagram, Mail } from "lucide-react";

export function AppFooter() {
  return (
    <footer className="mt-12 border-t border-slate-200/70 px-5 py-10 dark:border-white/10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-ocean-100 text-ocean-700 dark:bg-ocean-500/15 dark:text-ocean-200">
              <BookOpen size={20} />
            </span>
            <span className="font-serif text-2xl text-slate-950 dark:text-white">
              Reflexão Diária
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
            Experiência editorial moderna com coleta server-side da reflexão
            diária, cache e fallback local para maior estabilidade.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Links
          </h3>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl text-sm text-slate-500 dark:text-slate-400">
        © 2026 Reflexão Diária
      </div>
    </footer>
  );
}
