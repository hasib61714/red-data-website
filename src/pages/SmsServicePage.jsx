import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'

const features = [
  { icon: '🔌', title: 'Easy API Integration', desc: 'Developer-friendly REST APIs with comprehensive documentation — integrate bulk SMS into any system in minutes.' },
  { icon: '🖥️', title: 'User Friendly Customer Panel', desc: 'Intuitive web dashboard for non-technical users to send campaigns, view reports, and manage contacts without any coding.' },
  { icon: '📋', title: 'Campaign & Template Management', desc: 'Create, schedule, and reuse SMS templates for recurring campaigns — segmentation and bulk import included.' },
  { icon: '🗄️', title: 'Aggregator Plane', desc: 'Connected to all major operators through our aggregator layer ensuring maximum route coverage and reliability across Bangladesh.' },
  { icon: '📍', title: 'Location Based SMS', desc: 'Target subscribers by geographic zone for hyper-local marketing campaigns and location-triggered notifications.' },
  { icon: '📈', title: 'Highest Submit Rate', desc: 'Our direct operator connections deliver among the highest submit and delivery rates in the country with real-time status.' },
  { icon: '💸', title: 'No Hidden Cost', desc: 'Transparent per-SMS pricing — no setup fees, no monthly minimums, no surprise charges. Pay only for what you send.' },
  { icon: '🔑', title: 'Customer Driven API Key', desc: 'Each customer gets a dedicated API key with role-based access control and usage analytics in the dashboard.' },
  { icon: '👨‍💻', title: 'Developer Friendly', desc: 'SDKs for PHP, Python, Node.js and Java alongside thorough Postman collections and sandbox environments.' },
  { icon: '💼', title: 'Transactional SMS', desc: 'Mission-critical OTPs, alerts, and notifications delivered through a dedicated high-priority route with millisecond latency.' },
]

const useCases = [
  { icon: '🏦', label: 'Banking & Finance' },
  { icon: '🛒', label: 'E-Commerce' },
  { icon: '🏥', label: 'Healthcare' },
  { icon: '📦', label: 'Logistics' },
  { icon: '🎓', label: 'Education' },
  { icon: '🏢', label: 'Enterprises' },
]

export default function SmsServicePage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="SMS Service" description="Bulk SMS, OTP gateway, and transactional messaging services with high delivery rates from Red Data Bangladesh." />

      {/* ── Hero ── */}
      <div className="bg-gradient-to-br from-orange-950 via-slate-900 to-slate-900 pt-36 pb-14 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-orange-600/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />
        <Container>
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-400">Services</span>
            <span>/</span>
            <span className="text-white font-medium">SMS Service</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-orange-500/20 text-orange-300 border border-orange-500/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              Bulk SMS Platform
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              SMS{' '}
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Smart & affordable bulk SMS marketing — send messages, alerts, and notifications at scale with
              high delivery rates, easy API integration, and comprehensive real-time reporting.
            </p>
          </div>
        </Container>
      </div>

      {/* ── Use Cases ── */}
      <div className="bg-orange-600 py-5">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {useCases.map((u) => (
              <span key={u.label} className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium">
                {u.icon} {u.label}
              </span>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Features ── */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Platform Features
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Why Choose Red Data{' '}
              <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                SMS
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 p-5 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center text-xl shadow mb-3 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">{f.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── CTA ── */}
      <div className="py-12 bg-white dark:bg-slate-800/40">
        <Container>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-orange-600/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Start sending in minutes</h3>
                <p className="text-slate-300 text-sm">Get API credentials and free test credits — no credit card required to start.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link to="/contact" className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-lg transition-all hover:scale-105">
                  Get Started
                </Link>
                <a href="tel:+8809640112233" className="px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all">
                  📞 Call Sales
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <ExploreServices />

      {/* ── Back ── */}
      <div className="py-8 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <Container>
          <div className="flex justify-center">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 text-sm font-medium transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Home
            </Link>
          </div>
        </Container>
      </div>
    </div>
  )
}
