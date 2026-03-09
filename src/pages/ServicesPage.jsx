import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Globe,
  Settings,
  Search,
  ShoppingCart,
  Palette,
  TrendingUp,
  MapPin,
  Target,
  MessageCircle,
  Headphones,
  SearchCheck,
  Fingerprint,
  Check,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

/* ─── SERVICE DATA ─── */
const services = [
  {
    id: 'web-design',
    icon: Globe,
    title: 'Website Design & Development',
    tagline: 'Custom websites built to convert visitors into customers.',
    description: [
      'Morey Digital designs and builds custom websites tailored to your business goals, brand, and audience. Every site is fast, mobile-first, and built on the right platform — whether that\'s WordPress, Shopify, or a custom solution.',
      'We focus on clean design, clear messaging, and conversion-focused layouts that turn visits into enquiries. We handle every detail from concept to launch — and stay on afterwards with ongoing management and support.',
    ],
    features: [
      'Custom website design tailored to your brand and business',
      'Mobile-first, responsive layouts across all screen sizes',
      'Built on WordPress, Shopify, or custom platforms',
      'Optimised for speed, SEO, and Core Web Vitals',
      'Clear calls-to-action and lead generation structure',
      'Contact forms, booking integrations, and third-party tools',
      'Staged review process — you see progress at every step',
      'Ongoing support and management plans included',
    ],
    cta: 'Start a Project',
    link: '/services/website-design-development',
  },
  {
    id: 'management',
    icon: Settings,
    title: 'Website Management & Maintenance',
    tagline: 'Monthly care that keeps your website secure, updated, and running smoothly.',
    description: [
      'Most businesses launch a website and then forget about it — until something breaks. Morey Digital offers monthly management plans that handle everything: software updates, security monitoring, backups, content changes, and performance checks.',
      'You get a website that stays in peak condition without lifting a finger. Think of it as a standing retainer for your most important digital asset.',
    ],
    features: [
      'Regular WordPress and plugin updates',
      'Daily automated backups with one-click restore',
      'Uptime monitoring and real-time alerts',
      'Security scanning and malware protection',
      'Content updates and minor edits included',
      'Monthly performance and traffic reporting',
      'Priority support with fast response times',
      'Scalable plans to match your business size',
    ],
    cta: 'View Plans',
    link: '/services/website-management',
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO & Google Business Optimisation',
    tagline: 'Get found by the customers already searching for what you offer.',
    description: [
      'If your business isn\'t showing up in local search results, you\'re invisible to potential customers. Morey Digital provides practical, results-focused SEO that improves your Google rankings, increases organic traffic, and helps you show up in the searches that matter.',
      'We also fully set up, optimise, and manage your Google Business Profile — one of the most overlooked and effective tools for Irish local businesses.',
    ],
    features: [
      'On-page SEO — titles, meta data, headings, content structure',
      'Local SEO strategy for Irish towns, cities, and regions',
      'Google Business Profile setup, optimisation, and management',
      'Keyword research targeting real buyer search terms',
      'Technical SEO — speed, indexing, Core Web Vitals',
      'Competitor gap analysis for your local market',
      'Monthly keyword ranking reports',
      'Review generation and reputation management support',
    ],
    cta: 'Improve Your Rankings',
    link: '/services/seo',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'eCommerce Development & Support',
    tagline: 'Online stores built to sell — and supported to keep selling.',
    description: [
      'Whether you\'re launching your first Shopify store or scaling an existing WooCommerce setup, Morey Digital delivers eCommerce solutions built for the Irish market. We handle design, product setup, payment integration, and ongoing support so your store looks great, converts well, and runs reliably.',
      'We also provide ongoing eCommerce management — product updates, promotional pages, performance reviews, and technical support — so you\'re never left to figure it out alone.',
    ],
    features: [
      'Shopify and WooCommerce store design and development',
      'Product catalogue setup and category structure',
      'Secure payment integration (Stripe, PayPal, and more)',
      'Mobile-optimised checkout and product pages',
      'Inventory management and order tracking setup',
      'Email marketing integration (Klaviyo, Mailchimp, etc.)',
      'Ongoing store management and product update support',
      'Performance reporting and conversion optimisation',
    ],
    cta: 'Launch Your Store',
    link: '/services/ecommerce',
  },
  {
    id: 'branding',
    icon: Palette,
    title: 'Branding & Digital Assets',
    tagline: 'Look the part across every touchpoint — online and off.',
    description: [
      'Your brand is more than a logo. It\'s the first impression every potential customer gets before they even read a word. Morey Digital provides branding and visual identity work that gives Irish businesses a professional, consistent look across their website, social media, print, and digital materials.',
      'Whether you\'re starting from scratch or refreshing an outdated look, we create brand assets that reflect where your business is going.',
    ],
    features: [
      'Logo design and brand mark creation',
      'Brand colour palette and typography system',
      'Brand guidelines document for consistent usage',
      'Social media profile graphics and cover images',
      'Business card and stationery design',
      'Email signature design',
      'Digital ad and banner creative',
      'Favicon and app icon assets',
    ],
    cta: 'Build Your Brand',
    link: '/contact',
  },
  {
    id: 'growth',
    icon: TrendingUp,
    title: 'Ongoing Growth Support',
    tagline: 'A dedicated digital partner — without the cost of hiring in-house.',
    description: [
      'For businesses that want more than just a website, Morey Digital offers ongoing growth support that evolves as your business does. This includes strategic advice, regular check-ins, new page builds, campaign landing pages, digital consultancy, and access to our full team of designers and developers whenever you need them.',
      'Think of it as having a digital department on call — without the overhead.',
    ],
    features: [
      'Dedicated account manager for your business',
      'Quarterly digital strategy and performance reviews',
      'New page builds and website expansion work',
      'Campaign landing pages for promotions and ads',
      'Google Ads and Meta Ads consultation and setup',
      'Ongoing SEO improvements and content support',
      'Digital consultancy on tools, platforms, and integrations',
      'Priority access and fast turnaround on all requests',
    ],
    cta: 'See Growth Plans',
    link: '/contact',
  },
]

/* ─── WHY US DATA ─── */
const whyItems = [
  {
    icon: MapPin,
    title: 'Irish-Based Team',
    desc: 'You\'re always dealing with someone local who understands the Irish market, your customers, and what your business actually needs.',
  },
  {
    icon: Target,
    title: 'Websites Built to Convert',
    desc: 'We don\'t just make sites look good. Every design decision is made with lead generation and enquiry conversion in mind.',
  },
  {
    icon: MessageCircle,
    title: 'No Jargon, Ever',
    desc: 'We explain what we\'re doing, why it matters, and what it means for your business — in plain English, every time.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support as Standard',
    desc: 'We offer monthly management plans so your site never becomes neglected. Regular updates, monitoring, and a team that\'s always on hand.',
  },
  {
    icon: SearchCheck,
    title: 'SEO From Day One',
    desc: 'Search visibility isn\'t an afterthought. It\'s built into every site we create and improved continuously through our managed plans.',
  },
  {
    icon: Fingerprint,
    title: 'Tailored to Your Business',
    desc: 'We don\'t use one-size-fits-all templates or generic solutions. Every project is scoped and built around your specific goals.',
  },
]

/* ─── INDIVIDUAL SERVICE BLOCK ─── */
function ServiceBlock({ service, index }) {
  const ref = useReveal()
  const reversed = index % 2 !== 0

  return (
    <div ref={ref} id={service.id} className="scroll-mt-24">
      <div
        className={`reveal glass-card p-8 sm:p-10 lg:p-12 transition-all ${
          reversed ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Header row */}
        <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Icon + title column */}
          <div className="lg:w-2/5 flex-shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-jade/10 border border-jade/20 flex items-center justify-center mb-5">
              <service.icon size={28} className="text-jade" />
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
              {service.title}
            </h3>
            <p className="text-jade font-body font-semibold text-base mb-6">
              {service.tagline}
            </p>
            {service.description.map((para, j) => (
              <p key={j} className="text-gray-400 font-body text-sm leading-relaxed mb-4">
                {para}
              </p>
            ))}
            <Link
              to={service.link || '/contact'}
              className="inline-flex items-center gap-2 mt-2 text-jade font-heading font-semibold text-sm hover:gap-3 transition-all group"
            >
              {service.cta}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Features column */}
          <div className="lg:w-3/5">
            <div className="glass-card p-6 sm:p-8 bg-white/[0.02]">
              <p className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-5">
                Key Features
              </p>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={16} className="text-jade mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 font-body text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── PAGE COMPONENT ─── */
export default function ServicesPage() {
  const heroRef = useReveal()
  const whyRef = useReveal()
  const ctaRef = useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* ── 1. PAGE HERO ── */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-dots" />
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '40%', '--glow-y': '50%' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-jade/10 border border-jade/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-jade animate-pulse" />
              <span className="text-jade text-xs font-body font-medium">Our Services</span>
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 break-words">
              Everything Your Business Needs to{' '}
              <span className="text-jade">Grow Online</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 font-body leading-relaxed mb-6 max-w-3xl mx-auto">
              From a brand-new website to ongoing SEO and monthly support — Morey Digital handles the digital side of your business so you don&rsquo;t have to.
            </p>

            <p className="text-gray-500 font-body text-sm leading-relaxed mb-10 max-w-2xl mx-auto">
              We work with Irish SMEs, tradespeople, eCommerce brands, hospitality businesses, and professional services firms across Clare, Limerick, and nationwide. Whether you need a new site from scratch or want someone to manage and grow your existing online presence, we&rsquo;ve got you covered.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jade text-dark font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-base"
            >
              Get a Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. CORE SERVICES ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">What We Do</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              Our Core Services
            </h2>
            <p className="text-gray-400 font-body mt-4 max-w-2xl mx-auto">
              Six areas of expertise. One team. Every detail handled.
            </p>
          </div>

          <div className="space-y-10">
            {services.map((svc, i) => (
              <ServiceBlock key={svc.id} service={svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE MOREY DIGITAL ── */}
      <section ref={whyRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '60%', '--glow-y': '40%' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Why Us</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              Why Choose Morey Digital?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {whyItems.map((item, i) => (
              <div
                key={item.title}
                className="reveal glass-card glass-card-hover p-7 transition-all"
                style={{ '--reveal-index': i }}
              >
                <div className="w-11 h-11 rounded-xl bg-jade/10 flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-jade" />
                </div>
                <h3 className="font-heading font-bold text-base text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FINAL CTA ── */}
      <section ref={ctaRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '50%' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Ready to Build a Better Online Presence?
            </h2>
            <p className="text-gray-400 font-body text-lg mb-8 max-w-xl mx-auto">
              Talk to the Morey Digital team today. No commitment, no jargon — just a straightforward conversation about how we can help your business grow online.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jade text-dark font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-base"
            >
              Get a Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
