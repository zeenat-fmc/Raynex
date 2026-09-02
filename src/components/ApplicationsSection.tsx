import Link from "next/link";
import { applications } from "@/lib/products";
import ImagePlaceholder from "./ImagePlaceholder";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ApplicationsSection() {
  return (
    <section className="border-t border-rx-border bg-rx-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Applications"
              title="Wherever the space, RAYNEX has a fit."
              description="From quiet residential corners to full commercial fit-outs, the same standard of light carries across every setting."
            />
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/applications"
              className="hidden shrink-0 items-center gap-2 border border-rx-border px-6 py-3 text-xs font-semibold uppercase rx-tracking-wide text-rx-white transition-colors hover:border-rx-blue-light sm:inline-flex"
            >
              View All Applications
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
