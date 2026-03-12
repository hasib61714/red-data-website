import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'

const features = [
  { icon: '🏢', title: 'Hosted & On-Premise IPPBX', desc: 'Deploy a full-featured IP PBX either hosted in our cloud or on-premise at your office — your choice of control and scale.' },
  { icon: '☁️', title: 'Cloud PBX Service', desc: 'Fully managed cloud-based PBX eliminating hardware costs while delivering enterprise-grade telephony features.' },
  { icon: '📞', title: 'Call Center Solution', desc: 'Complete inbound/outbound call center platform with agent management, queue analytics, and supervisor dashboards.' },
  { icon: '🤖', title: 'Dynamic IVR', desc: 'Multi-level Interactive Voice Response with real-time routing logic, language support, and seamless CRM hooks.' },
  { icon: '🔢', title: 'Short Code Parking', desc: 'Dedicated short codes for marketing campaigns, hotlines, and internal extensions that are easy to remember.' },
  { icon: '📟', title: 'Analog PBX Integration', desc: 'Bridge your legacy analog PBX infrastructure into the VoIP world with zero downtime migration paths.' },
  { icon: '🆓', title: 'Toll Free Service', desc: 'Provision toll-free numbers so customers can call your business at no charge — ideal for support and sales.' },
  { icon: '🔗', title: 'CRM Integration', desc: 'Native connectors for popular CRMs (Salesforce, Zoho, HubSpot) enabling click-to-dial and call logging.' },
  { icon: '🌐', title: 'SIP Trunk', desc: 'Replace costly PSTN lines with scalable SIP trunks over our high-quality IP network with competitive per-minute rates.' },
  { icon: '🃏', title: 'Hunting Group', desc: 'Distribute incoming calls intelligently across agent groups using round-robin, simultaneous, or priority rules.' },
  { icon: '📲', title: 'Automated Dialing & Call Distribution', desc: 'Predictive, progressive, and preview auto-dialers with automatic call distribution for maximum agent productivity.' },
  { icon: '↪️', title: 'Call Forwarding', desc: 'Unconditional, busy, and no-answer forwarding rules configurable per extension — stay reachable everywhere.' },
]

const stats = [
  { value: '12+', label: 'Features' },
  { value: 'HD', label: 'Voice Quality' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '24/7', label: 'Support' },
]

export default function IpTelephonyPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="IP Telephony" description="VoIP & cloud PBX solutions with crystal-clear call quality and flexible plans from Red Data in Bangladesh." />

      {/* ── Hero ── */}
      <div className="bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900 pt-36 pb-14 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-violet-600/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />
        <Container>
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-400">Services</span>
            <span>/</span>
            <span className="text-white font-medium">IP Telephony</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-violet-500/20 text-violet-300 border border-violet-500/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Enterprise Service
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              IP{' '}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                Telephony
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Superior voice quality, seamless integration with your business tools, and cost-effective calling plans —
              including voicemail, call forwarding, conferencing and a full call center stack.
            </p>
          </div>
        </Container>
      </div>

      {/* ── Stats ── */}
      <div className="bg-violet-600 py-6">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">{s.value}</div>
                <div className="text-violet-100 text-xs sm:text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Features ── */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-violet-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              12 Powerful Features
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Everything Your Business{' '}
              <span className="bg-gradient-to-r from-violet-500 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Needs
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 p-6 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white flex items-center justify-center text-xl shadow mb-4 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-2">{f.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── CTA ── */}
      <div className="py-12 bg-white dark:bg-slate-800/40">
        <Container>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Ready to modernise your business communications?</h3>
                <p className="text-slate-300 text-sm">Contact our VoIP specialists for a custom proposal tailored to your team size and requirements.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link to="/contact" className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm shadow-lg transition-all hover:scale-105">
                  Get a Quote
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
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 text-sm font-medium transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Home
            </Link>
          </div>
        </Container>
      </div>
    </div>
  )
}
