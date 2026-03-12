// ─── Localization helper ─────────────────────────────────────────────────────
// Usage: L(lang, obj, 'key') → returns obj.key_bn if lang==='bn' and exists, else obj.key
export function L(lang, obj, key) {
  const bnKey = key + '_bn'
  if (lang === 'bn' && obj[bnKey] !== undefined) return obj[bnKey]
  return obj[key]
}

// ─── Navigation ─────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '#' },
  {
    label: 'Services',
    href: '#services',
    dropdown: [
      { label: 'Corporate Internet', href: 'https://reddata.com.bd/corporate-internet', icon: 'Building2', desc: 'Dedicated enterprise bandwidth' },
      { label: 'Home Internet', href: 'https://reddata.com.bd/home-internet', icon: 'Home', desc: 'High-speed residential plans' },
      { label: 'Data Connectivity', href: 'https://reddata.com.bd/data-connectivity', icon: 'Link2', desc: 'Fiber-backed inter-office links' },
      { label: 'IP Telephony', href: 'https://reddata.com.bd/ip-telephony', icon: 'Phone', desc: 'VoIP & cloud PBX solutions' },
      { label: 'SMS Service', href: 'https://reddata.com.bd/sms-service', icon: 'MessageSquare', desc: 'Bulk messaging & OTP gateway' },
      { label: 'Domain & Hosting', href: 'https://reddata.com.bd/domain-hosting', icon: 'Globe', desc: 'Domains, NVMe hosting & SSL' },
      { label: 'Managed Services', href: 'https://reddata.com.bd/managed-service', icon: 'Shield', desc: '24/7 IT infrastructure management' },
    ],
  },
  { label: 'Why Us', href: '#why-us' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

// ─── Navbar service dropdown items (router Links) ────────────────────────────
export const navServiceItems = [
  { label: 'Corporate Internet', to: '/corporate-internet', icon: 'Building2', desc: 'Dedicated enterprise bandwidth' },
  { label: 'Home Internet',      to: '/home-internet',      icon: 'Home',      desc: 'High-speed residential plans' },
  { label: 'Data Connectivity',  to: '/data-connectivity',  icon: 'Link2',     desc: 'Fiber-backed inter-office links' },
  { label: 'IP Telephony',       to: '/ip-telephony',       icon: 'Phone',     desc: 'VoIP & cloud PBX solutions' },
  { label: 'SMS Service',        to: '/sms-service',        icon: 'MessageSquare', desc: 'Bulk messaging & OTP gateway' },
  { label: 'Domain & Hosting',   to: '/domain-hosting',     icon: 'Globe',     desc: 'Domains, NVMe hosting & SSL' },
  { label: 'Managed Services',   to: '/managed-services',   icon: 'Shield',    desc: '24/7 IT infrastructure management' },
]

// ─── Contact Bar (top dark strip) ────────────────────────────────────────────
export const contactBarData = {
  phone: { display: '+880-9640-112233', raw: '+8809640112233' },
  email: 'info@reddata.com.bd',
  socials: [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61556093758540',
      path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/red-data',
      path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/+8801971521964',
      path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@reddata',
      path: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    },
  ],
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export const heroData = {
  cta1: { label: 'Explore Plans', href: '#pricing' },
  cta2: { label: 'Get Connected', href: '#contact' },
  stats: [
    { value: '10K+', label: 'Happy Customers' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '64', label: 'Districts Covered' },
  ],
}

// ─── Hero Slides ─────────────────────────────────────────────────────────────
export const heroSlides = [
  {
    id: 1,
    image: '/images/hero/hero1-internet.jpg',
    badge: 'BTRC Licensed ISP — Bangladesh',
    badge_bn: 'BTRC লাইসেন্সপ্রাপ্ত ISP — বাংলাদেশ',
    headline: 'Reliable & High-Speed',
    headline_bn: 'নির্ভরযোগ্য ও দ্রুততম',
    headlineAccent: 'Internet Under One Roof',
    headlineAccent_bn: 'ইন্টারনেট একটি ছাদের নিচে',
    subheadline: 'Ultra-fast broadband built for homes and enterprises across Bangladesh. Zero downtime. Unlimited speed. Total control.',
    subheadline_bn: 'বাংলাদেশজুড়ে ঘর ও ব্যবসার জন্য তৈরি আলট্রা-ফাস্ট ব্রডব্যান্ড। জিরো ডাউনটাইম। আনলিমিটেড স্পিড।',
  },
  {
    id: 2,
    image: '/images/hero/hero2-corporate.jpg',
    badge: 'Enterprise Grade Connectivity',
    badge_bn: 'এন্টারপ্রাইজ গ্রেড কানেক্টিভিটি',
    headline: 'Power Your Business',
    headline_bn: 'আপনার ব্যবসাকে শক্তিশালী করুন',
    headlineAccent: 'With Dedicated Bandwidth',
    headlineAccent_bn: 'ডেডিকেটেড ব্যান্ডউইথ দিয়ে',
    subheadline: 'SLA-backed corporate internet with redundant fiber links. Keep every office, server, and team running at full capacity.',
    subheadline_bn: 'SLA-সমর্থিত কর্পোরেট ইন্টারনেট রিডান্ড্যান্ট ফাইবার লিংকসহ। প্রতিটি অফিস, সার্ভার ও দলকে পূর্ণ গতিতে রাখুন।',
  },
  {
    id: 3,
    image: '/images/hero/hero3-home.jpg',
    badge: 'Home Internet Plans',
    badge_bn: 'হোম ইন্টারনেট প্ল্যান',
    headline: 'Stream, Game & Browse',
    headline_bn: 'স্ট্রিম, গেম ও ব্রাউজ করুন',
    headlineAccent: 'Without Interruption',
    headlineAccent_bn: 'কোনো বাধা ছাড়াই',
    subheadline: 'High-speed home internet designed for modern families. Buffer-free YouTube, lag-free gaming, and unlimited devices — all in one plan.',
    subheadline_bn: 'আধুনিক পরিবারের জন্য হাই-স্পিড হোম ইন্টারনেট। বাফার-মুক্ত YouTube, ল্যাগ-মুক্ত গেমিং, সীমাহীন ডিভাইস।',
  },
  {
    id: 4,
    image: '/images/hero/hero4-city.jpg',
    badge: 'Nationwide Coverage',
    badge_bn: 'সারাদেশে কভারেজ',
    headline: 'Connected Across',
    headline_bn: 'সংযুক্ত সারা',
    headlineAccent: 'All 64 Districts',
    headlineAccent_bn: '৬৪ জেলায়',
    subheadline: "From Dhaka to Chittagong and beyond — Red Data's fiber backbone covers the entire country with consistent high-speed service.",
    subheadline_bn: 'ঢাকা থেকে চট্টগ্রাম এবং আরও দূরে — রেড ডাটার ফাইবার ব্যাকবোন সারাদেশে একই গতিতে সেবা দেয়।',
  },
]

// ─── How It Works ────────────────────────────────────────────────────────────
export const howItWorksData = {
  sectionBadge: 'Getting Started',
  heading: 'Connected in',
  headingAccent: '4 Simple Steps',
  subheading: 'From sign-up to full-speed internet — our process is fast, transparent, and hassle-free.',
  steps: [
    {
      number: '01',
      icon: 'ClipboardList',
      title: 'Choose Your Plan',
      title_bn: 'প্ল্যান বেছে নিন',
      description:
        'Browse our home or corporate internet packages and pick the one that fits your speed needs and budget. All plans are BTRC approved.',
      description_bn:
        'আমাদের হোম বা কর্পোরেট ইন্টারনেট প্যাকেজ দেখুন এবং আপনার প্রয়োজন ও বাজেট অনুযায়ী বেছে নিন। সকল প্ল্যান BTRC অনুমোদিত।',
    },
    {
      number: '02',
      icon: 'Phone',
      title: 'Contact & Confirm',
      title_bn: 'যোগাযোগ করুন ও নিশ্চিত করুন',
      description:
        'Call our helpline, WhatsApp us, or fill the online form. Our team will confirm coverage in your area within minutes.',
      description_bn:
        'আমাদের হেল্পলাইনে কল করুন, WhatsApp করুন বা অনলাইন ফর্ম পূরণ করুন। আমাদের দল কয়েক মিনিটের মধ্যে এলাকায় কভারেজ নিশ্চিত করবে।',
    },
    {
      number: '03',
      icon: 'Wrench',
      title: 'Free Installation',
      title_bn: 'বিনামূল্যে ইনস্টলেশন',
      description:
        'Our certified engineers visit your location and complete the full setup — router, cabling, and configuration — at zero charge.',
      description_bn:
        'আমাদের সার্টিফাইড ইঞ্জিনিয়াররা আপনার ঠিকানায় এসে রাউটার, ক্যাবলিং ও কনফিগারেশনসহ সম্পূর্ণ সেটআপ বিনামূল্যে সম্পন্ন করবেন।',
    },
    {
      number: '04',
      icon: 'Rocket',
      title: 'Go Live & Enjoy',
      title_bn: 'লাইভ হন ও উপভোগ করুন',
      description:
        'Your connection goes live within 24 hours. Access the Self Care portal to monitor usage, pay bills, and manage your account anytime.',
      description_bn:
        'আপনার সংযোগ ২৪ ঘণ্টার মধ্যে লাইভ হবে। Self Care পোর্টালে ব্যবহার মনিটর করুন, বিল পরিশোধ করুন ও যেকোনো সময় অ্যাকাউন্ট পরিচালনা করুন।',
    },
  ],
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonialsData = {
  sectionBadge: 'Customer Reviews',
  heading: 'Trusted by Thousands',
  headingAccent: 'Across Bangladesh',
  items: [
    {
      name: 'Rafiqul Islam',
      role: 'Business Owner, Dhaka',
      avatar: 'RI',
      rating: 5,
      text: 'Red Data transformed our office connectivity. We went from constant dropouts to zero downtime. The corporate plan with dedicated bandwidth is worth every taka. Installation was done in a single day.',
    },
    {
      name: 'Nusrat Jahan',
      role: 'Home User, Chittagong',
      avatar: 'NJ',
      rating: 5,
      text: 'I stream 4K content on multiple devices simultaneously with absolutely no buffering. The customer support team is incredibly responsive — they resolved a minor issue within 20 minutes via WhatsApp.',
    },
    {
      name: 'Tanvir Ahmed',
      role: 'IT Manager, Sylhet',
      avatar: 'TA',
      rating: 5,
      text: 'Best ISP we have used in Sylhet. Consistent 50 Mbps speeds throughout the day, even during peak hours. The managed service package saved us from hiring a full-time network engineer.',
    },
    {
      name: 'Sumaiya Khanam',
      role: 'Remote Worker, Rajshahi',
      avatar: 'SK',
      rating: 5,
      text: 'Working from home was a nightmare before Red Data. Now I have rock-solid video calls and fast uploads. The pricing is the most competitive I found in the entire Rajshahi division.',
    },
    {
      name: 'Mizanur Rahman',
      role: 'Cafe Owner, Comilla',
      avatar: 'MR',
      rating: 5,
      text: 'Running a gaming café requires absolutely reliable internet. Red Data delivers 40 Mbps consistently across 15+ devices simultaneously. My customers are extremely happy.',
    },
    {
      name: 'Farida Begum',
      role: 'School Principal, Mymensingh',
      avatar: 'FB',
      rating: 5,
      text: 'We now run online classes for 300+ students without a single connection issue. Red Data\'s education pricing and reliable uptime has been a game changer for our institution.',
    },
  ],
}
export const servicesData = {
  sectionBadge: 'What We Offer',
  heading: 'A Complete Suite of',
  headingAccent: 'Connectivity Services',
  subheading:
    'From enterprise-grade connectivity to smart home internet — Red Data delivers every solution your business and life demands.',
  items: [
    {
      icon: 'Building2',
      to: '/corporate-internet',
      title: 'Corporate Internet',
      title_bn: 'কর্পোরেট ইন্টারনেট',
      description:
        'Enterprise-grade dedicated bandwidth with SLA guarantees. Keep your business operations running at full speed with redundant high-capacity connections.',
      description_bn:
        'SLA গ্যারান্টি সহ এন্টারপ্রাইজ-গ্রেড ডেডিকেটেড ব্যান্ডউইথ। রিডান্ড্যান্ট হাই-ক্যাপাসিটি সংযোগে ব্যবসায়িক কার্যক্রম দ্রুতগতিতে চলুন।',
      tag: 'Enterprise',
      tag_bn: 'এন্টারপ্রাইজ',
      ctaUrl: 'https://reddata.com.bd/corporate-internet',
      image: 'https://reddata.com.bd/_next/static/media/corporate.fe6da3f2.svg',
      intro:
        'At Red Data, we understand that a reliable and high-speed internet connection is critical for the success of your business. Our Corporate Internet Connectivity service offers robust, secure, and scalable internet solutions tailored to meet the unique demands of your enterprise. With dedicated bandwidth, 24/7 customer support, and guaranteed uptime, we ensure your business operations run smoothly and efficiently.',
      highlights: [
        { icon: 'bolt', text: 'Blazing Fast Speeds' },
        { icon: 'shield', text: 'Dedicated & Secure Bandwidth' },
        { icon: 'infinite', text: 'Unlimited Bandwidth' },
        { icon: 'chip', text: 'Future-Proof Fiber Technology' },
        { icon: 'star', text: 'Superior Quality & Low Latency' },
        { icon: 'clock', text: '24/7 Enterprise Support' },
      ],
      features: [
        'Dedicated leased-line with guaranteed SLA',
        'Redundant fiber backbone across Bangladesh',
        'BGP routing with multiple upstream carriers',
        'Real-time NOC monitoring & proactive alerts',
        'Free integration & on-site technical support',
        'Scalable bandwidth — upgrade any time',
      ],
    },
    {
      icon: 'Home',
      to: '/home-internet',
      title: 'Home Internet',
      title_bn: 'হোম ইন্টারনেট',
      description:
        'Enjoy uninterrupted streaming, gaming, and browsing. Our high-speed home plans are engineered for modern families who demand performance.',
      description_bn:
        'নিরবচ্ছিন্ন স্ট্রিমিং, গেমিং ও ব্রাউজিং দরুন। আমাদের হাই-স্পিড হোম প্ল্যান আধুনিক পরিবারের জন্য তৈরি।',
      tag: 'Residential',
      tag_bn: 'রেসিডেন্শিয়াল',
      ctaUrl: 'https://reddata.com.bd/home-internet',
      image: 'https://reddata.com.bd/_next/static/media/wair.f49f3212.svg',
      intro:
        'Red Data Home Internet delivers ultra-fast fiber broadband engineered for modern households. From buffer-free 4K streaming and lag-free gaming to seamless video calls and smart-home devices — all on one blisteringly fast connection.',
      highlights: [
        { icon: 'play', text: 'Buffer-less YouTube & Streaming' },
        { icon: 'device', text: 'Unlimited Connected Devices' },
        { icon: 'phone', text: 'Free TalkTime Minutes Included' },
        { icon: 'tv', text: 'OTT Subscription on Higher Plans' },
        { icon: 'wrench', text: 'Free Installation' },
        { icon: 'clock', text: '24/7 Customer Care' },
      ],
      features: [
        'Plans from 15 Mbps up to 100 Mbps',
        'Symmetric upload & download speeds',
        'One-time setup cost from ৳500 only',
        'Free talk-time with every plan',
        'OTT platform access on Crimson & above',
        'No data caps — truly unlimited usage',
      ],
      packages: [
        { name: 'Rose', speed: '15 Mbps', price: '৳525/mo' },
        { name: 'Cherry', speed: '20 Mbps', price: '৳630/mo' },
        { name: 'Raspberry', speed: '30 Mbps', price: '৳735/mo' },
        { name: 'Maroon', speed: '40 Mbps', price: '৳840/mo' },
        { name: 'Scarlet', speed: '50 Mbps', price: '৳1,050/mo' },
        { name: 'Carmine', speed: '100 Mbps', price: '৳2,520/mo' },
      ],
    },
    {
      icon: 'Link2',
      to: '/data-connectivity',
      title: 'Data Connectivity',
      title_bn: 'ডেটা কানেক্টিভিটি',
      description:
        'Seamless data transfer and secure inter-office communication. Our fiber-backed data links ensure zero packet loss at every endpoint.',
      description_bn:
        'নিরবচ্ছিন্ন ডেটা ট্রান্সফার ও সুরক্ষিত অফিসের মধ্যে যোগাযোগ। আমাদের ফাইবার-সমর্থিত লিংকে শূন্য প্যাকেট লস নিশ্চিত।',
      tag: 'Infrastructure',
      tag_bn: 'ইনফ্রাস্ট্রাকচার',
      ctaUrl: 'https://reddata.com.bd/contact',
      intro:
        `Red Data's Data Connectivity solutions interconnect your offices, data centres, and remote sites with secure, high-throughput fiber links. Backed by a nationwide fiber backbone, our point-to-point and MPLS services deliver carrier-grade reliability with full SLA commitments.`,
      highlights: [
        { icon: 'bolt', text: 'Gigabit-Speed Fiber Links' },
        { icon: 'shield', text: 'Encrypted & Private Circuits' },
        { icon: 'infinite', text: 'Zero Packet Loss Guarantee' },
        { icon: 'chart', text: 'Real-Time Traffic Analytics' },
        { icon: 'wrench', text: 'Dedicated Account Manager' },
        { icon: 'clock', text: 'SLA-Backed 99.9% Uptime' },
      ],
      features: [
        'Point-to-point & MPLS VPN circuits',
        'Layer 2 / Layer 3 switching options',
        'SDH / OTN transport available',
        'Nationwide coverage across all 64 districts',
        'Rapid provisioning within 5 business days',
        'Fully managed or self-managed options',
      ],
    },
    {
      icon: 'Phone',
      to: '/ip-telephony',
      title: 'IP Telephony',
      title_bn: 'আইপি টেলিফোনি',
      description:
        'Crystal-clear VoIP solutions that cut communication costs while boosting call quality. Modernise your business phone system today.',
      description_bn:
        'স্পষ্ট ভয়েস কোয়ালিটি সহ VoIP সমাধান যোগাযোগ খরচ কমায়। আজই আপনার ব্যবসায়িক ফোন সিস্টেম আধুনিক করুন।',
      tag: 'Voice',
      tag_bn: 'ভয়েস',
      ctaUrl: 'https://reddata.com.bd/ip-telephony',
      intro:
        `Elevate your business communications with Red Data's IP Telephony Service. Enjoy superior voice quality, seamless integration, cost-effective calling plans, and a wide range of advanced features such as voicemail, call forwarding, and conferencing. Designed for businesses of all sizes.`,
      highlights: [
        { icon: 'phone', text: 'Hosted & On-Premise IPPBX' },
        { icon: 'cloud', text: 'Cloud PBX Service' },
        { icon: 'users', text: 'Call Centre Solution' },
        { icon: 'chart', text: 'Dynamic IVR & Auto-Dialing' },
        { icon: 'link', text: 'CRM Integration' },
        { icon: 'bolt', text: 'Toll-Free & SIP Trunk' },
      ],
      features: [
        'Hosted & On-Premise IPPBX deployment',
        'Cloud PBX with soft-phone apps',
        'Dynamic IVR & auto-attendant',
        'Short code parking & hunting groups',
        'Analog PBX integration',
        'Call forwarding, voicemail & conferencing',
        'CRM & helpdesk integration',
        'Toll-free service & SIP trunk',
      ],
    },
    {
      icon: 'MessageSquare',
      to: '/sms-service',
      title: 'SMS Service',
      title_bn: 'SMS সার্ভিস',
      description:
        'Bulk messaging, transactional alerts, and marketing campaigns — all from a single, intuitive platform with real-time delivery reports.',
      description_bn:
        'বাল্ক মেসেজিং, থানঘতমূলক অ্যালার্ট ও মার্কেটিং ক্যাম্পেইন — রিয়েল-টাইম ডিলিভারি রিপোর্টসহ একটি প্ল্যাটফর্মে।',
      tag: 'Messaging',
      tag_bn: 'মেসেজিং',
      ctaUrl: 'https://reddata.com.bd/contact',
      intro:
        `Red Data's SMS platform lets businesses send millions of personalised messages with a single API call. Whether it's OTP authentication, order alerts, promotional campaigns, or appointment reminders — our gateway ensures near-instant delivery across all BD operators.`,
      highlights: [
        { icon: 'bolt', text: 'Near-Instant Delivery' },
        { icon: 'chart', text: 'Real-Time Delivery Reports' },
        { icon: 'link', text: 'RESTful API & SMPP Gateway' },
        { icon: 'users', text: 'Bulk & Personalised Messaging' },
        { icon: 'shield', text: 'Masked & Unmasked SMS' },
        { icon: 'star', text: 'All BD Operators Supported' },
      ],
      features: [
        'Bulk, transactional & OTP SMS',
        'RESTful API & SMPP protocol support',
        'Sender ID masking available',
        'Real-time delivery status reports',
        'Scheduled message campaigns',
        'All major Bangladesh operators covered',
      ],
    },
    {
      icon: 'Globe',
      to: '/domain-hosting',
      title: 'Domain & Hosting',
      title_bn: 'ডোমেইন ও হোস্টিং',
      description:
        'Register your domain and host with confidence. 99.9% uptime, NVMe storage, free SSL, and one-click CMS installs included.',
      description_bn:
        'আস্থার সাথে ডোমেইন নির্ধারণ ও হোস্ট করুন। ৯৯.৯% আপটাইম, NVMe স্টোরেজ, বিনামূল্যে SSL।',
      tag: 'Web',
      tag_bn: 'ওয়েব',
      ctaUrl: 'https://reddata.com.bd/contact',
      intro:
        `Get your business online with Red Data's domain registration and web hosting services. From lightweight business sites to high-traffic e-commerce stores, our NVMe-powered servers deliver blazing-fast load times with enterprise security built in.`,
      highlights: [
        { icon: 'shield', text: 'Free SSL Certificate' },
        { icon: 'bolt', text: 'NVMe SSD Storage' },
        { icon: 'star', text: '99.9% Uptime Guarantee' },
        { icon: 'wrench', text: 'One-Click CMS Install' },
        { icon: 'cloud', text: 'Daily Automated Backups' },
        { icon: 'users', text: 'cPanel + Email Hosting' },
      ],
      features: [
        '.com, .net, .org, .com.bd domain registration',
        'Shared, VPS & dedicated server options',
        'Free SSL certificate included',
        'NVMe storage for ultra-fast page loads',
        'cPanel control panel & webmail',
        'One-click WordPress / Joomla install',
        'Daily automated backups',
        '24/7 technical support',
      ],
    },
    {
      icon: 'Shield',
      to: '/managed-services',
      title: 'Managed Services',
      title_bn: 'ম্যানেজড সার্ভিস',
      description:
        'Focus on your core business while our certified engineers manage your entire IT infrastructure — monitoring, maintenance, and rapid response.',
      description_bn:
        'আপনার মূল ব্যবসায়ে মনোযোগ দিন, আমাদের সার্টিফাইড ইঞ্জিনিয়াররা আপনার IT ইনফ্রাস্ট্রাকচার পরিচালনা করাবে।',
      tag: 'IT Management',
      tag_bn: 'IT ম্যানেজমেন্ট',
      ctaUrl: 'https://reddata.com.bd/contact',
      intro:
        `Red Data Managed IT Services offloads the headaches of infrastructure management from your team. Our certified engineers provide proactive monitoring, rapid incident response, and strategic IT consulting — so your systems stay online and your team stays focused`,
      highlights: [
        { icon: 'clock', text: '24/7 NOC Monitoring' },
        { icon: 'bolt', text: 'Rapid Incident Response' },
        { icon: 'shield', text: 'Network Security Management' },
        { icon: 'wrench', text: 'Preventive Maintenance' },
        { icon: 'chart', text: 'Monthly Performance Reports' },
        { icon: 'users', text: 'Dedicated Account Engineer' },
      ],
      features: [
        'Round-the-clock NOC monitoring',
        'Network security & firewall management',
        'Hardware & software maintenance',
        'On-site and remote support',
        'Disaster recovery planning',
        'Monthly SLA & performance reporting',
      ],
    },
  ],
}

// ─── Stats ───────────────────────────────────────────────────────────────────
export const statsData = [
  { value: '13+', label: 'Years Experience', label_bn: 'যুগুন্ত অভিজ্ঞতা', description: 'Serving homes and businesses since 2012', description_bn: '২০১২ সাল থেকে ঘর ও ব্যবসায় সেবা প্রদান' },
  { value: '99.9%', label: 'Network Uptime', label_bn: 'নেটওয়ার্ক আপটাইম', description: 'SLA-backed reliability you can count on', description_bn: 'SLA-সমর্থিত নির্ভরযোগ্যতা' },
  { value: '64', label: 'Districts Covered', label_bn: 'জেলায় কভারেজ', description: 'Nationwide fiber backbone across Bangladesh', description_bn: 'বাংলাদেশজুড়ে ফাইবার ব্যাকবোন' },
  { value: '24 / 7', label: 'Customer Support', label_bn: 'গ্রাহক সহায়তা', description: 'Round-the-clock technical assistance', description_bn: 'সার্বক্ষণিক টেকনিক্যাল সহায়তা' },
]

// ─── Why Choose Us ───────────────────────────────────────────────────────────
export const whyUsData = {
  sectionBadge: 'Our Advantages',
  heading: 'Why Thousands Choose',
  headingAccent: 'Red Data',
  items: [
    { icon: 'Zap',         title: 'Free Integration', title_bn: 'বিনামূল্যে ইন্টিগ্রেশন', description: 'We set up everything from scratch — no hidden charges, no hassle.', description_bn: 'আমরা শুরু থেকে সবকিছু সেটআপ করি — কোনো লুকানো চার্জ নেই, কোনো ঝামেলা নেই।' },
    { icon: 'Rocket',      title: 'Fast Installation', title_bn: 'দ্রুত ইনস্টলেশন', description: 'Get connected within 24 hours of sign-up with our rapid deployment team.', description_bn: 'সাইন আপের ২৪ ঘণ্টার মধ্যে আমাদের দ্রুত ডিপ্লয়মেন্ট দল সংযুক্ত করবে।' },
    { icon: 'Lock',        title: 'Blazing-Fast & Secure', title_bn: 'দ্রুততম ও নিরাপদ', description: 'Fiber-grade speeds with enterprise-class network security at every level.', description_bn: 'ফাইবার-গ্রেড গতি এবং সব স্তরে এন্টারপ্রাইজ-ক্লাস নেটওয়ার্ক সিকিউরিটি।' },
    { icon: 'DollarSign',  title: 'Competitive Pricing', title_bn: 'প্রতিযোগিতামূলক মূল্য', description: 'Premium performance without premium price tags. BTRC approved tariff.', description_bn: 'প্রিমিয়াম পারফর্মান্স, প্রিমিয়াম মূল্য ছাড়াই। BTRC অনুমোদিত ট্যারিফ।' },
    { icon: 'TrendingUp',  title: 'Continuous Improvement', title_bn: 'নিরন্তর উন্নতি', description: 'We invest constantly in network upgrades to keep you ahead of demand.', description_bn: 'আমরা নিরন্তর নেটওয়ার্ক আপগ্রেডে বিনিয়োগ করি।' },
    { icon: 'Headphones',  title: '24×7 Proactive Support', title_bn: '২৪×৭ প্রোঅ্যাক্টিভ সহায়তা', description: 'Our NOC team monitors your connection around the clock so issues are resolved before you notice them.', description_bn: 'আমাদের NOC দল সার্বক্ষণিক আপনার সংযোগ মনিটর করে, যেন সমস্যা বোঝার আগেই সমাধান হয়।' },
  ],
}

// ─── Pricing ─────────────────────────────────────────────────────────────────
export const pricingData = {
  sectionBadge: 'Simple Pricing',
  heading: 'Choose the Plan',
  headingAccent: 'That Fits You',
  subheading: 'All plans include unlimited devices, 24/7 support, and free installation. No hidden costs.',
  plans: [
    {
      name: 'Raspberry',
      tag: 'Customer Favorite',
      tag_bn: 'গ্রাহক পছন্দের',
      price: '৳735',
      vatBreakdown: '৳700 + ৳35 (5% VAT)',
      vatBreakdown_bn: '৳৭০০ + ৳৩৫ (৫% ভ্যাট)',
      period: '/month',
      period_bn: '/মাস',
      oneTime: '৳2,000 one-time setup',
      oneTime_bn: '৳২,০০০ এককালীন সেটআপ',
      bandwidth: '30 Mbps',
      popular: false,
      features: [
        '30 Mbps Bandwidth',
        'Buffer-less social media & YouTube',
        'Unlimited Device Support',
        '100 Min TalkTime',
        '24/7 Customer Care',
        'Free Installation',
      ],
      features_bn: [
        '৩০ Mbps ব্যান্ডউইথ',
        'বাফার-মুক্ত সোশ্যাল মিডিয়া ও YouTube',
        'অসীমিত ডিভাইস সাপোর্ট',
        '১০০ মিন ট্যালকটাইম',
        '২৪/৭ গ্রাহক সেবা',
        'বিনামূল্যে ইনস্টলেশন',
      ],
      cta: 'Get Started',
      cta_bn: 'শুরু করুন',
    },
    {
      name: 'Maroon',
      tag: 'Best Value',
      tag_bn: 'সেরা মানের',
      price: '৳840',
      vatBreakdown: '৳800 + ৳40 (5% VAT)',
      vatBreakdown_bn: '৳৮০০ + ৳৪০ (৫% ভ্যাট)',
      period: '/month',
      period_bn: '/মাস',
      oneTime: '৳1,500 one-time setup',
      oneTime_bn: '৳১,৫০০ এককালীন সেটআপ',
      bandwidth: '40 Mbps',
      popular: true,
      features: [
        '40 Mbps Bandwidth',
        'Buffer-less social media & YouTube',
        'Unlimited Device Support',
        '150 Min TalkTime',
        '1 OTT Subscription',
        '24/7 Customer Care',
      ],
      features_bn: [
        '৪০ Mbps ব্যান্ডউইথ',
        'বাফার-মুক্ত সোশ্যাল মিডিয়া ও YouTube',
        'অসীমিত ডিভাইস সাপোর্ট',
        '১৫০ মিন ট্যালকটাইম',
        '১টি OTT সাবস্ক্রিপশন',
        '২৪/৭ গ্রাহক সেবা',
      ],
      cta: 'Get Started',
      cta_bn: 'শুরু করুন',
    },
    {
      name: 'Scarlet',
      tag: '',
      price: '৳1,050',
      vatBreakdown: '৳1,000 + ৳50 (5% VAT)',
      vatBreakdown_bn: '৳১,০০০ + ৳৫০ (৫% ভ্যাট)',
      period: '/month',
      period_bn: '/মাস',
      oneTime: '৳1,000 one-time setup',
      oneTime_bn: '৳১,০০০ এককালীন সেটআপ',
      bandwidth: '50 Mbps',
      popular: false,
      features: [
        '50 Mbps Bandwidth',
        'Buffer-less social media & YouTube',
        'Unlimited Device Support',
        '200 Min TalkTime',
        '1 OTT Subscription',
        '24/7 Customer Care',
      ],
      features_bn: [
        '৫০ Mbps ব্যান্ডউইথ',
        'বাফার-মুক্ত সোশ্যাল মিডিয়া ও YouTube',
        'অসীমিত ডিভাইস সাপোর্ট',
        '২০০ মিন ট্যালকটাইম',
        '১টি OTT সাবস্ক্রিপশন',
        '২৪/৭ গ্রাহক সেবা',
      ],
      cta: 'Get Started',
      cta_bn: 'শুরু করুন',
    },
  ],
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const faqData = {
  sectionBadge: 'FAQ',
  heading: 'Frequently Asked',
  headingAccent: 'Questions',
  items: [
    {
      question: 'How quickly can I get connected after signing up?',
      question_bn: 'সাইন আপের পর কত দ্রুত সংযুক্ত হওয়া যায়?',
      answer:
        'Our rapid deployment team typically completes installation within 24 hours of subscription confirmation in covered areas. You will receive an SMS confirmation once your account is activated.',
      answer_bn:
        'আমাদের দ্রুত ডিপ্লয়মেন্ট দল সাধারণত কভারেজ এলাকায় সাবস্ক্রিপশন নিশ্চিতের ২৪ ঘণ্টার মধ্যে ইনস্টলেশন সম্পন্ন করে। অ্যাকাউন্ট সক্রিয় হলে SMS নিশ্চিতকরণ পাবেন।',
    },
    {
      question: 'Are there any hidden fees beyond the monthly plan price?',
      question_bn: 'মাসিক মূল্যের বাইরে কোঢো লুকানো চার্জ আছে?',
      answer:
        'No hidden fees whatsoever. The only one-time charge is the connection setup fee listed on each plan. Monthly billing is transparent — 5% VAT inclusive as shown in pricing.',
      answer_bn:
        'কোনো লুকানো চার্জ নেই। শুধুমাত্র প্রতিটি প্ল্যানে উল্লেখিত এককালীন সেটআপ ফি প্রযোজ্য। মাসিক বিল স্বচ্ছ — মূল্যতালিকায় দেখানো মতো ৫% ভ্যাট অন্তর্ভুক্ত।',
    },
    {
      question: 'What areas does Red Data currently cover?',
      question_bn: 'রেড ডাটা বর্তমানে কোন কোন এলাকায় সেবা দেয়?',
      answer:
        'Red Data provides services across all 64 districts of Bangladesh. Our backbone spans Dhaka, Chittagong, Sylhet, and all major divisional cities, with ongoing expansion to upazila levels.',
      answer_bn:
        'রেড ডাটা বাংলাদেশের সকল ৬৪ জেলায় সেবা প্রদান করে। আমাদের ব্যাকবোন ঢাকা, চট্টগ্রাম, সিলেট এবং সকল প্রধান বিভাগীয় শহর অতিক্রম করে, উপজেলা পর্যায়ে বিস্তার চলমান।',
    },
    {
      question: 'Can I upgrade or downgrade my plan at any time?',
      question_bn: 'যেকোনো সময় কি প্ল্যান পরিবর্তন করা যায়?',
      answer:
        'Absolutely. You can change your plan from the Self Care portal or by calling our 24/7 helpline. Plan changes take effect from the next billing cycle with zero penalty.',
      answer_bn:
        'অবশ্যই। Self Care পোর্টাল থেকে বা আমাদের ২৪/৭ হেল্পলাইনে কল করে প্ল্যান পরিবর্তন করতে পারবেন। প্ল্যান পরিবর্তন পরবর্তী বিলিং সাইকেল থেকে কার্যকর হবে, কোনো পেনাল্টি নেই।',
    },
    {
      question: 'What kind of customer support do you offer?',
      question_bn: 'আপনারা কেমন গ্রাহক সহায়তা দিয়ে থাকেন?',
      answer:
        'We offer 24×7 technical support via phone (+880-9640-112233), WhatsApp, email, Facebook Messenger, and our online helpdesk. Our NOC team proactively monitors the network at all times.',
      answer_bn:
        'আমরা ফোন (+880-9640-112233), WhatsApp, ইমেইল, Facebook Messenger এবং অনলাইন হেল্পডেস্কের মাধ্যমে ২৪×৭ টেকনিক্যাল সহায়তা দিই। আমাদের NOC দল সার্বক্ষণিক নেটওয়ার্ক মনিটর করে।',
    },
    {
      question: 'Is Red Data licensed by BTRC?',
      question_bn: 'রেড ডাটা কি BTRC দ্বারা লাইসেন্সপ্রাপ্ত?',
      answer:
        'Yes. Red Data (Pvt.) Limited is a fully licensed Internet Service Provider approved by the Bangladesh Telecommunication Regulatory Commission (BTRC). Our approved tariff is publicly available.',
      answer_bn:
        'হাঁ। Red Data (Pvt.) Limited বাংলাদেশ টেলিযোগাযোগ নিয়ন্ত্রণ কমিশন (BTRC) অনুমোদিত সম্পূর্ণ লাইসেন্সপ্রাপ্ত ISP। আমাদের অনুমোদিত ট্যারিফ সার्বজনিকভাবে পাওয়া যায়।',
    },
  ],
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
export const ctaData = {
  heading: 'Ready to Experience',
  heading_bn: 'অভিজ্ঞতা নিতে প্রস্তুত?',
  headingAccent: 'Blazing-Fast Internet?',
  headingAccent_bn: 'দ্রুততম ইন্টারনেট',
  subheading:
    "Join over 10,000 satisfied customers who trust Red Data for their home and business connectivity. Get connected today — it's fast, reliable, and affordable.",
  subheading_bn:
    '১০,০০০+ সন্তুষ্ট গ্রাহকের সাথে যোগ দিন যারা রেড ডাটাকে বিশ্বাস করেন। আজই সংযুক্ত হন — দ্রুত, নির্ভরযোগ্য ও সাশ্রয়ী।',
  cta1: { label: 'See All Plans', label_bn: 'সকল প্ল্যান দেখুন', href: '#pricing' },
  cta2: { label: 'Contact Us', label_bn: 'যোগাযোগ করুন', href: '#contact' },
}

// ─── Footer ──────────────────────────────────────────────────────────────────
export const footerData = {
  brand: 'Red Data',
  tagline: 'Reliable & High-Speed Internet Under One Roof.',
  tagline_bn: 'সাশ্রয়ী ও দ্রুততম ইন্টারনেট একটি ছাদের নিচে।',
  description:
    'Founded in 2012, Red Data (Pvt.) Limited is a BTRC-licensed ISP specialising in Internet & Data Connectivity, IP Telephony, SMS Service, Domain & Hosting, and Managed IT Services across Bangladesh.',
  description_bn:
    '২০১২ সালে প্রতিষ্ঠিত, Red Data (Pvt.) Limited একটি BTRC-লাইসেন্সপ্রাপ্ত ISP যা ইন্টারনেট ও ডেটা কানেক্টিভিটি, IP টেলিফোনি, SMS সার্ভিস, ডোমেইন ও হোস্টিং এবং ম্যানেজড IT সার্ভিসে বিশেষজ্ঞ।',
  contact: {
    phone: '+880-9640-112233',
    helpdesk: '+880-9640-123123',
    email: 'info@reddata.com.bd',
    address: 'Level 19, SimpleTree Attalika, 134 Gulshan Avenue, Dhaka-1212',
    addressReg: 'House 5/A, Road 2, Lane 3, Block G, Halishahar, Chittagong',
  },
  columns: [
    {
      heading: 'Services',
      heading_bn: 'সেবাসমূহ',
      links: [
        { label: 'Home Internet', href: '/home-internet' },
        { label: 'Corporate Internet', href: '/corporate-internet' },
        { label: 'Data Connectivity', href: '/data-connectivity' },
        { label: 'IP Telephony', href: '/ip-telephony' },
        { label: 'SMS Service', href: '/sms-service' },
        { label: 'Domain & Hosting', href: '/domain-hosting' },
        { label: 'Managed Services', href: '/managed-services' },
      ],
    },
    {
      heading: 'Company',
      heading_bn: 'কোম্পানি',
      links: [
        { label: 'About Us', href: '/about-us' },
        { label: 'Why Choose Us', href: '/#why-us' },
        { label: 'Area Coverage', href: '/#coverage' },
        { label: 'News & Blog', href: '/blog' },
        { label: 'Pay Bill', href: '/pay-bill' },
        { label: 'BTRC Approved Tariff', href: 'https://reddata.com.bd/tariff.pdf' },
      ],
    },
    {
      heading: 'Support',
      heading_bn: 'সহায়তা',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'Self Care Portal', href: '/self-corner' },
        { label: 'Helpline: 09640-112233', href: 'tel:+8809640112233' },
        { label: 'HelpDesk: 09640-123123', href: 'tel:+8809640123123' },
        { label: 'WhatsApp Us', href: 'https://wa.me/+8801971521964' },
        { label: 'Facebook Messenger', href: 'https://www.facebook.com/profile.php?id=61556093758540' },
      ],
    },
  ],
  copyright: '© 2026 Red Data (Pvt.) Limited. All rights reserved.',
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE-SPECIFIC DATA
// ─────────────────────────────────────────────────────────────────────────────

// ─── About Page ──────────────────────────────────────────────────────────────
export const aboutPageData = {
  stats: [
    { num: '2012',    label: 'Founded' },
    { num: '13+',     label: 'Years of Experience' },
    { num: '10,000+', label: 'Happy Clients' },
    { num: '99.9%',   label: 'Uptime SLA' },
  ],
  services: [
    { icon: 'Globe',          label: 'Internet & Data Connectivity' },
    { icon: 'Phone',          label: 'IP Telephony Service' },
    { icon: 'MessageSquare',  label: 'SMS Service' },
    { icon: 'Cloud',          label: 'Cloud & Email Solution' },
    { icon: 'Monitor',        label: 'Website & Software Development' },
    { icon: 'Wrench',         label: 'Network Hardware' },
    { icon: 'Shield',         label: 'Managed Services' },
  ],
  clients: [
    { name: 'UCB',                   img: '/images/clients/1UCB.png' },
    { name: 'City Bank',             img: '/images/clients/2CityBank.png' },
    { name: 'Prime Bank',            img: '/images/clients/3PrimeBank.png' },
    { name: 'DBBL',                  img: '/images/clients/4DBBL.png' },
    { name: 'Mercantile Bank',       img: '/images/clients/5Mercantilebank.png' },
    { name: 'Shahjalal Islami Bank', img: '/images/clients/6ShahjalalIslamiBank.png' },
    { name: 'Shimanto Bank',         img: '/images/clients/7ShimantoBank.png' },
    { name: 'Citizens Bank',         img: '/images/clients/8CitizensBank.png' },
    { name: 'Upay',                  img: '/images/clients/9Upay.png' },
    { name: 'Genex',                 img: '/images/clients/10Genex.png' },
    { name: 'Digicon',               img: '/images/clients/11Digicon.png' },
    { name: 'Urmi',                  img: '/images/clients/urmi.png' },
    { name: 'Bitopi Group',          img: '/images/clients/13BitopiGroup.png' },
    { name: 'SSD Tech',              img: '/images/clients/14SSDTech.png' },
    { name: 'Nextnet',               img: '/images/clients/15Nextnet.png' },
    { name: 'CloudWell',             img: '/images/clients/16CloudWell.png' },
    { name: 'EB Solution',           img: '/images/clients/17EBSolution.png' },
    { name: 'SARBS Communication',   img: '/images/clients/18SARBSCommunication.png' },
    { name: 'NRDS',                  img: '/images/clients/19NRDS.png' },
    { name: 'Wintel Limited',        img: '/images/clients/20WintelLimited.png' },
    { name: 'Bangladesh Apparel',    img: '/images/clients/21BangladeshApparel.png' },
    { name: 'AyAl',                  img: '/images/clients/AyAl.png' },
    { name: 'AyAl Tech',             img: '/images/clients/AyAlTech.png' },
    { name: 'BIIN',                  img: '/images/clients/BIIN.png' },
    { name: 'SMART',                 img: '/images/clients/SMART.png' },
  ],
  story: {
    heading: 'Empowering Bangladesh\'s Digital Future',
    paragraphs: [
      'With a robust network infrastructure and strategic partnerships, Red Data ensures seamless connectivity and exceptional performance. Leveraging state-of-the-art technologies, Red Data delivers high-speed internet access, enabling individuals and businesses to stay connected, collaborate, and thrive in today\'s digital landscape.',
      'Committed to customer satisfaction and industry-leading service quality, Red Data (Pvt.) Limited continuously invests in infrastructure development, network expansion, and talent acquisition. With a dedicated team of professionals, Red Data strives to exceed customer expectations and drive the digital transformation of Bangladesh.',
      'As the digital landscape evolves, Red Data (Pvt.) Limited remains steadfast in its mission to empower connectivity, enabling individuals, businesses, and communities to embrace the endless possibilities of the digital world.',
    ],
    ctaServices: { label: 'Our Services', href: '/corporate-internet' },
    ctaContact:  { label: 'Contact Us',   href: '/#contact' },
  },
  companyCards: [
    {
      icon: 'MapPin',
      title: 'Head Office',
      lines: ['Level 19, SimpleTree Attalika,', '134 Gulshan Avenue,', 'Dhaka-1212, Bangladesh'],
    },
    {
      icon: 'Building2',
      title: 'Registered Address',
      lines: ['House 5/A, Road 2, Lane 3,', 'Block G, Halishahar,', 'Chittagong, Bangladesh'],
    },
  ],
  cta: {
    heading: 'Partner with Red Data today',
    subheading: 'Join 10,000+ satisfied customers across Bangladesh.',
    cta1: { label: 'Get in Touch', href: '/#contact' },
    cta2: { label: '← Back Home', href: '/' },
  },
}

// ─── Data Connectivity Page ───────────────────────────────────────────────────
export const dataConnectivityData = {
  features: [
    { icon: 'Link2', title: 'Point-to-Point & Multipoint Links', title_bn: 'পয়েন্ট-টু-পয়েন্ট ও মাল্টিপয়েন্ট লিংক', desc: 'Highly reliable dedicated data links connecting your branches and campuses with guaranteed bandwidth and zero congestion.', desc_bn: 'গ্যারান্টিড ব্যান্ডউইথ ও জিরো কনজেশনসহ আপনার শাখা ও ক্যাম্পাসগুলো সংযুক্ত করার জন্য অত্যন্ত নির্ভরযোগ্য ডেডিকেটেড ডেটা লিংক।' },
    { icon: 'Lock', title: 'VPN Services', title_bn: 'ভিপিএন সার্ভিস', desc: 'Secure encrypted Virtual Private Networks over our high-speed fiber backbone for safe inter-office and remote access.', desc_bn: 'নিরাপদ আন্তঃঅফিস ও রিমোট অ্যাক্সেসের জন্য আমাদের হাই-স্পিড ফাইবার ব্যাকবোনের উপর নিরাপদ এনক্রিপ্টেড ভার্চুয়াল প্রাইভেট নেটওয়ার্ক।' },
    { icon: 'Globe', title: 'MPLS Network', title_bn: 'এমপিএলএস নেটওয়ার্ক', desc: 'Layer 2 / Layer 3 resilient national MPLS next-generation network ensuring intelligent traffic routing and Quality of Service.', desc_bn: 'বুদ্ধিমান ট্রাফিক রাউটিং ও কোয়ালিটি অব সার্ভিস নিশ্চিতকারী লেয়ার ২/লেয়ার ৩ রেজিলিয়েন্ট ন্যাশনাল এমপিএলএস নেক্সট-জেনারেশন নেটওয়ার্ক।' },
    { icon: 'Layers', title: 'Dark Fiber for Enterprises', title_bn: 'এন্টারপ্রাইজের জন্য ডার্ক ফাইবার', desc: 'Lease unlit fiber strands and run your own networking equipment at full capacity — complete control over your last-mile infrastructure.', desc_bn: 'আনলিট ফাইবার স্ট্র্যান্ড লিজ নিন এবং আপনার নিজস্ব নেটওয়ার্কিং সরঞ্জাম পূর্ণ ক্ষমতায় চালান — লাস্ট-মাইল ইনফ্রাস্ট্রাকচারে সম্পূর্ণ নিয়ন্ত্রণ।' },
    { icon: 'Radio', title: 'CP Network', title_bn: 'সিপি নেটওয়ার্ক', desc: 'Carrier partner network spanning Grameenphone, Banglalink, Airtel, Robi, and Teletalk for maximum national reachability.', desc_bn: 'সর্বোচ্চ জাতীয় নাগালযোগ্যতার জন্য গ্রামীণফোন, বাংলালিংক, এয়ারটেল, রবি এবং টেলিটকের সমন্বয়ে ক্যারিয়ার পার্টনার নেটওয়ার্ক।' },
    { icon: 'Network', title: 'Backhaul Service', title_bn: 'ব্যাকহল সার্ভিস', desc: 'Robust high-capacity backhaul links for ISPs, tower operators, and enterprise aggregation points across Bangladesh.', desc_bn: 'বাংলাদেশজুড়ে আইএসপি, টাওয়ার অপারেটর এবং এন্টারপ্রাইজ অ্যাগ্রিগেশন পয়েন্টের জন্য শক্তিশালী হাই-ক্যাপাসিটি ব্যাকহল লিংক।' },
  ],
  stats: [
    { value: '99.9%', label: 'Network Uptime SLA' },
    { value: '24/7',  label: 'NOC Monitoring' },
    { value: '5+',    label: 'Carrier Partners' },
    { value: '10 Gbps', label: 'Backbone Capacity' },
  ],
}

// ─── IP Telephony Page ────────────────────────────────────────────────────────
export const ipTelephonyData = {
  features: [
    { icon: 'Building2', title: 'Hosted & On-Premise IPPBX', title_bn: 'হোস্টেড ও অন-প্রেমিস আইপিপিবিএক্স', desc: 'Deploy a full-featured IP PBX either hosted in our cloud or on-premise at your office — your choice of control and scale.', desc_bn: 'আমাদের ক্লাউডে হোস্টেড বা আপনার অফিসে অন-প্রেমিস — সম্পূর্ণ-ফিচার্ড আইপি পিবিএক্স ডিপ্লয় করুন আপনার পছন্দমতো।' },
    { icon: 'Cloud', title: 'Cloud PBX Service', title_bn: 'ক্লাউড পিবিএক্স সার্ভিস', desc: 'Fully managed cloud-based PBX eliminating hardware costs while delivering enterprise-grade telephony features.', desc_bn: 'হার্ডওয়্যার খরচ ছাড়াই এন্টারপ্রাইজ-গ্রেড টেলিফোনি ফিচার সরবরাহকারী সম্পূর্ণ ম্যানেজড ক্লাউড-ভিত্তিক পিবিএক্স।' },
    { icon: 'Phone', title: 'Call Center Solution', title_bn: 'কল সেন্টার সমাধান', desc: 'Complete inbound/outbound call center platform with agent management, queue analytics, and supervisor dashboards.', desc_bn: 'এজেন্ট ম্যানেজমেন্ট, কিউ অ্যানালিটিক্স এবং সুপারভাইজার ড্যাশবোর্ডসহ সম্পূর্ণ ইনবাউন্ড/আউটবাউন্ড কল সেন্টার প্ল্যাটফর্ম।' },
    { icon: 'Bot', title: 'Dynamic IVR', title_bn: 'ডায়নামিক আইভিআর', desc: 'Multi-level Interactive Voice Response with real-time routing logic, language support, and seamless CRM hooks.', desc_bn: 'রিয়েল-টাইম রাউটিং লজিক, ভাষা সহায়তা এবং নিরবচ্ছিন্ন সিআরএম সংযোগসহ মাল্টি-লেভেল ইন্টারেক্টিভ ভয়েস রেসপন্স।' },
    { icon: 'Hash', title: 'Short Code Parking', title_bn: 'শর্ট কোড পার্কিং', desc: 'Dedicated short codes for marketing campaigns, hotlines, and internal extensions that are easy to remember.', desc_bn: 'মার্কেটিং ক্যাম্পেইন, হটলাইন এবং সহজে মনে রাখা যায় এমন অভ্যন্তরীণ এক্সটেনশনের জন্য ডেডিকেটেড শর্ট কোড।' },
    { icon: 'Monitor', title: 'Analog PBX Integration', title_bn: 'অ্যানালগ পিবিএক্স ইন্টিগ্রেশন', desc: 'Bridge your legacy analog PBX infrastructure into the VoIP world with zero downtime migration paths.', desc_bn: 'জিরো ডাউনটাইম মাইগ্রেশনের মাধ্যমে আপনার লিগ্যাসি অ্যানালগ পিবিএক্স ইনফ্রাস্ট্রাকচার ভিওআইপি জগতে নিয়ে আসুন।' },
    { icon: 'Gift', title: 'Toll Free Service', title_bn: 'টোল ফ্রি সার্ভিস', desc: 'Provision toll-free numbers so customers can call your business at no charge — ideal for support and sales.', desc_bn: 'টোল-ফ্রি নম্বর প্রভিশন করুন যাতে গ্রাহকরা বিনামূল্যে আপনার ব্যবসায় কল করতে পারেন — সাপোর্ট ও সেলসের জন্য আদর্শ।' },
    { icon: 'Link2', title: 'CRM Integration', title_bn: 'সিআরএম ইন্টিগ্রেশন', desc: 'Native connectors for popular CRMs (Salesforce, Zoho, HubSpot) enabling click-to-dial and call logging.', desc_bn: 'ক্লিক-টু-ডায়াল এবং কল লগিং সক্রিয় করতে জনপ্রিয় সিআরএম (Salesforce, Zoho, HubSpot)-এর জন্য নেটিভ কানেক্টর।' },
    { icon: 'Globe', title: 'SIP Trunk', title_bn: 'এসআইপি ট্রাংক', desc: 'Replace costly PSTN lines with scalable SIP trunks over our high-quality IP network with competitive per-minute rates.', desc_bn: 'প্রতিযোগিতামূলক পার-মিনিট রেটসহ আমাদের হাই-কোয়ালিটি আইপি নেটওয়ার্কে স্কেলেবল এসআইপি ট্রাংকের মাধ্যমে ব্যয়বহুল পিএসটিএন লাইন প্রতিস্থাপন করুন।' },
    { icon: 'GitBranch', title: 'Hunting Group', title_bn: 'হান্টিং গ্রুপ', desc: 'Distribute incoming calls intelligently across agent groups using round-robin, simultaneous, or priority rules.', desc_bn: 'রাউন্ড-রবিন, সিমালটেনিয়াস বা প্রায়োরিটি রুলস ব্যবহার করে এজেন্ট গ্রুপে বুদ্ধিমত্তার সাথে ইনকামিং কল বিতরণ করুন।' },
    { icon: 'Smartphone', title: 'Automated Dialing & Call Distribution', title_bn: 'অটোমেটেড ডায়ালিং ও কল ডিস্ট্রিবিউশন', desc: 'Predictive, progressive, and preview auto-dialers with automatic call distribution for maximum agent productivity.', desc_bn: 'সর্বোচ্চ এজেন্ট উৎপাদনশীলতার জন্য অটোমেটিক কল ডিস্ট্রিবিউশনসহ প্রেডিক্টিভ, প্রগ্রেসিভ এবং প্রিভিউ অটো-ডায়ালার।' },
    { icon: 'CornerDownRight', title: 'Call Forwarding', title_bn: 'কল ফরওয়ার্ডিং', desc: 'Unconditional, busy, and no-answer forwarding rules configurable per extension — stay reachable everywhere.', desc_bn: 'প্রতি এক্সটেনশনে কনফিগারযোগ্য আনকন্ডিশনাল, বিজি এবং নো-আনসার ফরওয়ার্ডিং রুলস — সর্বত্র যোগাযোগযোগ্য থাকুন।' },
  ],
  stats: [
    { value: '12+', label: 'Features' },
    { value: 'HD',  label: 'Voice Quality' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '24/7',  label: 'Support' },
  ],
}

// ─── SMS Service Page ─────────────────────────────────────────────────────────
export const smsServiceData = {
  features: [
    { icon: 'Plug', title: 'Easy API Integration', title_bn: 'সহজ এপিআই ইন্টিগ্রেশন', desc: 'Developer-friendly REST APIs with comprehensive documentation — integrate bulk SMS into any system in minutes.', desc_bn: 'বিস্তারিত ডকুমেন্টেশনসহ ডেভেলপার-বান্ধব রেস্ট এপিআই — যেকোনো সিস্টেমে মিনিটের মধ্যে বাল্ক এসএমএস ইন্টিগ্রেট করুন।' },
    { icon: 'Monitor', title: 'User Friendly Customer Panel', title_bn: 'ব্যবহারকারী-বান্ধব কাস্টমার প্যানেল', desc: 'Intuitive web dashboard for non-technical users to send campaigns, view reports, and manage contacts without any coding.', desc_bn: 'কোনো কোডিং ছাড়াই ক্যাম্পেইন পাঠাতে, রিপোর্ট দেখতে এবং কন্টাক্ট ম্যানেজ করতে সহজ ওয়েব ড্যাশবোর্ড।' },
    { icon: 'ClipboardList', title: 'Campaign & Template Management', title_bn: 'ক্যাম্পেইন ও টেমপ্লেট ম্যানেজমেন্ট', desc: 'Create, schedule, and reuse SMS templates for recurring campaigns — segmentation and bulk import included.', desc_bn: 'পুনরাবৃত্তিমূলক ক্যাম্পেইনের জন্য এসএমএস টেমপ্লেট তৈরি, সময়নির্ধারণ এবং পুনর্ব্যবহার করুন — সেগমেন্টেশন ও বাল্ক ইম্পোর্টসহ।' },
    { icon: 'Database', title: 'Aggregator Plane', title_bn: 'অ্যাগ্রিগেটর প্লেন', desc: 'Connected to all major operators through our aggregator layer ensuring maximum route coverage and reliability across Bangladesh.', desc_bn: 'বাংলাদেশজুড়ে সর্বোচ্চ রুট কভারেজ ও নির্ভরযোগ্যতা নিশ্চিত করতে আমাদের অ্যাগ্রিগেটর লেয়ারের মাধ্যমে সকল প্রধান অপারেটরের সাথে সংযুক্ত।' },
    { icon: 'MapPin', title: 'Location Based SMS', title_bn: 'লোকেশন-ভিত্তিক এসএমএস', desc: 'Target subscribers by geographic zone for hyper-local marketing campaigns and location-triggered notifications.', desc_bn: 'হাইপার-লোকাল মার্কেটিং ক্যাম্পেইন এবং লোকেশন-ট্রিগার্ড নোটিফিকেশনের জন্য ভৌগোলিক অঞ্চল অনুযায়ী সাবস্ক্রাইবার টার্গেট করুন।' },
    { icon: 'TrendingUp', title: 'Highest Submit Rate', title_bn: 'সর্বোচ্চ সাবমিট রেট', desc: 'Our direct operator connections deliver among the highest submit and delivery rates in the country with real-time status.', desc_bn: 'আমাদের ডাইরেক্ট অপারেটর কানেকশন রিয়েল-টাইম স্ট্যাটাসসহ দেশের সর্বোচ্চ সাবমিট ও ডেলিভারি রেট নিশ্চিত করে।' },
    { icon: 'DollarSign', title: 'No Hidden Cost', title_bn: 'কোনো লুকানো খরচ নেই', desc: 'Transparent per-SMS pricing — no setup fees, no monthly minimums, no surprise charges. Pay only for what you send.', desc_bn: 'স্বচ্ছ পার-এসএমএস মূল্য — কোনো সেটআপ ফি নেই, মাসিক মিনিমাম নেই, অপ্রত্যাশিত চার্জ নেই। শুধু পাঠানো মেসেজের জন্য পেমেন্ট করুন।' },
    { icon: 'Key', title: 'Customer Driven API Key', title_bn: 'কাস্টমার-চালিত এপিআই কী', desc: 'Each customer gets a dedicated API key with role-based access control and usage analytics in the dashboard.', desc_bn: 'প্রতিটি গ্রাহক রোল-বেসড অ্যাক্সেস কন্ট্রোল এবং ড্যাশবোর্ডে ব্যবহার অ্যানালিটিক্সসহ একটি ডেডিকেটেড এপিআই কী পান।' },
    { icon: 'Code2', title: 'Developer Friendly', title_bn: 'ডেভেলপার-বান্ধব', desc: 'SDKs for PHP, Python, Node.js and Java alongside thorough Postman collections and sandbox environments.', desc_bn: 'PHP, Python, Node.js এবং Java-এর জন্য এসডিকে এবং বিস্তারিত পোস্টম্যান কালেকশন ও স্যান্ডবক্স পরিবেশ।' },
    { icon: 'Briefcase', title: 'Transactional SMS', title_bn: 'ট্রানজেকশনাল এসএমএস', desc: 'Mission-critical OTPs, alerts, and notifications delivered through a dedicated high-priority route with millisecond latency.', desc_bn: 'মিলিসেকেন্ড লেটেন্সিসহ ডেডিকেটেড হাই-প্রায়োরিটি রুটে ডেলিভার করা মিশন-ক্রিটিক্যাল ওটিপি, অ্যালার্ট এবং নোটিফিকেশন।' },
  ],
  useCases: [
    { icon: 'Landmark', label: 'Banking & Finance', label_bn: 'ব্যাংকিং ও অর্থায়ন' },
    { icon: 'ShoppingCart', label: 'E-Commerce', label_bn: 'ই-কমার্স' },
    { icon: 'HeartPulse', label: 'Healthcare', label_bn: 'স্বাস্থ্যসেবা' },
    { icon: 'Package', label: 'Logistics', label_bn: 'লজিস্টিক্স' },
    { icon: 'GraduationCap', label: 'Education', label_bn: 'শিক্ষা' },
    { icon: 'Building2', label: 'Enterprises', label_bn: 'এন্টারপ্রাইজ' },
  ],
}

// ─── Domain & Hosting Page ────────────────────────────────────────────────────
export const domainHostingData = {
  features: [
    { icon: 'Globe', title: 'Domain Registration', title_bn: 'ডোমেইন রেজিস্ট্রেশন', desc: 'Register .com, .com.bd, .org, .net and all popular TLDs at competitive prices with free DNS management, privacy protection, and auto-renewal.', desc_bn: 'প্রতিযোগিতামূলক মূল্যে .com, .com.bd, .org, .net এবং সকল জনপ্রিয় টিএলডি নিবন্ধন করুন — ফ্রি ডিএনএস ম্যানেজমেন্ট, প্রাইভেসি সুরক্ষা এবং অটো-রিনিউয়াল।' },
    { icon: 'Cloud', title: 'Cloud Hosting', title_bn: 'ক্লাউড হোস্টিং', desc: 'Scalable cloud hosting with SSD storage, auto-scaling resources, free SSL, and one-click app installs — perfect for web & ecommerce.', desc_bn: 'এসএসডি স্টোরেজ, অটো-স্কেলিং রিসোর্স, ফ্রি এসএসএল এবং ওয়ান-ক্লিক অ্যাপ ইনস্টলসহ স্কেলেবল ক্লাউড হোস্টিং — ওয়েব ও ই-কমার্সের জন্য আদর্শ।' },
    { icon: 'HardDrive', title: 'Storage Solutions', title_bn: 'স্টোরেজ সমাধান', desc: 'Flexible object and block storage options with redundant backups, geo-replication, and high-throughput access for business data.', desc_bn: 'ব্যবসায়িক ডেটার জন্য রিডান্ড্যান্ট ব্যাকআপ, জিও-রেপ্লিকেশন এবং হাই-থ্রুপুট অ্যাক্সেসসহ নমনীয় অবজেক্ট ও ব্লক স্টোরেজ।' },
    { icon: 'Monitor', title: 'Dedicated Servers', title_bn: 'ডেডিকেটেড সার্ভার', desc: 'Bare-metal dedicated servers with full root access, custom hardware configurations, and direct network hand-off in our Dhaka data center.', desc_bn: 'ঢাকা ডেটা সেন্টারে ফুল রুট অ্যাক্সেস, কাস্টম হার্ডওয়্যার কনফিগারেশন এবং ডাইরেক্ট নেটওয়ার্ক হ্যান্ড-অফসহ বেয়ার-মেটাল ডেডিকেটেড সার্ভার।' },
    { icon: 'Network', title: 'Network Infrastructure', title_bn: 'নেটওয়ার্ক ইনফ্রাস্ট্রাকচার', desc: 'Enterprise-grade connectivity for your hosted services with redundant upstream links, BGP routing, and low-latency peering.', desc_bn: 'রিডান্ড্যান্ট আপস্ট্রিম লিংক, বিজিপি রাউটিং এবং লো-লেটেন্সি পিয়ারিংসহ আপনার হোস্টেড সার্ভিসের জন্য এন্টারপ্রাইজ-গ্রেড কানেক্টিভিটি।' },
    { icon: 'Shield', title: 'Security Measures', title_bn: 'নিরাপত্তা ব্যবস্থা', desc: 'DDoS mitigation, WAF, automated malware scanning, SSL certificates, and proactive vulnerability patching included on all plans.', desc_bn: 'সকল প্ল্যানে ডিডোএস মিটিগেশন, ডব্লিউএএফ, অটোমেটেড ম্যালওয়্যার স্ক্যানিং, এসএসএল সার্টিফিকেট এবং প্রোঅ্যাক্টিভ ভালনারেবিলিটি প্যাচিং।' },
    { icon: 'Settings', title: 'Customization Options', title_bn: 'কাস্টমাইজেশন বিকল্প', desc: 'Choose your OS, control panel (cPanel / Plesk / DirectAdmin), software stack, and resource allocation exactly how you need.', desc_bn: 'আপনার প্রয়োজনমতো ওএস, কন্ট্রোল প্যানেল (cPanel / Plesk / DirectAdmin), সফটওয়্যার স্ট্যাক এবং রিসোর্স বরাদ্দ বেছে নিন।' },
    { icon: 'Wrench', title: 'Management Tools', title_bn: 'ম্যানেজমেন্ট টুলস', desc: 'cPanel / WHM access, one-click backups, resource monitors, DNS manager, and 24/7 managed support for full peace of mind.', desc_bn: 'সম্পূর্ণ মানসিক শান্তির জন্য cPanel / WHM অ্যাক্সেস, ওয়ান-ক্লিক ব্যাকআপ, রিসোর্স মনিটর, ডিএনএস ম্যানেজার এবং ২৪/৭ ম্যানেজড সহায়তা।' },
  ],
  plans: [
    { name: 'Starter',    price: 'BDT 500',   period: '/month', features: ['1 Domain', '10 GB SSD Storage', '10 Email Accounts', 'Free SSL', '99.9% Uptime'] },
    { name: 'Business',   price: 'BDT 1,200', period: '/month', features: ['5 Domains', '50 GB SSD Storage', 'Unlimited Emails', 'Free SSL + CDN', '99.9% Uptime', 'Daily Backup'], highlight: true },
    { name: 'Enterprise', price: 'Custom',    period: 'Quote',  features: ['Unlimited Domains', 'Dedicated Storage', 'Custom Email Setup', 'DDoS Protection', '99.99% SLA', 'Managed Service'] },
  ],
}

// ─── Managed Services Page ────────────────────────────────────────────────────
export const managedServicesData = {
  services: [
    {
      icon: 'Globe',
      title: 'Custom Network Management Service',
      title_bn: 'কাস্টম নেটওয়ার্ক ম্যানেজমেন্ট সার্ভিস',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-500/10',
      borderColor: 'border-blue-200 dark:border-blue-500/30',
      desc: 'End-to-end monitoring, configuration, and optimisation of your entire network infrastructure — routers, switches, firewalls, and WAN links — proactively managed by our certified engineers.',
      desc_bn: 'আমাদের সার্টিফাইড ইঞ্জিনিয়ারদের দ্বারা প্রোঅ্যাক্টিভলি ম্যানেজড রাউটার, সুইচ, ফায়ারওয়াল এবং ওয়ান লিংকসহ আপনার সম্পূর্ণ নেটওয়ার্ক ইনফ্রাস্ট্রাকচারের এন্ড-টু-এন্ড মনিটরিং, কনফিগারেশন ও অপ্টিমাইজেশন।',
      features: ['Proactive fault detection & resolution', '24/7 NOC monitoring', 'Network performance optimisation', 'Regular firmware & patch management', 'Detailed SLA reports & dashboards', 'Incident management & escalation'],
      features_bn: ['প্রোঅ্যাক্টিভ ত্রুটি শনাক্তকরণ ও সমাধান', '২৪/৭ এনওসি মনিটরিং', 'নেটওয়ার্ক পারফরম্যান্স অপ্টিমাইজেশন', 'নিয়মিত ফার্মওয়্যার ও প্যাচ ম্যানেজমেন্ট', 'বিস্তারিত এসএলএ রিপোর্ট ও ড্যাশবোর্ড', 'ইনসিডেন্ট ম্যানেজমেন্ট ও এসকেলেশন'],
    },
    {
      icon: 'Shield',
      title: 'Managed Network Security Service',
      title_bn: 'ম্যানেজড নেটওয়ার্ক সিকিউরিটি সার্ভিস',
      color: 'from-red-500 to-rose-600',
      bgColor: 'bg-red-50 dark:bg-red-500/10',
      borderColor: 'border-red-200 dark:border-red-500/30',
      desc: 'Comprehensive security management covering firewalls, intrusion detection, threat intelligence, and compliance — keeping your business protected around the clock.',
      desc_bn: 'ফায়ারওয়াল, ইন্ট্রুশন ডিটেকশন, থ্রেট ইন্টেলিজেন্স এবং কমপ্লায়েন্স কভার করে ব্যাপক সিকিউরিটি ম্যানেজমেন্ট — চব্বিশ ঘণ্টা আপনার ব্যবসাকে সুরক্ষিত রাখে।',
      features: ['Firewall management & tuning', 'IDS / IPS monitoring', 'Security incident response', 'Vulnerability scanning & remediation', 'Compliance reporting (ISO 27001, BDRC)', 'DDoS protection & traffic scrubbing'],
      features_bn: ['ফায়ারওয়াল ম্যানেজমেন্ট ও টিউনিং', 'আইডিএস/আইপিএস মনিটরিং', 'সিকিউরিটি ইনসিডেন্ট রেসপন্স', 'ভালনারেবিলিটি স্ক্যানিং ও রেমিডিয়েশন', 'কমপ্লায়েন্স রিপোর্টিং (ISO 27001, BDRC)', 'ডিডোএস সুরক্ষা ও ট্রাফিক স্ক্রাবিং'],
    },
    {
      icon: 'Monitor',
      title: 'Managed Software & Embedded System Development',
      title_bn: 'ম্যানেজড সফটওয়্যার ও এমবেডেড সিস্টেম ডেভেলপমেন্ট',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-500/10',
      borderColor: 'border-emerald-200 dark:border-emerald-500/30',
      desc: 'Full-lifecycle software and embedded system development from requirements analysis through to deployment and ongoing support — custom-built for your business needs.',
      desc_bn: 'আপনার ব্যবসার চাহিদা অনুযায়ী কাস্টম-নির্মিত, রিকোয়ারমেন্ট বিশ্লেষণ থেকে ডিপ্লয়মেন্ট এবং চলমান সহায়তা পর্যন্ত সম্পূর্ণ-জীবনচক্র সফটওয়্যার ও এমবেডেড সিস্টেম ডেভেলপমেন্ট।',
      features: ['Custom software application development', 'Embedded & IoT system engineering', 'System integration & API development', 'Quality assurance & testing', 'Deployment & DevOps pipelines', 'Post-launch maintenance & support'],
      features_bn: ['কাস্টম সফটওয়্যার অ্যাপ্লিকেশন ডেভেলপমেন্ট', 'এমবেডেড ও আইওটি সিস্টেম ইঞ্জিনিয়ারিং', 'সিস্টেম ইন্টিগ্রেশন ও এপিআই ডেভেলপমেন্ট', 'কোয়ালিটি অ্যাসুরেন্স ও টেস্টিং', 'ডিপ্লয়মেন্ট ও ডেভঅপস পাইপলাইন', 'লঞ্চ-পরবর্তী রক্ষণাবেক্ষণ ও সহায়তা'],
    },
  ],
  stats: [
    { value: '24/7',  label: 'Managed Support' },
    { value: '99.9%', label: 'Network Uptime' },
    { value: '50+',   label: 'Enterprise Clients' },
    { value: '10+',   label: 'Years Experience' },
  ],
}

// ─── Blog Page ────────────────────────────────────────────────────────────────
export const blogPostsData = [
  {
    id: 1,
    date: 'June 2024',
    category: 'Company News',
    title: 'বাংলাদেশে রেড ডাটা এর সেরা ইন্টারনেট এবং আইটি সেবা',
    excerpt: 'রেড ডাটা লিমিটেড বাংলাদেশের সেরা ইন্টারনেট সেবা প্রদানকারী কোম্পানিগুলির মধ্যে একটি হিসেবে নিজেকে প্রতিষ্ঠিত করেছে। আমাদের হাই-স্পিড ফাইবার নেটওয়ার্ক এবং প্রিমিয়াম কানেক্টিভিটি সমাধান সম্পর্কে জানুন।',
    author: 'Rajaul Hira',
    readTime: '5 min read',
    image: 'https://reddata.com.bd/_next/static/media/banner2.3d4b4f1c.jpg',
    href: 'https://reddata.com.bd/blogs/1',
    tag: 'Featured',
    tagColor: 'bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-300',
  },
  {
    id: 2,
    date: 'May 2024',
    category: 'Business',
    title: 'The Benefits of Corporate Internet Services for Businesses in Bangladesh',
    excerpt: 'Discover how dedicated corporate internet services with SLA-backed uptime can transform business productivity, enable remote work, and support digital transformation goals for Bangladeshi companies.',
    author: 'Red Data Team',
    readTime: '6 min read',
    image: 'https://reddata.com.bd/_next/static/media/blog_two.fd98c990.jpg',
    href: 'https://reddata.com.bd/blogs/2',
    tag: 'Business',
    tagColor: 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300',
  },
  {
    id: 3,
    date: 'April 2024',
    category: 'Home Internet',
    title: 'How to Choose the Best Home Internet Provider in Bangladesh',
    excerpt: 'With multiple ISPs competing for your attention, choosing the right home internet provider can be overwhelming. This guide covers speeds, reliability, pricing, and customer support — what really matters.',
    author: 'Red Data Team',
    readTime: '7 min read',
    image: 'https://reddata.com.bd/_next/static/media/blog.be34b0fd.jpg',
    href: 'https://reddata.com.bd/blogs/3',
    tag: 'Tips',
    tagColor: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-300',
  },
]

// ─── Contact Page ─────────────────────────────────────────────────────────────
export const contactPageData = {
  methods: [
    { icon: 'Mail', label: 'Email', value: 'info@reddata.com.bd', href: 'mailto:info@reddata.com.bd', color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50 dark:bg-blue-500/10', border: 'border-blue-200 dark:border-blue-500/30' },
    { icon: 'MessageSquare', label: 'WhatsApp', value: '+880 1971-521964', href: 'https://wa.me/+8801971521964', color: 'from-green-500 to-emerald-600', bg: 'bg-green-50 dark:bg-green-500/10', border: 'border-green-200 dark:border-green-500/30' },
    { icon: 'Phone', label: 'Phone', value: '+880 9640-112233', href: 'tel:+8809640112233', color: 'from-red-500 to-rose-600', bg: 'bg-red-50 dark:bg-red-500/10', border: 'border-red-200 dark:border-red-500/30' },
    { icon: 'Headphones', label: 'HelpDesk', value: '+880 9640-123123', href: 'tel:+8809640123123', color: 'from-purple-500 to-violet-600', bg: 'bg-purple-50 dark:bg-purple-500/10', border: 'border-purple-200 dark:border-purple-500/30' },
    { icon: 'ExternalLink', label: 'Facebook', value: 'Red Data Limited', href: 'https://www.facebook.com/profile.php?id=61556093758540', color: 'from-[#1877F2] to-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-700/40' },
    { icon: 'Users', label: 'Facebook Group', value: 'Red Data Community', href: 'https://www.facebook.com/groups/reddatalimited/', color: 'from-sky-500 to-blue-600', bg: 'bg-sky-50 dark:bg-sky-900/20', border: 'border-sky-200 dark:border-sky-700/40' },
  ],
}

// ─── Pay Bill Page ────────────────────────────────────────────────────────────
export const payBillData = {
  paymentMethods: [
    { name: 'bKash', color: 'from-pink-500 to-pink-600', bg: 'bg-pink-50 dark:bg-pink-500/10', border: 'border-pink-200 dark:border-pink-500/30', icon: 'CreditCard', number: '01XXXXXXXXX', steps: ['Open bKash app', 'Tap "Send Money"', 'Enter merchant number', 'Enter amount & confirm'] },
    { name: 'Nagad', color: 'from-orange-500 to-orange-600', bg: 'bg-orange-50 dark:bg-orange-500/10', border: 'border-orange-200 dark:border-orange-500/30', icon: 'Smartphone', number: '01XXXXXXXXX', steps: ['Open Nagad app', 'Tap "Send Money"', 'Enter merchant number', 'Enter amount & confirm'] },
    { name: 'Rocket (DBBL)', color: 'from-purple-500 to-purple-600', bg: 'bg-purple-50 dark:bg-purple-500/10', border: 'border-purple-200 dark:border-purple-500/30', icon: 'Rocket', number: '01XXXXXXXXX', steps: ['Dial *322#', 'Select "Send Money"', 'Enter merchant number', 'Enter amount & PIN'] },
    { name: 'Internet Banking', color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50 dark:bg-blue-500/10', border: 'border-blue-200 dark:border-blue-500/30', icon: 'Landmark', number: 'A/C: 12345678901', steps: ['Log in to your bank', 'Go to Fund Transfer', 'Add Red Data as payee', 'Transfer & note your User ID'] },
    { name: 'Card Payment', color: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-500/10', border: 'border-emerald-200 dark:border-emerald-500/30', icon: 'CreditCard', number: 'VISA / Mastercard', steps: ['Go to Self Corner portal', 'Select "Pay Bill"', 'Choose Card option', 'Enter card details & pay'] },
    { name: 'Cash / Walk-in', color: 'from-slate-500 to-slate-600', bg: 'bg-slate-50 dark:bg-slate-700/30', border: 'border-slate-200 dark:border-slate-600/50', icon: 'Building2', number: 'Office Visit', steps: ['Visit our Gulshan office', 'Bring your User ID', 'Pay at the front desk', 'Collect your receipt'] },
  ],
  faqs: [
    { q: 'When will my connection be restored after payment?', a: 'Your connection is typically restored within 5–15 minutes of payment confirmation. For bKash/Nagad payments, it may take up to 1 hour during off-hours.' },
    { q: 'What information do I need to pay?', a: 'You need your Red Data User ID/Username. This is provided when you first subscribe and is also visible when you log into Self Corner.' },
    { q: 'Is there a late payment fee?', a: 'Bills are due on the 1st of each month. A late fee may apply after the 7th. Contact support for waivers on exceptional cases.' },
    { q: 'Can I pay for multiple months at once?', a: 'Yes, advance payment is accepted. Please mention it to our support team or note it in the transaction reference.' },
  ],
}

// ─── Self Corner Page ─────────────────────────────────────────────────────────
export const selfCornerData = {
  features: [
    { icon: 'BarChart2', title: 'Account Overview', desc: 'View your current plan, usage data, and subscription details at a glance.' },
    { icon: 'CreditCard', title: 'Online Bill Payment', desc: 'Pay your monthly bills quickly and securely using bKash, Nagad, card, or bank transfer.' },
    { icon: 'FileText', title: 'Payment History', desc: 'Access your complete payment records and download invoices anytime.' },
    { icon: 'RefreshCw', title: 'Plan Upgrade / Change', desc: 'Easily upgrade or switch your internet plan based on your current needs.' },
    { icon: 'Ticket', title: 'Support Tickets', desc: 'Raise and track support requests directly from your portal without calling.' },
    { icon: 'Radio', title: 'Connection Status', desc: 'Monitor your connection health and get real-time network status updates.' },
  ],
}

// ─── Home Internet Page ─────────────────────────────────────────────────────
export const homeInternetPageData = {
  plans: [
    { name: 'Rose',     price: 525,  base: 500,  vat: 25,  speed: 15,  oneTime: 2500, talkTime: 50,  ott: 0, tag: 'Starter',          tagColor: 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300',         popular: false, color: 'from-pink-400 to-rose-500' },
    { name: 'Cherry',   price: 630,  base: 600,  vat: 30,  speed: 20,  oneTime: 2500, talkTime: 50,  ott: 0, tag: 'Most Popular',      tagColor: 'bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-300',             popular: true,  color: 'from-red-500 to-rose-600' },
    { name: 'Raspberry',price: 735,  base: 700,  vat: 35,  speed: 30,  oneTime: 2000, talkTime: 100, ott: 0, tag: 'Customer Favorite', tagColor: 'bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300', popular: false, color: 'from-rose-500 to-red-600' },
    { name: 'Maroon',   price: 840,  base: 800,  vat: 40,  speed: 40,  oneTime: 1500, talkTime: 150, ott: 1, tag: 'Family Plan',       tagColor: 'bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300', popular: false, color: 'from-rose-600 to-red-700' },
    { name: 'Scarlet',  price: 1050, base: 1000, vat: 50,  speed: 50,  oneTime: 1000, talkTime: 200, ott: 1, tag: 'Affordable',        tagColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300', popular: false, color: 'from-red-500 to-red-700' },
    { name: 'Crimson',  price: 1260, base: 1200, vat: 60,  speed: 60,  oneTime: 1000, talkTime: 250, ott: 1, tag: 'Popular',           tagColor: 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300',             popular: false, color: 'from-red-600 to-rose-800' },
    { name: 'Ruby',     price: 1890, base: 1800, vat: 90,  speed: 70,  oneTime: 500,  talkTime: 300, ott: 2, tag: 'Streaming Friendly',tagColor: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',         popular: false, color: 'from-rose-700 to-red-900' },
    { name: 'Carmine',  price: 2520, base: 2400, vat: 120, speed: 100, oneTime: 0,    talkTime: 450, ott: 2, tag: 'Best Value',        tagColor: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300',     popular: false, color: 'from-red-700 to-rose-900' },
  ],
  benefits: [
    { icon: 'Zap', title: 'Blazing Fast Speeds',  desc: 'Unmatched download & upload speeds for a smooth online experience.' },
    { icon: 'Shield', title: 'Guaranteed Uptime',    desc: '99.9% uptime SLA with proactive monitoring round the clock.' },
    { icon: 'Infinity', title: 'Unlimited Data',        desc: 'No data cap, no throttling — stream, game, and browse freely.' },
    { icon: 'Phone', title: '24/7 Support',          desc: 'Dedicated support team available any hour of the day.' },
    { icon: 'DollarSign', title: 'Free Installation',     desc: 'No hidden charges — professional install at zero cost.' },
    { icon: 'Radio', title: 'Fiber Optic Network',   desc: 'Built on future-proof fiber infrastructure.' },
  ],
}

// ─── Homepage Contact Section ─────────────────────────────────────────────────
export const homeContactMethods = [
  { iconKey: 'phone',    label: 'Hotline',   value: '+880-9640-112233',         href: 'tel:+8809640112233',                                          note: '24 / 7 Support' },
  { iconKey: 'headset',  label: 'Help Desk', value: '+880-9640-123123',         href: 'tel:+8809640123123',                                          note: 'Billing & Technical' },
  { iconKey: 'email',    label: 'Email',     value: 'info@reddata.com.bd',      href: 'mailto:info@reddata.com.bd',                                  note: 'Reply within 2 hours' },
  { iconKey: 'whatsapp', label: 'WhatsApp',  value: '+880 1971-521964',         href: 'https://wa.me/+8801971521964',                                note: 'Quick chat support',    external: true },
  { iconKey: 'messenger',label: 'Messenger', value: 'Message Red Data',         href: 'https://www.facebook.com/profile.php?id=61556093758540',      note: 'Fast response via FB',  external: true },
  { iconKey: 'location', label: 'Office',    value: 'Level 19, SimpleTree Attalika', href: 'https://maps.google.com/?q=134+Gulshan+Avenue+Dhaka',   note: '134 Gulshan Ave, Dhaka-1212', external: true },
]

// ─── Corporate Internet Page ──────────────────────────────────────────────────
export const corporateInternetPageData = {
  fiberFeatures: [
    { icon: 'Zap',       title: 'Blazing Fast Speeds',      title_bn: 'অতি দ্রুত গতি',            desc: 'Enjoy download and upload speeds that are unparalleled, providing a smooth and efficient online experience for your entire enterprise.', desc_bn: 'আনপ্যারালেলড ডাউনলোড ও আপলোড স্পিড উপভোগ করুন, যা আপনার পুরো এন্টারপ্রাইজের জন্য মসৃণ অনলাইন অভিজ্ঞতা দেয়।' },
    { icon: 'Shield',    title: 'Reliability',               title_bn: 'নির্ভরযোগ্যতা',             desc: 'Our fiber optic network is built to withstand various environmental factors, offering consistent performance and minimal downtime.', desc_bn: 'আমাদের ফাইবার অপটিক নেটওয়ার্ক বিভিন্ন পরিবেশগত কারণ সহ্য করতে তৈরি, ধারাবাহিক পারফরম্যান্স ও ন্যূনতম ডাউনটাইম নিশ্চিত করে।' },
    { icon: 'Infinity',  title: 'Unlimited Bandwidth',       title_bn: 'আনলিমিটেড ব্যান্ডউইথ',     desc: 'With virtually unlimited bandwidth, our fiber optic service supports multiple devices and high-demand applications without any lag.', desc_bn: 'আনলিমিটেড ব্যান্ডউইথ দিয়ে আমাদের ফাইবার সার্ভিস একাধিক ডিভাইস ও হাই-ডিমান্ড অ্যাপ কোনো ল্যাগ ছাড়াই সাপোর্ট করে।' },
    { icon: 'Lightbulb', title: 'Future-Proof Technology',   title_bn: 'ভবিষ্যৎমুখী প্রযুক্তি',    desc: 'As the most advanced internet technology available, fiber optics is designed to handle future technological advancements and increasing data demands.', desc_bn: 'সবচেয়ে উন্নত ইন্টারনেট প্রযুক্তি হিসেবে ফাইবার অপটিক্স ভবিষ্যতের প্রযুক্তিগত অগ্রগতি ও বর্ধমান ডেটা চাহিদা মোকাবেলায় ডিজাইন করা হয়েছে।' },
    { icon: 'Sparkles',  title: 'Superior Quality',          title_bn: 'উচ্চমানের সার্ভিস',         desc: 'Experience high-definition streaming, crystal-clear video calls, and lightning-fast downloads with our top-notch enterprise service.', desc_bn: 'হাই-ডেফিনিশন স্ট্রিমিং, স্পষ্ট ভিডিও কল ও দ্রুত ডাউনলোড উপভোগ করুন আমাদের টপ-নচ এন্টারপ্রাইজ সার্ভিসে।' },
  ],
  whyUs: [
    { icon: 'Link2',      title: 'Free Integration',                   title_bn: 'বিনামূল্যে ইন্টিগ্রেশন',      desc: 'Seamless integration with your existing network infrastructure at no extra cost.', desc_bn: 'কোনো অতিরিক্ত খরচ ছাড়াই আপনার বিদ্যমান নেটওয়ার্ক ইনফ্রাস্ট্রাকচারের সাথে নিরবচ্ছিন্ন ইন্টিগ্রেশন।' },
    { icon: 'Zap',        title: 'Fast Installation',                   title_bn: 'দ্রুত ইনস্টলেশন',            desc: 'Professional setup and activation within 2–3 business days.', desc_bn: '২-৩ কার্যদিবসের মধ্যে পেশাদার সেটআপ ও সক্রিয়করণ।' },
    { icon: 'Network',    title: 'Reliable & Blazing-Fast Speeds',      title_bn: 'নির্ভরযোগ্য ও অতি দ্রুত গতি', desc: 'Dedicated bandwidth ensuring consistent performance for your business.', desc_bn: 'ডেডিকেটেড ব্যান্ডউইথ আপনার ব্যবসায়ের ধারাবাহিক পারফরম্যান্স নিশ্চিত করে।' },
    { icon: 'DollarSign', title: 'Competitive Pricing',                 title_bn: 'প্রতিযোগিতামূলক মূল্য',      desc: 'BTRC approved transparent tariffs with no hidden charges or lock-in contracts.', desc_bn: 'BTRC অনুমোদিত স্বচ্ছ ট্যারিফ — কোনো লুকানো চার্জ বা লক-ইন চুক্তি নেই।' },
    { icon: 'TrendingUp', title: 'Commitment to Improvement',           title_bn: 'ক্রমাগত উন্নতির প্রতিশ্রুতি', desc: 'We continuously invest in network upgrades to deliver the best service.', desc_bn: 'আমরা সেরা সেবা দিতে নিরন্তর নেটওয়ার্ক আপগ্রেডে বিনিয়োগ করি।' },
    { icon: 'Headphones', title: '24x7 Proactive Support',              title_bn: '২৪x৭ প্রোঅ্যাক্টিভ সহায়তা', desc: 'Round-the-clock dedicated support team ready to resolve any issue fast.', desc_bn: 'সার্বক্ষণিক ডেডিকেটেড সাপোর্ট দল যেকোনো সমস্যা দ্রুত সমাধানে সদা প্রস্তুত।' },
  ],
  stats: [
    { num: '10,000+', label: 'Enterprise Clients' },
    { num: '99.9%',   label: 'Uptime SLA' },
    { num: '24/7',    label: 'Dedicated Support' },
    { num: '64',      label: 'Districts Covered' },
  ],
}

