import { useEffect } from 'react'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { dataConnectivityData, L } from '../data/siteData'
import { useLanguage } from '../context/LanguageContext'
import ExpandableText from '../components/ui/ExpandableText'
import PageHero from '../components/ui/PageHero'
import ServiceCTA from '../components/ui/ServiceCTA'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionHeader from '../components/ui/SectionHeader'
import FeatureCard from '../components/ui/FeatureCard'

const { features } = dataConnectivityData

export default function DataConnectivityPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  const { lang } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Data Connectivity" description="Fiber-backed inter-office links, VPN, MPLS, and backhaul services from Red Data — Bangladesh's leading ISP." />

      {/* Hero */}
      <PageHero>
          <Breadcrumb items={[{ label: 'Services' }, { label: 'Data Connectivity' }]} />
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
          <SectionHeader badge="What We Offer" heading="Connectivity" headingAccent="Solutions" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={L(lang, f, 'title')} desc={L(lang, f, 'desc')} />
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
