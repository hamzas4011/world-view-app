export async function GET(
    request: Request,
    { params }: { params: { name: string } }
  ) {
    const { name } = params
  
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=false`)
  
      if (!res.ok) {
        return new Response('Failed to fetch country data', { status: 500 })
      }
  
      const data = await res.json()
      const country = data[0] // Get the first match
  
      return Response.json(country)
    } catch (error) {
      console.error('Country API error:', error)
      return new Response('Server error', { status: 500 })
    }
  }
  