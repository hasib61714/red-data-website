import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon'

const allServices = [
  { label: 'Corporate Internet', to: '/corporate-internet', icon: 'building', color: 'from-red-500 to-rose-600' },
  { label: 'Home Internet',      to: '/home-internet',      icon: 'wifi',     color: 'from-rose-500 to-pink-600' },
  { label: 'Data Connectivity',  to: '/data-connectivity',  icon: 'network',  color: 'from-sky-500 to-blue-600' },
  { label: 'IP Telephony',       to: '/ip-telephony',       icon: 'phone',    color: 'from-violet-500 to-purple-600' },
  { label: 'SMS Service',        to: '/sms-service',        icon: 'message',  color: 'from-orange-500 to-amber-600' },
  { label: 'Domain & Hosting',   to: '/domain-hosting',     icon: 'globe',    color: 'from-teal-500 to-cyan-600' },
  { label: 'Managed Services',   to: '/managed-services',   icon: 'shield',   color: 'from-blue-500 to-indigo-600' },
]

export default function ExploreServices() {
  const { pathname } = useLocation()
  const others = allServices.filter(s => s.to !== pathname).slice(0, 6)

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 dark:text-white mb-10">
          Explore More <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Services</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {others.map(service => (
            <Link
              key={service.to}
              to={service.to}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200`}>
                <Icon name={service.icon} className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-center text-slate-700 dark:text-slate-300 leading-tight">
                {service.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
