import { useLanguage } from '../../context/LanguageContext'
import { getText } from '../../data/translations'
import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import { testimonialsData } from '../../data/siteData'

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-slate-300 dark:text-slate-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ name, role, avatar, rating, text }) {
  return (
    <div className="group flex flex-col h-full rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-white/[0.08] p-7 hover:border-red-500/25 dark:hover:bg-slate-800/70 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 relative overflow-hidden">
      {/* Top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Quote mark */}
      <div className="absolute top-5 right-6 text-6xl leading-none text-red-500/10 font-serif select-none pointer-events-none">
        "
      </div>

      {/* Stars */}
      <StarRating rating={rating} />

      {/* Review text */}
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-4 mb-6 flex-1">
        "{text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-5 border-t border-slate-200 dark:border-white/[0.07]">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-lg shadow-red-600/20">
          {avatar}
        </div>
        <div>
          <p className="text-slate-900 dark:text-white font-semibold text-sm">{name}</p>
          <p className="text-slate-400 dark:text-slate-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { lang } = useLanguage()
  const { items } = testimonialsData

  return (
    <Section id="testimonials" className="bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-red-500/4 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-red-700/4 blur-3xl pointer-events-none" />

      <Container className="relative">
        <SectionHeader
          badge={getText(lang, 'badge.testimonials')}
          heading={getText(lang, 'testimonials.heading')}
          headingAccent={getText(lang, 'testimonials.accent')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>

      </Container>
    </Section>
  )
}
