import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { MapPin, Mail, Phone, ArrowRight, CornerDownRight } from 'lucide-react';

export default function DigitalCard({ onUnfold }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Subtle 3D tilt tracking
  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -5.0; // max 5deg
    const rotY = ((x - centerX) / centerX) * 5.0;  // max 5deg

    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <section
      id="hero-card"
      className="card-perspective-stage"
      style={{
        minHeight: 'calc(100vh - 68px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '2rem',
        paddingBottom: '3.5rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
      }}
    >
      {/* The Central Tactile Digital Visiting Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
          scale: isHovered ? 1.01 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 260 }}
        style={{
          width: '100%',
          maxWidth: '920px',
          backgroundColor: 'var(--bg-paper-light)',
          border: '2px solid var(--border-ink)',
          boxShadow: isHovered ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
          padding: 'clamp(1.25rem, 3.5vw, 3rem)',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'box-shadow 0.3s ease',
        }}
        className="visiting-card-container"
        data-cursor="TILT"
      >
        {/* Subtle Watermark inside card */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(70px, 16vw, 150px)',
            color: 'var(--ink-primary)',
            opacity: 0.03,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            userSelect: 'none',
            letterSpacing: '-0.05em',
          }}
        >
          HARSHA
        </div>

        {/* Card Header Strip */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid var(--border-rule)',
            paddingBottom: '1.25rem',
            marginBottom: '2rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-vermillion)' }} />
            <span className="label-technical" style={{ color: 'var(--ink-primary)' }}>
              PORTFOLIO ARCHIVE
            </span>
          </div>

          <div className="label-code" style={{ fontSize: '11px', color: 'var(--ink-secondary)' }}>
            2026 EDITION
          </div>
        </div>

        {/* Card Grid Layout */}
        <div className="grid-card-inner">
          {/* Identity & Typography */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div
              className="badge-technical"
              style={{
                width: 'fit-content',
                backgroundColor: 'rgba(8, 8, 8, 0.04)',
                borderColor: 'var(--border-rule)',
              }}
            >
              <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-vermillion)' }} />
              <span style={{ color: 'var(--ink-primary)', fontWeight: 700 }}>SOFTWARE DEVELOPER</span>
              <span style={{ color: 'var(--ink-secondary)' }}>·</span>
              <span style={{ color: 'var(--ink-secondary)' }}>FULL STACK</span>
            </div>

            {/* Massive Editorial Name */}
            <div>
              <h1
                className="display-monumental"
                style={{
                  fontSize: 'clamp(2.5rem, 6.5vw, 4.75rem)',
                  color: 'var(--ink-primary)',
                  letterSpacing: '-0.04em',
                  lineHeight: 0.95,
                }}
              >
                Harsha<br />
                <span style={{ fontWeight: 400, fontStyle: 'italic', fontFamily: 'serif' }}>
                  Vardhan
                </span>
              </h1>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--ink-secondary)',
                lineHeight: 1.6,
                maxWidth: '480px',
              }}
            >
              Crafting high-throughput full stack architectures, intelligent AI integrations, and tactile web interfaces with pixel precision.
            </p>

            {/* Technical Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '4px' }}>
              <span className="badge-technical">React.js</span>
              <span className="badge-technical">Python / Django</span>
              <span className="badge-technical">Node.js & Express</span>
              <span className="badge-technical">TypeScript</span>
              <span className="badge-technical badge-technical-accent">Gemini API</span>
            </div>
          </div>

          {/* Editorial Portrait Frame */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: 'clamp(170px, 22vw, 210px)',
                aspectRatio: '3/4',
                border: '2px solid var(--border-ink)',
                backgroundColor: '#FFFFFF',
                padding: '8px',
                boxShadow: '4px 4px 0px #080808',
                transition: 'transform 0.3s ease',
              }}
            >
              {/* Corner Registration Marks */}
              <span style={{ position: 'absolute', top: '3px', left: '4px', fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-vermillion)', fontWeight: 'bold' }}>+</span>
              <span style={{ position: 'absolute', top: '3px', right: '4px', fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-vermillion)', fontWeight: 'bold' }}>+</span>
              <span style={{ position: 'absolute', bottom: '3px', left: '4px', fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-vermillion)', fontWeight: 'bold' }}>+</span>
              <span style={{ position: 'absolute', bottom: '3px', right: '4px', fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-vermillion)', fontWeight: 'bold' }}>+</span>

              {/* Verified Portrait Image */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                  backgroundColor: '#E5E2D9',
                  position: 'relative',
                  border: '1px solid var(--border-rule)',
                }}
              >
                <img
                  src="/profile.png"
                  alt="Harsha Vardhan — Software Developer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(25%) contrast(108%)',
                    transition: 'filter 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%) contrast(100%)')}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(25%) contrast(108%)')}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card Footer & Transformation Trigger */}
        <div
          style={{
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-rule)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.25rem',
          }}
        >
          {/* Telemetry info */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px 14px',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--ink-secondary)',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <MapPin size={13} color="var(--accent-vermillion)" />
              {portfolioData.location}
            </span>
            <span>•</span>
            <span className="break-anywhere" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Mail size={13} color="var(--ink-primary)" />
              {portfolioData.email}
            </span>
            <span className="hidden-mobile">•</span>
            <span className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Phone size={13} color="var(--ink-primary)" />
              {portfolioData.phone}
            </span>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={onUnfold}
            className="btn-editorial-primary btn-mobile-full"
            style={{
              padding: '0.85rem 1.6rem',
              fontSize: '12px',
            }}
            data-cursor="UNFOLD"
          >
            <span>UNFOLD DOSSIER & EXPLORE</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </motion.div>

      {/* Down arrow scroll prompt */}
      <div
        onClick={onUnfold}
        style={{
          marginTop: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          cursor: 'pointer',
          opacity: 0.6,
          transition: 'opacity 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
      >
        <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--ink-primary)' }} />
      </div>
    </section>
  );
}
