'use client'

import { useEffect, useState } from 'react'

type Country = {
  name: { common: string }
  flags: { png: string }
  region: string
  capital?: string[]
}

export default function HomePage() {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('/api/countries')
        const data = await res.json()
        const sample = data.slice(0, 6) // Show only 6 countries for homepage
        setCountries(sample)
      } catch (error) {
        console.error('Failed to fetch countries:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])

  return (
    <main className="p-6 max-w-6xl mx-auto">

      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">🌍 Explore the World</h1>
        <p className="text-lg text-gray-600">
          Discover countries, flags, and regions at a glance.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-center col-span-3 text-gray-500">Loading countries...</p>
        ) : (
          countries.map((country, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition"
            >
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="text-xl font-semibold mt-2">{country.name.common}</h2>
              <p className="text-sm text-gray-500">
                Capital: {country.capital?.[0] || 'N/A'}
              </p>
              <p className="text-sm text-gray-500">Region: {country.region}</p>
            </div>
          ))
        )}
      </section>
    </main>
  )
}
