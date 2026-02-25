'use client'

import ScrollReveal from './ScrollReveal'
import { useLang } from './LangContext'

const t = {
  fr: {
    supra: 'Qui suis-je ?',
    title: 'A propos de moi',
    p1a: 'Ingenieur logiciel embarque diplome de l\'UTBM (cycle ingenieur Robotique & Systemes Embarques), specialise dans les systemes',
    p1b: 'Linux temps-reel, FreeRTOS et Zephyr RTOS',
    p1c: 'ainsi que les protocoles industriels (CAN, UART, SPI, I2C). Laureat de la bourse d\'excellence Eiffel 2022-2025.',
    p2a: 'Mon parcours couvre la programmation bare-metal sur',
    p2b: 'STM32, ESP32, dsPIC et PIC',
    p2c: ', le developpement de drivers Linux, la conception de BSP, et le build de distributions embarquees avec Yocto Project.',
    p3: 'Rigoureux et oriente fiabilite, je m\'epanouis dans les environnements contraints ou chaque cycle CPU et chaque octet de RAM comptent.',
    stats: [
      { num: '3+', label: 'Ans d\'experience' },
      { num: '5+', label: 'Projets embarques' },
    ],
    langs: 'Langues : Français (maternelle) · Anglais (maternelle) · Allemand (notions)',
  },
  en: {
    supra: 'Who am I?',
    title: 'About me',
    p1a: 'Embedded Software Engineer graduated from UTBM (Engineering degree in Robotics & Embedded Systems), specialised in',
    p1b: 'real-time Linux, FreeRTOS and Zephyr RTOS',
    p1c: 'and industrial protocols (CAN, UART, SPI, I2C). Recipient of the Eiffel Excellence Scholarship 2022-2025.',
    p2a: 'My background spans bare-metal programming on',
    p2b: 'STM32, ESP32, dsPIC and PIC',
    p2c: ', Linux driver development, BSP design, and building embedded distributions with Yocto Project.',
    p3: 'Detail-oriented and reliability-driven, I thrive in resource-constrained environments where every CPU cycle and every byte of RAM matters.',
    stats: [
      { num: '3+', label: 'Years of experience' },
      { num: '5+', label: 'Embedded projects' },
    ],
    langs: 'Languages: French (native) · English (native) · German (basics)',
  },
}

export default function About() {
  const { lang } = useLang()
  const tx = t[lang]
  return (
    <section id="about" className="sec">
      <ScrollReveal><div style={{ fontSize:'.75rem', fontWeight:700, letterSpacing:'.15em', color:'var(--cyan)', textTransform:'uppercase', marginBottom:'.75rem' }}>{tx.supra}</div></ScrollReveal>
      <ScrollReveal><h2 style={{ fontSize:'clamp(2rem,4vw,3rem)', fontWeight:900, letterSpacing:'-0.03em', marginBottom:'1rem', color:'var(--text)' }}>{tx.title}</h2></ScrollReveal>
      <ScrollReveal><div style={{ width:'48px', height:'2px', background:'linear-gradient(90deg,var(--blue),transparent)', margin:'1.5rem 0' }} /></ScrollReveal>
      <div style={{ maxWidth: '820px', margin: '3rem auto 0' }}>
        <ScrollReveal>
          <div>
            <p style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'1rem' }}>{tx.p1a} <strong style={{ color:'var(--blue-light)' }}>{tx.p1b}</strong> {tx.p1c}</p>
            <p style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'1rem' }}>{tx.p2a} <strong style={{ color:'var(--blue-light)' }}>{tx.p2b}</strong>{tx.p2c}</p>
            <p style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'1rem' }}>{tx.p3}</p>
            <p style={{ color:'var(--text-muted)', fontSize:'.82rem', marginTop:'1.5rem', fontStyle:'italic' }}>{tx.langs}</p>
            <div style={{ display:'flex', gap:'1.5rem', flexWrap:'wrap', marginTop:'2rem' }}>
              {tx.stats.map(({ num, label }) => (
                <div key={label} style={{ textAlign:'center', flex:1, minWidth:'100px' }}>
                  <div className="text-gradient-blue" style={{ fontSize:'2.5rem', fontWeight:900, lineHeight:1 }}>{num}</div>
                  <div style={{ fontSize:'.75rem', color:'var(--text-muted)', marginTop:'.25rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
