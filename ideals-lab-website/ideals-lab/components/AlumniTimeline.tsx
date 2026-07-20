'use client';

import { motion } from 'framer-motion';
import type { TeamMember } from '@/types';

export default function AlumniTimeline({ alumni }: { alumni: TeamMember[] }) {
  const sorted = [...alumni].sort((a, b) => (b.gradYear ?? 0) - (a.gradYear ?? 0));

  return (
    <div className="relative mt-10 border-l border-maroon/20 pl-8">
      {sorted.map((alum, i) => (
        <motion.div
          key={alum.id}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: i * 0.05 }}
          className="relative pb-10 last:pb-0"
        >
          <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full bg-maroon ring-4 ring-paper" />
          <p className="font-mono text-xs uppercase tracking-wide text-maroon/70">{alum.gradYear}</p>
          <h3 className="mt-1 font-display text-lg font-semibold text-ink">{alum.name}</h3>
          <p className="text-sm text-ink/60">{alum.gradDegree}</p>
          {alum.currentEmployer && <p className="mt-1 text-sm font-medium text-ink/80">Now: {alum.currentEmployer}</p>}
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/60">{alum.bio}</p>
        </motion.div>
      ))}
    </div>
  );
}
