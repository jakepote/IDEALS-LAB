'use client';

import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import site from '@/data/site.json';

// This form works with zero backend setup: it opens the visitor's email
// client with the message pre-filled. To collect submissions directly on
// your website instead, sign up for a free Formspree account
// (https://formspree.io) and change the <form> below to POST to your
// Formspree endpoint. Full instructions are in README.md under
// "Making the contact form send email automatically".

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name} via IDEALS Lab website`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink/80">
          Name
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-maroon"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink/80">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-maroon"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink/80">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-maroon"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-medium text-paper hover:bg-maroon-dark"
      >
        <Send size={15} /> Send message
      </button>
      {sent && <p className="text-sm text-accent">Your email client should now be open with your message ready to send.</p>}
    </form>
  );
}
