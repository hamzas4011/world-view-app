import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { country: string } }
) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${params.country}`)

    if (!res.ok) {
      return new NextResponse('Failed to fetch country', { status: 500 })
    }

    const data = await res.json()
    const country = data[0] // Take the first result

    return NextResponse.json(country)
  } catch (error) {
    console.error('API error:', error)
    return new NextResponse('Server error', { status: 500 })
  }
}
