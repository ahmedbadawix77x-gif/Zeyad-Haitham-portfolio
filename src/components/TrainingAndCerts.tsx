import React from 'react';
import {
  Briefcase,
  Award,
  Calendar,
  ExternalLink,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';
import { TRAININGS, CERTIFICATIONS } from '../data/portfolioData.ts';

export const TrainingAndCerts: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Section 6: Training & Internships */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#4F7DF3]">
                Professional Development
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172B4D] tracking-tight mb-2 [text-wrap:balance]">
              Training & Internships
            </h2>
            <p className="text-sm text-[#64748B] mb-8">
              Corporate internships and specialized training programs focused on financial markets, corporate communication, and customer experience.
            </p>

            <div className="space-y-6">
              {TRAININGS.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-xs hover:border-[#4F7DF3]/40 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-[#172B4D]">
                      {item.organization}
                    </h3>
                    {item.period && (
                      <span className="text-xs text-[#64748B] flex items-center gap-1 font-medium bg-[#F8FAFC] px-2 py-0.5 rounded-md border border-[#E2E8F0]">
                        <Calendar className="w-3 h-3 text-[#4F7DF3]" />
                        {item.period}
                      </span>
                    )}
                  </div>

                  <span className="text-sm font-semibold text-[#4F7DF3] block mb-3">
                    {item.title}
                  </span>

                  <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#E2E8F0]/70">
                    {item.skillsGained.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs bg-[#F8FAFC] text-[#172B4D] font-medium px-2 py-0.5 rounded-md border border-[#E2E8F0]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 7: Certifications */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#4F7DF3]">
                Verified Knowledge
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172B4D] tracking-tight mb-2 [text-wrap:balance]">
              Certifications
            </h2>
            <p className="text-sm text-[#64748B] mb-8">
              Targeted business modeling, strategic planning, and modern artificial intelligence productivity credentials.
            </p>

            <div className="space-y-6">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-xs hover:border-[#4F7DF3]/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#EAF4FF] text-[#4F7DF3] flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="text-xs text-[#64748B] font-medium bg-[#F8FAFC] px-2.5 py-1 rounded-md border border-[#E2E8F0]">
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#172B4D] mb-1">
                      {cert.title}
                    </h3>

                    <p className="text-xs font-semibold text-[#4F7DF3] mb-3">
                      {cert.issuer}
                    </p>

                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#E2E8F0]/70 flex items-center gap-2 text-xs font-semibold text-[#166534]">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Completed Certification</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
