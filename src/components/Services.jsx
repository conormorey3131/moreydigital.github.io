import {
  Globe,
  Settings,
  Search,
  ShoppingCart,
  Palette,
  TrendingUp,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const services = [
  {
    icon: Globe,
    title: 'Website Design & Development',
    desc: 'Custom-built sites that look sharp and work hard — on every device.',
    bullets: [
      'Mobile-first responsive design that works on every screen',
      'Fast-loading pages optimised for performance',
      'Clear calls-to-action that drive enquiries',
      'Built to grow with your business over time',
      'No templates — every site is designed from scratch',
    ],
  },
  {
    icon: Settings,
    title: 'Website Management & Maintenance',
    desc: 'We keep your site running, updated, and secure — so you don\'t have to.',
    bullets: [
      'Monthly content and design updates included',
      'Security monitoring and software patches',
      'Uptime tracking and performance reports',
      'Priority support when something needs fixing',
      'Hassle-free — we handle it all behind the scenes',
    ],
  },
  {
    icon: Search,
    title: 'SEO & Google Business Optimisation',
    desc: 'Get found when it matters — by the right people, in the right area.',
    bullets: [
      'Local SEO so you rank where your customers search',
      'Google Business Profile setup and optimisation',
      'Keyword research tailored to your industry',
      'On-page SEO built into every page we deliver',
      'Monthly reporting on rankings and traffic growth',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'eCommerce Development & Support',
    desc: 'Online stores built to sell — with secure checkout and easy management.',
    bullets: [
      'Shopify and custom eCommerce store setup',
      'Product catalogue and inventory management',
      'Secure payment and shipping integration',
      'Mobile-friendly shopping experience',
      'Ongoing support to keep your store running smoothly',
    ],
  },
  {
    icon: Palette,
    title: 'Branding & Digital Assets',
    desc: 'A consistent visual identity that builds trust from the first click.',
    bullets: [
      'Logo design and brand identity packages',
      'Social media graphics and templates',
      'Business card and stationery design',
      'Brand guidelines for consistent messaging',
      'Digital-first assets ready for web and print',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Ongoing Growth Support',
    desc: 'We don\'t just build your site — we help your business grow online.',
    bullets: [
      'Monthly strategy check-ins and recommendations',
      'Conversion tracking and performance insights',
      'Content updates to keep your site fresh and relevant',
      'New feature rollouts as your business evolves',
      'A dedicated partner invested in your success',
    ],
  },
]

export default function Services() {
  const ref = useReveal()

  return (
    <section id="services" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '70%', '--glow-y': '20%' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 reveal">
          <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">What We Do</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
            Everything You Need to Succeed Online
          </h2>
          <p className="text-gray-400 font-body mt-4 max-w-2xl mx-auto">
            We don't just build websites — we cover design, SEO, eCommerce, branding, and ongoing support. One team for everything digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="reveal glass-card glass-card-hover p-7 transition-all"
              style={{ '--reveal-index': i }}
            >
              <div className="w-11 h-11 rounded-xl bg-jade/10 flex items-center justify-center mb-4">
                <svc.icon size={22} className="text-jade" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">{svc.title}</h3>
              <p className="text-gray-400 font-body text-sm mb-4">{svc.desc}</p>
              <ul className="space-y-2">
                {svc.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-400 font-body">
                    <span className="text-jade mt-1 text-xs">&#10003;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
