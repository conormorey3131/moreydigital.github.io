import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Layers,
  Fingerprint,
  MapPin,
  Gauge,
  PenTool,
  Headphones,
  PaintBucket,
  Code2,
  ShoppingCart,
  Plug,
  Target,
  RefreshCw,
  Shield,
  GraduationCap,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

/* ─── SEO ─── */
function PageMeta() {
  useEffect(() => {
    document.title = 'Website Design & Development | Morey Digital — Irish Web Design Agency'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Custom website design and development for Irish businesses. Mobile-first, SEO-ready websites built on WordPress, Shopify, or custom platforms. Based in Clare, working nationwide.')
    }
  }, [])
  return null
}

/* ─── WHY CHOOSE US DATA ─── */
const whyItems = [
  {
    icon: Layers,
    title: 'End-to-End Service',
    desc: 'We handle everything in-house — strategy, design, development, and launch. One team, one process, no handoffs.',
  },
  {
    icon: Fingerprint,
    title: 'Built Around Your Business',
    desc: 'Every website is custom-designed to match your goals, your audience, and your brand — not dropped into a generic template.',
  },
  {
    icon: MapPin,
    title: 'Irish Market Experience',
    desc: 'We\'ve built websites for Irish trades, retailers, hospitality businesses, and service providers. We know what works here.',
  },
  {
    icon: Gauge,
    title: 'SEO & Performance Built In',
    desc: 'Fast load times, clean code, and on-page SEO are part of how we build — not optional add-ons you pay for later.',
  },
  {
    icon: PenTool,
    title: 'Fully Managed for You',
    desc: 'We handle all updates, content changes, and technical work through our monthly management plans — so you can focus on running your business.',
  },
  {
    icon: Headphones,
    title: 'Support After Launch',
    desc: 'We don\'t disappear after go-live. Ongoing maintenance plans, priority support, and a team that knows your site.',
  },
]

/* ─── SERVICES INCLUDE DATA ─── */
const serviceItems = [
  {
    icon: PaintBucket,
    title: 'Custom Website Design',
    desc: 'Bespoke, on-brand website designs built specifically for your business. Every layout is created from scratch to reflect your brand, speak to your audience, and guide visitors towards taking action — fully responsive across every screen size.',
  },
  {
    icon: Code2,
    title: 'Website Development',
    desc: 'Clean, reliable code and custom functionality tailored to your business requirements. We build on WordPress, Shopify, or custom platforms depending on what suits your project best — always with performance and security as a priority.',
  },
  {
    icon: ShoppingCart,
    title: 'eCommerce Development',
    desc: 'Shopify and WooCommerce stores designed to sell. We handle product setup, secure payment integration, checkout optimisation, and everything needed to get your store live and converting.',
  },
  {
    icon: Plug,
    title: 'Platform Integrations & Automation',
    desc: 'Connect your website with the tools your business already uses — CRMs, booking systems, email marketing platforms, payment gateways, and more. We handle the technical side so everything works together.',
  },
  {
    icon: Target,
    title: 'Landing Pages & Campaign Pages',
    desc: 'High-converting standalone pages for Google Ads, Meta campaigns, or promotional offers. Designed specifically to capture leads and drive one clear action.',
  },
  {
    icon: RefreshCw,
    title: 'Website Redesigns',
    desc: 'Already have a website but it\'s outdated, slow, or not converting? We redesign existing sites to improve performance, modernise the look, and fix structural issues — without starting from scratch unless needed.',
  },
  {
    icon: Shield,
    title: 'Accessibility & GDPR Compliance',
    desc: 'All websites we build meet accessibility standards and Irish/EU GDPR requirements at launch. Cookie compliance, privacy policy integration, and data handling are handled properly from day one.',
  },
  {
    icon: GraduationCap,
    title: 'Ongoing Management & Support',
    desc: 'We don\'t disappear after launch. Every client gets access to our monthly management plans — we handle content updates, technical changes, security, and support so your site is always in expert hands.',
  },
]

/* ─── PROCESS DATA ─── */
const processSteps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'We start by understanding your business, your goals, and your customers. This informs every decision we make — from layout to copy to platform choice.',
  },
  {
    num: '02',
    title: 'Wireframe & Structure',
    desc: 'Before any design work begins, we map out the structure and user flow of your site. You review and approve the layout before we move forward.',
  },
  {
    num: '03',
    title: 'Design',
    desc: 'We bring the structure to life with your brand identity — colours, typography, imagery, and visual hierarchy. You see the design before a single line of code is written.',
  },
  {
    num: '04',
    title: 'Development & Testing',
    desc: 'Your approved design is built into a fully functioning, fast, secure website. We test across devices, browsers, and screen sizes before anything goes live.',
  },
  {
    num: '05',
    title: 'Launch & Ongoing Support',
    desc: 'We go live when you\'re 100% happy. From there, our management plans keep your site updated, secure, and performing — we handle everything so you don\'t have to.',
  },
]

/* ─── SELECTED WORK ─── */
const placeholderProjects = [
  {
    industry: 'Construction & Infrastructure',
    name: 'Roadworks IRE',
    location: 'Ireland',
    type: 'Service Website',
    image: 'images/roadworks.webp',
    url: 'https://roadworksire.ie/',
  },
  {
    industry: 'eCommerce & Retail',
    name: 'Vamp Lingerie',
    location: 'Ireland',
    type: 'Online Store',
    image: 'images/vamp_up.webp',
    url: 'https://vamplingerie.com/',
  },
  {
    industry: 'Community & Local',
    name: 'Sixmilebridge Town',
    location: 'Clare',
    type: 'Community Website',
    image: 'images/sixmilebridge.webp',
    url: 'https://sixmilebridgetown.ie/',
  },
]

/* ─── FAQ DATA ─── */
const faqItems = [
  {
    q: 'How long does it take to build a website?',
    a: 'It depends on the complexity of the project. A clean brochure or service website typically takes 3\u20135 weeks from kick-off to launch. A larger eCommerce store or a site with integrations usually takes 6\u201310 weeks. We agree a clear timeline at the start of every project so you know exactly what to expect.',
  },
  {
    q: 'How much does a website cost?',
    a: 'Every project is scoped individually based on your requirements. A straightforward business website starts from a few hundred euros, while larger eCommerce or custom-build projects vary depending on scope. We provide a detailed, no-obligation quote before any work begins \u2014 no hidden costs, no surprises.',
  },
  {
    q: 'Do you build on WordPress or Shopify?',
    a: 'Both \u2014 and we recommend the right platform based on your specific needs. WordPress is ideal for service businesses, blogs, and content-heavy sites. Shopify is our preferred choice for eCommerce. For certain projects we may recommend a custom build. We\u2019ll always explain our reasoning clearly.',
  },
  {
    q: 'Will my website work on mobile?',
    a: 'Yes, always. Every website we build is designed and tested mobile-first. We check across multiple screen sizes and real devices before launch.',
  },
  {
    q: 'Is SEO included?',
    a: 'On-page SEO is built into every site we deliver \u2014 proper heading structure, meta titles, meta descriptions, image optimisation, fast load times, and a clean XML sitemap. For ongoing SEO and Google visibility work, we offer dedicated SEO plans as part of our Growth and Managed packages.',
  },
  {
    q: 'Who handles updates after launch?',
    a: 'We do. All content updates, design changes, and technical work are handled by our team as part of our monthly management plans. You just tell us what you need and we take care of it — quickly, professionally, and without you having to touch a thing.',
  },
  {
    q: 'Do you redesign existing websites?',
    a: 'Yes, website redesigns are a common project type for us. Whether your site looks outdated, loads slowly, or simply isn\u2019t converting enquiries, we can redesign and rebuild it while keeping what\u2019s working and fixing what isn\u2019t.',
  },
  {
    q: 'What happens after the website launches?',
    a: 'Your site moves onto one of our monthly management plans. We handle all updates, backups, monitoring, security, and content changes on an ongoing basis. We also offer SEO and Growth packages for businesses that want to go further. You\u2019re never left on your own after go-live.',
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
export default function WebsiteDesignPage() {
  const heroRef = useReveal()
  const whyRef = useReveal()
  const includesRef = useReveal()
  const processRef = useReveal()
  const projectsRef = useReveal()
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

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-jade/10 border border-jade/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-jade animate-pulse" />
              <span className="text-jade text-xs font-body font-medium">Website Design & Development</span>
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 break-words">
              Website Design & Development for{' '}
              <span className="text-jade">Irish Businesses</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 font-body font-medium leading-relaxed mb-6 max-w-3xl mx-auto">
              From first impression to final click — we design and build websites that look brilliant, load fast, and turn visitors into customers.
            </p>

            <p className="text-white/80 font-body text-sm leading-relaxed mb-10 max-w-2xl mx-auto">
              Morey Digital designs and builds custom websites for Irish businesses of all sizes. Whether you need a clean brochure site, a high-converting service website, or a full eCommerce store, we handle everything from concept to launch — and stay with you after. Every site is mobile-first, SEO-ready, and built on the right platform for your business.
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

      {/* ── 2. WHY CHOOSE US ── */}
      <section ref={whyRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Why Us</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              Why Choose Morey Digital for Website Design & Development?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {whyItems.map((item, i) => (
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

      {/* ── 3. SERVICES INCLUDE ── */}
      <section ref={includesRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">What&rsquo;s Included</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              Our Website Design & Development Services Include
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 reveal-stagger">
            {serviceItems.map((item, i) => (
              <div
                key={item.title}
                className="reveal glass-card glass-card-hover p-7 transition-all"
                style={{ '--reveal-index': i }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-xl bg-jade/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon size={22} className="text-jade" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#1A3C6E] mb-2">{item.title}</h3>
                    <p className="text-[#555555] font-body text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PROCESS ── */}
      <section ref={processRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Our Process</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              Our Website Design & Development Process
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              A clear, five-step process with no surprises. You know exactly what&rsquo;s happening at every stage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 reveal-stagger">
            {processSteps.map((step, i) => (
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
                  <h3 className="font-heading font-bold text-base text-[#1A3C6E] mb-3">{step.title}</h3>
                  <p className="text-[#555555] font-body text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PLACEHOLDER PROJECTS ── */}
      <section ref={projectsRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Our Work</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              Recent Projects
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              A sample of the websites we&rsquo;ve designed and built for Irish businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
            {placeholderProjects.map((project, i) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal glass-card glass-card-hover transition-all group cursor-pointer block"
                style={{ '--reveal-index': i }}
              >
                <div className="h-48 rounded-t-[16px] overflow-hidden">
                  <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>

                <div className="p-6">
                  <span className="text-jade text-xs font-body font-medium uppercase tracking-wider">{project.industry}</span>
                  <h4 className="font-heading font-bold text-base text-[#1A3C6E] mt-1 mb-1 flex items-center gap-2">
                    {project.name}
                    <ArrowRight size={14} className="text-gray-400 group-hover:text-jade group-hover:translate-x-1 transition-all" />
                  </h4>
                  <p className="text-[#555555] font-body text-xs">{project.location} &middot; {project.type}</p>
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
              Ready to Build a Website That Actually Works for Your Business?
            </h2>
            <p className="text-white/80 font-body text-lg mb-8 max-w-xl mx-auto">
              Get a free, no-obligation quote from the Morey Digital team. We&rsquo;ll talk through your project, ask the right questions, and give you a clear picture of what&rsquo;s involved.
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
