import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function ContactCard() {
  return (
    <section
      id="contact"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        borderTop: '2px solid var(--border-ink)',
      }}
    >
      <div className="container-editorial">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '3rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid var(--border-rule)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-vermillion)' }} />
            <span className="label-technical" style={{ color: 'var(--accent-vermillion)' }}>
              05 / CONTACT
            </span>
          </div>
        </div>

        {/* The Back of the Business Card Physical Enclosure */}
        <div
          style={{
            backgroundColor: 'var(--bg-paper-light)',
            border: '2px solid var(--border-ink)',
            padding: 'clamp(1.5rem, 4.5vw, 3.5rem)',
            boxShadow: 'var(--shadow-card)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >

          <div
            className="responsive-grid-1col"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left: Monumental CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h2
                className="display-monumental"
                style={{
                  fontSize: 'clamp(2.75rem, 6vw, 5.5rem)',
                  color: 'var(--ink-primary)',
                  lineHeight: 0.92,
                }}
              >
                LET'S<br />
                <span style={{ color: 'var(--accent-vermillion)' }}>CONNECT.</span>
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: 'var(--ink-secondary)',
                  lineHeight: 1.6,
                  maxWidth: '440px',
                }}
              >
                Interested in hiring for a software developer role, exploring contract engineering, or discussing applied AI integrations?
              </p>

              <div style={{ paddingTop: '1rem' }}>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="btn-editorial-primary btn-mobile-full"
                  style={{
                    padding: '1rem 2rem',
                    fontSize: '12.5px',
                  }}
                  data-cursor="INQUIRE"
                >
                  <span>START A CONVERSATION</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right: Structured Business Card Reverse Details */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid var(--border-ink)',
                padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                boxShadow: '6px 6px 0px var(--border-rule)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              {/* Email */}
              <div style={{ borderBottom: '1px solid var(--border-rule)', paddingBottom: '1rem' }}>
                <span className="label-technical" style={{ color: 'var(--ink-secondary)', fontSize: '10px' }}>
                  DIRECT DISPATCH (EMAIL)
                </span>
                <a
                  href={`mailto:${portfolioData.email}`}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(13px, 3.5vw, 15px)',
                    fontWeight: 700,
                    color: 'var(--ink-primary)',
                    marginTop: '4px',
                    wordBreak: 'break-word',
                    overflowWrap: 'anywhere',
                  }}
                  data-cursor="EMAIL"
                >
                  {portfolioData.email}
                </a>
              </div>

              {/* Phone */}
              <div style={{ borderBottom: '1px solid var(--border-rule)', paddingBottom: '1rem' }}>
                <span className="label-technical" style={{ color: 'var(--ink-secondary)', fontSize: '10px' }}>
                  MOBILE FREQUENCY
                </span>
                <a
                  href={`tel:${portfolioData.phone}`}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(13px, 3.5vw, 15px)',
                    fontWeight: 700,
                    color: 'var(--ink-primary)',
                    marginTop: '4px',
                  }}
                  data-cursor="CALL"
                >
                  {portfolioData.phone}
                </a>
              </div>

              {/* GitHub */}
              <div style={{ borderBottom: '1px solid var(--border-rule)', paddingBottom: '1rem' }}>
                <span className="label-technical" style={{ color: 'var(--ink-secondary)', fontSize: '10px' }}>
                  CODE REPOSITORY
                </span>
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(13px, 3.5vw, 15px)',
                    fontWeight: 700,
                    color: 'var(--ink-primary)',
                    marginTop: '4px',
                    wordBreak: 'break-word',
                    overflowWrap: 'anywhere',
                  }}
                  data-cursor="GITHUB"
                >
                  <span>github.com/harsha10062005</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Location */}
              <div>
                <span className="label-technical" style={{ color: 'var(--ink-secondary)', fontSize: '10px' }}>
                  LOCATION & AVAILABILITY
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--ink-primary)',
                    marginTop: '4px',
                  }}
                >
                  HYDERABAD, INDIA · OPEN TO REMOTE & RELOCATION
                </p>
              </div>

              {/* Bottom Micro Stamp */}
              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-rule)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: 'var(--ink-secondary)',
                }}
              >
                <span>AVAILABLE FOR OPPORTUNITIES</span>
                <span style={{ color: 'var(--accent-vermillion)', fontWeight: 800 }}>HARSHA VARDHAN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
