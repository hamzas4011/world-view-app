'use client'

import { useEffect, useState } from 'react'

type Article = {
  title: string
  link: string
  pubDate: string
  source: string
}

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('/api/news')
        const data = await res.json()
        setArticles(data.slice(0, 15)) // ✅ Limit to 15 articles
      } catch (error) {
        console.error('Failed to load news:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">📰 World News</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading news...</p>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden flex flex-col"
            >
              <img
                src={`https://picsum.photos/seed/worldnews${index}/400/300`}
                alt="News image"
                className="w-full h-48 object-cover"
              />

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
      )}
    </main>
  )
}
