import { applications } from "@/lib/products";
import ImagePlaceholder from "./ImagePlaceholder";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ApplicationsSection() {
  return (
    <section className="border-t border-rx-border bg-rx-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Applications"
            title="Wherever the space, RAYNEX has a fit."
            description="From quiet residential corners to full commercial fit-outs, the same standard of light carries across every setting."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {applications.map((app, i) => (
            <Reveal key={app.id} delay={i * 70}>
              <div className="group rx-beam-hover relative overflow-hidden border border-rx-border">
                <ImagePlaceholder
                  alt={`RAYNEX lighting in ${app.name.toLowerCase()} spaces`}
                  label={app.name}
                  aspect="square"
                  className="border-0 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-rx-black via-rx-black/60 to-transparent p-3">
                  <p className="rx-tracking-wide text-[11px] font-semibold uppercase text-rx-white">
                    {app.name}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
