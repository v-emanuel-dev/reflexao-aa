'use client'

import { Eye, EyeOff } from 'lucide-react'

export function FocusModeToggle({ enabled, onChange }: { enabled: boolean; onChange: (value: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
    >
      {enabled ? <EyeOff size={16} /> : <Eye size={16} />}
      {enabled ? 'Sair do foco' : 'Modo foco'}
    </button>
  )
}
