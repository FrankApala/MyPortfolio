'use client'

import { Download } from 'lucide-react'
import { useLang } from './LangContext'

const t = {
  fr: {
    subtitle: 'Ingénieur Logiciel Embarqué · Ingénieur Systèmes',
    desc: 'Ingénieur logiciel embarqué, en Mastère Spécialisé en Ingénierie des Systèmes à l\'ISAE-SUPAERO. Du firmware bas niveau à l\'architecture système complète - je conçois des systèmes fiables et robustes, du besoin à l\'intégration.',
    cta1: 'Voir mes projets',
    cta2: 'Me contacter',
    ctaFr: 'CV Français',
    ctaEn: 'CV English',
  },
  en: {
    subtitle: 'Embedded Software Engineer · Systems Engineer',
    desc: 'Embedded software engineer pursuing an Advanced Master\'s in Systems Engineering at ISAE-SUPAERO. From low-level firmware to full system architecture - I design reliable, robust systems from requirements to integration.',
    cta1: 'View my projects',
    cta2: 'Contact me',
    ctaFr: 'CV Français',
    ctaEn: 'CV English',
  },
}

export default function Hero() {
  const { lang } = useLang()
  const tx = t[lang]
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

  const primary: React.CSSProperties = { background: '#111827', color: '#ffffff', fontWeight: 600, padding: '.75rem 1.6rem', borderRadius: '8px', textDecoration: 'none', fontSize: '.95rem', display: 'inline-block' }
  const secondary: React.CSSProperties = { background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)', fontWeight: 600, padding: '.75rem 1.6rem', borderRadius: '8px', textDecoration: 'none', fontSize: '.95rem', display: 'inline-block' }
  const cvLink: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '.45rem', color: 'var(--text-muted)', fontSize: '.9rem', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '4px' }

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 5% 60px',
        position: 'relative',
        zIndex: 1,
        maxWidth: '1100px',
        margin: '0 auto',
        gap: '4rem',
      }}
    >
      <div style={{ flex: 1 }} className="hero-text-col">
        <h1 style={{ fontSize: 'clamp(2.2rem, 4.6vw, 3.6rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '.75rem', color: 'var(--text)', animation: 'fadeUp .7s .1s ease both' }}>
          Ghislain Frank Tontsa Apala
        </h1>

        <p style={{ fontSize: 'clamp(1.05rem, 2vw, 1.3rem)', fontWeight: 500, color: 'var(--text)', marginBottom: '1.5rem', animation: 'fadeUp .7s .2s ease both' }}>{tx.subtitle}</p>
        <p style={{ maxWidth: '520px', marginBottom: '2rem', fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, animation: 'fadeUp .7s .3s ease both' }}>{tx.desc}</p>

        <div style={{ display: 'flex', gap: '.85rem', flexWrap: 'wrap', marginBottom: '1.5rem', animation: 'fadeUp .7s .4s ease both' }} className="hero-buttons">
          <a href="#projects" style={primary}>{tx.cta1}</a>
          <a href="#contact" style={secondary}>{tx.cta2}</a>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', animation: 'fadeUp .7s .45s ease both' }} className="hero-buttons">
          <a href={`${base}/cv-fr.pdf`} download style={cvLink}><Download size={16} />{tx.ctaFr}</a>
          <a href={`${base}/cv-en.pdf`} download style={cvLink}><Download size={16} />{tx.ctaEn}</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero {
            padding-top: 110px !important;
            text-align: center !important;
            align-items: center !important;
            justify-content: flex-start !important;
          }
          .hero-text-col { width: 100% !important; }
          .hero-text-col p { margin-left: auto !important; margin-right: auto !important; }
          .hero-buttons { justify-content: center !important; }
        }
      `}</style>
    </section>
  )
}
