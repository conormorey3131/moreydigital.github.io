import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  ChevronDown,
  LayoutTemplate,
  BadgeCheck,
  Settings2,
  ShieldCheck,
  TrendingUp,
  MousePointerClick,
  Repeat,
  MapPin,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

/* ─── SEO ─── */
function PageMeta() {
  useEffect(() => {
    document.title = 'Custom Website Design Ireland | Morey Digital'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Morey Digital builds fully custom websites for Irish businesses. Tailored design, built around your brand, your goals, and your customers.')
    }
  }, [])
  return null
}

/* ─── BADGE PILL COMPONENT ─── */
function BadgePill({ text }) {
  return (
    <span className="inline-flex px-3 py-1.5 rounded-full bg-jade/10 border border-jade/20 text-jade text-xs font-body font-medium">
      {text}
    </span>
  )
}

/* ─── APPROACH DATA ─── */
const approachBlocks = [
  {
    title: 'Discovery & Strategy First',
    desc: 'Every successful custom website starts with understanding your business properly. We take time to learn about your goals, your customers, your competitors, and what sets you apart before a single pixel is placed. This phase shapes every decision that follows \u2014 from structure and navigation to messaging and calls-to-action.',
    pills: ['Your Goals', 'Your Audience', 'Your Market'],
  },
  {
    title: 'Designed Around Your Customers',
    desc: 'We put your customers at the centre of every design decision. That means understanding how they browse, what they\u2019re looking for, what builds their trust, and what makes them take action. The result is a website that feels effortless to use \u2014 because it\u2019s been designed specifically for the people who matter most to your business.',
    pills: ['Easy to Navigate', 'Builds Trust', 'Drives Action'],
  },
  {
    title: 'Built to Perform & Last',
    desc: 'Our development follows best practices in coding standards, performance optimisation, and security. Your custom website is fast, secure, and built on a clean foundation that\u2019s easy to maintain and extend as your business grows. No bloated page builders, no shortcut code \u2014 just a solid, professional build that works.',
    pills: ['Fast Load Times', 'Secure by Default', 'Easy to Maintain'],
  },
]

/* ─── POWER SECTIONS DATA ─── */
const powerSections = [
  {
    title: 'Your Brand, Through Every Page',
    paragraphs: [
      'Every element of a custom-designed website reinforces your brand identity. From the colour palette and typography to the layout, imagery style, and tone of voice \u2014 everything is aligned to how you want your business to be perceived.',
      'Your brand story doesn\u2019t stop at your logo. It should flow through every interaction a customer has with your website. Custom design ensures consistent, professional representation across every page and touchpoint.',
    ],
    pills: ['Your Colours', 'Your Fonts', 'Your Style'],
  },
  {
    title: 'Designed for Your Customers, Not Generic Visitors',
    paragraphs: [
      'Professional custom design starts with understanding your specific audience and their journey. What are they looking for? What builds their trust? What makes them pick up the phone or fill in a form? These questions drive every layout and copy decision.',
      'A well-designed custom website anticipates what your visitors need and guides them naturally towards taking action \u2014 resulting in better engagement, more enquiries, and higher conversion rates.',
    ],
    pills: ['More Enquiries', 'Mobile Optimised', 'Higher Conversions'],
  },
  {
    title: 'Built to Grow With Your Business',
    paragraphs: [
      'Custom websites are built with your future in mind. As your business expands, your website can evolve with you. Need to add new services, integrate a booking system, or expand into eCommerce? Custom design provides a flexible foundation that adapts to your changing needs without requiring a full rebuild.',
      'Investing in a proper custom website now means avoiding the cost and disruption of repeated rebuilds as your business grows.',
    ],
    pills: ['Scales With You', 'Stays Fast', 'Stays Secure'],
  },
]

/* ─── WHY CUSTOM DATA ─── */
const whyCards = [
  {
    icon: LayoutTemplate,
    title: 'When Templates Start Holding You Back',
    desc: 'As your business grows, off-the-shelf templates start showing their limits \u2014 design constraints, slow performance, features you can\u2019t add, and a look that\u2019s shared with thousands of other sites. Custom design removes those limits entirely.',
  },
  {
    icon: BadgeCheck,
    title: 'Looking the Part Matters',
    desc: 'For service businesses, trades, and eCommerce brands, a professional-looking website builds immediate trust. Customers make judgements in seconds. A custom-built site signals that you take your business seriously \u2014 and that you\u2019ll take their job seriously too.',
  },
  {
    icon: Settings2,
    title: 'Functionality Built for Your Business',
    desc: 'No two businesses are exactly alike. Whether you need a booking system, a quote calculator, a product catalogue, or a specific enquiry flow \u2014 custom design means your website works the way your business works, not the other way around.',
  },
]

/* ─── BUSINESS IMPACT DATA ─── */
const impactItems = [
  {
    icon: ShieldCheck,
    title: 'Instant Trust and Credibility',
    desc: 'A professionally designed custom website immediately positions your business as established, credible, and worth working with. That first impression directly affects your ability to attract the right customers and win the right jobs.',
  },
  {
    icon: TrendingUp,
    title: 'Better Search Engine Visibility',
    desc: 'Custom websites built with clean code and proper structure typically perform better in Google search results. More visibility means more qualified traffic \u2014 people who are already searching for exactly what you offer.',
  },
  {
    icon: MousePointerClick,
    title: 'More Visitors Become Customers',
    desc: 'When your website is designed specifically around your audience and your goals, visitors are more likely to take the actions you want \u2014 making an enquiry, requesting a quote, or making a purchase.',
  },
  {
    icon: Repeat,
    title: 'Better Long-Term Return on Investment',
    desc: 'While custom design requires a larger initial investment than a template, it delivers far better long-term value. A properly built custom website lasts, grows with your business, and doesn\u2019t need to be rebuilt from scratch every two years.',
  },
]

/* ─── SELECTED WORK ─── */
const projects = [
  {
    name: 'Cruz Ireland',
    industry: 'eCommerce & Retail',
    location: 'Ireland',
    service: 'Custom Website Design',
    image: 'images/cruz.webp',
    url: 'https://cruzireland.com/',
  },
  {
    name: 'Business Setup Solutions',
    industry: 'Professional Services',
    location: 'Dubai',
    service: 'Custom Website Design',
    image: 'images/bss.webp',
    url: 'https://bss-fzco.com/',
  },
  {
    name: 'Motor Meets',
    industry: 'Automotive & Events',
    location: 'Ireland',
    service: 'Custom Website Design',
    image: 'images/motor.webp',
    url: 'https://motormeets.ie/',
  },
]

/* ─── FAQ DATA ─── */
const faqItems = [
  {
    q: 'How much does a custom website cost?',
    a: 'Every project is scoped individually based on what you need. A custom brochure website for a local business is very different in cost to a full eCommerce store with integrations. We always provide a detailed, fixed-price quote before any work begins \u2014 no hidden costs, no surprises. Get in touch and we\u2019ll give you a clear picture.',
  },
  {
    q: 'How long does a custom website project take?',
    a: 'Most custom website projects take 4\u20138 weeks from kick-off to launch, depending on scope and content. Larger projects with complex functionality or integrations may take longer. We agree a clear timeline at the start and keep you updated throughout.',
  },
  {
    q: 'What\u2019s the difference between a custom website and a template site?',
    a: 'A template is a pre-built design used by thousands of other websites \u2014 you\u2019re limited to what it allows. A custom website is built from scratch around your specific brand, goals, and audience. You get a unique design, the exact functionality you need, and no constraints on how it looks or works.',
  },
  {
    q: 'Can you redesign my existing website rather than building from scratch?',
    a: 'Yes, absolutely. Many of our projects are redesigns of existing sites. We assess what\u2019s working and what needs to change, carry over valuable content, and deliver a completely new, professional design \u2014 without losing your existing SEO history or content.',
  },
  {
    q: 'Who handles updates after the website launches?',
    a: 'We do. Every website we build comes with a monthly management plan that covers all content updates, security patches, backups, and ongoing maintenance. You just tell us what needs changing and we take care of it \u2014 so your site always stays current without you having to touch a thing.',
  },
  {
    q: 'Is custom design only for large businesses?',
    a: 'Not at all. Custom design is for any business that takes its online presence seriously \u2014 from a sole trader to a growing SME. The investment scales with the scope of the project, and even a smaller custom website delivers significantly better results than a generic template.',
  },
  {
    q: 'Do you handle the content and copywriting as well?',
    a: 'We can advise on page structure, content flow, and what information each page needs. For professional copywriting, we can recommend a trusted partner or work with copy you provide. Either way, we\u2019ll make sure the content and design work together properly.',
  },
  {
    q: 'What happens after the website launches?',
    a: 'We offer monthly Website Management & Maintenance plans that cover updates, security, backups, monitoring, and content changes. You\u2019re never left on your own after launch \u2014 we\u2019re here for the long term.',
  },
]

/* ─── FAQ ACCORDION ITEM ─── */
function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="glass-card transition-all">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-heading font-semibold text-white text-sm sm:text-base">{item.q}</span>
        <ChevronDown
          size={20}
          className={`text-jade flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '400px' : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <div className="px-6 pb-6 pt-0">
          <p className="text-gray-400 font-body text-sm leading-relaxed">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

/* ─── PAGE COMPONENT ─── */
export default function CustomDesignPage() {
  const heroRef = useReveal()
  const approachRef = useReveal()
  const powerRef = useReveal()
  const whyRef = useReveal()
  const impactRef = useReveal()
  const portfolioRef = useReveal()
  const faqRef = useReveal()
  const ctaRef = useReveal()

  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PageMeta />

      {/* ── 1. PAGE HERO ── */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-dots" />
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '40%', '--glow-y': '50%' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-jade/10 border border-jade/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-jade animate-pulse" />
              <span className="text-jade text-xs font-body font-medium">Custom Website Design</span>
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 break-words">
              Why Custom Website Design is{' '}
              <span className="text-jade">Essential</span> for Your Business
            </h1>

            <p className="text-gray-300 font-body text-base sm:text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
              Your website is often the very first impression a potential customer has of your business. Within seconds, they decide whether you look professional, trustworthy, and worth their time. That first impression is either working for you or against you.
            </p>

            <p className="text-gray-400 font-body text-sm leading-relaxed mb-10 max-w-3xl mx-auto">
              Custom website design isn&rsquo;t just about looking different from your competitors &mdash; it&rsquo;s about building a digital presence that genuinely represents your brand, serves your specific business goals, and gives you a real competitive edge. A template can&rsquo;t do that. A custom-built website can.
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

      {/* ── 2. OUR APPROACH ── */}
      <section ref={approachRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Our Approach</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              Our Approach to Custom Website Design
            </h2>
            <p className="text-gray-400 font-body mt-4 max-w-2xl mx-auto">
              Great design combines visual appeal with strategic intent. Every custom website we build is designed to look brilliant and deliver real business results.
            </p>
          </div>

          <div className="space-y-8 reveal-stagger">
            {approachBlocks.map((block, i) => (
              <div
                key={block.title}
                className="reveal glass-card p-8 sm:p-10 transition-all"
                style={{ '--reveal-index': i }}
              >
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-4">
                  {block.title}
                </h3>
                <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
                  {block.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {block.pills.map((pill) => (
                    <BadgePill key={pill} text={pill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. THE POWER OF CUSTOM DESIGN ── */}
      <section ref={powerRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '60%', '--glow-y': '35%' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Custom Design</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              The Power of a Properly Custom-Built Website
            </h2>
          </div>

          <div className="space-y-10 reveal-stagger">
            {powerSections.map((section, i) => {
              const reversed = i % 2 !== 0
              return (
                <div
                  key={section.title}
                  className="reveal glass-card p-8 sm:p-10 lg:p-12 transition-all"
                  style={{ '--reveal-index': i }}
                >
                  <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Text column */}
                    <div className="lg:w-3/5">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-5">
                        {section.title}
                      </h3>
                      {section.paragraphs.map((para, j) => (
                        <p key={j} className="text-gray-400 font-body text-sm leading-relaxed mb-4">
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Pills column */}
                    <div className="lg:w-2/5 flex lg:items-center lg:justify-center">
                      <div className="flex flex-wrap gap-2 lg:gap-3">
                        {section.pills.map((pill) => (
                          <BadgePill key={pill} text={pill} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 4. WHY BUSINESSES CHOOSE CUSTOM ── */}
      <section ref={whyRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Why Custom</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              Why Irish Businesses Choose Custom Design
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
            {whyCards.map((card, i) => (
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

      {/* ── 5. BUSINESS IMPACT ── */}
      <section ref={impactRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '45%', '--glow-y': '50%' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Business Impact</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              What a Custom Website Actually Delivers
            </h2>
            <p className="text-gray-400 font-body mt-4 max-w-2xl mx-auto">
              The right website investment pays for itself through better results, more enquiries, and a stronger reputation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 reveal-stagger">
            {impactItems.map((item, i) => (
              <div
                key={item.title}
                className="reveal glass-card glass-card-hover p-7 transition-all"
                style={{ '--reveal-index': i }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-jade/10 border border-jade/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon size={24} className="text-jade" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 font-body text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PORTFOLIO PLACEHOLDER ── */}
      <section ref={portfolioRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Our Work</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              Custom Websites We&rsquo;ve Built for Irish Businesses
            </h2>
            <p className="text-gray-400 font-body mt-4 max-w-2xl mx-auto">
              Real projects, built from scratch for Irish businesses. More case studies coming soon.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 reveal-stagger">
            {projects.map((project, i) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal glass-card glass-card-hover overflow-hidden transition-all group block"
                style={{ '--reveal-index': i }}
              >
                <div className="h-48 overflow-hidden">
                  <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-jade/10 border border-jade/20 text-jade text-xs font-body font-medium mb-3">
                    {project.industry}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{project.name}</h3>
                  <div className="flex items-center gap-2 text-gray-400 font-body text-sm">
                    <MapPin size={14} className="text-jade flex-shrink-0" />
                    <span>{project.location}</span>
                    <span className="text-gray-600">&middot;</span>
                    <span>{project.service}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-jade font-heading font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ── */}
      <section ref={faqRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '40%' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">FAQ</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3 reveal">
            {faqItems.map((item, i) => (
              <FaqItem
                key={i}
                item={item}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ── */}
      <section ref={ctaRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '50%' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Ready to Build a Website That Truly Represents Your Business?
            </h2>
            <p className="text-gray-400 font-body text-lg mb-8 max-w-xl mx-auto">
              Get a free, no-obligation quote from the Morey Digital team. We&rsquo;ll talk through what you need and give you a clear picture of what&rsquo;s involved &mdash; no pressure, no jargon.
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
