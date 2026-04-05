import type { ExperienceItem } from "./portfolioData";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
};

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <ol className="space-y-6 border-l border-[var(--border)] pl-5">
      {items.map((item) => (
        <li key={`${item.organization}-${item.period}`} className="relative">
          <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border border-[var(--border-strong)] bg-[var(--bg)]" />
          <div className="card space-y-3">
            <div>
              <h3 className="text-lg font-semibold text-[var(--text)]">{item.role}</h3>
              <p className="text-sm text-[var(--muted)]">
                {item.organization} | {item.location}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.08em] text-[var(--accent)]">
                {item.period}
              </p>
            </div>
            <ul className="space-y-2 text-sm leading-relaxed text-[var(--muted)]">
              {item.impact.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
