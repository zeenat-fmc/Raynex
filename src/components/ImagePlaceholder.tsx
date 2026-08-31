import Image from "next/image";
import { RayGlyph } from "./Rays";

type ImagePlaceholderProps = {
  /** Real image path, e.g. "/products/foo.jpg". Omit to render the placeholder. */
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  aspect?: "square" | "portrait" | "landscape" | "wide";
};

const aspectClass: Record<NonNullable<ImagePlaceholderProps["aspect"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
};

/**
 * Renders a real <Image> when `src` is provided. Otherwise renders a
 * clearly-marked placeholder so the client can drop in photography
 * later without touching layout code — just add a `src` in
 * lib/products.ts or wherever this is called.
 */
export default function ImagePlaceholder({
  src,
  alt,
  label,
  className = "",
  aspect = "landscape",
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${aspectClass[aspect]} ${className}`}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden border border-rx-border bg-gradient-to-br from-rx-charcoal-2 via-rx-charcoal to-rx-black ${aspectClass[aspect]} ${className}`}
      role="img"
      aria-label={alt}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-rx-blue/20 blur-2xl" />
        <div className="absolute -bottom-8 -right-4 h-28 w-28 rounded-full bg-rx-blue/10 blur-2xl" />
      </div>
      <RayGlyph className="relative h-6 w-10 text-rx-muted-2" />
      <span className="relative rx-tracking-wide text-[10px] uppercase text-rx-muted-2">
        {label ?? "Image Placeholder"}
      </span>
    </div>
  );
}
