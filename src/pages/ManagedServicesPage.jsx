import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { managedServicesData, L } from '../data/siteData'
import IconMapper from '../components/ui/IconMapper'
import { useLanguage } from '../context/LanguageContext'
import ExpandableText from '../components/ui/ExpandableText'
import PageHero from '../components/ui/PageHero'
import ServiceCTA from '../components/ui/ServiceCTA'

const { services } = managedServicesData

export default function ManagedServicesPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  const { lang } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Managed Services" description="24/7 IT infrastructure management, network monitoring, and proactive support from Red Data Bangladesh." />

      {/* Hero */}
      <PageHero>
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
            <ExpandableText className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Focus on your core business activities while we handle your IT infrastructure with Red Data's Managed
              Service. Our team of experts provides comprehensive management of your IT systems, including network
              monitoring, security, data backup, and disaster recovery. We offer proactive support and maintenance,
              ensuring optimal performance and minimizing downtime.
            </ExpandableText>
          </div>
      </PageHero>

      {/* Services */}
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

      {/* CTA */}
      <ServiceCTA
        heading="Let us manage your IT so you can focus on your business"
        subtext="Schedule a free consultation with our managed services team today."
        primaryLabel="Book Consultation"
      />

      <ExploreServices />

    </div>
  )
}
