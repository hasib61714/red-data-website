import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import IconMapper from '../components/ui/IconMapper'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { corporateInternetPageData, aboutPageData, L } from '../data/siteData'
import { useLanguage } from '../context/LanguageContext'
import ExpandableText from '../components/ui/ExpandableText'

const { fiberFeatures, whyUs, stats: corpStats } = corporateInternetPageData
const clients = aboutPageData.clients

export default function CorporateInternetPage() {
  const { lang } = useLanguage()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Corporate Internet" description="Dedicated enterprise-grade internet with reliable uptime, static IPs, and 24/7 support from Red Data Bangladesh." />

      {/* ── Page Hero ── */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 pt-36 pb-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-rose-700/10 blur-3xl pointer-events-none" />
        {/* Abstract circuit lines background */}
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
            <span className="text-white font-medium">Corporate Internet</span>
          </nav>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left: text */}
            <div className="lg:w-1/2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-500/20 text-red-300 border border-red-500/30 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                Enterprise Solutions
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                Corporate Internet<br />
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  Connectivity
                </span>
              </h1>
              <ExpandableText className="text-slate-300 text-base sm:text-lg leading-relaxed" wrapperClassName="mb-8">
                At Red Data, we understand that a reliable and high-speed internet connection is critical for the success of your business. Our Corporate Internet Connectivity service offers robust, secure, and scalable internet solutions tailored to meet the unique demands of your enterprise. With dedicated bandwidth, 24/7 customer support, and guaranteed uptime, we ensure your business operations run smoothly and efficiently. Partner with us to experience seamless connectivity and drive your business forward.
              </ExpandableText>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/40 transition-all hover:scale-105"
                >
                  Get Started
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
                {/* Animated network nodes */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-600/20 to-slate-800/60 backdrop-blur-sm border border-white/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-6 p-8">
                    {['Building2','Network','Globe','Server','Shield','Lock','Database','Layers','Zap'].map((icon, i) => (
                      <div key={i} className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white/70 backdrop-blur-sm border border-white/10">
                        <IconMapper name={icon} className="w-5 h-5" />
                      </div>
                    ))}
                  </div>
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

      {/* ── Fiber Optic Features ── */}
      <div className="py-20 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Fiber Optic Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Why Choose Red Data{' '}
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Fiber Optic Connectivity?
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {fiberFeatures.map((f, i) => (
              <div
                key={f.title}
                className="group relative p-7 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-xl hover:border-red-200 dark:hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-5 text-7xl font-black text-slate-100 dark:text-slate-700/60 leading-none select-none group-hover:text-red-100 dark:group-hover:text-red-900/40 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 text-white flex items-center justify-center mb-5 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform">
                    <IconMapper name={f.icon} className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{L(lang, f, 'title')}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{L(lang, f, 'desc')}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Why Choose Us ── */}
      <div className="py-20 bg-white dark:bg-slate-800/40">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left sticky label */}
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Why Choose Us
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                We provide top-tier services with{' '}
                <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  benefits you can rely on
                </span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Thousands of enterprises across Bangladesh trust Red Data for their mission-critical internet needs.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-sm shadow-lg shadow-red-600/30 transition-all hover:scale-105"
              >
                Contact Sales
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            {/* Right: grid */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUs.map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 hover:border-red-200 dark:hover:border-red-500/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 group-hover:scale-110 transition-transform">
                    <IconMapper name={item.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{L(lang, item, 'title')}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{L(lang, item, 'desc')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ── Clients ── */}
      <div className="py-20 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Our Clients
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Some of Our{' '}
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Valuable Clients
              </span>
            </h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">
              Trusted by leading banks, fintech companies, and enterprises across Bangladesh.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {clients.map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-center p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 hover:border-red-200 dark:hover:border-red-500/30 hover:shadow-md transition-all group"
              >
                <img
                  src={c.img}
                  alt={c.name}
                  className="h-10 w-auto object-contain group-hover:scale-105 group-hover:brightness-110 opacity-80 group-hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `<span class="text-xs text-slate-400 font-medium text-center leading-tight">${c.name}</span>`
                  }}
                />
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 dark:text-slate-500 text-sm mt-8">
            + many more enterprises across Bangladesh
          </p>
        </Container>
      </div>

      {/* ── Stats Strip ── */}
      <div className="bg-gradient-to-r from-red-600 to-rose-700 py-12">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
            {corpStats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl sm:text-4xl font-black mb-1">{s.num}</div>
                <div className="text-red-100 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── CTA ── */}
      <div className="py-16 bg-white dark:bg-slate-900">
        <Container>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 lg:p-14 relative overflow-hidden text-center">
            <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
                Ready to power your{' '}
                <span className="text-red-400">enterprise?</span>
              </h3>
              <p className="text-slate-300 text-base max-w-xl mx-auto mb-8">
                Contact our sales team today and get a custom quote tailored to your business needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/40 transition-all hover:scale-105"
                >
                  Get a Custom Quote
                </Link>
                <a
                  href="tel:+8809640112233"
                  className="px-8 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                >
                  09640-112233
                </a>
                <Link to="/" className="px-8 py-3.5 rounded-full border border-white/20 text-slate-300 font-semibold text-sm hover:bg-white/5 transition-all">
                  ← Back Home
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <ExploreServices />

    </div>
  )
}
