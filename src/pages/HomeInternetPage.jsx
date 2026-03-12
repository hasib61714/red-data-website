import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { homeInternetPageData } from '../data/siteData'
import IconMapper from '../components/ui/IconMapper'
import PricingCard from '../components/shared/PricingCard'
import Reveal from '../components/ui/Reveal'

const { plans, benefits } = homeInternetPageData

export default function HomeInternetPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Home Internet Plans" description="Affordable high-speed fiber home internet plans in Dhaka and across Bangladesh from Red Data. No throttling, 99% uptime." />

      {/* ── Page Hero ── */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 pt-36 pb-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-rose-700/10 blur-3xl pointer-events-none" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 49px,rgba(255,255,255,1) 49px,rgba(255,255,255,1) 50px),repeating-linear-gradient(90deg,transparent,transparent 49px,rgba(255,255,255,1) 49px,rgba(255,255,255,1) 50px)",
          }}
        />
        <Container>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Home Internet</span>
          </nav>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left: text */}
            <div className="lg:w-1/2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-500/20 text-red-300 border border-red-500/30 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                Residential Plans
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                Home Internet<br />
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  Plans & Pricing
                </span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                Red Data Home Internet delivers ultra-fast fiber broadband engineered for modern households. From buffer-free 4K streaming and lag-free gaming to seamless video calls — all on one blisteringly fast connection with no hidden charges.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/40 transition-all hover:scale-105"
                >
                  Get Connected
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+8809640112233"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  09640-112233
                </a>
              </div>
            </div>
            {/* Right: visual card */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-72 h-64 lg:w-96 lg:h-80">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-600/20 to-slate-800/60 backdrop-blur-sm border border-white/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-6 p-8">
                    {['Home','Wifi','Play','Tv','Phone','Monitor','Shield','Zap','Clock'].map((icon, i) => (
                      <div key={i} className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white/70 backdrop-blur-sm border border-white/10">
                        <IconMapper name={icon} className="w-5 h-5" />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Speed badge */}
                <div className="absolute -bottom-4 -right-4 bg-red-600 text-white rounded-2xl px-4 py-3 shadow-xl">
                  <div className="text-2xl font-black">100</div>
                  <div className="text-xs text-red-200">Mbps Max</div>
                </div>
                {/* Uptime badge */}
                <div className="absolute -top-4 -left-4 bg-emerald-600 text-white rounded-2xl px-4 py-3 shadow-xl">
                  <div className="text-2xl font-black">99%</div>
                  <div className="text-xs text-emerald-200">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Plans Grid ── */}
      <div className="bg-slate-50 dark:bg-slate-900 py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start md:items-center mt-4">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 100}>
                <PricingCard
                  name={plan.name}
                  tag={plan.tag}
                  price={`৳${plan.price.toLocaleString()}`}
                  vatBreakdown={`৳${plan.base} + ৳${plan.vat} (5% VAT)`}
                  period="/month"
                  oneTime={plan.oneTime === 0 ? 'Free installation' : `৳${plan.oneTime.toLocaleString()} one-time setup`}
                  bandwidth={`${plan.speed} Mbps`}
                  popular={plan.name === 'Maroon'}
                  features={[
                    `${plan.speed} Mbps Bandwidth`,
                    'Buffer-less social media & YouTube',
                    'Unlimited Device Support',
                    `${plan.talkTime} Min TalkTime`,
                    ...(plan.ott > 0 ? [`${plan.ott} OTT Subscription${plan.ott > 1 ? 's' : ''}`] : []),
                    '24/7 Customer Care',
                    plan.oneTime === 0 ? 'Free Installation' : `৳${plan.oneTime.toLocaleString()} one-time setup`,
                  ]}
                  cta="Get Started"
                />
              </Reveal>
            ))}
          </div>
          <p className="text-center text-slate-500 dark:text-slate-500 text-sm mt-10">
            All prices include 5% VAT.
          </p>
        </Container>
      </div>

      {/* ── Why Choose Us ── */}
      <div className="py-16 bg-white dark:bg-slate-800/40">
        <Container>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              We provide top-tier services with{' '}
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                benefits you can rely on
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 hover:border-red-200 dark:hover:border-red-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                  <IconMapper name={b.icon} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{b.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Area Coverage ── */}
      <div className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" />
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-500/20 text-red-300 border border-red-500/30 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Area <span className="text-red-400">Coverage</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Red Data provides high-speed fiber optic internet services across Bangladesh. From major cities to suburban areas, our growing network ensures you stay connected.
              </p>
              <Link
                to="/#coverage"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-sm shadow-lg shadow-red-600/30 transition-all hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Check Coverage
              </Link>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 lg:w-80 h-72 rounded-3xl bg-gradient-to-br from-red-600/20 to-red-900/10 flex items-center justify-center">
                  <svg className="w-24 h-24 text-red-400/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                </div>
                <div className="absolute inset-0 rounded-full bg-red-500/10 blur-3xl" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ── CTA ── */}
      <div className="py-14 bg-red-600">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Ready to get connected?</h3>
              <p className="text-red-100 text-sm mt-1">Subscribe to any plan and get free installation today.</p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-white text-red-600 font-bold text-sm hover:bg-red-50 transition-all shadow"
              >
                Get Started
              </Link>
              <Link to="/" className="px-6 py-3 rounded-full border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-all">
                ← Back Home
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <ExploreServices />

    </div>
  )
}
