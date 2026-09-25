import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './SocialIcons';
import { ShoppingBag, Sparkles, Mic, FileText, ArrowRight } from 'lucide-react';

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
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
                02 / SELECTED WORK
              </span>
            </div>
            <h2
              className="headline-editorial"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--ink-primary)',
              }}
            >
              FEATURED ARTIFACTS
            </h2>
          </div>
        </div>

        {/* Project 01: Demon Slayer Merchandise Platform (Info Left, Visual Right) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {/* Card 1 */}
          <article
            style={{
              backgroundColor: 'var(--bg-paper-light)',
              border: '2px solid var(--border-ink)',
              padding: 'clamp(1.5rem, 4vw, 2.75rem)',
              boxShadow: 'var(--shadow-project)',
              transition: 'box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-project-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-project)')}
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
              {/* Info Left */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                  <span style={{ color: 'var(--accent-vermillion)', fontWeight: 800, fontSize: '14px' }}>01</span>
                  <span style={{ color: 'var(--ink-secondary)' }}>/</span>
                  <span className="label-technical" style={{ color: 'var(--ink-secondary)' }}>
                    {portfolioData.projects[0].category}
                  </span>
                </div>

                <h3
                  className="headline-editorial"
                  style={{
                    fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                    color: 'var(--ink-primary)',
                  }}
                >
                  {portfolioData.projects[0].title}
                </h3>

                <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--ink-secondary)', lineHeight: 1.6 }}>
                  {portfolioData.projects[0].description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '6px' }}>
                  {portfolioData.projects[0].tags.map((tag, idx) => (
                    <span key={idx} className="badge-technical">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px 14px', paddingTop: '1rem', flexWrap: 'wrap' }}>
                  {portfolioData.projects[0].liveUrl && (
                    <a
                      href={portfolioData.projects[0].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-editorial-primary"
                      style={{
                        padding: '0.65rem 1.25rem',
                        fontSize: '11px',
                        backgroundColor: 'var(--accent-vermillion)',
                        borderColor: 'var(--accent-vermillion)',
                        color: '#FFFFFF',
                      }}
                      data-cursor="LIVE"
                    >
                      <span style={{ width: '6px', height: '6px', backgroundColor: '#FFFFFF', display: 'inline-block' }} />
                      <span>LIVE STOREFRONT ↗</span>
                    </a>
                  )}

                  <a
                    href={portfolioData.projects[0].sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label-technical"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--ink-primary)',
                      borderBottom: '2px solid var(--border-ink)',
                      paddingBottom: '2px',
                    }}
                    data-cursor="SOURCE"
                  >
                    <GithubIcon size={14} />
                    <span>SOURCE REPO ↗</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(portfolioData.projects[0])}
                    className="btn-editorial-secondary"
                    style={{ padding: '0.65rem 1.25rem', fontSize: '11px' }}
                    data-cursor="SPEC"
                  >
                    <span>VIEW SPEC SHEET</span>
                  </button>
                </div>
              </div>

              {/* Visual Console Right */}
              <div>
                <div
                  style={{
                    width: '100%',
                    minHeight: '220px',
                    height: 'auto',
                    backgroundColor: 'var(--bg-dark-panel)',
                    border: '2px solid var(--border-ink)',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                    gap: '1.25rem',
                  }}
                >
                  {/* Console Header */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                      paddingBottom: '8px',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                      <span style={{ width: '9px', height: '9px', backgroundColor: '#EF4444' }} />
                      <span style={{ width: '9px', height: '9px', backgroundColor: '#F59E0B' }} />
                      <span style={{ width: '9px', height: '9px', backgroundColor: '#10B981' }} />
                    </div>
                    <span
                      className="label-code break-anywhere"
                      style={{
                        fontSize: 'clamp(9px, 2.5vw, 11px)',
                        color: '#10B981',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        maxWidth: '75%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <span style={{ width: '6px', height: '6px', backgroundColor: '#10B981', display: 'inline-block', flexShrink: 0 }} />
                      DHULAMART-FPSJ-GRAY.VERCEL.APP
                    </span>
                  </div>

                  {/* Graphic Display */}
                  <div style={{ textAlign: 'center', margin: 'auto 0' }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        padding: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        marginBottom: '8px',
                      }}
                    >
                      <ShoppingBag size={28} color="var(--accent-vermillion)" />
                    </div>
                    <div className="headline-editorial" style={{ fontSize: '16px', color: '#FFFFFF', letterSpacing: '0.04em' }}>
                      NEXAMART MODERN STOREFRONT
                    </div>
                    <div className="label-code" style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '4px' }}>
                      {portfolioData.projects[0].badge}
                    </div>

                    <a
                      href={portfolioData.projects[0].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label-technical"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginTop: '10px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        color: '#FFFFFF',
                        padding: '4px 10px',
                        fontSize: '10px',
                      }}
                      data-cursor="VISIT"
                    >
                      <span>VISIT LIVE DEPLOYMENT</span>
                      <span>↗</span>
                    </a>
                  </div>

                  {/* Console Footer */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                      paddingTop: '8px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    <span>PRODUCTION DEPLOYMENT</span>
                    <span style={{ color: '#10B981', fontWeight: 700 }}>
                      VERCEL CI/CD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Card 2: AI Resume Enhancer (Visual Left, Info Right) */}
          <article
            style={{
              backgroundColor: 'var(--bg-paper-light)',
              border: '2px solid var(--border-ink)',
              padding: 'clamp(1.5rem, 4vw, 2.75rem)',
              boxShadow: 'var(--shadow-project)',
              transition: 'box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-project-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-project)')}
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
              {/* Visual Left */}
              <div className="order-2-mobile">
                <div
                  style={{
                    width: '100%',
                    minHeight: '220px',
                    height: 'auto',
                    backgroundColor: 'var(--bg-dark-panel)',
                    border: '2px solid var(--border-ink)',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                    gap: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                      paddingBottom: '8px',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <span style={{ width: '9px', height: '9px', backgroundColor: '#EF4444' }} />
                      <span style={{ width: '9px', height: '9px', backgroundColor: '#F59E0B' }} />
                      <span style={{ width: '9px', height: '9px', backgroundColor: '#10B981' }} />
                    </div>
                    <span className="label-code" style={{ fontSize: '11px', color: 'var(--accent-vermillion)', fontWeight: 700 }}>
                      GEMINI-1.5-FLASH
                    </span>
                  </div>

                  <div style={{ textAlign: 'center', margin: 'auto 0' }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        padding: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        marginBottom: '8px',
                      }}
                    >
                      <Sparkles size={28} color="var(--accent-vermillion)" />
                    </div>
                    <div className="headline-editorial" style={{ fontSize: '15px', color: '#FFFFFF', letterSpacing: '0.04em' }}>
                      ATS PARSER & SCORE CARD
                    </div>
                    <div className="label-code" style={{ fontSize: '11px', color: '#34D399', marginTop: '4px' }}>
                      MATCH SCORE: 94.8% OPTIMIZED
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                      paddingTop: '8px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    <span>GEMINI 1.5 FLASH</span>
                    <span style={{ color: '#10B981', fontWeight: 700 }}>ACTIVE PIPELINE</span>
                  </div>
                </div>
              </div>

              {/* Info Right */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                  <span style={{ color: 'var(--accent-vermillion)', fontWeight: 800, fontSize: '14px' }}>02</span>
                  <span style={{ color: 'var(--ink-secondary)' }}>/</span>
                  <span className="label-technical" style={{ color: 'var(--ink-secondary)' }}>
                    {portfolioData.projects[1].category}
                  </span>
                </div>

                <h3
                  className="headline-editorial"
                  style={{
                    fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                    color: 'var(--ink-primary)',
                  }}
                >
                  {portfolioData.projects[1].title}
                </h3>

                <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--ink-secondary)', lineHeight: 1.6 }}>
                  {portfolioData.projects[1].description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '6px' }}>
                  {portfolioData.projects[1].tags.map((tag, idx) => (
                    <span key={idx} className="badge-technical">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '1rem', flexWrap: 'wrap' }}>
                  <a
                    href={portfolioData.projects[1].sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label-technical"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--ink-primary)',
                      borderBottom: '2px solid var(--border-ink)',
                      paddingBottom: '2px',
                    }}
                    data-cursor="SOURCE"
                  >
                    <GithubIcon size={14} />
                    <span>SOURCE REPO ↗</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(portfolioData.projects[1])}
                    className="btn-editorial-primary"
                    style={{ padding: '0.65rem 1.25rem', fontSize: '11px' }}
                    data-cursor="SPEC"
                  >
                    <span>VIEW SPEC SHEET</span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Card 3: Voice Assistant & Authentication (Large Visual + Info Below) */}
          <article
            style={{
              backgroundColor: 'var(--bg-paper-light)',
              border: '2px solid var(--border-ink)',
              padding: 'clamp(1.5rem, 4vw, 2.75rem)',
              boxShadow: 'var(--shadow-project)',
              transition: 'box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-project-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-project)')}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Header Info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                  <span style={{ color: 'var(--accent-vermillion)', fontWeight: 800, fontSize: '14px' }}>03</span>
                  <span style={{ color: 'var(--ink-secondary)' }}>/</span>
                  <span className="label-technical" style={{ color: 'var(--ink-secondary)' }}>
                    {portfolioData.projects[2].category}
                  </span>
                </div>
              </div>

              <div
                className="responsive-grid-1col"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '2rem',
                  alignItems: 'center',
                }}
              >
                <div>
                  <h3
                    className="headline-editorial"
                    style={{
                      fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                      color: 'var(--ink-primary)',
                      marginBottom: '1rem',
                    }}
                  >
                    {portfolioData.projects[2].title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--ink-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {portfolioData.projects[2].description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
                    {portfolioData.projects[2].tags.map((tag, idx) => (
                      <span key={idx} className="badge-technical">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px 14px', flexWrap: 'wrap' }}>
                    <a
                      href={portfolioData.projects[2].sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label-technical"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--ink-primary)',
                        borderBottom: '2px solid var(--border-ink)',
                        paddingBottom: '2px',
                      }}
                      data-cursor="SOURCE"
                    >
                      <GithubIcon size={14} />
                      <span>SOURCE REPO ↗</span>
                    </a>

                    <button
                      onClick={() => setSelectedProject(portfolioData.projects[2])}
                      className="btn-editorial-primary"
                      style={{ padding: '0.65rem 1.25rem', fontSize: '11px' }}
                      data-cursor="SPEC"
                    >
                      <span>VIEW SPEC SHEET</span>
                    </button>
                  </div>
                </div>

                {/* Waveform Console Graphic */}
                <div>
                  <div
                    style={{
                      width: '100%',
                      minHeight: '200px',
                      height: 'auto',
                      backgroundColor: 'var(--bg-dark-panel)',
                      border: '2px solid var(--border-ink)',
                      padding: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      overflow: 'hidden',
                      gap: '1rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                        paddingBottom: '8px',
                      }}
                    >
                      <span className="label-code" style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)' }}>
                        VOICE-ENGINE.PY // SPECTRUM
                      </span>
                      <span className="label-code" style={{ fontSize: '11px', color: '#10B981' }}>
                        ● RECORDING STREAM ACTIVE
                      </span>
                    </div>

                    <div style={{ textAlign: 'center', margin: 'auto 0' }}>
                      <Mic size={24} color="var(--accent-vermillion)" style={{ margin: '0 auto 10px auto' }} />
                      {/* Animated audio waveform bars */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', height: '36px' }}>
                        {[16, 28, 12, 34, 22, 14, 30, 18, 36, 15, 26, 32, 20, 14].map((h, i) => (
                          <div
                            key={i}
                            style={{
                              width: '3px',
                              height: `${h}px`,
                              backgroundColor: i % 2 === 0 ? 'var(--accent-vermillion)' : '#FFFFFF',
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                        paddingTop: '8px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: 'rgba(255, 255, 255, 0.6)',
                      }}
                    >
                      <span>AUDIO INPUT STREAM</span>
                      <span style={{ color: '#10B981', fontWeight: 700 }}>ENGINE ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
