import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects.json';
import site from '@/data/site.json';

export const metadata: Metadata = {
  title: 'Projects',
  description: `Active and completed research projects from ${site.labName}.`
};

export default function ProjectsPage() {
  return (
    <div className="section py-32">
      <SectionHeading
        eyebrow="Projects"
        title="What we're building"
        description="Every project card lists its methods, funding source, and current status. Select 'more information' for projects with an external page or report."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p as any} index={i} />
        ))}
      </div>
    </div>
  );
}
