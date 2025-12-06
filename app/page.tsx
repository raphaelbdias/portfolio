// app/page.tsx
import Image from "next/image";
import Navbar from "./components/Navbar";
import { ArrowRight, MapPin, Calendar, Github, Linkedin } from "lucide-react";
import Link from "next/link";


const experiences = [
  {
    title: "Decision Support Analyst",
    company: "Health Sciences North – Decision Support & Reporting",
    logo: "./logos/hsn.png", // ← add logo path in public/logos/
    location: "Sudbury, ON • Ramsey Lake Health Centre",
    period: "Jul 2024 – Present",
    current: true,
    achievements: [
      "Lead enterprise analytics and Health System Funding Reform initiatives, delivering Ministry-compliant Power BI dashboards and SSRS reports that inform executive strategy and funding allocation.",
      "Design and automate end-to-end data pipelines, governance frameworks, and quality assurance processes across Meditech, CIHI, IntelliHEALTH, and NRS systems — reducing reporting cycles by 60%+",
      "Partner with clinical leadership and Ontario Health stakeholders to translate complex requirements into actionable insights on wait times, length of stay, service utilization, and performance metrics.",
    ],
  },
  {
    title: "Specialist, Program Performance Strategy",
    company: "Cambrian College",
    logo: "./logos/cambrian-college.svg",
    location: "Sudbury, ON",
    period: "Nov 2023 – Apr 2024",
    achievements: [
      "Reduced report generation time by 75% through algorithm optimization and Power BI remodeling",
      "Built scalable Flask + Streamlit dashboards for program evaluation and accreditation",
    ],
  },
  {
    title: "Research Assistant – Data Analytics",
    company: "Sofvie Inc.",
	  logo: "./logos/sofvie.svg",
    location: "Sudbury, Canada",
    period: "May 2023 – Aug 2023",
    achievements: ["Developed live KPI dashboards for mining safety and health compliance"],
  },
  {
    title: "Software Developer",
    company: "NorthStarDoc",
    location: "Remote, USA",
    period: "Jun 2022 – Aug 2022",
    achievements: ["Implemented Selenium-based automation to streamline profile creation while overseeing multi-region facility data migration, boosting conversions through referral data insights."],
  },
  {
    title: "Social Listening Analyst",
    company: "iDeas Unlimited",
	logo: "./logos/ideasunlimited-Logo.png",
    location: "Remote, UAE",
    period: "May 2021 – Jun 2022",
    achievements: ["Led advanced NLP initiatives for qualitative insights and introduced a Twitter pipeline for ongoing social media data analysis"],
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO – Ultra Modern & Mobile-First */}
      <section className="relative min-h-screen pt-20 sm:pt-24 flex items-center justify-center px-6 sm:px-8 lg:px-12 overflow-hidden">
        {/* Animated gradient blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-30%] left-[-30%] w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-20%] w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="relative z-20 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight break-words">
              <span className="block">Raphael</span>
              <span className="block text-primary">Dias</span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-light text-foreground/80">
              Data Analytics & Automation Specialist
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-primary text-background font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
              >
                Explore My Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-5 rounded-2xl border-2 border-primary text-primary font-medium hover:bg-primary hover:text-background transition-all"
              >
                Let’s Talk
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-8 text-foreground/70">
              <div className="flex gap-6">
                <a href="https://linkedin.com/in/diasraphael" target="_blank" className="hover:text-primary transition">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://github.com/raphaelbdias" target="_blank" className="hover:text-primary transition">
                  <Github className="w-7 h-7" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Sudbury, Ontario</span>
              </div>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="relative flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              <div className="w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] rounded-full overflow-hidden ring-8 ring-primary/20 shadow-2xl transition-all group-hover:ring-primary/40">
                <Image
                  src="./raphael.jpeg"
                  alt="Raphael Dias"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover object-center brightness-95 contrast-105 transition-all duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="py-20 sm:py-24 px-6 sm:px-8 lg:px-12 bg-foreground/5 scroll-mt-24 sm:scroll-mt-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="space-y-12">
            {experiences.map((job) => (
              <div key={job.company} className="group relative pl-10 border-l-4 border-primary/30 hover:border-primary transition-all">
                <div className="absolute -left-5 top-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  {job.current && <div className="w-5 h-5 bg-background rounded-full animate-pulse" />}
                </div>

                <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
                  <div className="flex items-start gap-4">
                    {job.logo ? (
                      <div className="w-12 h-12 flex-shrink-0 rounded-full bg-background/30 p-1 flex items-center justify-center overflow-hidden">
                        <Image
                          src={job.logo}
                          alt={`${job.company} logo`}
                          width={48}
                          height={48}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-foreground">
                        {job.company
                          .split(" ")
                          .map((w) => w[0])
                          .slice(0, 2)
                          .join("")
                          .toUpperCase()}
                      </div>
                    )}

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-foreground/70 mt-2 text-sm sm:text-base">
                        <span className="font-medium">{job.company}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {job.period}</span>
                        {job.current && <span className="text-primary font-medium bg-primary/10 px-3 py-1 rounded-full text-sm">Current</span>}
                      </div>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3 text-foreground/80">
                    {job.achievements.map((ach, i) => (
                      <li key={i} className="flex gap-3">
                        <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

			{/* Featured Projects */}
			<section id="projects" className="py-24 px-6 scroll-mt-24 sm:scroll-mt-28">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
						Featured <span className="text-primary">Projects</span>
					</h2>

					<div className="grid md:grid-cols-2 gap-8">
						{/* BlastCaptain Hackathon */}
						<div className="group rounded-2xl bg-background border border-primary/10 p-8 hover:border-primary/30 transition-all hover:shadow-2xl">
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-2xl font-bold">
									BlastCaptain – Mine Blast Analytics
								</h3>
								<span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
									3rd Place • Hackathon
								</span>
							</div>
							<p className="text-foreground/70 mb-6">
								Built a real-time computer vision pipeline using Python + OpenCV to
								extract blast metrics (timing, rock movement, gas emission) from
								mine-site videos for IAMGOLD Côté Gold.
							</p>
							<div className="flex flex-wrap gap-2">
								{["Python", "OpenCV", "Computer Vision", "Real-time"].map((tag) => (
									<span
										key={tag}
										className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full"
									>
										{tag}
									</span>
								))}
							</div>
						</div>

						{/* City of Hamilton Facility Maintenance */}
						<div className="group rounded-2xl bg-background border border-primary/10 p-8 hover:border-primary/30 transition-all hover:shadow-2xl">
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-2xl font-bold">
									Climate Risk Facility Dashboard
								</h3>
								<span className="text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full">
									Mohawk College
								</span>
							</div>
							<p className="text-foreground/70 mb-6">
								Developed a predictive dashboard that assesses facility vulnerability
								to extreme weather using FCI and real-time forecasts — helping
								prioritize maintenance under climate change.
							</p>
							<div className="flex flex-wrap gap-2">
								{["Power BI", "Predictive Analytics", "Climate Data", "Streamlit"].map(
									(tag) => (
										<span
											key={tag}
											className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
										>
											{tag}
										</span>
									)
								)}
							</div>
						</div>
					</div>

					<div className="text-center mt-12">
						<a
							href="/projects"
							className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition"
						>
							View All Projects <ArrowRight className="w-5 h-5" />
						</a>
					</div>
				</div>
			</section>

			{/* Tech Stack */}
			<section className="py-20 px-6 bg-foreground/5 scroll-mt-24 sm:scroll-mt-28">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-10">Tech Stack & Tools</h2>
					<div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-foreground/70">
						{[
							"Python",
							"SQL",
							"Power BI",
							"Tableau",
							"Pandas",
							"Flask",
							"Git",
							"PostgreSQL",
							"TensorFlow",
							"Streamlit",
							"Excel",
							"Agile",
						].map((skill) => (
							<div
								key={skill}
								className="bg-background/50 border border-primary/10 rounded-xl py-4 hover:border-primary/30 transition"
							>
								{skill}
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}