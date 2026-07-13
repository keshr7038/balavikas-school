"use client";

import { BookOpen, GraduationCap, Award, CheckCircle2, FileText, Cpu, FlaskConical, LayoutGrid } from "lucide-react";

export default function Academics() {
  return (
    <div className="py-12 space-y-24">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-6 text-center space-y-4 pt-8">
        <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
          Academic Structure
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-semibold text-anchor tracking-tight">
          Academics & Curriculum
        </h1>
        <p className="font-sans text-lg text-anchor/70 max-w-2xl mx-auto">
          Delivering balanced, comprehensive learning pathways aligned with national standards.
        </p>
      </section>

      {/* 2. Board Affiliation Note */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-surface/50 border border-surface rounded-[24px] p-8 text-center space-y-4 shadow-sm">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full border border-primary/20">
            <Award className="w-4 h-4 text-primary" />
            <span className="font-accent text-xs tracking-wider uppercase font-bold text-anchor">
              Recognition & Affiliation
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-anchor">
            Recognized English-Medium High School
          </h2>
          <p className="text-sm md:text-base text-anchor/80 max-w-2xl mx-auto leading-relaxed">
            Balavikas E.M High School is fully recognized by the Directorate of School Education, Government of Andhra Pradesh. The curriculum strictly follows the State Board of Secondary Education (SSC) guidelines, with integrated preparatory modules for national CBSE patterns in science and math.
          </p>
        </div>
      </section>

      {/* 3. Curriculum by Level (Detailed Cards) */}
      <section className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Level 1: Pre-Primary */}
        <div id="pre-primary" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-surface pb-16">
          <div className="lg:col-span-5 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-primary">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-anchor">
              Pre-Primary
              <span className="block text-sm font-accent tracking-wider uppercase font-normal text-primary mt-1">
                Nursery, LKG, UKG
              </span>
            </h3>
            <p className="text-sm md:text-base text-anchor/80 leading-relaxed">
              Our pre-primary program concentrates on sensory development, language familiarity, numbers play, and creative expression in a welcoming environment.
            </p>
            <ul className="space-y-3 text-sm text-anchor/95 font-medium">
              {[
                "Phonics & oral vocabulary development",
                "Sensory play and color/shape recognition",
                "Basic motor skill exercises & drawing blocks",
                "Rhymes, storytelling, and early social manners",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 bg-surface/20 border border-surface rounded-[24px] p-8 space-y-6">
            <h4 className="font-accent text-xs tracking-wider uppercase font-bold text-anchor">
              Early Foundations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-canvas p-5 rounded-xl border border-surface/50">
                <h5 className="font-bold text-sm text-anchor mb-1">Creative Expression</h5>
                <p className="text-xs text-anchor/70 leading-relaxed">Clay modeling, finger painting, and paper crafting to nurture fine motor skills and creativity.</p>
              </div>
              <div className="bg-canvas p-5 rounded-xl border border-surface/50">
                <h5 className="font-bold text-sm text-anchor mb-1">Social Discovery</h5>
                <p className="text-xs text-anchor/70 leading-relaxed">Group games and cooperative activities designed to build sharing habits, empathy, and listening skills.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Level 2: Primary School */}
        <div id="primary" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-surface pb-16">
          <div className="lg:col-span-5 lg:order-2 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-primary">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-anchor">
              Primary School
              <span className="block text-sm font-accent tracking-wider uppercase font-normal text-primary mt-1">
                Classes I to V
              </span>
            </h3>
            <p className="text-sm md:text-base text-anchor/80 leading-relaxed">
              Our primary program concentrates on building a strong foundation in core language arts, computational arithmetic, and fundamental environmental sciences.
            </p>
            <ul className="space-y-3 text-sm text-anchor/95 font-medium">
              {[
                "Phonics & Language building (English, Telugu, Hindi)",
                "Activity-based Mathematical thinking & calculations",
                "Environmental studies & nature observations",
                "Introductory computer science & digital literacy",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 lg:order-1 bg-surface/20 border border-surface rounded-[24px] p-8 space-y-6">
            <h4 className="font-accent text-xs tracking-wider uppercase font-bold text-anchor">
              Learning Focus & Subjects
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-canvas p-5 rounded-xl border border-surface/50">
                <h5 className="font-bold text-sm text-anchor mb-1">Interactive Math</h5>
                <p className="text-xs text-anchor/70 leading-relaxed">Manipulatives, counting blocks, and basic geometry are used to build early cognitive skills.</p>
              </div>
              <div className="bg-canvas p-5 rounded-xl border border-surface/50">
                <h5 className="font-bold text-sm text-anchor mb-1">Language Enrichment</h5>
                <p className="text-xs text-anchor/70 leading-relaxed">Weekly storytelling classes, spelling bees, and reading lists to enrich communication.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Level 3: Secondary School */}
        <div id="secondary" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-primary">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-anchor">
              Secondary School
              <span className="block text-sm font-accent tracking-wider uppercase font-normal text-primary mt-1">
                Classes VI to X
              </span>
            </h3>
            <p className="text-sm md:text-base text-anchor/80 leading-relaxed">
              The secondary stage shifts emphasis toward disciplined scientific exploration, higher algebraic equations, and preparation for board examinations.
            </p>
            <ul className="space-y-3 text-sm text-anchor/95 font-medium">
              {[
                "Physical Sciences (Physics, Chemistry) & Biology",
                "Advanced Arithmetic & Geometry models",
                "Social Sciences (History, Civics, Geography, Economics)",
                "Computer Applications & Basic Coding",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 bg-surface/20 border border-surface rounded-[24px] p-8 space-y-6">
            <h4 className="font-accent text-xs tracking-wider uppercase font-bold text-anchor">
              Pre-Board Preparation
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-canvas p-5 rounded-xl border border-surface/50">
                <h5 className="font-bold text-sm text-anchor mb-1">Weekly Tests</h5>
                <p className="text-xs text-anchor/70 leading-relaxed">Regular assessment blocks that build testing speed, discipline, and help target weaknesses.</p>
              </div>
              <div className="bg-canvas p-5 rounded-xl border border-surface/50">
                <h5 className="font-bold text-sm text-anchor mb-1">Laboratory Practicals</h5>
                <p className="text-xs text-anchor/70 leading-relaxed">Weekly physics and chemistry practicals that map theoretical theorems to experiments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Teaching Approach */}
      <section className="bg-surface/30 border-y border-anchor/5 py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
              Our Pedagogy
            </span>
            <h2 className="font-display text-4xl font-semibold text-anchor">
              The Currents of Excellence Approach
            </h2>
            <p className="text-sm text-anchor/70">
              We move beyond traditional rote systems toward high-engagement pedagogies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-canvas border border-surface rounded-2xl p-6 text-center space-y-4">
              <div className="w-10 h-10 rounded-xl bg-surface/50 text-primary flex items-center justify-center mx-auto">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-accent text-sm tracking-wider uppercase font-bold text-anchor">Smart Classrooms</h4>
              <p className="text-xs text-anchor/85 leading-relaxed">Interactive LED modules, 3D structure visualization, and virtual labs that make science visual.</p>
            </div>

            <div className="bg-canvas border border-surface rounded-2xl p-6 text-center space-y-4">
              <div className="w-10 h-10 rounded-xl bg-surface/50 text-primary flex items-center justify-center mx-auto">
                <FlaskConical className="w-5 h-5" />
              </div>
              <h4 className="font-accent text-sm tracking-wider uppercase font-bold text-anchor">Activity-Based Learning</h4>
              <p className="text-xs text-anchor/85 leading-relaxed">Students create science exhibits, math crafts, and participate in historical debates to learn actively.</p>
            </div>

            <div className="bg-canvas border border-surface rounded-2xl p-6 text-center space-y-4">
              <div className="w-10 h-10 rounded-xl bg-surface/50 text-primary flex items-center justify-center mx-auto">
                <LayoutGrid className="w-5 h-5" />
              </div>
              <h4 className="font-accent text-sm tracking-wider uppercase font-bold text-anchor">Holistic Mentoring</h4>
              <p className="text-xs text-anchor/85 leading-relaxed">Personal development reviews, values discussions, public speaking development, and physical fitness tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Calendar Download CTA */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-anchor text-white rounded-[24px] p-8 md:p-12 text-center space-y-6 relative overflow-hidden shadow-lg">
          <div className="relative z-10 space-y-4">
            <h3 className="font-display text-3xl font-bold text-white">
              Stay Organized with Academic Tools
            </h3>
            <p className="text-surface/80 max-w-xl mx-auto text-sm">
              Download our detailed Academic Calendar for the session 2026-27 (June to April) specifying exam dates, vacations, and annual day events.
            </p>
            <div className="pt-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Academic Calendar PDF download started! (Placeholder)");
                }}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white text-xs md:text-sm font-bold font-accent rounded-full hover:bg-primary/95 transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-[1.02]"
              >
                <FileText className="w-4 h-4 mr-2" />
                DOWNLOAD ACADEMIC CALENDAR
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
