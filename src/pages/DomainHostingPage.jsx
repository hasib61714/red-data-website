import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { domainHostingData, L } from '../data/siteData'
import { useLanguage } from '../context/LanguageContext'
import ExpandableText from '../components/ui/ExpandableText'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionHeader from '../components/ui/SectionHeader'
import FeatureCard from '../components/ui/FeatureCard'

const { features } = domainHostingData

export default function DomainHostingPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  const { lang } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Domain & Hosting" description="Domain registration, NVMe web hosting, and SSL certificates — reliable web solutions from Red Data Bangladesh." />

      {/* Hero */}
      <PageHero>
          <Breadcrumb items={[{ label: 'Services' }, { label: 'Domain & Hosting' }]} />
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Domain &{' '}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Hosting
              </span>
            </h1>
            <ExpandableText className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Establish your online presence with Red Data's Domain &amp; Hosting Service. We offer a range of domain
              registration options and reliable hosting solutions tailored to your needs. Our hosting packages include
              robust security features, high uptime guarantees, and excellent customer support, ensuring your website
              runs smoothly and securely. Whether you're a small business or a large enterprise, our services provide
              the foundation for a successful online presence.
            </ExpandableText>
          </div>
      </PageHero>

      {/* Features */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <SectionHeader badge="What's Included" heading="Full-stack" headingAccent="Web Solutions" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={L(lang, f, 'title')} compact />
            ))}
          </div>
        </Container>
      </div>

      {/* Get Started CTA */}
      <div className="py-14 bg-white dark:bg-slate-800/40">
        <Container>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-sm shadow-lg shadow-red-600/30 hover:shadow-red-500/40 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </Container>
      </div>

      <ExploreServices />
    </div>
  )
}
