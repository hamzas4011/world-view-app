import { XMLParser } from 'fast-xml-parser'

export async function GET() {
  try {
    const rssUrl = 'https://feeds.bbci.co.uk/news/world/rss.xml'
    const response = await fetch(rssUrl)

    if (!response.ok) {
      return Response.json({ error: 'Failed to fetch RSS feed' }, { status: 500 })
    }

    const xml = await response.text()
    const parser = new XMLParser()
    const data = parser.parse(xml)

    const items = data?.rss?.channel?.item || []

    const articles = items.slice(0, 16).map((item: any) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      source: 'BBC News',
    }))

    return Response.json(articles)
  } catch (error) {
    console.error('RSS Fetch Error:', error)
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}
