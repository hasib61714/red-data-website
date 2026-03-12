import { useEffect } from 'react'

const SITE_URL = 'https://reddata.com.bd'
const DEFAULT_TITLE = 'Red Data — Leading ISP in Bangladesh'
const DEFAULT_DESC =
  'Red Data Limited — BTRC licensed ISP offering high-speed fiber internet, data connectivity, IP telephony, and managed IT services across Bangladesh since 2012.'
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-cover.jpg`

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

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  const prev = el.getAttribute('href') || ''
  el.setAttribute('href', href)
  return { el, prev }
}

/**
 * PageMeta — sets document.title, description, OG, Twitter, and canonical tags on mount.
 */
export default function PageMeta({ title, description, image }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Red Data` : DEFAULT_TITLE
    const desc      = description || DEFAULT_DESC
    const img       = image || DEFAULT_OG_IMAGE
    const canonical = `${SITE_URL}${window.location.pathname}`

    const prevTitle = document.title
    document.title = fullTitle

    const descEl   = setMeta('meta[name="description"]',         'content', desc)
    const ogTitle  = setMeta('meta[property="og:title"]',        'content', fullTitle)
    const ogDesc   = setMeta('meta[property="og:description"]',  'content', desc)
    const ogImg    = setMeta('meta[property="og:image"]',        'content', img)
    const ogUrl    = setMeta('meta[property="og:url"]',          'content', canonical)
    const ogType   = setMeta('meta[property="og:type"]',         'content', 'website')
    const twCard   = setMeta('meta[name="twitter:card"]',        'content', 'summary_large_image')
    const twTitle  = setMeta('meta[name="twitter:title"]',       'content', fullTitle)
    const twDesc   = setMeta('meta[name="twitter:description"]', 'content', desc)
    const twImg    = setMeta('meta[name="twitter:image"]',       'content', img)
    const { el: canonEl, prev: prevCanon } = setLink('canonical', canonical)

    const prevDesc    = descEl.getAttribute('content')  || ''
    const prevOgTitle = ogTitle.getAttribute('content') || ''
    const prevOgDesc  = ogDesc.getAttribute('content')  || ''
    const prevOgImg   = ogImg.getAttribute('content')   || ''
    const prevOgUrl   = ogUrl.getAttribute('content')   || ''
    const prevTwTitle = twTitle.getAttribute('content') || ''
    const prevTwDesc  = twDesc.getAttribute('content')  || ''
    const prevTwImg   = twImg.getAttribute('content')   || ''

    return () => {
      document.title = prevTitle
      descEl.setAttribute('content',  prevDesc)
      ogTitle.setAttribute('content', prevOgTitle)
      ogDesc.setAttribute('content',  prevOgDesc)
      ogImg.setAttribute('content',   prevOgImg)
      ogUrl.setAttribute('content',   prevOgUrl)
      ogType.setAttribute('content',  'website')
      twCard.setAttribute('content',  'summary_large_image')
      twTitle.setAttribute('content', prevTwTitle)
      twDesc.setAttribute('content',  prevTwDesc)
      twImg.setAttribute('content',   prevTwImg)
      canonEl.setAttribute('href',    prevCanon)
    }
  }, [title, description, image])

  return null
}
