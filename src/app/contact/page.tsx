"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "General Enquiry",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        purpose: "General Enquiry",
        message: "",
      });
    }, 800);
  };

  return (
    <div className="py-12 space-y-24">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-6 text-center space-y-4 pt-8">
        <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
          Get in Touch
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-semibold text-anchor tracking-tight">
          Contact Us
        </h1>
        <p className="font-sans text-lg text-anchor/70 max-w-2xl mx-auto">
          Reach out for admission questions, vacancy details, or institutional enquiries.
        </p>
      </section>

      {/* 2. Split Layout: Form and Information */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-canvas border border-surface rounded-[24px] p-8 shadow-navy space-y-6">
          <div className="space-y-2">
            <h2 className="font-display text-2xl font-bold text-anchor">
              Send an Enquiry
            </h2>
            <p className="text-xs text-anchor/65 leading-relaxed">
              Fill details below, and our administration helpdesk will contact you within 24 hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 bg-surface/20 border border-primary/20 rounded-2xl text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display text-xl font-bold text-anchor">Enquiry Submitted!</h3>
                <p className="text-xs text-anchor/70">
                  Thank you for reaching out. We have logged your request and sent a confirmation check to your inbox.
                </p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white text-xs font-bold font-accent rounded-full hover:bg-primary/95 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-accent font-bold uppercase tracking-wider text-anchor/80">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Verma"
                    className="w-full bg-surface/10 border border-surface/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-anchor"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-accent font-bold uppercase tracking-wider text-anchor/80">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rahul@example.com"
                    className="w-full bg-surface/10 border border-surface/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-anchor"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-accent font-bold uppercase tracking-wider text-anchor/80">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 9876543210"
                    className="w-full bg-surface/10 border border-surface/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-anchor"
                  />
                </div>

                {/* Purpose */}
                <div className="space-y-1.5">
                  <label htmlFor="purpose" className="block text-xs font-accent font-bold uppercase tracking-wider text-anchor/80">
                    Purpose of Enquiry
                  </label>
                  <select
                    id="purpose"
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full bg-surface/10 border border-surface/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-anchor"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Admissions Cycle">Admissions Cycle</option>
                    <option value="Fee Breakdown">Fee Breakdown</option>
                    <option value="Careers / Vacancy">Careers / Vacancy</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-accent font-bold uppercase tracking-wider text-anchor/80">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the student's grade level and questions..."
                  className="w-full bg-surface/10 border border-surface/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-anchor resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-primary text-white text-sm font-bold font-accent rounded-full hover:bg-primary/95 transition-all duration-300 shadow-md shadow-primary/20 hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4 mr-2" />
                  SUBMIT ENQUIRY FORM
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Directory Panel */}
        <div className="lg:col-span-5 space-y-8">
          {/* Info Card */}
          <div className="bg-surface/30 border border-surface rounded-[24px] p-8 space-y-6">
            <h2 className="font-display text-2xl font-bold text-anchor">
              School Directory
            </h2>
            <ul className="space-y-6 text-sm text-anchor/90">
              <li className="flex items-start space-x-3.5">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-anchor">Main Campus Address</span>
                  <span className="text-xs text-anchor/70 mt-1 block">
                    Near Town Hall, Kakinada, Andhra Pradesh, 533001, India
                  </span>
                </div>
              </li>
              <li className="flex items-start space-x-3.5">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-anchor">Admissions Office Phone</span>
                  <span className="text-xs text-anchor/70 mt-1 block font-accent font-semibold">
                    +91 884 2345678, +91 884 2345679
                  </span>
                </div>
              </li>
              <li className="flex items-start space-x-3.5">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-anchor">Administrative Email</span>
                  <span className="text-xs text-anchor/70 mt-1 block">
                    admissions@balavikashighschool.edu.in
                  </span>
                </div>
              </li>
              <li className="flex items-start space-x-3.5">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-anchor">Office Working Hours</span>
                  <span className="text-xs text-anchor/70 mt-1 block">
                    Monday - Saturday: 08:30 AM - 04:30 PM (Closed on Sundays)
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Styled SVG Map Card */}
          <div className="bg-canvas border border-surface rounded-[24px] p-6 shadow-navy space-y-4">
            <h3 className="font-accent text-xs tracking-wider uppercase font-bold text-anchor">
              Location Map
            </h3>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-surface flex flex-col items-center justify-center border border-surface/50 text-center p-4">
              {/* Abstract Map Graphic */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" stroke="#001F54" strokeWidth="0.5" className="w-full h-full">
                  <line x1="0" y1="20" x2="100" y2="20" />
                  <line x1="0" y1="50" x2="100" y2="50" />
                  <line x1="0" y1="80" x2="100" y2="80" />
                  <line x1="30" y1="0" x2="30" y2="100" />
                  <line x1="70" y1="0" x2="70" y2="100" />
                  <circle cx="50" cy="50" r="10" />
                </svg>
              </div>
              <div className="relative z-10 space-y-2 flex flex-col items-center">
                <MapPin className="w-8 h-8 text-primary animate-bounce" />
                <h4 className="font-display font-bold text-sm text-anchor">Balavikas E.M High School</h4>
                <p className="text-[10px] text-anchor/60">
                  Town Hall Junction, Kakinada, AP
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-1.5 bg-anchor hover:bg-anchor/90 text-white text-[10px] font-accent font-bold tracking-wider uppercase rounded-full shadow-sm"
                >
                  Open Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
