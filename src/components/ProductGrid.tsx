import type { Product } from "@/lib/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, i) => (
        <Reveal key={product.id} delay={(i % 3) * 90}>
          <ProductCard product={product} />
        </Reveal>
      ))}
    </div>
  );
}