"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { RayGlyph } from "./Rays";

type ProductCardCarouselProps = {
  images?: string[];
  image?: string;
  alt: string;
  /** Set false to drop the bottom hairline (used on the card grid, not needed on the full detail page). */
  bordered?: boolean;
  className?: string;
};

const PLACEHOLDER_SLIDES: (string | undefined)[] = [undefined, undefined, undefined];

export default function ProductCardCarousel({
  images,
  image,
  alt,
  bordered = true,
  className = "",
}: ProductCardCarouselProps) {
  const slides: (string | undefined)[] =
    images && images.length > 0 ? images : image ? [image] : PLACEHOLDER_SLIDES;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (slides.length <= 1 || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 2600);
    return () => clearInterval(id);
  }, [slides.length, paused]);

  return (
    <div
      className={`relative aspect-square overflow-hidden bg-rx-charcoal-2 ${
        bordered ? "border-b border-rx-border" : "border border-rx-border"
      } ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          {src ? (
            <Image src={src} alt={i === 0 ? alt : ""} fill className="object-cover" />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-rx-charcoal-2 via-rx-charcoal to-rx-black">
              <RayGlyph className="h-6 w-10 text-rx-muted-2" />
              <span className="rx-tracking-wide text-[10px] uppercase text-rx-muted-2">
                Product Image {i + 1}
              </span>
            </div>
          )}
        </div>
      ))}

      {slides.length > 1 && (
        <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-5 bg-rx-blue-light" : "w-1.5 bg-white/40"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      )}
    </div>
  );
}