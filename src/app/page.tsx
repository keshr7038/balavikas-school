"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Award,
  Calendar,
  Users,
  Flame,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

// Counter Component for Stat Strip
function StatCounter({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
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
    <div ref={ref} className="text-center p-4">
      <div className="font-accent text-3xl md:text-5xl font-bold text-anchor tracking-tight">
        {count}
        {suffix}
      </div>
      <div className="text-xs md:text-sm font-accent tracking-widest text-anchor/60 uppercase mt-1">
        {label}
      </div>
    </div>
  );
}

// Testimonials Data
const testimonials = [
  {
    quote: "Balavikas E.M High School has been transformative for my children. The teachers are supportive, and the academic focus combined with sports has helped them build immense confidence.",
    author: "Dr. Srinivas Rao",
    role: "Parent of Class X & VIII Students",
  },
  {
    quote: "The emphasis on hands-on science education and digital labs sets Balavikas apart. My daughter has developed a genuine love for mathematics and research here.",
    author: "Mrs. Lakshmi Priya",
    role: "Software Engineer & Parent",
  },
  {
    quote: "I am deeply impressed by the school's sports coaches and state-level training. The discipline and teamwork they teach help in overall character development.",
    author: "Mr. Rajesh Kumar",
    role: "Sports Enthusiast & Parent",
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Stagger variants for hero
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION WITH SIGNATURE FLUID BACKDROP */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-6 overflow-hidden">
        {/* Ambient video backdrop */}
        <div className="absolute inset-0 z-0 bg-canvas">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply pointer-events-none"
          >
            <source src="/images/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Blurred overlays for fluid drift simulation overlaying the video for a premium aesthetic */}
          <div className="absolute top-1/4 left-1/4 w-[50%] h-[50%] bg-surface/30 rounded-full filter blur-[100px] animate-drift-1 pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] bg-primary/10 rounded-full filter blur-[120px] animate-drift-2 pointer-events-none" />
          {/* Subtle tint to make text extremely legible */}
          <div className="absolute inset-0 bg-canvas/20 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-surface/60 border border-primary/20 px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="font-accent text-xs tracking-wider uppercase font-bold text-anchor">
              Admissions Open 2026-27
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl font-semibold text-anchor leading-[1.05] tracking-tight max-w-3xl mx-auto"
          >
            Currents of Learning, <br />
            <span className="text-primary italic">Deep & Clear</span>.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-sans text-lg md:text-xl text-anchor/80 max-w-2xl mx-auto leading-relaxed"
          >
            At Balavikas E.M High School, knowledge flows like a continuous current, guiding students toward intellectual clarity, strength, and resilience.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/admissions"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-sm font-bold font-accent rounded-full transition-all duration-300 hover:bg-primary/95 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
            >
              Apply for Admission
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-anchor/20 text-anchor text-sm font-bold font-accent rounded-full bg-white/10 hover:bg-white/40 hover:border-anchor/40 transition-all duration-300"
            >
              Explore Campus Tour
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Cue */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1 opacity-70">
          <span className="font-accent text-[10px] tracking-[0.2em] uppercase font-bold text-anchor">Scroll</span>
          <div className="w-1 h-8 rounded-full bg-anchor/20 relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-3 rounded-full bg-primary absolute top-0"
            />
          </div>
        </div>
      </section>

      {/* 2. STAT STRIP */}
      <section className="bg-surface py-8 border-y border-anchor/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-anchor/10">
          <StatCounter value={25} label="Years of Excellence" suffix="+" />
          <StatCounter value={1500} label="Students Enrolled" suffix="+" />
          <StatCounter value={98} label="Board Success Rate" suffix="%" />
        </div>
      </section>

      {/* 3. ABOUT TEASER */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-video lg:aspect-[4/3] rounded-[24px] overflow-hidden shadow-navy">
              <Image
                src="/images/campus/campus-01.jpg"
                alt="Balavikas School Campus"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Design detail - solid background shape shifting behind */}
            <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full border-2 border-primary/20 rounded-[24px]" />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
              Our Philosophy
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-anchor leading-[1.1]">
              Rooted in Values, <br />
              <span className="italic font-medium">Forward-Looking Education.</span>
            </h2>
            <p className="text-anchor/85 leading-relaxed">
              Founded in 1999, Balavikas E.M. High School has grown into Kakinada's premier educational beacon. We believe that learning shouldn't be a rigid container, but a living current that adapts, empowers, and directs students toward achieving their full potential.
            </p>
            <p className="text-anchor/80 text-sm">
              We offer a rich synthesis of technology-enhanced classrooms, advanced research labs, and state-level athletic training fields. Our pedagogy builds critical thinkers who are socially responsible global citizens.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center text-primary font-bold text-sm tracking-wider uppercase group"
              >
                Read Our Story
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACADEMICS PREVIEW */}
      <section className="py-24 px-6 bg-surface/30 border-y border-anchor/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
              Curriculum Levels
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-anchor">
              Structured Paths for Every Stage
            </h2>
            <p className="text-anchor/80">
              From pre-primary nursery stages to 10th standard board preparation, our curriculum is designed to stimulate curiosity and build core disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pre-Primary */}
            <div className="bg-canvas border border-surface/50 rounded-[24px] p-8 shadow-navy hover:shadow-navy-hover transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-anchor mb-3">Pre-Primary</h3>
              <p className="text-sm text-anchor/80 leading-relaxed mb-6">
                Nursery, LKG, UKG. Focusing on sensory coordination, vocabulary play, basic arithmetic shapes, and interactive creative expression.
              </p>
              <Link href="/academics#pre-primary" className="inline-flex items-center text-sm font-bold text-primary group-hover:text-primary/80">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Primary */}
            <div className="bg-canvas border border-surface/50 rounded-[24px] p-8 shadow-navy hover:shadow-navy-hover transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-anchor mb-3">Primary School</h3>
              <p className="text-sm text-anchor/80 leading-relaxed mb-6">
                Classes I to V. Focusing on language fundamentals, cognitive reasoning, basic mathematical operations, and values-based character building.
              </p>
              <Link href="/academics#primary" className="inline-flex items-center text-sm font-bold text-primary group-hover:text-primary/80">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Secondary */}
            <div className="bg-canvas border border-surface/50 rounded-[24px] p-8 shadow-navy hover:shadow-navy-hover transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-anchor mb-3">Secondary School</h3>
              <p className="text-sm text-anchor/80 leading-relaxed mb-6">
                Classes VI to X. Transitioning into analytical sciences, advanced mathematics, social studies, and preparatory board exam patterns.
              </p>
              <Link href="/academics#secondary" className="inline-flex items-center text-sm font-bold text-primary group-hover:text-primary/80">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY BALAVIKAS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
              Why Balavikas
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-anchor">
              Setting the Gold Standard in Growth
            </h2>
          </div>
          <p className="text-anchor/80 max-w-md">
            Our institutional framework focuses on deep integration of academic theories, physical health, and emotional stability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Flame,
              title: "Modern Classrooms",
              desc: "Fully equipped digital learning smartboards that render complex structures visually interactive.",
            },
            {
              icon: ShieldCheck,
              title: "Advanced Science Labs",
              desc: "Dedicated chemical, physical, and digital computational labs fostering research mindset.",
            },
            {
              icon: Users,
              title: "Elite Mentors",
              desc: "Certified, experienced educational professionals passionate about tutoring and shaping young mindsets.",
            },
            {
              icon: Award,
              title: "State Sports Program",
              desc: "Professional training grounds with state-level coaches for tennis, athletics, gymnastics, and basketball.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-canvas border border-surface rounded-[20px] p-6 shadow-navy hover:shadow-navy-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-surface/50 text-primary flex items-center justify-center mb-5">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-accent text-sm tracking-wider uppercase font-bold text-anchor mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-anchor/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GALLERY PREVIEW */}
      <section className="py-24 px-6 bg-anchor text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
                Visual Tour
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">
                Life at Balavikas
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center text-primary hover:text-primary/80 font-bold text-sm tracking-wider uppercase group"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: "/images/gallery/campus-01.jpg", title: "Campus Grounds" },
              { src: "/images/gallery/classroom-01.jpg", title: "Smart Classroom" },
              { src: "/images/gallery/sports-01.jpg", title: "Athletic Arena" },
              { src: "/images/gallery/cultural-01.jpg", title: "Cultural Exhibition" },
            ].map((img, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/10"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-anchor via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-4 left-4">
                  <p className="font-accent text-xs tracking-wider uppercase font-bold text-white">
                    {img.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ACHIEVEMENTS SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
            Achievements
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-anchor">
            Honoring Outstanding Milestones
          </h2>
          <p className="text-anchor/80 text-sm">
            Our students consistently reach standout performance milestones across state board examinations, cultural arenas, and athletic events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              metric: "100%",
              title: "State SSC Pass Rate",
              desc: "Securing 100% first-division marks for consecutive academic years in board finals.",
            },
            {
              metric: "24+",
              title: "District Sports Trophies",
              desc: "Winners and gold medal champions in regional basketball, athletics, and gymnastics tournaments.",
            },
            {
              metric: "15+",
              title: "National Science Awards",
              desc: "STANDOUT models designed by science teams recognized under national educational grants.",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-canvas border border-surface rounded-[24px] p-8 text-center space-y-4 hover:shadow-navy hover:-translate-y-1 transition-all duration-300"
            >
              <div className="font-display text-5xl font-bold text-primary italic">
                {stat.metric}
              </div>
              <h3 className="font-accent text-sm tracking-wider uppercase font-bold text-anchor">
                {stat.title}
              </h3>
              <p className="text-xs text-anchor/85 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TESTIMONIALS CAROUSEL */}
      <section className="py-24 px-6 bg-surface/30 border-y border-anchor/5">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-anchor">
            What Parents Say
          </h2>

          <div className="relative min-h-[220px] flex items-center justify-center px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <p className="font-display text-xl md:text-2xl font-medium italic text-anchor leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div>
                  <h4 className="font-accent text-sm tracking-wider uppercase font-bold text-anchor">
                    {testimonials[currentTestimonial].author}
                  </h4>
                  <p className="text-xs text-anchor/60">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-full border border-anchor/20 hover:border-anchor hover:bg-canvas transition-colors focus-visible-primary"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-anchor" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentTestimonial ? "bg-primary w-6" : "bg-anchor/20"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-full border border-anchor/20 hover:border-anchor hover:bg-canvas transition-colors focus-visible-primary"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5 text-anchor" />
            </button>
          </div>
        </div>
      </section>

      {/* 9. UPCOMING EVENTS */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
              Updates
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-anchor">
              Upcoming Events & News
            </h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center text-primary font-bold text-sm tracking-wider uppercase group"
          >
            All Announcements
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              day: "15",
              month: "JUL",
              tag: "Academics",
              title: "Parent-Teacher Interactive Meet",
              desc: "A collaborative review of Class I to X academic roadmap and developmental metrics.",
            },
            {
              day: "28",
              month: "JUL",
              tag: "Sports",
              title: "Annual Sports Selection Trials",
              desc: "Open trials for selecting elite track athletes and junior basketball squad candidates.",
            },
            {
              day: "12",
              month: "AUG",
              tag: "Cultural",
              title: "Monsoon Science & Art Exhibition",
              desc: "A display of working science models, chemistry experiments, and custom canvases designed by students.",
            },
          ].map((event, idx) => (
            <div
              key={idx}
              className="bg-canvas border border-surface rounded-[24px] overflow-hidden shadow-navy hover:shadow-navy-hover hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-6 space-y-4 flex-grow">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-surface text-anchor text-[10px] font-accent uppercase tracking-widest font-bold rounded-full">
                    {event.tag}
                  </span>
                  <div className="text-right">
                    <span className="block text-xl font-bold font-accent text-primary leading-none">
                      {event.day}
                    </span>
                    <span className="block text-[10px] font-accent text-anchor/50 uppercase tracking-widest leading-none">
                      {event.month}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-anchor leading-snug">
                  {event.title}
                </h3>
                <p className="text-xs text-anchor/80 leading-relaxed">
                  {event.desc}
                </p>
              </div>
              <div className="p-6 border-t border-surface/30">
                <Link
                  href="/news"
                  className="inline-flex items-center text-xs font-bold text-primary group"
                >
                  Event Details
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. ADMISSIONS CTA BAND */}
      <section className="bg-anchor text-white py-24 px-6 relative overflow-hidden">
        {/* Background wave shape */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
            <path d="M0,96C288,160,576,192,864,160C1152,128,1440,32,1440,32V320H0Z" fill="#FFFFFF" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <span className="font-accent text-xs tracking-[0.2em] uppercase font-bold text-surface">
            Enroll Today
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-white leading-tight">
            Empower Your Child's Future.
          </h2>
          <p className="text-surface/80 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
            Enrollments are active for the academic year 2026-27. Submit an enquiry online or download our detailed institutional prospectus brochure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/admissions"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-sm font-bold font-accent rounded-full hover:bg-primary/95 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-primary/10"
            >
              Start Admission Process
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-sm font-bold font-accent rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              Enquire Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
