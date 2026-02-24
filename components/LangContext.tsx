'use client'

import { createContext, useContext, useState } from 'react'

export type Lang = 'fr' | 'en'

interface LangCtx {
  lang: Lang
  toggle: () => void
}

const LangContext = createContext<LangCtx>({ lang: 'fr', toggle: () => {} })

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr')
  return (
    <LangContext.Provider value={{ lang, toggle: () => setLang(l => l === 'fr' ? 'en' : 'fr') }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
