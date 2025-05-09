import { NextResponse } from 'next/server'

type CountryParams = {
  params: {
    name: string
  }
}

export async function GET(
  request: Request,
  context: CountryParams
) {
  const { name } = context.params

  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=false`)

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch country data' }, { status: 500 })
    }

    const data = await res.json()
    const country = data[0]

    return NextResponse.json(country)
  } catch (error) {
    console.error('Country API error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
