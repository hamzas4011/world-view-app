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

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('/api/countries')
        const data = await res.json()
        // Pick 4 random featured countries
        const featured = data.sort(() => 0.5 - Math.random()).slice(0, 4)
        setCountries(featured)
      } catch (err) {
        console.error('Error fetching countries:', err)
      }
    }

    fetchCountries()
  }, [])

  return (
    <main className="p-6 max-w-6xl mx-auto">
      {/* 🌍 Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">🌍 World View App</h1>
        <p className="text-lg text-gray-600 mb-6">
          Explore the world’s countries, discover cultures, flags, and facts — all in one place.
        </p>
        <a
          href="/explore"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Start Exploring
        </a>
      </section>

      {/* 🌟 Featured Countries */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🌟 Featured Countries</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition"
            >
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{country.name.common}</h3>
              <p className="text-sm text-gray-500">Capital: {country.capital?.[0] || 'N/A'}</p>
              <p className="text-sm text-gray-500">Region: {country.region}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💡 Why Use This App */}
      <section className="bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">💡 Why Use WorldView?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-lg font-bold mb-2">🌐 250+ Countries</h3>
            <p className="text-sm text-gray-600">Discover detailed info on every country on Earth.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">🔍 Search & Explore</h3>
            <p className="text-sm text-gray-600">Easily filter by name, region, or capital.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">📱 Responsive Design</h3>
            <p className="text-sm text-gray-600">Use it on any device — mobile, tablet, or desktop.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
