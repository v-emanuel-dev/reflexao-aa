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
    <section className="relative min-h-screen overflow-hidden px-4 py-12 sm:px-6 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#dff0ff,transparent_34%),linear-gradient(180deg,#fbfaf7,transparent)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,143,200,.2),transparent_34%),linear-gradient(180deg,#020617,transparent)]" />

      <m.article
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mx-auto w-full max-w-4xl"
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

        <div className="mt-10 space-y-8">
          <p className="break-words text-xl leading-8 text-slate-700 dark:text-slate-200 sm:text-2xl sm:leading-9">
            {reflection.excerpt}
          </p>

          <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            {reflection.source}
          </p>

          {reflection.body.map((paragraph, index) => (
            <p
              key={`${index}-${paragraph.slice(0, 24)}`}
              className="break-words text-xl leading-8 text-slate-700 dark:text-slate-200 sm:text-2xl sm:leading-9"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </m.article>
    </section>
  );
}
