import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#E2E8F0] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E2E8F0]/80">
          
          {/* Brand info */}
          <div className="space-y-1 text-center md:text-left">
            <span className="text-base font-bold text-[#172B4D] tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs text-[#64748B]">
              Sales Representative · Business Development · Accounting & Finance Student
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[#64748B]">
            <a href="#about" className="hover:text-[#172B4D] transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-[#172B4D] transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-[#172B4D] transition-colors">
              Education
            </a>
            <a href="#skills" className="hover:text-[#172B4D] transition-colors">
              Skills
            </a>
            <button
              onClick={onOpenResumeModal}
              className="hover:text-[#172B4D] transition-colors cursor-pointer"
            >
              Printable CV
            </button>
            <a
              href={PERSONAL_INFO.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4F7DF3] transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#64748B] hover:text-[#172B4D] hover:bg-[#F8FAFC] border border-[#E2E8F0] transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748B]">
          <p>© 2026 Zeyad Haitham. All rights reserved.</p>
          <p>Al-Haram, Giza, Egypt · Available for Commercial & Sales Opportunities</p>
        </div>
      </div>
    </footer>
  );
};
