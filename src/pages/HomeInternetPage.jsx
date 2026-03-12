import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { homeInternetPageData } from '../data/siteData'
import IconMapper from '../components/ui/IconMapper'

const { plans, benefits } = homeInternetPageData

export default function HomeInternetPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Home Internet Plans" description="Affordable high-speed fiber home internet plans in Dhaka and across Bangladesh from Red Data. No throttling, 99.9% uptime SLA." />

      {/* ── Page Hero ── */}
      <div className="bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 pt-36 pb-16 relative overflow-hidden">
        {/* decorative blobs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-96 h-96 rounded-full bg-rose-700/15 blur-3xl pointer-events-none" />
        <Container>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Home Internet</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-500/20 text-red-300 border border-red-500/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              Home Internet Plans
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Pricing Package
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We provide popular pricing to enjoy your daily life. High-speed fiber optic internet with no hidden charges and BTRC approved tariffs.
            </p>
          </div>
        </Container>
      </div>

      {/* ── Plans Grid ── */}
      <div className="bg-slate-50 dark:bg-slate-900 py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  plan.popular
                    ? 'border-red-500 shadow-lg shadow-red-500/20 dark:shadow-red-500/10'
                    : 'border-slate-200 dark:border-slate-700/60 shadow-md'
                } bg-white dark:bg-slate-800`}
              >
                {/* Popular ring */}
                {plan.popular && (
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-red-500 pointer-events-none" />
                )}

                {/* Colour top bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${plan.color}`} />

                {/* Tag */}
                <div className="px-5 pt-4 pb-0 flex justify-between items-start">
                  <span className={`text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${plan.tagColor}`}>
                    {plan.tag}
                  </span>
                  {plan.popular && (
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-600 text-white">★ Top Pick</span>
                  )}
                </div>

                {/* Plan name */}
                <div className="px-5 pt-3">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{plan.name}</h3>
                  <div className="flex items-end gap-1 mt-1">
                    <span className="text-3xl font-black text-red-600 dark:text-red-400">৳{plan.price.toLocaleString()}</span>
                    <span className="text-slate-400 text-sm mb-1">/month</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">{plan.base} + {plan.vat} (5% VAT)</p>
                </div>

                {/* Speed badge */}
                <div className="px-5 mt-4">
                  <div className={`flex items-center gap-2 bg-gradient-to-r ${plan.color} text-white rounded-xl px-3 py-2.5`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-lg font-black">{plan.speed} Mbps</span>
                    <span className="text-xs opacity-80 font-medium">Bandwidth</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="px-5 mt-4 space-y-2 flex-1">
                  {[
                    'Buffer-less social media & YouTube',
                    'Unlimited devices',
                    `${plan.talkTime} Min TalkTime`,
                    ...(plan.ott > 0 ? [`${plan.ott} OTT Subscription${plan.ott > 1 ? 's' : ''}`] : []),
                    '24/7 Customer Care',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* One-time cost */}
                <div className="px-5 mt-4">
                  <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-700/50 rounded-lg px-3 py-2 text-sm">
                    <span className="text-slate-500 dark:text-slate-400">One-time cost</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {plan.oneTime === 0 ? <span className="text-emerald-500">Free</span> : `৳${plan.oneTime.toLocaleString()}`}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-5 pb-5 mt-4">
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 ${
                      plan.popular
                        ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white hover:bg-red-600 hover:text-white dark:hover:bg-red-600'
                    }`}
                  >
                    Choose Package
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* VAT Note */}
          <p className="text-center text-slate-500 dark:text-slate-500 text-sm mt-10">
            All prices include 5% VAT.{' '}
          <span className="text-red-600 dark:text-red-400">View full BTRC approved tariff</span>
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
