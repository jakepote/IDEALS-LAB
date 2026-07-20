import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';
import ResearchCard from '@/components/ResearchCard';
import ProjectCard from '@/components/ProjectCard';
import TeamCard from '@/components/TeamCard';
import NewsCard from '@/components/NewsCard';
import PublicationCard from '@/components/PublicationCard';
import PartnerLogos from '@/components/PartnerLogos';
import StatCounter from '@/components/StatCounter';
import site from '@/data/site.json';
import research from '@/data/research.json';
import projects from '@/data/projects.json';
import team from '@/data/team.json';
import news from '@/data/news.json';
import publications from '@/data/publications.json';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ResearchOrganization',
  name: site.labName,
  alternateName: site.labSubtitle,
  url: 'https://idealslab.vercel.app',
  parentOrganization: {
    '@type': 'CollegeOrUniversity',
    name: site.university
  },
  email: site.email,
  sameAs: [site.social.linkedin].filter(Boolean)
};

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const featuredTeam = team.filter((m) => m.category === 'faculty').concat(team.filter((m) => m.category === 'graduate')).slice(0, 4);
  const latestNews = [...news].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);
  const latestPubs = [...publications].sort((a, b) => b.year - a.year).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />

      {/* Mission */}
      <section className="section py-20">
        <ScrollReveal>
          <p className="max-w-3xl font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
            {site.missionShort}
          </p>
        </ScrollReveal>
      </section>

      {/* Stats */}
      <section className="hairline bg-white py-16">
        <div className="section grid grid-cols-2 gap-8 md:grid-cols-4">
          {site.stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* Research areas */}
      <section className="section py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Research Areas"
            title="Nine threads, one research program"
            description="Every project in the lab draws on one or more of these areas. Explore each to see the questions we're asking and the work we're doing to answer them."
          />
          <Link href="/research" className="mb-1 inline-flex items-center gap-1 text-sm font-medium text-maroon hover:underline">
            View all <ArrowRight size={15} />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {research.map((area, i) => (
            <ResearchCard key={area.slug} area={area} index={i} />
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="hairline bg-white py-24">
        <div className="section">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Featured Projects"
              title="What we're building right now"
              description="A sample of active and recently completed studies. Every project page includes methods, funding, and status."
            />
            <Link href="/projects" className="mb-1 inline-flex items-center gap-1 text-sm font-medium text-maroon hover:underline">
              All projects <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p as any} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest news */}
      <section className="section py-24">
        <SectionHeading eyebrow="Latest News" title="From the lab" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {latestNews.map((n, i) => (
            <NewsCard key={n.id} item={n as any} index={i} featured={i === 0} />
          ))}
        </div>
      </section>

      {/* Team preview */}
      <section className="hairline bg-white py-24">
        <div className="section">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Meet the Team" title="The people behind the research" />
            <Link href="/team" className="mb-1 inline-flex items-center gap-1 text-sm font-medium text-maroon hover:underline">
              Full roster <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            {featuredTeam.map((m, i) => (
              <TeamCard key={m.id} member={m as any} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Publications preview */}
      <section className="section py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Recent Publications" title="Peer-reviewed work" />
          <Link href="/publications" className="mb-1 inline-flex items-center gap-1 text-sm font-medium text-maroon hover:underline">
            All publications <ArrowRight size={15} />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {latestPubs.map((p) => (
            <PublicationCard key={p.id} pub={p as any} />
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="hairline bg-white py-16">
        <div className="section">
          <p className="eyebrow text-center">Supported By</p>
          <div className="mt-8">
            <PartnerLogos />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section py-24">
        <ScrollReveal className="rounded-3xl bg-maroon px-8 py-16 text-center text-paper md:px-16">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Interested in joining the lab or collaborating on a study?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-paper/80">
            We&apos;re always open to conversations with prospective students, faculty collaborators, and community partners.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3 text-sm font-medium text-maroon hover:-translate-y-0.5 transition-transform"
          >
            Get in touch <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
