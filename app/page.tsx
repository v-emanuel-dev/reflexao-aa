import { HeroReflection } from "@/components/hero-reflection";
import { SiteHeader } from "@/components/site-header";
import { getDailyReflection } from "@/lib/aarj-reflection";
import { getReadingTime } from "@/lib/reading-time";

export const revalidate = 0;

export default async function HomePage() {
  const { reflection: todayReflection } = await getDailyReflection();

  const readingMinutes = getReadingTime(
    [todayReflection.excerpt, ...todayReflection.body].join(" "),
  );

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen overflow-x-hidden bg-paper text-ink dark:bg-slate-950 dark:text-white">
        <HeroReflection
          reflection={todayReflection}
          readingMinutes={readingMinutes}
        />
      </main>
    </>
  );
}
