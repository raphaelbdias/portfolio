// app/services/page.tsx
"use client";

import { Sparkles, Brain, Globe } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      number: "01",
      title: "Web Experiences & Digital Products",
      description: "Fast, cinematic Next.js websites that feel alive. Personal brands, portfolios, landing pages, and immersive storytelling experiences.",
      tags: ["Next.js 16", "Tailwind", "SEO-first", "Static Export"],
      icon: Globe,

      gradient: "from-teal-400 to-cyan-500",
    },
    {
      number: "02",
      title: "Analytics & Executive Insights",
      description: "Power BI + SSRS dashboards that turn complex healthcare & business data into clear, actionable decisions. OHRS, CIHI, occupancy, patient flow.",
      tags: ["Power BI", "SSRS", "SQL Server", "PHIPA-compliant"],
      icon: Sparkles,
      gradient: "from-emerald-400 to-teal-600",
    },
    {
      number: "03",
      title: "Data Engineering & Intelligent Systems",
      description: "Private, local AI & RAG systems, data warehouses, and automation backends that run securely inside your organization.",
      tags: ["FastAPI", "Ollama", "Chroma", "Docker"],
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="min-h-screen py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-500 bg-clip-text text-transparent">
          Services
        </h1>
        <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
          I build things that solve real problems — beautifully.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <article
            key={service.number}
            className="group relative opacity-0 translate-y-10 animate-fade-up"
            style={{ animationDelay: `${index * 200}ms`, animationFillMode: "forwards" }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-700" />
            <div className="relative bg-black/90 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden hover:border-teal-500/50 transition-all duration-500">
              
              {/* Visual Display */}
              <div className="h-64 relative overflow-hidden">
                {service.number === "01" && (
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-950/50 to-cyan-900/30">
                    <div className="grid grid-cols-4 gap-3 p-8 scale-90">
                      {[...Array(Array(16))].map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 opacity-80 animate-pulse"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {service.number === "02" && (
                  <div className="p-8 space-y-5">
                    {[88, 71, 95, 63].map((val, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <span className="text-emerald-400 font-mono text-sm w-12">{val}%</span>
                        <div className="flex-1 h-9 bg-gray-900 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 animate-fill"
                            style={{ animationDelay: `${i * 150}ms` }}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="absolute top-6 right-6 text-emerald-400/70 text-6xl font-bold">98%</div>
                  </div>
                )}
                {service.number === "03" && (
                  <div className="relative h-full flex items-center justify-center">
                    <div className="absolute w-40 h-40 border-4 border-purple-500/30 rounded-full animate-spin-slow" />
                    <div className="absolute w-32 h-32 border-4 border-pink-500/40 rounded-full animate-spin-reverse" />
                    <div className="absolute w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                      AI
                    </div>
                    <span className="absolute bottom-8 left-8 text-purple-300 font-mono text-sm">Local RAG Engine</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`text-6xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.number}
                  </span>
                  <service.icon className="w-10 h-10 text-teal-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-gray-900/80 border border-gray-700 rounded-full text-gray-300"
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

      <div className="text-center mt-24">
        <p className="text-gray-400 text-lg">
          Ready to build something real?{" "}
          <a href="/contact" className="text-teal-400 hover:text-teal-300 underline decoration-dashed">
            Let's talk
          </a>
        </p>
      </div>

      {/* Pure CSS animations — works perfectly with static export */}
      <style jsx global>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.9s ease-out forwards;
        }
        @keyframes fill {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-fill {
          animation: fill 1.6s ease-out forwards;
          width: 0;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 22s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-slow 18s linear infinite reverse;
        }
      `}</style>
    </section>
  );
}