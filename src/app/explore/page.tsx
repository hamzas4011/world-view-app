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
  const [filtered, setFiltered] = useState<Country[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('/api/countries')
        const data = await res.json()
        setCountries(data)
        setFiltered(data) // Initially show all
      } catch (err) {
        console.error('Error fetching countries:', err)
      }
    }

    fetchCountries()
  }, [])

  // Handle live search with alias fix (e.g., "turkey" → "türkiye")
  useEffect(() => {
    const normalized = searchTerm.toLowerCase().trim()

    const aliasFix = normalized === 'turkey' ? 'turkiye' : normalized

    const filteredData = countries.filter((country) =>
      country.name.common.toLowerCase().includes(aliasFix)
    )

    setFiltered(filteredData)
  }, [searchTerm, countries])

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🌍 Explore All Countries</h1>

      {/* 🔍 Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by country name..."
          className="w-full p-3 border border-gray-300 rounded shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Country cards */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No countries found.</p>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((country, index) => (
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
