'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { NewsItem } from '@/types';
import { formatDate } from '@/lib/utils';

export default function NewsCard({ item, index = 0, featured = false }: { item: NewsItem; index?: number; featured?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className={`overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft transition-shadow hover:shadow-card ${
        featured ? 'md:col-span-2 md:grid md:grid-cols-2' : ''
      }`}
    >
      <div className={`relative w-full bg-paper ${featured ? 'aspect-[16/10] md:aspect-auto' : 'aspect-[16/10]'}`}>
        <Image src={item.image} alt="" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
      <div className="flex flex-col justify-center p-6">
        <div className="flex items-center gap-3 text-xs text-ink/50">
          <span className="rounded-full bg-maroon/8 px-2.5 py-1 font-medium text-maroon">{item.category}</span>
          <time dateTime={item.date}>{formatDate(item.date)}</time>
        </div>
        <h3 className={`mt-3 font-display font-semibold text-ink ${featured ? 'text-2xl' : 'text-lg'}`}>{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.excerpt}</p>
      </div>
    </motion.article>
  );
}
