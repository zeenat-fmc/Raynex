import { RayGlyph } from "./Rays";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={`flex flex-col gap-4 ${isCenter ? "items-center text-center" : "items-start text-left"}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 text-rx-blue-light">
          <RayGlyph className="h-3.5 w-6" />
          <span className="rx-tracking-wide text-xs font-semibold uppercase">{eyebrow}</span>
        </div>
      )}
      <h2
        className={`font-display max-w-2xl text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          tone === "light" ? "text-rx-white" : "text-rx-black"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`max-w-xl text-[15px] leading-relaxed ${tone === "light" ? "text-rx-muted" : "text-rx-muted-2"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
