import Link from "next/link";
import { RayField } from "./Rays";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-rx-border pt-24">
      <div className="absolute inset-1 rx-hero-image">
        {/* <ImagePlaceholder
          src="/brand/hero.png"
          alt="RAYNEX architectural lighting installed in a premium interior"
          label="Hero Image Placeholder"
          aspect="wide"
          className="h-full w-full border-0"
        /> */}
        <video
  autoPlay
  muted
  loop
  playsInline
  className="h-full w-full object-cover"
>
  <source src="/brand/hero.mp4" type="video/mp4" />
</video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-rx-black via-rx-black/70 to-rx-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-rx-black via-rx-black/50 to-transparent" />
      <RayField className="absolute inset-0 h-full w-full opacity-70" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-24 lg:px-10">
        <p className="rx-tracking-wide text-xs font-semibold uppercase text-rx-blue-light">
          Lighting &amp; Electrical Solutions
        </p>
        <h1 className="font-display max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-rx-white sm:text-5xl lg:text-6xl">
          Light Engineered.
          <br />
          <span className="text-rx-blue-light">Space Illuminated.</span>
        </h1>
        <p className="max-w-lg text-base leading-relaxed text-rx-muted sm:text-lg">
          RAYNEX designs dependable lighting and electrical products for the
          spaces people live, work, and gather in built for quality,
          efficiency, and everyday performance.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/products"
            className="rx-beam-hover inline-flex items-center gap-2 border border-rx-blue bg-rx-blue px-7 py-3.5 text-sm font-semibold uppercase rx-tracking-wide text-rx-white transition-colors hover:bg-rx-blue-dark"
          >
            Explore Products
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-rx-border px-7 py-3.5 text-sm font-semibold uppercase rx-tracking-wide text-rx-white transition-colors hover:border-rx-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
