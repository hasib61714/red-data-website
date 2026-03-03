import { useEffect } from 'react'

/**
 * PageMeta — sets document.title and meta[name="description"] on mount.
 * Restores previous values on unmount (when navigating away).
 */
export default function PageMeta({ title, description }) {
  const DEFAULT_TITLE = 'Red Data — Leading ISP in Bangladesh'
  const DEFAULT_DESC =
    'Red Data Limited — BTRC licensed ISP offering high-speed fiber internet, data connectivity, IP telephony, and managed IT services across Bangladesh since 2012.'

  useEffect(() => {
    const prevTitle = document.title
    document.title = title ? `${title} | Red Data` : DEFAULT_TITLE

    let metaEl = document.querySelector('meta[name="description"]')
    if (!metaEl) {
      metaEl = document.createElement('meta')
      metaEl.setAttribute('name', 'description')
      document.head.appendChild(metaEl)
    }
    const prevDesc = metaEl.getAttribute('content') || ''
    metaEl.setAttribute('content', description || DEFAULT_DESC)

    return () => {
      document.title = prevTitle
      metaEl.setAttribute('content', prevDesc)
    }
  }, [title, description])

  return null
}
