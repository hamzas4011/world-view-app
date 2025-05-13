import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(
  req: NextRequest,
  context: { params: { country: string } }
): Promise<NextResponse> {
  try {
    const countryName = context.params.country
    const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch country' }, { status: 500 })
    }

    const data = await res.json()
    const country = data[0] // Use the first match

    return NextResponse.json(country)
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
