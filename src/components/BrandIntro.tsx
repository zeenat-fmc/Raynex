import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ImagePlaceholder from "./ImagePlaceholder";

export default function BrandIntro() {
  return (
    <section id="brand" className="relative bg-rx-black py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <Reveal>
          <ImagePlaceholder
            alt="RAYNEX lighting installed inside a modern living space"
            label="Brand Image Placeholder"
            aspect="portrait"
          />
        </Reveal>
        <Reveal delay={120} className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="The Brand"
            title="Built around one idea: light should just work."
            description="RAYNEX brings together lighting and electrical products designed for consistency — from the first install to years of daily use. Every fixture in the range is built to a shared standard of quality, so a project spec'd today still performs the way it should tomorrow."
          />
          <p className="max-w-xl text-[15px] leading-relaxed text-rx-muted">
            We work with a focused catalogue rather than an endless one
            fewer products, considered more carefully, so every RAYNEX
            fixture earns its place in a space.
          </p>
          <div className="mt-2 grid grid-cols-3 gap-6 border-t border-rx-border pt-6">
            {[
              { value: "9", label: "Core Products" },
              { value: "100%", label: "Quality Checked" },
              { value: "24/7", label: "Reliable Output" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-extrabold text-rx-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase rx-tracking-wide text-rx-muted-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
