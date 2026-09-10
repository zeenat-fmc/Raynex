import Link from "next/link";
import type { Product } from "@/lib/products";
import ProductCardCarousel from "./ProductCardCarousel";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group rx-beam-hover flex flex-col border border-rx-border bg-rx-charcoal transition-colors duration-300 hover:border-rx-blue/60"
    >
      <ProductCardCarousel images={product.images} image={product.image} alt={product.name} />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="rx-tracking-wide text-[11px] font-semibold uppercase text-rx-blue-light">
          {product.category}
        </span>
        <h3 className="font-display text-lg font-bold text-rx-white">{product.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-rx-muted">{product.description}</p>
        <span className="mt-2 inline-flex w-fit items-center gap-2 border-b border-rx-blue-light pb-0.5 text-xs font-semibold uppercase rx-tracking-wide text-rx-blue-light transition-colors group-hover:text-rx-white">
          View Product
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}