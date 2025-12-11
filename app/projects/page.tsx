// app/projects/page.tsx
import { ArrowLeft, ExternalLink, Github, Download } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "VectorHealth - AI-Powered OHRS Assistant",
    company: "Personal Project",
    period: "2025",
    description:
      "An OHRS Assistant that helps Ontario hospitals, LTC homes, community health centers, and reporting teams interpret the OHRS Appendix A–D v12.0 standards with citation-backed answers.",
    stack: ["Python", "Ollama","FastAPI on backend", "TypeScript", "Next.js on frontend"],
    link: "https://github.com/raphaelbdias/VectorHealth",
  },
  {
    title: "Climate Risk & Facility Maintenance",
    company: "City of Hamilton • Mohawk College",
    period: "2024",
    description:
      "A simple, lightweight command-line weather app that shows current conditions and a 5-day forecast specifically for Hamilton, Ontario, Canada.",
    stack: ["Python", "Streamlit", "Predictive Analytics", "Climate Data"],
    link: "https://github.com/raphaelbdias/Weather-Hamilton",
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
          >
            <ArrowLeft className="w-5 h-5" /> Back to home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            All <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl text-foreground/70 mt-4">
            Real impact through data, automation, and visualization.
          </p>
        </div>

        {/* Download Resume Button */}
        <div className="mb-12">
          <a
            href="/Raphael-Dias-Resume.docx"
            download
            className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-primary text-background font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download Resume (PDF)
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="group rounded-2xl border border-primary/10 bg-background p-8 hover:border-primary/30 hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition">
                      {proj.title}
                    </h3>
                  </div>
                  <p className="text-foreground/60 text-sm mb-4">
                    {proj.company} • {proj.period}
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition mt-4 md:mt-0"
                  >
                    View Code <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {proj.stack.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
