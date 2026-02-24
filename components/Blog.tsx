'use client'

import ScrollReveal from './ScrollReveal'
import { useLang } from './LangContext'

const posts = {
  fr: [
    {
      category: '🚗 Automotive Embedded',
      date: 'Juin 2025',
      readTime: '8 min',
      title: 'Implémenter un serveur UDS (ISO 14229) sur dsPIC33CK avec FreeRTOS',
      excerpt:
        "Retour d'expérience complet sur l'implémentation d'un serveur UDS sur CAN pendant mon stage chez EFI Automotive. Architecture des services, gestion mémoire sous FreeRTOS, watchdog matériel et validation avec Vector CANoe.",
      tags: ['dsPIC33CK', 'FreeRTOS', 'UDS ISO 14229', 'CAN Bus', 'CANoe'],
      slug: '#blog',
    },
    {
      category: '🐧 Embedded Linux',
      date: 'Fév 2025',
      readTime: '10 min',
      title: 'Construire une image Linux embarquée avec Yocto Project sur Raspberry Pi',
      excerpt:
        "Guide pas-à-pas pour créer un layer Yocto personnalisé, configurer le processus de boot, intégrer des device drivers et optimiser la taille de l'image pour un système embarqué contraint.",
      tags: ['Yocto', 'Linux', 'Raspberry Pi', 'Device Tree', 'BSP', 'Bitbake'],
      slug: '#blog',
    },
    {
      category: '⚙️ RTOS',
      date: 'Nov 2024',
      readTime: '6 min',
      title: 'FreeRTOS vs Zephyr RTOS : quel OS embarqué pour votre projet ?',
      excerpt:
        "Comparaison approfondie de FreeRTOS et Zephyr RTOS : planificateur, gestion mémoire, écosystème, support hardware et courbe d'apprentissage. Critères pour choisir selon les contraintes de votre projet.",
      tags: ['FreeRTOS', 'Zephyr RTOS', 'RTOS', 'STM32', 'Embarqué'],
      slug: '#blog',
    },
  ],
  en: [
    {
      category: '🚗 Automotive Embedded',
      date: 'Jun 2025',
      readTime: '8 min',
      title: 'Implementing a UDS Server (ISO 14229) on dsPIC33CK with FreeRTOS',
      excerpt:
        "Full write-up of implementing a UDS server over CAN during my internship at EFI Automotive. Service architecture, memory management under FreeRTOS, hardware watchdog and validation with Vector CANoe.",
      tags: ['dsPIC33CK', 'FreeRTOS', 'UDS ISO 14229', 'CAN Bus', 'CANoe'],
      slug: '#blog',
    },
    {
      category: '🐧 Embedded Linux',
      date: 'Feb 2025',
      readTime: '10 min',
      title: 'Building a Custom Embedded Linux Image with Yocto Project on Raspberry Pi',
      excerpt:
        "Step-by-step guide to creating a custom Yocto layer, configuring the boot process, integrating device drivers and optimising image size for a resource-constrained embedded system.",
      tags: ['Yocto', 'Linux', 'Raspberry Pi', 'Device Tree', 'BSP', 'Bitbake'],
      slug: '#blog',
    },
    {
      category: '⚙️ RTOS',
      date: 'Nov 2024',
      readTime: '6 min',
      title: 'FreeRTOS vs Zephyr RTOS: Which Embedded OS for Your Project?',
      excerpt:
        "In-depth comparison of FreeRTOS and Zephyr RTOS: scheduler, memory management, ecosystem, hardware support and learning curve. Decision criteria based on your project constraints.",
      tags: ['FreeRTOS', 'Zephyr RTOS', 'RTOS', 'STM32', 'Embedded'],
      slug: '#blog',
    },
  ],
}

const labels = {
  fr: {
    supra: 'Ma plateforme de formation',
    title: 'TA Embedded',
    tagline: 'La référence francophone en formation logiciel embarqué',
    taglineDesc: 'Articles techniques, tutoriels et retours d’expérience sur le développement embarqué — FreeRTOS, Zephyr, Linux, CAN, UDS et bien plus.',
    visitBtn: 'Visiter ta-embedded.com',
    articlesTitle: 'Avant-goût du contenu',
    cta: 'Lire l’article',
    comingSoon: 'Plus de contenu sur ta-embedded.com',
    readTime: 'min de lecture',
  },
  en: {
    supra: 'My training platform',
    title: 'TA Embedded',
    tagline: 'The reference platform for embedded software training',
    taglineDesc: 'Technical articles, tutorials and write-ups on embedded development — FreeRTOS, Zephyr, Linux, CAN, UDS and more.',
    visitBtn: 'Visit ta-embedded.com',
    articlesTitle: 'Content preview',
    cta: 'Read article',
    comingSoon: 'More content on ta-embedded.com',
    readTime: 'min read',
  },
}

function PostCard({
  category, date, readTime, title, excerpt, tags, slug, lbl,
}: (typeof posts.en)[0] & { lbl: typeof labels.en }) {
  return (
    <ScrollReveal>
      <a
        href={slug}
        className="blog-card card-3d"
        style={{
          display: 'flex', flexDirection: 'column', height: '100%',
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius)', padding: '2rem',
          textDecoration: 'none', color: 'inherit',
          position: 'relative', overflow: 'hidden',
        }}
      >
        {/* Top shimmer line */}
        <div className="blog-card-line" style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent, var(--blue), transparent)',
          opacity: 0, transition: 'opacity .3s',
        }} />

        {/* Category + date row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '.5rem' }}>
          <span style={{
            fontSize: '.7rem', fontWeight: 700, padding: '.25rem .75rem',
            borderRadius: '6px', background: 'rgba(0,212,255,0.10)',
            border: '1px solid rgba(0,212,255,0.28)', color: '#6ee7fa',
          }}>{category}</span>
          <span style={{ fontSize: '.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains,"JetBrains Mono",monospace)' }}>
            {date} · {readTime} {lbl.readTime}
          </span>
        </div>

        <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--text)', lineHeight: 1.4, marginBottom: '.85rem' }}>
          {title}
        </h3>

        <p style={{ fontSize: '.875rem', color: 'var(--text-muted)', lineHeight: 1.8, flex: 1 }}>{excerpt}</p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginTop: '1.25rem' }}>
          {tags.map(t => (
            <span key={t} style={{
              fontSize: '.68rem', fontWeight: 600, padding: '.2rem .6rem',
              borderRadius: '5px', background: 'rgba(0,212,255,0.05)',
              border: '1px solid rgba(0,212,255,0.15)', color: 'var(--text-muted)',
              fontFamily: 'var(--font-jetbrains,"JetBrains Mono",monospace)',
            }}>{t}</span>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '1.5rem', paddingTop: '1rem',
          borderTop: '1px solid var(--border)',
          fontSize: '.82rem', fontWeight: 700,
          color: 'var(--blue-light)',
          display: 'flex', alignItems: 'center', gap: '.4rem',
        }}>
          {lbl.cta}
          <span style={{ transition: 'transform .2s' }}>→</span>
        </div>
      </a>
      <style>{'.blog-card:hover .blog-card-line { opacity: 1 !important; }'}</style>
    </ScrollReveal>
  )
}

export default function Blog() {
  const { lang } = useLang()
  const lbl = labels[lang]
  const ps = posts[lang]

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
              <span style={{ fontSize: '.7rem', fontWeight: 700, padding: '.2rem .6rem', borderRadius: '99px', background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', color: '#f97316' }}>Coming soon</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '.95rem', lineHeight: 1.7, maxWidth: '500px' }}>
              {lbl.taglineDesc}
            </p>
          </div>
          <a href="https://ta-embedded.com" target="_blank" rel="noopener noreferrer"
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

      <ScrollReveal>
        <h3 style={{ fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: '1rem' }}>
          {lbl.articlesTitle}
        </h3>
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg,var(--blue),transparent)', margin: '0 0 2rem' }} />
      </ScrollReveal>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        maxWidth: '1100px',
        margin: '3rem auto 0',
      }}>
        {ps.map(p => <PostCard key={p.title} {...p} lbl={lbl} />)}
      </div>

      <ScrollReveal>
        <p style={{
          textAlign: 'center', marginTop: '3rem',
          fontSize: '.85rem', color: 'var(--text-muted)',
          fontStyle: 'italic',
        }}>
          {lbl.comingSoon}
        </p>
      </ScrollReveal>
    </section>
  )
}
