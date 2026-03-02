import React, { useState } from 'react';
import { useTheme, THEMES } from '../ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const themeList = Object.values(THEMES);

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col items-start gap-2">

      {/* Expanded Panel */}
      <div
        className="theme-panel"
        style={{
          maxHeight: open ? '320px' : '0px',
          opacity: open ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.23,1,0.32,1), opacity 0.3s ease',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        <div style={{
          background: 'rgba(5,5,5,0.92)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px)',
          padding: '14px',
          clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
          minWidth: '200px',
          marginBottom: '8px',
        }}>
          {/* Header */}
          <div style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: '0.6rem',
            letterSpacing: '3px',
            color: 'rgba(255,255,255,0.3)',
            marginBottom: '12px',
            paddingBottom: '8px',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}>
            // SELECT_THEME
          </div>

          {/* Theme Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {themeList.map((t) => {
              const isActive = theme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => { setTheme(t.id); setOpen(false); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    background: isActive ? t.color + '15' : 'transparent',
                    border: `1px solid ${isActive ? t.color + '60' : 'rgba(255,255,255,0.06)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                    clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.background = t.color + '0d';
                      e.currentTarget.style.borderColor = t.color + '40';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    }
                  }}
                >
                  {/* Color dot */}
                  <span style={{
                    width: '8px', height: '8px',
                    borderRadius: '50%',
                    background: t.color,
                    flexShrink: 0,
                    boxShadow: isActive ? `0 0 8px ${t.color}` : 'none',
                    transition: 'box-shadow 0.3s',
                  }} />

                  {/* Label block */}
                  <span style={{ flex: 1, textAlign: 'left' }}>
                    <span style={{
                      display: 'block',
                      fontFamily: "'Orbitron', sans-serif",
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: isActive ? t.color : 'rgba(255,255,255,0.6)',
                      letterSpacing: '2px',
                      transition: 'color 0.25s',
                    }}>
                      {t.label}
                    </span>
                    <span style={{
                      display: 'block',
                      fontFamily: "'Share Tech Mono', monospace",
                      fontSize: '0.55rem',
                      color: 'rgba(255,255,255,0.25)',
                      letterSpacing: '1px',
                    }}>
                      {t.desc}
                    </span>
                  </span>

                  {/* Active indicator */}
                  {isActive && (
                    <span style={{
                      fontFamily: "'Share Tech Mono', monospace",
                      fontSize: '0.55rem',
                      color: t.color,
                      letterSpacing: '1px',
                    }}>
                      ◆
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Current tag */}
          <div style={{
            marginTop: '10px',
            paddingTop: '8px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: '0.55rem',
            color: 'rgba(255,255,255,0.2)',
            letterSpacing: '2px',
          }}>
            ACTIVE: <span style={{ color: THEMES[theme].color }}>{THEMES[theme].tag}_MODE</span>
          </div>
        </div>
      </div>

      {/* Toggle Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        title="Switch Theme"
        style={{
          width: '42px',
          height: '42px',
          background: open ? THEMES[theme].color + '20' : 'rgba(5,5,5,0.85)',
          border: `1px solid ${open ? THEMES[theme].color + '80' : 'rgba(255,255,255,0.1)'}`,
          backdropFilter: 'blur(12px)',
          color: THEMES[theme].color,
          fontSize: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s',
          clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
          boxShadow: open ? `0 0 16px ${THEMES[theme].color}30` : 'none',
          position: 'relative',
        }}
      >
        {/* Rotating palette icon */}
        <svg
          width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
          style={{ transition: 'transform 0.4s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a10 10 0 0 1 10 10" />
          <circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="7" cy="16" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="17" cy="16" r="1.5" fill="currentColor" stroke="none" />
        </svg>

        {/* Live color dot */}
        <span style={{
          position: 'absolute',
          top: '6px', right: '6px',
          width: '5px', height: '5px',
          borderRadius: '50%',
          background: THEMES[theme].color,
          boxShadow: `0 0 6px ${THEMES[theme].color}`,
        }} />
      </button>
    </div>
  );
};

export default ThemeToggle;
