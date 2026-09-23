import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import { Github, Linkedin, Sparkles, MapPin, Wand2 } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface HeroSectionProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenAvatarStudio: () => void;
  customAvatar?: string | null;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onNavigate,
  onOpenAvatarStudio,
  customAvatar,
}) => {
  const [avatarMode, setAvatarMode] = useState<'main' | 'working'>('main');

  // Determine active avatar source
  const avatarSrc = customAvatar
    ? customAvatar
    : avatarMode === 'main'
    ? '/images/avatar-main.webp'
    : '/images/avatar-working.webp';

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-b from-[#7621B0]/20 via-[#B600A8]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      {/* 1. NAVBAR */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <header className="px-6 md:px-12 pt-6 md:pt-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer group flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-black tracking-tighter text-white group-hover:scale-105 transition-transform">
              AS
            </span>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA] font-semibold hidden sm:inline-block">
              Aayush Shelar
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-5 sm:gap-8 md:gap-10 text-xs sm:text-sm md:text-base lg:text-[1.15rem] font-medium uppercase tracking-wider text-[#D7E2EA]">
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => onNavigate('journey')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Journey
            </button>
            <button
              type="button"
              onClick={() => onNavigate('work')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Work
            </button>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => onNavigate('skills')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer hidden md:inline-block"
            >
              Skills
            </button>
            <button
              type="button"
              onClick={onOpenContact}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Contact
            </button>
          </nav>
        </header>
      </FadeIn>

      {/* 2. HERO HEADING */}
      <div className="w-full text-center overflow-hidden z-0 mt-2 sm:mt-0 md:-mt-2 px-2">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-center whitespace-nowrap text-[12vw] sm:text-[13.5vw] md:text-[14.5vw] lg:text-[16vw]">
            Hi, i&apos;m Aayush
          </h1>
        </FadeIn>
      </div>

      {/* 3. HERO 3D AVATAR PORTRAIT */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.4} y={30}>
          <div className="relative group">
            {/* Status pill badge above avatar */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-medium uppercase tracking-wider text-white shadow-xl whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available · Independent Freelancer</span>
            </div>

            <Magnet
              padding={150}
              strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
              className="flex justify-center items-end"
            >
              <div className="relative w-[280px] sm:w-[350px] md:w-[420px] lg:w-[480px]">
                <img
                  src={avatarSrc}
                  alt="Aayush Shelar 3D Animated Character Avatar"
                  className="w-full h-auto max-h-[65vh] object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] select-none transition-all duration-300"
                  draggable={false}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/avatar-main.webp';
                  }}
                />

                {/* Avatar Action Buttons */}
                <div className="absolute bottom-4 right-2 sm:right-4 z-20 flex items-center gap-2">
                  {/* Chroma-key Studio button */}
                  <button
                    type="button"
                    onClick={onOpenAvatarStudio}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-wider text-white transition-all hover:scale-105 shadow-lg"
                    title="Import Avatar & Remove Red Background"
                  >
                    <Wand2 className="w-3 h-3 text-[#B600A8]" />
                    <span>Change Avatar</span>
                  </button>

                  {/* Mode switcher if using built-in avatar */}
                  {!customAvatar && (
                    <button
                      type="button"
                      onClick={() =>
                        setAvatarMode((prev) => (prev === 'main' ? 'working' : 'main'))
                      }
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-wider text-white transition-all"
                      title="Toggle between Desk & Working mode"
                    >
                      <Sparkles className="w-2.5 h-2.5 text-[#7621B0]" />
                      <span>{avatarMode === 'main' ? 'Build Mode' : 'Default'}</span>
                    </button>
                  )}
                </div>
              </div>
            </Magnet>
          </div>
        </FadeIn>
      </div>

      {/* 4. BOTTOM BAR */}
      <div className="w-full px-6 md:px-12 pb-7 sm:pb-8 md:pb-10 flex items-end justify-between z-20">
        {/* Left: Bio Statement & Location */}
        <FadeIn delay={0.35} y={20}>
          <div className="flex flex-col gap-3">
            <p
              style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1.25rem)' }}
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[320px]"
            >
              a software &amp; ai builder who turns ideas into working products — agents, vision &amp; full-stack
            </p>

            <div className="flex items-center gap-4 text-xs text-[#BBCCD7]">
              <span className="flex items-center gap-1 text-[11px] font-medium tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#B600A8]" />
                Mumbai, India
              </span>

              <div className="flex items-center gap-2">
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Right: Contact Button */}
        <FadeIn delay={0.5} y={20}>
          <div className="flex flex-col items-end gap-2">
            <ContactButton onClick={onOpenContact} label="Let's Talk" />
            <span className="text-[10px] uppercase tracking-widest text-[#BBCCD7]/60 hidden sm:inline-block">
              Open For Selected Projects
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
