/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ProfessionalOverview } from './components/ProfessionalOverview.tsx';
import { Experience } from './components/Experience.tsx';
import { Education } from './components/Education.tsx';
import { TrainingAndCerts } from './components/TrainingAndCerts.tsx';
import { SkillsAndLanguages } from './components/SkillsAndLanguages.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { PrintResumeModal } from './components/PrintResumeModal.tsx';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#172B4D] flex flex-col font-sans selection:bg-[#4F7DF3]/15 selection:text-[#172B4D]">
      {/* Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section — First Impression */}
        <Hero />

        {/* Professional Overview — Value Proposition & Core Pillars */}
        <ProfessionalOverview />

        {/* Work Experience — Core Section */}
        <Experience />

        {/* Education — Undergraduate Degree & Coursework */}
        <Education />

        {/* Training & Internships + Certifications */}
        <TrainingAndCerts />

        {/* Skills, Leadership (Enactus IAEMS) & Languages */}
        <SkillsAndLanguages />

        {/* Contact Section — Strong Call to Action */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Printable / Viewable Resume Modal for Recruiters */}
      <PrintResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
