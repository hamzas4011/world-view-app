'use client'

type Article = {
  title: string
  pubDate: string
}

const mockArticles: Article[] = [
  {
    title: 'Earth Day Celebrated Globally',
    pubDate: '2025-04-22T09:00:00Z',
  },
  {
    title: 'Space Elevator Opens in Asia',
    pubDate: '2025-04-18T14:30:00Z',
  },
  {
    title: 'AI Becomes Tech Minister',
    pubDate: '2025-04-20T12:15:00Z',
  },
  {
    title: 'Underwater Cities Announced',
    pubDate: '2025-04-25T11:00:00Z',
  },
  {
    title: 'Green Energy Hits 95%',
    pubDate: '2025-04-24T10:00:00Z',
  },
  {
    title: 'UN Recognizes Island Nation',
    pubDate: '2025-04-21T17:45:00Z',
  },
  {
    title: 'Moon Internet Now Live',
    pubDate: '2025-04-23T08:00:00Z',
  },
  {
    title: 'Global Gaming Event Announced',
    pubDate: '2025-04-19T15:00:00Z',
  },
  {
    title: 'Maglev Train Breaks Record',
    pubDate: '2025-04-26T13:20:00Z',
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
            {/* Image placeholder */}
            <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-400 text-sm">
              🖼️ News Image
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <p className="text-lg font-semibold text-blue-800">
                {article.title}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(article.pubDate).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
