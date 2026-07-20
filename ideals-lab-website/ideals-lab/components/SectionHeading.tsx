import ScrollReveal from './ScrollReveal';

export default function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <ScrollReveal className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-ink/70">{description}</p>}
    </ScrollReveal>
  );
}
