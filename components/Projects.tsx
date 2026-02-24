'use client'

import ScrollReveal from './ScrollReveal'
import { useLang } from './LangContext'

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.83-.26.83-.57v-2.2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const projectsData = {
  fr: [
    {
      badge: '⚙️ Embarqué · EFI Automotive',
      title: 'Serveur UDS sur CAN (ISO 14229)',
      desc: "Implémentation complète d'un serveur UDS sous FreeRTOS sur dsPIC33CK256MP508. Gestion mémoire optimisée, watchdog matériel, et validation ISO avec Vector CANoe.",
      tags: ['dsPIC33CK', 'FreeRTOS', 'C', 'CAN Bus', 'UDS ISO 14229', 'CANoe'],
      year: '2025',
      gh: null,
    },
    {
      badge: '⚙️ Embarqué · Personnel',
      title: 'Maquette automobile (STM32 + FreeRTOS)',
      desc: "Maquette de contrôle embarqué avec communication CAN/LIN, multitâche temps-réel FreeRTOS et optimisation énergétique sur microcontrôleur STM32.",
      tags: ['STM32', 'FreeRTOS', 'C', 'CAN Bus', 'LIN'],
      year: '2024',
      gh: 'https://github.com/FrankApala',
    },
    {
      badge: '⚙️ Embarqué · Personnel',
      title: 'Système antivol embarqué (STM32)',
      desc: "Système antivol avec détection de mouvement par accéléromètre, alertes audio via buzzer PWM et communication UART optimisée pour faible consommation.",
      tags: ['STM32', 'C', 'UART', 'PWM', 'SPI', 'Basse conso'],
      year: '2023',
      gh: 'https://github.com/FrankApala',
    },
    {
      badge: '🐧 Linux Embarqué · Personnel',
      title: 'Embedded Linux avec Yocto Project',
      desc: "Construction d'une image Linux personnalisée sur Raspberry Pi : layers Yocto sur-mesure, configuration du processus de boot, intégration de drivers.",
      tags: ['Yocto Project', 'Linux', 'Raspberry Pi', 'Device Tree', 'BSP'],
      year: '2024',
      gh: 'https://github.com/FrankApala',
    },
    {
      badge: '⚙️ Embarqué · INMAN',
      title: 'Outil de test ESP32 — Douche InSens',
      desc: "Outil embarqué ESP32 pour tester et piloter le système hydraulique de la douche connectée InSens via RS232 bidirectionnel. Remplace un banc de test manuel.",
      tags: ['ESP32', 'C', 'RS232', 'UART', 'IoT'],
      year: '2024',
      gh: null,
    },
    {
      badge: '⚙️ Embarqué · Personnel',
      title: 'Application Zephyr RTOS',
      desc: "Application multitâche sous Zephyr RTOS : gestion de threads, timers, GPIO et Device Tree. Build reproductible avec west et CMake.",
      tags: ['Zephyr RTOS', 'C', 'West', 'CMake', 'Device Tree', 'GPIO'],
      year: '2024',
      gh: 'https://github.com/FrankApala',
    },
  ],
  en: [
    {
      badge: '⚙️ Embedded · EFI Automotive',
      title: 'UDS Server over CAN (ISO 14229)',
      desc: "Full UDS server implementation on FreeRTOS for dsPIC33CK256MP508. Optimised memory management, hardware watchdog, and ISO validation with Vector CANoe.",
      tags: ['dsPIC33CK', 'FreeRTOS', 'C', 'CAN Bus', 'UDS ISO 14229', 'CANoe'],
      year: '2025',
      gh: null,
    },
    {
      badge: '⚙️ Embedded · Personal',
      title: 'Car Model (STM32 + FreeRTOS)',
      desc: "Embedded control model with CAN/LIN communication, real-time multitasking on FreeRTOS, and power optimisation on STM32.",
      tags: ['STM32', 'FreeRTOS', 'C', 'CAN Bus', 'LIN'],
      year: '2024',
      gh: 'https://github.com/FrankApala',
    },
    {
      badge: '⚙️ Embedded · Personal',
      title: 'Embedded Anti-theft System (STM32)',
      desc: "Anti-theft system with accelerometer motion detection, buzzer PWM audio alerts and optimised UART for low power consumption.",
      tags: ['STM32', 'C', 'UART', 'PWM', 'SPI', 'Low Power'],
      year: '2023',
      gh: 'https://github.com/FrankApala',
    },
    {
      badge: '🐧 Embedded Linux · Personal',
      title: 'Embedded Linux with Yocto Project',
      desc: "Custom Linux image on Raspberry Pi: custom Yocto layers, boot process configuration, driver integration and system tuning.",
      tags: ['Yocto Project', 'Linux', 'Raspberry Pi', 'Device Tree', 'BSP'],
      year: '2024',
      gh: 'https://github.com/FrankApala',
    },
    {
      badge: '⚙️ Embedded · INMAN',
      title: 'ESP32 Test Tool — InSens Shower',
      desc: "ESP32 embedded tool to test and control the InSens connected shower hydraulic system over bidirectional RS232, replacing a manual test bench.",
      tags: ['ESP32', 'C', 'RS232', 'UART', 'IoT'],
      year: '2024',
      gh: null,
    },
    {
      badge: '⚙️ Embedded · Personal',
      title: 'Zephyr RTOS Application',
      desc: "Multithreaded application on Zephyr RTOS: thread management, timers, GPIO and Device Tree. Reproducible build with west and CMake.",
      tags: ['Zephyr RTOS', 'C', 'West', 'CMake', 'Device Tree', 'GPIO'],
      year: '2024',
      gh: 'https://github.com/FrankApala',
    },
  ],
}

const labels = {
  fr: { supra: 'Ce que j\'ai construit', title: 'Projets', ask: '📩 Demander les détails', code: 'Code' },
  en: { supra: 'What I have built', title: 'Projects', ask: '📩 Ask for details', code: 'Code' },
}

function ProjectCard({ badge, title, desc, tags, year, gh, lbl }: { badge:string; title:string; desc:string; tags:string[]; year:string; gh:string|null; lbl: typeof labels['fr'] }) {
  return (
    <ScrollReveal>
      <div className="project-card card-3d" style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:'var(--radius)', padding:'2rem', position:'relative', overflow:'hidden', display:'flex', flexDirection:'column', height:'100%' }}>
        <div className="project-card-topline" style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:'linear-gradient(90deg,transparent,var(--blue),transparent)', opacity:0, transition:'opacity .3s' }} />
        <div style={{ fontSize:'.72rem', fontWeight:700, padding:'.25rem .7rem', borderRadius:'6px', marginBottom:'1.25rem', width:'fit-content', background:'rgba(0,212,255,0.10)', border:'1px solid rgba(0,212,255,0.28)', color:'#6ee7fa' }}>{badge}</div>
        <div style={{ fontSize:'1.1rem', fontWeight:800, marginBottom:'.75rem', color:'var(--text)' }}>{title}</div>
        <p style={{ fontSize:'.88rem', color:'var(--text-muted)', lineHeight:1.8, flex:1 }}>{desc}</p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'.5rem', marginTop:'1rem' }}>
          {tags.map(t => <span key={t} style={{ fontSize:'.72rem', fontWeight:600, padding:'.25rem .65rem', borderRadius:'6px', background:'rgba(0,212,255,0.06)', border:'1px solid rgba(0,212,255,0.16)', color:'var(--text-muted)', fontFamily:'var(--font-jetbrains,"JetBrains Mono",monospace)' }}>{t}</span>)}
        </div>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'1.5rem', paddingTop:'1rem', borderTop:'1px solid var(--border)' }}>
          <div style={{ display:'flex', gap:'.75rem' }}>
            {gh ? (
              <a href={gh} target="_blank" rel="noopener noreferrer" style={{ fontSize:'.78rem', fontWeight:600, textDecoration:'none', color:'var(--blue-light)', display:'flex', alignItems:'center', gap:'.35rem', transition:'color .2s' }}><GitHubIcon/>{lbl.code}</a>
            ) : (
              <a href="#contact" style={{ fontSize:'.78rem', fontWeight:600, textDecoration:'none', color:'var(--blue-light)', transition:'color .2s' }}>{lbl.ask}</a>
            )}
          </div>
          <span style={{ fontSize:'.7rem', color:'var(--text-dim)' }}>{year}</span>
        </div>
      </div>
      <style>{'.project-card:hover .project-card-topline { opacity: 1 !important; }'}</style>
    </ScrollReveal>
  )
}

export default function Projects() {
  const { lang } = useLang()
  const lbl = labels[lang]
  const projects = projectsData[lang]
  return (
    <section id="projects" className="sec">
      <ScrollReveal><div style={{ fontSize:'.75rem', fontWeight:700, letterSpacing:'.15em', color:'var(--cyan)', textTransform:'uppercase', marginBottom:'.75rem' }}>{lbl.supra}</div></ScrollReveal>
      <ScrollReveal><h2 style={{ fontSize:'clamp(2rem,4vw,3rem)', fontWeight:900, letterSpacing:'-0.03em', marginBottom:'1rem', color:'var(--text)' }}>{lbl.title}</h2></ScrollReveal>
      <ScrollReveal><div style={{ width:'48px', height:'2px', background:'linear-gradient(90deg,var(--blue),transparent)', margin:'1.5rem 0' }} /></ScrollReveal>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:'1.5rem', maxWidth:'1100px', margin:'3rem auto 0' }}>
        {projects.map(p => <ProjectCard key={p.title} {...p} lbl={lbl} />)}
      </div>
    </section>
  )
}
