import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section flex min-h-[60vh] flex-col items-center justify-center py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink">We couldn&apos;t find that page</h1>
      <p className="mt-3 max-w-md text-ink/60">
        The page you&apos;re looking for may have moved or no longer exists. Try one of the links below.
      </p>
      <Link href="/" className="mt-8 rounded-full bg-maroon px-6 py-3 text-sm font-medium text-paper hover:bg-maroon-dark">
        Back to home
      </Link>
    </div>
  );
}
