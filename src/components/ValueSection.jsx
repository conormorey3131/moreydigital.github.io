import { MonitorSmartphone, Gauge, Headphones } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const cards = [
  {
    icon: MonitorSmartphone,
    title: 'First Impressions Are Everything',
    desc: 'Your website is often the first thing a potential customer sees. If it looks outdated, slow or hard to use, they\'ll leave — and choose someone else. We build sites that make the right impression from second one.',
  },
  {
    icon: Gauge,
    title: 'A Slow Site Loses You Leads',
    desc: 'Every second of load time costs you visitors. If your site takes too long, people bounce — and so does your Google ranking. We build fast, optimised sites that keep visitors engaged and convert them into customers.',
  },
  {
    icon: Headphones,
    title: 'One-Off Builds Leave You Stranded',
    desc: 'A website isn\'t a set-and-forget project. Content needs updating, security needs monitoring, and things break. We offer ongoing management so you\'re never left figuring it out on your own.',
  },
]

export default function ValueSection() {
  const ref = useReveal()

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
      <div className="absolute inset-0 glow-jade-subtle" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 reveal">
          <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Why It Matters</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
            Your Website Is Your Most Important Salesperson
          </h2>
          <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
            It works around the clock, talks to every visitor, and either wins them over or sends them to a competitor. Here's what's at stake.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="reveal glass-card glass-card-hover p-8 transition-all"
              style={{ '--reveal-index': i }}
            >
              <div className="w-12 h-12 rounded-xl bg-jade/10 flex items-center justify-center mb-5">
                <card.icon size={24} className="text-jade" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1A3C6E] mb-3">{card.title}</h3>
              <p className="text-[#555555] font-body leading-relaxed text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
