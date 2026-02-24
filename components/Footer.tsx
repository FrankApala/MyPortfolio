'use client'
import { useLang } from './LangContext'

export default function Footer() {
  const { lang } = useLang()
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid var(--border)',
        fontSize: '.78rem',
        color: 'var(--text-dim)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <p>
        {lang === 'fr' ? 'Conçu & développé par' : 'Designed & built by'}{' '}
        <strong style={{ color: 'var(--blue-light)' }}>TONTSA APALA Ghislain Frank</strong> — 2026
      </p>
      <p style={{ marginTop: '.4rem', fontSize: '.72rem' }}>
        Lyon, France{' · '}
        <a href="mailto:frankapala75@gmail.com" style={{ color: 'var(--blue-light)', textDecoration: 'none' }}>
          frankapala75@gmail.com
        </a>
      </p>
    </footer>
  )
}
