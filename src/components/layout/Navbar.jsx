import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from '../ui/Container'
import { useTheme } from '../../context/ThemeContext'
import { useLang } from '../../context/LanguageContext'
import { getText } from '../../data/translations'

// ─── Service dropdown items ───────────────────────────────────────────────────
const serviceItems = [
  { label: 'Corporate Internet', to: '/corporate-internet',  icon: '🏢', desc: 'Dedicated enterprise bandwidth' },
  { label: 'Home Internet',      to: '/home-internet',       icon: '🏠', desc: 'High-speed residential plans' },
  { label: 'Data Connectivity',  to: '/data-connectivity',   icon: '🔗', desc: 'Fiber-backed inter-office links' },
  { label: 'IP Telephony',       to: '/ip-telephony',        icon: '📞', desc: 'VoIP & cloud PBX solutions' },
  { label: 'SMS Service',        to: '/sms-service',         icon: '💬', desc: 'Bulk messaging & OTP gateway' },
  { label: 'Domain & Hosting',   to: '/domain-hosting',      icon: '🌐', desc: 'Domains, NVMe hosting & SSL' },
  { label: 'Managed Services',   to: '/managed-services',    icon: '🛡️', desc: '24/7 IT infrastructure management' },
]

function SunIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 110 10A5 5 0 0112 7z" />
    </svg>
  )
}
function MoonIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}

export default function Navbar({ topBarVisible = false }) {
  const { dark, toggle: toggleTheme } = useTheme()
  const { lang, toggle: toggleLang } = useLang()
  const T = (path) => getText(lang, path)

  const [menuOpen,           setMenuOpen]           = useState(false)
  const [servicesOpen,       setServicesOpen]       = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled,           setScrolled]           = useState(false)
  const dropdownRef = useRef(null)

  const location = useLocation()
  const pathname = location.pathname
  const isServiceActive = () => serviceItems.some(item => pathname === item.to)
  const mobileLinkCls = (active = false) =>
    `flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
      active
        ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10'
        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.07]'
    }`

  // Auto-close menus on navigation
  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  // Navbar elevated shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close services dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const linkCls = (active = false) =>
    `relative px-2.5 py-1.5 rounded-lg text-[11.5px] font-medium transition-all duration-200 whitespace-nowrap ${
      active
        ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10'
        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.07]'
    }`

  return (
    <header
      style={{ top: topBarVisible ? '32px' : '0' }}
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/98 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/40'
          : 'bg-white dark:bg-slate-900'
      }`}
    >

      {/* ── Dark Secondary Strip ────────────────────────────────────── */}
      <div className="bg-slate-900 dark:bg-black border-b border-white/[0.06]">
        <Container>
          <div className="flex items-center justify-between h-9">

            {/* Left — contact info */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+8809640112233"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white text-[11px] transition-colors duration-200"
              >
                <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="hidden sm:inline">+880-9640-112233</span>
                <span className="sm:hidden">Hotline</span>
              </a>
              <span className="hidden md:block w-px h-3 bg-white/20" />
              <a
                href="mailto:info@reddata.com.bd"
                className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-white text-[11px] transition-colors duration-200"
              >
                <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@reddata.com.bd
              </a>
              <span className="hidden lg:block w-px h-3 bg-white/20" />
              <span className="hidden lg:flex items-center gap-1.5 text-slate-500 text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                BTRC Licensed ISP
              </span>
            </div>

            {/* Right — social links */}
            <div className="flex items-center gap-1">
              <a
                href="https://www.facebook.com/profile.php?id=61556093758540"
                target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/red-data"
                target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/+8801971521964"
                target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@reddata"
                target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

          </div>
        </Container>
      </div>

      {/* ── Main Nav Row ─────────────────────────────────────────────── */}
      <div className={`border-b border-slate-200 dark:border-white/[0.08] ${scrolled ? 'border-slate-200/80 dark:border-white/10' : ''}`}>
      <Container>
        <div className="flex items-center justify-between h-14 gap-2">

          {/* ── Logo ────────────────────────────────────────────────────── */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img
              src="/logo.png"
              alt="Red Data"
              className="h-9 w-auto object-contain transition-all duration-300
                         dark:[filter:invert(1)_hue-rotate(180deg)]"
            />
          </Link>

          {/* ── Desktop Nav ──────────────────────────────────────────────── */}
          <nav className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">

            {/* Home */}
            <Link to="/" className={`${linkCls(pathname === '/')} flex items-center gap-1`}>
              <svg className="w-3 h-3 opacity-60" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h3a1 1 0 001-1v-3h2v3a1 1 0 001 1h3a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
              {T('nav.home')}
            </Link>

            {/* Corporate Internet */}
            <Link to="/corporate-internet" className={linkCls(pathname === '/corporate-internet')}>
              {T('nav.corporateInternet')}
            </Link>

            {/* Home Internet */}
            <Link to="/home-internet" className={linkCls(pathname === '/home-internet')}>
              {T('nav.homeInternet')}
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(v => !v)}
                className={`${linkCls(isServiceActive() || servicesOpen)} flex items-center gap-1`}
              >
                {T('nav.services')}
                <svg className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-[500px] rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.09] shadow-2xl shadow-black/10 dark:shadow-black/60 overflow-hidden z-50">
                  <div className="h-0.5 w-full bg-gradient-to-r from-red-500 via-orange-400 to-amber-300" />
                  <div className="p-3">
                    <p className="px-3 pt-1.5 pb-2 text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em]">Our Services</p>
                    <div className="grid grid-cols-2 gap-0.5">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          onClick={() => setServicesOpen(false)}
                          className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors duration-150 ${
                            pathname === item.to
                              ? 'bg-red-50 dark:bg-red-500/10'
                              : 'hover:bg-slate-50 dark:hover:bg-white/[0.05]'
                          }`}
                        >
                          <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/[0.07] flex items-center justify-center text-sm group-hover:bg-red-50 dark:group-hover:bg-red-500/15 group-hover:border-red-200 dark:group-hover:border-red-500/20 transition-all duration-150">
                            {item.icon}
                          </span>
                          <div className="min-w-0">
                            <p className={`text-xs font-semibold leading-snug ${
                              pathname === item.to
                                ? 'text-red-600 dark:text-red-400'
                                : 'text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white'
                            }`}>{item.label}</p>
                            <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-snug mt-0.5">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 mx-1 pt-2 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-[10px] text-slate-400 dark:text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                        BTRC Licensed ISP
                      </span>
                      <a href="#services" onClick={() => setServicesOpen(false)} className="text-[11px] font-semibold text-red-600 dark:text-red-400 hover:text-red-500 flex items-center gap-1 transition-colors">
                        View all services →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Pay Bill — emerald accent */}
            <Link
              to="/pay-bill"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11.5px] font-semibold whitespace-nowrap
                         text-emerald-700 dark:text-emerald-400
                         bg-emerald-50 dark:bg-emerald-500/10
                         border border-emerald-200 dark:border-emerald-500/25
                         hover:bg-emerald-100 dark:hover:bg-emerald-500/20
                         hover:border-emerald-300 dark:hover:border-emerald-500/40
                         transition-all duration-200"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
              {T('nav.payBill')}
            </Link>

            {/* About Us */}
            <Link to="/about-us" className={linkCls(pathname === '/about-us')}>
              {T('nav.aboutUs')}
            </Link>

            {/* Contact Us */}
            <Link to="/contact" className={linkCls(pathname === '/contact')}>
              {T('nav.contactUs')}
            </Link>

            {/* Self Corner — indigo accent */}
            <Link
              to="/self-corner"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11.5px] font-semibold whitespace-nowrap
                         text-indigo-700 dark:text-indigo-300
                         bg-indigo-50 dark:bg-indigo-500/10
                         border border-indigo-200 dark:border-indigo-500/25
                         hover:bg-indigo-100 dark:hover:bg-indigo-500/20
                         transition-all duration-200"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              {T('nav.selfCorner')}
            </Link>
          </nav>

          {/* ── Desktop Right Controls ───────────────────────────────────── */}
          <div className="hidden xl:flex items-center gap-1.5 flex-shrink-0">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-bold border transition-all duration-200
                         border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300
                         hover:border-red-300 dark:hover:border-red-500/40 hover:text-red-600 dark:hover:text-red-400"
              title="Switch language"
            >
              <span>{lang === 'en' ? '🇧🇩' : '🇬🇧'}</span>
              <span>{lang === 'en' ? 'বাং' : 'EN'}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-lg border
                         border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300
                         hover:border-red-300 dark:hover:border-red-500/40 hover:text-red-600 dark:hover:text-red-400
                         transition-all duration-200"
              aria-label="Toggle theme"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>

            <a
              href="#pricing"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-[11.5px] font-bold
                         bg-gradient-to-r from-red-600 to-red-700 text-white
                         hover:from-red-500 hover:to-red-600
                         shadow-md shadow-red-600/20 hover:shadow-red-600/35
                         transition-all duration-200 active:scale-95"
            >
              {T('nav.getStarted')}
            </a>
          </div>

          {/* ── Mobile Right Controls ────────────────────────────────────── */}
          <div className="xl:hidden flex items-center gap-1.5">
            <button
              onClick={toggleLang}
              className="px-2 py-1.5 rounded-lg text-[10px] font-bold border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300"
            >
              {lang === 'en' ? 'বাং' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-5 bg-slate-700 dark:bg-white rounded transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 w-5 bg-slate-700 dark:bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-slate-700 dark:bg-white rounded transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ──────────────────────────────────────────────────── */}
        <div className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[860px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
          <div className="h-px bg-slate-100 dark:bg-white/[0.07] mb-2" />
          <nav className="flex flex-col gap-0.5">

            <Link to="/" onClick={() => setMenuOpen(false)}
              className={mobileLinkCls(pathname === '/')}>
              <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-red-500 flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h3a1 1 0 001-1v-3h2v3a1 1 0 001 1h3a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>
              </span>
              {T('nav.home')}
            </Link>

            <Link to="/corporate-internet" onClick={() => setMenuOpen(false)}
              className={mobileLinkCls(pathname === '/corporate-internet')}>
              <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-base flex-shrink-0">🏢</span>
              {T('nav.corporateInternet')}
            </Link>

            <Link to="/home-internet" onClick={() => setMenuOpen(false)}
              className={mobileLinkCls(pathname === '/home-internet')}>
              <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-base flex-shrink-0">🏠</span>
              {T('nav.homeInternet')}
            </Link>

            {/* Services accordion */}
            <div>
              <button onClick={() => setMobileServicesOpen(v => !v)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isServiceActive()
                    ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.07]'
                }`}>
                <span className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-base flex-shrink-0">⚡</span>
                  {T('nav.services')}
                </span>
                <svg className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="ml-4 mt-1 pl-3 border-l border-slate-200 dark:border-white/[0.08] flex flex-col gap-0.5 pb-1">
                  {serviceItems.map(item => (
                    <Link key={item.label} to={item.to}
                      onClick={() => { setMobileServicesOpen(false); setMenuOpen(false) }}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                        pathname === item.to
                          ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10 font-medium'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06]'
                      }`}>
                      <span className="text-base flex-shrink-0">{item.icon}</span>
                      <div>
                        <p className="font-medium text-xs leading-snug">{item.label}</p>
                        <p className="text-[10px] text-slate-400 leading-snug">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/pay-bill" onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 transition-colors">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>
              </span>
              {T('nav.payBill')}
            </Link>

            <Link to="/about-us" onClick={() => setMenuOpen(false)}
              className={mobileLinkCls(pathname === '/about-us')}>
              <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-base flex-shrink-0">ℹ️</span>
              {T('nav.aboutUs')}
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}
              className={mobileLinkCls(pathname === '/contact')}>
              <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-base flex-shrink-0">📩</span>
              {T('nav.contactUs')}
            </Link>

            <Link to="/self-corner" onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 transition-colors">
              <span className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
              </span>
              {T('nav.selfCorner')}
            </Link>
          </nav>

          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/[0.07]">
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/20 transition-all duration-200"
            >
              {T('nav.getStarted')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
        </div>
      </Container>
      </div>
    </header>
  )
}

