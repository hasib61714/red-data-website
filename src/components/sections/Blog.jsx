import { useLanguage } from '../../context/LanguageContext'
import { getText } from '../../data/translations'
import { Link } from 'react-router-dom'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'
import { blogPostsData } from '../../data/siteData'

function PostCard({ id, date, tag, tagColor, title, excerpt, readTime, image, author }) {
  const { lang } = useLanguage()
  return (
    <Link
      to={`/blog/${id}`}
      className="group flex flex-col rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/[0.08] overflow-hidden hover:border-red-500/25 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-slate-700/80 to-slate-800 overflow-hidden flex-shrink-0">
        {image ? (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <svg className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Tag badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm ${tagColor || 'bg-red-600/90 text-white'}`}>
            {tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-slate-500 text-xs">{date}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
          <span className="text-slate-500 text-xs">{readTime}</span>
        </div>
        <h3 className="text-slate-900 dark:text-white font-bold text-base leading-snug mb-3 group-hover:text-red-400 transition-colors duration-200 line-clamp-2">
          {title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1 line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
          {author && (
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0">
                {author.charAt(0)}
              </div>
              <span className="text-slate-500 dark:text-slate-400 text-xs">{author}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 text-red-500 dark:text-red-400 text-sm font-semibold ml-auto">
            {getText(lang, 'blog.readMore')}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function Blog() {
  const { lang } = useLanguage()
  return (
    <Section id="blog" className="bg-slate-50 dark:bg-slate-900">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 mb-14">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400" />
              {getText(lang, 'badge.blog')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              {getText(lang, 'blog.heading')}{' '}
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                {getText(lang, 'blog.accent')}
              </span>
            </h2>
          </div>
          <Link
            to="/blog"
            className="flex-shrink-0 flex items-center gap-1.5 text-sm font-semibold text-red-400 hover:text-red-300 transition-colors"
          >
            {getText(lang, 'blog.viewAll')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPostsData.map((post, i) => (
            <Reveal key={post.id} delay={i * 100}>
              <PostCard {...post} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
