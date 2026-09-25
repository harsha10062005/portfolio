import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState({ text: '', active: false });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor') || 'VIEW';
        setCursorState({ text, active: true });
      } else if (e.target.closest('a, button')) {
        setCursorState({ text: 'OPEN', active: true });
      } else {
        setCursorState({ text: '', active: false });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      id="custom-cursor-follower"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: cursorState.active ? '54px' : '14px',
        height: cursorState.active ? '54px' : '14px',
        backgroundColor: cursorState.active ? '#FF5A36' : '#080808',
        border: cursorState.active ? '1px solid #FF5A36' : '1px solid #FFFFFF',
        color: '#FFFFFF',
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        fontWeight: 700,
        letterSpacing: '0.08em',
        boxShadow: cursorState.active ? '0 4px 14px rgba(255, 90, 54, 0.4)' : 'none',
      }}
    >
      {cursorState.active && <span>{cursorState.text}</span>}
    </div>
  );
}
