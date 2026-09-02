"use client";

import { useState, type FormEvent, type ReactNode } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Wire this up to your form handler / email service of choice.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-rx-border bg-rx-charcoal p-8">
        <h3 className="font-display text-xl font-bold text-rx-white">Message sent.</h3>
        <p className="mt-2 text-sm leading-relaxed text-rx-muted">
          Thanks for reaching out. The RAYNEX team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 border border-rx-border bg-rx-charcoal p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name">
          <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name" />
        </Field>
        <Field label="Email Address" htmlFor="email">
          <input id="email" name="email" type="email" required className={inputClass} placeholder="you@email.com" />
        </Field>
      </div>
      <Field label="Phone Number" htmlFor="phone">
        <input id="phone" name="phone" type="tel" className={inputClass} placeholder="Optional" />
      </Field>
      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project or enquiry"
        />
      </Field>
      <button
        type="submit"
        className="rx-beam-hover mt-2 inline-flex w-fit items-center gap-2 border border-rx-blue bg-rx-blue px-7 py-3.5 text-sm font-semibold uppercase rx-tracking-wide text-rx-white transition-colors hover:bg-rx-blue-dark"
      >
        Send Message
      </button>
    </form>
  );
}

const inputClass =
  "w-full border border-rx-border bg-rx-black px-4 py-3 text-sm text-rx-white placeholder:text-rx-muted-2 outline-none transition-colors focus:border-rx-blue-light";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="rx-tracking-wide text-[11px] font-semibold uppercase text-rx-muted">
        {label}
      </label>
      {children}
    </div>
  );
}
