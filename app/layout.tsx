import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ParticleCanvas from '@/components/ParticleCanvas'
import Navbar from '@/components/Navbar'
import ScrollProgress from '@/components/ScrollProgress'
import SmoothScroller from '@/components/SmoothScroller'
import BackToTop from '@/components/BackToTop'
import { LangProvider } from '@/components/LangContext'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ghislain Frank TONTSA APALA — Embedded Software Engineer',
  description:
    'Portfolio of Ghislain Frank TONTSA APALA, Embedded Software Engineer specialised in real-time systems, FreeRTOS, Zephyr, Embedded Linux (Yocto), STM32, dsPIC and industrial protocols.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <LangProvider>
          <SmoothScroller />
          <ScrollProgress />
          <ParticleCanvas />
          <Navbar />
          {children}
          <BackToTop />
        </LangProvider>
      </body>
    </html>
  )
}
