"use client";

import { useState } from "react";
import { m } from "framer-motion";
import type { Reflection } from "@/data/reflections";
import { FocusModeToggle } from "./focus-mode-toggle";
import { ShareActions } from "./share-actions";

export function ReadingPanel({ reflection }: { reflection: Reflection }) {
  const [focusMode, setFocusMode] = useState(false);

  return (
    <section id="leitura" className="px-5 py-10 md:py-16">
      <div
        className={`mx-auto grid max-w-6xl gap-10 ${focusMode ? "md:grid-cols-1" : "md:grid-cols-[minmax(0,720px)_1fr]"}`}
      >
        <m.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-[2rem] border border-slate-200/70 bg-white/85 p-6 shadow-soft dark:border-white/10 dark:bg-white/[0.04] md:p-10"
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 dark:border-white/10">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-ocean-700 dark:text-ocean-200">
                Leitura guiada
              </p>
              <h2 className="mt-2 font-serif text-3xl text-slate-950 dark:text-white">
                {reflection.title}
              </h2>
            </div>
            <FocusModeToggle enabled={focusMode} onChange={setFocusMode} />
          </div>

          <blockquote className="mb-8 rounded-3xl bg-mist p-6 font-serif text-2xl leading-9 text-slate-900 dark:bg-white/5 dark:text-slate-100">
            “{reflection.quote}”
          </blockquote>

          <div className="prose-reading space-y-7">
            {reflection.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/10" />

          <div className="rounded-3xl border border-ocean-100 bg-ocean-50/80 p-6 dark:border-ocean-200/10 dark:bg-ocean-500/10">
            <h3 className="font-serif text-2xl text-slate-950 dark:text-white">
              Para refletir
            </h3>
            <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
              Qual parte da sua história você ainda tenta esconder de si mesmo,
              e que pequeno gesto de honestidade poderia diminuir esse peso
              hoje?
            </p>
          </div>
        </m.article>

        {!focusMode && (
          <aside className="space-y-5 md:sticky md:top-24 md:self-start">
            <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
              <h3 className="font-serif text-2xl text-slate-950 dark:text-white">
                Resumo
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Uma reflexão sobre humildade, autoaceitação e a importância de
                compartilhar a própria história sem atalhos.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
              <h3 className="font-serif text-2xl text-slate-950 dark:text-white">
                Temas
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {reflection.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600 dark:bg-white/10 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
              <h3 className="font-serif text-2xl text-slate-950 dark:text-white">
                Ações
              </h3>
              <div className="mt-4">
                <ShareActions />
              </div>
            </div>
          </aside>
        )}
      </div>
    </section>
  );
}
