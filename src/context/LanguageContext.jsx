import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('rdLang') || 'en')

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
