// src/app/explore/[country]/page.tsx

import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export const dynamicParams = true

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

// 👇 ✅ DO NOT export async function directly anymore
// 👇 ✅ Instead, define the component inside and export the wrapper

export default function CountryPage({ params }: { params: { country: string } }) {
  return <CountryPageContent countryName={params.country} />
}

async function CountryPageContent({ countryName }: { countryName: string }) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}?fullText=true`,
    { cache: 'no-store' }
  )

  if (!res.ok) return notFound()

  const data: CountryData[] = await res.json()
  const country = data[0]

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
        <Info title="Capital" value={country.capital?.join(', ')} />
        <Info title="Region" value={country.region} />
        <Info title="Subregion" value={country.subregion} />
        <Info title="Population" value={country.population.toLocaleString()} />
        <Info title="Area" value={`${country.area.toLocaleString()} km²`} />
        <Info
          title="Languages"
          value={country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
        />
        <Info
          title="Currencies"
          value={
            country.currencies
              ? Object.values(country.currencies)
                  .map((c) => `${c.name} (${c.symbol})`)
                  .join(', ')
              : 'N/A'
          }
        />
        <Info title="Timezones" value={country.timezones.join(', ')} />
      </div>
    </main>
  )
}

function Info({ title, value }: { title: string; value?: string }) {
  return (
    <div>
      <h2 className="font-semibold text-lg mb-1">{title}</h2>
      <p>{value || 'N/A'}</p>
    </div>
  )
}
