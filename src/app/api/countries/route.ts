export async function GET() {
  try {
    // Fetch all countries from the REST Countries API
    const res = await fetch('https://restcountries.com/v3.1/all')


    if (!res.ok) {
      return new Response('Failed to fetch countries', { status: 500 })
    }


    const countries = await res.json()

    return Response.json(countries)
  } catch (error) {

    console.error('API error:', error)
    return new Response('Server error', { status: 500 })
  }
}
