import { notFound } from 'next/navigation'

type CountryData = {
  name: { common: string; official: string }
  flags: { png: string; alt?: string }
  capital?: string[]
  region: string
  subregion?: string
  population: number
  area: number
  languages?: Record<string, string>
  currencies?: Record<string, { name: string; symbol: string }>
  timezones: string[]
}

type Props = {
  params: { country: string }
}

export default async function CountryPage({ params }: Props) {
  const countryName = params.country
  const res = await fetch(`http://localhost:3000/api/countries/${countryName}`)

  if (!res.ok) return notFound()

  const country: CountryData = await res.json()

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold">{country.name.common}</h1>
        <p className="text-gray-600 text-lg mt-2">{country.name.official}</p>
      </div>

      {/* Flag */}
      <div className="flex justify-center mb-10">
        <img
          src={country.flags.png}
          alt={country.flags.alt || `${country.name.common} flag`}
          className="w-full max-w-md rounded-xl border shadow-sm"
        />
      </div>

      {/* Country Info Grid */}
      <div className="bg-white rounded-xl shadow-md p-6 grid gap-4 sm:grid-cols-2 text-gray-800">
        <div>
          <h2 className="font-semibold text-lg mb-1">Capital</h2>
          <p>{country.capital?.join(', ') || 'N/A'}</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-1">Region</h2>
          <p>{country.region}</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-1">Subregion</h2>
          <p>{country.subregion || 'N/A'}</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-1">Population</h2>
          <p>{country.population.toLocaleString()}</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-1">Area</h2>
          <p>{country.area.toLocaleString()} km²</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-1">Languages</h2>
          <p>
            {country.languages
              ? Object.values(country.languages).join(', ')
              : 'N/A'}
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-1">Currencies</h2>
          <p>
            {country.currencies
              ? Object.values(country.currencies)
                  .map((c) => `${c.name} (${c.symbol})`)
                  .join(', ')
              : 'N/A'}
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-1">Timezones</h2>
          <p>{country.timezones.join(', ')}</p>
        </div>
      </div>
    </main>
  )
}
