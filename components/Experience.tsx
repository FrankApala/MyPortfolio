'use client'

import ScrollReveal from './ScrollReveal'
import { useLang } from './LangContext'

const experiences = {
  fr: [
    {
      role: 'Développeur Logiciel Embarqué',
      duration: 'Mars – Août 2025 · 6 mois',
      company: 'EFI Automotive',
      location: 'Beynost, France',
      tasks: [
        'Implémentation d\'un serveur UDS (ISO 14229) sur CAN sous FreeRTOS sur microcontrôleur dsPIC33CK256MP508.',
        'Développement et intégration de services conformément au cahier des charges.',
        'Amélioration de la gestion mémoire et des tâches FreeRTOS pour réduire la consommation et améliorer la robustesse.',
        'Intégration d\'un mécanisme de watchdog matériel pour sécuriser l\'exécution du logiciel.',
        'Mise en place de tests fonctionnels avec Vector CANoe pour valider la conformité ISO.',
        'Analyse et débogage via oscilloscopes.',
      ],
      tags: ['dsPIC33CK', 'FreeRTOS', 'UDS ISO 14229', 'CAN Bus', 'CANoe', 'C'],
    },
    {
      role: 'Développeur IoT Freelance',
      duration: 'Août – Novembre 2024 · 4 mois',
      company: 'OXYNODE',
      location: 'Belfort, France',
      tasks: [
        'Développement de décodeurs JavaScript pour traiter et normaliser les données de capteurs IoT connectés via LoRaWAN sur la plateforme Live Objects.',
        'Mise en place de tests unitaires et validation des trames reçues pour garantir la fiabilité des données.',
      ],
      tags: ['IoT', 'LoRaWAN', 'JavaScript', 'Live Objects'],
    },
    {
      role: 'Développeur Logiciel Embarqué',
      duration: 'Septembre 2023 – Février 2024 · 6 mois',
      company: 'INMAN',
      location: 'Haguenau, France',
      tasks: [
        'Étude et conception d\'un mélangeur électronique d\'eau utilisant des vannes proportionnelles pilotées par PIC18F16K40.',
        'Développement d\'un outil embarqué basé sur ESP32 pour tester et piloter le système hydraulique de la douche connectée InSens via RS232.',
      ],
      tags: ['PIC18F', 'ESP32', 'C', 'RS232', 'UART'],
    },
  ],
  en: [
    {
      role: 'Embedded Software Developer (Internship)',
      duration: 'Mar – Aug 2025 · 6 months',
      company: 'EFI Automotive',
      location: 'Beynost, France',
      tasks: [
        'Implemented a UDS server (ISO 14229) over CAN under FreeRTOS on a dsPIC33CK256MP508 microcontroller.',
        'Developed and integrated software services as per the technical specification.',
        'Improved FreeRTOS memory and task management to reduce power consumption and enhance robustness.',
        'Integrated a hardware watchdog mechanism to secure software execution against lockups.',
        'Set up functional tests with Vector CANoe to validate ISO compliance.',
        'Analysis and debugging using oscilloscopes.',
      ],
      tags: ['dsPIC33CK', 'FreeRTOS', 'UDS ISO 14229', 'CAN Bus', 'CANoe', 'C'],
    },
    {
      role: 'IoT Developer (Freelance)',
      duration: 'Aug – Nov 2024 · 4 months',
      company: 'OXYNODE',
      location: 'Belfort, France',
      tasks: [
        'Built JavaScript decoders to process and normalise IoT sensor data transmitted via LoRaWAN on the Live Objects platform.',
        'Set up unit tests and validated received sensor frames to ensure data reliability.',
      ],
      tags: ['IoT', 'LoRaWAN', 'JavaScript', 'Live Objects'],
    },
    {
      role: 'Embedded Software Developer (Internship)',
      duration: 'Sep 2023 – Feb 2024 · 6 months',
      company: 'INMAN',
      location: 'Haguenau, France',
      tasks: [
        'Designed an electronic water mixer with proportional valves driven by a PIC18F16K40.',
        'Built an ESP32-based embedded tool to test and control the InSens connected shower\'s hydraulic system via bidirectional RS232.',
      ],
      tags: ['PIC18F', 'ESP32', 'C', 'RS232', 'UART'],
    },
  ],
}

export default function Experience() {
  const { lang } = useLang()
  const list = experiences[lang]

  return (
    <section id="experience" className="sec">
      <ScrollReveal>
        <div
          style={{
            fontSize: '.75rem', fontWeight: 700, letterSpacing: '.15em',
            color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: '.75rem',
          }}
        >
          {lang === 'fr' ? 'Parcours professionnel' : 'Work experience'}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900,
            letterSpacing: '-0.03em', marginBottom: '1rem', color: 'var(--text)',
          }}
        >
          {lang === 'fr' ? 'Expériences' : 'Experience'}
        </h2>
      </ScrollReveal>

      <ScrollReveal>
        <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, var(--blue), transparent)', margin: '1.5rem 0' }} />
      </ScrollReveal>

      <div style={{ maxWidth: '860px', margin: '3rem auto 0', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
        {list.map((exp, i) => (
          <ScrollReveal key={i}>
            <div
              className="exp-card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderLeft: '3px solid var(--blue)',
                borderRadius: 'var(--radius)',
                padding: '2rem',
                transition: 'border-color .3s, box-shadow .3s',
              }}
            >
              <div
                className="exp-header"
                style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', flexWrap: 'wrap',
                  gap: '.5rem', marginBottom: '1rem',
                }}
              >
                <div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text)' }}>
                    {exp.role}
                  </div>
                  <div style={{ fontSize: '.9rem', fontWeight: 600, color: 'var(--blue-light)', marginTop: '.25rem' }}>
                    {exp.company}{' '}
                    <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>· {exp.location}</span>
                  </div>
                </div>
                <div
                  className="exp-date"
                  style={{
                    fontSize: '.76rem', color: 'var(--cyan)',
                    fontFamily: 'var(--font-jetbrains, "JetBrains Mono", monospace)',
                    whiteSpace: 'nowrap', flexShrink: 0,
                    background: 'rgba(245,158,11,0.08)',
                    border: '1px solid rgba(245,158,11,0.2)',
                    padding: '.25rem .65rem', borderRadius: '6px',
                  }}
                >
                  {exp.duration}
                </div>
              </div>

              <ul style={{ paddingLeft: '1.25rem', margin: '0 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
                {exp.tasks.map((task, j) => (
                  <li key={j} style={{ fontSize: '.87rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
                    {task}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                {exp.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '.72rem', fontWeight: 600,
                      padding: '.25rem .65rem', borderRadius: '6px',
                      background: 'rgba(0,212,255,0.07)',
                      border: '1px solid rgba(0,212,255,0.18)',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-jetbrains, "JetBrains Mono", monospace)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <style>{`
        .exp-card:hover {
          border-color: var(--blue-border) !important;
          box-shadow: 0 8px 40px rgba(0,0,0,0.4) !important;
        }
        @media (max-width: 600px) {
          .exp-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: .5rem !important;
          }
          .exp-date {
            white-space: normal !important;
            align-self: flex-start !important;
          }
        }
      `}</style>
    </section>
  )
}
