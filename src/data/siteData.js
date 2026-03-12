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
      { label: 'Corporate Internet', href: 'https://reddata.com.bd/corporate-internet', icon: '🏢', desc: 'Dedicated enterprise bandwidth' },
      { label: 'Home Internet', href: 'https://reddata.com.bd/home-internet', icon: '🏠', desc: 'High-speed residential plans' },
      { label: 'Data Connectivity', href: 'https://reddata.com.bd/data-connectivity', icon: '🔗', desc: 'Fiber-backed inter-office links' },
      { label: 'IP Telephony', href: 'https://reddata.com.bd/ip-telephony', icon: '📞', desc: 'VoIP & cloud PBX solutions' },
      { label: 'SMS Service', href: 'https://reddata.com.bd/sms-service', icon: '💬', desc: 'Bulk messaging & OTP gateway' },
      { label: 'Domain & Hosting', href: 'https://reddata.com.bd/domain-hosting', icon: '🌐', desc: 'Domains, NVMe hosting & SSL' },
      { label: 'Managed Services', href: 'https://reddata.com.bd/managed-service', icon: '🛡️', desc: '24/7 IT infrastructure management' },
    ],
  },
  { label: 'Why Us', href: '#why-us' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

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
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&fit=crop',
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
      icon: '📋',
      title: 'Choose Your Plan',
      title_bn: 'প্ল্যান বেছে নিন',
      description:
        'Browse our home or corporate internet packages and pick the one that fits your speed needs and budget. All plans are BTRC approved.',
      description_bn:
        'আমাদের হোম বা কর্পোরেট ইন্টারনেট প্যাকেজ দেখুন এবং আপনার প্রয়োজন ও বাজেট অনুযায়ী বেছে নিন। সকল প্ল্যান BTRC অনুমোদিত।',
    },
    {
      number: '02',
      icon: '📞',
      title: 'Contact & Confirm',
      title_bn: 'যোগাযোগ করুন ও নিশ্চিত করুন',
      description:
        'Call our helpline, WhatsApp us, or fill the online form. Our team will confirm coverage in your area within minutes.',
      description_bn:
        'আমাদের হেল্পলাইনে কল করুন, WhatsApp করুন বা অনলাইন ফর্ম পূরণ করুন। আমাদের দল কয়েক মিনিটের মধ্যে এলাকায় কভারেজ নিশ্চিত করবে।',
    },
    {
      number: '03',
      icon: '🔧',
      title: 'Free Installation',
      title_bn: 'বিনামূল্যে ইনস্টলেশন',
      description:
        'Our certified engineers visit your location and complete the full setup — router, cabling, and configuration — at zero charge.',
      description_bn:
        'আমাদের সার্টিফাইড ইঞ্জিনিয়াররা আপনার ঠিকানায় এসে রাউটার, ক্যাবলিং ও কনফিগারেশনসহ সম্পূর্ণ সেটআপ বিনামূল্যে সম্পন্ন করবেন।',
    },
    {
      number: '04',
      icon: '🚀',
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
      icon: '🏢',
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
      icon: '🏠',
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
      icon: '🔗',
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
      icon: '📞',
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
      icon: '💬',
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
      icon: '🌐',
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
      icon: '🛡️',
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
  { value: '12+', label: 'Years Experience', label_bn: 'যুগুন্ত অভিজ্ঞতা', description: 'Serving homes and businesses since 2012', description_bn: '২০১২ সাল থেকে ঘর ও ব্যবসায় সেবা প্রদান' },
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
    { icon: '⚡', title: 'Free Integration', title_bn: 'বিনামূল্যে ইন্টিগ্রেশন', description: 'We set up everything from scratch — no hidden charges, no hassle.', description_bn: 'আমরা শুরু থেকে সবকিছু সেটআপ করি — কোনো লুকানো চার্জ নেই, কোনো ঝামেলা নেই।' },
    { icon: '🚀', title: 'Fast Installation', title_bn: 'দ্রুত ইনস্টলেশন', description: 'Get connected within 24 hours of sign-up with our rapid deployment team.', description_bn: 'সাইন আপের ২৪ ঘণ্টার মধ্যে আমাদের দ্রুত ডিপ্লয়মেন্ট দল সংযুক্ত করবে।' },
    { icon: '🔒', title: 'Blazing-Fast & Secure', title_bn: 'দ্রুততম ও নিরাপদ', description: 'Fiber-grade speeds with enterprise-class network security at every level.', description_bn: 'ফাইবার-গ্রেড গতি এবং সব স্তরে এন্টারপ্রাইজ-ক্লাস নেটওয়ার্ক সিকিউরিটি।' },
    { icon: '💰', title: 'Competitive Pricing', title_bn: 'প্রতিযোগিতামূলক মূল্য', description: 'Premium performance without premium price tags. BTRC approved tariff.', description_bn: 'প্রিমিয়াম পারফর্মান্স, প্রিমিয়াম মূল্য ছাড়াই। BTRC অনুমোদিত ট্যারিফ।' },
    { icon: '📈', title: 'Continuous Improvement', title_bn: 'নিরন্তর উন্নতি', description: 'We invest constantly in network upgrades to keep you ahead of demand.', description_bn: 'আমরা নিরন্তর নেটওয়ার্ক আপগ্রেডে বিনিয়োগ করি।' },
    { icon: '🎧', title: '24×7 Proactive Support', title_bn: '২৪×৭ প্রোঅ্যাক্টিভ সহায়তা', description: 'Our NOC team monitors your connection around the clock so issues are resolved before you notice them.', description_bn: 'আমাদের NOC দল সার্বক্ষণিক আপনার সংযোগ মনিটর করে, যেন সমস্যা বোঝার আগেই সমাধান হয়।' },
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
      price: '৳735',
      period: '/month',
      period_bn: '/মাস',
      oneTime: '৳2,000 one-time setup',
      oneTime_bn: '৳২,০০০ এককালীন সেটআপ',
      bandwidth: '30 Mbps',
      popular: false,
      features: [
        '30 Mbps Bandwidth',
        'Buffer-less Social & YouTube',
        'Unlimited Device Support',
        '100 Min TalkTime',
        '24/7 Customer Care',
        'Free Installation',
      ],
      features_bn: [
        '৩০ Mbps ব্যান্ডউইথ',
        'বাফার-মুক্ত সোশ্যাল ও YouTube',
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
      price: '৳840',
      period: '/month',
      period_bn: '/মাস',
      oneTime: '৳1,500 one-time setup',
      oneTime_bn: '৳১,৫০০ এককালীন সেটআপ',
      bandwidth: '40 Mbps',
      popular: true,
      features: [
        '40 Mbps Bandwidth',
        'Buffer-less Social & YouTube',
        'Unlimited Device Support',
        '150 Min TalkTime',
        '1 OTT Subscription',
        '24/7 Customer Care',
      ],
      features_bn: [
        '৪০ Mbps ব্যান্ডউইথ',
        'বাফার-মুক্ত সোশ্যাল ও YouTube',
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
      price: '৳1,050',
      period: '/month',
      period_bn: '/মাস',
      oneTime: '৳1,000 one-time setup',
      oneTime_bn: '৳১,০০০ এককালীন সেটআপ',
      bandwidth: '50 Mbps',
      popular: false,
      features: [
        '50 Mbps Bandwidth',
        'Buffer-less Social & YouTube',
        'Unlimited Device Support',
        '200 Min TalkTime',
        '1 OTT Subscription',
        '24/7 Customer Care',
      ],
      features_bn: [
        '৫০ Mbps ব্যান্ডউইথ',
        'বাফার-মুক্ত সোশ্যাল ও YouTube',
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
        { label: 'Home Internet', href: 'https://reddata.com.bd/home-internet' },
        { label: 'Corporate Internet', href: 'https://reddata.com.bd/corporate-internet' },
        { label: 'Data Connectivity', href: 'https://reddata.com.bd/data-connectivity' },
        { label: 'IP Telephony', href: 'https://reddata.com.bd/ip-telephony' },
        { label: 'SMS Service', href: 'https://reddata.com.bd/sms-service' },
        { label: 'Domain & Hosting', href: 'https://reddata.com.bd/domain-hosting' },
        { label: 'Managed Services', href: 'https://reddata.com.bd/managed-service' },
      ],
    },
    {
      heading: 'Company',
      heading_bn: 'কোম্পানি',
      links: [
        { label: 'About Us', href: 'https://reddata.com.bd/aboutus' },
        { label: 'Why Choose Us', href: '#why-us' },
        { label: 'Area Coverage', href: 'https://reddata.com.bd/area-coverage' },
        { label: 'News & Blog', href: 'https://reddata.com.bd/blogs' },
        { label: 'Pay Bill', href: 'https://reddata.com.bd/paybill' },
        { label: 'BTRC Approved Tariff', href: 'https://reddata.com.bd/tariff.pdf' },
      ],
    },
    {
      heading: 'Support',
      heading_bn: 'সহায়তা',
      links: [
        { label: 'Contact Us', href: 'https://reddata.com.bd/contact' },
        { label: 'Self Care Portal', href: 'https://reddata.com.bd' },
        { label: 'Helpline: 09640-112233', href: 'tel:+8809640112233' },
        { label: 'HelpDesk: 09640-123123', href: 'tel:+8809640123123' },
        { label: 'WhatsApp Us', href: 'https://wa.me/+8801971521964' },
        { label: 'Facebook Messenger', href: 'https://www.facebook.com/profile.php?id=61556093758540' },
      ],
    },
  ],
  copyright: '© 2026 Red Data (Pvt.) Limited. All rights reserved.',
}
