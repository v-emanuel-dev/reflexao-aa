import type { Reflection } from '@/data/reflections'

export function RelatedReflections({ items }: { items: Reflection[] }) {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-ocean-700 dark:text-ocean-200">Sugestões</p>
            <h2 className="mt-2 font-serif text-4xl text-slate-950 dark:text-white">Leituras relacionadas</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.id} id={item.slug} className="rounded-[1.5rem] border border-slate-200/70 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
              <p className="text-sm text-ocean-700 dark:text-ocean-200">{item.dateLabel}</p>
              <h3 className="mt-2 font-serif text-2xl text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
