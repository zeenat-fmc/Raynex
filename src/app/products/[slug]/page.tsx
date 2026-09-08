import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { getWhatsAppLink } from "@/lib/whatsapp";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { RayGlyph } from "@/components/Rays";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  if (!product) return { title: "Product — RAYNEX" };
  return {
    title: `${product.name} — RAYNEX`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <section className="border-b border-rx-border pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-rx-muted-2">
            <Link href="/" className="transition-colors hover:text-rx-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/products" className="transition-colors hover:text-rx-white">Products</Link>
            <span aria-hidden="true">/</span>
            <span className="text-rx-muted">{product.name}</span>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <ImagePlaceholder
                src={product.image}
                alt={product.name}
                label="Product Image"
                aspect="square"
              />
            </Reveal>

            <Reveal delay={100} className="flex flex-col gap-6">
              <span className="flex items-center gap-2 text-rx-blue-light">
                <RayGlyph className="h-3.5 w-6" />
                <span className="rx-tracking-wide text-xs font-semibold uppercase">
                  {product.category}
                </span>
              </span>

              <h1 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-rx-white sm:text-4xl">
                {product.name}
              </h1>

              <p className="max-w-lg text-[15px] leading-relaxed text-rx-muted">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={getWhatsAppLink(`Hi RAYNEX, I'd like to enquire about ${product.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rx-beam-hover inline-flex items-center gap-2 border border-rx-blue bg-rx-blue px-7 py-3.5 text-sm font-semibold uppercase rx-tracking-wide text-rx-white transition-colors hover:bg-rx-blue-dark"
                >
                  Enquire on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-rx-border px-7 py-3.5 text-sm font-semibold uppercase rx-tracking-wide text-rx-white transition-colors hover:border-rx-white"
                >
                  Contact Form
                </Link>
              </div>

              {/* Spec sheet */}
              {Array.isArray(product.specs) && product.specs.length > 0 && (
                <div className="mt-4 border border-rx-border">
                  <p className="border-b border-rx-border bg-rx-charcoal px-5 py-3 rx-tracking-wide text-[11px] font-semibold uppercase text-rx-muted">
                    Specifications
                  </p>
                  <dl>
                    {product.specs.map((spec, i) => (
                      <div
                        key={spec.label}
                        className={`flex items-center justify-between px-5 py-3 text-sm ${
                          i % 2 === 1 ? "bg-rx-charcoal/40" : ""
                        }`}
                      >
                        <dt className="text-rx-muted-2">{spec.label}</dt>
                        <dd className="font-medium text-rx-white">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-rx-charcoal py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-rx-white sm:text-3xl">
                More from the Range
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 90}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
