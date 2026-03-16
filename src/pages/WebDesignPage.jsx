import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  ChevronDown,
  TrendingUp,
  Palette,
  Smartphone,
  LayoutTemplate,
  Search,
  Accessibility,
  Store,
  ShoppingBag,
  UtensilsCrossed,
  MapPin,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

/* ─── SEO ─── */
function PageMeta() {
  useEffect(() => {
    document.title = 'Web Design for Irish Businesses | Morey Digital — Conversion-Focused Website Design'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Professional web design for Irish businesses. Conversion-focused layouts, mobile-first design, and brand-aligned visuals that turn visitors into customers. Based in Clare, working nationwide.')
    }
  }, [])
  return null
}

/* ─── BROWSER MOCKUP COMPONENT ─── */
function BrowserMockup() {
  return (
    <div className="glass-card p-3 max-w-sm w-full">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 h-5 rounded bg-gray-200 mx-2" />
      </div>
      {/* Page layout skeleton */}
      <div className="space-y-3">
        {/* Nav bar */}
        <div className="flex items-center justify-between">
          <div className="w-16 h-3 rounded bg-jade/30" />
          <div className="flex gap-3">
            <div className="w-8 h-2 rounded bg-gray-200" />
            <div className="w-8 h-2 rounded bg-gray-200" />
            <div className="w-8 h-2 rounded bg-gray-200" />
          </div>
        </div>
        {/* Hero area */}
        <div className="bg-gray-100 rounded-lg p-4 space-y-2">
          <div className="w-3/4 h-3 rounded bg-gray-300" />
          <div className="w-1/2 h-3 rounded bg-gray-200" />
          <div className="w-20 h-6 rounded bg-jade/40 mt-3" />
        </div>
        {/* Cards row */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-gray-100 rounded-lg p-3 space-y-1.5">
            <div className="w-5 h-5 rounded bg-jade/20" />
            <div className="w-full h-2 rounded bg-gray-200" />
            <div className="w-2/3 h-2 rounded bg-gray-200" />
          </div>
          <div className="bg-gray-100 rounded-lg p-3 space-y-1.5">
            <div className="w-5 h-5 rounded bg-jade/20" />
            <div className="w-full h-2 rounded bg-gray-200" />
            <div className="w-2/3 h-2 rounded bg-gray-200" />
          </div>
          <div className="bg-gray-100 rounded-lg p-3 space-y-1.5">
            <div className="w-5 h-5 rounded bg-jade/20" />
            <div className="w-full h-2 rounded bg-gray-200" />
            <div className="w-2/3 h-2 rounded bg-gray-200" />
          </div>
        </div>
        {/* Footer */}
        <div className="flex justify-between pt-2">
          <div className="w-12 h-2 rounded bg-gray-200" />
          <div className="w-20 h-2 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  )
}

/* ─── WHO WE DESIGN FOR DATA ─── */
const audiences = [
  {
    icon: Store,
    title: 'Local & Service Businesses',
    desc: 'Tradespeople, professionals, and local service businesses who need a clean, trustworthy website that generates enquiries and reflects their quality of work.',
  },
  {
    icon: ShoppingBag,
    title: 'eCommerce & Retail',
    desc: 'Online shops and Irish retail brands that need a well-designed store built to convert \u2014 clear product pages, smooth checkout, and a brand people trust.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Hospitality & Tourism',
    desc: 'Hotels, restaurants, guesthouses, and tourism businesses that need a website which sells the experience before customers even arrive.',
  },
]

/* ─── WHAT YOU GET DATA ─── */
const features = [
  {
    icon: TrendingUp,
    title: 'Conversion-Focused Layouts',
    desc: 'Every page is structured to guide visitors towards a clear action \u2014 a call, an enquiry, a purchase. Good design isn\u2019t just about looking good; it\u2019s about getting results.',
  },
  {
    icon: Palette,
    title: 'Brand-Aligned Visual Design',
    desc: 'Your colours, fonts, and visual identity applied consistently across every page. Your website should feel like a natural extension of your business \u2014 not a generic template.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    desc: 'We design for mobile screens first, then scale up. Over 60% of Irish web traffic is on mobile \u2014 your site needs to work perfectly on every screen size.',
  },
  {
    icon: LayoutTemplate,
    title: 'Clear Information Architecture',
    desc: 'Logical page structure and navigation that helps visitors find what they need fast. Less confusion means fewer drop-offs and more enquiries.',
  },
  {
    icon: Search,
    title: 'SEO-Ready Page Structure',
    desc: 'Headings, page titles, and content structure built to be search-engine friendly from day one \u2014 so your design works for Google as well as your visitors.',
  },
  {
    icon: Accessibility,
    title: 'Accessibility as Standard',
    desc: 'Designs that work for everyone \u2014 proper contrast ratios, keyboard navigation, and clear content hierarchy that meets accessibility best practices.',
  },
]

/* ─── DELIVERABLES DATA ─── */
const deliverables = [
  {
    title: 'Sitemap & page structure plan',
    desc: 'A clear map of your website\u2019s pages and how they connect \u2014 agreed before any design work begins.',
  },
  {
    title: 'Wireframes & layout review',
    desc: 'Low-fidelity layouts showing page structure and content flow, reviewed and approved by you before full design starts.',
  },
  {
    title: 'Full visual design (all pages)',
    desc: 'Pixel-ready designs for every page of your site, showing exactly how the finished website will look.',
  },
  {
    title: 'Mobile & tablet designs',
    desc: 'Designs shown across all key screen sizes \u2014 not just desktop \u2014 so nothing is a surprise on launch.',
  },
  {
    title: 'Design handover & build',
    desc: 'Your approved design is handed straight into development by our team \u2014 no separate agency needed.',
  },
  {
    title: 'Post-launch support',
    desc: 'We answer any questions after launch and offer monthly management plans so your site stays in expert hands.',
  },
]

/* ─── SELECTED WORK ─── */
const projects = [
  {
    name: 'Roadworks IRE',
    industry: 'Construction & Infrastructure',
    location: 'Ireland',
    service: 'Website Design & Development',
    image: 'images/roadworks.webp',
    url: 'https://roadworksire.ie/',
  },
  {
    name: 'Sixmilebridge Town',
    industry: 'Community & Local',
    location: 'Clare',
    service: 'Website Design & Development',
    image: 'images/sixmilebridge.webp',
    url: 'https://sixmilebridgetown.ie/',
  },
  {
    name: 'Aviation Digital Partners',
    industry: 'Professional Services',
    location: 'Ireland',
    service: 'Website Design & Development',
    image: 'images/adp.webp',
    url: 'https://aviationpartners.ie/',
  },
]

/* ─── FAQ DATA ─── */
const faqItems = [
  {
    q: 'Do you design for mobile as well as desktop?',
    a: 'Yes \u2014 always. Every website we design is built mobile-first. We design for the smallest screen first and scale up, ensuring the experience is excellent on phones, tablets, and desktops. We test across real devices before launch.',
  },
  {
    q: 'Can you redesign an existing website without starting from scratch?',
    a: 'Yes, absolutely. Many of our projects are redesigns of existing sites. We assess what\u2019s working, what needs to change, and carry over any valuable content and SEO history. You don\u2019t always need to start from zero.',
  },
  {
    q: 'How involved will I be in the design process?',
    a: 'As involved as you want to be. We always present the sitemap and wireframes for approval before full design begins, and you review the designs before anything is built. We keep you informed at every stage \u2014 no nasty surprises.',
  },
  {
    q: 'Do I need to provide a logo and brand assets?',
    a: 'If you have a logo and brand guidelines, we\u2019ll use them. If you don\u2019t, we offer branding and logo design as a service before the website project begins. Either way, we\u2019ll make sure your site has a consistent, professional look.',
  },
  {
    q: 'Who handles website updates after launch?',
    a: 'We do. All content changes, updates, and edits are included in our monthly management plans. You just let us know what needs changing and we take care of it \u2014 no need to learn any technical tools or manage anything yourself.',
  },
  {
    q: 'What\u2019s the difference between web design and web development?',
    a: 'Web design is how your site looks and feels \u2014 layouts, colours, typography, and user experience. Web development is the technical build that makes it work. At Morey Digital, we handle both in-house, so there\u2019s no handoff between a design agency and a separate developer.',
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
        <span className="font-heading font-semibold text-[#1A3C6E] text-sm sm:text-base">{item.q}</span>
        <ChevronDown
          size={20}
          className={`text-jade flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '300px' : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <div className="px-6 pb-6 pt-0">
          <p className="text-[#555555] font-body text-sm leading-relaxed">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

/* ─── PAGE COMPONENT ─── */
export default function WebDesignPage() {
  const heroRef = useReveal()
  const audienceRef = useReveal()
  const featuresRef = useReveal()
  const deliverablesRef = useReveal()
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
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#1A3C6E]">
        <div className="absolute inset-0 grid-dots" />
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '35%', '--glow-y': '45%' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="reveal">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Text column */}
              <div className="lg:w-3/5 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-jade/10 border border-jade/20 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-jade animate-pulse" />
                  <span className="text-jade text-xs font-body font-medium">Web Design Services</span>
                </span>

                <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 break-words">
                  Web Design for{' '}
                  <span className="text-jade">Irish Businesses</span>
                </h1>

                <p className="text-lg sm:text-xl text-white/80 font-body font-medium leading-relaxed mb-6 max-w-2xl">
                  Conversion-focused design and brand-aligned layouts that make visitors stay, trust you, and get in touch. Built for real Irish businesses, not generic templates.
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-jade text-white font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-base"
                >
                  Get a Free Quote
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Mockup column */}
              <div className="lg:w-2/5 flex justify-center">
                <BrowserMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHO WE DESIGN FOR ── */}
      <section ref={audienceRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Our Clients</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              Who We Design For
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              We specialise in websites for Irish SMEs and local businesses, with tailored experience across a range of industries.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 reveal-stagger">
            {audiences.map((item, i) => (
              <div
                key={item.title}
                className="reveal glass-card glass-card-hover p-8 text-center transition-all"
                style={{ '--reveal-index': i }}
              >
                <div className="w-14 h-14 rounded-2xl bg-jade/10 border border-jade/20 flex items-center justify-center mx-auto mb-5">
                  <item.icon size={28} className="text-jade" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1A3C6E] mb-3">{item.title}</h3>
                <p className="text-[#555555] font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHAT YOU GET ── */}
      <section ref={featuresRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">What&rsquo;s Included</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              What&rsquo;s Included in Every Design
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {features.map((item, i) => (
              <div
                key={item.title}
                className="reveal glass-card glass-card-hover p-7 transition-all"
                style={{ '--reveal-index': i }}
              >
                <div className="w-11 h-11 rounded-xl bg-jade/10 flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-jade" />
                </div>
                <h3 className="font-heading font-bold text-base text-[#1A3C6E] mb-2">{item.title}</h3>
                <p className="text-[#555555] font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. DESIGN DELIVERABLES ── */}
      <section ref={deliverablesRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Deliverables</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              What You Receive
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              Here&rsquo;s exactly what&rsquo;s delivered as part of every Morey Digital web design project.
            </p>
          </div>

          <div className="space-y-5 reveal">
            {deliverables.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-jade/10 border border-jade/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={16} className="text-jade" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#1A3C6E] mb-1">{item.title}</h3>
                  <p className="text-[#555555] font-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SELECTED WORK ── */}
      <section ref={portfolioRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Our Work</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              Recent Web Design Projects
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              A sample of websites we&rsquo;ve designed for Irish businesses. More case studies coming soon.
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
                  <h3 className="font-heading font-bold text-lg text-[#1A3C6E] mb-2">{project.name}</h3>
                  <div className="flex items-center gap-2 text-[#555555] font-body text-sm">
                    <MapPin size={14} className="text-jade flex-shrink-0" />
                    <span>{project.location}</span>
                    <span className="text-gray-400">&middot;</span>
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

      {/* ── 6. FAQ ── */}
      <section ref={faqRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">FAQ</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
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

      {/* ── 7. FINAL CTA ── */}
      <section ref={ctaRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#1A3C6E]">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '50%' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Ready to Design a Website That Works for Your Business?
            </h2>
            <p className="text-white/80 font-body text-lg mb-8 max-w-xl mx-auto">
              Get a free, no-obligation quote. We&rsquo;ll talk through what you need and give you a clear picture of what&rsquo;s involved.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jade text-white font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-base"
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
