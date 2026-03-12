import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import PageMeta from '../components/ui/PageMeta'
import { selfCornerData } from '../data/siteData'
import IconMapper from '../components/ui/IconMapper'

const { features } = selfCornerData

export default function SelfCornerPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  const [tab, setTab] = useState('login') // 'login' | 'register'
  const [form, setForm] = useState({ userId: '', password: '', name: '', phone: '', email: '' })

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Online portal coming soon. Please call +880-9640-112233 for account assistance.')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Self Corner" description="Manage your Red Data account, pay bills, view usage, and raise support tickets from our customer self-service portal." />

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
            <span className="text-white font-medium">Self Corner</span>
          </nav>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-500/20 text-red-300 border border-red-500/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              Customer Portal
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Self{' '}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Corner
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Manage your Red Data account, pay bills, track usage, and raise support tickets — all in one place.
            </p>
          </div>
        </Container>
      </div>

      {/* ── Main Content ── */}
      <div className="py-16 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 items-start">

            {/* Left: Login / Register Card */}
            <div className="lg:w-[420px] w-full shrink-0">
              <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700/60 overflow-hidden">
                {/* Tab switcher */}
                <div className="flex border-b border-slate-100 dark:border-slate-700/60">
                  <button
                    onClick={() => setTab('login')}
                    className={`flex-1 py-4 text-sm font-bold transition-all ${tab === 'login' ? 'text-red-600 dark:text-red-400 border-b-2 border-red-600 dark:border-red-400 -mb-px' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setTab('register')}
                    className={`flex-1 py-4 text-sm font-bold transition-all ${tab === 'register' ? 'text-red-600 dark:text-red-400 border-b-2 border-red-600 dark:border-red-400 -mb-px' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                  >
                    Register
                  </button>
                </div>

                <div className="p-7">
                  {tab === 'login' ? (
                    <>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Welcome back</h3>
                      <p className="text-slate-400 text-xs mb-6">Sign in to manage your account</p>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">User ID / Username</label>
                          <input
                            type="text"
                            name="userId"
                            value={form.userId}
                            onChange={handleChange}
                            placeholder="Enter your User ID"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Password</label>
                          <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <label className="flex items-center gap-2 text-slate-500 dark:text-slate-400 cursor-pointer">
                            <input type="checkbox" className="rounded border-slate-300 text-red-600" />
                            Remember me
                          </label>
                          <button type="button" className="text-red-600 dark:text-red-400 hover:underline font-medium">
                            Forgot Password?
                          </button>
                        </div>
                        <button
                          type="submit"
                          className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 active:scale-95 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all"
                        >
                          Sign In to Portal
                        </button>
                      </form>
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Create Account</h3>
                      <p className="text-slate-400 text-xs mb-6">Register to access self-service portal</p>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Full Name</label>
                          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Phone Number</label>
                          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="01XXXXXXXXX" required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Email Address</label>
                          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" />
                        </div>
                        <button type="submit" className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 active:scale-95 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all">
                          Create Account
                        </button>
                      </form>
                    </>
                  )}

                  <div className="mt-5 pt-5 border-t border-slate-100 dark:border-slate-700/60">
                    <p className="text-center text-xs text-slate-400">
                      Need help?{' '}
                      <a href="tel:+8809640112233" className="text-red-600 dark:text-red-400 hover:underline font-medium">
                        Call 09640-112233
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Features */}
            <div className="flex-1">
              <div className="mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  Portal Features
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  Everything you need{' '}
                  <span className="bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">
                    in one place
                  </span>
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
                  Manage your internet subscription without ever needing to call — fully self-service.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((f) => (
                  <div key={f.title} className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 hover:border-red-200 dark:hover:border-red-500/30 hover:shadow-md transition-all group">
                    <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 group-hover:scale-110 transition-transform">
                      <IconMapper name={f.icon} className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{f.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pay Bill shortcut */}
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-500/10 dark:to-teal-500/10 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-emerald-800 dark:text-emerald-300 text-sm mb-0.5">Quick Bill Pay</h4>
                  <p className="text-emerald-700 dark:text-emerald-400 text-xs">Pay your bill instantly without signing in</p>
                </div>
                <Link
                  to="/pay-bill"
                  className="shrink-0 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
                >
                  Pay Bill
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

    </div>
  )
}
