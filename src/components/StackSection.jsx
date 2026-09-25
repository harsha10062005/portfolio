import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function StackSection() {
  return (
    <section
      id="stack"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        borderTop: '1px solid var(--border-rule)',
      }}
    >
      <div className="container-editorial">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--border-rule)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-vermillion)' }} />
              <span className="label-technical" style={{ color: 'var(--accent-vermillion)' }}>
                03 / TECHNICAL STACK
              </span>
            </div>
            <h2
              className="headline-editorial"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--ink-primary)',
              }}
            >
              CORE PROFICIENCIES
            </h2>
          </div>
        </div>

        {/* Editorial Typographic List (Stitch reference style) */}
        <div
          style={{
            borderTop: '2px solid var(--border-ink)',
            borderBottom: '2px solid var(--border-ink)',
          }}
        >
          {portfolioData.stack.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                paddingTop: '1.75rem',
                paddingBottom: '1.75rem',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                borderBottom: index < portfolioData.stack.length - 1 ? '1px solid var(--border-rule)' : 'none',
                transition: 'background-color 0.2s ease, transform 0.2s ease',
                cursor: 'crosshair',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-paper-light)';
                const title = e.currentTarget.querySelector('.stack-title');
                if (title) title.style.transform = 'translateX(12px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                const title = e.currentTarget.querySelector('.stack-title');
                if (title) title.style.transform = 'translateX(0px)';
              }}
              data-cursor="STACK"
            >
              {/* Index & Oversized Name */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: item.highlight ? 'var(--accent-vermillion)' : 'var(--ink-secondary)',
                  }}
                >
                  {item.number}
                </span>

                <span
                  className="stack-title display-monumental"
                  style={{
                    fontSize: 'clamp(1.35rem, 4.5vw, 3.25rem)',
                    color: 'var(--ink-primary)',
                    letterSpacing: '-0.03em',
                    transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'inline-block',
                  }}
                >
                  {item.name}
                </span>
              </div>

              {/* Subtitle / Metadata */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--ink-secondary)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  paddingTop: '6px',
                }}
              >
                <span>{item.detail}</span>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: item.highlight ? 'var(--accent-vermillion)' : 'var(--border-rule)',
                    display: 'inline-block',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
