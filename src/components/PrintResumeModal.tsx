import React, { useEffect } from 'react';
import {
  X,
  Printer,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  WORK_EXPERIENCES,
  EDUCATION_INFO,
  TRAININGS,
  CERTIFICATIONS,
  SKILL_CATEGORIES,
  LEADERSHIP_INFO,
  LANGUAGES,
} from '../data/portfolioData.ts';

interface PrintResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintResumeModal: React.FC<PrintResumeModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white print:static">
      
      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden my-auto print:shadow-none print:border-none print:max-w-none print:m-0">
        
        {/* Modal Top Bar (Hidden in print) */}
        <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#172B4D]">
              Executive CV Document View
            </span>
            <span className="text-xs text-[#64748B]">· Formatted for Recruiters & Print</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#4F7DF3] hover:bg-[#3D6CE5] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#64748B] hover:text-[#172B4D] hover:bg-[#EAF4FF] transition-colors cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content Body */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible print:p-8 text-[#172B4D]">
          
          {/* Header */}
          <div className="border-b-2 border-[#172B4D] pb-6 mb-6">
            <h1 className="text-3xl font-extrabold text-[#172B4D] tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base font-semibold text-[#4F7DF3] mt-1">
              {PERSONAL_INFO.title}
            </p>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-[#64748B] mt-3 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#4F7DF3]" />
                {PERSONAL_INFO.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#4F7DF3]" />
                {PERSONAL_INFO.phone}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#4F7DF3]" />
                {PERSONAL_INFO.email}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <ExternalLink className="w-3 h-3 text-[#4F7DF3]" />
                {PERSONAL_INFO.linkedInUrl}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#172B4D] border-b border-[#E2E8F0] pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Results-driven Business Administration student specializing in Accounting & Finance with practical field sales, outbound tele-sales, and startup market penetration experience. Skilled in identifying client needs, overcoming objections, consultative selling, and establishing B2B/B2C dealer distribution networks from the ground up.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#172B4D] border-b border-[#E2E8F0] pb-1 mb-3">
              Work Experience
            </h2>
            <div className="space-y-4">
              {WORK_EXPERIENCES.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-bold text-[#172B4D]">
                      {exp.role} — <span className="font-semibold text-[#4F7DF3]">{exp.company}</span>
                    </span>
                    <span className="text-xs text-[#64748B] font-medium">
                      {exp.period || exp.location}
                    </span>
                  </div>
                  {exp.keyBadge && (
                    <span className="text-[11px] font-semibold text-[#166534] block mb-1">
                      ★ {exp.keyBadge}
                    </span>
                  )}
                  <ul className="list-disc list-inside text-xs text-[#64748B] space-y-1 mt-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#172B4D] border-b border-[#E2E8F0] pb-1 mb-3">
              Education
            </h2>
            <div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-bold text-[#172B4D]">
                  {EDUCATION_INFO.degree}
                </span>
                <span className="text-xs text-[#64748B]">
                  {EDUCATION_INFO.expectedGraduation} (Expected)
                </span>
              </div>
              <p className="text-xs font-medium text-[#4F7DF3]">
                {EDUCATION_INFO.institution} · Cumulative GPA: {EDUCATION_INFO.gpa}
              </p>
              <p className="text-xs text-[#64748B] mt-1">
                Relevant Coursework: {EDUCATION_INFO.coursework.join(', ')}
              </p>
            </div>
          </div>

          {/* Training & Internships */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#172B4D] border-b border-[#E2E8F0] pb-1 mb-3">
              Training & Internships
            </h2>
            <div className="space-y-2">
              {TRAININGS.map((tr) => (
                <div key={tr.id} className="text-xs">
                  <div className="flex justify-between font-semibold text-[#172B4D]">
                    <span>{tr.organization} — {tr.title}</span>
                    <span className="text-[#64748B] font-normal">{tr.period || ''}</span>
                  </div>
                  <p className="text-[#64748B]">{tr.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#172B4D] border-b border-[#E2E8F0] pb-1 mb-3">
              Certifications
            </h2>
            <div className="space-y-2 text-xs">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="flex justify-between text-[#172B4D]">
                  <span>
                    <strong className="font-semibold">{cert.title}</strong> — {cert.issuer}
                  </span>
                  <span className="text-[#64748B]">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Languages */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#172B4D] border-b border-[#E2E8F0] pb-1 mb-2">
                Core Skills
              </h2>
              <div className="text-xs text-[#64748B] space-y-1">
                <p>
                  <strong className="text-[#172B4D]">Sales:</strong> Consultative Selling, Market Penetration, B2B/B2C, Cold Calling, Objection Handling, Upselling.
                </p>
                <p>
                  <strong className="text-[#172B4D]">Technical:</strong> Microsoft Excel, Word, PowerPoint, AI Copywriting.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#172B4D] border-b border-[#E2E8F0] pb-1 mb-2">
                Languages & Activities
              </h2>
              <div className="text-xs text-[#64748B] space-y-1">
                <p>
                  <strong className="text-[#172B4D]">Languages:</strong> Arabic (Native), English (Professional Working).
                </p>
                <p>
                  <strong className="text-[#172B4D]">Leadership:</strong> Enactus IAEMS — Project Management Team Member.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
