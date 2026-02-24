'use client'

import { useState } from 'react'
import { useLang } from './LangContext'

const t = {
  fr: {
    badge: 'Disponible pour de nouveaux projets',
    subtitle: 'Ingénieur Logiciel Embarqué',
    stack: 'FreeRTOS · Embedded Linux · CAN Bus · STM32 · dsPIC',
    desc: 'Spécialisé dans les systèmes embarqués temps-réel, les OS embarqués (FreeRTOS, Zephyr, Yocto) et les protocoles industriels. De la programmation bare-metal au driver Linux — je construis du logiciel robuste au plus près du silicium.',
    cta1: 'Voir mes projets',
    cta2: 'Me contacter',
    cta3: 'Télécharger mon CV',
  },
  en: {
    badge: 'Available for new opportunities',
    subtitle: 'Embedded Software Engineer',
    stack: 'FreeRTOS · Embedded Linux · CAN Bus · STM32 · dsPIC',
    desc: 'Specialised in real-time embedded systems, embedded OS (FreeRTOS, Zephyr, Yocto) and industrial protocols. From bare-metal firmware to Linux kernel drivers — I build reliable software close to the hardware.',
    cta1: 'View my projects',
    cta2: 'Contact me',
    cta3: 'Download CV',
  },
}

export default function Hero() {
  const { lang } = useLang()
  const tx = t[lang]
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientY - (r.top + r.height / 2)) / r.height) * 18
    const y = -((e.clientX - (r.left + r.width / 2)) / r.width) * 18
    setTilt({ x, y })
  }
  const onLeave = () => setTilt({ x: 0, y: 0 })

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
        maxWidth: '1200px',
        margin: '0 auto',
        gap: '2rem',
      }}
    >
      {/* Left column — text */}
      <div style={{ flex: 1 }} className="hero-text-col">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: 'var(--blue-dim)', border: '1px solid var(--blue-border)', color: 'var(--blue-light)', fontSize: '.78rem', fontWeight: 600, padding: '.35rem 1rem', borderRadius: '99px', marginBottom: '2rem', animation: 'fadeUp .6s ease both' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--blue)', animation: 'pulse 2s infinite', flexShrink: 0 }} />
          {tx.badge}
        </div>

        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.8rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1rem', animation: 'fadeUp .7s .1s ease both' }}>
          <span style={{ color: 'var(--text)' }}>TONTSA APALA<br /></span>
          <span className="text-gradient-blue">Ghislain Frank</span>
        </h1>

        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 600, color: 'var(--blue-light)', marginBottom: '.5rem', animation: 'fadeUp .7s .2s ease both' }}>{tx.subtitle}</p>
        <p style={{ fontSize: '.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains,"JetBrains Mono",monospace)', marginBottom: '1.5rem', letterSpacing: '.03em', animation: 'fadeUp .7s .25s ease both' }}>{tx.stack}</p>
        <p style={{ maxWidth: '520px', marginBottom: '2.5rem', fontSize: '.97rem', color: 'var(--text-muted)', lineHeight: 1.85, animation: 'fadeUp .7s .3s ease both' }}>{tx.desc}</p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'fadeUp .7s .4s ease both' }} className="hero-buttons">
          <a href="#projects" className="btn-shimmer" style={{ background: 'linear-gradient(135deg,#00d4ff,#6ee7fa)', color: '#07060f', fontWeight: 800, padding: '.75rem 2rem', borderRadius: '10px', textDecoration: 'none', fontSize: '.95rem', boxShadow: '0 0 32px rgba(0,212,255,0.4)', display: 'inline-block', animation: 'glowPulse 3s ease-in-out infinite' }}>{tx.cta1}</a>
          <a href="#contact" style={{ background: 'transparent', border: '1px solid var(--blue-border)', color: 'var(--blue-light)', fontWeight: 600, padding: '.75rem 2rem', borderRadius: '10px', textDecoration: 'none', fontSize: '.95rem', transition: 'all .25s', display: 'inline-block' }}>{tx.cta2}</a>
          <a href="/cv.pdf" download className="btn-shimmer" style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.3)', color: 'var(--blue-light)', fontWeight: 600, padding: '.75rem 2rem', borderRadius: '10px', textDecoration: 'none', fontSize: '.95rem', transition: 'all .25s', display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
            <span style={{ fontSize: '1rem', animation: 'downloadBounce 2s ease-in-out infinite' }}>⬇</span>{tx.cta3}
          </a>
        </div>
      </div>

      {/* Right column — interactive 3D photo */}
      <div
        style={{ flexShrink: 0, width: '340px', display: 'flex', justifyContent: 'center', alignItems: 'center', animation: 'slideInRight .9s .15s ease both', perspective: '900px', cursor: 'none' }}
        className="hero-photo-col"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div style={{
          position: 'relative',
          width: '280px', height: '340px',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: tilt.x === 0 && tilt.y === 0 ? 'transform 1s cubic-bezier(0.16,1,0.3,1)' : 'transform 0.12s linear',
          transformStyle: 'preserve-3d',
        }}>
          {/* Outer glow ring */}
          <div style={{
            position: 'absolute', inset: '-20px',
            borderRadius: '36px',
            border: '1px solid rgba(0,212,255,0.20)',
            animation: 'borderGlow 3s ease-in-out infinite',
            pointerEvents: 'none',
          }} />

          {/* Orbit particle 1 */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            width: '10px', height: '10px', borderRadius: '50%',
            background: 'linear-gradient(135deg,#00d4ff,#a78bfa)',
            boxShadow: '0 0 16px rgba(0,212,255,1), 0 0 32px rgba(0,212,255,0.4)',
            animation: 'orbitRing 5s linear infinite',
            transformOrigin: '0 0',
            marginTop: '-5px', marginLeft: '-5px',
            zIndex: 3,
          }} />

          {/* Orbit particle 2 */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            width: '7px', height: '7px', borderRadius: '50%',
            background: 'linear-gradient(135deg,#a78bfa,#6ee7fa)',
            boxShadow: '0 0 12px rgba(167,139,250,1)',
            animation: 'orbitRing 8s linear infinite reverse',
            transformOrigin: '0 0',
            marginTop: '-3.5px', marginLeft: '-3.5px',
            zIndex: 3,
          }} />

          {/* Gradient border frame */}
          <div style={{
            position: 'absolute', inset: '-3px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #00d4ff, #a78bfa, #6ee7fa)',
            zIndex: 0,
          }} />

          {/* Photo */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/avatar.jpeg`}
            alt="Ghislain Frank TONTSA APALA"
            style={{
              position: 'relative', zIndex: 1,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'top',
              borderRadius: '22px',
              display: 'block',
            }}
          />

          {/* Glass label overlay */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
            background: 'linear-gradient(to top, rgba(7,6,15,0.9) 0%, transparent 100%)',
            borderRadius: '0 0 22px 22px',
            padding: '2rem .8rem .7rem',
            textAlign: 'center',
          }}>
            <span style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.14em', color: 'var(--blue)', textTransform: 'uppercase' }}>Embedded Engineer</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem', fontSize: '.7rem', color: 'var(--text-muted)', letterSpacing: '.1em', animation: 'fadeUp .7s .8s ease both' }}>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom,var(--blue),transparent)', animation: 'scrollLine 2s ease-in-out infinite' }} />
        <span>SCROLL</span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero {
            flex-direction: column-reverse !important;
            padding-top: 110px !important;
            text-align: center !important;
            align-items: center !important;
            justify-content: flex-start !important;
          }
          .hero-text-col {
            width: 100% !important;
            padding-right: 0 !important;
          }
          .hero-buttons {
            justify-content: center !important;
          }
          .hero-photo-col {
            width: 180px !important;
            flex-shrink: 0 !important;
            margin-bottom: 0.5rem !important;
          }
          .hero-photo-col > div {
            width: 160px !important;
            height: 195px !important;
          }
        }
      `}</style>
    </section>
  )
}
