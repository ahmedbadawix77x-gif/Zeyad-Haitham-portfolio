import React, { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Camera,
  RotateCcw,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

// Default generated portrait
const DEFAULT_PORTRAIT = '/src/assets/images/zeyad_haitham_portrait_1791874977023.jpg';

export const Hero: React.FC = () => {
  const [photoSrc, setPhotoSrc] = useState<string>(DEFAULT_PORTRAIT);
  const [isCustomPhoto, setIsCustomPhoto] = useState(false);

  const handleCustomPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setPhotoSrc(url);
      setIsCustomPhoto(true);
    }
  };

  const resetPhoto = () => {
    setPhotoSrc(DEFAULT_PORTRAIT);
    setIsCustomPhoto(false);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-[#E2E8F0]/70">
      {/* Background subtle geometry */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EAF4FF]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#DDF7E8]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column Hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small eyebrow text */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#4F7DF3]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-wider text-[#4F7DF3] uppercase">
                {PERSONAL_INFO.heroEyebrow}
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#172B4D] leading-[1.15] tracking-tight mb-6 [text-wrap:balance]">
              {PERSONAL_INFO.heroHeadline}
            </h1>

            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed mb-8 max-w-2xl">
              {PERSONAL_INFO.heroBio}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <button
                onClick={() => scrollTo('experience')}
                className="px-6 py-3.5 bg-[#4F7DF3] hover:bg-[#3D6CE5] text-white font-semibold text-sm rounded-xl shadow-sm transition-all hover:shadow-md active:scale-98 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore My Experience</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3.5 bg-white hover:bg-[#F8FAFC] text-[#172B4D] border border-[#E2E8F0] font-semibold text-sm rounded-xl transition-all hover:border-[#4F7DF3]/40 active:scale-98 cursor-pointer"
              >
                Let's Connect
              </button>
            </div>

            {/* Smaller text link: View LinkedIn Profile */}
            <div className="flex items-center gap-2 text-sm text-[#64748B]">
              <a
                href={PERSONAL_INFO.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-[#4F7DF3] hover:text-[#3D6CE5] hover:underline"
              >
                <span>View LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-[#E2E8F0]">·</span>
              <span className="text-xs text-[#64748B]">Al-Haram, Giza, Egypt</span>
            </div>
          </div>

          {/* Right Column: Refined Portrait Frame with Floating Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Decorative background geometry behind portrait */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#EAF4FF] via-[#DDF7E8]/40 to-[#EAF4FF] rounded-3xl -rotate-2 -z-10 border border-[#E2E8F0]/60" />
              <div className="absolute top-1/2 -right-4 w-24 h-24 bg-[#4F7DF3]/5 rounded-2xl rotate-12 -z-10" />

              {/* Main Portrait Card */}
              <div className="relative bg-white p-3 sm:p-4 rounded-3xl border border-[#E2E8F0] shadow-sm overflow-hidden">
                
                {/* Photo container */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#EAF4FF]">
                  <img
                    src={photoSrc}
                    alt="Zeyad Haitham — Professional Sales and Business Development Representative"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-102"
                    referrerPolicy="no-referrer"
                  />

                  {/* Subtle lighting overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172B4D]/30 via-transparent to-transparent pointer-events-none" />

                  {/* Photo Switcher Tool (Subtle interactive utility) */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-medium text-[#172B4D] shadow-xs border border-white/80">
                    <label className="flex items-center gap-1 cursor-pointer hover:text-[#4F7DF3]">
                      <Camera className="w-3.5 h-3.5 text-[#4F7DF3]" />
                      <span>{isCustomPhoto ? 'Replace' : 'Upload Photo'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleCustomPhotoUpload}
                        className="hidden"
                      />
                    </label>
                    {isCustomPhoto && (
                      <button
                        onClick={resetPhoto}
                        title="Reset to default portrait"
                        className="text-[#64748B] hover:text-[#172B4D] ml-1 pl-1 border-l border-[#E2E8F0]"
                      >
                        <RotateCcw className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Floating Information Card near the portrait */}
                <div className="mt-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 shadow-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#172B4D] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#4F7DF3]" />
                      Sales & Market Penetration
                    </span>
                    <span className="text-[11px] font-semibold text-[#166534] bg-[#DDF7E8] px-2 py-0.5 rounded-md">
                      Open to Roles
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] font-medium">
                    Field Sales · B2B/B2C · Negotiation
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Highlight strip below hero split */}
        <div className="mt-14 pt-8 border-t border-[#E2E8F0] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="text-xs font-medium text-[#64748B] block">Education Specialization</span>
            <span className="text-sm font-bold text-[#172B4D] block">B.Com Accounting & Finance</span>
            <span className="text-xs text-[#64748B] block">IAEMS · Entering 3rd Year</span>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-medium text-[#64748B] block">Field Proven Track</span>
            <span className="text-sm font-bold text-[#172B4D] block">Automotive Spare Parts</span>
            <span className="text-xs text-[#64748B] block">Top-Performing Distributor</span>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-medium text-[#64748B] block">Client Communication</span>
            <span className="text-sm font-bold text-[#172B4D] block">Outbound Tele-Sales</span>
            <span className="text-xs text-[#64748B] block">Lead Qualification & Conversion</span>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-medium text-[#64748B] block">Target Roles</span>
            <span className="text-sm font-bold text-[#172B4D] block">Sales Rep · BDR · Account Mgmt</span>
            <span className="text-xs text-[#64748B] block">Full-time / Growth Opportunities</span>
          </div>
        </div>

      </div>
    </section>
  );
};
