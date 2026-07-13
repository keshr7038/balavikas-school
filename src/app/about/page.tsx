import Image from "next/image";
import { Compass, Eye, ShieldCheck, Cpu, BookOpen, Truck } from "lucide-react";

export default function About() {
  return (
    <div className="py-12 space-y-24">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-6 text-center space-y-4 pt-8">
        <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
          Who We Are
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-semibold text-anchor tracking-tight">
          About Our School
        </h1>
        <p className="font-sans text-lg text-anchor/70 max-w-2xl mx-auto">
          Shaping leaders, fostering intellect, and nurturing integrity since 1999.
        </p>
      </section>

      {/* 2. Vision & Mission (Paired Cards) */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-canvas border border-surface rounded-[24px] p-8 md:p-10 shadow-navy space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-primary">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="font-display text-3xl font-bold text-anchor">Our Vision</h2>
          <p className="text-sm md:text-base text-anchor/80 leading-relaxed">
            To be a leading center of learning that cultivates intellectual curiosity, critical competence, and strong ethical values. We envision our graduates as compassionate leaders who drive positive change in the world.
          </p>
        </div>

        <div className="bg-canvas border border-surface rounded-[24px] p-8 md:p-10 shadow-navy space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-primary">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="font-display text-3xl font-bold text-anchor">Our Mission</h2>
          <p className="text-sm md:text-base text-anchor/80 leading-relaxed">
            To provide a nurturing, high-performance environment where students discover their unique talents. Through innovative smart pedagogies and comprehensive athletics, we build resilient thinkers ready for global frontiers.
          </p>
        </div>
      </section>

      {/* 3. Principal's Message */}
      <section className="bg-surface/30 border-y border-anchor/5 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-4 relative">
            <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-navy">
              <Image
                src="/images/faculty/principal.jpg"
                alt="Principal Dr. Sunita Shastri"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full border-2 border-primary/20 rounded-[24px]" />
          </div>

          <div className="lg:col-span-8 space-y-6">
            <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
              Leadership Word
            </span>
            <h2 className="font-display text-4xl font-semibold text-anchor">
              Principal's Message
            </h2>
            <blockquote className="font-display text-xl md:text-2xl font-medium italic text-primary leading-relaxed border-l-4 border-primary pl-6">
              "Education is not the learning of facts, but the training of the mind to think. At Balavikas, we aim to guide student minds to flow like deep, clear currents."
            </blockquote>
            <div className="space-y-4 text-sm md:text-base text-anchor/85 leading-relaxed">
              <p>
                Welcome to Balavikas E.M High School. For over two decades, we have dedicated ourselves to offering a rigorous academic experience integrated with values that last a lifetime.
              </p>
              <p>
                Our students are mentored in classrooms designed for collaborative learning. We emphasize critical thinking over memorization and active skill-building over passive absorption. Together with our outstanding faculty, we continue to keep Balavikas a nurturing second home for your child.
              </p>
            </div>
            <div className="pt-2">
              <h4 className="font-accent text-sm tracking-wider uppercase font-bold text-anchor">
                Dr. Sunita Shastri
              </h4>
              <p className="text-xs text-anchor/60">
                Principal, M.A., Ph.D. in Education
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Timeline/History */}
      <section className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
            Our Journey
          </span>
          <h2 className="font-display text-4xl font-semibold text-anchor">
            A Legacy of Growing Minds
          </h2>
          <p className="text-sm text-anchor/70">
            A glance at our major institutional milestones over the past two decades.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative border-l border-surface pl-8 space-y-12 py-4">
          {[
            {
              year: "1999",
              title: "Foundation Laid",
              desc: "Balavikas E.M High School was founded with 100 students and a vision for holistic English-medium education.",
            },
            {
              year: "2006",
              title: "Full SSC Affiliation",
              desc: "Achieved full State Board accreditation and recorded our first 100% pass-rate results in SSC public exams.",
            },
            {
              year: "2015",
              title: "Digital Classroom Upgrade",
              desc: "Smartboards installed in all main sections and new Chemistry & Physics laboratory facilities inaugurated.",
            },
            {
              year: "2022",
              title: "Sports Complex Openings",
              desc: "State-level basketball and gymnastics training courts launched with dedicated coaches.",
            },
          ].map((milestone, idx) => (
            <div key={idx} className="relative">
              {/* Point indicator */}
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-canvas border-2 border-primary flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>
              <div className="space-y-2">
                <span className="font-accent text-sm font-bold text-primary block">
                  {milestone.year}
                </span>
                <h3 className="font-display text-xl font-bold text-anchor">
                  {milestone.title}
                </h3>
                <p className="text-sm text-anchor/80 leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Infrastructure Highlights */}
      <section className="bg-surface/10 py-24 px-6 border-t border-anchor/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-xl mx-auto">
            <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
              Infrastructure
            </span>
            <h2 className="font-display text-4xl font-semibold text-anchor">
              World-Class Learning Environments
            </h2>
            <p className="text-sm text-anchor/70">
              Modern environments engineered to stimulate discovery and ensure comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Cpu,
                title: "Smart Classrooms",
                desc: "Interactive LED screens, internet connectivity, and digital audio-visual teaching aids.",
                image: "/images/campus/classroom-01.jpg",
              },
              {
                icon: ShieldCheck,
                title: "Modern Labs",
                desc: "Equipped chemistry, physics, and computer science labs with safe, individual workstations.",
                image: "/images/campus/lab-01.jpg",
              },
              {
                icon: BookOpen,
                title: "Rich Library",
                desc: "Over 8,000 reference books, children's literature classics, and weekly digital journals.",
                image: "/images/campus/library-01.jpg",
              },
              {
                icon: Truck,
                title: "Safe Transport",
                desc: "GPS-enabled institutional school buses with dedicated staff and routes covering the city.",
                image: "/images/campus/campus-01.jpg",
              },
            ].map((facility, idx) => (
              <div
                key={idx}
                className="bg-canvas border border-surface rounded-[24px] overflow-hidden shadow-navy hover:shadow-navy-hover transition-all duration-300 flex flex-col h-full"
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
                  <div className="flex items-center space-x-2.5">
                    <div className="p-1.5 rounded-lg bg-surface text-primary">
                      <facility.icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-accent text-sm tracking-wider uppercase font-bold text-anchor">
                      {facility.title}
                    </h3>
                  </div>
                  <p className="text-xs text-anchor/80 leading-relaxed">
                    {facility.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
