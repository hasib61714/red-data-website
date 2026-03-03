import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import ExploreServices from '../components/ui/ExploreServices'
import PageMeta from '../components/ui/PageMeta'

const posts = [
  {
    id: 1,
    date: 'June 2024',
    category: 'Company News',
    title: 'বাংলাদেশে রেড ডাটা এর সেরা ইন্টারনেট এবং আইটি সেবা',
    excerpt:
      'রেড ডাটা লিমিটেড বাংলাদেশের সেরা ইন্টারনেট সেবা প্রদানকারী কোম্পানিগুলির মধ্যে একটি হিসেবে নিজেকে প্রতিষ্ঠিত করেছে। আমাদের হাই-স্পিড ফাইবার নেটওয়ার্ক এবং প্রিমিয়াম কানেক্টিভিটি সমাধান সম্পর্কে জানুন।',
    author: 'Rajaul Hira',
    readTime: '5 min read',
    image: 'https://reddata.com.bd/_next/static/media/banner2.3d4b4f1c.jpg',
    href: 'https://reddata.com.bd/blogs/1',
    tag: 'Featured',
    tagColor: 'bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-300',
  },
  {
    id: 2,
    date: 'May 2024',
    category: 'Business',
    title: 'The Benefits of Corporate Internet Services for Businesses in Bangladesh',
    excerpt:
      'Discover how dedicated corporate internet services with SLA-backed uptime can transform business productivity, enable remote work, and support digital transformation goals for Bangladeshi companies.',
    author: 'Red Data Team',
    readTime: '6 min read',
    image: 'https://reddata.com.bd/_next/static/media/blog_two.fd98c990.jpg',
    href: 'https://reddata.com.bd/blogs/2',
    tag: 'Business',
    tagColor: 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300',
  },
  {
    id: 3,
    date: 'April 2024',
    category: 'Home Internet',
    title: 'How to Choose the Best Home Internet Provider in Bangladesh',
    excerpt:
      'With multiple ISPs competing for your attention, choosing the right home internet provider can be overwhelming. This guide covers speeds, reliability, pricing, and customer support — what really matters.',
    author: 'Red Data Team',
    readTime: '7 min read',
    image: 'https://reddata.com.bd/_next/static/media/blog.be34b0fd.jpg',
    href: 'https://reddata.com.bd/blogs/3',
    tag: 'Tips',
    tagColor: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-300',
  },
]

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
          <a href={featured.href} target="_blank" rel="noreferrer" className="group block">
            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700/50 overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative overflow-hidden h-56 sm:h-72 lg:h-auto">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
          </a>
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
              <a key={post.id} href={post.href} target="_blank" rel="noreferrer" className="group block bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
              </a>
            ))}
          </div>

          {/* External blog link */}
          <div className="mt-10 text-center">
            <a href="https://reddata.com.bd/blogs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-red-600 text-red-600 dark:text-red-400 dark:border-red-500 font-bold text-sm hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-all">
              View All Posts on reddata.com.bd →
            </a>
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
