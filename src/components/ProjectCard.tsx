import type { Project } from "@/lib/products";
import ImagePlaceholder from "./ImagePlaceholder";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rx-beam-hover flex flex-col border border-rx-border bg-rx-charcoal transition-colors duration-300 hover:border-rx-blue/60">
      <ImagePlaceholder
        src={project.image}
        alt={project.name}
        label="Project Image"
        aspect="landscape"
        className="border-0 border-b border-rx-border transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rx-tracking-wide text-[11px] font-semibold uppercase text-rx-blue-light">
            {project.category}
          </span>
          <span className="text-[11px] text-rx-muted-2">{project.location}</span>
        </div>
        <h3 className="font-display text-lg font-bold text-rx-white">{project.name}</h3>
        <p className="text-sm leading-relaxed text-rx-muted">{project.description}</p>
      </div>
    </article>
  );
}
