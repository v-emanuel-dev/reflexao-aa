export default function Loading() {
  return (
    <main className="min-h-screen bg-paper px-5 py-10 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl animate-pulse space-y-8">
        <div className="h-12 w-48 rounded-full bg-slate-200 dark:bg-white/10" />
        <div className="h-24 max-w-3xl rounded-3xl bg-slate-200 dark:bg-white/10" />
        <div className="grid gap-6 md:grid-cols-[1fr_320px]">
          <div className="h-96 rounded-[2rem] bg-slate-200 dark:bg-white/10" />
          <div className="h-80 rounded-[2rem] bg-slate-200 dark:bg-white/10" />
        </div>
      </div>
    </main>
  )
}
