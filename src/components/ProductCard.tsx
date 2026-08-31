"use client";

import type { Product } from "@/lib/products";
import ImagePlaceholder from "./ImagePlaceholder";

type ProductCardProps = {
  product: Product;
  onSelect?: (product: Product) => void;
};

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <article className="group rx-beam-hover flex flex-col border border-rx-border bg-rx-charcoal transition-colors duration-300 hover:border-rx-blue/60">
      <ImagePlaceholder
        src={product.image}
        alt={product.name}
        label="Product Image"
        aspect="square"
        className="border-0 border-b border-rx-border transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="rx-tracking-wide text-[11px] font-semibold uppercase text-rx-blue-light">
          {product.category}
        </span>
        <h3 className="font-display text-lg font-bold text-rx-white">{product.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-rx-muted">{product.description}</p>
        <button
          type="button"
          onClick={() => onSelect?.(product)}
          className="mt-2 inline-flex w-fit items-center gap-2 border-b border-rx-blue-light pb-0.5 text-xs font-semibold uppercase rx-tracking-wide text-rx-blue-light transition-colors hover:text-rx-white"
        >
          View Product
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </article>
  );
}
