import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/layout/Navbar'
import PageMeta from './components/ui/PageMeta'
import Footer from './components/layout/Footer'
import FloatingButtons from './components/layout/FloatingButtons'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Stats from './components/sections/Stats'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Coverage from './components/sections/Coverage'
import HowItWorks from './components/sections/HowItWorks'
import Pricing from './components/sections/Pricing'
import Testimonials from './components/sections/Testimonials'
import Blog from './components/sections/Blog'
import FAQ from './components/sections/FAQ'
import CTA from './components/sections/CTA'
import Contact from './components/sections/Contact'
const HomeInternetPage      = lazy(() => import('./pages/HomeInternetPage'))
const CorporateInternetPage = lazy(() => import('./pages/CorporateInternetPage'))
const AboutPage             = lazy(() => import('./pages/AboutPage'))
const SelfCornerPage        = lazy(() => import('./pages/SelfCornerPage'))
const PayBillPage           = lazy(() => import('./pages/PayBillPage'))
const ContactPage           = lazy(() => import('./pages/ContactPage'))
const DataConnectivityPage  = lazy(() => import('./pages/DataConnectivityPage'))
const IpTelephonyPage       = lazy(() => import('./pages/IpTelephonyPage'))
const SmsServicePage        = lazy(() => import('./pages/SmsServicePage'))
const DomainHostingPage     = lazy(() => import('./pages/DomainHostingPage'))
const ManagedServicesPage   = lazy(() => import('./pages/ManagedServicesPage'))
const BlogPage              = lazy(() => import('./pages/BlogPage'))
const BlogDetailPage        = lazy(() => import('./pages/BlogDetailPage'))
const PrivacyPolicyPage     = lazy(() => import('./pages/PrivacyPolicyPage'))
const TermsPage             = lazy(() => import('./pages/TermsPage'))
const NotFoundPage          = lazy(() => import('./pages/NotFoundPage'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-4 border-slate-200 dark:border-slate-700 border-t-red-500 animate-spin" />
        <p className="text-sm text-slate-400 dark:text-slate-500 font-medium">Loading…</p>
      </div>
    </div>
  )
}

// Scrolls to hash anchors (e.g. /#pricing, /#coverage) after navigation
function HashScrollHandler() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    // Small delay to allow page sections to render
    const id = setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) {
        const offset = 80 // navbar height
        const top = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, 100)
    return () => clearTimeout(id)
  }, [pathname, hash])
  return null
}

function HomePage() {
  return (
    <main>
      <PageMeta
        title="High-Speed Fiber Internet in Bangladesh"
        description="Red Data Limited — BTRC licensed ISP. High-speed fiber broadband, corporate internet, data connectivity, IP telephony & managed IT services across Bangladesh."
      />
      <Hero />
      <Pricing />
      <Services />
      <Stats />
      <WhyChooseUs />
      <Coverage />
      <HowItWorks />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA />
      <Contact />
    </main>
  )
}

function AppInner() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 overflow-x-hidden">
      <HashScrollHandler />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home-internet" element={<HomeInternetPage />} />
        <Route path="/corporate-internet" element={<CorporateInternetPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/self-corner" element={<SelfCornerPage />} />
        <Route path="/pay-bill" element={<PayBillPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/data-connectivity" element={<DataConnectivityPage />} />
        <Route path="/ip-telephony" element={<IpTelephonyPage />} />
        <Route path="/sms-service" element={<SmsServicePage />} />
        <Route path="/domain-hosting" element={<DomainHostingPage />} />
        <Route path="/managed-services" element={<ManagedServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <AppInner />
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

