'use client'

import ScrollReveal from './ScrollReveal'
import { useLang } from './LangContext'

const labels = {
  fr: {
    supra: ‘Ma plateforme de services’,
    title: ‘TA Embedded’,
    tagline: ‘La référence francophone en formation logiciel embarqué’,
    taglineDesc: `Articles techniques, tutoriels et retours d'expérience sur le développement embarqué — FreeRTOS, Zephyr, Linux, CAN, UDS et bien plus.`,
    visitBtn: ‘Visiter ta-embedded.com’,
  },
  en: {
    supra: ‘My services platform’,
    title: ‘TA Embedded’,
    tagline: ‘The reference platform for embedded software training’,
    taglineDesc: ‘Technical articles, tutorials and write-ups on embedded development — FreeRTOS, Zephyr, Linux, CAN, UDS and more.’,
    visitBtn: ‘Visit ta-embedded.com’,
  },
}

export default function Blog() {
  const { lang } = useLang()
  const lbl = labels[lang]

  return (
    <section id="ta-embedded" className="sec" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,212,255,0.025), transparent)' }}>
      <ScrollReveal>
        <div style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.15em', color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: '.75rem' }}>
          {lbl.supra}
        </div>
      </ScrollReveal>

      {/* TA Embedded hero banner */}
      <ScrollReveal>
        <div style={{
          maxWidth: '860px', margin: '0 auto 3.5rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--blue-border)',
          borderRadius: 'var(--radius)',
          padding: '2.5rem 3rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '2rem', flexWrap: 'wrap',
          position: 'relative', overflow: 'hidden',
          animation: 'glowPulse 4s ease-in-out infinite',
        }}>
          {/* bg orb */}
          <div style={{ position: 'absolute', right: '-40px', top: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.75rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 900, letterSpacing: '-0.04em' }}>
                <span className="text-gradient-blue">TA</span>
                <span style={{ color: 'var(--text)' }}> Embedded</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '.95rem', lineHeight: 1.7, maxWidth: '500px' }}>
              {lbl.taglineDesc}
            </p>
          </div>
          <a href="https://www.ta-embedded.com" target="_blank" rel="noopener noreferrer"
            className="btn-shimmer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '.6rem',
              background: 'linear-gradient(135deg,#d4a017,#f5c842)',
              color: '#0c0a08', fontWeight: 800,
              padding: '1rem 2rem', borderRadius: '12px',
              textDecoration: 'none', fontSize: '.95rem',
              boxShadow: '0 0 30px rgba(0,212,255,0.4)',
              whiteSpace: 'nowrap', flexShrink: 0,
              transition: 'all .25s',
            }}
          >
            {lbl.visitBtn} <span style={{ fontSize: '.9rem' }}>↗</span>
          </a>
        </div>
      </ScrollReveal>

    </section>
  )
}
