import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import NewsCard from '@/components/NewsCard';
import news from '@/data/news.json';
import site from '@/data/site.json';

export const metadata: Metadata = {
  title: 'News',
  description: `Announcements, awards, and conference presentations from ${site.labName}.`
};

export default function NewsPage() {
  const sorted = [...news].sort((a, b) => (a.date < b.date ? 1 : -1));
  const [featured, ...rest] = sorted;

  return (
    <div className="section py-32">
      <SectionHeading eyebrow="News" title="From the lab" />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {featured && <NewsCard item={featured as any} featured />}
        {rest.map((n, i) => (
          <NewsCard key={n.id} item={n as any} index={i} />
        ))}
      </div>
    </div>
  );
}
