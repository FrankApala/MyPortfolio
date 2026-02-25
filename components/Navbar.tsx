'use client'

import { useEffect, useState } from 'react'
import { useLang } from './LangContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')
  const { lang, toggle } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'experience', 'education', 'skills', 'projects', 'contact']
    const observers: IntersectionObserver[] = []
    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.35 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const closeMobile = () => setMobileOpen(false)

  const links = [
    { href: '#about',      fr: 'À propos',     en: 'About',      external: false },
    { href: '#experience', fr: 'Expériences',  en: 'Experience', external: false },
    { href: '#education',  fr: 'Formation',    en: 'Education',  external: false },
    { href: '#skills',     fr: 'Compétences',  en: 'Skills',     external: false },
    { href: '#projects',   fr: 'Projets',      en: 'Projects',   external: false },
  ]

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 100, display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', padding: '0 5%', height: '64px',
          background: 'rgba(3,7,18,0.92)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)', transition: 'box-shadow .3s',
          boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.7), 0 1px 0 rgba(14,165,233,0.15)' : 'none',
        }}
      >
        <a href="#hero" className="text-gradient-logo"
          style={{ fontWeight: 900, fontSize: '1.1rem', textDecoration: 'none', letterSpacing: '-0.02em' }}>
          GT.
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '1.4rem', listStyle: 'none', alignItems: 'center' }} className="hidden-mobile">
          {links.map(({ href, fr, en, external }) => {
            const isActive = !external && activeSection === href.replace('#', '')
            return (
              <li key={href}>
                <a href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  style={{
                    textDecoration: 'none', fontSize: '.82rem', fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--blue-light)' : 'var(--text-muted)',
                    transition: 'color .2s',
                    position: 'relative',
                  }}
                  onMouseEnter={e => { if (!isActive) (e.target as HTMLElement).style.color = 'var(--blue-light)' }}
                  onMouseLeave={e => { if (!isActive) (e.target as HTMLElement).style.color = 'var(--text-muted)' }}
                >
                  {lang === 'fr' ? fr : en}
                  {isActive && (
                    <span style={{
                      position: 'absolute', bottom: '-4px', left: 0, right: 0,
                      height: '2px', background: 'var(--blue)',
                      borderRadius: '1px',
                    }} />
                  )}
                </a>
              </li>
            )
          })}
          {/* TA Embedded — external company link */}
          <li>
            <a href="https://www.linkedin.com/company/ta-embedded/" target="_blank" rel="noopener noreferrer"
              className="btn-shimmer"
              style={{
                textDecoration: 'none', fontSize: '.82rem', fontWeight: 700,
                color: '#0c0a08',
                background: 'linear-gradient(135deg,#d4a017,#f5c842)',
                border: '1px solid rgba(212,160,23,0.5)',  /* keep brand gold */
                padding: '.28rem .85rem',
                borderRadius: '8px',
                display: 'inline-flex', alignItems: 'center', gap: '.3rem',
                boxShadow: '0 0 14px rgba(212,160,23,0.3)',
                transition: 'all .2s',
              }}
            >
              TA Embedded <span style={{ fontSize: '.7rem' }}>↗</span>
            </a>
          </li>
          <li>
            <button onClick={toggle}
              style={{ background: 'var(--blue-dim)', border: '1px solid var(--blue-border)', color: 'var(--blue-light)', fontWeight: 700, fontSize: '.78rem', padding: '.3rem .8rem', borderRadius: '8px', cursor: 'pointer', letterSpacing: '.06em', transition: 'background .2s', fontFamily: 'inherit' }}>
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
          </li>
          <li>
            <a href="#contact"
              style={{ textDecoration: 'none', fontSize: '.85rem', fontWeight: 500, color: 'var(--blue-light)', background: 'var(--blue-dim)', border: '1px solid var(--blue-border)', padding: '.4rem 1.1rem', borderRadius: '8px', transition: 'background .2s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.2)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--blue-dim)')}
            >
              {lang === 'fr' ? 'Contact' : 'Contact'}
            </a>
          </li>
        </ul>

        {/* Mobile: lang toggle + hamburger */}
        <div style={{ display: 'flex', gap: '.75rem', alignItems: 'center' }} className="show-mobile">
          <button onClick={toggle}
            style={{ background: 'var(--blue-dim)', border: '1px solid var(--blue-border)', color: 'var(--blue-light)', fontWeight: 700, fontSize: '.75rem', padding: '.25rem .6rem', borderRadius: '6px', cursor: 'pointer', fontFamily: 'inherit' }}>
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <button aria-label="Menu" onClick={() => setMobileOpen(v => !v)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{ display: 'block', width: '22px', height: '2px', background: 'var(--blue-light)', borderRadius: '2px', transition: 'all .3s' }} />
            ))}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0,
          background: 'rgba(3,7,18,0.97)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          zIndex: 99,
          display: 'flex', flexDirection: 'column',
          padding: '1.25rem 5% 1.5rem',
          gap: '0',
          animation: 'fadeBlurIn 0.2s ease both',
        }}>
          {[...links, { href: '#contact', fr: 'Contact', en: 'Contact', external: false }].map(({ href, fr, en, external }) => (
            <a key={href} href={href} onClick={closeMobile}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none', padding: '.75rem 0', borderBottom: '1px solid var(--border)', transition: 'color .2s' }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--blue-light)')}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--text-muted)')}
            >
              {lang === 'fr' ? fr : en}
            </a>
          ))}
          <a href="https://www.linkedin.com/company/ta-embedded/" target="_blank" rel="noopener noreferrer" onClick={closeMobile}
            style={{ fontSize: '1rem', fontWeight: 800, color: '#d4a017', textDecoration: 'none', padding: '.75rem 0', marginTop: '.25rem' }}
          >
            TA Embedded ↗
          </a>
        </div>
      )}
    </>
  )
}
