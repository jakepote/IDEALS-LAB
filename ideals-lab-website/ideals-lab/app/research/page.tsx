import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import ResearchCard from '@/components/ResearchCard';
import research from '@/data/research.json';
import site from '@/data/site.json';

export const metadata: Metadata = {
  title: 'Research',
  description: `Explore the nine research areas of ${site.labName} at ${site.university}.`
};

export default function ResearchPage() {
  return (
    <div className="section py-32">
      <SectionHeading
        eyebrow="Research Areas"
        title="Nine threads, one research program"
        description="Each area below has its own page describing the questions we ask, the methods we use, and representative work. Click through to learn more."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {research.map((area, i) => (
          <ResearchCard key={area.slug} area={area as any} index={i} />
        ))}
      </div>
    </div>
  );
}
