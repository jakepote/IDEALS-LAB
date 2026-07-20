import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import TeamCard from '@/components/TeamCard';
import AlumniTimeline from '@/components/AlumniTimeline';
import team from '@/data/team.json';
import site from '@/data/site.json';
import type { TeamMember } from '@/types';

export const metadata: Metadata = {
  title: 'Team',
  description: `Meet the faculty, graduate students, undergraduate researchers, and alumni of ${site.labName}.`
};

const groups: { key: TeamMember['category']; title: string; description: string }[] = [
  { key: 'faculty', title: 'Faculty', description: 'The lab is directed by faculty who set the research agenda and mentor students.' },
  { key: 'graduate', title: 'Graduate Students', description: 'PhD and master\u2019s students leading day-to-day research.' },
  { key: 'undergraduate', title: 'Undergraduate Researchers', description: 'Undergraduates gaining hands-on research experience.' }
];

export default function TeamPage() {
  const alumni = (team as TeamMember[]).filter((m) => m.category === 'alumni');

  return (
    <div className="section py-32">
      <SectionHeading eyebrow="Team" title="The people behind the research" />

      <div className="mt-16 space-y-20">
        {groups.map((g) => {
          const members = (team as TeamMember[]).filter((m) => m.category === g.key);
          if (members.length === 0) return null;
          return (
            <section key={g.key}>
              <h2 className="font-display text-2xl font-semibold text-ink">{g.title}</h2>
              <p className="mt-2 max-w-xl text-sm text-ink/60">{g.description}</p>
              <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
                {members.map((m, i) => (
                  <TeamCard key={m.id} member={m} index={i} />
                ))}
              </div>
            </section>
          );
        })}

        {alumni.length > 0 && (
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">Lab Alumni</h2>
            <p className="mt-2 max-w-xl text-sm text-ink/60">
              Where our alumni have gone, in order of graduation.
            </p>
            <AlumniTimeline alumni={alumni} />
          </section>
        )}
      </div>
    </div>
  );
}
