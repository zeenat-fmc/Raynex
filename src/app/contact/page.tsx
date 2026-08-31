import type { Metadata } from "next";
import { contactDetails } from "@/lib/products";
import ContactForm from "@/components/ContactForm";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { RayGlyph } from "@/components/Rays";

export const metadata: Metadata = {
  title: "Contact — RAYNEX",
  description: "Get in touch with RAYNEX — address, phone, email, and business hours.",
};

export default function ContactPage() {
  return (
    <section className="pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="rx-tracking-wide text-xs font-semibold uppercase text-rx-blue-light">
          Get In Touch
        </p>
        <h1 className="font-display mt-4 max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-rx-white sm:text-5xl">
          Visit Us
        </h1>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-rx-muted">
          Have a project in mind, or a question about the RAYNEX range? Reach
          out — details below, or send a message directly.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT: company info */}
          <div className="flex flex-col gap-10">
            <dl className="flex flex-col gap-6">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4 border-b border-rx-border pb-6">
                  <RayGlyph className="mt-1 h-4 w-7 shrink-0 text-rx-blue-light" />
                  <div>
                    <dt className="rx-tracking-wide text-[11px] font-semibold uppercase text-rx-muted-2">
                      {detail.label}
                    </dt>
                    <dd className="mt-1 text-base text-rx-white">{detail.value}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <a
              href="#"
              className="rx-beam-hover inline-flex w-fit items-center gap-2 border border-rx-blue bg-rx-blue px-7 py-3.5 text-sm font-semibold uppercase rx-tracking-wide text-rx-white transition-colors hover:bg-rx-blue-dark"
            >
              Message Us on WhatsApp
            </a>

            <div className="border border-rx-border">
              <ImagePlaceholder
                alt="Map showing the RAYNEX location"
                label="Map Placeholder"
                aspect="landscape"
                className="border-0"
              />
            </div>
          </div>

          {/* RIGHT: contact form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
