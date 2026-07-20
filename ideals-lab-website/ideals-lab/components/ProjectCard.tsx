'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Project } from '@/types';

const statusColor: Record<Project['status'], string> = {
  Active: 'bg-accent/10 text-accent',
  Completed: 'bg-ink/10 text-ink/70',
  Planned: 'bg-maroon/10 text-maroon'
};

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft transition-shadow hover:shadow-card"
    >
      <div className="relative aspect-[16/10] w-full bg-paper">
        <Image src={project.image} alt="" fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusColor[project.status]}`}>
            {project.status}
          </span>
          <span className="font-mono text-xs text-ink/40">{project.funding}</span>
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold text-ink">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.methods.map((m) => (
            <span key={m} className="rounded-full bg-paper px-3 py-1 text-xs text-ink/60 ring-1 ring-ink/10">
              {m}
            </span>
          ))}
        </div>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-medium text-maroon hover:underline"
          >
            More information
          </a>
        ) : (
          <span className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-medium text-ink/40">
            More information coming soon
          </span>
        )}
      </div>
    </motion.article>
  );
}
