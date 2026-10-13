import React from 'react';
import {
  TrendingUp,
  MessageSquare,
  Users,
  PieChart,
  CheckCircle2,
  ShieldCheck,
  Target,
} from 'lucide-react';
import { CORE_PILLARS } from '../data/portfolioData.ts';

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-5 h-5 text-[#4F7DF3]" />,
  MessageSquare: <MessageSquare className="w-5 h-5 text-[#4F7DF3]" />,
  Users: <Users className="w-5 h-5 text-[#4F7DF3]" />,
  PieChart: <PieChart className="w-5 h-5 text-[#4F7DF3]" />,
};

export const ProfessionalOverview: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#4F7DF3]">
              Professional Philosophy
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#172B4D] tracking-tight mb-4 [text-wrap:balance]">
            More Than Sales. Building Trust and Opportunity.
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Successful commercial relationships are not built on pushy scripts or superficial transactions.
            Combining practical sales execution with a solid foundation in Accounting and Finance, I approach business development
            as a structured discipline: listening closely to client constraints, clarifying the economic value proposition,
            navigating skepticism, and securing sustainable partnerships that yield repeat business.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_PILLARS.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0] hover:border-[#4F7DF3]/40 hover:bg-white transition-all duration-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EAF4FF] border border-[#4F7DF3]/20 flex items-center justify-center mb-5">
                  {iconMap[pillar.iconName]}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-medium text-[#64748B]">
                    0{index + 1}.
                  </span>
                  <h3 className="text-lg font-bold text-[#172B4D]">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0]/70 flex items-center gap-2 text-xs font-medium text-[#4F7DF3]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified in Field Roles</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Value Banner */}
        <div className="mt-12 bg-[#EAF4FF]/60 rounded-2xl p-6 sm:p-8 border border-[#4F7DF3]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#4F7DF3] uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Strategic Advantage for Hiring Teams
            </span>
            <h4 className="text-base sm:text-lg font-bold text-[#172B4D]">
              Commercial Intuition Guided by Financial Literacy
            </h4>
            <p className="text-sm text-[#64748B] max-w-2xl">
              Unlike candidates who solely rely on cold scripts, my training in accounting, margins, and market behavior enables me to speak the financial language of stakeholders, distributors, and business owners.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#experience"
              className="px-4 py-2.5 bg-[#4F7DF3] hover:bg-[#3D6CE5] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
            >
              <Target className="w-3.5 h-3.5" />
              <span>See Demonstrated Results</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
