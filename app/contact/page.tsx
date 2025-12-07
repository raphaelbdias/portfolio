// app/contact/page.tsx
"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [state, handleSubmit] = useForm("xnnjrzqj");

  return (
    <div className="min-h-screen py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            ← Back to home
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Let's <span className="text-primary">Connect</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Currently open to collaborating on projects around data and software. Feel free to reach out for opportunities, questions, or just to say hi!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="order-2 md:order-1">
            {state.succeeded ? (
              <div className="rounded-2xl bg-background p-8 shadow-lg text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">Message sent — thank you!</h3>
                <p className="text-foreground/70">I'll reply within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-primary/20 focus:border-primary focus:outline-none transition"
                    placeholder="Your name"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-primary/20 focus:border-primary focus:outline-none transition"
                    placeholder="you@company.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-primary/20 focus:border-primary focus:outline-none transition resize-none"
                    placeholder="Hi Raphael, I'd love to chat about..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 rounded-xl bg-primary text-background font-medium hover:bg-primary/90 transition flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {state.submitting ? "Sending..." : <>Send Message <Send className="w-5 h-5" /></>}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="order-1 md:order-2 space-y-8">
            <div className="bg-foreground/5 rounded-3xl p-8 backdrop-blur-sm border border-primary/10">
              <h2 className="text-2xl font-bold mb-6">Reach me directly</h2>
              <div className="space-y-6">
                <a href="mailto:diasraphael31@gmail.com" className="flex items-center gap-4 text-foreground hover:text-primary transition group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition"><Mail className="w-6 h-6" /></div>
                  <div><p className="font-medium">Email</p><p className="text-foreground/70">diasraphael31@gmail.com</p></div>
                </a>
                <a href="https://www.linkedin.com/in/diasraphael" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition"><Linkedin className="w-6 h-6" /></div>
                  <div><p className="font-medium">LinkedIn</p><p className="text-foreground/70">linkedin.com/in/diasraphael</p></div>
                </a>
                <a href="https://www.github.com/raphaelbdias" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition"><Github className="w-6 h-6" /></div>
                  <div><p className="font-medium">GitHub</p><p className="text-foreground/70">github.com/raphaelbdias</p></div>
                </a>
                <div className="flex items-center gap-4 text-foreground">
                  <div className="p-3 rounded-full bg-primary/10"><MapPin className="w-6 h-6" /></div>
                  <div><p className="font-medium">Location</p><p className="text-foreground/70">Sudbury, Ontario • Canada</p></div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-primary/10">
                <p className="text-sm text-foreground/60">
                  Download resume → <a href="/Raphael-Dias-Resume.pdf" download className="ml-2 text-primary font-medium hover:underline">Raphael-Dias-Resume.pdf</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}