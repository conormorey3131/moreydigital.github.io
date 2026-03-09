import {
  Store,
  Car,
  Wrench,
  UtensilsCrossed,
  ShoppingBag,
  Briefcase,
  ExternalLink,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const industries = [
  { icon: Store, title: 'Local Businesses' },
  { icon: Car, title: 'Automotive' },
  { icon: Wrench, title: 'Trades & Services' },
  { icon: UtensilsCrossed, title: 'Hospitality' },
  { icon: ShoppingBag, title: 'eCommerce' },
  { icon: Briefcase, title: 'Professional Services' },
]

const base = import.meta.env.BASE_URL

const portfolio = [
  {
    title: 'Vamp Lingerie',
    category: 'eCommerce',
    desc: 'Full Shopify store build for an Irish lingerie brand — custom design, product catalogue, secure checkout and mobile-optimised shopping experience.',
    href: 'https://vamplingerie.com/',
    image: `${base}images/vamp_up.webp`,
    imageFallback: `${base}images/vamp_up.png`,
  },
  {
    title: 'Roadworks IRE',
    category: 'Business Website',
    desc: 'Professional website for an Irish traffic management company — service pages, lead generation forms, and local SEO built in from the ground up.',
    href: 'https://roadworksire.ie/',
    image: `${base}images/roadworks.webp`,
    imageFallback: `${base}images/roadworks.png`,
  },
  {
    title: 'Motor Meets',
    category: 'Automotive',
    desc: 'Event platform for Ireland\'s car meet community — event listings, galleries, and a modern design built to grow with the brand.',
    href: 'https://motormeets.ie/',
    image: `${base}images/motor.webp`,
    imageFallback: `${base}images/motor.png`,
  },
]

export default function Industries() {
  const ref = useReveal()

  return (
    <section id="industries" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '30%', '--glow-y': '60%' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 reveal">
          <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Who We Work With</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
            Built for Irish SMEs, Across Every Industry
          </h2>
          <p className="text-gray-400 font-body mt-4 max-w-2xl mx-auto">
            From local shops to professional firms — we build websites tailored to how your customers find and choose you.
          </p>
        </div>

        {/* Industry tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-20 reveal-stagger">
          {industries.map((ind, i) => (
            <div
              key={ind.title}
              className="reveal glass-card glass-card-hover p-5 text-center transition-all"
              style={{ '--reveal-index': i }}
            >
              <div className="w-11 h-11 rounded-xl bg-jade/10 flex items-center justify-center mx-auto mb-3">
                <ind.icon size={22} className="text-jade" />
              </div>
              <span className="text-white font-heading font-semibold text-sm">{ind.title}</span>
            </div>
          ))}
        </div>

        {/* Portfolio preview */}
        <div className="reveal">
          <h3 className="font-heading font-bold text-2xl text-white text-center mb-8">Recent Projects</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
          {portfolio.map((project, i) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal glass-card glass-card-hover transition-all group block"
              style={{ '--reveal-index': i }}
            >
              <div className="h-48 overflow-hidden rounded-t-[16px] bg-dark-300">
                <picture>
                  <source srcSet={project.image} type="image/webp" />
                  <img
                    src={project.imageFallback}
                    alt={`${project.title} — project by Morey Digital`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className="p-6">
                <span className="text-jade text-xs font-body font-medium uppercase tracking-wider">{project.category}</span>
                <h4 className="font-heading font-bold text-base text-white mt-1 mb-2 flex items-center gap-2">
                  {project.title}
                  <ExternalLink size={14} className="text-gray-500 group-hover:text-jade transition-colors" />
                </h4>
                <p className="text-gray-400 font-body text-sm leading-relaxed">{project.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
