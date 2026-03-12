import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext(null)

function detectLang() {
  const stored = localStorage.getItem('rdLang')
  if (stored) return stored
  const browser = (navigator.language || navigator.userLanguage || 'en').toLowerCase()
  return browser.startsWith('bn') ? 'bn' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLang)

  const toggle = () => {
    const next = lang === 'en' ? 'bn' : 'en'
    setLang(next)
    localStorage.setItem('rdLang', next)
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle, isBn: lang === 'bn' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
export const useLanguage = useLang
