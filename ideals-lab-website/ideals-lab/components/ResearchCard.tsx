'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import type { ResearchArea } from '@/types';

export default function ResearchCard({ area, index = 0 }: { area: ResearchArea; index?: number }) {
  const Icon = (Icons as any)[area.icon] ?? Icons.Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <Link
        href={`/research/${area.slug}`}
        className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
      >
        <div className="flex items-center justify-between">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-maroon/8 text-maroon">
            <Icon size={20} strokeWidth={1.75} />
          </span>
          <ArrowUpRight
            size={18}
            className="text-ink/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-maroon"
          />
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold text-ink">{area.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/60">{area.summary}</p>
      </Link>
    </motion.div>
  );
}
