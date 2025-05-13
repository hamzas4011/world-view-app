import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  context: any
) {
  const country = context?.params?.country

  if (!country) {
    return NextResponse.json({ error: 'Missing country parameter' }, { status: 400 })
  }

  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch country' }, { status: 500 })
    }

    const data = await res.json()
    const countryData = data[0]

    return NextResponse.json(countryData)
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
