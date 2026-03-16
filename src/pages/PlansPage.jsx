import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  MessageCircle,
  Shield,
  FileText,
  RefreshCw,
  MapPin,
  Star,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

/* ─── SEO ─── */
function PageMeta() {
  useEffect(() => {
    document.title = 'Website Plans & Pricing | Morey Digital Ireland'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        'content',
        'Simple, transparent pricing for Irish businesses. Starter websites from €499, website management from €150/month, and eCommerce from €350/month. Get a free quote today.'
      )
    }
  }, [])
  return null
}

/* ─── FAQ DATA ─── */
const faqItems = [
  {
    q: 'Do I have to sign a long-term contract?',
    a: 'No. Our monthly management plans run on a rolling monthly basis \u2014 you can cancel at any time with one month\u2019s notice. We believe in keeping clients because we do good work, not because they\u2019re locked in.',
  },
  {
    q: 'What\u2019s included in the \u20AC39/month fee for Starter Website clients?',
    a: 'The monthly fee covers hosting, SSL certificate management, security monitoring, and regular software updates. It keeps your website online, secure, and up to date \u2014 everything you need to maintain a professional online presence without having to think about it.',
  },
  {
    q: 'Can I upgrade from a Starter Website to Website Management?',
    a: 'Yes. If your needs grow or you want a higher level of support, we can move you onto a management plan at any time. Get in touch and we\u2019ll set it up.',
  },
  {
    q: 'What platform will my website be built on?',
    a: 'We build websites on WordPress primarily, and eCommerce stores on either Shopify or WooCommerce depending on which is the better fit for your business. We\u2019ll recommend the right option based on what you need \u2014 and explain the pros and cons of each.',
  },
  {
    q: 'I already have a website. Can you take over managing it?',
    a: 'Yes. We take on existing websites from other providers or developers. We start with an assessment to understand what you\u2019re running, identify any issues, and make sure everything is clean and secure before we take over management. Get in touch and we\u2019ll talk through the process.',
  },
  {
    q: 'How do I get an accurate quote?',
    a: 'Fill in the contact form or get in touch directly. We\u2019ll ask a few questions about your business and what you need, then come back to you with a clear, itemised quote. No obligation and no hard sell \u2014 just an honest number.',
  },
  {
    q: 'What if I need something that\u2019s not covered in these plans?',
    a: 'The plans shown are starting points \u2014 we work with businesses at all stages and can tailor what we do to what you actually need. If you have specific requirements, just get in touch and we\u2019ll put something together.',
  },
  {
    q: 'Is VAT included in these prices?',
    a: 'Prices shown are ex-VAT. Irish VAT at 23% applies to all services.',
  },
]

/* ─── FAQ ACCORDION ─── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span className="font-heading font-semibold text-[#1A3C6E] text-sm sm:text-base pr-4">{q}</span>
        <ChevronDown
          size={18}
          className={`text-jade flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '300px' : '0px', opacity: open ? 1 : 0 }}
      >
        <p className="text-[#555555] font-body text-sm leading-relaxed pb-5">{a}</p>
      </div>
    </div>
  )
}

/* ─── WHAT EVERY CLIENT GETS DATA ─── */
const everyClientGets = [
  {
    icon: MessageCircle,
    title: 'A Real Person to Talk To',
    desc: 'You deal directly with Conor, not a helpdesk or ticket system.',
  },
  {
    icon: FileText,
    title: 'Clear, Plain English Communication',
    desc: 'No jargon. We explain what we\u2019re doing and why in language that makes sense.',
  },
  {
    icon: RefreshCw,
    title: 'Proactive, Not Reactive',
    desc: 'We spot and fix issues before they become problems \u2014 you don\u2019t have to chase us.',
  },
  {
    icon: MapPin,
    title: 'Irish-Based Support',
    desc: 'We\u2019re based in Ireland, we understand the Irish market, and we\u2019re available when you need us.',
  },
]

/* ─── PLAN FEATURE LISTS ─── */
const starterFeatures = [
  'Custom design \u2014 built for your brand',
  'Mobile-responsive and fast-loading',
  'Up to 5 pages (home, about, services, contact + 1 more)',
  'Contact form set up and tested',
  'SSL certificate included',
  'Google Analytics connected',
  'Basic SEO setup (meta titles, descriptions)',
  '1 round of revisions included',
  'Hosting, security & updates \u2014 \u20AC39/month',
]

const managementFeatures = [
  'Software updates \u2014 platform, plugins & theme',
  'Security monitoring & malware scanning',
  'SSL certificate managed & renewed',
  'Daily automated backups',
  'Uptime monitoring \u2014 24/7 alerts',
  'Monthly report \u2014 plain English summary',
  'Minor content updates included',
  'Priority support response',
]

const ecommerceFeatures = [
  'Shopify or WooCommerce \u2014 we\u2019ll recommend the right fit',
  'Custom storefront design \u2014 your brand, not a generic template',
  'Product catalogue setup (up to 20 products included)',
  'Payment gateway integration (Stripe, PayPal, etc.)',
  'Shipping and tax configuration',
  'Mobile-optimised checkout',
  'SEO setup for product and category pages',
  'Monthly management \u2014 updates, security & backups included',
  'Ongoing support for store changes',
]

/* ─── PAGE COMPONENT ─── */
export default function PlansPage() {
  const heroRef = useReveal()
  const plansRef = useReveal()
  const ctaMidRef = useReveal()
  const everyRef = useReveal()
  const faqRef = useReveal()
  const ctaRef = useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PageMeta />

      {/* ── 1. PAGE HERO ── */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#1A3C6E]">
        <div className="absolute inset-0 grid-dots" />
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '40%' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-jade/10 border border-jade/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-jade animate-pulse" />
              <span className="text-jade text-xs font-body font-medium uppercase tracking-wider">Plans &amp; Pricing</span>
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 break-words">
              Simple, Transparent Pricing for{' '}
              <span className="text-jade">Irish Businesses</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 font-body font-medium leading-relaxed mb-4 max-w-3xl mx-auto">
              No hidden fees, no confusing bundles. Choose the service that fits where your business is right now &mdash; and get in touch for a free, no-obligation quote.
            </p>

            <p className="text-white/80 font-body text-sm leading-relaxed mb-3 max-w-3xl mx-auto">
              Every business is different. Whether you need a professional website built from scratch, ongoing management and security for an existing site, or a full eCommerce store, we have a clear starting point for each &mdash; and we&rsquo;ll tailor it to exactly what you need.
            </p>

            <p className="text-white/80 font-body text-sm leading-relaxed mb-10 max-w-3xl mx-auto">
              Prices shown are starting points. Your final quote depends on the size, complexity, and specific requirements of your project. Get in touch and we&rsquo;ll give you an accurate, itemised quote with no surprises.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jade text-white font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-base"
            >
              Get a Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Feature badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {[
                { icon: MessageCircle, label: 'Free Consultation' },
                { icon: Shield, label: 'Irish-Based Team' },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200">
                  <badge.icon size={14} className="text-jade flex-shrink-0" />
                  <span className="text-[#333333] text-xs font-body">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. THE THREE PLAN CARDS ── */}
      <section ref={plansRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start reveal-stagger">

            {/* ── CARD 1: STARTER WEBSITE ── */}
            <div
              className="reveal glass-card p-8 transition-all relative"
              style={{ '--reveal-index': 0 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-jade/10 border border-jade/20 text-jade text-[11px] font-body font-semibold uppercase tracking-wider mb-5">
                One-Off Project
              </span>

              <h2 className="font-heading font-bold text-2xl text-[#1A3C6E] mb-3">Starter Website</h2>
              <p className="text-[#555555] font-body text-sm leading-relaxed mb-6">
                A professional, fast-loading website built for your business &mdash; designed to make a great first impression and convert visitors into enquiries.
              </p>

              {/* Pricing block */}
              <div className="mb-6">
                <p className="text-[#555555] font-body text-xs mb-1">From</p>
                <p className="font-heading font-extrabold text-[3rem] leading-none text-jade">&euro;499</p>
                <p className="text-[#555555] font-body text-xs mt-1">one-off</p>
                <div className="border-t border-gray-200 my-4" />
                <p className="text-[#1A3C6E] font-body text-sm font-medium">then &euro;39/month</p>
                <p className="text-[#555555] font-body text-xs mt-1">
                  Monthly fee covers hosting, SSL, security monitoring &amp; software updates
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {starterFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-jade flex-shrink-0 mt-0.5" />
                    <span className="text-[#333333] font-body text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 border border-jade text-jade font-heading font-bold text-sm rounded-lg hover:bg-jade hover:text-white transition-all group"
              >
                Get a Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-[#555555] font-body text-xs text-center mt-3">
                Prices vary by size and complexity &mdash; get in touch for an accurate quote
              </p>
            </div>

            {/* ── CARD 2: WEBSITE MANAGEMENT (HIGHLIGHTED) ── */}
            <div
              className="reveal relative transition-all"
              style={{ '--reveal-index': 1 }}
            >
              {/* Most Popular badge */}
              <div className="flex justify-center mb-[-14px] relative z-10">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-jade text-white font-heading font-bold text-xs uppercase tracking-wider">
                  <Star size={12} className="fill-current" />
                  Most Popular
                </span>
              </div>

              <div
                className="glass-card p-8 relative"
                style={{
                  border: '1px solid rgba(244,123,32,0.4)',
                  boxShadow: '0 0 30px rgba(244,123,32,0.08), 0 0 60px rgba(244,123,32,0.04)',
                }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-jade/10 border border-jade/20 text-jade text-[11px] font-body font-semibold uppercase tracking-wider mb-5">
                  Monthly Service
                </span>

                <h2 className="font-heading font-bold text-2xl text-[#1A3C6E] mb-3">Website Management</h2>
                <p className="text-[#555555] font-body text-sm leading-relaxed mb-6">
                  Everything your website needs to stay secure, fast, and up to date &mdash; handled for you every month. No surprises, no technical headaches.
                </p>

                {/* Pricing block */}
                <div className="mb-6">
                  <p className="text-[#555555] font-body text-xs mb-1">From</p>
                  <p className="font-heading font-extrabold text-[3rem] leading-none text-jade">&euro;150</p>
                  <p className="text-[#555555] font-body text-xs mt-1">/month</p>
                  <p className="text-[#555555] font-body text-xs mt-2">
                    Price depends on site size and level of support required
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {managementFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-jade flex-shrink-0 mt-0.5" />
                      <span className="text-[#333333] font-body text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-jade text-white font-heading font-bold text-sm rounded-lg hover:bg-jade-400 transition-all group"
                >
                  Get a Quote
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-[#555555] font-body text-xs text-center mt-3">
                  We&rsquo;ll assess your site and give you an accurate monthly quote
                </p>
              </div>
            </div>

            {/* ── CARD 3: ECOMMERCE WEBSITE ── */}
            <div
              className="reveal glass-card p-8 transition-all relative"
              style={{ '--reveal-index': 2 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-jade/10 border border-jade/20 text-jade text-[11px] font-body font-semibold uppercase tracking-wider mb-5">
                Monthly Service
              </span>

              <h2 className="font-heading font-bold text-2xl text-[#1A3C6E] mb-3">eCommerce Website</h2>
              <p className="text-[#555555] font-body text-sm leading-relaxed mb-6">
                A fully functional online store built on Shopify or WordPress/WooCommerce &mdash; designed to sell, with everything set up and ready to take orders from day one.
              </p>

              {/* Pricing block */}
              <div className="mb-6">
                <p className="text-[#555555] font-body text-xs mb-1">From</p>
                <p className="font-heading font-extrabold text-[3rem] leading-none text-jade">&euro;350</p>
                <p className="text-[#555555] font-body text-xs mt-1">/month</p>
                <p className="text-[#555555] font-body text-xs mt-2">
                  Price varies by store size, product count, and integrations required
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {ecommerceFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-jade flex-shrink-0 mt-0.5" />
                    <span className="text-[#333333] font-body text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 border border-jade text-jade font-heading font-bold text-sm rounded-lg hover:bg-jade hover:text-white transition-all group"
              >
                Get a Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-[#555555] font-body text-xs text-center mt-3">
                Tell us about your store and we&rsquo;ll give you an accurate quote
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. NOT SURE WHICH PLAN? ── */}
      <section ref={ctaMidRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '50%' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="reveal">
            <div className="glass-card p-10 sm:p-12 text-center">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#1A3C6E] mb-4">
                Not Sure Which Option Is Right for You?
              </h2>
              <p className="text-[#555555] font-body text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
                Most of our enquiries start with a quick conversation &mdash; tell us where you are right now and what you&rsquo;re trying to achieve, and we&rsquo;ll point you in the right direction. No pressure, no sales pitch. Just straight advice.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-jade text-white font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-sm"
                >
                  Fill In Our Contact Form
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+353873999296"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-jade text-jade font-heading font-bold rounded-lg hover:bg-jade hover:text-white transition-all text-sm"
                >
                  Or Call Conor Directly
                </a>
              </div>

              <p className="text-[#555555] font-body text-xs mt-6">
                We reply to all enquiries within one business day. No commitment required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHAT EVERY CLIENT GETS ── */}
      <section ref={everyRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">What You Get</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              What Every Client Gets
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              These aren&rsquo;t extras &mdash; they&rsquo;re how we work with every business we take on.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal-stagger">
            {everyClientGets.map((item, i) => (
              <div
                key={item.title}
                className="reveal glass-card glass-card-hover p-7 text-center transition-all"
                style={{ '--reveal-index': i }}
              >
                <div className="w-14 h-14 rounded-2xl bg-jade/10 border border-jade/20 flex items-center justify-center mx-auto mb-5">
                  <item.icon size={28} className="text-jade" />
                </div>
                <h3 className="font-heading font-bold text-sm text-[#1A3C6E] mb-2">{item.title}</h3>
                <p className="text-[#555555] font-body text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FAQ ── */}
      <section ref={faqRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '40%' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">FAQ</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="reveal glass-card p-6 sm:p-8">
            {faqItems.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA BANNER ── */}
      <section ref={ctaRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#1A3C6E]">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '50%' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Ready to Get Started? Let&rsquo;s Talk.
            </h2>
            <p className="text-white/80 font-body text-lg mb-8 max-w-xl mx-auto">
              Fill in the contact form and tell us what you need. We&rsquo;ll get back to you within one business day with a straight answer and a clear quote &mdash; no jargon, no obligation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-jade text-white font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-base"
            >
              Get a Free Quote Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="mt-6">
              <Link
                to="/services"
                className="text-jade font-heading font-semibold text-sm hover:underline inline-flex items-center gap-1"
              >
                Or view our full list of services
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
