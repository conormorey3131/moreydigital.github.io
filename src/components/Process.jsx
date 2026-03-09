import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We start by understanding your business, your customers, and what you want your website to achieve. No assumptions — just a proper conversation.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'We create a custom design tailored to your brand. You\'ll see mockups before we build anything, and we refine until you\'re completely happy.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'We develop your site with clean code, fast load times, and SEO built in from the ground up. Every page is tested on real devices before launch.',
  },
  {
    num: '04',
    title: 'Launch & Support',
    desc: 'We launch your site, set up analytics and Google Business, and stay on hand for updates, fixes, and ongoing improvements. We don\'t disappear after launch.',
  },
]

export default function Process() {
  const ref = useReveal()

  return (
    <section id="process" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 glow-jade-subtle" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 reveal">
          <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">How We Work</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
            From First Chat to Live Website
          </h2>
          <p className="text-gray-400 font-body mt-4 max-w-2xl mx-auto">
            A clear, simple process with no surprises. You'll know exactly what's happening at every stage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal glass-card glass-card-hover p-7 relative transition-all"
              style={{ '--reveal-index': i }}
            >
              <span className="font-heading font-extrabold text-5xl text-jade/10 absolute top-4 right-5">
                {step.num}
              </span>
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-jade/10 border border-jade/20 flex items-center justify-center mb-5">
                  <span className="text-jade font-heading font-bold text-sm">{step.num}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 font-body text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
