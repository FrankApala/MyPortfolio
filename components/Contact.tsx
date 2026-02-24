'use client'

import ScrollReveal from './ScrollReveal'
import { useLang } from './LangContext'

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.83-.26.83-.57v-2.2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const t = {
  fr: {
    supra: 'Travaillons ensemble',
    title: 'Me contacter',
    body: 'Disponible pour des missions freelance, des stages ou des opportunites en CDI dans le developpement logiciel embarque. N\'hesitez pas a me contacter !',
    location: 'Lyon, France (69002) · Permis B',
  },
  en: {
    supra: "Let's work together",
    title: 'Contact me',
    body: "Available for freelance missions, internships or full-time opportunities in embedded software engineering. Don't hesitate to reach out!",
    location: 'Lyon, France (69002) · Driver licence',
  },
}

const contacts = [
  { href: 'mailto:frankapala75@gmail.com', icon: '✉️', label: 'Email', value: 'frankapala75@gmail.com' },
  { href: 'tel:+33751416922', icon: '📞', label: 'Phone', value: '+33 7 51 41 69 22' },
  { href: 'https://github.com/FrankApala', icon: <GitHubIcon/>, label: 'GitHub', value: 'github.com/FrankApala', external: true },
  { href: 'https://linkedin.com/in/tontsa', icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/tontsa', external: true },
]

export default function Contact() {
  const { lang } = useLang()
  const tx = t[lang]
  return (
    <section id="contact" className="sec" style={{ textAlign:'center' }}>
      <ScrollReveal><div style={{ fontSize:'.75rem', fontWeight:700, letterSpacing:'.15em', color:'var(--cyan)', textTransform:'uppercase', marginBottom:'.75rem' }}>{tx.supra}</div></ScrollReveal>
      <ScrollReveal><h2 style={{ fontSize:'clamp(2rem,4vw,3rem)', fontWeight:900, letterSpacing:'-0.03em', marginBottom:'1rem', color:'var(--text)' }}>{tx.title}</h2></ScrollReveal>
      <ScrollReveal><div style={{ width:'48px', height:'2px', background:'linear-gradient(90deg,var(--blue),transparent)', margin:'1.5rem auto' }} /></ScrollReveal>
      <ScrollReveal>
        <div style={{ maxWidth:'600px', margin:'3rem auto 0', background:'var(--bg-card)', border:'1px solid var(--blue-border)', borderRadius:'var(--radius)', padding:'3rem 2.5rem', boxShadow:'0 0 60px rgba(0,212,255,0.08)' }}>
          <p style={{ color:'var(--text-muted)', marginBottom:'.75rem', lineHeight:1.8 }}>{tx.body}</p>
          <p style={{ color:'var(--text-muted)', fontSize:'.82rem', marginBottom:'2rem' }}>📍 {tx.location}</p>
          <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
            {contacts.map(({ href, icon, label, value, external }) => (
              <a key={href} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="contact-item"
                style={{ display:'flex', alignItems:'center', gap:'1rem', background:'var(--bg-surface)', border:'1px solid var(--border)', borderRadius:'10px', padding:'1rem 1.25rem', textDecoration:'none', transition:'all .2s', color:'var(--text)' }}>
                <span style={{ fontSize:'1.3rem', width:'36px', textAlign:'center', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>{icon}</span>
                <div style={{ textAlign:'left' }}>
                  <div style={{ fontSize:'.8rem', color:'var(--text-muted)' }}>{label}</div>
                  <div style={{ fontWeight:600, fontSize:'.9rem' }}>{value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <style>{'.contact-item:hover { border-color: var(--blue-border) !important; background: var(--blue-dim) !important; }'}</style>
    </section>
  )
}
