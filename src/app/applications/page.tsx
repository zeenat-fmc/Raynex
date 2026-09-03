import type { Metadata } from "next";
import Link from "next/link";
import { applications } from "@/lib/products";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Reveal from "@/components/Reveal";
import { RayField, RayGlyph } from "@/components/Rays";

export const metadata: Metadata = {
  title: "Applications - RAYNEX",
  description: "Where RAYNEX lighting fits - residential, commercial, retail, hospitality, offices, and architectural projects.",
};

export default function ApplicationsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-rx-border pt-40 pb-20 lg:pt-48 lg:pb-28">
        <RayField className="absolute inset-0 h-full w-full opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="rx-tracking-wide text-xs font-semibold uppercase text-rx-blue-light">
            Where RAYNEX Fits
          </p>
          <h1 className="font-display mt-4 max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-rx-white sm:text-5xl">
            Applications
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-rx-muted">
            The same standard of light, adapted to how each space is actually
            used from a quiet living room to a full architectural fit-out.
          </p>
        </div>
      </section>

      <section className="bg-rx-black py-20 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-20 px-6 lg:gap-28 lg:px-10">
          {applications.map((app, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal
                key={app.id}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <ImagePlaceholder
                  src={app.image}
                  alt={`RAYNEX lighting in ${app.name.toLowerCase()} spaces`}
                  label={app.name}
                  aspect="landscape"
                />
                <div className="flex flex-col gap-4">
                  <span className="flex items-center gap-2 text-rx-blue-light">
                    <RayGlyph className="h-3.5 w-6" />
                    <span className="rx-tracking-wide text-xs font-semibold uppercase">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <h2 className="font-display text-2xl font-extrabold tracking-tight text-rx-white sm:text-3xl">
                    {app.name}
                  </h2>
                  <p className="max-w-md text-[15px] leading-relaxed text-rx-muted">
                    {app.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-t border-rx-border bg-rx-charcoal py-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center lg:px-10">
          <h2 className="font-display max-w-lg text-2xl font-extrabold tracking-tight text-rx-white sm:text-3xl">
            Not sure which fit is right for your space?
          </h2>
          <Link
            href="/contact"
            className="rx-beam-hover inline-flex items-center gap-2 border border-rx-blue bg-rx-blue px-7 py-3.5 text-sm font-semibold uppercase rx-tracking-wide text-rx-white transition-colors hover:bg-rx-blue-dark"
          >
            Talk To Us
          </Link>
        </div>
      </section>
    </>
  );
}
