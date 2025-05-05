import { NextResponse } from 'next/server'

// API route to fetch data for a single country by name
export async function GET(
  request: Request,
  context: { params: { name: string } }
) {
  const { name } = context.params

  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=false`)

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch country data' },
        { status: 500 }
      )
    }

    const data = await res.json()

    // Return the first matched country (API returns an array)
    const country = data[0]

    return NextResponse.json(country)
  } catch (error) {
    console.error('Country API error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
