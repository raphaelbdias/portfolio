import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../components/portfolioData";

export default function ProjectsPage() {
  return (
    <main className="section !pt-16 sm:!pt-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-[var(--accent)] transition hover:underline"
      >
        <ArrowLeft size={16} /> Back to home
      </Link>

      <header className="mt-8 max-w-3xl">
        <p className="section-kicker">Projects</p>
        <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
          Selected analytics and reporting work
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
          Detailed case-study previews focused on problem framing, practical tooling,
          and decision-support outcomes.
        </p>
      </header>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}
