import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { getText } from '../../data/translations'
import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'
import { servicesData, L } from '../../data/siteData'

export default function Services() {
  const { lang } = useLanguage()
  const localizedItems = servicesData.items.map(item => ({
    ...item,
    title: L(lang, item, 'title'),
    description: L(lang, item, 'description'),
    tag: L(lang, item, 'tag'),
  }))

  const featuredUrls = ['/corporate-internet', '/home-internet']
  const featured = localizedItems.filter(s => featuredUrls.includes(s.internalUrl))
  const rest = localizedItems.filter(s => !featuredUrls.includes(s.internalUrl))

  return (
    <Section id="services" className="bg-white dark:bg-slate-900">
      <Container>
        <SectionHeader
          badge={getText(lang, 'badge.services')}
          heading={getText(lang, 'services.heading')}
          headingAccent={getText(lang, 'services.accent')}
          subheading={getText(lang, 'services.sub')}
        />

        {/* Featured — Corporate Internet + Home Internet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {featured.map((service, i) => (
            <Reveal key={service.id} delay={i * 80}>
              <Link
                to={service.internalUrl}
                className="group relative flex flex-col h-full bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 border border-slate-700 dark:border-white/[0.08] rounded-2xl p-7 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-red-500/5 group-hover:bg-red-500/10 transition-all duration-500" />
                <div className="flex items-start gap-5 flex-1 relative">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-700/60 border border-slate-600/50 flex items-center justify-center text-red-400 group-hover:bg-red-500/20 group-hover:border-red-500/30 group-hover:scale-110 transition-all duration-300">
                    <Icon name={service.icon} className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-white font-bold text-lg group-hover:text-red-300 transition-colors duration-200">{service.title}</h3>
                      <span className="flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-500/15 text-red-400 border border-red-500/25">{service.tag}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                    <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-red-400 group-hover:text-red-300 transition-colors">
                      Explore Plans
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Rest — 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((service, i) => (
            <Reveal key={service.id} delay={(i + 2) * 80} className="h-full">
              <Link
                to={service.internalUrl}
                className="group relative h-full flex flex-col bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/[0.08] rounded-2xl p-5 hover:border-red-500/30 hover:shadow-xl hover:shadow-red-500/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-red-500/15 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300">
                    <Icon name={service.icon} className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-slate-900 dark:text-white font-semibold text-base group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-200">{service.title}</h3>
                      <span className="hidden sm:block flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-500/10 text-red-400 border border-red-500/20">{service.tag}</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1">{service.description}</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Learn More
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
