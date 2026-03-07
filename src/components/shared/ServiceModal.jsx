import { useEffect } from 'react'
import Icon from '../ui/Icon'

export default function ServiceModal({ service, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  if (!service) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.08] shadow-2xl shadow-black/20 dark:shadow-black/60 animate-slide-up">

        {/* Header gradient bar */}
        <div className="h-1 w-full bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 rounded-t-3xl sm:rounded-t-3xl" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Hero section */}
        <div className="relative px-6 pt-7 pb-6 sm:px-8 overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />

          <div className="flex items-start gap-4 mb-5">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
              <Icon name={service.icon} className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-500/15 text-red-400 border border-red-500/20 uppercase tracking-wide">
                  {service.tag}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                {service.title}
              </h2>
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            {service.intro || service.description}
          </p>
        </div>

        {/* Service image (if available) */}
        {service.image && (
          <div className="mx-6 sm:mx-8 mb-6 rounded-2xl overflow-hidden bg-slate-100 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-800/50 border border-slate-200 dark:border-white/[0.06] flex items-center justify-center py-6 px-4">
            <img
              src={service.image}
              alt={service.title}
              className="max-h-36 sm:max-h-48 w-auto object-contain opacity-90"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}

        <div className="px-6 sm:px-8 pb-6 space-y-7">

          {/* Highlights grid */}
          {service.highlights?.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                Key Highlights
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {service.highlights.map((h) => (
                  <div
                    key={h.text}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-white/[0.06] hover:border-red-500/20 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200"
                  >
                    <span className="flex-shrink-0 text-red-400">
                      <Icon name={h.icon || 'bolt'} className="w-4 h-4" />
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 text-xs font-medium leading-snug">{h.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Feature list */}
          {service.features?.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                What's Included
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 text-sm">
                    <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-red-500/15 flex items-center justify-center text-red-400">
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Package table for Home Internet */}
          {service.packages?.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                Popular Packages
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {service.packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className="rounded-xl border border-slate-200 dark:border-white/[0.07] bg-slate-100 dark:bg-slate-800/50 p-3 flex flex-col gap-1 hover:border-red-500/30 transition-colors duration-200"
                  >
                    <span className="text-[10px] font-semibold text-red-400 uppercase tracking-wider">{pkg.name}</span>
                    <span className="text-slate-900 dark:text-white font-bold text-base">{pkg.speed}</span>
                    <span className="text-slate-500 dark:text-slate-400 text-xs">{pkg.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="sticky bottom-0 px-6 sm:px-8 py-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between gap-4">
          <p className="text-slate-500 dark:text-slate-500 text-xs hidden sm:block">Questions? Call <span className="text-slate-700 dark:text-slate-300">+880-9640-112233</span></p>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200"
            >
              Close
            </button>
            <a
              href={service.ctaUrl || 'https://reddata.com.bd/contact'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-red-600 via-red-500 to-orange-500 hover:from-red-500 hover:to-orange-400 shadow-lg shadow-red-500/25 transition-all duration-200"
            >
              Get Started →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
