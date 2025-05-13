import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(
  req: NextRequest,
  context: { params: { country: string } }
) {
  try {
    const { country } = context.params
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch country' },
        { status: 500 }
      )
    }

    const data = await res.json()
    const countryData = data[0] // take the first match

    return NextResponse.json(countryData)
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
