"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, GraduationCap, ChevronRight, Briefcase } from "lucide-react";

// Departments List
const departments = ["All", "Science & Tech", "Mathematics", "Languages", "Social Studies"];

// Faculty Data
const leaders = [
  {
    name: "Dr. Sunita Shastri",
    role: "Principal",
    degree: "Ph.D. in Education, M.Sc. Physics",
    image: "/images/faculty/principal.jpg",
    bio: "Over 22 years of educational leadership experience. Dedicated to shaping student intellect through values-based inquiry and research methodologies.",
  },
  {
    name: "Mr. Arvind Sharma",
    role: "Vice-Principal",
    degree: "M.A. English Literature, B.Ed.",
    image: "/images/faculty/vice-principal.jpg",
    bio: "Expert coordinator of Class X board curricula, managing academic structures, scheduling, and co-curricular programs for 15 years.",
  },
];

const teachers = [
  {
    name: "Mrs. K. Anuradha",
    subject: "Chemistry",
    dept: "Science & Tech",
    degree: "M.Sc. Chemistry, B.Ed.",
    image: "/images/faculty/teacher-01.jpg",
    bio: "Passionate about lab safety and visual molecular models that simplify organic compounds.",
  },
  {
    name: "Mr. D. Srinivasa Rao",
    subject: "Mathematics",
    dept: "Mathematics",
    degree: "M.Sc. Mathematics",
    image: "/images/faculty/teacher-02.jpg",
    bio: "Enjoys introducing activity-based algebraic geometry that helps remove math anxiety.",
  },
  {
    name: "Mrs. Sarah Thomas",
    subject: "English Literature",
    dept: "Languages",
    degree: "M.A. English, M.Ed.",
    image: "/images/faculty/teacher-03.jpg",
    bio: "Organizer of annual drama events, focused on developing public speaking and vocabulary skills.",
  },
  {
    name: "Mr. V. Krishna Murthy",
    subject: "Social Sciences",
    dept: "Social Studies",
    degree: "M.A. History, B.Ed.",
    image: "/images/faculty/teacher-04.jpg",
    bio: "Brings historical archives alive through mock parliament debates and visual mapping.",
  },
];

export default function Faculty() {
  const [activeDept, setActiveDept] = useState("All");

  const filteredTeachers = activeDept === "All"
    ? teachers
    : teachers.filter((t) => t.dept === activeDept);

  return (
    <div className="py-12 space-y-24">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-6 text-center space-y-4 pt-8">
        <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
          Our Team
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-semibold text-anchor tracking-tight">
          Leadership & Faculty
        </h1>
        <p className="font-sans text-lg text-anchor/70 max-w-2xl mx-auto">
          Meet the experienced mentors and educators dedicated to guiding our students' learning currents.
        </p>
      </section>

      {/* 2. School Leadership Section */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <h2 className="font-display text-3xl font-bold text-anchor text-center">
          School Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="bg-canvas border border-surface rounded-[24px] overflow-hidden shadow-navy p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 hover:shadow-navy-hover transition-all duration-300"
            >
              <div className="w-full md:w-44 h-56 relative rounded-2xl overflow-hidden shrink-0 shadow-sm">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 flex flex-col justify-center">
                <div>
                  <span className="font-accent text-xs tracking-wider uppercase font-bold text-primary block">
                    {leader.role}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-anchor mt-1">
                    {leader.name}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-xs text-anchor/60 mt-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>{leader.degree}</span>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-anchor/80 leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Faculty Grid with Department Filters */}
      <section className="bg-surface/10 py-20 px-6 border-y border-anchor/5 space-y-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-xl mx-auto">
            <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
              Mentors Grid
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-anchor">
              Our Academic Educators
            </h2>
            <p className="text-sm text-anchor/70">
              Filter mentors by core subject departments to learn about their background and bio.
            </p>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-5 py-2 rounded-full font-accent text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeDept === dept
                    ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                    : "bg-canvas border border-surface text-anchor hover:bg-surface/50"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Teachers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTeachers.map((teacher, idx) => (
              <div
                key={idx}
                className="bg-canvas border border-surface rounded-[24px] overflow-hidden shadow-navy hover:shadow-navy-hover transition-all duration-300 group flex flex-col h-full hover:-translate-y-1"
              >
                {/* Photo with Overlay on Hover */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover Bio overlay */}
                  <div className="absolute inset-0 bg-anchor/90 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs md:text-sm leading-relaxed italic">
                      "{teacher.bio}"
                    </p>
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-6 space-y-2.5 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="font-accent text-[10px] tracking-widest uppercase font-bold text-primary block">
                      {teacher.subject}
                    </span>
                    <h3 className="font-display text-lg font-bold text-anchor leading-snug mt-0.5">
                      {teacher.name}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[11px] text-anchor/55 pt-2 border-t border-surface/30">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{teacher.degree}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Join Our Team CTA */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-anchor text-white rounded-[24px] p-8 md:p-12 text-center space-y-6 relative overflow-hidden shadow-lg">
          <div className="relative z-10 space-y-4">
            <h3 className="font-display text-3xl font-bold text-white">
              Inspire the Next Generation
            </h3>
            <p className="text-surface/80 max-w-xl mx-auto text-sm">
              We are always looking for passionate, certified teachers and coaches to join our academic streams. Submit your CV details to our careers board.
            </p>
            <div className="pt-2">
              <a
                href="mailto:careers@balavikashighschool.edu.in"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white text-xs md:text-sm font-bold font-accent rounded-full hover:bg-primary/95 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-primary/20"
              >
                <Mail className="w-4 h-4 mr-2" />
                SEND CV TO CAREERS
              </a>
            </div>
          </div>
          {/* Subtle background circles */}
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-primary/10" />
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/10" />
        </div>
      </section>
    </div>
  );
}
