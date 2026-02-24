'use client'

import ScrollReveal from './ScrollReveal'
import { useLang } from './LangContext'

const educationData = {
  fr: [
    {
      degree: 'Cycle Ingénieur — Informatique : Robotique et Systèmes Embarqués',
      institution: 'Université Technologique de Belfort-Montbéliard (UTBM)',
      location: 'Belfort, France',
      period: 'Septembre 2022 – 2025',
      highlight: true,
    },
    {
      degree: 'Semestre d\'échange ERASMUS — Robotique et Systèmes Embarqués',
      institution: 'RPTU Kaiserslautern',
      location: 'Kaiserslautern, Allemagne',
      period: 'Octobre 2024 – Mars 2025',
      highlight: false,
    },
    {
      degree: 'Licence en Informatique — Systèmes Embarqués et Mobiles',
      institution: 'ISET Nabeul',
      location: 'Nabeul, Tunisie',
      period: 'Septembre 2019 – Juin 2022',
      highlight: false,
    },
  ],
  en: [
    {
      degree: 'Engineering Degree — Computer Science: Robotics & Embedded Systems',
      institution: 'Université Technologique de Belfort-Montbéliard (UTBM)',
      location: 'Belfort, France',
      period: 'September 2022 – 2025',
      highlight: true,
    },
    {
      degree: 'ERASMUS Exchange Semester — Robotics & Embedded Systems',
      institution: 'RPTU Kaiserslautern',
      location: 'Kaiserslautern, Germany',
      period: 'October 2024 – March 2025',
      highlight: false,
    },
    {
      degree: 'Bachelor\'s Degree — Computer Science: Embedded & Mobile Systems',
      institution: 'ISET Nabeul',
      location: 'Nabeul, Tunisia',
      period: 'September 2019 – June 2022',
      highlight: false,
    },
  ],
}

const awards = {
  fr: [
    { icon: '🏆', title: 'Bourse d\'excellence Eiffel', detail: '2022 – 2025' },
    { icon: '🎖️', title: 'Bourse de coopération Tunisie–Cameroun', detail: '2019 – 2022' },
  ],
  en: [
    { icon: '🏆', title: 'Eiffel Excellence Scholarship', detail: '2022 – 2025' },
    { icon: '🎖️', title: 'Tunisia–Cameroon Cooperation Scholarship', detail: '2019 – 2022' },
  ],
}

export default function Education() {
  const { lang } = useLang()
  const list = educationData[lang]
  const aw = awards[lang]

  return (
    <section
      id="education"
      className="sec"
      style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,212,255,0.025), transparent)' }}
    >
      <ScrollReveal>
        <div
          style={{
            fontSize: '.75rem', fontWeight: 700, letterSpacing: '.15em',
            color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: '.75rem',
          }}
        >
          {lang === 'fr' ? 'Diplômes & Formation' : 'Academic background'}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900,
            letterSpacing: '-0.03em', marginBottom: '1rem', color: 'var(--text)',
          }}
        >
          {lang === 'fr' ? 'Formation' : 'Education'}
        </h2>
      </ScrollReveal>

      <ScrollReveal>
        <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, var(--blue), transparent)', margin: '1.5rem 0' }} />
      </ScrollReveal>

      <div style={{ maxWidth: '860px', margin: '3rem auto 0', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {list.map((edu, i) => (
          <ScrollReveal key={i}>
            <div
              className="edu-card"
              style={{
                background: 'var(--bg-card)',
                border: `1px solid ${edu.highlight ? 'rgba(0,212,255,0.3)' : 'var(--border)'}`,
                borderRadius: 'var(--radius)',
                padding: '1.75rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '1rem',
                flexWrap: 'wrap',
                transition: 'border-color .3s, box-shadow .3s',
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text)', marginBottom: '.4rem', display: 'flex', alignItems: 'center', gap: '.6rem', flexWrap: 'wrap' }}>
                  {edu.degree}
                  {edu.highlight && (
                    <span
                      style={{
                        fontSize: '.68rem', fontWeight: 700,
                        padding: '.15rem .55rem', borderRadius: '6px',
                        background: 'rgba(0,212,255,0.10)',
                        border: '1px solid rgba(0,212,255,0.28)',
                        color: '#6ee7fa', flexShrink: 0,
                      }}
                    >
                      {lang === 'fr' ? 'Diplôme principal' : 'Main degree'}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '.88rem', color: 'var(--blue-light)', fontWeight: 600 }}>
                  {edu.institution}
                </div>
                <div style={{ fontSize: '.8rem', color: 'var(--text-muted)', marginTop: '.2rem' }}>
                  📍 {edu.location}
                </div>
              </div>
              <div
                className="edu-date"
                style={{
                  fontSize: '.76rem', color: 'var(--cyan)',
                  fontFamily: 'var(--font-jetbrains, "JetBrains Mono", monospace)',
                  whiteSpace: 'nowrap', flexShrink: 0,
                }}
              >
                {edu.period}
              </div>
            </div>
          </ScrollReveal>
        ))}

        {/* Awards */}
        <ScrollReveal>
          <div style={{ marginTop: '1.5rem' }}>
            <div
              style={{
                fontSize: '.75rem', fontWeight: 700, letterSpacing: '.12em',
                color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: '1rem',
              }}
            >
              {lang === 'fr' ? 'Distinctions' : 'Awards & Scholarships'}
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {aw.map(a => (
                <div
                  key={a.title}
                  style={{
                    flex: 1, minWidth: '220px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px', padding: '1.25rem',
                    display: 'flex', gap: '.75rem', alignItems: 'flex-start',
                  }}
                >
                  <span style={{ fontSize: '1.4rem' }}>{a.icon}</span>
                  <div>
                    <div style={{ fontSize: '.88rem', fontWeight: 700, color: 'var(--text)' }}>
                      {a.title}
                    </div>
                    <div style={{ fontSize: '.78rem', color: 'var(--cyan)', marginTop: '.2rem' }}>
                      {a.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .edu-card:hover {
          border-color: var(--blue-border) !important;
          box-shadow: 0 8px 40px rgba(0,0,0,0.4) !important;
        }
        @media (max-width: 600px) {
          .edu-card {
            flex-direction: column !important;
            gap: .5rem !important;
          }
          .edu-card .edu-date {
            align-self: flex-start !important;
            white-space: normal !important;
          }
        }
      `}</style>
    </section>
  )
}
