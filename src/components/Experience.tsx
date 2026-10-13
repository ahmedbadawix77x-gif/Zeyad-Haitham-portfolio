import React, { useState } from 'react';
import {
  Briefcase,
  MapPin,
  Calendar,
  Award,
  CheckCircle,
  Building2,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { WORK_EXPERIENCES, ROLE_ALIGNMENTS } from '../data/portfolioData.ts';

export const Experience: React.FC = () => {
  const [selectedRoleFilter, setSelectedRoleFilter] = useState<string>('all');

  const filteredExperiences = WORK_EXPERIENCES.filter((exp) => {
    if (selectedRoleFilter === 'field') return exp.id === 'trust-auto-parts';
    if (selectedRoleFilter === 'retail') return exp.id === 'smash-gym';
    if (selectedRoleFilter === 'telesales') return exp.id === 'zee-tech';
    return true;
  });

  return (
    <section id="experience" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#4F7DF3]">
                Proven Commercial Execution
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#172B4D] tracking-tight mb-3 [text-wrap:balance]">
              Work Experience
            </h2>
            <p className="text-base text-[#64748B]">
              Hands-on experience spanning startup market penetration, dealer distribution networks, outbound consultative tele-sales, and customer-centric retail upselling.
            </p>
          </div>

          {/* Interactive filter control (functional button segmented group) */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E2E8F0] rounded-xl self-start md:self-auto shadow-xs">
            <button
              onClick={() => setSelectedRoleFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedRoleFilter === 'all'
                  ? 'bg-[#4F7DF3] text-white shadow-xs'
                  : 'text-[#64748B] hover:text-[#172B4D]'
              }`}
            >
              All Roles ({WORK_EXPERIENCES.length})
            </button>
            <button
              onClick={() => setSelectedRoleFilter('field')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedRoleFilter === 'field'
                  ? 'bg-[#4F7DF3] text-white shadow-xs'
                  : 'text-[#64748B] hover:text-[#172B4D]'
              }`}
            >
              Field & Market Entry
            </button>
            <button
              onClick={() => setSelectedRoleFilter('retail')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedRoleFilter === 'retail'
                  ? 'bg-[#4F7DF3] text-white shadow-xs'
                  : 'text-[#64748B] hover:text-[#172B4D]'
              }`}
            >
              Consultative Retail
            </button>
            <button
              onClick={() => setSelectedRoleFilter('telesales')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedRoleFilter === 'telesales'
                  ? 'bg-[#4F7DF3] text-white shadow-xs'
                  : 'text-[#64748B] hover:text-[#172B4D]'
              }`}
            >
              Outbound Tele-Sales
            </button>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {filteredExperiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs hover:border-[#4F7DF3]/40 transition-all duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-[#172B4D] flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-[#4F7DF3]" />
                      {exp.company}
                    </span>
                    {exp.sector && (
                      <span className="text-xs text-[#64748B] font-medium">
                        · {exp.sector}
                      </span>
                    )}
                    {exp.keyBadge && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#166534] bg-[#DDF7E8] px-2.5 py-0.5 rounded-md">
                        <Award className="w-3.5 h-3.5" />
                        {exp.keyBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-[#4F7DF3]">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#64748B]">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#64748B]" />
                    {exp.location}
                  </span>
                  {exp.period && (
                    <span className="flex items-center gap-1.5 bg-[#F8FAFC] px-2.5 py-1 rounded-md border border-[#E2E8F0]">
                      <Calendar className="w-3.5 h-3.5 text-[#4F7DF3]" />
                      {exp.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Achievements & Highlights list */}
              <div className="mt-6">
                <span className="text-xs font-bold text-[#172B4D] uppercase tracking-wider block mb-3">
                  Key Responsibilities & Impact
                </span>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#172B4D]/90">
                      <CheckCircle className="w-4 h-4 text-[#4F7DF3] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills applied (unboxed clean tags) */}
              <div className="mt-6 pt-5 border-t border-[#E2E8F0]/70 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-[#64748B] mr-1">
                  Applied Competencies:
                </span>
                {exp.skillsUsed.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs bg-[#F8FAFC] text-[#172B4D] font-medium px-2.5 py-1 rounded-md border border-[#E2E8F0]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Quick Alignment: Why Zeyad matches target roles */}
        <div className="mt-16 bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4F7DF3] block mb-1">
              Recruiter Quick Match
            </span>
            <h3 className="text-xl font-bold text-[#172B4D]">
              Direct Alignment with Immediate Hiring Needs
            </h3>
            <p className="text-sm text-[#64748B]">
              How Zeyad's concrete blend of field tenacity, financial grounding, and communication skills translates into job readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ROLE_ALIGNMENTS.map((item) => (
              <div
                key={item.role}
                className="bg-[#F8FAFC] border border-[#E2E8F0] p-4.5 rounded-xl hover:border-[#4F7DF3]/30 transition-colors"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#4F7DF3] mb-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{item.fitScore}</span>
                </div>
                <h4 className="text-sm font-bold text-[#172B4D] mb-2">
                  {item.role}
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
