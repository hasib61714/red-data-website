import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { domainHostingData, L } from '../data/siteData'
import IconMapper from '../components/ui/IconMapper'
import { useLanguage } from '../context/LanguageContext'
import ExpandableText from '../components/ui/ExpandableText'
import PageHero from '../components/ui/PageHero'

const { features } = domainHostingData

export default function DomainHostingPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  const { lang } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Domain & Hosting" description="Domain registration, NVMe web hosting, and SSL certificates — reliable web solutions from Red Data Bangladesh." />

      {/* Hero */}
      <PageHero>
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-400">Services</span>
            <span>/</span>
            <span className="text-white font-medium">Domain & Hosting</span>
          </nav>
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
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              What's Included
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Full-stack{' '}
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Web Solutions
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 p-5 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center text-xl shadow mb-3 group-hover:scale-110 transition-transform">
                  <IconMapper name={f.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">{L(lang, f, 'title')}</h3>
              </div>
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
