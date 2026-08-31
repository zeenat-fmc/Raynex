import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ProductHighlights() {
  const featured = products.slice(0, 3);

  return (
    <section className="border-t border-rx-border bg-rx-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="The Catalogue"
              title="A focused range, built with intent."
              description="Nine products, each developed for a clear purpose. Here's a look at a few from the RAYNEX line."
            />
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/products"
              className="hidden shrink-0 items-center gap-2 border border-rx-border px-6 py-3 text-xs font-semibold uppercase rx-tracking-wide text-rx-white transition-colors hover:border-rx-blue-light sm:inline-flex"
            >
              View All Products
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product, i) => (
            <Reveal key={product.id} delay={i * 90}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 sm:hidden">
          <Link
            href="/products"
            className="inline-flex w-full items-center justify-center gap-2 border border-rx-border px-6 py-3.5 text-xs font-semibold uppercase rx-tracking-wide text-rx-white"
          >
            View All Products
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
