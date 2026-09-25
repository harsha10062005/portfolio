import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X } from 'lucide-react';

export default function Navigation({ onCardToggle, isCardMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['about', 'work', 'stack', 'experience', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'about', label: '01/ABOUT' },
    { id: 'work', label: '02/WORK' },
    { id: 'stack', label: '03/STACK' },
    { id: 'experience', label: '04/EXP' },
    { id: 'contact', label: '05/CONTACT' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: scrolled || mobileMenuOpen ? 'rgba(242, 240, 232, 0.85)' : 'transparent',
        backdropFilter: scrolled || mobileMenuOpen ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled || mobileMenuOpen ? 'blur(12px)' : 'none',
        borderBottom: scrolled || mobileMenuOpen ? '1px solid rgba(217, 214, 205, 0.7)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="container-editorial"
        style={{
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
          }}
          data-cursor="TOP"
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: 'var(--accent-vermillion)',
            }}
          />
          <div className="label-technical" style={{ color: 'var(--ink-primary)', fontSize: 'clamp(10px, 2.5vw, 11px)' }}>
            HARSHA VARDHAN <span style={{ color: 'var(--ink-secondary)', fontWeight: 400 }}>/ SOFTWARE DEVELOPER</span>
          </div>
        </div>

        {/* Minimal Editorial Nav (Desktop) */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.75rem',
          }}
          className="hidden-mobile"
        >
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="label-technical"
              style={{
                color: activeSection === item.id ? 'var(--accent-vermillion)' : 'var(--ink-secondary)',
                fontWeight: activeSection === item.id ? 700 : 500,
                position: 'relative',
                padding: '4px 0',
                transition: 'color 0.2s ease',
              }}
              data-cursor="GOTO"
            >
              {item.label}
              {activeSection === item.id && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'var(--accent-vermillion)',
                  }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right Status & Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            className="badge-technical hidden-tablet"
            style={{ fontSize: '10px', padding: '4px 8px' }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                backgroundColor: '#10B981',
                display: 'inline-block',
              }}
            />
            <span>AVAILABLE</span>
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="btn-editorial-primary hidden-mobile"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '11px',
            }}
            data-cursor="CONTACT"
          >
            <span>GET IN TOUCH ↗</span>
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-editorial-secondary"
            style={{
              display: 'none',
              padding: '6px 10px',
              fontSize: '12px',
            }}
            id="mobile-nav-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--bg-paper-light)',
            borderTop: '1px solid var(--border-rule)',
            borderBottom: '2px solid var(--border-ink)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="label-technical"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'left',
                padding: '8px 0',
                borderBottom: '1px solid var(--border-rule)',
                color: activeSection === item.id ? 'var(--accent-vermillion)' : 'var(--ink-primary)',
                fontWeight: activeSection === item.id ? 700 : 500,
              }}
            >
              <span>{item.label}</span>
              <span>→</span>
            </button>
          ))}

          <button
            onClick={() => scrollToSection('contact')}
            className="btn-editorial-primary"
            style={{ width: '100%', marginTop: '6px', padding: '0.75rem', fontSize: '11px' }}
          >
            <span>GET IN TOUCH ↗</span>
          </button>
        </div>
      )}
    </header>
  );
}
