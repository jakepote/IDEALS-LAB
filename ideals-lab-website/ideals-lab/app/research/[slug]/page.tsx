import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import * as Icons from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectCard from '@/components/ProjectCard';
import PublicationCard from '@/components/PublicationCard';
import research from '@/data/research.json';
import projects from '@/data/projects.json';
import publications from '@/data/publications.json';

export function generateStaticParams() {
  return research.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const area = research.find((a) => a.slug === params.slug);
  if (!area) return {};
  return { title: area.title, description: area.summary };
}

export default function ResearchDetailPage({ params }: { params: { slug: string } }) {
  const area = research.find((a) => a.slug === params.slug);
  if (!area) notFound();

  const Icon = (Icons as any)[area.icon] ?? Icons.Sparkles;
  const relatedProjects = projects.filter((p) => p.researchAreas.includes(area.slug));
  const relatedPubs = publications.filter((p) => p.tags.includes(area.slug));

  return (
    <div className="section py-32">
      <Link href="/research" className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 hover:text-maroon">
        <ArrowLeft size={15} /> All research areas
      </Link>

      <ScrollReveal className="mt-8 max-w-3xl">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-maroon/8 text-maroon">
          <Icon size={26} strokeWidth={1.75} />
        </span>
        <h1 className="mt-6 font-display text-4xl font-semibold text-ink md:text-5xl">{area.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-ink/70">{area.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {area.keywords.map((k) => (
            <span key={k} className="rounded-full bg-white px-3 py-1 text-xs text-ink/60 ring-1 ring-ink/10">
              {k}
            </span>
          ))}
        </div>
      </ScrollReveal>

      {relatedProjects.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl font-semibold text-ink">Related projects</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p as any} index={i} />
            ))}
          </div>
        </section>
      )}

      {relatedPubs.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl font-semibold text-ink">Related publications</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {relatedPubs.map((p) => (
              <PublicationCard key={p.id} pub={p as any} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
