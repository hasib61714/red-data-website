import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'
import { blogPostsData } from '../data/siteData'

const posts = blogPostsData

export default function BlogPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  const [featured, ...rest] = posts

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <PageMeta title="Blog" description="Company news, technology insights, and helpful guides from the Red Data team in Bangladesh." />

      {/* ── Hero ── */}
      <div className="bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 pt-36 pb-14 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-rose-600/10 blur-3xl pointer-events-none" />
        <Container>
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Blog</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-500/20 text-red-300 border border-red-500/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              News & Insights
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Red Data{' '}
              <span className="bg-gradient-to-r from-red-400 via-rose-400 to-orange-300 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Company news, technology insights, and helpful guides from the Red Data team.
            </p>
          </div>
        </Container>
      </div>

      {/* ── Featured Post ── */}
      <div className="py-14 bg-slate-50 dark:bg-slate-900">
        <Container>
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400">Featured Post</span>
          </div>
          <Link to={`/blog/${featured.id}`} className="group block">
            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700/50 overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative overflow-hidden h-56 sm:h-72 lg:h-auto">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    onError={e => { e.target.style.display = 'none'; e.target.parentNode.classList.add('bg-gradient-to-br', 'from-red-600', 'to-rose-700') }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${featured.tagColor}`}>{featured.tag}</span>
                    <span className="text-xs text-slate-400">{featured.date}</span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-xs text-slate-400">{featured.readTime}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-4 leading-snug group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center text-xs font-bold">
                      {featured.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{featured.author}</p>
                      <p className="text-xs text-slate-400">{featured.category}</p>
                    </div>
                    <span className="ml-auto text-red-600 dark:text-red-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Container>
      </div>

      {/* ── Other Posts ── */}
      <div className="py-8 pb-16 bg-white dark:bg-slate-900">
        <Container>
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">More Articles</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rest.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group block bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    onError={e => { e.target.style.display = 'none'; e.target.parentNode.classList.add('bg-gradient-to-br', 'from-slate-600', 'to-slate-700') }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${post.tagColor}`}>{post.tag}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3 text-xs text-slate-400">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 leading-snug group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center text-[10px] font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{post.author}</span>
                    </div>
                    <span className="text-red-600 dark:text-red-400 text-xs font-semibold">Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </Container>
      </div>

      {/* ── Newsletter‑style CTA ── */}
      <div className="py-12 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Stay Updated</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Get the latest news and articles from Red Data directly in your inbox.</p>
            <a href="mailto:info@reddata.com.bd?subject=Newsletter Subscription" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm shadow-lg transition-all hover:scale-105">
              ✉️ Subscribe via Email
            </a>
          </div>
        </Container>
      </div>

      <ExploreServices />

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
