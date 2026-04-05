import Link from "next/link";

import type { ProjectItem } from "./portfolioData";

type ProjectCardProps = {
  project: ProjectItem;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-semibold tracking-tight text-[var(--text)]">
          {project.title}
        </h3>
        <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
          {project.context}
        </span>
      </div>

      <dl className="space-y-4 text-sm leading-relaxed text-[var(--muted)]">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text)]">
            Problem
          </dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text)]">
            Approach
          </dt>
          <dd>{project.approach}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text)]">
            Outcome
          </dt>
          <dd>{project.outcome}</dd>
        </div>
      </dl>

      <div className="flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-md bg-[var(--surface)] px-2.5 py-1 text-xs text-[var(--muted)]"
          >
            {tool}
          </span>
        ))}
      </div>

      {project.href ? (
        <Link
          href={project.href}
          className="inline-flex text-sm font-medium text-[var(--accent)] underline-offset-4 hover:underline"
        >
          View artifact
        </Link>
      ) : null}
    </article>
  );
}
