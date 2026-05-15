import { AppFooter } from '@/components/app-footer'
import { HeroReflection } from '@/components/hero-reflection'
import { ReadingPanel } from '@/components/reading-panel'
import { ReflectionNavigation } from '@/components/reflection-navigation'
import { RelatedReflections } from '@/components/related-reflections'
import { ScrollProgress } from '@/components/scroll-progress'
import { SiteHeader } from '@/components/site-header'
import { reflections } from '@/data/reflections'
import { getDailyReflection } from '@/lib/aarj-reflection'
import { getReadingTime } from '@/lib/reading-time'

export const revalidate = 60 * 60 * 6

export default async function HomePage() {
  const { reflection: todayReflection, fromFallback } = await getDailyReflection()
  const readingMinutes = getReadingTime([todayReflection.excerpt, ...todayReflection.body].join(' '))
  const previous = reflections[1]
  const next = reflections[2]

  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main>
        {fromFallback && (
          <div className="mx-auto mt-6 max-w-6xl px-5">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-3 text-sm text-amber-900 dark:border-amber-300/20 dark:bg-amber-300/10 dark:text-amber-100">
              A reflexão está sendo exibida a partir do fallback local porque a fonte externa não respondeu ou mudou de estrutura.
            </div>
          </div>
        )}
        <HeroReflection reflection={todayReflection} readingMinutes={readingMinutes} />
        <ReadingPanel reflection={todayReflection} />
        <ReflectionNavigation previous={previous} next={next} />
        <RelatedReflections items={[previous, next]} />
      </main>
      <AppFooter />
    </>
  )
}
