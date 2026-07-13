"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const primaryLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Gallery", href: "/gallery" },
];

const secondaryLinks = [
  { name: "Faculty", href: "/faculty" },
  { name: "Sports", href: "/sports" },
  { name: "Awards", href: "/awards" },
  { name: "News & Events", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMoreOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-anchor/95 backdrop-blur-md shadow-navy ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="flex items-center space-x-3 focus-visible-primary rounded-lg p-1 group"
          >
            <div className="relative w-10 h-10 bg-white rounded-full overflow-hidden flex items-center justify-center border border-surface/50 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.jpg"
                alt="Bala Vikas English Medium School Logo"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-accent text-sm md:text-base tracking-[0.2em] font-bold text-white transition-colors duration-200 group-hover:text-primary leading-tight">
                BALAVIKAS
              </span>
              <span className="font-sans text-[10px] tracking-[0.1em] font-medium text-white/70 transition-colors duration-200 group-hover:text-primary/70 leading-none">
                E.M HIGH SCHOOL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {primaryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 text-sm font-medium transition-colors focus-visible-primary group ${
                  isActive(link.href)
                    ? "text-white font-semibold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive(link.href) ? (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                onMouseEnter={() => setIsMoreOpen(true)}
                className="flex items-center space-x-1 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors focus-visible-primary"
              >
                <span>More</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMoreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isMoreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseLeave={() => setIsMoreOpen(false)}
                    className="absolute right-0 mt-2 w-48 bg-anchor border border-white/10 rounded-xl shadow-navy py-2 z-50"
                  >
                    {secondaryLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                          isActive(link.href)
                            ? "bg-white/10 text-white font-semibold"
                            : "text-white/80 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA and Hamburger */}
          <div className="flex items-center space-x-4">
            <Link
              href="/admissions"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white text-xs md:text-sm font-bold font-accent rounded-full transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-primary/20"
            >
              ADMISSIONS OPEN
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white focus-visible-primary rounded-lg hover:bg-white/10"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-anchor flex flex-col justify-center px-8 lg:hidden"
          >
            {/* Background current effect inside mobile menu */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
              <div className="absolute top-[-10%] left-[-20%] w-[80%] h-[80%] rounded-full bg-primary/40 filter blur-[80px] animate-drift-1" />
              <div className="absolute bottom-[-10%] right-[-20%] w-[80%] h-[80%] rounded-full bg-surface/30 filter blur-[80px] animate-drift-2" />
            </div>

            <nav className="relative z-10 flex flex-col space-y-6 text-center max-w-md mx-auto w-full">
              {[...primaryLinks, ...secondaryLinks].map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block text-2xl font-display font-medium py-1 transition-colors ${
                      isActive(link.href)
                        ? "text-surface"
                        : "text-white hover:text-surface"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 10 * 0.05 }}
                className="pt-6"
              >
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center w-full py-4 bg-primary text-white text-base font-bold font-accent rounded-full transition-all duration-300 hover:bg-primary/90"
                >
                  ADMISSIONS OPEN
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
