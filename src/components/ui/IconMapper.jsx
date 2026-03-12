import {
  Building2, Home, Link2, Phone, MessageSquare, Globe, Shield,
  Zap, Rocket, Lock, DollarSign, TrendingUp, Headphones,
  ClipboardList, Wrench, Info, Mail, MapPin, Monitor,
  Play, Smartphone, Tv, Cloud, BarChart2, Users, Star,
  Clock, Cpu, Sparkles, Network, Infinity,
} from 'lucide-react'

const ICON_MAP = {
  Building2, Home, Link2, Phone, MessageSquare, Globe, Shield,
  Zap, Rocket, Lock, DollarSign, TrendingUp, Headphones,
  ClipboardList, Wrench, Info, Mail, MapPin, Monitor,
  Play, Smartphone, Tv, Cloud, BarChart2, Users, Star,
  Clock, Cpu, Sparkles, Network, Infinity,
}

export default function IconMapper({ name, className = 'w-5 h-5' }) {
  const Icon = ICON_MAP[name]
  if (!Icon) return null
  return <Icon className={className} />
}
