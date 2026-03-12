import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { managedServicesData, L } from '../data/siteData'
import IconMapper from '../components/ui/IconMapper'
import { useLanguage } from '../context/LanguageContext'

const { services } = managedServicesData

export default function ManagedServicesPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  const { lang } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Managed Services" description="24/7 IT infrastructure management, network monitoring, and proactive support from Red Data Bangladesh." />

      {/* ── Hero ── */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 pt-36 pb-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-rose-700/10 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 49px,rgba(255,255,255,1) 49px,rgba(255,255,255,1) 50px),repeating-linear-gradient(90deg,transparent,transparent 49px,rgba(255,255,255,1) 49px,rgba(255,255,255,1) 50px)" }}
        />
        <Container>
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-400">Services</span>
            <span>/</span>
            <span className="text-white font-medium">Managed Services</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Managed{' '}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                IT Services
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Focus on your core business activities while we handle your IT infrastructure with Red Data's Managed
              Service. Our team of experts provides comprehensive management of your IT systems, including network
              monitoring, security, data backup, and disaster recovery. We offer proactive support and maintenance,
              ensuring optimal performance and minimizing downtime.
            </p>
          </div>
        </Container>
      </div>

      {/* ── Services ── */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Our Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Three Core{' '}
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Managed Services
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {services.map((s, i) => (
              <div key={s.title} className={`rounded-3xl border ${s.borderColor} ${s.bgColor} p-7 lg:p-9`}>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center text-2xl shadow-lg shrink-0`}>
                      <IconMapper name={s.icon} className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>Service {String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-3">{L(lang, s, 'title')}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{L(lang, s, 'desc')}</p>
                    </div>
                  </div>
                  <div className="lg:w-64 shrink-0">
                    <ul className="space-y-2">
                      {(lang === 'bn' && s.features_bn ? s.features_bn : s.features).map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <svg className={`w-4 h-4 bg-gradient-to-br ${s.color} bg-clip-text shrink-0`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} style={{ color: 'currentColor' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Let us manage your IT so you can focus on your business</h3>
                <p className="text-slate-300 text-sm">Schedule a free consultation with our managed services team today.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link to="/contact" className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg transition-all hover:scale-105">
                  Book Consultation
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

    </div>
  )
}
