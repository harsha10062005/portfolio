import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid var(--border-rule)',
        backgroundColor: 'var(--bg-canvas)',
      }}
    >
      <div
        className="container-editorial"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.25rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--ink-secondary)',
        }}
      >
        <div>
          © 2026 {portfolioData.name.toUpperCase()}. ALL RIGHTS RESERVED.
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--ink-primary)', fontWeight: 600 }}
            data-cursor="GITHUB"
          >
            GITHUB
          </a>
          <span>·</span>
          <a
            href={`mailto:${portfolioData.email}`}
            style={{ color: 'var(--ink-primary)', fontWeight: 600 }}
            data-cursor="EMAIL"
          >
            EMAIL
          </a>
          <span>·</span>
          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              color: 'var(--accent-vermillion)',
              fontWeight: 700,
            }}
            data-cursor="TOP"
          >
            <span>TOP</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
