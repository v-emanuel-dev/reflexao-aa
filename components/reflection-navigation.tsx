import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Reflection } from '@/data/reflections'

export function ReflectionNavigation({ previous, next }: { previous: Reflection; next: Reflection }) {
  return (
    <section id="anteriores" className="px-5 py-12">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
        <Link href={`#${previous.slug}`} className="group rounded-[1.75rem] border border-slate-200/70 bg-white/75 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.04]">
          <span className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400"><ArrowLeft size={16} /> Reflexão anterior</span>
          <h3 className="font-serif text-2xl text-slate-950 dark:text-white">{previous.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{previous.excerpt}</p>
        </Link>
        <Link href={`#${next.slug}`} className="group rounded-[1.75rem] border border-slate-200/70 bg-white/75 p-6 text-right shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.04]">
          <span className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">Próxima reflexão <ArrowRight size={16} /></span>
          <h3 className="font-serif text-2xl text-slate-950 dark:text-white">{next.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{next.excerpt}</p>
        </Link>
      </div>
    </section>
  )
}
