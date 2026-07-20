import Image from 'next/image';
import site from '@/data/site.json';

export default function PartnerLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 grayscale opacity-70">
      {site.partners.map((p) => (
        <div key={p.name} className="relative h-8 w-28">
          <Image src={p.logo} alt={p.name} fill className="object-contain" sizes="112px" />
        </div>
      ))}
    </div>
  );
}
