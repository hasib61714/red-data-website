import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext(null)

function detectLang() {
  const stored = localStorage.getItem('rdLang')
  if (stored) return stored
  const browser = (navigator.language || navigator.userLanguage || 'en').toLowerCase()
  return browser.startsWith('bn') ? 'bn' : 'en'
}

// Clear googtrans cookie so Google Translate stops translating on next load.
function clearTranslateCookie() {
  const domain = window.location.hostname
  const exp = 'expires=Thu, 01 Jan 1970 00:00:00 UTC'
  document.cookie = `googtrans=; path=/; ${exp}`
  document.cookie = `googtrans=; path=/; domain=${domain}; ${exp}`
  document.cookie = `googtrans=; path=/; domain=.${domain}; ${exp}`
}

// Drive the hidden Google Translate widget select to Bengali.
// Retries until the widget script finishes loading (up to ~3 seconds).
function applyGoogleTranslate() {
  let attempts = 0
  const apply = () => {
    const select = document.querySelector('.goog-te-combo')
    if (select) {
      select.value = 'bn'
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
    if (lang === 'bn') applyGoogleTranslate()
  }, [])

  const toggle = () => {
    const next = lang === 'en' ? 'bn' : 'en'
    localStorage.setItem('rdLang', next)
    if (next === 'bn') {
      setLang('bn')
      applyGoogleTranslate()
    } else {
      // Revert to original: clear cookies and reload so Google Translate is gone
      clearTranslateCookie()
      window.location.reload()
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle, isBn: lang === 'bn' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
export const useLanguage = useLang
