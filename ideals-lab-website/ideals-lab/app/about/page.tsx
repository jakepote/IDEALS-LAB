import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import site from '@/data/site.json';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn about ${site.labName}'s mission, vision, history, and research philosophy at ${site.university}.`
};

const sections = [
  {
    eyebrow: 'Mission',
    title: 'Why we do this work',
    body: 'IDEALS Lab exists to make instructional design decisions evidence-based, from the classroom to the program level. We partner with instructors, departments, and researchers to design learning experiences and then rigorously evaluate whether they work, for whom, and why.'
  },
  {
    eyebrow: 'Vision',
    title: 'What we\u2019re working toward',
    body: 'We want assessment and evaluation to be seen as tools for improvement rather than compliance. Our long-term goal is a body of open, reusable methods that any instructor or program can use to understand and improve their own teaching.'
  },
  {
    eyebrow: 'History',
    title: 'How the lab started',
    body: 'IDEALS Lab was founded within the College of Education & Human Development at Texas A&M University to bring together instructional designers, learning scientists, and data scientists under one research program. What began as a small assessment consulting effort has grown into a multi-project lab spanning learning analytics, curriculum design, and AI in education.'
  },
  {
    eyebrow: 'Research Philosophy',
    title: 'How we approach a problem',
    body: 'We start from the outcome a learner or program needs, not from a favorite method. That means we move fluidly between qualitative, quantitative, and mixed-methods approaches, and we treat every dataset, survey, or interview transcript as a way to hear from the people our research is meant to serve.'
  }
];

export default function AboutPage() {
  return (
    <div className="section py-32">
      <ScrollReveal>
        <p className="eyebrow">About the Lab</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold text-ink md:text-5xl">
          Research that treats instruction as something you can measure, and improve.
        </h1>
      </ScrollReveal>

      <div className="mt-20 space-y-20">
        {sections.map((s, i) => (
          <div key={s.eyebrow} className="grid gap-6 md:grid-cols-[200px_1fr] md:gap-12">
            <ScrollReveal delay={i * 0.05}>
              <p className="eyebrow">{s.eyebrow}</p>
            </ScrollReveal>
            <ScrollReveal delay={i * 0.05 + 0.05} className="hairline pt-6 md:border-none md:pt-0">
              <h2 className="font-display text-2xl font-semibold text-ink">{s.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">{s.body}</p>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </div>
  );
}
