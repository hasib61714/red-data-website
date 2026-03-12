import { useEffect } from 'react'

const SITE_URL = 'https://red-data-website.vercel.app'
const DEFAULT_TITLE = 'Red Data — Leading ISP in Bangladesh'
const DEFAULT_DESC =
  'Red Data Limited — BTRC licensed ISP offering high-speed fiber internet, data connectivity, IP telephony, and managed IT services across Bangladesh since 2012.'

function setMeta(selector, attr, value) {
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const [attrName, attrVal] = selector.replace('meta[', '').replace(']', '').split('=')
    el.setAttribute(attrName, attrVal.replace(/"/g, ''))
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
  return el
}

/**
 * PageMeta — sets document.title, description, and OG/Twitter tags on mount.
 */
export default function PageMeta({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Red Data` : DEFAULT_TITLE
    const desc = description || DEFAULT_DESC

    const prevTitle = document.title
    document.title = fullTitle

    const descEl   = setMeta('meta[name="description"]',         'content', desc)
    const ogTitle  = setMeta('meta[property="og:title"]',        'content', fullTitle)
    const ogDesc   = setMeta('meta[property="og:description"]',  'content', desc)
    const twTitle  = setMeta('meta[name="twitter:title"]',       'content', fullTitle)
    const twDesc   = setMeta('meta[name="twitter:description"]', 'content', desc)

    const prevDesc    = descEl.getAttribute('content')  || ''
    const prevOgTitle = ogTitle.getAttribute('content') || ''
    const prevOgDesc  = ogDesc.getAttribute('content')  || ''
    const prevTwTitle = twTitle.getAttribute('content') || ''
    const prevTwDesc  = twDesc.getAttribute('content')  || ''

    return () => {
      document.title = prevTitle
      descEl.setAttribute('content',  prevDesc)
      ogTitle.setAttribute('content', prevOgTitle)
      ogDesc.setAttribute('content',  prevOgDesc)
      twTitle.setAttribute('content', prevTwTitle)
      twDesc.setAttribute('content',  prevTwDesc)
    }
  }, [title, description])

  return null
}
