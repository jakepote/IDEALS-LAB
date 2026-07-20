import type { Metadata } from 'next';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import site from '@/data/site.json';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${site.labName} at ${site.university}.`
};

export default function ContactPage() {
  return (
    <div className="section py-32">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk"
        description="Reach out about collaborations, prospective student inquiries, media requests, or anything else."
      />

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <ContactForm />
        </div>

        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon/8 text-maroon">
              <MapPin size={18} />
            </span>
            <div>
              <p className="text-sm font-medium text-ink">Office</p>
              <p className="mt-1 text-sm text-ink/60">{site.officeLocation}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon/8 text-maroon">
              <Mail size={18} />
            </span>
            <div>
              <p className="text-sm font-medium text-ink">Email</p>
              <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-ink/60 hover:text-maroon">
                {site.email}
              </a>
            </div>
          </div>
          {site.social.linkedin && (
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon/8 text-maroon">
                <Linkedin size={18} />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">LinkedIn</p>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-ink/60 hover:text-maroon"
                >
                  Follow IDEALS Lab
                </a>
              </div>
            </div>
          )}

          <div className="overflow-hidden rounded-2xl border border-ink/10 shadow-soft">
            <iframe
              title="Map to IDEALS Lab office"
              src={site.mapEmbedUrl}
              width="100%"
              height="280"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
