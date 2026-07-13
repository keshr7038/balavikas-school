"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play, Eye } from "lucide-react";

// Gallery Items Data
const categories = ["All", "Campus", "Classroom", "Sports", "Cultural", "Annual Day"];

const galleryItems = [
  {
    id: 1,
    category: "Campus",
    title: "School Main Facade",
    src: "/images/gallery/campus-01.jpg",
    desc: "A wide view of the school building, playgrounds, and entrance lobby under warm morning sunlight.",
  },
  {
    id: 2,
    category: "Classroom",
    title: "Smart Lab Session",
    src: "/images/gallery/classroom-01.jpg",
    desc: "Students practicing mathematics exercises using interactive LED smartboard applications.",
  },
  {
    id: 3,
    category: "Sports",
    title: "Athletic Selection Trials",
    src: "/images/gallery/sports-01.jpg",
    desc: "Junior squad training sprint runs on our professional 200m track court fields.",
  },
  {
    id: 4,
    category: "Cultural",
    title: "Monsoon Science Fair",
    src: "/images/gallery/cultural-01.jpg",
    desc: "Student teams demonstrating working models of electronic circuits and hydraulic pumps.",
  },
  {
    id: 5,
    category: "Annual Day",
    title: "Annual Day Dance Play",
    src: "/images/gallery/annualday-01.jpg",
    desc: "Primary school students performing classical traditional dance at the open theater auditorium.",
  },
  {
    id: 6,
    category: "Campus",
    title: "Central Reference Library",
    src: "/images/campus/library-01.jpg",
    desc: "Over 8,000 reference logs and spacious reading desks providing quiet study environments.",
  },
  {
    id: 7,
    category: "Classroom",
    title: "Physics Lab Experiment",
    src: "/images/campus/lab-01.jpg",
    desc: "Secondary student teams verifying optical refraction indexes using glass prisms.",
  },
  {
    id: 8,
    category: "Sports",
    title: "Basketball Practice Match",
    src: "/images/sports/basketball-01.jpg",
    desc: "Inter-house junior selection trials at the synthetic outdoor basketball court.",
  },
];

const videos = [
  {
    id: 1,
    title: "Virtual Campus Tour walkthrough",
    duration: "4:15",
    thumbnail: "/images/gallery/campus-01.jpg",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
  },
  {
    id: 2,
    title: "Annual Day Highlights 2025",
    duration: "6:40",
    thumbnail: "/images/gallery/annualday-01.jpg",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (id: number) => {
    const idx = galleryItems.findIndex((item) => item.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <div className="py-12 space-y-24">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-6 text-center space-y-4 pt-8">
        <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
          Visual Memories
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-semibold text-anchor tracking-tight">
          School Photo Gallery
        </h1>
        <p className="font-sans text-lg text-anchor/70 max-w-2xl mx-auto">
          Capturing the learning currents, milestones, and vibrant school events.
        </p>
      </section>

      {/* 2. Masonry Grid & Filters */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-accent text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                  : "bg-canvas border border-surface text-anchor hover:bg-surface/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="bg-canvas border border-surface rounded-[24px] overflow-hidden shadow-navy hover:shadow-navy-hover transition-all duration-300 group flex flex-col cursor-pointer hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay view icon on hover */}
                <div className="absolute inset-0 bg-anchor/65 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-1 border-t border-surface/30">
                <span className="font-accent text-[9px] tracking-widest uppercase font-bold text-primary block">
                  {item.category}
                </span>
                <h3 className="font-display text-base font-bold text-anchor leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Small Video Gallery Sub-section */}
      <section className="bg-surface/10 py-20 px-6 border-y border-anchor/5 space-y-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-xl mx-auto">
            <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
              Videos
            </span>
            <h2 className="font-display text-3xl font-bold text-anchor">
              Video Presentations
            </h2>
            <p className="text-sm text-anchor/70">
              Watch snippets of our annual celebrations and virtual campus tours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videos.map((vid) => (
              <div
                key={vid.id}
                className="bg-canvas border border-surface rounded-[24px] overflow-hidden shadow-navy hover:shadow-navy-hover transition-all duration-300 group flex flex-col"
              >
                <div className="relative aspect-video">
                  <Image
                    src={vid.thumbnail}
                    alt={vid.title}
                    fill
                    className="object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-anchor/40 flex items-center justify-center">
                    <a
                      href={vid.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-primary hover:bg-primary/95 text-white flex items-center justify-center rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all"
                      aria-label="Play video"
                    >
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </a>
                  </div>
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-anchor/85 text-[10px] font-accent font-bold text-white rounded-full">
                    {vid.duration}
                  </span>
                </div>
                <div className="p-5 border-t border-surface/30">
                  <h3 className="font-display text-base font-bold text-anchor leading-snug">
                    {vid.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 md:p-8 cursor-zoom-out"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={showPrev}
            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors focus:outline-none"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl h-[70vh] flex flex-col items-center justify-center cursor-default"
          >
            <div className="relative w-full h-full">
              <Image
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
                fill
                className="object-contain"
              />
            </div>
            {/* Title / Description */}
            <div className="text-center text-white mt-6 space-y-1.5 max-w-2xl">
              <h3 className="font-display text-xl font-bold">
                {galleryItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {galleryItems[lightboxIndex].desc}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={showNext}
            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors focus:outline-none"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
