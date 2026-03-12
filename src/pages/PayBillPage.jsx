import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import PageMeta from '../components/ui/PageMeta'
import { payBillData } from '../data/siteData'
import IconMapper from '../components/ui/IconMapper'

const { paymentMethods, faqs } = payBillData

export default function PayBillPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Pay Bill" description="Pay your Red Data internet bill via bKash, Nagad, Rocket, card, bank transfer, or cash at our Gulshan office." />

      {/* ── Hero ── */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 pt-36 pb-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-rose-700/10 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 49px,rgba(255,255,255,1) 49px,rgba(255,255,255,1) 50px),repeating-linear-gradient(90deg,transparent,transparent 49px,rgba(255,255,255,1) 49px,rgba(255,255,255,1) 50px)" }}
        />
        <Container>
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Pay Bill</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-500/20 text-red-300 border border-red-500/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              Bill Payment
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Pay Your{' '}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Bill Online
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Multiple easy payment options available. Pay anytime, anywhere using your preferred method.
            </p>
          </div>
        </Container>
      </div>

      {/* ── Quick Pay Banner ── */}
      <div className="bg-emerald-600 py-4">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white font-semibold text-sm">
              💡 Fastest way to pay — use the Self Corner portal with card or mobile banking.
            </p>
            <Link to="/self-corner" className="shrink-0 px-5 py-2 rounded-full bg-white text-emerald-700 font-bold text-sm hover:bg-emerald-50 transition-all shadow">
              Go to Self Corner →
            </Link>
          </div>
        </Container>
      </div>

      {/* ── Payment Methods ── */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Payment Options
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Payment Method
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentMethods.map((m) => (
              <div key={m.name} className={`rounded-2xl border ${m.border} ${m.bg} p-6 hover:shadow-lg transition-all group`}>
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${m.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <IconMapper name={m.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{m.name}</h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{m.number}</span>
                  </div>
                </div>
                {/* Steps */}
                <ol className="space-y-2">
                  {m.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <span className={`shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${m.color} text-white text-[10px] font-black flex items-center justify-center mt-0.5`}>
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Contact for Payment Help ── */}
      <div className="py-14 bg-white dark:bg-slate-800/40">
        <Container>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Payment not reflecting?</h3>
                <p className="text-slate-300 text-sm">Contact our billing team 24/7 for payment confirmation issues.</p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="tel:+8809640123123" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg transition-all hover:scale-105">
                  📞 09640-123123
                  <span className="text-emerald-200 text-xs">Billing Help</span>
                </a>
                <a href="https://wa.me/+8801971521964" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20b558] text-white font-semibold text-sm shadow-lg transition-all hover:scale-105">
                  WhatsApp
                </a>
                <a href="mailto:info@reddata.com.bd" className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all">
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ── FAQs ── */}
      <div className="py-14 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Payment <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">FAQs</span>
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-slate-900 dark:text-white text-sm pr-4">{faq.q}</span>
                    <svg className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

    </div>
  )
}
