'use client'

import ScrollReveal from './ScrollReveal'
import { useLang } from './LangContext'

const t = {
  fr: {
    supra: 'Curriculum Vitæ',
    title: 'Télécharger mon CV',
    subtitle: 'Toutes mes expériences, formations et compétences en un seul document.',
    btn: 'Télécharger le CV (PDF)',
    note: 'Mis à jour — 2025',
    highlights: [
      { icon: '💼', text: '3+ ans d\'expérience embarquée' },
      { icon: '🎓', text: 'UTBM Ingénieur · ERASMUS RPTU' },
      { icon: '🏆', text: 'Bourse Eiffel Excellence 2022–2025' },
      { icon: '⚙️', text: 'FreeRTOS · Zephyr · Yocto · STM32' },
    ],
  },
  en: {
    supra: 'Curriculum Vitæ',
    title: 'Download my CV',
    subtitle: 'All my experience, education and skills in one document.',
    btn: 'Download CV (PDF)',
    note: 'Updated — 2025',
    highlights: [
      { icon: '💼', text: '3+ years embedded experience' },
      { icon: '🎓', text: 'UTBM Engineering · ERASMUS RPTU' },
      { icon: '🏆', text: 'Eiffel Excellence Scholarship 2022–2025' },
      { icon: '⚙️', text: 'FreeRTOS · Zephyr · Yocto · STM32' },
    ],
  },
}

export default function CVDownload() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section id="cv" className="sec" style={{ textAlign: 'center' }}>
      <ScrollReveal>
        <div style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.15em', color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: '.75rem' }}>
          {tx.supra}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text)' }}>
          {tx.title}
        </h2>
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg,var(--blue),transparent)', margin: '1.5rem auto' }} />
      </ScrollReveal>

      <ScrollReveal>
        <div style={{
          maxWidth: '680px', margin: '3rem auto 0',
          background: 'var(--bg-card)',
          border: '1px solid var(--blue-border)',
          borderRadius: 'var(--radius)',
          padding: '3rem 2.5rem',
          position: 'relative',
          overflow: 'hidden',
          animation: 'glowPulse 4s ease-in-out infinite',
        }}>
          {/* Decorative glow corner */}
          <div style={{
            position: 'absolute', top: '-60px', right: '-60px',
            width: '180px', height: '180px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-40px', left: '-40px',
            width: '140px', height: '140px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1rem', lineHeight: 1.8 }}>
            {tx.subtitle}
          </p>

          {/* Highlights grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '.85rem',
            marginBottom: '2.5rem',
            textAlign: 'left',
          }}>
            {tx.highlights.map(({ icon, text }, i) => (
              <div key={text}
                className={`stagger-${i + 1}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: '.65rem',
                  background: 'rgba(0,212,255,0.05)',
                  border: '1px solid rgba(0,212,255,0.12)',
                  borderRadius: '10px',
                  padding: '.75rem 1rem',
                  fontSize: '.82rem', color: 'var(--text-muted)',
                  animation: `tagPop 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 * (i + 1)}s both`,
                }}
              >
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Download button */}
          <a
            href="/cv.pdf"
            download
            className="btn-shimmer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '.75rem',
              background: 'linear-gradient(135deg, #00d4ff, #6ee7fa)',
              color: '#0c0a08',
              fontWeight: 800,
              fontSize: '1rem',
              padding: '1rem 2.5rem',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 0 40px rgba(0,212,255,0.4)',
              transition: 'all .25s',
              letterSpacing: '.01em',
            }}
          >
            <span style={{ fontSize: '1.3rem', animation: 'downloadBounce 2s ease-in-out infinite' }}>⬇</span>
            {tx.btn}
          </a>

          <p style={{ marginTop: '1rem', fontSize: '.75rem', color: 'var(--text-dim)', fontStyle: 'italic' }}>{tx.note}</p>
        </div>
      </ScrollReveal>

      <style>{`
        @media (max-width: 480px) {
          #cv .cv-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
