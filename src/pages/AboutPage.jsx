import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import PageMeta from '../components/ui/PageMeta'

const clients = [
  { name: 'UCB',                   img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F1UCB.png&w=640&q=75' },
  { name: 'City Bank',             img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F2CityBank.png&w=640&q=75' },
  { name: 'Prime Bank',            img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F3PrimeBank.png&w=640&q=75' },
  { name: 'DBBL',                  img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F4DBBL.png&w=640&q=75' },
  { name: 'Mercantile Bank',       img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F5Mercantilebank.png&w=640&q=75' },
  { name: 'Shahjalal Islami Bank', img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F6ShahjalalIslamiBank.png&w=640&q=75' },
  { name: 'Shimanto Bank',         img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F7ShimantoBank.png&w=640&q=75' },
  { name: 'Citizens Bank',         img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F8CitizensBank.png&w=640&q=75' },
  { name: 'Upay',                  img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F9Upay.png&w=640&q=75' },
  { name: 'Genex',                 img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F10Genex.png&w=640&q=75' },
  { name: 'Digicon',               img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F11Digicon.png&w=640&q=75' },
  { name: 'Urmi',                  img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2Furmi.png&w=640&q=75' },
  { name: 'Bitopi Group',          img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F13BitopiGroup.png&w=640&q=75' },
  { name: 'SSD Tech',              img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F14SSDTech.png&w=640&q=75' },
  { name: 'Nextnet',               img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F15Nextnet.png&w=640&q=75' },
  { name: 'CloudWell',             img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F16CloudWell.png&w=640&q=75' },
  { name: 'EB Solution',           img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F17EBSolution.png&w=640&q=75' },
  { name: 'SARBS Communication',   img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F18SARBSCommunication.png&w=640&q=75' },
  { name: 'NRDS',                  img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F19NRDS.png&w=640&q=75' },
  { name: 'Wintel Limited',        img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F20WintelLimited.png&w=640&q=75' },
  { name: 'Bangladesh Apparel',    img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2F21BangladeshApparel.png&w=640&q=75' },
  { name: 'AyAl',                  img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2FAyAl.png&w=640&q=75' },
  { name: 'AyAl Tech',             img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2FAyAlTech.png&w=640&q=75' },
  { name: 'BIIN',                  img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2FBIIN.png&w=640&q=75' },
  { name: 'SMART',                 img: 'https://reddata.com.bd/_next/image?url=%2Fimages%2Fclients%2FSMART.png&w=640&q=75' },
]

const services = [
  { icon: '🌐', label: 'Internet & Data Connectivity' },
  { icon: '📞', label: 'IP Telephony Service' },
  { icon: '💬', label: 'SMS Service' },
  { icon: '☁️', label: 'Cloud & Email Solution' },
  { icon: '💻', label: 'Website & Software Development' },
  { icon: '🔧', label: 'Network Hardware' },
  { icon: '🛡️', label: 'Managed Services' },
]

const stats = [
  { num: '2012',   label: 'Founded' },
  { num: '12+',    label: 'Years of Experience' },
  { num: '10,000+',label: 'Happy Clients' },
  { num: '99.9%',  label: 'Uptime SLA' },
]

export default function AboutPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="About Us" description="Red Data Limited — BTRC licensed ISP founded in 2012. Serving 10,000+ clients with fiber internet, data connectivity, and IT solutions across Bangladesh." />

      {/* ── Hero ── */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 pt-36 pb-16 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-64 rounded-full bg-rose-700/10 blur-3xl pointer-events-none" />
        <Container>
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">About Us</span>
          </nav>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-500/20 text-red-300 border border-red-500/30 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                About Us
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                Red Data{' '}
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  (Pvt.) Limited
                </span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Beginning our journey in the year 2012, Red Data (Pvt.) Limited is a leading IT solution provider which specializes in providing Internet and Data Connectivity, IP Telephony Service, SMS Service, Cloud and Email Service Solution, Website and Software Development, Network Hardware and Managed Services.
              </p>
            </div>
            {/* Right: stats */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-white/[0.10] transition-colors">
                  <div className="text-3xl font-black text-white mb-1">{s.num}</div>
                  <div className="text-slate-400 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ── Our Story ── */}
      <div className="py-20 bg-white dark:bg-slate-900">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-auto lg:h-96">
                <img
                  src="https://reddata.com.bd/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.4a9b9721.jpeg&w=3840&q=75"
                  alt="Red Data office"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.parentElement.className = 'relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 h-80 lg:h-96 flex items-center justify-center'
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = '<span class="text-6xl">🏢</span>'
                  }}
                />
                {/* Badge */}
                <div className="absolute bottom-4 left-4 bg-red-600 text-white rounded-xl px-4 py-2 shadow-xl text-sm font-bold">
                  12+ Year Experience
                </div>
              </div>
            </div>
            {/* Text */}
            <div className="lg:w-1/2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Our Story
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-5">
                Empowering Bangladesh's{' '}
                <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                <p>
                  With a robust network infrastructure and strategic partnerships, Red Data ensures seamless connectivity and exceptional performance. Leveraging state-of-the-art technologies, Red Data delivers high-speed internet access, enabling individuals and businesses to stay connected, collaborate, and thrive in today's digital landscape.
                </p>
                <p>
                  Committed to customer satisfaction and industry-leading service quality, Red Data (Pvt.) Limited continuously invests in infrastructure development, network expansion, and talent acquisition. With a dedicated team of professionals, Red Data strives to exceed customer expectations and drive the digital transformation of Bangladesh.
                </p>
                <p>
                  As the digital landscape evolves, Red Data (Pvt.) Limited remains steadfast in its mission to empower connectivity, enabling individuals, businesses, and communities to embrace the endless possibilities of the digital world.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/corporate-internet" className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-sm shadow-lg shadow-red-600/30 transition-all hover:scale-105">
                  Our Services
                </Link>
                <a href="/#contact" className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:border-red-300 dark:hover:border-red-500/50 transition-all">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Services ── */}
      <div className="py-16 bg-slate-50 dark:bg-slate-800/40">
        <Container>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              What We Offer
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Our{' '}
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 text-center hover:border-red-200 dark:hover:border-red-500/30 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Company Info ── */}
      <div className="py-16 bg-white dark:bg-slate-900">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Head Office */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50">
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-xl mb-4">📍</div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Head Office</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Level 19, SimpleTree Attalika,<br />
                134 Gulshan Avenue,<br />
                Dhaka-1212, Bangladesh
              </p>
            </div>
            {/* Registered Address */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50">
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-xl mb-4">🏢</div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Registered Address</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                House 5/A, Road 2, Lane 3,<br />
                Block G, Halishahar,<br />
                Chittagong, Bangladesh
              </p>
            </div>
            {/* Contact */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50">
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-xl mb-4">📞</div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Contact</h4>
              <div className="space-y-1.5 text-sm">
                <a href="tel:+8809640112233" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  📞 09640-112233
                </a>
                <a href="mailto:info@reddata.com.bd" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  ✉️ info@reddata.com.bd
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Clients ── */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Our Clients
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Some of Our{' '}
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Valuable Clients
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {clients.map((c) => (
              <div key={c.name} className="flex items-center justify-center p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 hover:border-red-200 dark:hover:border-red-500/30 hover:shadow-md transition-all group">
                <img
                  src={c.img}
                  alt={c.name}
                  className="h-9 w-auto object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `<span class="text-xs text-slate-400 font-medium text-center leading-tight">${c.name}</span>`
                  }}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── CTA ── */}
      <div className="py-14 bg-gradient-to-r from-red-600 to-rose-700">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Partner with Red Data today</h3>
              <p className="text-red-100 text-sm mt-1">Join 10,000+ satisfied customers across Bangladesh.</p>
            </div>
            <div className="flex gap-3">
              <a href="/#contact" className="px-6 py-3 rounded-full bg-white text-red-600 font-bold text-sm hover:bg-red-50 transition-all shadow">
                Get in Touch
              </a>
              <Link to="/" className="px-6 py-3 rounded-full border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-all">
                ← Back Home
              </Link>
            </div>
          </div>
        </Container>
      </div>

    </div>
  )
}
