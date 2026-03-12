import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import PageMeta from '../components/ui/PageMeta'
import { contactPageData } from '../data/siteData'
import IconMapper from '../components/ui/IconMapper'

const contactMethods = contactPageData.methods

export default function ContactPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch('https://formsubmit.co/ajax/info@reddata.com.bd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `[Red Data Website] ${form.subject}`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
          _template: 'table',
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setSubmitted(true)
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setError('Failed to send. Please try again or email us directly.')
      }
    } catch {
      setError('Network error. Please try again or email us directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Contact Us" description="Get in touch with Red Data — Bangladesh's leading ISP — via phone, WhatsApp, email, or our online contact form." />

      {/* ── Hero ── */}
      <div className="bg-gradient-to-br from-red-950 via-slate-900 to-slate-900 pt-36 pb-14 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-red-700/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-rose-600/10 blur-3xl pointer-events-none" />
        <Container>
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Contact Us</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-500/20 text-red-300 border border-red-500/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              We&rsquo;d Love to{' '}
              <span className="bg-gradient-to-r from-red-400 via-rose-400 to-orange-300 bg-clip-text text-transparent">
                Hear from You
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Reach out anytime — our team is available 24/7 to assist you with support, sales, or any queries.
            </p>
          </div>
        </Container>
      </div>

      {/* ── Main ── */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* ── Contact Form ── */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700/50 p-8 lg:p-10">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Send a Message
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-3xl mx-auto mb-4">✅</div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-all">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text" required
                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                      <input
                        type="tel" required
                        value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="01XXXXXXXXX"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email" required
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Subject <span className="text-red-500">*</span></label>
                    <input
                      type="text" required
                      value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                      placeholder="How can we help?"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Message <span className="text-red-500">*</span></label>
                    <textarea
                      required rows={5}
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all resize-none"
                    />
                  </div>
                  <button type="submit" disabled={sending} className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold shadow-lg hover:shadow-red-500/25 transition-all transform hover:scale-[1.01] disabled:scale-100 text-sm flex items-center justify-center gap-2">
                    {sending ? (
                      <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Sending…</>
                    ) : 'Send Message →'}
                  </button>
                  {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
                </form>
              )}
            </div>

            {/* ── Contact Methods + Address ── */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {contactMethods.map((m) => (
                    <a key={m.label} href={m.href} target={m.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-2xl border ${m.border} ${m.bg} hover:shadow-md transition-all group`}
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} text-white flex items-center justify-center shadow group-hover:scale-110 transition-transform`}>
                        <IconMapper name={m.icon} className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{m.label}</p>
                        <p className="font-semibold text-slate-900 dark:text-white text-sm truncate">{m.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700/50 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center text-xl shadow shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Office Address</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Level 19, SimpleTree Attalika<br />
                      134 Gulshan Avenue<br />
                      Dhaka 1212, Bangladesh
                    </p>
                    <a
                      href="https://maps.google.com/?q=SimpleTree+Attalika+134+Gulshan+Avenue+Dhaka"
                      target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-red-600 dark:text-red-400 hover:underline text-sm font-medium"
                    >
                      View on Map →
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <span>🕐</span> Support Hours
                </h3>
                <div className="space-y-2">
                  {[
                    { day: 'Technical Support', time: '24 / 7✓', highlight: true },
                    { day: 'Sales & Billing', time: 'Sun – Thu: 9 AM – 6 PM', highlight: false },
                    { day: 'WhatsApp Chat', time: '24 / 7', highlight: true },
                  ].map((row) => (
                    <div key={row.day} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                      <span className="text-slate-300 text-sm">{row.day}</span>
                      <span className={`text-sm font-semibold ${row.highlight ? 'text-emerald-400' : 'text-slate-200'}`}>{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Back ── */}
      <div className="py-8 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <Container>
          <div className="flex justify-center">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 text-sm font-medium transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Home
            </Link>
          </div>
        </Container>
      </div>
    </div>
  )
}
