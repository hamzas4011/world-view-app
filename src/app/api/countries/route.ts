export async function GET() {
  try {
    // Fetch all countries from the REST Countries API
    const res = await fetch('https://restcountries.com/v3.1/all')

    // If the response is not OK, return an error
    if (!res.ok) {
      return new Response('Failed to fetch countries', { status: 500 })
    }

    // Parse the response data
    const countries = await res.json()

    // Return the country data as JSON
    return Response.json(countries)
  } catch (error) {
    // Handle any errors
    console.error('API error:', error)
    return new Response('Server error', { status: 500 })
  }
}
