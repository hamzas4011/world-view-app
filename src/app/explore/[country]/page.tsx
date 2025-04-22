import { notFound } from 'next/navigation'

type CountryData = {
  name: { common: string; official: string }
  flags: { png: string; alt?: string }
  capital?: string[]
  region: string
  subregion?: string
  population: number
  languages?: Record<string, string>
  currencies?: Record<string, { name: string; symbol: string }>
  timezones: string[]
  maps: { googleMaps: string }
}

type Props = {
  params: { country: string }
}

export default async function CountryPage({ params }: Props) {
  const countryName = params.country

  // ✅ Use relative path (safe for local dev)
  const res = await fetch(`http://localhost:3000/api/countries/${countryName}`)

  if (!res.ok) return notFound()

  const country: CountryData = await res.json()

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        {country.name.common} 🇺🇳
      </h1>

      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
        <img
          src={country.flags.png}
          alt={country.flags.alt || `${country.name.common} flag`}
          className="w-full h-48 object-cover rounded"
        />

        <ul className="space-y-2 text-gray-700">
          <li><strong>Official Name:</strong> {country.name.official}</li>
          <li><strong>Capital:</strong> {country.capital?.join(', ') || 'N/A'}</li>
          <li><strong>Region:</strong> {country.region}</li>
          <li><strong>Subregion:</strong> {country.subregion || 'N/A'}</li>
          <li><strong>Population:</strong> {country.population.toLocaleString()}</li>
          <li>
            <strong>Languages:</strong>{' '}
            {country.languages
              ? Object.values(country.languages).join(', ')
              : 'N/A'}
          </li>
          <li>
            <strong>Currencies:</strong>{' '}
            {country.currencies
              ? Object.values(country.currencies)
                  .map((c) => `${c.name} (${c.symbol})`)
                  .join(', ')
              : 'N/A'}
          </li>
          <li><strong>Timezones:</strong> {country.timezones.join(', ')}</li>
          <li>
            <strong>Google Maps:</strong>{' '}
            <a
              href={country.maps.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Map
            </a>
          </li>
        </ul>
      </div>
    </main>
  )
}
