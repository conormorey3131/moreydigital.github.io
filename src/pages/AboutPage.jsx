import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Heart,
  Lightbulb,
  Handshake,
  MessageCircle,
  Target,
  Store,
  ShoppingBag,
  Building2,
  UtensilsCrossed,
  Wrench,
  Palette,
  MapPin,
  UserCheck,
  Unlock,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

/* ─── SEO ─── */
function PageMeta() {
  useEffect(() => {
    document.title = 'About Morey Digital | Irish Web Design & Digital Agency'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Meet Morey Digital \u2014 a boutique web design agency serving Limerick, Clare, and businesses across Ireland. Expert website development and Shopify solutions.')
    }
  }, [])
  return null
}

/*
 * ─── VALUES DATA ───
 * NOTE: Values are inferred from the tone and positioning in about.html,
 * which emphasises excellence, innovation, technical expertise, partnership,
 * and plain-English communication. Review and adjust as needed.
 */
const valuesData = [
  {
    icon: Heart,
    title: 'Passion for the Craft',
    desc: 'Conor has been building websites since he was 11 years old. That passion for technology and building things that work drives everything we do \u2014 from the first conversation to the finished product.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Excellence',
    desc: 'We don\u2019t cut corners or rely on templates. Every project reflects our commitment to quality \u2014 thoughtful design, clean code, and digital experiences that actually help businesses grow.',
  },
  {
    icon: Handshake,
    title: 'Trusted Digital Partner',
    desc: 'We\u2019re not a faceless agency. We work closely with every client as a genuine partner \u2014 understanding your business, your goals, and what success looks like for you.',
  },
  {
    icon: MessageCircle,
    title: 'Plain English, Always',
    desc: 'No jargon, no technobabble, no confusing proposals. We explain everything clearly so you always know what you\u2019re getting, what it costs, and why it matters for your business.',
  },
  {
    icon: Target,
    title: 'Results That Matter',
    desc: 'A beautiful website means nothing if it doesn\u2019t perform. We design and build with a clear focus on what matters to your business \u2014 visibility, enquiries, and growth.',
  },
]

/* ─── WHO WE SERVE DATA ─── */
const serveCards = [
  {
    icon: Wrench,
    title: 'Tradespeople & Local Services',
    desc: 'Electricians, plumbers, landscapers, cleaners, and every tradesperson who needs a professional website that generates local enquiries and phone calls.',
  },
  {
    icon: Store,
    title: 'Small & Medium Businesses',
    desc: 'From startups seeking a stunning online presence to established businesses that need custom web solutions \u2014 we help Irish SMEs compete online.',
  },
  {
    icon: ShoppingBag,
    title: 'eCommerce & Retail',
    desc: 'Online stores built to convert \u2014 Shopify, WooCommerce, and custom store design with payment and shipping integration and ongoing support.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Hospitality & Tourism',
    desc: 'Hotels, B&Bs, restaurants, and tourism businesses who need a website that looks as good as the experience they offer \u2014 with booking integrations and mobile-first design.',
  },
  {
    icon: Building2,
    title: 'Professional Services',
    desc: 'Accountants, solicitors, consultants, and professional firms who want a website that reflects the quality of their work and builds client confidence.',
  },
  {
    icon: Palette,
    title: 'Creative & Personal Brands',
    desc: 'Photographers, designers, coaches, and personal brands who need a distinctive online presence that stands out and tells their story effectively.',
  },
]

/* ─── DIFFERENTIATORS DATA ─── */
const diffCards = [
  {
    icon: MapPin,
    title: 'Irish-Based, Irish-Focused',
    desc: 'We\u2019re based in Limerick and Clare, serving businesses right across Ireland. We understand the Irish market, the local competitive landscape, and what Irish customers expect from a business website.',
  },
  {
    icon: UserCheck,
    title: 'One Point of Contact',
    desc: 'When you work with Morey Digital, you deal directly with Conor \u2014 not a rotating cast of account managers. You get personal, consistent service from someone who actually knows your project inside and out.',
  },
  {
    icon: Unlock,
    title: 'No Long-Term Lock-Ins',
    desc: 'We don\u2019t tie you into lengthy contracts. Our management plans are month-to-month because we believe the quality of our work should be the reason you stay \u2014 not a contract.',
  },
]

/* ─── PAGE COMPONENT ─── */
export default function AboutPage() {
  const heroRef = useReveal()
  const storyRef = useReveal()
  const valuesRef = useReveal()
  const serveRef = useReveal()
  const diffRef = useReveal()
  const ctaRef = useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PageMeta />

      {/* ── 1. PAGE HERO ── */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-dots" />
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '45%', '--glow-y': '45%' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-jade/10 border border-jade/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-jade animate-pulse" />
              <span className="text-jade text-xs font-body font-medium uppercase tracking-wider">About Morey Digital</span>
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 break-words">
              Crafting Powerful Digital Experiences &mdash;{' '}
              <span className="text-jade">Designed to Help Your Business Grow</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-body font-medium leading-relaxed mb-4 max-w-3xl mx-auto">
              A boutique web design agency serving Limerick, Clare, and businesses across Ireland. We specialise in custom websites, online stores, and ongoing website care with premium support.
            </p>

            <p className="text-gray-400 font-body text-sm leading-relaxed mb-10 max-w-3xl mx-auto">
              We don&rsquo;t just build websites &mdash; we craft digital experiences designed to help businesses grow, rank, and convert. Whether you&rsquo;re a startup seeking a stunning online presence, an established business that needs custom web solutions, or a brand looking to improve search rankings, Morey Digital is your trusted digital partner.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jade text-dark font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-base"
            >
              Get in Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. OUR STORY ── */}
      <section ref={storyRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Our Story</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              The Person Behind Morey Digital
            </h2>
          </div>

          <div className="reveal">
            <div className="glass-card p-8 sm:p-10">
              <div className="space-y-5">
                <p className="text-gray-300 font-body text-base leading-relaxed">
                  Morey Digital was founded by <strong className="text-white">Conor Morey</strong> &mdash; Founder & Managing Director. Conor is the driving force behind the business. With a passion for technology ignited at a young age, he&rsquo;s been building websites since he was just 11 years old. Based in Limerick and serving clients across Ireland, Conor combines his deep-rooted technical expertise with a strategic vision to help businesses succeed online.
                </p>
                <p className="text-gray-300 font-body text-base leading-relaxed">
                  He ensures every project reflects Morey Digital&rsquo;s commitment to innovation and excellence. Creative thinking, problem-solving, and a genuine care for each client&rsquo;s success are at the heart of the approach. Whether it&rsquo;s a brochure website for a local tradesperson or a full eCommerce store, the same standard of quality and attention goes into every build.
                </p>
                <p className="text-gray-300 font-body text-base leading-relaxed">
                  Morey Digital is deliberately boutique. That means you deal directly with Conor &mdash; not a revolving door of account managers or junior developers. You get honest advice, clear communication, and a partner who genuinely cares whether your website delivers results for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR CORE VALUES ── */}
      <section ref={valuesRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '40%' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">What We Stand For</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              Our Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 reveal-stagger">
            {valuesData.map((val, i) => (
              <div
                key={val.title}
                className="reveal glass-card glass-card-hover p-7 text-center transition-all"
                style={{ '--reveal-index': i }}
              >
                <div className="w-14 h-14 rounded-2xl bg-jade/10 border border-jade/20 flex items-center justify-center mx-auto mb-5">
                  <val.icon size={28} className="text-jade" />
                </div>
                <h3 className="font-heading font-bold text-base text-white mb-3">{val.title}</h3>
                <p className="text-gray-400 font-body text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHO WE SERVE ── */}
      <section ref={serveRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Who We Work With</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              Who We Serve
            </h2>
            <p className="text-gray-400 font-body mt-4 max-w-2xl mx-auto">
              We work with businesses of all sizes across Ireland &mdash; from sole traders and startups to established brands and growing eCommerce stores.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
            {serveCards.map((card, i) => (
              <div
                key={card.title}
                className="reveal glass-card glass-card-hover p-8 transition-all"
                style={{ '--reveal-index': i }}
              >
                <div className="w-14 h-14 rounded-2xl bg-jade/10 border border-jade/20 flex items-center justify-center mb-5">
                  <card.icon size={28} className="text-jade" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 font-body text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY MOREY DIGITAL ── */}
      <section ref={diffRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '40%', '--glow-y': '50%' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Why Us</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              Why Businesses Choose Morey Digital
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
            {diffCards.map((card, i) => (
              <div
                key={card.title}
                className="reveal glass-card glass-card-hover p-8 border-t-[3px] border-t-jade transition-all"
                style={{ '--reveal-index': i }}
              >
                <div className="w-14 h-14 rounded-2xl bg-jade/10 border border-jade/20 flex items-center justify-center mb-5">
                  <card.icon size={28} className="text-jade" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 font-body text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA ── */}
      <section ref={ctaRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '50%' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Ready to Build Something That Works for Your Business?
            </h2>
            <p className="text-gray-400 font-body text-lg mb-8 max-w-xl mx-auto">
              Whether you need a new website, better Google visibility, or someone to manage what you already have &mdash; we&rsquo;d love to have a chat.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jade text-dark font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-base"
            >
              Get in Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="mt-6">
              <Link
                to="/services"
                className="text-jade font-heading font-semibold text-sm hover:underline inline-flex items-center gap-1"
              >
                Or explore our Services
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
