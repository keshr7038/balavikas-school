"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, Download, HelpCircle as HelpIcon, ClipboardCheck, Users, MailCheck } from "lucide-react";

// FAQ Data
const faqs = [
  {
    q: "What is the age criteria for admission into Nursery and Class I?",
    a: "For Nursery, the child must be 3 years old as of May 31st of the academic year. For Class I, the child must have completed 5 years and 6 months by the same date.",
  },
  {
    q: "What documents are required during application submission?",
    a: "You need a copy of the Birth Certificate, Transfer Certificate (TC) from the previous school (Class II onwards), Progress Report Card, 4 Passport-size photos, and Aadhaar card copies of the child and parents.",
  },
  {
    q: "Is there an entrance test or assessment for Class II and above?",
    a: "Yes, a basic screening/diagnostic assessment in English, Mathematics, and Science is conducted for Class II upwards to check grade readiness.",
  },
  {
    q: "How does the fee structure work, and can we pay in installments?",
    a: "The annual fee covers tuition, science labs, smart classrooms, and sports. Transportation is charged separately. Fees can be paid in three installments (June, October, and January).",
  },
];

export default function Admissions() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="py-12 space-y-24">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-6 text-center space-y-4 pt-8">
        <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
          Join Us
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-semibold text-anchor tracking-tight">
          Admissions Procedure
        </h1>
        <p className="font-sans text-lg text-anchor/70 max-w-2xl mx-auto">
          Clear, structured pathways for enrolling your child into Balavikas for the session 2026-27.
        </p>
      </section>

      {/* 2. Numbered Sequence (1 to 5 Steps) */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-xl mx-auto">
          <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
            Step-by-Step
          </span>
          <h2 className="font-display text-3xl font-semibold text-anchor">
            How to Apply
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-surface -z-10 transform -translate-y-1/2" />

          {[
            {
              step: "1",
              title: "Enquiry",
              desc: "Submit our simple online admission enquiry form or visit our school admin desk in person.",
            },
            {
              step: "2",
              title: "Application",
              desc: "Collect the registration form from the counter or download it below, fill details and register.",
            },
            {
              step: "3",
              title: "Documents",
              desc: "Submit required birth certificates, progress reports, photos, and Aadhaar card copies.",
            },
            {
              step: "4",
              title: "Assessment",
              desc: "Grade-readiness interactive assessment is conducted for the candidate at school.",
            },
            {
              step: "5",
              title: "Confirmation",
              desc: "Upon selection, complete fee formalities to lock admission and book seats.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-canvas border border-surface rounded-[24px] p-6 text-center space-y-4 shadow-sm hover:shadow-navy hover:-translate-y-1 transition-all duration-300 relative"
            >
              {/* Step bubble */}
              <div className="w-12 h-12 rounded-full bg-primary text-white font-accent font-bold text-lg flex items-center justify-center mx-auto shadow-md">
                {item.step}
              </div>
              <h3 className="font-display text-xl font-bold text-anchor">
                {item.title}
              </h3>
              <p className="text-xs text-anchor/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Eligibility Table & Fee Note */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Table */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="font-display text-3xl font-bold text-anchor">
            Eligibility Criteria by Grade
          </h2>
          <div className="overflow-hidden border border-surface rounded-[20px] shadow-sm">
            <table className="w-full text-left border-collapse bg-canvas text-sm">
              <thead>
                <tr className="bg-surface/50 border-b border-surface text-anchor font-accent font-bold uppercase tracking-wider text-xs">
                  <th className="p-4">Grade Level</th>
                  <th className="p-4">Minimum Age</th>
                  <th className="p-4">Primary Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface text-anchor/85">
                {[
                  { grade: "Nursery / KG", age: "3 - 4+ Years", req: "Oral verification & basic motor skills" },
                  { grade: "Classes I to V", age: "5+ Years", req: "Birth certificate & previous report cards" },
                  { grade: "Classes VI to X", age: "10+ Years", req: "Diagnostic assessment & TC transfer" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-surface/20 transition-colors">
                    <td className="p-4 font-semibold">{row.grade}</td>
                    <td className="p-4 font-accent">{row.age}</td>
                    <td className="p-4 text-xs">{row.req}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Fee note card */}
        <div className="lg:col-span-4 bg-surface/30 border border-surface rounded-[24px] p-8 space-y-6">
          <div className="p-3 bg-canvas inline-block rounded-xl border border-surface/50 text-primary">
            <ClipboardCheck className="w-6 h-6" />
          </div>
          <h3 className="font-display text-2xl font-bold text-anchor">
            Fee & Enrollment Note
          </h3>
          <p className="text-xs md:text-sm text-anchor/85 leading-relaxed">
            Detailed fee tables depend on the specific grade and selected extracurricular program additions (e.g. transport, advanced competitive science coaching).
          </p>
          <p className="text-xs text-anchor/70 leading-relaxed">
            To receive a detailed fee breakdown copy for your student's grade, please submit a quick Enquiry Form on our Contact page or speak to our helpdesk at <span className="font-semibold">+91 884 2345678</span>.
          </p>
        </div>
      </section>

      {/* 4. Brochure Download Section */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-anchor text-white rounded-[24px] p-8 md:p-12 text-center space-y-6 relative overflow-hidden shadow-lg">
          <div className="relative z-10 space-y-4">
            <h3 className="font-display text-3xl font-bold text-white">
              Get Our Prospectus & Forms
            </h3>
            <p className="text-surface/80 max-w-xl mx-auto text-sm">
              Read through our detailed syllabus prospectus book, physical infrastructure facilities review, and printable offline registration application files.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Prospectus PDF download started! (Placeholder)");
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-primary text-white text-xs font-bold font-accent rounded-full hover:bg-primary/95 transition-all duration-300 hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 mr-2" />
                DOWNLOAD PROSPECTUS (PDF)
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Application Form PDF download started! (Placeholder)");
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white text-xs font-bold font-accent rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                REGISTRATION FORM
              </a>
            </div>
          </div>
          {/* Subtle background circles */}
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-primary/10" />
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/10" />
        </div>
      </section>

      {/* 5. FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-6 space-y-8">
        <div className="text-center space-y-3">
          <span className="font-accent text-xs tracking-[0.15em] uppercase font-bold text-primary">
            Got Questions?
          </span>
          <h2 className="font-display text-3xl font-bold text-anchor">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-canvas border border-surface rounded-[20px] overflow-hidden transition-all duration-300 shadow-sm"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-6 text-left font-display text-lg font-bold text-anchor hover:text-primary transition-colors focus:outline-none"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-anchor/50 shrink-0 transition-transform duration-300 ${
                    openFaq === idx ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 pt-1 text-sm text-anchor/80 border-t border-surface/30 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
