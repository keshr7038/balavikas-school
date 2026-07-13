"use client";

import { useState } from "react";
import { Award, Trophy, GraduationCap, School, Grid, CalendarDays, CheckCircle2 } from "lucide-react";

// Categories list
const categories = ["All", "Academic", "Sports", "Cultural", "Institutional"];

// Standout Features
const standoutAchievements = [
  {
    icon: GraduationCap,
    title: "National Merit Gold Medal",
    year: "2025",
    desc: "Awarded to our science exhibition model for outstanding innovative design under secondary projects.",
  },
  {
    icon: Trophy,
    title: "Overall District Athletics Cup",
    year: "2024",
    desc: "Secured first position overall in the under-17 district athletics meet for tennis and sprints.",
  },
  {
    icon: School,
    title: "Best Eco-Friendly Campus",
    year: "2023",
    desc: "Inaugurated by the forest ministry for water harvesting, solar arrays, and campus green setups.",
  },
];

// All achievements
const achievements = [
  {
    id: 1,
    category: "Academic",
    title: "10/10 GPA SSC Record",
    year: "2025",
    desc: "Over 18 candidates recorded a perfect 10/10 GPA in the State SSC public board examination.",
    icon: GraduationCap,
  },
  {
    id: 2,
    category: "Sports",
    title: "Under-17 State Tennis Gold",
    year: "2025",
    desc: "Student athlete secured individual singles gold trophy at the state junior school tennis cup.",
    icon: Trophy,
  },
  {
    id: 3,
    category: "Cultural",
    title: "State Art Exhibition Gold",
    year: "2024",
    desc: "Our canvas paintings got top rank in state secondary group displays.",
    icon: Award,
  },
  {
    id: 4,
    category: "Institutional",
    title: "25 Years Golden Jubilee",
    year: "2024",
    desc: "Celebrated 25 years of educational service in Kakinada, hosting over 1500 students.",
    icon: School,
  },
  {
    id: 5,
    category: "Academic",
    title: "National Science Olympiad",
    year: "2023",
    desc: "Two students placed in the top 100 ranks nationally, receiving educational scholarships.",
    icon: GraduationCap,
  },
  {
    id: 6,
    category: "Sports",
    title: "District Under-14 Basketball Gold",
    year: "2023",
    desc: "Girls basketball squad won the championship gold over Kakinada city school units.",
    icon: Trophy,
  },
];

export default function Awards() {
  const [activeTab, setActiveTab] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "timeline">("grid");

  const filteredAchievements = activeTab === "All"
    ? achievements
    : achievements.filter((item) => item.category === activeTab);

  // Group achievements by year for the timeline view
  const groupedByYear: { [key: string]: typeof achievements } = {};
  achievements.forEach((item) => {
    if (!groupedByYear[item.year]) {
      groupedByYear[item.year] = [];
    }
    groupedByYear[item.year].push(item);
  });
  const years = Object.keys(groupedByYear).sort((a, b) => b.localeCompare(a));

  return (
    <div className="py-12 space-y-24">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-6 text-center space-y-4 pt-8">
        <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
          Achievements
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-semibold text-anchor tracking-tight">
          Awards & Recognitions
        </h1>
        <p className="font-sans text-lg text-anchor/70 max-w-2xl mx-auto">
          Honoring the academic milestones, sports cups, and institutional gold medals achieved by our school.
        </p>
      </section>

      {/* 2. Standout Achievements Row */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <h2 className="font-display text-3xl font-bold text-anchor text-center">
          Featured Standouts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {standoutAchievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-canvas border border-surface rounded-[24px] p-8 shadow-navy relative overflow-hidden flex flex-col justify-between hover:shadow-navy-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-surface rounded-2xl text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-accent font-bold text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-anchor leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-anchor/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Filterable Grid & Toggle View */}
      <section className="bg-surface/10 py-20 px-6 border-y border-anchor/5 space-y-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header with View Mode Toggles */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary block">
                Cabinet List
              </span>
              <h2 className="font-display text-3xl font-semibold text-anchor">
                All Institutional Laurels
              </h2>
            </div>

            {/* Grid / Timeline Toggle Buttons */}
            <div className="flex items-center bg-canvas border border-surface rounded-full p-1.5 shadow-sm">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center space-x-2 px-5 py-2 rounded-full font-accent text-xs font-bold uppercase transition-all ${
                  viewMode === "grid"
                    ? "bg-primary text-white"
                    : "text-anchor hover:text-primary"
                }`}
              >
                <Grid className="w-4 h-4" />
                <span>Grid View</span>
              </button>
              <button
                onClick={() => setViewMode("timeline")}
                className={`flex items-center space-x-2 px-5 py-2 rounded-full font-accent text-xs font-bold uppercase transition-all ${
                  viewMode === "timeline"
                    ? "bg-primary text-white"
                    : "text-anchor hover:text-primary"
                }`}
              >
                <CalendarDays className="w-4 h-4" />
                <span>Timeline View</span>
              </button>
            </div>
          </div>

          {/* Grid View Code */}
          {viewMode === "grid" ? (
            <div className="space-y-8">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 border-b border-surface/30 pb-6">
                {categories.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2 rounded-full font-accent text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                        : "bg-canvas border border-surface text-anchor hover:bg-surface/50"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAchievements.map((item) => (
                  <div
                    key={item.id}
                    className="bg-canvas border border-surface rounded-[20px] p-6 shadow-navy hover:shadow-navy-hover transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="inline-block px-3 py-1 bg-surface text-anchor text-[10px] font-accent uppercase tracking-widest font-bold rounded-full">
                          {item.category}
                        </span>
                        <span className="font-accent text-xs text-anchor/50 font-bold">
                          {item.year}
                        </span>
                      </div>
                      <div className="flex space-x-4">
                        <div className="p-2 bg-surface/50 text-primary rounded-xl shrink-0 h-10 w-10 flex items-center justify-center">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-display text-base font-bold text-anchor">
                            {item.title}
                          </h3>
                          <p className="text-xs text-anchor/85 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Timeline View Code */
            <div className="max-w-3xl mx-auto relative border-l border-surface pl-8 space-y-16 py-4">
              {years.map((year) => (
                <div key={year} className="relative space-y-6">
                  {/* Year bubble marker */}
                  <div className="absolute -left-[53px] top-0 w-10 h-10 rounded-full bg-primary text-white font-accent font-bold text-xs flex items-center justify-center shadow-md">
                    {year}
                  </div>
                  <div className="pl-4 space-y-6">
                    {groupedByYear[year].map((item) => (
                      <div
                        key={item.id}
                        className="bg-canvas border border-surface rounded-2xl p-6 shadow-sm flex space-x-4 items-start"
                      >
                        <div className="p-2 bg-surface text-primary rounded-xl shrink-0">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <span className="inline-block text-[9px] font-accent uppercase tracking-wider text-primary font-bold">
                            {item.category}
                          </span>
                          <h4 className="font-display text-base font-bold text-anchor">
                            {item.title}
                          </h4>
                          <p className="text-xs text-anchor/80 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
