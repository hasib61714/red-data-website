import { Link } from 'react-router-dom'

// items: [{ label: 'Services' }, { label: 'Data Connectivity', current: true }]
// 'Home' is always prepended automatically
export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
      <Link to="/" className="hover:text-white transition-colors">Home</Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <span>/</span>
          {item.to ? (
            <Link to={item.to} className="hover:text-white transition-colors">{item.label}</Link>
          ) : (
            <span className={item.current !== false && i === items.length - 1 ? 'text-white font-medium' : 'text-slate-400'}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
