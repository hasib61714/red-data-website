import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'

const services = [
  {
    icon: '🌐',
    title: 'Custom Network Management Service',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-500/10',
    borderColor: 'border-blue-200 dark:border-blue-500/30',
    desc: 'End-to-end monitoring, configuration, and optimisation of your entire network infrastructure — routers, switches, firewalls, and WAN links — proactively managed by our certified engineers.',
    features: [
      'Proactive fault detection & resolution',
      '24/7 NOC monitoring',
      'Network performance optimisation',
      'Regular firmware & patch management',
      'Detailed SLA reports & dashboards',
      'Incident management & escalation',
    ],
  },
  {
    icon: '🛡️',
    title: 'Managed Network Security Service',
    color: 'from-red-500 to-rose-600',
    bgColor: 'bg-red-50 dark:bg-red-500/10',
    borderColor: 'border-red-200 dark:border-red-500/30',
    desc: 'Comprehensive security management covering firewalls, intrusion detection, threat intelligence, and compliance — keeping your business protected around the clock.',
    features: [
      'Firewall management & tuning',
      'IDS / IPS monitoring',
      'Security incident response',
      'Vulnerability scanning & remediation',
      'Compliance reporting (ISO 27001, BDRC)',
      'DDoS protection & traffic scrubbing',
    ],
  },
  {
    icon: '💻',
    title: 'Managed Software & Embedded System Development',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-500/10',
    borderColor: 'border-emerald-200 dark:border-emerald-500/30',
    desc: 'Full-lifecycle software and embedded system development from requirements analysis through to deployment and ongoing support — custom-built for your business needs.',
    features: [
      'Custom software application development',
      'Embedded & IoT system engineering',
      'System integration & API development',
      'Quality assurance & testing',
      'Deployment & DevOps pipelines',
      'Post-launch maintenance & support',
    ],
  },
]

const stats = [
  { value: '24/7', label: 'Managed Support' },
  { value: '99.9%', label: 'Network Uptime' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '10+', label: 'Years Experience' },
]

export default function ManagedServicesPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Managed Services" description="24/7 IT infrastructure management, network monitoring, and proactive support from Red Data Bangladesh." />

      {/* ── Hero ── */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 pt-36 pb-14 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />
        <Container>
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-400">Services</span>
            <span>/</span>
            <span className="text-white font-medium">Managed Services</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Enterprise IT
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Managed{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
                IT Services
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Comprehensive management of your IT systems — network monitoring, security, data backup, disaster recovery,
              and custom software development, all under one trusted partner.
            </p>
          </div>
        </Container>
      </div>

      {/* ── Stats ── */}
      <div className="bg-blue-700 py-6">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">{s.value}</div>
                <div className="text-blue-100 text-xs sm:text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Services ── */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Our Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Three Core{' '}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Managed Services
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {services.map((s, i) => (
              <div key={s.title} className={`rounded-3xl border ${s.borderColor} ${s.bgColor} p-7 lg:p-9`}>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center text-2xl shadow-lg shrink-0`}>
                      {s.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>Service {String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-3">{s.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                  <div className="lg:w-64 shrink-0">
                    <ul className="space-y-2">
                      {s.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <svg className={`w-4 h-4 bg-gradient-to-br ${s.color} bg-clip-text shrink-0`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} style={{ color: 'currentColor' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── CTA ── */}
      <div className="py-12 bg-white dark:bg-slate-800/40">
        <Container>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Let us manage your IT so you can focus on your business</h3>
                <p className="text-slate-300 text-sm">Schedule a free consultation with our managed services team today.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link to="/contact" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition-all hover:scale-105">
                  Book Consultation
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
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Home
            </Link>
          </div>
        </Container>
      </div>
    </div>
  )
}
