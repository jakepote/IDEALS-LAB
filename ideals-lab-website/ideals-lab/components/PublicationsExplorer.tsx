'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import PublicationCard from './PublicationCard';
import publications from '@/data/publications.json';

export default function PublicationsExplorer() {
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('all');
  const [author, setAuthor] = useState('all');

  const years = useMemo(
    () => Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a),
    []
  );
  const authors = useMemo(
    () => Array.from(new Set(publications.flatMap((p) => p.authors))).sort(),
    []
  );

  const filtered = publications
    .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
    .filter((p) => (year === 'all' ? true : p.year === Number(year)))
    .filter((p) => (author === 'all' ? true : p.authors.includes(author)))
    .sort((a, b) => b.year - a.year);

  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search publications by title"
            aria-label="Search publications by title"
            className="w-full rounded-full border border-ink/15 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-maroon"
          />
        </div>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          aria-label="Filter by year"
          className="rounded-full border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-maroon"
        >
          <option value="all">All years</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          aria-label="Filter by author"
          className="rounded-full border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-maroon"
        >
          <option value="all">All authors</option>
          {authors.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-4 text-sm text-ink/50">
        {filtered.length} publication{filtered.length === 1 ? '' : 's'}
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {filtered.map((pub) => (
          <PublicationCard key={pub.id} pub={pub as any} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-ink/50">No publications match your search. Try a different title, year, or author.</p>
      )}
    </div>
  );
}
