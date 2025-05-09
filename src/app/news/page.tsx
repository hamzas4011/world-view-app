'use client'

type Article = {
  title: string
  link: string
  pubDate: string
  source: string
}

const mockArticles: Article[] = [
  {
    title: '🌍 Earth Day Celebrated by Billions',
    link: '#',
    pubDate: '2025-04-22T09:00:00Z',
    source: 'WorldView News',
  },
  {
    title: '🚀 Space Elevator Completed in Asia',
    link: '#',
    pubDate: '2025-04-18T14:30:00Z',
    source: 'Orbital Times',
  },
  {
    title: '🤖 AI Appointed as Minister of Technology',
    link: '#',
    pubDate: '2025-04-20T12:15:00Z',
    source: 'Future Herald',
  },
  {
    title: '🐳 Underwater Cities Begin Construction',
    link: '#',
    pubDate: '2025-04-25T11:00:00Z',
    source: 'Oceanic Post',
  },
  {
    title: '⚡ Global Green Energy Hits 95%',
    link: '#',
    pubDate: '2025-04-24T10:00:00Z',
    source: 'Eco News',
  },
  {
    title: '🏝️ First Nation Formed on Floating Island',
    link: '#',
    pubDate: '2025-04-21T17:45:00Z',
    source: 'Island Tribune',
  },
  {
    title: '🛰️ Moon Internet Goes Online for All',
    link: '#',
    pubDate: '2025-04-23T08:00:00Z',
    source: 'Lunar Daily',
  },
  {
    title: '🎮 World Gaming Olympics Announced',
    link: '#',
    pubDate: '2025-04-19T15:00:00Z',
    source: 'Pixel Press',
  },
  {
    title: '🚄 Maglev Train Crosses Continents in 6 Hours',
    link: '#',
    pubDate: '2025-04-26T13:20:00Z',
    source: 'Transit Times',
  },
]

export default function NewsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">📰 World News</h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {mockArticles.map((article, index) => (
          <article
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden flex flex-col"
          >
            {/* Placeholder image */}
            <div className="bg-gray-200 h-48 w-full flex items-center justify-center text-gray-400 text-sm">
              🖼️ News Image Placeholder
            </div>

            <div className="p-4 flex flex-col justify-between flex-grow">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {article.title}
              </a>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(article.pubDate).toLocaleString('en-GB', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })}
              </p>
              <p className="text-sm text-gray-400 mt-auto pt-4">Source: {article.source}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
