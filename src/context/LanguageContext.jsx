import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext(null)

function detectLang() {
  const stored = localStorage.getItem('rdLang')
  if (stored) return stored
  const browser = (navigator.language || navigator.userLanguage || 'en').toLowerCase()
  return browser.startsWith('bn') ? 'bn' : 'en'
}

// Drive the hidden Google Translate widget select to the target language.
// Retries until the widget script finishes loading (up to ~3 seconds).
function applyGoogleTranslate(lang) {
  let attempts = 0
  const apply = () => {
    const select = document.querySelector('.goog-te-combo')
    if (select) {
      select.value = lang === 'bn' ? 'bn' : ''
      select.dispatchEvent(new Event('change'))
    } else if (attempts++ < 15) {
      setTimeout(apply, 200)
    }
  }
  setTimeout(apply, 100)
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLang)

  // Re-apply translation on page load if user previously chose Bengali
  useEffect(() => {
    if (lang === 'bn') applyGoogleTranslate('bn')
  }, [])

  const toggle = () => {
    const next = lang === 'en' ? 'bn' : 'en'
    setLang(next)
    localStorage.setItem('rdLang', next)
    applyGoogleTranslate(next)
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle, isBn: lang === 'bn' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
export const useLanguage = useLang
