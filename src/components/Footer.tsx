"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-anchor text-white/90 font-sans mt-auto">
      {/* Wave Curve Transition */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-[99%] overflow-hidden leading-[0] select-none pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
        >
          <path
            d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0V120H1360C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120H0V32Z"
            fill="#001F54"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-surface/10">
          {/* Column 1: Blurb + Social */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center border border-white/10 shadow-sm">
                <Image
                  src="/logo.jpg"
                  alt="Bala Vikas English Medium School Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="font-accent text-base md:text-lg tracking-[0.2em] font-bold text-white block leading-tight">
                  BALAVIKAS
                </span>
                <span className="font-sans text-[11px] tracking-[0.1em] font-medium text-surface block leading-none">
                  E.M HIGH SCHOOL
                </span>
              </div>
            </div>
            <p className="text-sm text-surface/80 leading-relaxed max-w-sm">
              Empowering students through holistic education since 1999. Rooted in values, guided by innovation, and committed to academic excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-surface/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-surface/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-surface/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-accent text-xs tracking-wider uppercase font-bold text-surface">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-surface/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academics */}
          <div className="space-y-4">
            <h3 className="font-accent text-xs tracking-wider uppercase font-bold text-surface">
              Academics
            </h3>
            <ul className="space-y-2.5 text-sm text-surface/70">
              <li>
                <Link href="/academics" className="hover:text-white transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="/academics#pre-primary" className="hover:text-white transition-colors">
                  Pre-Primary
                </Link>
              </li>
              <li>
                <Link href="/academics#primary" className="hover:text-white transition-colors">
                  Primary School
                </Link>
              </li>
              <li>
                <Link href="/academics#secondary" className="hover:text-white transition-colors">
                  Secondary School
                </Link>
              </li>
              <li>
                <Link href="/sports" className="hover:text-white transition-colors">
                  Sports Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-accent text-xs tracking-wider uppercase font-bold text-surface">
                Contact Info
              </h3>
              <ul className="space-y-3 text-sm text-surface/70">
                <li className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Main Campus, Near Town Hall, Kakinada, AP, India</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span>+91 884 2345678</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span>admissions@balavikashighschool.edu.in</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-surface font-accent">
                Stay Updated
              </h4>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex rounded-full overflow-hidden bg-white/5 border border-surface/10 focus-within:border-primary/50 transition-all p-1"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="bg-transparent text-sm w-full px-3 py-1.5 focus:outline-none placeholder-surface/40 text-white"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/95 text-white p-2 rounded-full transition-colors flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-surface/50 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Balavikas E.M High School. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
