import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../../context/LanguageContext'
import IconMapper from './IconMapper'

const allServices = [
  { label: 'Corporate Internet', label_bn: 'কর্পোরেট ইন্টারনেট', to: '/corporate-internet', icon: 'Building2',      color: 'from-red-500 to-rose-600' },
  { label: 'Home Internet',      label_bn: 'হোম ইন্টারনেট',      to: '/home-internet',      icon: 'Home',          color: 'from-rose-500 to-pink-600' },
  { label: 'Data Connectivity',  label_bn: 'ডেটা কানেক্টিভিটি',  to: '/data-connectivity',  icon: 'Network',       color: 'from-sky-500 to-blue-600' },
  { label: 'IP Telephony',       label_bn: 'আইপি টেলিফোনি',       to: '/ip-telephony',       icon: 'Phone',         color: 'from-violet-500 to-purple-600' },
  { label: 'SMS Service',        label_bn: 'এসএমএস সেবা',        to: '/sms-service',        icon: 'MessageSquare', color: 'from-orange-500 to-amber-600' },
  { label: 'Domain & Hosting',   label_bn: 'ডোমেইন ও হোস্টিং',   to: '/domain-hosting',     icon: 'Globe',         color: 'from-teal-500 to-cyan-600' },
  { label: 'Managed Services',   label_bn: 'ম্যানেজড সেবা',      to: '/managed-services',   icon: 'Shield',        color: 'from-blue-500 to-indigo-600' },
]

export default function ExploreServices() {
  const { pathname } = useLocation()
  const { lang } = useLang()
  const others = allServices.filter(s => s.to !== pathname).slice(0, 6)

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 dark:text-white mb-10">
          {lang === 'bn' ? 'আরও ' : 'Explore More '}<span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">{lang === 'bn' ? 'সেবাসমূহ' : 'Services'}</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {others.map(service => (
            <Link
              key={service.to}
              to={service.to}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200`}>
                <IconMapper name={service.icon} className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-center text-slate-700 dark:text-slate-300 leading-tight">
                {lang === 'bn' ? service.label_bn : service.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
