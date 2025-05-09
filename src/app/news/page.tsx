'use client'

type Article = {
  title: string
  link: string
  pubDate: string
  source: string
}

const mockArticles: Article[] = [
  {
    title: 'World Peace Declared Across All Nations 🌍',
    link: '#',
    pubDate: '2025-05-01T12:00:00Z',
    source: 'Global Times',
  },
  {
    title: 'Ocean Cities Float Successfully in the Pacific 🌊',
    link: '#',
    pubDate: '2025-05-02T08:30:00Z',
    source: 'Sky News',
  },
  {
    title: 'Mars Colonists Celebrate First Anniversary 🚀',
    link: '#',
    pubDate: '2025-05-01T20:00:00Z',
    source: 'Red Planet Daily',
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
            <div className="bg-gray-200 h-48 w-full flex items-center justify-center text-gray-400 text-sm">
              🖼️ Fantasy Image Placeholder
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
