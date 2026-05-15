"use client";

import { m } from "framer-motion";
import { CalendarDays, Clock3 } from "lucide-react";
import type { Reflection } from "@/data/reflections";

export function HeroReflection({
  reflection,
  readingMinutes,
}: {
  reflection: Reflection;
  readingMinutes: number;
}) {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#dff0ff,transparent_34%),linear-gradient(180deg,#fbfaf7,transparent)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,143,200,.2),transparent_34%),linear-gradient(180deg,#020617,transparent)]" />

      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.1fr_.9fr] md:items-center">
        <m.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="min-w-0"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-ocean-200/80 bg-white/60 px-4 py-2 text-sm text-ocean-700 shadow-sm backdrop-blur dark:border-ocean-200/10 dark:bg-white/5 dark:text-ocean-100">
            Reflexão do dia
          </div>

          <h1 className="max-w-3xl break-words text-4xl font-semibold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-7xl">
            {reflection.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 shadow-sm dark:bg-white/5">
              <CalendarDays size={16} /> {reflection.fullDate}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 shadow-sm dark:bg-white/5">
              <Clock3 size={16} /> {readingMinutes} min de leitura
            </span>
          </div>

          <div className="space-y-8">
            {[reflection.excerpt, ...reflection.body].map(
              (paragraph, index) => (
                <p
                  key={`${index}-${paragraph.slice(0, 24)}`}
                  className="break-words text-xl leading-8 text-slate-700 dark:text-slate-200 sm:text-2xl sm:leading-9"
                >
                  {paragraph}
                </p>
              ),
            )}

            <p className="pt-4 text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              {reflection.source}
            </p>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="w-full min-w-0 overflow-hidden rounded-[2rem] border border-white/70 bg-white/60 p-4 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-5"
        >
          <div className="rounded-[1.5rem] bg-[linear-gradient(145deg,#eef5fb,#fffaf2_50%,#dff0ff)] p-5 dark:bg-[linear-gradient(145deg,rgba(59,143,200,.18),rgba(15,23,42,.85)_55%,rgba(255,255,255,.06))] sm:p-8">
            <div className="flex min-h-[320px] flex-col justify-between rounded-[1.25rem] border border-white/70 bg-white/45 p-5 backdrop-blur dark:border-white/10 dark:bg-slate-950/25 sm:min-h-[420px] sm:p-7">
              <span className="text-xs uppercase tracking-[0.28em] text-ocean-700 dark:text-ocean-200 sm:text-sm">
                Só por hoje
              </span>

              <p className="my-8 max-w-full break-words text-2xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-3xl">
                {reflection.quote}
              </p>

              <span className="break-words text-sm text-slate-500 dark:text-slate-400">
                {reflection.source}
              </span>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
