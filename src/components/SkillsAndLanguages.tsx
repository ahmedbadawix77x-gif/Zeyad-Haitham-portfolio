import React from 'react';
import {
  Sparkles,
  Laptop,
  Users2,
  Globe2,
  CheckCircle,
  Presentation,
  Compass,
} from 'lucide-react';
import {
  SKILL_CATEGORIES,
  LEADERSHIP_INFO,
  LANGUAGES,
} from '../data/portfolioData.ts';

export const SkillsAndLanguages: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#4F7DF3]">
              Core Competencies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#172B4D] tracking-tight mb-3 [text-wrap:balance]">
            Skills, Leadership & Languages
          </h2>
          <p className="text-base text-[#64748B]">
            Demonstrated abilities across client negotiations, productivity software, cross-functional student leadership, and multi-lingual communication.
          </p>
        </div>

        {/* 2-Column Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {SKILL_CATEGORIES.map((categoryGroup) => (
            <div
              key={categoryGroup.category}
              className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF4FF] text-[#4F7DF3] flex items-center justify-center">
                    {categoryGroup.category.includes('Sales') ? (
                      <Sparkles className="w-4 h-4" />
                    ) : (
                      <Laptop className="w-4 h-4" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#172B4D]">
                    {categoryGroup.category}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] mb-6">
                  {categoryGroup.description}
                </p>

                {/* Skill tags (unboxed clean pills with clear typography) */}
                <div className="flex flex-wrap gap-2.5">
                  {categoryGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white text-[#172B4D] border border-[#E2E8F0] shadow-2xs hover:border-[#4F7DF3]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E2E8F0]/70 flex items-center gap-2 text-xs text-[#64748B]">
                <CheckCircle className="w-3.5 h-3.5 text-[#4F7DF3]" />
                <span>Assessed through actual sales practice and coursework</span>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership & Languages Bottom Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Section 9: Leadership & Extracurricular Activities */}
          <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4F7DF3] flex items-center gap-1.5">
                  <Users2 className="w-4 h-4" />
                  Leadership & Extracurricular Activities
                </span>
                <span className="text-xs text-[#64748B] font-medium bg-white px-2.5 py-1 rounded-md border border-[#E2E8F0]">
                  {LEADERSHIP_INFO.period}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#172B4D] mb-1">
                {LEADERSHIP_INFO.organization}
              </h3>
              <p className="text-sm font-semibold text-[#4F7DF3] mb-4">
                {LEADERSHIP_INFO.role}
              </p>

              <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                {LEADERSHIP_INFO.description}
              </p>

              <div className="space-y-2.5">
                {LEADERSHIP_INFO.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172B4D]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F7DF3] mt-2 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E8F0]/70 text-xs text-[#64748B] flex items-center gap-2">
              <Presentation className="w-3.5 h-3.5 text-[#4F7DF3]" />
              <span>Evidence of teamwork, project coordination, and proactive communication.</span>
            </div>
          </div>

          {/* Section 10: Languages */}
          <div className="lg:col-span-5 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4F7DF3] flex items-center gap-1.5">
                  <Globe2 className="w-4 h-4" />
                  Languages
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#172B4D] mb-2">
                Bilingual Proficiency
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mb-6">
                Fluent communication capabilities across regional and international corporate environments.
              </p>

              <div className="space-y-4">
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang.language}
                    className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-2xs"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-base font-bold text-[#172B4D]">
                        {lang.language}
                      </span>
                      <span className="text-xs font-semibold text-[#166534] bg-[#DDF7E8] px-2.5 py-0.5 rounded-md">
                        {lang.proficiency}
                      </span>
                    </div>
                    {lang.notes && (
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {lang.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E8F0]/70 text-xs text-[#64748B] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#4F7DF3]" />
              <span>Accurate level descriptions without arbitrary percentage bars.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
