"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RayGlyph } from "./Rays";

type ProductCardCarouselProps = {
  images?: string[];
  image?: string;
  alt: string;
  productId: string;
  bordered?: boolean;
  className?: string;
};

const PLACEHOLDER_SLIDES: (string | undefined)[] = [
  undefined,
  undefined,
  undefined,
];

export default function ProductCardCarousel({
  images,
  image,
  alt,
  productId,
  bordered = true,
  className = "",
}: ProductCardCarouselProps) {
  const slides: (string | undefined)[] =
    images && images.length > 0
      ? images
      : image
        ? [image]
        : PLACEHOLDER_SLIDES;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-play
  useEffect(() => {
    if (slides.length <= 1 || paused) return;

    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 2600);

    return () => clearInterval(id);
  }, [slides.length, paused]);

  // Change image when dot is clicked
  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);

    setPaused(true);

    window.setTimeout(() => {
      setPaused(false);
    }, 3000);
  };

  return (
    <div
      className={`relative aspect-square overflow-hidden bg-rx-charcoal-2 ${
        bordered
          ? "border-b border-rx-border"
          : "border border-rx-border"
      } ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Product Images */}
      {slides.map((src, i) => (
        <Link
          key={i}
          href={`/products/${productId}`}
          aria-label={`View ${alt}`}
          className={`absolute inset-0 block cursor-pointer transition-opacity duration-700 ease-out ${
            i === index
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          {src ? (
            <Image
              src={src}
              alt={i === 0 ? alt : ""}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-rx-charcoal-2 via-rx-charcoal to-rx-black">
              <RayGlyph className="h-6 w-10 text-rx-muted-2" />

              <span className="rx-tracking-wide text-[10px] uppercase text-rx-muted-2">
                Product Image {i + 1}
              </span>
            </div>
          )}
        </Link>
      ))}

      {/* Clickable Dots */}
      {slides.length > 1 && (
        <div className="absolute inset-x-0 bottom-3 z-20 flex items-center justify-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                goToSlide(i);
              }}
              aria-label={`Go to product image ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                i === index
                  ? "w-5 bg-rx-blue-light"
                  : "w-1.5 bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}