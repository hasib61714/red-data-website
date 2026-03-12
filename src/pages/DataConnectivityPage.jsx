import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { dataConnectivityData, L } from '../data/siteData'
import IconMapper from '../components/ui/IconMapper'
import { useLanguage } from '../context/LanguageContext'
import ExpandableText from '../components/ui/ExpandableText'
import PageHero from '../components/ui/PageHero'
import ServiceCTA from '../components/ui/ServiceCTA'

const { features } = dataConnectivityData

export default function DataConnectivityPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  const { lang } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Data Connectivity" description="Fiber-backed inter-office links, VPN, MPLS, and backhaul services from Red Data — Bangladesh's leading ISP." />

      {/* Hero */}
      <PageHero>
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-400">Services</span>
            <span>/</span>
            <span className="text-white font-medium">Data Connectivity</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Data{' '}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Connectivity
              </span>
            </h1>
            <ExpandableText className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Red Data offers comprehensive Data Connectivity solutions that ensure seamless data transfer and
              communication within your organization. Our services include point-to-point and multipoint data links,
              VPN services, and dedicated leased lines, all designed to provide high-speed, secure, and reliable
              connections. All of our data services are delivered via Layer2/Layer3 and resilient national MPLS next
              generation network, monitored and maintained 24/7 by our NOC.
            </ExpandableText>
          </div>
      </PageHero>

      {/* Features */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              What We Offer
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Connectivity{' '}
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 p-6 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center text-xl shadow mb-4 group-hover:scale-110 transition-transform">
                  <IconMapper name={f.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">{L(lang, f, 'title')}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{L(lang, f, 'desc')}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* NOC Banner */}
      <ServiceCTA
        heading="Always-on network operations"
        subtext="Our Network Operations Center monitors every link continuously, ensuring proactive fault detection and rapid resolution."
        primaryLabel="Get a Quote"
        badge="bg-emerald-400"
        badgeLabel="24/7 NOC Monitoring"
      />

      <ExploreServices />

    </div>
  )
}
