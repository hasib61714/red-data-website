import Button from '../ui/Button'
import Icon from '../ui/Icon'

export default function PricingCard({ name, tag, price, vatBreakdown, period, oneTime, bandwidth, popular, features, cta }) {
  return (
    <div className="relative flex flex-col items-center justify-between rounded-2xl border border-red-400 bg-white shadow-lg min-h-[540px] max-w-[370px] mx-auto w-full p-8" style={{ boxSizing: 'border-box' }}>
      {/* Badge */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-28 flex justify-center">
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow bg-white border border-red-400 text-red-600">{tag || (popular ? 'Most Popular' : '')}</span>
      </div>
      {/* Plan name */}
      <h3 className="mt-8 mb-4 text-xl font-extrabold text-center text-slate-900">{name}</h3>
      {/* Price */}
      <div className="mb-2 text-center">
        <span className="text-4xl font-black text-red-600">{price}</span>
        <span className="text-slate-400 text-base ml-1">{period}</span>
      </div>
      {/* One-time cost */}
      <div className="mb-4 text-center text-sm text-slate-500">{oneTime}</div>
      {/* Divider */}
      <hr className="w-full border-t border-red-200 my-4" />
      {/* Features */}
      <ul className="w-full flex-1 flex flex-col justify-start gap-4 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
            <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      {/* CTA */}
      <Button
        variant="primary"
        href="#contact"
        className="block w-full mt-auto text-center py-3 rounded-xl font-semibold text-base bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 text-white shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95"
      >
        {cta || 'Choose Package →'}
      </Button>
    </div>
  )
}
