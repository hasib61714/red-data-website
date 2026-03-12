import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'

const features = [
  {
    icon: '🌐',
    title: 'Domain Registration',
    desc: 'Register .com, .com.bd, .org, .net and all popular TLDs at competitive prices with free DNS management, privacy protection, and auto-renewal.',
  },
  {
    icon: '☁️',
    title: 'Cloud Hosting',
    desc: 'Scalable cloud hosting with SSD storage, auto-scaling resources, free SSL, and one-click app installs — perfect for web & ecommerce.',
  },
  {
    icon: '💾',
    title: 'Storage Solutions',
    desc: 'Flexible object and block storage options with redundant backups, geo-replication, and high-throughput access for business data.',
  },
  {
    icon: '🖥️',
    title: 'Dedicated Servers',
    desc: 'Bare-metal dedicated servers with full root access, custom hardware configurations, and direct network hand-off in our Dhaka data center.',
  },
  {
    icon: '🏗️',
    title: 'Network Infrastructure',
    desc: 'Enterprise-grade connectivity for your hosted services with redundant upstream links, BGP routing, and low-latency peering.',
  },
  {
    icon: '🛡️',
    title: 'Security Measures',
    desc: 'DDoS mitigation, WAF, automated malware scanning, SSL certificates, and proactive vulnerability patching included on all plans.',
  },
  {
    icon: '⚙️',
    title: 'Customization Options',
    desc: 'Choose your OS, control panel (cPanel / Plesk / DirectAdmin), software stack, and resource allocation exactly how you need.',
  },
  {
    icon: '🔧',
    title: 'Management Tools',
    desc: 'cPanel / WHM access, one-click backups, resource monitors, DNS manager, and 24/7 managed support for full peace of mind.',
  },
]

const plans = [
  { name: 'Starter', price: 'BDT 500', period: '/month', features: ['1 Domain', '10 GB SSD Storage', '10 Email Accounts', 'Free SSL', '99.9% Uptime'] },
  { name: 'Business', price: 'BDT 1,200', period: '/month', features: ['5 Domains', '50 GB SSD Storage', 'Unlimited Emails', 'Free SSL + CDN', '99.9% Uptime', 'Daily Backup'], highlight: true },
  { name: 'Enterprise', price: 'Custom', period: 'Quote', features: ['Unlimited Domains', 'Dedicated Storage', 'Custom Email Setup', 'DDoS Protection', '99.99% SLA', 'Managed Service'] },
]

export default function DomainHostingPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Domain & Hosting" description="Domain registration, NVMe web hosting, and SSL certificates — reliable web solutions from Red Data Bangladesh." />

      {/* ── Hero ── */}
      <div className="bg-gradient-to-br from-teal-950 via-slate-900 to-slate-900 pt-36 pb-14 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-teal-600/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />
        <Container>
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-400">Services</span>
            <span>/</span>
            <span className="text-white font-medium">Domain & Hosting</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Web Services
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Domain &{' '}
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
                Hosting
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Complete domain registration and reliable hosting solutions with robust security features, high uptime
              guarantees, and expert management tools — everything to keep your web presence running 24/7.
            </p>
          </div>
        </Container>
      </div>

      {/* ── Features ── */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              What's Included
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Full-stack{' '}
              <span className="bg-gradient-to-r from-teal-500 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
                Web Solutions
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 p-5 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white flex items-center justify-center text-xl shadow mb-3 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">{f.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Hosting Plans ── */}
      <div className="py-14 bg-white dark:bg-slate-800/40">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Hosting <span className="bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent">Plans</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((p) => (
              <div key={p.name} className={`rounded-2xl p-6 flex flex-col border transition-all hover:shadow-lg ${p.highlight ? 'bg-gradient-to-b from-teal-600 to-teal-700 border-teal-500 text-white' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>
                {p.highlight && <div className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full self-start mb-3">Most Popular</div>}
                <h3 className={`text-lg font-bold mb-1 ${p.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{p.name}</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className={`text-2xl font-extrabold ${p.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{p.price}</span>
                  <span className={`text-sm mb-1 ${p.highlight ? 'text-teal-200' : 'text-slate-400'}`}>{p.period}</span>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {p.features.map((feat) => (
                    <li key={feat} className={`flex items-center gap-2 text-sm ${p.highlight ? 'text-teal-100' : 'text-slate-500 dark:text-slate-400'}`}>
                      <svg className={`w-4 h-4 shrink-0 ${p.highlight ? 'text-teal-200' : 'text-teal-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`text-center py-2.5 rounded-xl font-bold text-sm transition-all ${p.highlight ? 'bg-white text-teal-700 hover:bg-teal-50' : 'bg-teal-600 hover:bg-teal-500 text-white'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <ExploreServices />

      {/* ── Back ── */}
      <div className="py-8 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <Container>
          <div className="flex justify-center">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 text-sm font-medium transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Home
            </Link>
          </div>
        </Container>
      </div>
    </div>
  )
}
