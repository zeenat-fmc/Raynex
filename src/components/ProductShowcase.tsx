"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/lib/products";
import ProductCard from "./ProductCard";
import ImagePlaceholder from "./ImagePlaceholder";
import Reveal from "./Reveal";
import { RayGlyph } from "./Rays";

type ProductShowcaseProps = {
  products: Product[];
};

export default function ProductShowcase({ products }: ProductShowcaseProps) {
  const [active, setActive] = useState<Product | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => (
          <Reveal key={product.id} delay={(i % 3) * 90}>
            <ProductCard product={product} onSelect={setActive} />
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-rx-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.name}
          onClick={() => setActive(null)}
        >
          <div
            className="relative grid w-full max-w-3xl gap-0 overflow-hidden border border-rx-border bg-rx-charcoal sm:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close product details"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center border border-rx-border bg-rx-black/60 text-rx-white transition-colors hover:border-rx-blue-light"
            >
              &times;
            </button>
            <ImagePlaceholder
              src={active.image}
              alt={active.name}
              label="Product Image"
              aspect="square"
              className="border-0"
            />
            <div className="flex flex-col gap-4 p-8">
              <span className="flex items-center gap-2 text-rx-blue-light">
                <RayGlyph className="h-3.5 w-6" />
                <span className="rx-tracking-wide text-[11px] font-semibold uppercase">
                  {active.category}
                </span>
              </span>
              <h3 className="font-display text-2xl font-bold text-rx-white">{active.name}</h3>
              <p className="text-sm leading-relaxed text-rx-muted">{active.description}</p>
              <a
                href="/contact"
                className="mt-2 inline-flex w-fit items-center gap-2 border border-rx-blue bg-rx-blue px-6 py-3 text-xs font-semibold uppercase rx-tracking-wide text-rx-white transition-colors hover:bg-rx-blue-dark"
              >
                Enquire About This Product
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
