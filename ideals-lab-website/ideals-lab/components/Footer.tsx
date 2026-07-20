import Link from 'next/link';
import { Linkedin, Mail, Twitter, Github, Youtube } from 'lucide-react';
import site from '@/data/site.json';

const quickLinks = [
  { href: '/research', label: 'Research' },
  { href: '/projects', label: 'Projects' },
  { href: '/publications', label: 'Publications' },
  { href: '/team', label: 'Team' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hairline mt-32 bg-ink text-paper/90">
      <div className="section grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold text-paper">{site.labName}</p>
          <p className="mt-2 max-w-xs text-sm text-paper/60">{site.labSubtitle}</p>
          <p className="mt-4 text-sm text-paper/60">{site.university}</p>
        </div>

        <div>
          <p className="eyebrow text-paper/50">Quick Links</p>
          <ul className="mt-3 space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-paper/70 hover:text-accent-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-paper/50">Contact</p>
          <p className="mt-3 text-sm text-paper/70">{site.officeLocation}</p>
          <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-paper/70 hover:text-accent-light">
            {site.email}
          </a>
          <div className="mt-4 flex items-center gap-3">
            {site.social.linkedin && (
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IDEALS Lab on LinkedIn"
                className="rounded-full bg-paper/10 p-2 hover:bg-accent"
              >
                <Linkedin size={16} />
              </a>
            )}
            {site.social.twitter && (
              <a
                href={site.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IDEALS Lab on Twitter"
                className="rounded-full bg-paper/10 p-2 hover:bg-accent"
              >
                <Twitter size={16} />
              </a>
            )}
            {site.social.github && (
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IDEALS Lab on GitHub"
                className="rounded-full bg-paper/10 p-2 hover:bg-accent"
              >
                <Github size={16} />
              </a>
            )}
            {site.social.youtube && (
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IDEALS Lab on YouTube"
                className="rounded-full bg-paper/10 p-2 hover:bg-accent"
              >
                <Youtube size={16} />
              </a>
            )}
            <a
              href={`mailto:${site.email}`}
              aria-label="Email IDEALS Lab"
              className="rounded-full bg-paper/10 p-2 hover:bg-accent"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="section flex flex-col items-center justify-between gap-2 py-6 text-xs text-paper/50 md:flex-row">
          <p>
            &copy; {year} {site.labName}, {site.university}. All rights reserved.
          </p>
          <p>This site is maintained by {site.labName} and is not an official statement of Texas A&M University.</p>
        </div>
      </div>
    </footer>
  );
}
