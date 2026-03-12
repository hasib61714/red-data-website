import { useEffect } from 'react'

/**
 * Scrolls the window to the top instantly when the component mounts.
 * Use this at the top of every page component so navigation always
 * starts at the top of the page.
 */
export function useScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])
}
