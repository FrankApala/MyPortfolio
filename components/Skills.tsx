'use client'

import ScrollReveal from './ScrollReveal'
import { useLang } from './LangContext'

const skillsData = {
  fr: [
    { icon: '⚙️', title: 'Systèmes Embarqués', tags: ['C / C++', 'STM32', 'ESP32', 'dsPIC33CK', 'PIC18F', 'FreeRTOS', 'Zephyr RTOS', 'Bare-metal'] },
    { icon: '🐧', title: 'Linux Embarqué', tags: ['Embedded Linux', 'Yocto Project', 'Buildroot', 'Device Drivers', 'Device Tree', 'BSP'] },
    { icon: '📡', title: 'Protocoles de Communication', tags: ['CAN Bus', 'UDS ISO 14229', 'UART', 'SPI', 'I²C', 'MQTT', 'LoRaWAN'] },
    { icon: '🔬', title: 'Debug & Test', tags: ['GDB', 'Oscilloscope', 'Vector CANoe', 'MPLAB ICD', 'Tests unitaires', 'Analyse de trames'] },
    { icon: '🏗️', title: 'Build & Outils', tags: ['Makefile', 'CMake', 'Git', 'STM32CubeIDE', 'MPLAB X', 'Python', 'Java'] },
    { icon: '🔌', title: 'Architectures Matérielles', tags: ['ARM Cortex-M', 'ARM Cortex-A', 'PIC 8/16/32-bit', 'Raspberry Pi', 'IoT'] },
  ],
  en: [
    { icon: '⚙️', title: 'Embedded Systems', tags: ['C / C++', 'STM32', 'ESP32', 'dsPIC33CK', 'PIC18F', 'FreeRTOS', 'Zephyr RTOS', 'Bare-metal'] },
    { icon: '🐧', title: 'Embedded Linux', tags: ['Embedded Linux', 'Yocto Project', 'Buildroot', 'Device Drivers', 'Device Tree', 'BSP'] },
    { icon: '📡', title: 'Communication Protocols', tags: ['CAN Bus', 'UDS ISO 14229', 'UART', 'SPI', 'I²C', 'MQTT', 'LoRaWAN'] },
    { icon: '🔬', title: 'Debug & Testing', tags: ['GDB', 'Oscilloscope', 'Vector CANoe', 'MPLAB ICD', 'Unit testing', 'Frame analysis'] },
    { icon: '🏗️', title: 'Build & Toolchain', tags: ['Makefile', 'CMake', 'Git', 'STM32CubeIDE', 'MPLAB X', 'Python', 'Java'] },
    { icon: '🔌', title: 'Hardware Architectures', tags: ['ARM Cortex-M', 'ARM Cortex-A', 'PIC 8/16/32-bit', 'Raspberry Pi', 'IoT'] },
  ],
}

const labels = {
  fr: { supra: 'Ce que je maîtrise', title: 'Compétences' },
  en: { supra: 'What I master', title: 'Skills' },
}

function SkillCard({ icon, title, tags }: { icon: string; title: string; tags: string[] }) {
  return (
    <ScrollReveal>
      <div className="skill-card card-3d" style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:'var(--radius)', padding:'1.75rem', height:'100%' }}>
        <div style={{ width:'44px', height:'44px', borderRadius:'10px', display:'grid', placeItems:'center', fontSize:'1.4rem', marginBottom:'1rem', background:'var(--blue-dim)', border:'1px solid var(--blue-border)' }}>{icon}</div>
        <h3 style={{ fontSize:'1rem', fontWeight:700, marginBottom:'1rem', color:'var(--text)' }}>{title}</h3>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'.5rem', marginTop:'.75rem' }}>
          {tags.map((tag, i) => (
            <span key={tag} className={`tag-animated stagger-${Math.min(i + 1, 6)}`} style={{ fontSize:'.72rem', fontWeight:600, padding:'.25rem .65rem', borderRadius:'6px', background:'rgba(0,212,255,0.06)', border:'1px solid rgba(0,212,255,0.16)', color:'var(--text-muted)', fontFamily:'var(--font-jetbrains,"JetBrains Mono",monospace)' }}>{tag}</span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function Skills() {
  const { lang } = useLang()
  const lbl = labels[lang]
  const skills = skillsData[lang]
  return (
    <section id="skills" className="sec" style={{ background: 'linear-gradient(to bottom,transparent,rgba(0,212,255,0.025),transparent)' }}>
      <ScrollReveal><div style={{ fontSize:'.75rem', fontWeight:700, letterSpacing:'.15em', color:'var(--cyan)', textTransform:'uppercase', marginBottom:'.75rem' }}>{lbl.supra}</div></ScrollReveal>
      <ScrollReveal><h2 style={{ fontSize:'clamp(2rem,4vw,3rem)', fontWeight:900, letterSpacing:'-0.03em', marginBottom:'1rem', color:'var(--text)' }}>{lbl.title}</h2></ScrollReveal>
      <ScrollReveal><div style={{ width:'48px', height:'2px', background:'linear-gradient(90deg,var(--blue),transparent)', margin:'1.5rem 0' }} /></ScrollReveal>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'1.5rem', maxWidth:'1100px', margin:'3rem auto 0' }}>
        {skills.map(s => <SkillCard key={s.title} {...s} />)}
      </div>
      <style>{'.skill-card:hover { border-color: var(--blue-border) !important; box-shadow: 0 8px 40px rgba(0,0,0,0.5),0 0 30px rgba(0,212,255,0.1) !important; transform: translateY(-4px) !important; }'}</style>
    </section>
  )
}
