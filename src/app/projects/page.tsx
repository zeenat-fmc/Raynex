import type { Metadata } from "next";
import { projects } from "@/lib/products";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { RayField } from "@/components/Rays";

export const metadata: Metadata = {
  title: "Projects - RAYNEX",
  description: "A selection of spaces lit with RAYNEX lighting and electrical products.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-rx-border pt-40 pb-20 lg:pt-48 lg:pb-28">
        <RayField className="absolute inset-0 h-full w-full opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="rx-tracking-wide text-xs font-semibold uppercase text-rx-blue-light">
            Case Studies
          </p>
          <h1 className="font-display mt-4 max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-rx-white sm:text-5xl">
            Projects
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-rx-muted">
            A selection of spaces where RAYNEX products have been specified
            and installed, across residential, hospitality, retail, and
            commercial settings.
          </p>
        </div>
      </section>

      <section className="bg-rx-black py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 90}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
