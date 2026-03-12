import { useEffect } from 'react'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { smsServiceData, L } from '../data/siteData'
import { useLanguage } from '../context/LanguageContext'
import ExpandableText from '../components/ui/ExpandableText'
import PageHero from '../components/ui/PageHero'
import ServiceCTA from '../components/ui/ServiceCTA'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionHeader from '../components/ui/SectionHeader'
import FeatureCard from '../components/ui/FeatureCard'

const { features } = smsServiceData

export default function SmsServicePage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  const { lang } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="SMS Service" description="Bulk SMS, OTP gateway, and transactional messaging services with high delivery rates from Red Data Bangladesh." />

      {/* Hero */}
      <PageHero>
          <Breadcrumb items={[{ label: 'Services' }, { label: 'SMS Service' }]} />
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              SMS{' '}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <ExpandableText className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Smart & affordable bulk SMS marketing — send messages, alerts, and notifications at scale with
              high delivery rates, easy API integration, and comprehensive real-time reporting.
            </ExpandableText>
          </div>
      </PageHero>

      {/* Features */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <SectionHeader badge="Platform Features" heading="Why Choose Red Data" headingAccent="SMS" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {features.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={L(lang, f, 'title')} desc={L(lang, f, 'desc')} compact />
            ))}
          </div>
        </Container>
      </div>

      {/* CTA */}
      <ServiceCTA
        heading="Start sending in minutes"
        subtext="Get API credentials and free test credits — no credit card required to start."
      />

      <ExploreServices />

      {/* Back */}
    </div>
  )
}
