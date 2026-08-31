import { benefits } from "@/lib/products";
import { RayGlyph } from "./Rays";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function FeatureSection() {
  return (
    <section className="border-t border-rx-border bg-rx-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Why Choose RAYNEX"
            title="Fewer promises. Kept consistently."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-rx-border bg-rx-border sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.id} delay={i * 80}>
              <div className="group flex h-full flex-col gap-4 bg-rx-charcoal p-8 transition-colors duration-300 hover:bg-rx-charcoal-2">
                <RayGlyph className="h-5 w-9 text-rx-blue-light transition-transform duration-300 group-hover:translate-x-1" />
                <h3 className="font-display text-lg font-bold text-rx-white">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-rx-muted">{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
