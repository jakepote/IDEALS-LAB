'use client';

import { useState } from 'react';
import { Copy, Check, FileDown } from 'lucide-react';
import type { Publication } from '@/types';

export default function PublicationCard({ pub }: { pub: Publication }) {
  const [copied, setCopied] = useState(false);

  async function copyCitation() {
    try {
      await navigator.clipboard.writeText(pub.apaCitation);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable; silently ignore.
    }
  }

  return (
    <article className="rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">{pub.title}</h3>
          <p className="mt-1 text-sm text-ink/60">
            {pub.authors.join(', ')} &middot; {pub.venue} &middot; {pub.year}
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-paper px-3 py-1 font-mono text-xs text-ink/60 ring-1 ring-ink/10">
          {pub.year}
        </span>
      </div>

      <p className="mt-4 rounded-xl bg-paper p-4 font-mono text-xs leading-relaxed text-ink/70">
        {pub.apaCitation}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          onClick={copyCitation}
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-maroon hover:text-maroon"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied' : 'Copy citation'}
        </button>
        {pub.pdfUrl ? (
          <a
            href={pub.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-maroon px-4 py-2 text-xs font-medium text-paper hover:bg-maroon-dark"
          >
            <FileDown size={14} /> Download PDF
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full bg-ink/5 px-4 py-2 text-xs font-medium text-ink/40">
            <FileDown size={14} /> PDF unavailable
          </span>
        )}
      </div>
    </article>
  );
}
