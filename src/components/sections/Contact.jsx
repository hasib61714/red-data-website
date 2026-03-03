import { useLanguage } from '../../context/LanguageContext'
import { getText } from '../../data/translations'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { footerData } from '../../data/siteData'
import { useState } from 'react'

const contactMethods = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Hotline',
    value: '+880-9640-112233',
    href: 'tel:+8809640112233',
    note: '24 / 7 Support',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m-7.5 3h15A2.25 2.25 0 0021 15.75V8.25A2.25 2.25 0 0018.75 6H5.25A2.25 2.25 0 003 8.25v7.5A2.25 2.25 0 005.25 18z" />
      </svg>
    ),
    label: 'Help Desk',
    value: '+880-9640-123123',
    href: 'tel:+8809640123123',
    note: 'Billing & Technical',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'info@reddata.com.bd',
    href: 'mailto:info@reddata.com.bd',
    note: 'Reply within 2 hours',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.66 1.438 5.168L2 22l4.944-1.417A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 10 2zm0 18a7.952 7.952 0 01-4.073-1.116l-.292-.174-3.035.87.846-3.134-.191-.303A7.954 7.954 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+880 1971-521964',
    href: 'https://wa.me/+8801971521964',
    note: 'Quick chat support',
    external: true,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.145 2 11.243c0 3.027 1.504 5.73 3.855 7.481V22l3.51-1.93c.937.26 1.928.4 2.635.4 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.064 12.44l-2.573-2.75-5.018 2.75 5.52-5.875 2.634 2.75 4.957-2.75-5.52 5.875z" />
      </svg>
    ),
    label: 'Messenger',
    value: 'Message Red Data',
    href: 'https://www.facebook.com/profile.php?id=61556093758540',
    note: 'Fast response via FB',
    external: true,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Office',
    value: 'Level 19, SimpleTree Attalika',
    href: 'https://maps.google.com/?q=134+Gulshan+Avenue+Dhaka',
    note: '134 Gulshan Ave, Dhaka-1212',
    external: true,
  },
]

// ─── Replace YOUR_FORM_ID with your Formspree form ID ──────────────────────
// 1. Go to https://formspree.io → Sign up free
// 2. Create a new form → copy the form ID (e.g. xpwzabcd)
// 3. Paste it below replacing YOUR_FORM_ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function Contact() {
  const { lang } = useLanguage()
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSent(true)
      } else {
        const data = await res.json()
        setError(data?.errors?.[0]?.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Section id="contact" className="bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-radial from-red-600/8 to-transparent pointer-events-none" />

      <Container className="relative">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            {getText(lang, 'badge.contact')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            {getText(lang, 'contact.heading')}{' '}
            <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              {getText(lang, 'contact.accent')}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            {getText(lang, 'contact.sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — Contact Methods */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactMethods.map((m, i) => (
              <Reveal key={m.label} delay={i * 80}>
                <a
                  href={m.href}
                  target={m.external ? '_blank' : undefined}
                  rel={m.external ? 'noreferrer' : undefined}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/[0.08] hover:border-red-500/25 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300">
                    {m.icon}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-0.5">{m.label}</p>
                    <p className="text-slate-800 dark:text-white font-semibold text-sm group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-200">{m.value}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{m.note}</p>
                  </div>
                </a>
              </Reveal>
            ))}

            {/* Support Hours */}
            <div className="p-5 rounded-2xl bg-red-50 dark:bg-red-500/5 border border-red-100 dark:border-red-500/15">
              <p className="text-red-400 font-semibold text-sm mb-2">{getText(lang, 'contact.supportHours')}</p>
              <div className="space-y-1.5 text-sm text-slate-400">
                <div className="flex justify-between"><span>{getText(lang, 'contact.technical')}</span><span className="text-slate-900 dark:text-white font-medium">24 / 7</span></div>
                <div className="flex justify-between"><span>{getText(lang, 'contact.sales')}</span><span className="text-slate-900 dark:text-white font-medium">Sat–Thu, 9am–7pm</span></div>
                <div className="flex justify-between"><span>{getText(lang, 'contact.billing')}</span><span className="text-slate-900 dark:text-white font-medium">Sat–Thu, 10am–6pm</span></div>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-white/[0.08] p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-5">
                    <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">{getText(lang, 'contact.successTitle')}</h3>
                  <p className="text-slate-400 text-sm max-w-xs">{getText(lang, 'contact.successSub')}</p>
                  <button
                    onClick={() => { setSent(false); setError(''); setForm({ name: '', company: '', phone: '', email: '', message: '' }) }}
                    className="mt-6 text-red-400 text-sm hover:text-red-300 transition-colors font-medium"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400 text-xs font-medium tracking-wide">{getText(lang, 'contact.formName')} <span className="text-red-500 dark:text-red-400">*</span></span>
                      <input
                        type="text" name="name" value={form.name} onChange={handleChange} required
                        placeholder="e.g. Rahul Ahmed"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-200"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400 text-xs font-medium tracking-wide">{getText(lang, 'contact.formCompany')}</span>
                      <input
                        type="text" name="company" value={form.company} onChange={handleChange}
                        placeholder="e.g. Gulshan, Dhaka"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-200"
                      />
                    </label>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400 text-xs font-medium tracking-wide">{getText(lang, 'contact.formPhone')} <span className="text-red-500 dark:text-red-400">*</span></span>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange} required
                        placeholder="+880 1700-000000"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-200"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400 text-xs font-medium tracking-wide">{getText(lang, 'contact.formEmail')}</span>
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-200"
                      />
                    </label>
                  </div>
                  <label className="flex flex-col gap-1.5">
                      <span className="text-slate-500 dark:text-slate-400 text-xs font-medium tracking-wide">{getText(lang, 'contact.formMessage')} <span className="text-red-500 dark:text-red-400">*</span></span>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Tell us about your location, connection type (home/business), preferred speed plan…"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-200 resize-none"
                    />
                  </label>
                  {error && (
                    <p className="text-red-400 text-xs text-center bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white font-semibold text-sm hover:from-red-500 hover:via-red-400 hover:to-orange-400 shadow-lg shadow-orange-500/20 transition-all duration-300 active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
                  >
                    {submitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        {getText(lang, 'contact.sending')}
                      </>
                    ) : (
                      <>
                        {getText(lang, 'contact.formSubmit')}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-slate-600 text-xs text-center">We never share your details. By submitting you agree to our Privacy Policy.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
