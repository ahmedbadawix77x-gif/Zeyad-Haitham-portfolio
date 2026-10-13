import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Copy,
  Check,
  Send,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [inquiryRole, setInquiryRole] = useState('Sales Representative');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const getDirectMailto = () => {
    const subject = encodeURIComponent(`Opportunity Inquiry: ${inquiryRole} — Candidate Zeyad Haitham`);
    const body = encodeURIComponent(
      `Hello Zeyad,\n\nI reviewed your portfolio and would like to discuss an opportunity regarding a ${inquiryRole} position with our team.\n\nLet's schedule a brief conversation.\n\nBest regards,\n[Your Name / Company]`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card */}
        <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#EAF4FF] rounded-full blur-3xl -z-0 opacity-80 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DDF7E8]/40 rounded-full blur-3xl -z-0 opacity-80 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading & Information */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4F7DF3]">
                  Direct Inquiries & Hiring
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172B4D] tracking-tight mb-4 [text-wrap:balance]">
                Let's Create Meaningful Business Results.
              </h2>
              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed mb-8 max-w-2xl">
                I'm open to opportunities where communication, commercial awareness, and relationship building can contribute to business growth.
              </p>

              {/* Direct Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                
                {/* Email Card */}
                <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#64748B] flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#4F7DF3]" />
                      Direct Email
                    </span>
                    <button
                      onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                      className="text-xs text-[#64748B] hover:text-[#172B4D] flex items-center gap-1 transition-colors"
                      title="Copy email address"
                    >
                      {copiedType === 'email' ? (
                        <Check className="w-3.5 h-3.5 text-[#166534]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>{copiedType === 'email' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-bold text-[#172B4D] hover:text-[#4F7DF3] transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                {/* Phone Card */}
                <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#64748B] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#4F7DF3]" />
                      Phone / WhatsApp
                    </span>
                    <button
                      onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                      className="text-xs text-[#64748B] hover:text-[#172B4D] flex items-center gap-1 transition-colors"
                      title="Copy phone number"
                    >
                      {copiedType === 'phone' ? (
                        <Check className="w-3.5 h-3.5 text-[#166534]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>{copiedType === 'phone' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <a
                    href={`tel:${PERSONAL_INFO.phoneClean}`}
                    className="text-sm font-bold text-[#172B4D] hover:text-[#4F7DF3] transition-colors font-mono"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>

                {/* Location Card */}
                <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0] sm:col-span-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#4F7DF3] shrink-0" />
                    <div>
                      <span className="text-xs text-[#64748B] block">Current Base & Availability</span>
                      <span className="text-sm font-semibold text-[#172B4D]">{PERSONAL_INFO.location}</span>
                    </div>
                  </div>
                  <span className="text-xs text-[#166534] bg-[#DDF7E8] font-semibold px-2.5 py-1 rounded-md">
                    Open to Relocation / Remote
                  </span>
                </div>

              </div>

              {/* Action buttons requested: Email Me, Call Me, Connect on LinkedIn */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-5 py-3 bg-[#4F7DF3] hover:bg-[#3D6CE5] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phoneClean}`}
                  className="px-5 py-3 bg-white hover:bg-[#F8FAFC] text-[#172B4D] border border-[#E2E8F0] font-semibold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#4F7DF3]" />
                  <span>Call Me</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-[#0A66C2] hover:bg-[#084e96] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center gap-2"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Recruiter Direct Drafting Helper */}
            <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#4F7DF3]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#172B4D]">
                  Recruiter Fast Track
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#172B4D] mb-2">
                Initiate Conversation
              </h3>
              <p className="text-xs text-[#64748B] mb-5 leading-relaxed">
                Select your open position type to generate a pre-formatted email prompt directly in your default mail application.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-[#172B4D] block mb-1.5">
                    Target Role Opening
                  </label>
                  <select
                    value={inquiryRole}
                    onChange={(e) => setInquiryRole(e.target.value)}
                    className="w-full bg-white border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 text-xs font-medium text-[#172B4D] focus:outline-hidden focus:ring-2 focus:ring-[#4F7DF3]"
                  >
                    <option value="Sales Representative">Sales Representative</option>
                    <option value="Business Development Representative (BDR/SDR)">Business Development (BDR/SDR)</option>
                    <option value="Account Management Associate">Account Management Associate</option>
                    <option value="Customer Success Representative">Customer Success Representative</option>
                    <option value="Commercial Trainee / Internship">Commercial Trainee / Internship</option>
                  </select>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-[#E2E8F0] text-xs text-[#64748B]">
                  <span className="text-[11px] font-bold text-[#172B4D] block mb-1">Preview Subject:</span>
                  <p className="font-mono text-[11px] text-[#4F7DF3] truncate">
                    Opportunity Inquiry: {inquiryRole} — Candidate Zeyad Haitham
                  </p>
                </div>

                <a
                  href={getDirectMailto()}
                  className="w-full py-3 bg-[#172B4D] hover:bg-[#0F1D33] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Draft Email for {inquiryRole}</span>
                </a>

                <p className="text-[11px] text-center text-[#64748B]">
                  No backend or fake submit form. Launches your native email client securely.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
