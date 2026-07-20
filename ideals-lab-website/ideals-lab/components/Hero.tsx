'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ConstellationGraphic from './ConstellationGraphic';
import site from '@/data/site.json';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 md:pt-44">
      <div className="bg-grain pointer-events-none absolute inset-0" aria-hidden />
      <div className="section grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">{site.university} &middot; {site.department}</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink md:text-6xl">
            Nine research threads.
            <br />
            <span className="text-maroon">One learning system.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">{site.tagline}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 hover:bg-maroon-dark"
            >
              Explore our research <ArrowRight size={16} />
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-maroon hover:text-maroon"
            >
              Meet the team
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <ConstellationGraphic className="w-full" />
        </motion.div>
      </div>
    </section>
  );
}
