import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Calendar,
  Building,
  CheckCircle2,
  FileSpreadsheet,
} from 'lucide-react';
import { EDUCATION_INFO } from '../data/portfolioData.ts';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#4F7DF3]">
              Academic Foundation
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#172B4D] tracking-tight mb-3 [text-wrap:balance]">
            Education
          </h2>
          <p className="text-base text-[#64748B]">
            Commercial acumen supported by formal training in commerce, managerial accounting, and organizational systems.
          </p>
        </div>

        {/* University Themed Primary Card */}
        <div className="bg-[#F8FAFC] rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          {/* Subtle decorative background watermarks/geometry */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#EAF4FF] rounded-full blur-2xl -z-0 opacity-70 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Degree & Academy Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2E8F0] rounded-lg text-xs font-semibold text-[#4F7DF3]">
                <GraduationCap className="w-4 h-4" />
                <span>Undergraduate Degree</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#172B4D] mb-2">
                  {EDUCATION_INFO.degree}
                </h3>
                <p className="text-base font-semibold text-[#4F7DF3] flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#64748B]" />
                  <span>{EDUCATION_INFO.institution}</span>
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                {EDUCATION_INFO.description}
              </p>

              {/* Status details bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white p-3 rounded-xl border border-[#E2E8F0]">
                  <span className="text-[11px] text-[#64748B] block font-medium">Academic Status</span>
                  <span className="text-sm font-bold text-[#172B4D]">{EDUCATION_INFO.status}</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#E2E8F0]">
                  <span className="text-[11px] text-[#64748B] block font-medium">Current Year</span>
                  <span className="text-sm font-bold text-[#172B4D]">{EDUCATION_INFO.academicYear}</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#E2E8F0]">
                  <span className="text-[11px] text-[#64748B] block font-medium">Expected Graduation</span>
                  <span className="text-sm font-bold text-[#172B4D]">{EDUCATION_INFO.expectedGraduation}</span>
                </div>
              </div>
            </div>

            {/* GPA and Coursework Side Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Cumulative GPA Card */}
              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block">
                    Cumulative GPA
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-4xl font-extrabold text-[#172B4D] font-mono tabular-nums">
                      {EDUCATION_INFO.gpa}
                    </span>
                    <span className="text-xs text-[#64748B]">standing</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#DDF7E8] text-[#166534] flex items-center justify-center font-bold text-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>

              {/* Relevant Coursework Card */}
              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-xs">
                <span className="text-xs font-bold text-[#172B4D] uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#4F7DF3]" />
                  Relevant Coursework
                </span>
                
                <div className="flex flex-wrap gap-2">
                  {EDUCATION_INFO.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs font-medium text-[#172B4D] bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1.5 rounded-lg"
                    >
                      {course}
                    </span>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-[#E2E8F0] text-xs text-[#64748B] leading-relaxed flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-[#4F7DF3] shrink-0" />
                  <span>Combines consumer psychology with managerial accounting discipline.</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
