/**
 * Central icon component — maps string keys to lucide-react icons.
 * Usage: <Icon name="building" className="w-5 h-5" />
 * All icon references in data files use string keys — never direct emoji or imports.
 */
import {
  Building2, Wifi, Network, Phone, MessageSquare, Globe, Shield,
  Zap, Plug, Lock, DollarSign, TrendingUp, Headphones, Cloud, Code2,
  Wrench, MapPin, Mail, Info, Layers, Home, Star, Clock, Play,
  Smartphone, Tv, Cpu, RefreshCw, Link2, BarChart3, Users, Check,
  ArrowRight, CheckCircle2,
} from 'lucide-react'

const ICONS = {
  // ── Services / Navigation ─────────────────────────────────
  building:    Building2,
  wifi:        Wifi,
  network:     Network,
  phone:       Phone,
  message:     MessageSquare,
  globe:       Globe,
  shield:      Shield,
  // ── WhyUs / Feature items ─────────────────────────────────
  zap:         Zap,
  bolt:        Zap,         // alias
  plug:        Plug,
  lock:        Lock,
  dollar:      DollarSign,
  trending:    TrendingUp,
  headphones:  Headphones,
  // ── About / Misc ──────────────────────────────────────────
  cloud:       Cloud,
  code:        Code2,
  wrench:      Wrench,
  mapPin:      MapPin,
  mail:        Mail,
  info:        Info,
  layers:      Layers,
  home:        Home,
  // ── Service Modal highlights ───────────────────────────────
  star:        Star,
  clock:       Clock,
  play:        Play,
  device:      Smartphone,
  tv:          Tv,
  cpu:         Cpu,
  chip:        Cpu,         // alias
  infinite:    RefreshCw,
  link:        Link2,
  chart:       BarChart3,
  users:       Users,
  check:       Check,
  checkCircle: CheckCircle2,
  arrow:       ArrowRight,
}

export default function Icon({ name, className = 'w-5 h-5', strokeWidth = 1.8 }) {
  const Comp = ICONS[name]
  if (!Comp) return null
  return <Comp className={className} strokeWidth={strokeWidth} />
}
