import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        borderTop: '1px solid var(--border-rule)',
      }}
    >
      <div className="container-editorial">
        {/* Section Index Marker */}
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
              01 / ABOUT
            </span>
          </div>
        </div>

        {/* 2-Column Architectural Layout */}
        <div className="grid-editorial-2">
          {/* Left Column: Monumental Title & Philosophy */}
          <div>
            <div className="sticky-desktop" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h2
                className="display-monumental"
                style={{
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                  color: 'var(--ink-primary)',
                  letterSpacing: '-0.04em',
                }}
              >
                SOFTWARE<br />
                <span style={{ color: 'var(--ink-secondary)', fontStyle: 'italic', fontWeight: 400, fontFamily: 'serif' }}>
                  ENGINEER
                </span>
              </h2>

              <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--accent-vermillion)' }} />

              {/* Engineering Philosophy Card */}
              <div
                style={{
                  marginTop: '1rem',
                  padding: '1.25rem',
                  backgroundColor: '#FFFFFF',
                  border: '2px solid var(--border-ink)',
                  boxShadow: '4px 4px 0px #080808',
                }}
              >
                <p className="label-technical" style={{ color: 'var(--ink-primary)', marginBottom: '8px' }}>
                  ENGINEERING PHILOSOPHY
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13.5px', color: 'var(--ink-secondary)', lineHeight: 1.6 }}>
                  "{portfolioData.philosophy}"
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Statement, Core Domains & Technical Vitals */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                color: 'var(--ink-primary)',
                lineHeight: 1.45,
                fontWeight: 600,
              }}
            >
              {portfolioData.statement}
            </p>

            {/* Core Domain Blocks */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-rule)',
              }}
            >
              {portfolioData.coreDomains.map((domain) => (
                <div key={domain.id} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span className="label-technical" style={{ color: 'var(--accent-vermillion)' }}>
                    {domain.id}. {domain.title}
                  </span>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--ink-secondary)', lineHeight: 1.6 }}>
                    {domain.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Technical Vitals Table */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-rule)',
                padding: '1.5rem',
                boxShadow: '4px 4px 0px 0px var(--border-rule)',
              }}
            >
              <div
                className="label-technical"
                style={{
                  color: 'var(--accent-vermillion)',
                  marginBottom: '1rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid var(--border-rule)',
                }}
              >
                ACADEMIC VITALS
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', fontFamily: 'var(--font-mono)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px 12px', paddingBottom: '6px', borderBottom: '1px solid var(--border-rule)' }}>
                  <span style={{ color: 'var(--ink-secondary)' }}>ACADEMIC DEGREE</span>
                  <span style={{ fontWeight: 600, color: 'var(--ink-primary)' }}>B.Tech CSE (2022–2026)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px 12px', paddingBottom: '6px', borderBottom: '1px solid var(--border-rule)' }}>
                  <span style={{ color: 'var(--ink-secondary)' }}>INSTITUTION</span>
                  <span style={{ fontWeight: 600, color: 'var(--ink-primary)' }}>Krishna Univ CET</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px 12px', paddingBottom: '6px', borderBottom: '1px solid var(--border-rule)' }}>
                  <span style={{ color: 'var(--ink-secondary)' }}>ACADEMIC SCORE</span>
                  <span style={{ fontWeight: 700, color: 'var(--accent-vermillion)' }}>7.5 CGPA</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px 12px', paddingBottom: '6px', borderBottom: '1px solid var(--border-rule)' }}>
                  <span style={{ color: 'var(--ink-secondary)' }}>SECONDARY SCHOOL (SSC)</span>
                  <span style={{ fontWeight: 700, color: 'var(--accent-vermillion)' }}>10.0 GPA</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px 12px' }}>
                  <span style={{ color: 'var(--ink-secondary)' }}>PRIMARY SPECIALIZATION</span>
                  <span style={{ fontWeight: 600, color: 'var(--ink-primary)' }}>React.js · Python · REST APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
