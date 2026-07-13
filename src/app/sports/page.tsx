"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Trophy, ShieldCheck, Flame, Dumbbell, Award, Target } from "lucide-react";

// Sports Counter Component
function SportsCounter({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 1500;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center p-6 bg-canvas border border-surface rounded-2xl shadow-sm">
      <div className="font-accent text-4xl md:text-5xl font-bold text-primary tracking-tight">
        {count}
      </div>
      <div className="text-xs font-accent tracking-widest text-anchor/70 uppercase mt-2">
        {label}
      </div>
    </div>
  );
}

export default function Sports() {
  return (
    <div className="py-12 space-y-24">
      {/* 1. Section Hero Banner */}
      <section className="max-w-7xl mx-auto px-6 text-center space-y-4 pt-8">
        <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
          Athletics Program
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-semibold text-anchor tracking-tight">
          Sports & Physical Development
        </h1>
        <p className="font-sans text-lg text-anchor/70 max-w-2xl mx-auto">
          Nurturing active physical habits, discipline, and outstanding state-level athletic champions.
        </p>
      </section>

      {/* 2. Sports Stat Strip (District/State Wins) */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SportsCounter value={12} label="State Gold Medals" />
          <SportsCounter value={24} label="District Championships" />
          <SportsCounter value={8} label="National Selections" />
        </div>
      </section>

      {/* 3. Facilities Grid (Courts, Track, Yoga) */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
            Our Fields
          </span>
          <h2 className="font-display text-3xl font-bold text-anchor">
            Professional Athletic Facilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Running Track & Turf",
              desc: "A wide outdoor running zone and physical training grass lawn fields for football and athletics.",
              image: "/images/sports/track-01.jpg",
            },
            {
              title: "Synthetic Basketball Court",
              desc: "A custom-level professional synthetic court for inter-school matches and tactical coaching.",
              image: "/images/sports/basketball-01.jpg",
            },
            {
              title: "Yoga & Fitness Studio",
              desc: "A calm indoor studio dedicated to gymnastics, yoga postures, and physical breathing drills.",
              image: "/images/sports/yoga-01.jpg",
            },
          ].map((facility, idx) => (
            <div
              key={idx}
              className="bg-canvas border border-surface rounded-[24px] overflow-hidden shadow-navy hover:shadow-navy-hover transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-grow">
                <h3 className="font-display text-xl font-bold text-anchor">
                  {facility.title}
                </h3>
                <p className="text-xs md:text-sm text-anchor/80 leading-relaxed">
                  {facility.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Team Achievements per Sport (Trophy Cards) */}
      <section className="bg-surface/10 py-20 px-6 border-y border-anchor/5 space-y-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-xl mx-auto">
            <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
              Trophy Cabinet
            </span>
            <h2 className="font-display text-3xl font-bold text-anchor">
              Sport-by-Sport Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                sport: "Basketball Squad",
                trophies: 8,
                title: "District Gold Champions",
                desc: "Securing consecutive wins in the Under-17 inter-school basketball league championships.",
              },
              {
                sport: "Athletics & Relay Team",
                trophies: 12,
                title: "State Track Gold Trophies",
                desc: "Standout performances in the 100m, 200m sprints, and long-jump state athletic games.",
              },
              {
                sport: "Yoga & Gymnastics Team",
                trophies: 4,
                title: "District Overall Winners",
                desc: "Recognized for physical flexibility, posture holds, and rhythmic gymnastics medals.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-canvas border border-surface rounded-[24px] p-8 space-y-6 shadow-sm hover:shadow-navy-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-accent text-xs tracking-wider uppercase font-bold text-primary">
                      {card.sport}
                    </span>
                    <div className="flex items-center space-x-1.5 text-primary bg-surface/50 px-3 py-1 rounded-full">
                      <Trophy className="w-3.5 h-3.5" />
                      <span className="font-accent font-bold text-xs">{card.trophies}</span>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-anchor">
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-sm text-anchor/85 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Champions Spotlight Row */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
            Student Spotlight
          </span>
          <h2 className="font-display text-3xl font-bold text-anchor">
            Our Athlete Champions
          </h2>
          <p className="text-sm text-anchor/70">
            Celebrating students who excelled in state and national representations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              name: "P. Ritesh Kumar",
              grade: "Class X Candidate",
              achievement: "State Under-17 100m Dash Gold Medalist",
              desc: "Clocked a record 11.2 seconds in state sports games, qualifying for the national school games selection boards.",
              image: "/images/faculty/teacher-02.jpg", // placeholder generic face
            },
            {
              name: "S. Niharika",
              grade: "Class IX Candidate",
              achievement: "District Under-14 Gymnastics Overall Gold",
              desc: "Awarded high score marks in balancing beams and floor routines during the annual state gymnastics trials.",
              image: "/images/faculty/teacher-03.jpg", // placeholder generic face
            },
          ].map((champion, idx) => (
            <div
              key={idx}
              className="bg-canvas border border-surface rounded-[24px] p-6 shadow-navy flex flex-col sm:flex-row gap-6 items-center hover:shadow-navy-hover transition-all duration-300"
            >
              <div className="w-24 h-24 relative rounded-full overflow-hidden shrink-0 border-2 border-primary/20 shadow-sm">
                <Image
                  src={champion.image}
                  alt={champion.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <div>
                  <h3 className="font-display text-lg font-bold text-anchor">
                    {champion.name}
                  </h3>
                  <span className="text-[11px] font-accent text-anchor/50 block">
                    {champion.grade}
                  </span>
                </div>
                <div className="inline-block bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold font-accent uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {champion.achievement}
                </div>
                <p className="text-xs text-anchor/80 leading-relaxed">
                  {champion.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
