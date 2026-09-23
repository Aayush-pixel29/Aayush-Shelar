import React from 'react';
import { ContactButton } from './ContactButton';
import { ArrowUp, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface FooterProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C0C0C] border-t border-white/10 pt-20 pb-12 px-6 sm:px-10 md:px-16 text-[#D7E2EA]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
              Available For Select Commissions &amp; Engineering Roles
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            AAYUSH SHELAR <span className="text-white/40">—</span> AI BUILDER
          </h2>
          <p className="text-sm font-light text-[#D7E2EA]/75 mt-3 max-w-lg leading-relaxed">
            {PROFILE.bioShort}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-[#BBCCD7]">
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#B600A8]" />
              <span>{PROFILE.email}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#7621B0]" />
              <span>{PROFILE.phone}</span>
            </a>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5 text-white/70">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PROFILE.location}</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <ContactButton onClick={onOpenContact} label="Let's Talk" />
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-xs uppercase tracking-widest text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#D7E2EA]/60">
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => onNavigate('about')}
            className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => onNavigate('journey')}
            className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
          >
            Journey
          </button>
          <button
            type="button"
            onClick={() => onNavigate('work')}
            className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
          >
            Work
          </button>
          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => onNavigate('skills')}
            className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
          >
            Skills
          </button>
          <button
            type="button"
            onClick={() => onNavigate('experience')}
            className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
          >
            Experience
          </button>
          <button
            type="button"
            onClick={onOpenContact}
            className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
          >
            Contact
          </button>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
          <span>© {new Date().getFullYear()} Aayush Shelar</span>
        </div>
      </div>
    </footer>
  );
};
