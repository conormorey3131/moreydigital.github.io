import { Link } from 'react-router-dom'
import { ArrowRight, Phone, MessageSquare } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function CTASection() {
  const ref = useReveal()

  return (
    <section id="cta" ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-[#1A3C6E]">
      <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '50%' }} />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <div className="reveal">
          <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Let's Talk</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mt-4 mb-6">
            Ready for a Better Online Presence?
          </h2>
          <p className="text-white/80 font-body text-lg mb-8 max-w-xl mx-auto">
            No commitment. No jargon. Just a quick chat about your business and how we can help you grow online. Call, WhatsApp, or send us a message.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jade text-white font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-base"
            >
              Get a Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+353873999296"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white font-heading font-semibold rounded-lg hover:bg-white/5 transition-all text-base"
            >
              <Phone size={18} />
              Call Us
            </a>
            <a
              href="https://wa.me/353873999296"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white font-heading font-semibold rounded-lg hover:bg-white/5 transition-all text-base"
            >
              <MessageSquare size={18} />
              WhatsApp
            </a>
          </div>

          <p className="text-white/60 font-body text-sm">
            Or email us at{' '}
            <a href="mailto:conor@moreydigital.ie" className="text-jade hover:underline">
              conor@moreydigital.ie
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
