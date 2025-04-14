'use client'

import { useEffect, useState } from 'react'

type Country = {
  name: { common: string }
  flags: { png: string }
  region: string
  capital?: string[]
}

export default function ExplorePage() {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('/api/countries')
        const data = await res.json()
        setCountries(data)
      } catch (err) {
        console.error('Error fetching countries:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🌍 Explore All Countries</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {countries.map((country, index) => (
            <div
              key={index}
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
          ))}
        </section>
      )}
    </main>
  )
}
