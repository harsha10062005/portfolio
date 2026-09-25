import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
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
            marginBottom: '3.5rem',
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
                04 / EXPERIENCE
              </span>
            </div>
            <h2
              className="headline-editorial"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--ink-primary)',
              }}
            >
              INDUSTRY INTERNSHIPS
            </h2>
          </div>
        </div>

        {/* Architectural Timeline Track */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {portfolioData.experience.map((exp, index) => (
            <div
              key={exp.id}
              style={{
                borderLeft: '2px solid var(--border-ink)',
                paddingLeft: 'clamp(1.5rem, 4vw, 2.5rem)',
                position: 'relative',
              }}
            >
              {/* Square Node */}
              <div
                style={{
                  position: 'absolute',
                  left: '-7px',
                  top: '6px',
                  width: '12px',
                  height: '12px',
                  backgroundColor: index === 0 ? 'var(--accent-vermillion)' : 'var(--ink-primary)',
                  border: '2px solid var(--border-ink)',
                }}
              />

              {/* Title & Organization */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: '12px',
                  marginBottom: '6px',
                }}
              >
                <h3
                  className="headline-editorial"
                  style={{
                    fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                    color: 'var(--ink-primary)',
                  }}
                >
                  {exp.role}
                </h3>

                <span
                  className="label-technical"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-rule)',
                    padding: '4px 10px',
                    color: 'var(--ink-primary)',
                    boxShadow: '2px 2px 0px var(--border-rule)',
                  }}
                >
                  {exp.company}
                </span>
              </div>

              {/* Term */}
              <p
                className="label-technical"
                style={{
                  fontSize: '11px',
                  color: 'var(--ink-secondary)',
                  marginBottom: '1rem',
                }}
              >
                {exp.term}
              </p>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  color: 'var(--ink-secondary)',
                  lineHeight: 1.65,
                  maxWidth: '780px',
                  marginBottom: '1.25rem',
                }}
              >
                {exp.description}
              </p>

              {/* Skills Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="badge-technical" style={{ fontSize: '10.5px' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
