'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import type { TeamMember } from '@/types';

export default function TeamCard({ member, index = 0 }: { member: TeamMember; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
      className="group rounded-2xl border border-ink/10 bg-white p-5 shadow-soft transition-shadow hover:shadow-card"
    >
      <div className="relative mx-auto aspect-square w-28 overflow-hidden rounded-full bg-paper ring-4 ring-paper">
        <Image src={member.photo} alt={`Photo of ${member.name}`} fill className="object-cover" sizes="112px" />
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-display text-base font-semibold text-ink">{member.name}</h3>
        <p className="mt-0.5 text-xs font-medium text-maroon">{member.role}</p>
        {member.currentEmployer && <p className="mt-1 text-xs text-ink/50">{member.currentEmployer}</p>}
        <p className="mt-3 text-xs leading-relaxed text-ink/60">{member.bio}</p>
        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
          {member.interests.map((interest) => (
            <span key={interest} className="rounded-full bg-paper px-2.5 py-1 text-[10px] text-ink/50 ring-1 ring-ink/10">
              {interest}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-2">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="rounded-full bg-paper p-2 text-ink/60 hover:bg-maroon hover:text-paper"
            >
              <Linkedin size={14} />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              aria-label={`Email ${member.name}`}
              className="rounded-full bg-paper p-2 text-ink/60 hover:bg-maroon hover:text-paper"
            >
              <Mail size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
