import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github, Linkedin, Mail } from "lucide-react";

import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectCard from "./components/ProjectCard";
import TopNav from "./components/TopNav";
import AnimatedBulletList from "./components/AnimatedBulletList";
import {
  education,
  experiences,
  highlights,
  profile,
  projects,
  serviceTiers,
  skillGroups,
} from "./components/portfolioData";

export default function Home() {
  return (
    <main id="top">
      <TopNav />

      <section className="section !pt-16 sm:!pt-24">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_220px]">
          <div className="max-w-3xl space-y-8">
            <p className="section-kicker">Data Analytics Portfolio</p>
            <h1 className="text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-6xl">
              {profile.name}
            </h1>
            <p className="text-sm uppercase tracking-[0.09em] text-[var(--accent)]">
              {profile.role} | {profile.location}
            </p>
            <p className="max-w-2xl text-lg text-[var(--muted)] sm:text-xl">
              {profile.heroStatement}
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)]">
              {profile.heroSubtext}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                View Services <ArrowRight size={16} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center rounded-md border border-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--accent)] transition hover:bg-[var(--surface)]"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[220px] lg:mx-0">
            <div className="card !p-3">
              <Image
                src="/raphael.jpeg"
                alt="Portrait of Raphael Dias"
                width={420}
                height={520}
                priority
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section border-t border-[var(--border)]">
        <p className="section-kicker">About</p>
        <h2 className="section-title">Applied analytics with operational context</h2>
        {/* Update this copy in app/components/portfolioData.ts as your story evolves. */}
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted)]">
          {profile.about}
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {highlights.map((highlight) => (
            <article key={highlight.title} className="card">
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text)]">
                {highlight.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {highlight.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section border-t border-[var(--border)]">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Recent roles and measurable scope</h2>
        {/* Update experience entries in app/components/portfolioData.ts */}
        <div className="mt-8">
          <ExperienceTimeline items={experiences} />
        </div>
      </section>

      <section id="projects" className="section border-t border-[var(--border)]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-kicker">Selected Projects</p>
            <h2 className="section-title">Case-study snapshots</h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)]"
          >
            View detailed project page <ExternalLink size={15} />
          </Link>
        </div>
        {/* Update project entries in app/components/portfolioData.ts */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="services" className="section border-t border-[var(--border)]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-kicker">Services</p>
            <h2 className="section-title">Tiered packages</h2>
          </div>
          <Link href="/services" className="text-sm font-medium text-[var(--accent)]">
            View service details
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {serviceTiers.map((tier) => (
            <article key={tier.slug} className="card">
              <p className="inline-flex rounded-md bg-[var(--accent)] px-3 py-1.5 text-sm font-semibold text-white">
                {tier.price}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-[var(--text)]">
                {tier.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {tier.focus}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section border-t border-[var(--border)]">
        <p className="section-kicker">Skills / Toolkit</p>
        <h2 className="section-title">Structured by function</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.name} className="card">
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text)]">
                {group.name}
              </h3>
              <AnimatedBulletList items={group.items} className="!mt-4" />
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section border-t border-[var(--border)]">
        <p className="section-kicker">Education / Certifications</p>
        <h2 className="section-title">Foundations relevant to current work</h2>
        <div className="mt-8 space-y-4">
          {education.map((item) => (
            <article key={item.title} className="card">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-[var(--muted)]">{item.institution}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section border-t border-[var(--border)] !pb-14">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Open to collaboration and professional networking</h2>
        {/* Update links in app/components/portfolioData.ts */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <a href={`mailto:${profile.email}`} className="card flex items-center gap-2 text-sm">
            <Mail size={16} /> {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex items-center gap-2 text-sm"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex items-center gap-2 text-sm"
          >
            <Github size={16} /> GitHub
          </a>
          <Link href={profile.resumeHref} className="card flex items-center gap-2 text-sm">
            Resume Download
          </Link>
        </div>
      </section>
    </main>
  );
}
