// app/services/page.tsx
"use client";

import { Sparkles, Brain, Globe } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      number: "01",
      title: "Web Experiences & Digital Products",
      description: "Fast, cinematic Next.js websites that feel alive. Personal brands, portfolios, landing pages, and immersive storytelling experiences.",
      tags: ["Next.js 16", "Tailwind", "Framer Motion", "SEO-first"],
      icon: Globe,
      gradient: "from-teal-400 to-cyan-500",
      bgGradient: "from-teal-900/20 to-cyan-900/10",
    },
    {
      number: "02",
      title: "Analytics & Executive Insights",
      description: "Power BI + SSRS dashboards that turn complex healthcare & business data into clear, actionable decisions. OHRS, CIHI, occupancy, patient flow.",
      tags: ["Power BI", "SSRS", "SQL Server", "PHIPA-compliant"],
      icon: Sparkles,
      gradient: "from-emerald-400 to-teal-600",
      bgGradient: "from-emerald-900/20 to-teal-900/10",
    },
    {
      number: "03",
      title: "Data Engineering & Intelligent Systems",
      description: "Private, local AI & RAG systems, data warehouses, and automation backends that run securely inside your organization.",
      tags: ["FastAPI", "Ollama", "Chroma", "Docker"],
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-900/20 to-pink-900/10",
    },
  ];

  return (
    <section className="min-h-screen py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-500 bg-clip-text text-transparent">
          Services
        </h1>
        <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          I build things that solve real problems — beautifully.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <article
            key={service.number}
            className="group relative"
          >
            {/* Subtle hover glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-600/20 to-emerald-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition duration-1000" />

            <div className="relative bg-gray-950/80 backdrop-blur-2xl border border-gray-800/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-gray-700 hover:shadow-2xl">
              {/* Elegant header visual */}
              <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${service.bgGradient}`}>
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <service.icon className="w-32 h-32" />
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className={`text-8xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent opacity-30`}>
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-xs font-medium bg-gray-900/70 border border-gray-800 rounded-full text-gray-300 transition hover:bg-gray-800/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-32">
        <p className="text-gray-400 text-lg">
          Ready to build something real?{" "}
          <a href="/contact" className="text-teal-400 hover:text-teal-300 underline decoration-dashed underline-offset-4 transition">
            Let's talk
          </a>
        </p>
      </div>

      {/* Gentle fade-in on load */}
      <style jsx global>{`
        article {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeUp 0.9s ease-out forwards;
        }
        article:nth-child(1) { animation-delay: 0.1s; }
        article:nth-child(2) { animation-delay: 0.3s; }
        article:nth-child(3) { animation-delay: 0.5s; }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}