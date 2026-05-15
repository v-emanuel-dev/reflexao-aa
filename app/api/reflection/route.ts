import { NextResponse } from 'next/server'
import { getDailyReflection } from '@/lib/aarj-reflection'

export const revalidate = 60 * 60 * 6

export async function GET() {
  const result = await getDailyReflection()

  return NextResponse.json(result, {
    headers: {
      'Cache-Control': 's-maxage=21600, stale-while-revalidate=86400'
    }
  })
}
