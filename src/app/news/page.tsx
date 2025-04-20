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
        setArticles(data)
      } catch (error) {
        console.error('Failed to load news:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📰 World News</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading news...</p>
      ) : (
        <ul className="space-y-6">
          {articles.map((article, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-700 hover:underline"
              >
                {article.title}
              </a>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(article.pubDate).toLocaleString()} — {article.source}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
