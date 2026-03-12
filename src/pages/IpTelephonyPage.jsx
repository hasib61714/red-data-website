import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { ipTelephonyData, L } from '../data/siteData'
import IconMapper from '../components/ui/IconMapper'
import { useLanguage } from '../context/LanguageContext'
import ExpandableText from '../components/ui/ExpandableText'
import PageHero from '../components/ui/PageHero'
import ServiceCTA from '../components/ui/ServiceCTA'

const { features } = ipTelephonyData

export default function IpTelephonyPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  const { lang } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="IP Telephony" description="VoIP & cloud PBX solutions with crystal-clear call quality and flexible plans from Red Data in Bangladesh." />

      {/* Hero */}
      <PageHero>
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-400">Services</span>
            <span>/</span>
            <span className="text-white font-medium">IP Telephony</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              IP{' '}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Telephony
              </span>
            </h1>
            <ExpandableText className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Elevate your business communications with Red Data's IP Telephony Service. Enjoy superior voice quality,
              seamless integration, cost-effective calling plans, and a wide range of advanced features such as
              voicemail, call forwarding, and conferencing.
            </ExpandableText>
          </div>
      </PageHero>


      {/* Features */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              12 Powerful Features
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Everything Your Business{' '}
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Needs
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 p-6 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center text-xl shadow mb-4 group-hover:scale-110 transition-transform">
                  <IconMapper name={f.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-2">{L(lang, f, 'title')}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{L(lang, f, 'desc')}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* CTA */}
      <ServiceCTA
        heading="Ready to modernise your business communications?"
        subtext="Contact our VoIP specialists for a custom proposal tailored to your team size and requirements."
        primaryLabel="Get a Quote"
      />

      <ExploreServices />
    </div>
  )
}
