// app/gallery/page.tsx
"use client";

import Image from "next/image";
import { ArrowLeft, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Move metadata to a separate server component file (recommended) OR remove it completely
// Option 1: Create app/gallery/layout.tsx (recommended)
const photos = [
  { src: "/gallery/10.jpg", alt: "Analytics brainstorm session", year: "2023" },
  { src: "/gallery/8.jpg", alt: "Late night data analytics session", year: "2023" },
  { src: "/gallery/2.jpeg", alt: "Presenting at Mohawk College Hamilton", year: "2024" },
  { src: "/gallery/7.jpg", alt: "Best poster @ Mohawk HEAD Competition", year: "2023" },
  { src: "/gallery/12.jpg", alt: "My work station as a student data analyst @ Cambrian College", year: "2024" },
  { src: "/gallery/1.jpeg", alt: "Winning 3rd place at Côté Gold BlastCaptain Hackathon", year: "2024" },
  { src: "/gallery/3.jpg", alt: "Analytics Poster Exhibition - Representing Cambrian College", year: "2024" },
  { src: "/gallery/4.jpg", alt: "GDG Sudbury event - Laurentian University", year: "2024" },
  { src: "/gallery/5.jpg", alt: "GDG LLM Keynote event - Laurentian University", year: "2024" },
  { src: "/gallery/6.jpg", alt: "Delivering presentation at HEAD Competition - Hamilton", year: "2024" },
  { src: "/gallery/11.jpg", alt: "Côté Gold Open Pit Mine tour", year: "2025" },
  { src: "/gallery/9.jpg", alt: "Home office desksetup upgrade", year: "2025" },

];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="min-h-screen py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
            >
              <ArrowLeft className="w-5 h-5" /> Back to home
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Gallery <span className="text-primary">Highlights</span>
            </h1>
            <p className="text-xl text-foreground/70 mt-4">
              Click any photo to expand
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {photos.map((photo, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className="group relative block break-inside-avoid overflow-hidden rounded-2xl bg-foreground/5 shadow-lg hover:shadow-2xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-primary/50"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  className="w-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <p className="text-white font-medium text-lg">{photo.alt}</p>
                  <span className="text-primary text-sm font-medium">{photo.year}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-pointer"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={(e) => { e.stopPropagation(); setSelected(null); }}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition p-2 z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <Image
              src={photos[selected].src}
              alt={photos[selected].alt}
              width={1600}
              height={1200}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-2xl pointer-events-none">
              <p className="text-white text-xl font-medium">{photos[selected].alt}</p>
              <span className="text-primary text-lg">{photos[selected].year}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}