import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { getText } from '../../data/translations'
import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import ServiceCard from '../shared/ServiceCard'
import ServiceModal from '../shared/ServiceModal'
import Reveal from '../ui/Reveal'
import { servicesData, L } from '../../data/siteData'

export default function Services() {
  const { lang } = useLanguage()
  const [active, setActive] = useState(null)
  const localizedItems = servicesData.items.map(item => ({
    ...item,
    title: L(lang, item, 'title'),
    description: L(lang, item, 'description'),
    tag: L(lang, item, 'tag'),
  }))

  return (
    <>
      <Section id="services" className="bg-white dark:bg-slate-900">
        <Container>
          <SectionHeader
            badge={getText(lang, 'badge.services')}
            heading={getText(lang, 'services.heading')}
            headingAccent={getText(lang, 'services.accent')}
            subheading={getText(lang, 'services.sub')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {localizedItems.map((service, i) => (
              <Reveal key={service.title} delay={i * 80} className="h-full">
                <ServiceCard {...service} onClick={() => setActive(service)} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {active && (
        <ServiceModal service={active} onClose={() => setActive(null)} />
      )}
    </>
  )
}
