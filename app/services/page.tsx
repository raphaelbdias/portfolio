import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import AnimatedBulletList from "../components/AnimatedBulletList";
import { serviceTiers } from "../components/portfolioData";

export default function ServicesPage() {
  return (
    <main className="section !pt-16 sm:!pt-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-[var(--accent)] transition hover:underline"
      >
        <ArrowLeft size={16} /> Back to home
      </Link>

      <header className="mt-8 max-w-3xl">
        <p className="section-kicker">Services</p>
        <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
          Analytics Services Built for Clearer Reporting and Better Decisions
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
          Structured packages for BI reporting, KPI design, and decision support,
          from focused dashboard builds to broader analytics implementation.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          Choose the package that matches your reporting maturity today, then
          scale as your needs become more complex.
        </p>
      </header>

      <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {serviceTiers.map((tier) => (
          <article key={tier.slug} className="card relative overflow-hidden">
            <div className="absolute right-0 top-0 h-1.5 w-full bg-[var(--accent)]/20" />
            <p className="inline-flex rounded-md bg-[var(--accent)] px-3 py-1.5 text-base font-semibold text-white shadow-sm">
              {tier.price}
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">
              {tier.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              {tier.focus}
            </p>

            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text)]">
                Includes
              </h3>
              <AnimatedBulletList items={tier.includes} />
            </div>

            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text)]">
                Best For
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{tier.bestFor}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-12 border-t border-[var(--border)] pt-8">
        <p className="text-sm text-[var(--muted)]">
          Not sure which package fits your scope?
        </p>
        <p className="mt-2 text-base text-[var(--text)]">
          Book a short discovery call and I will recommend the right tier based
          on your metrics, reporting cadence, and decision needs.
        </p>
      </section>
    </main>
  );
}
