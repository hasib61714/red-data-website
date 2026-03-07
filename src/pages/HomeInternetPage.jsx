import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { homeInternetPageData } from '../data/siteData'

const { plans, benefits } = homeInternetPageData

export default function HomeInternetPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
              {plans.slice(0, 3).map((plan, idx) => (
                <div
                  key={plan.name}
                  className="relative flex flex-col items-center justify-between rounded-2xl border border-red-400 bg-white shadow-lg min-h-[540px] max-w-[370px] mx-auto w-full p-8"
                  style={{ boxSizing: 'border-box' }}
                >
                  {/* Badge */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-28 flex justify-center">
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow bg-white border border-red-400 text-red-600`}>{plan.tag || (plan.popular ? 'Most Popular' : idx === 0 ? 'Basic' : idx === 1 ? 'Starter' : '')}</span>
                  </div>
                  {/* Plan name */}
                  <h3 className="mt-8 mb-4 text-xl font-extrabold text-center text-slate-900">{plan.name}</h3>
                  {/* Price */}
                  <div className="mb-2 text-center">
                    <span className="text-4xl font-black text-red-600">৳{plan.price.toLocaleString()}</span>
                    <span className="text-slate-400 text-base ml-1">/month</span>
                  </div>
                  {/* One-time cost */}
                  <div className="mb-4 text-center text-sm text-slate-500">{plan.oneTime === 0 ? <span className="text-emerald-500">Free</span> : plan.oneTime}</div>
                  {/* Divider */}
                  <hr className="w-full border-t border-red-200 my-4" />
                  {/* Features */}
                  <ul className="w-full flex-1 flex flex-col justify-start gap-4 mb-8">
                    {[
                      'Buffer-less social media & YouTube',
                      'Unlimited devices',
                      `${plan.talkTime} Min TalkTime`,
                      ...(plan.ott > 0 ? [`${plan.ott} OTT Subscription${plan.ott > 1 ? 's' : ''}`] : []),
                      '24/7 Customer Care',
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                        <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="block w-full mt-auto text-center py-3 rounded-xl font-semibold text-base bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 text-white shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95"
                  >
                    Choose Package &rarr;
                  </Link>
                </div>
              ))}
            </div>
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
            <a href="https://reddata.com.bd/tariff.pdf" target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:underline">
              View full BTRC approved tariff →
            </a>
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
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-2xl shrink-0">
                  {b.icon}
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
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "url('https://reddata.com.bd/images/worldmap.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
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
                <img
                  src="https://reddata.com.bd/images/bd.png"
                  alt="Bangladesh coverage map"
                  className="w-64 lg:w-80 drop-shadow-2xl opacity-90"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
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
