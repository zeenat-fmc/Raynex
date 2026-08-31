import Image from "next/image";
import Link from "next/link";
import { contactDetails } from "@/lib/products";

const social = ["Facebook", "Instagram", "LinkedIn", "YouTube"];

export default function Footer() {
  return (
    <footer className="border-t border-rx-border bg-rx-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3" aria-label="RAYNEX home">
              <span className="relative h-9 w-9 overflow-hidden rounded-sm">
                <Image src="/brand/raynex-logo.jpg" alt="" fill className="object-cover" />
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight text-rx-white">
                RAYNEX
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-rx-muted">
              Illuminate Your World premium lighting and electrical
              products for everyday spaces.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="rx-tracking-wide text-xs font-semibold uppercase text-rx-white">Quick Links</p>
            <ul className="flex flex-col gap-2.5 text-sm text-rx-muted">
              <li><Link href="/" className="transition-colors hover:text-rx-white">Home</Link></li>
              <li><Link href="/products" className="transition-colors hover:text-rx-white">Products</Link></li>
              <li><Link href="/#brand" className="transition-colors hover:text-rx-white">About / Brand</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-rx-white">Contact</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="rx-tracking-wide text-xs font-semibold uppercase text-rx-white">Contact</p>
            <ul className="flex flex-col gap-2.5 text-sm text-rx-muted">
              {contactDetails.map((detail) => (
                <li key={detail.label}>
                  <span className="text-rx-muted-2">{detail.label}: </span>
                  {detail.value}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="rx-tracking-wide text-xs font-semibold uppercase text-rx-white">Follow Us</p>
            <ul className="flex flex-col gap-2.5 text-sm text-rx-muted">
              {social.map((s) => (
                <li key={s}>
                  <a href="#" className="transition-colors hover:text-rx-white">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rx-hairline mt-14" />
        <p className="mt-6 text-center text-xs text-rx-muted-2">
          &copy; {new Date().getFullYear()} RAYNEX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
