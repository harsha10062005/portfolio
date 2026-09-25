import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, GraduationCap } from 'lucide-react';

export default function EducationSection() {
  return (
    <section
      id="education"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        borderTop: '1px solid var(--border-rule)',
      }}
    >
      <div className="container-editorial">
        <div className="grid-editorial-2">
          {/* Education Column */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '1rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--border-rule)',
              }}
            >
              <GraduationCap size={16} color="var(--accent-vermillion)" />
              <span className="label-technical" style={{ color: 'var(--accent-vermillion)' }}>
                ACADEMIC CREDENTIALS
              </span>
            </div>

            <h3
              className="headline-editorial"
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                color: 'var(--ink-primary)',
                marginBottom: '2rem',
              }}
            >
              EDUCATION
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {portfolioData.education.map((edu, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: edu.isPrimary ? '#FFFFFF' : 'transparent',
                    border: edu.isPrimary ? '2px solid var(--border-ink)' : '1px solid var(--border-rule)',
                    padding: '1.25rem',
                    boxShadow: edu.isPrimary ? '4px 4px 0px #080808' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '16px',
                        color: 'var(--ink-primary)',
                      }}
                    >
                      {edu.degree}
                    </h4>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        fontSize: '13px',
                        color: 'var(--accent-vermillion)',
                      }}
                    >
                      {edu.score}
                    </span>
                  </div>

                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '13.5px', color: 'var(--ink-secondary)', marginBottom: '6px' }}>
                    {edu.institution}
                  </p>

                  <span className="label-technical" style={{ fontSize: '10px', color: 'var(--ink-secondary)' }}>
                    PERIOD: {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '1rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--border-rule)',
              }}
            >
              <Award size={16} color="var(--accent-vermillion)" />
              <span className="label-technical" style={{ color: 'var(--accent-vermillion)' }}>
                VERIFIED SPECIALIZATIONS
              </span>
            </div>

            <h3
              className="headline-editorial"
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                color: 'var(--ink-primary)',
                marginBottom: '2rem',
              }}
            >
              CERTIFICATIONS
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {portfolioData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-paper-light)',
                    border: '1px solid var(--border-rule)',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    transition: 'border-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-vermillion)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-rule)')}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="badge-technical" style={{ fontSize: '10px' }}>
                      {cert.badge}
                    </span>
                    <span className="label-technical" style={{ fontSize: '10px', color: 'var(--ink-secondary)' }}>
                      INDEX #0{idx + 1}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '15px',
                      color: 'var(--ink-primary)',
                      marginTop: '4px',
                    }}
                  >
                    {cert.title}
                  </h4>

                  <p className="label-code" style={{ fontSize: '12px', color: 'var(--ink-secondary)' }}>
                    ISSUER: {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
