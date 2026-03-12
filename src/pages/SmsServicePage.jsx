import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { smsServiceData, L } from '../data/siteData'
import IconMapper from '../components/ui/IconMapper'
import { useLanguage } from '../context/LanguageContext'

const { features, useCases } = smsServiceData

export default function SmsServicePage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  const { lang } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="SMS Service" description="Bulk SMS, OTP gateway, and transactional messaging services with high delivery rates from Red Data Bangladesh." />

      {/* ── Hero ── */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 pt-36 pb-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-rose-700/10 blur-3xl pointer-events-none" />
        <Container>
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-400">Services</span>
            <span>/</span>
            <span className="text-white font-medium">SMS Service</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-500/20 text-red-300 border border-red-500/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              Bulk SMS Platform
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              SMS{' '}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Smart & affordable bulk SMS marketing — send messages, alerts, and notifications at scale with
              high delivery rates, easy API integration, and comprehensive real-time reporting.
            </p>
          </div>
        </Container>
      </div>

      {/* ── Use Cases ── */}
      <div className="bg-red-600 py-5">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {useCases.map((u) => (
              <span key={u.label} className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium">
                <IconMapper name={u.icon} className="w-5 h-5" /> {L(lang, u, 'label')}
              </span>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Features ── */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Platform Features
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Why Choose Red Data{' '}
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                SMS
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 p-5 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center text-xl shadow mb-3 group-hover:scale-110 transition-transform">
                  <IconMapper name={f.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">{L(lang, f, 'title')}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{L(lang, f, 'desc')}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── CTA ── */}
      <div className="py-12 bg-white dark:bg-slate-800/40">
        <Container>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Start sending in minutes</h3>
                <p className="text-slate-300 text-sm">Get API credentials and free test credits — no credit card required to start.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link to="/contact" className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg transition-all hover:scale-105">
                  Get Started
                </Link>
                <a href="tel:+8809640112233" className="px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all">
                  Call Sales
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <ExploreServices />

      {/* ── Back ── */}
    </div>
  )
}
