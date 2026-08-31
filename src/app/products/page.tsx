import type { Metadata } from "next";
import { products } from "@/lib/products";
import ProductShowcase from "@/components/ProductShowcase";
import { RayField } from "@/components/Rays";

export const metadata: Metadata = {
  title: "Products — RAYNEX",
  description: "Explore the full RAYNEX lighting and electrical product catalogue.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-rx-border pt-40 pb-20 lg:pt-48 lg:pb-28">
        <RayField className="absolute inset-0 h-full w-full opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="rx-tracking-wide text-xs font-semibold uppercase text-rx-blue-light">
            The Catalogue
          </p>
          <h1 className="font-display mt-4 max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-rx-white sm:text-5xl">
            Our Products
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-rx-muted">
            Nine fixtures. Nine clear purposes. Browse the full RAYNEX range
            below, or select any product for a closer look.
          </p>
        </div>
      </section>

      <section className="bg-rx-black py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ProductShowcase products={products} />
        </div>
      </section>
    </>
  );
}
