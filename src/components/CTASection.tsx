import Link from "next/link";
import { RayField } from "./Rays";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-rx-border bg-rx-black py-24 lg:py-28">
      <RayField className="absolute inset-0 h-full w-full opacity-40" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-rx-white sm:text-4xl lg:text-5xl">
            Let&rsquo;s Light Your Space.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="max-w-xl text-base leading-relaxed text-rx-muted">
            Tell us about your project and the RAYNEX team will help you
            choose the right lighting solution for it.
          </p>
        </Reveal>
        <Reveal delay={200} className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rx-beam-hover inline-flex items-center gap-2 border border-rx-blue bg-rx-blue px-8 py-4 text-sm font-semibold uppercase rx-tracking-wide text-rx-white transition-colors hover:bg-rx-blue-dark"
          >
            Contact Us Today
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
