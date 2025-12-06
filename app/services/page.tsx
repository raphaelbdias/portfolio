// app/services/page.tsx
import { Sparkles, Brain, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      number: "01",
      title: "Web Experiences & Digital Products",
      description: "Fast, cinematic Next.js websites that feel alive. Personal brands, portfolios, landing pages, and immersive storytelling experiences.",
      tags: ["Next.js 16", "Tailwind", "Framer Motion", "SEO-first"],
      icon: Globe,
      gradient: "from-teal-400 to-cyan-500",
      visual: (
        <div className="relative w-full h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-teal-950 to-cyan-900 p-1">
          <div className="w-full h-full rounded-xl bg-black/90 backdrop-blur-xl flex items-center justify-center">
            <div className="grid grid-cols-3 gap-3 scale-90">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500"
                />
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ),
    },
    {
      number: "02",
      title: "Analytics & Executive Insights",
      description: "Power BI + SSRS dashboards that turn complex healthcare & business data into clear, actionable decisions. OHRS, CIHI, occupancy, patient flow.",
      tags: ["Power BI", "SSRS", "SQL Server", "PHIPA-compliant"],
      icon: Sparkles,
      gradient: "from-emerald-400 to-teal-600",
      visual: (
        <div className="relative w-full h-64 rounded-2xl bg-black/80 backdrop-blur-xl border border-emerald-500/20 p-6 overflow-hidden">
          <div className="space-y-4">
            {[85, 62, 93, 41, 78].map((val, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="text-emerald-400 text-sm font-mono w-12">{val}%</div>
                <div className="flex-1 h-8 bg-gray-900 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${val}%` }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-emerald-400 to-teal-500"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-4 right-4 text-emerald-400/60 text-5xl font-bold">97.3</div>
        </div>
      ),
    },
    {
      number: "03",
      title: "Data Engineering & Intelligent Systems",
      description: "Private, local AI & RAG systems, data warehouses, and automation backends that run securely inside your organization.",
      tags: ["FastAPI", "Ollama", "Chroma", "Docker", "Multi-tenant"],
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      visual: (
        <div className="relative w-full h-64 rounded-2xl bg-black/90 backdrop-blur-xl border border-purple-500/30 p-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent" />
          <div className="flex h-full items-center justify-center">
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-32 h-32 border-4 border-purple-500/40 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 w-24 h-24 border-4 border-pink-500/50 rounded-full"
              />
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-3xl">
                AI
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 text-purple-300 font-mono text-sm">Local RAG Engine</div>
        </div>
      ),
    },
  ];

  return (
    <>
      <section className="min-h-screen py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-500 bg-clip-text text-transparent">
            Services
          </h1>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
            I build things that solve real problems — beautifully.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-700" />
              <div className="relative bg-black/90 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden hover:border-teal-500/50 transition-all duration-500">
                {/* Visual Display */}
                <div className="p-6 pb-0">{service.visual}</div>

                {/* Content */}
                <div className="p-8 pt-6">
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
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-24"
        >
          <p className="text-gray-400 text-lg">
            Ready to build something real?{" "}
            <a href="/contact" className="text-teal-400 hover:text-teal-300 underline decoration-dashed">
              Let's talk
            </a>
          </p>
        </motion.div>
      </section>
    </>
  );
}