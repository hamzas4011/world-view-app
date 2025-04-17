'use client'

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      {/* 🌍 Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">🌍 Welcome to World View App</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          A clean and accessible way to explore countries, their flags, languages, and regions —
          designed with universal usability in mind.
        </p>
        <a
          href="/explore"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          Start Exploring
        </a>
      </section>

      {/* ✨ What Can You Do Section */}
      <section className="mb-16" aria-labelledby="features-heading">
        <h2 id="features-heading" className="text-2xl font-semibold text-center mb-10">
          ✨ What Can You Do Here?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl mb-2" role="img" aria-label="Map emoji">🗺️</div>
            <h3 className="font-semibold text-lg mb-1">Explore Countries</h3>
            <p className="text-sm text-gray-600">Browse 250+ countries and their unique data.</p>
          </div>
          <div>
            <div className="text-4xl mb-2" role="img" aria-label="Flag emoji">🏳️</div>
            <h3 className="font-semibold text-lg mb-1">See Flags</h3>
            <p className="text-sm text-gray-600">View beautiful flags of each nation.</p>
          </div>
          <div>
            <div className="text-4xl mb-2" role="img" aria-label="Alphabet emoji">🔤</div>
            <h3 className="font-semibold text-lg mb-1">Learn Languages</h3>
            <p className="text-sm text-gray-600">Find out what languages are spoken globally.</p>
          </div>
          <div>
            <div className="text-4xl mb-2" role="img" aria-label="Search emoji">🔍</div>
            <h3 className="font-semibold text-lg mb-1">Search & Filter</h3>
            <p className="text-sm text-gray-600">Quickly find countries by name or region.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
