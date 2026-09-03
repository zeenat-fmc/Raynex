"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/projects", label: "Projects" },
  // { href: "/gallery", label: "Gallery" },
  // { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-rx-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="rx-hairline absolute inset-x-0 bottom-0" />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
  href="/"
  className="flex items-center"
  aria-label="RAYNEX home"
>
  <Image
    src="/brand/raynex-logo.png"
    alt="RAYNEX"
    width={180}
    height={55}
    priority
    className="h-auto w-[150px] object-contain sm:w-[190px]"
  />
</Link>

        <ul className="hidden items-center gap-6 lg:flex lg:gap-7 xl:gap-9">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="rx-tracking-wide text-xs text-white font-semibold uppercase text-rx-muted transition-colors hover:text-rx-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rx-beam-hover items-center gap-2 border border-rx-blue bg-rx-blue px-5 py-2.5 text-xs font-semibold uppercase rx-tracking-wide text-rx-white transition-colors hover:bg-rx-blue-dark lg:inline-flex"
        >
          Contact Us
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-rx-border lg:hidden"
        >
          <span
            className={`h-px w-5 bg-rx-white transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span className={`h-px w-5 bg-rx-white transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
          <span
            className={`h-px w-5 bg-rx-white transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-rx-border bg-rx-black transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[26rem]" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-semibold uppercase rx-tracking-wide text-rx-muted transition-colors hover:text-rx-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center border border-rx-blue bg-rx-blue px-5 py-3 text-xs font-semibold uppercase rx-tracking-wide text-rx-white"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
