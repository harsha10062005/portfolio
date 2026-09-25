import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 300,
          backgroundColor: 'rgba(8, 8, 8, 0.75)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(1rem, 3vw, 2rem)',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: '100%',
            maxWidth: '780px',
            maxHeight: '90vh',
            overflowY: 'auto',
            backgroundColor: 'var(--bg-paper-light)',
            border: '2px solid var(--border-ink)',
            boxShadow: '16px 16px 0px #080808',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            position: 'relative',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="btn-editorial-secondary"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              padding: '6px 12px',
              fontSize: '11px',
            }}
            data-cursor="CLOSE"
          >
            <X size={14} />
            <span>CLOSE</span>
          </button>

          {/* Modal Header */}
          <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-rule)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="label-technical" style={{ color: 'var(--accent-vermillion)' }}>
                PROJECT OVERVIEW // {project.number}
              </span>
              <span className="label-technical" style={{ color: 'var(--ink-secondary)' }}>
                · {project.category}
              </span>
            </div>
            <h3
              className="headline-editorial"
              style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                color: 'var(--ink-primary)',
              }}
            >
              {project.title}
            </h3>
          </div>

          {/* Description & Specs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--ink-secondary)', lineHeight: 1.65 }}>
              {project.extendedDesc}
            </p>

            {/* Specifications Matrix */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-rule)',
                padding: '1.25rem',
              }}
            >
              <div
                className="label-technical"
                style={{
                  color: 'var(--ink-primary)',
                  marginBottom: '10px',
                  paddingBottom: '6px',
                  borderBottom: '1px solid var(--border-rule)',
                }}
              >
                ARCHITECTURE SPECIFICATIONS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', fontFamily: 'var(--font-mono)' }}>
                {project.specs.map((spec, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    <span style={{ color: 'var(--ink-secondary)' }}>{spec.label}:</span>
                    <span style={{ fontWeight: 600, color: 'var(--ink-primary)', textAlign: 'right' }}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Engineering Features */}
            <div>
              <div className="label-technical" style={{ color: 'var(--ink-primary)', marginBottom: '8px' }}>
                KEY IMPLEMENTATION CAPABILITIES
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {project.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px' }}>
                    <span style={{ color: 'var(--accent-vermillion)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>+</span>
                    <span style={{ color: 'var(--ink-secondary)', lineHeight: 1.5 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '0.5rem' }}>
              {project.tags.map((tag, idx) => (
                <span key={idx} className="badge-technical">
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-rule)',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <span className="label-technical" style={{ color: 'var(--ink-secondary)' }}>
                SOURCE & DEPLOYMENT
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial-primary"
                    style={{
                      padding: '0.65rem 1.4rem',
                      fontSize: '11px',
                      backgroundColor: 'var(--accent-vermillion)',
                      borderColor: 'var(--accent-vermillion)',
                      color: '#FFFFFF',
                    }}
                    data-cursor="LIVE"
                  >
                    <span>VISIT LIVE STOREFRONT ↗</span>
                  </a>
                )}

                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial-secondary"
                  style={{ padding: '0.65rem 1.4rem', fontSize: '11px' }}
                  data-cursor="SOURCE"
                >
                  <GithubIcon size={14} />
                  <span>VIEW CODE ON GITHUB ↗</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
