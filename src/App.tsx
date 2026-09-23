/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsExperienceSection } from './components/SkillsExperienceSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ProjectModal, ProjectDetail } from './components/ProjectModal';
import { AvatarStudioModal } from './components/AvatarStudioModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAvatarStudioOpen, setIsAvatarStudioOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('AI & Agentic Systems');
  const [activeProject, setActiveProject] = useState<ProjectDetail | null>(null);

  // Persistent custom avatar from localStorage
  const [customAvatar, setCustomAvatar] = useState<string | null>(() => {
    try {
      return localStorage.getItem('aayush_custom_avatar');
    } catch {
      return null;
    }
  });

  const handleOpenContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const handleSelectProject = (project: ProjectDetail) => {
    setActiveProject(project);
  };

  const handleCloseProject = () => {
    setActiveProject(null);
  };

  const handleApplyAvatar = (dataUrl: string) => {
    setCustomAvatar(dataUrl);
    try {
      localStorage.setItem('aayush_custom_avatar', dataUrl);
    } catch (e) {
      console.warn('Could not persist to localStorage', e);
    }
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif]"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. HERO SECTION */}
      <HeroSection
        onOpenContact={() => handleOpenContact()}
        onNavigate={handleNavigate}
        onOpenAvatarStudio={() => setIsAvatarStudioOpen(true)}
        customAvatar={customAvatar}
      />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION & JOURNEY */}
      <AboutSection
        onOpenContact={() => handleOpenContact()}
        onNavigate={handleNavigate}
      />

      {/* 4. SERVICES / CAPABILITIES SECTION */}
      <ServicesSection
        onSelectService={(serviceName) => handleOpenContact(serviceName)}
      />

      {/* 5. PROJECTS SECTION (THE 10 PROJECTS) */}
      <ProjectsSection onSelectProject={handleSelectProject} />

      {/* 6. SKILL MAP & EXPERIENCE SECTION */}
      <SkillsExperienceSection
        onOpenContact={(topic) => handleOpenContact(topic)}
        onNavigate={handleNavigate}
      />

      {/* 7. FOOTER */}
      <Footer
        onOpenContact={() => handleOpenContact()}
        onNavigate={handleNavigate}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        initialService={selectedService}
      />

      <ProjectModal
        project={activeProject}
        isOpen={!!activeProject}
        onClose={handleCloseProject}
        onOpenContact={(projectName) =>
          handleOpenContact(`Discussion regarding project: ${projectName}`)
        }
      />

      {/* Avatar Studio: Red Screen Chroma-Keying & Import */}
      <AvatarStudioModal
        isOpen={isAvatarStudioOpen}
        onClose={() => setIsAvatarStudioOpen(false)}
        onApplyAvatar={handleApplyAvatar}
        currentAvatar={customAvatar || '/images/avatar-main.webp'}
      />
    </div>
  );
}
