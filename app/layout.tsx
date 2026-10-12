import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import ParticleCanvas from '@/components/ParticleCanvas'
import Navbar from '@/components/Navbar'
import ScrollProgress from '@/components/ScrollProgress'
import SmoothScroller from '@/components/SmoothScroller'
import BackToTop from '@/components/BackToTop'
import { LangProvider } from '@/components/LangContext'

const geist = localFont({
  src: '../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2',
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = localFont({
  src: '../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2',
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ghislain Frank TONTSA APALA - Embedded Software Engineer',
  description:
    'Portfolio of Ghislain Frank TONTSA APALA, Embedded Software Engineer specialised in bare-metal and real-time embedded systems. STM32, dsPIC, FreeRTOS, Zephyr, Embedded Linux and industrial protocols.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
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
