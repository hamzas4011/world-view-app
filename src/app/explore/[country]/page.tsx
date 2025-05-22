import { PageProps } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

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

export default async function CountryPage({ params }: PageProps) {
  const countryName = params.country

  const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`, {
    cache: 'no-store',
  })

  if (!res.ok) return notFound()

  const data = await res.json()
  const country: CountryData = data[0]

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <Link
        href="/explore"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-150 mb-6 w-fit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Explore
      </Link>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold">{country.name.common}</h1>
        <p className="text-gray-600 text-lg mt-2">{country.name.official}</p>
      </div>

      <div className="flex justify-center mb-10">
        <Image
          src={country.flags.png}
          alt={country.flags.alt || `${country.name.common} flag`}
          width={400}
          height={250}
          className="w-full max-w-md rounded-xl border shadow-sm object-cover"
        />
      </div>

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
          <p>{country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
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
