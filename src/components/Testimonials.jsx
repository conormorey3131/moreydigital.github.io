import { Star } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const testimonials = [
  {
    name: 'The Vamp Lingerie Team',
    business: 'Google Review',
    quote: 'We recently had the pleasure of working with Morey Digital to develop our online store for Vamp Lingerie in Limerick, and we couldn\'t be more thrilled with the results! From the initial consultation to the final launch, the team was incredibly professional, creative, and detail-oriented. They took the time to understand our brand\'s vision and translated it into a sleek, user-friendly, and highly functional e-commerce site.',
    stars: 5,
  },
  {
    name: 'Nurgiza Kalybaeva',
    business: 'Google Review',
    quote: 'I would like to thank Conor for the amazing work on our website! Everything was done professionally, with great attention to detail and a clear understanding of our requirements. Working with him was easy and enjoyable, all questions were resolved quickly, and the result exceeded our expectations. The website turned out modern, user-friendly, and visually appealing, and we are extremely satisfied with the outcome. I highly recommend Conor to anyone who values professionalism and client care.',
    stars: 5,
  },
]

export default function Testimonials() {
  const ref = useReveal()

  return (
    <section id="testimonials" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 glow-jade-subtle" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 reveal">
          <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 font-body mt-4 max-w-2xl mx-auto">
            Real reviews from real clients — see what businesses have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto reveal-stagger">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal glass-card glass-card-hover p-8 transition-all"
              style={{ '--reveal-index': i }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} size={16} className="text-jade fill-jade" />
                ))}
              </div>

              <p className="text-gray-300 font-body text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-jade/10 border border-jade/20 flex items-center justify-center">
                  <span className="text-jade font-heading font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-white font-heading font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 font-body text-xs">{t.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
