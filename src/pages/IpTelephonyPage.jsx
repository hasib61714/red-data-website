import { useEffect } from 'react'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { ipTelephonyData, L } from '../data/siteData'
import { useLanguage } from '../context/LanguageContext'
import ExpandableText from '../components/ui/ExpandableText'
import PageHero from '../components/ui/PageHero'
import ServiceCTA from '../components/ui/ServiceCTA'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionHeader from '../components/ui/SectionHeader'
import FeatureCard from '../components/ui/FeatureCard'

const { features } = ipTelephonyData

export default function IpTelephonyPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  const { lang } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="IP Telephony" description="VoIP & cloud PBX solutions with crystal-clear call quality and flexible plans from Red Data in Bangladesh." />

      {/* Hero */}
      <PageHero>
          <Breadcrumb items={[{ label: 'Services' }, { label: 'IP Telephony' }]} />
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
          <SectionHeader badge="12 Powerful Features" heading="Everything Your Business" headingAccent="Needs" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={L(lang, f, 'title')} desc={L(lang, f, 'desc')} />
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
