import { useLanguage } from '../../context/LanguageContext'
import { getText } from '../../data/translations'
import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'

// Bangladesh outline — proper boundary approximation
// ViewBox: 0 0 500 600 | toX: lng→x, toY: lat→y (inverted)
const BD_PATH =
  'M 27,24 L 35,7 L 55,14 L 90,29 L 133,27 L 160,40 L 196,43 L 214,32 ' +
  'L 245,32 L 275,15 L 310,26 L 349,10 L 364,18 L 383,70 L 402,150 ' +
  'L 441,178 L 459,231 L 478,285 L 462,350 L 456,382 L 420,435 ' +
  'L 430,484 L 452,535 L 444,576 L 400,598 L 296,595 L 257,553 ' +
  'L 202,550 L 143,500 L 118,500 L 110,435 L 100,370 L 61,324 ' +
  'L 31,280 L 25,245 L 22,183 L 25,140 Z'

// Service location dots: [lng, lat, label, size]
const SERVICE_DOTS = [
  [90.41, 23.81, 'Dhaka',       'lg'],
  [91.83, 22.33, 'Chittagong',  'md'],
  [91.87, 24.90, 'Sylhet',      'sm'],
  [88.60, 24.37, 'Rajshahi',    'sm'],
  [89.55, 22.80, 'Khulna',      'sm'],
  [90.35, 22.70, 'Barishal',    'sm'],
  [90.40, 24.75, 'Mymensingh',  'sm'],
  [89.27, 25.74, 'Rangpur',     'sm'],
  [91.18, 23.46, 'Comilla',     'sm'],
  [90.50, 23.62, 'Narayanganj', 'sm'],
]

// Convert lat/lng to SVG coordinates (viewBox 0 0 500 600)
const toX = (lng) => ((lng - 87.8) / 5.1) * 500
const toY = (lat) => ((26.8 - lat) / 6.3) * 600

const DOT_SIZE = { lg: 14, md: 10, sm: 7 }

const districts = [
  'Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna',
  'Barishal', 'Mymensingh', 'Rangpur', 'Comilla', 'Narayanganj',
  'Gazipur', 'Narsingdi', 'Cumilla', 'Cox\'s Bazar', 'Noakhali',
  'Brahmanbaria', 'Feni', 'Chandpur', 'Lakshmipur', 'Habiganj',
]

export default function Coverage() {
  const { lang } = useLanguage()
  const statLabels = getText(lang, 'stats')

  const coverageStats = [
    { value: '64',    label: statLabels[0] },
    { value: '495',   label: statLabels[1] },
    { value: '4,500+', label: statLabels[2] },
    { value: '99.9%', label: statLabels[3] },
  ]

  return (
    <Section id="coverage" className="bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-radial from-red-600/6 to-transparent pointer-events-none" />

      <Container className="relative">
        <SectionHeader
          badge={getText(lang, 'badge.coverage')}
          heading={getText(lang, 'coverage.heading')}
          headingAccent={getText(lang, 'coverage.accent')}
          subheading={getText(lang, 'coverage.sub')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Bangladesh SVG Map */}
          <Reveal direction="left">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-2xl shadow-black/20 dark:shadow-black/40 aspect-[4/3] flex items-center justify-center">
              <div className="absolute inset-0 bg-grid opacity-20" />

              {/* SVG Map */}
              <svg
                viewBox="0 0 500 600"
                className="absolute inset-0 w-full h-full p-6"
                style={{ filter: 'drop-shadow(0 0 20px rgba(239,68,68,0.15))' }}
              >
                {/* Bangladesh outline */}
                <path
                  d={BD_PATH}
                  fill="rgba(239,68,68,0.08)"
                  stroke="rgba(239,68,68,0.4)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />

                {/* Service location dots */}
                {SERVICE_DOTS.map(([lng, lat, label, size]) => {
                  const x = toX(lng)
                  const y = toY(lat)
                  const r = DOT_SIZE[size]
                  return (
                    <g key={label}>
                      {/* Pulse ring */}
                      <circle cx={x} cy={y} r={r * 2} fill="rgba(239,68,68,0.15)">
                        <animate attributeName="r" values={`${r};${r * 2.5};${r}`} dur="2.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite" />
                      </circle>
                      {/* Dot */}
                      <circle cx={x} cy={y} r={r / 2} fill="#ef4444" />
                      {/* Label (only for larger dots) */}
                      {size !== 'sm' && (
                        <text x={x + r + 4} y={y + 4} fill="rgba(255,255,255,0.7)" fontSize="11" fontWeight="600" fontFamily="sans-serif">
                          {label}
                        </text>
                      )}
                    </g>
                  )
                })}
              </svg>

              {/* Coverage badge */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-red-500/30 backdrop-blur-sm z-10">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white text-xs font-semibold">{getText(lang, 'coverage.badge')}</span>
              </div>
            </div>
          </Reveal>

          {/* Right — Stats + District Tags */}
          <Reveal direction="right" delay={150}>
            <div>
              {/* Coverage stat cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {coverageStats.map((s) => (
                  <div key={s.label} className="rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/[0.08] p-5 text-center hover:border-red-500/20 transition-colors duration-300">
                    <p className="text-3xl font-black bg-gradient-to-r from-red-400 to-amber-300 bg-clip-text text-transparent mb-1">{s.value}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* District tags */}
              <div className="mb-8">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-4">{getText(lang, 'coverage.majorAreas')}</p>
                <div className="flex flex-wrap gap-2">
                  {districts.map((d) => (
                    <span
                      key={d}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-white/[0.07] text-slate-600 dark:text-slate-300 text-xs font-medium hover:border-red-500/30 hover:text-red-600 dark:hover:text-white transition-all duration-200 cursor-default"
                    >
                      {d}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium">
                    +44 more →
                  </span>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white font-semibold text-sm hover:from-red-500 hover:via-red-400 hover:to-orange-400 shadow-lg shadow-orange-500/20 transition-all duration-300 active:scale-95"
              >
                {getText(lang, 'coverage.checkAvailability')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
