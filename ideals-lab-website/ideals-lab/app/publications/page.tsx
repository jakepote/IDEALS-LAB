import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import PublicationsExplorer from '@/components/PublicationsExplorer';
import site from '@/data/site.json';

export const metadata: Metadata = {
  title: 'Publications',
  description: `Peer-reviewed publications from ${site.labName}, searchable and filterable by year and author.`
};

export default function PublicationsPage() {
  return (
    <div className="section py-32">
      <SectionHeading
        eyebrow="Publications"
        title="Peer-reviewed research"
        description="Search by title, filter by author or year, and copy APA citations directly."
      />
      <div className="mt-12">
        <PublicationsExplorer />
      </div>
    </div>
  );
}
