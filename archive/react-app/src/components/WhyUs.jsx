import {
  Target,
  MapPin,
  MessageCircle,
  CalendarCheck,
  SearchCheck,
  Fingerprint,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const points = [
  {
    icon: Target,
    title: 'High-Converting Websites',
    desc: 'Every page is designed with one goal — to turn visitors into customers. Clear layouts, strong calls-to-action, and zero clutter.',
  },
  {
    icon: MapPin,
    title: 'Irish-Based Support',
    desc: 'We\'re based in Clare and work with businesses across Ireland. No outsourced support, no timezone issues — just real, local help.',
  },
  {
    icon: MessageCircle,
    title: 'Plain-Language Communication',
    desc: 'No jargon, no tech-speak. We explain everything in simple terms so you always know what\'s happening with your website.',
  },
  {
    icon: CalendarCheck,
    title: 'Monthly Management Available',
    desc: 'Your site stays in expert hands with our monthly plans — updates, security, content changes, and support all handled for you.',
  },
  {
    icon: SearchCheck,
    title: 'SEO-First Approach',
    desc: 'Search engine optimisation is baked into every site from the start. We don\'t bolt it on later — we build it into the foundation.',
  },
  {
    icon: Fingerprint,
    title: 'Tailored, Not Templated',
    desc: 'We don\'t use cookie-cutter templates. Every website is custom-designed to fit your brand, your audience, and your goals.',
  },
]

export default function WhyUs() {
  const ref = useReveal()

  return (
    <section id="why-us" ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 glow-jade-subtle" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 reveal">
          <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
            6 Reasons Irish Businesses Trust Morey Digital
          </h2>
          <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
            We're not the biggest agency — and that's the point. You get direct access, honest advice, and a team that genuinely cares about your results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          {points.map((point, i) => (
            <div
              key={point.title}
              className="reveal glass-card glass-card-hover p-7 transition-all"
              style={{ '--reveal-index': i }}
            >
              <div className="w-11 h-11 rounded-xl bg-jade/10 flex items-center justify-center mb-4">
                <point.icon size={22} className="text-jade" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#1A3C6E] mb-2">{point.title}</h3>
              <p className="text-[#555555] font-body text-sm leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
