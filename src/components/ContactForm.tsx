"use client";

import { useState, type FormEvent, type ReactNode } from "react";

const WHATSAPP_NUMBER = "+923427043613"; 

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const whatsappMessage = `Hello RAYNEX,

I would like to get in touch regarding your lighting products.

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}

Thank you.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-rx-border bg-rx-charcoal p-8">
        <h3 className="font-display text-xl font-bold text-rx-white">
          WhatsApp opened.
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-rx-muted">
          Your message has been prepared in WhatsApp. Please review it and
          press send to contact the RAYNEX team.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 border border-rx-border bg-rx-charcoal p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </Field>

        <Field label="Email Address" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="you@email.com"
          />
        </Field>
      </div>

      <Field label="Phone Number" htmlFor="phone">
        <input
          id="phone"
          name="phone"
          type="tel"
          className={inputClass}
          placeholder="Optional"
        />
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
      <label
        htmlFor={htmlFor}
        className="rx-tracking-wide text-[11px] font-semibold uppercase text-rx-muted"
      >
        {label}
      </label>

      {children}
    </div>
  );
}