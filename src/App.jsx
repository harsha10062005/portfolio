import React, { useState } from 'react';
import Navigation from './components/Navigation';
import DigitalCard from './components/DigitalCard';
import AboutSection from './components/AboutSection';
import ProjectShowcase from './components/ProjectShowcase';
import StackSection from './components/StackSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ContactCard from './components/ContactCard';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [hasUnfolded, setHasUnfolded] = useState(false);

  const handleUnfold = () => {
    setHasUnfolded(true);
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app-root" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Texture Paper Grain */}
      <div className="paper-texture" />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Floating Top Editorial Navigation */}
      <Navigation
        isCardMode={!hasUnfolded}
        onCardToggle={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <main>
        {/* Phase 8: Front of Card (The Initial Digital Visiting Card Screen) */}
        <DigitalCard onUnfold={handleUnfold} />

        {/* Phase 11 & beyond: The Unfolded Editorial Portfolio Dossier */}
        <motion.div
          initial={{ opacity: 0.95 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 01 / ABOUT */}
          <AboutSection />

          {/* 02 / SELECTED WORK (3 Projects with Alternating Editorial Layouts) */}
          <ProjectShowcase />

          {/* 03 / STACK (Monumental Typography Arrangement) */}
          <StackSection />

          {/* 04 / EXPERIENCE (Professional Chronicle) */}
          <ExperienceSection />

          {/* EDUCATION & CERTIFICATIONS */}
          <EducationSection />

          {/* 05 / CONTACT (Back of Card — Physical Visiting Card Closure) */}
          <ContactCard />
        </motion.div>
      </main>

      {/* Micro Editorial Footer */}
      <Footer />
    </div>
  );
}
