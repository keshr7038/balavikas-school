"use client";

import { useState } from "react";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

// Announcements & News data
const events = [
  {
    id: 1,
    timeline: "upcoming",
    category: "Academic",
    day: "15",
    month: "JUL",
    year: "2026",
    title: "Parent-Teacher Interactive Meet",
    time: "09:30 AM - 01:00 PM",
    venue: "Main Auditorium",
    excerpt: "A collaborative review of Class I to X academic roadmap, student progress cards, and upcoming developmental metrics.",
  },
  {
    id: 2,
    timeline: "upcoming",
    category: "Sports",
    day: "28",
    month: "JUL",
    year: "2026",
    title: "Annual Sports Selection Trials",
    time: "07:30 AM - 11:30 AM",
    venue: "School Athletic Fields",
    excerpt: "Open selection trials for junior athletics, track events, and basketball team squads. Bring physical training kits.",
  },
  {
    id: 3,
    timeline: "upcoming",
    category: "Cultural",
    day: "12",
    month: "AUG",
    year: "2026",
    title: "Monsoon Science & Art Exhibition",
    time: "10:00 AM - 04:00 PM",
    venue: "Exhibition Halls",
    excerpt: "Displaying secondary student science models, chemistry experiments, and custom paintings designed in weekly arts sessions.",
  },
  {
    id: 4,
    timeline: "past",
    category: "Institutional",
    day: "05",
    month: "JUN",
    year: "2026",
    title: "World Environment Day Tree Planting",
    time: "08:00 AM",
    venue: "Campus Gardens",
    excerpt: "Students planted over 100 native saplings around the school perimeter, inaugurating the new campus drip irrigation layout.",
  },
  {
    id: 5,
    timeline: "past",
    category: "Academic",
    day: "18",
    month: "MAY",
    year: "2026",
    title: "SSC Class X Board Results Declaration",
    time: "11:00 AM",
    venue: "Admin Desk Board",
    excerpt: "Proudly announcing a 100% first-division pass rate for our SSC Class X board exams. Perfect scores rewarded at assembly.",
  },
  {
    id: 6,
    timeline: "past",
    category: "Sports",
    day: "10",
    month: "APR",
    year: "2026",
    title: "Inter-School Basketball Finals",
    time: "04:30 PM",
    venue: "Kakinada Sports Club",
    excerpt: "Balavikas junior squad won the overall city gold trophy over Kakinada educational units in a thrilling final match.",
  },
];

export default function News() {
  const [activeTimeline, setActiveTimeline] = useState<"upcoming" | "past">("upcoming");

  const filteredEvents = events.filter((e) => e.timeline === activeTimeline);

  return (
    <div className="py-12 space-y-24">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-6 text-center space-y-4 pt-8">
        <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
          Announcements
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-semibold text-anchor tracking-tight">
          News & Upcoming Events
        </h1>
        <p className="font-sans text-lg text-anchor/70 max-w-2xl mx-auto">
          Stay informed on academic cycles, school celebrations, and sports meets.
        </p>
      </section>

      {/* 2. Upcoming / Past Timeline Toggle */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Toggle buttons */}
        <div className="flex items-center justify-center">
          <div className="inline-flex bg-canvas border border-surface rounded-full p-1.5 shadow-sm">
            <button
              onClick={() => setActiveTimeline("upcoming")}
              className={`px-6 py-2.5 rounded-full font-accent text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTimeline === "upcoming"
                  ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                  : "text-anchor hover:text-primary"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTimeline("past")}
              className={`px-6 py-2.5 rounded-full font-accent text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTimeline === "past"
                  ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                  : "text-anchor hover:text-primary"
              }`}
            >
              Past Events & News
            </button>
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((item) => (
            <div
              key={item.id}
              className="bg-canvas border border-surface rounded-[24px] overflow-hidden shadow-navy hover:shadow-navy-hover transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
            >
              {/* Card Body */}
              <div className="p-8 flex-grow space-y-6">
                <div className="flex items-start justify-between">
                  {/* Category Pill */}
                  <span className="inline-block px-3 py-1 bg-surface text-anchor text-[10px] font-accent uppercase tracking-widest font-bold rounded-full">
                    {item.category}
                  </span>

                  {/* Date Badge */}
                  <div className="text-right border-l border-surface pl-3">
                    <span className="block text-2xl font-bold font-accent text-primary leading-none">
                      {item.day}
                    </span>
                    <span className="block text-[10px] font-accent text-anchor/55 uppercase tracking-widest font-bold mt-1">
                      {item.month} {item.year}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-xl font-bold text-anchor leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-anchor/80 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer: Metadata */}
              <div className="px-8 py-5 border-t border-surface/30 bg-surface/5 flex flex-col space-y-2 text-xs text-anchor/65 font-medium">
                <div className="flex items-center space-x-2">
                  <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{item.venue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
