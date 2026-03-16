import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  ChevronDown,
  ShieldCheck,
  MapPin,
  ScanSearch,
  DatabaseBackup,
  RefreshCw,
  FileBarChart,
  CalendarClock,
  Wifi,
  Gauge,
  Lock,
  PenLine,
  Activity,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

/* ─── SEO ─── */
function PageMeta() {
  useEffect(() => {
    document.title = 'Website Management & Maintenance | Morey Digital — Monthly Website Care for Irish Businesses'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Fully managed website maintenance for Irish businesses. Monthly updates, security monitoring, daily backups, performance checks and ongoing support. Based in Clare, working nationwide.')
    }
  }, [])
  return null
}

/* ─── WHY US DATA ─── */
const whyItems = [
  {
    icon: ShieldCheck,
    title: 'Proactive, Not Reactive',
    desc: 'We don\'t wait for things to break. We monitor your site continuously and handle updates, security patches, and performance issues before they become problems.',
  },
  {
    icon: MapPin,
    title: 'Irish-Based Support',
    desc: 'You\'re dealing with a local team who knows your business. No overseas call centres, no ticket queues \u2014 just fast, direct support from people who understand your site.',
  },
  {
    icon: ScanSearch,
    title: 'Security Monitoring & Protection',
    desc: 'Your website is scanned for threats, malware, and vulnerabilities on an ongoing basis. We respond immediately if anything is detected \u2014 protecting your reputation and your customers.',
  },
  {
    icon: DatabaseBackup,
    title: 'Daily Backups & Fast Recovery',
    desc: 'Your site is backed up every day. If anything ever goes wrong \u2014 whether it\'s a failed update, a hack, or human error \u2014 we can restore it quickly with minimal disruption.',
  },
  {
    icon: RefreshCw,
    title: 'Full Software Updates, Safely Applied',
    desc: 'Every WordPress core update, plugin update, and theme update is tested before it goes live on your site. No surprise breakages, no downtime from a careless update.',
  },
  {
    icon: FileBarChart,
    title: 'Transparent Monthly Reporting',
    desc: 'You receive a clear monthly report showing what was done, how your site is performing, and anything we recommend. No jargon \u2014 just a straightforward update on your website\'s health.',
  },
]

/* ─── SERVICES INCLUDE DATA ─── */
const serviceItems = [
  {
    icon: CalendarClock,
    title: 'Monthly Software Updates',
    desc: 'WordPress core, plugins, and themes updated every month as part of your plan. Every update is checked for compatibility before being applied \u2014 no surprise errors, no downtime from a bad update.',
  },
  {
    icon: DatabaseBackup,
    title: 'Daily Automated Backups',
    desc: 'Your full website \u2014 files and database \u2014 is backed up every day and stored securely offsite. If anything goes wrong, we can restore your site quickly and get you back online fast.',
  },
  {
    icon: Wifi,
    title: 'Uptime Monitoring',
    desc: 'We monitor your website 24/7 and get alerted the moment it goes offline. In most cases we\'ll be resolving the issue before you even notice. Maximum uptime, minimum stress.',
  },
  {
    icon: ScanSearch,
    title: 'Security Scanning & Malware Protection',
    desc: 'Ongoing security scans check your site for malware, suspicious files, and known vulnerabilities. If a threat is detected, we act immediately to clean and secure your site.',
  },
  {
    icon: Gauge,
    title: 'Performance Monitoring',
    desc: 'We track your site\'s load speed and Core Web Vitals on an ongoing basis. Slow sites lose customers \u2014 we make sure yours stays fast and responsive across all devices.',
  },
  {
    icon: PenLine,
    title: 'Content Updates & Minor Edits',
    desc: 'Need to update a price, swap an image, or change some text? Minor content updates are included in your monthly plan \u2014 just send us the change and we\'ll handle it.',
  },
  {
    icon: Lock,
    title: 'SSL Certificate Management',
    desc: 'Your SSL certificate keeps your site secure and trusted by browsers. We manage renewal and installation so it never lapses \u2014 no padlock warnings, no lost trust.',
  },
  {
    icon: Activity,
    title: 'Monthly Health Report',
    desc: 'Every month you receive a clear summary of what was updated, what was checked, and how your site is performing. Plain English, no technical jargon \u2014 just a useful overview of your website\'s health.',
  },
]

/* ─── PROCESS DATA ─── */
const processSteps = [
  {
    num: '01',
    title: 'Onboarding & Audit',
    desc: 'We start with a full audit of your existing website \u2014 checking software versions, security status, speed, and any existing issues. We fix any problems before ongoing management begins.',
  },
  {
    num: '02',
    title: 'Monthly Updates & Testing',
    desc: 'Every month we apply all available software updates in a controlled way. We test your site after every update to make sure nothing has broken before changes go live.',
  },
  {
    num: '03',
    title: 'Security & Uptime Monitoring',
    desc: 'Continuous monitoring runs in the background every day. We track uptime, scan for threats, and respond immediately if anything requires attention.',
  },
  {
    num: '04',
    title: 'Content Changes & Support',
    desc: 'Need something changed on your site? Send us the update and we\'ll take care of it. Minor content edits are included in all plans \u2014 no extra charge, no waiting.',
  },
  {
    num: '05',
    title: 'Monthly Report & Check-In',
    desc: 'At the end of each month you receive your website health report. We\'ll flag anything worth discussing and let you know if we recommend any improvements.',
  },
]

/* ─── PLANS DATA ─── */
const plans = [
  {
    label: 'Starter',
    title: 'Launch',
    desc: 'Perfect for new businesses or anyone who needs a professional website up and running fast.',
    features: [
      'Custom-designed responsive website',
      'Up to 5 pages',
      'Basic on-page SEO setup',
      'Contact form integration',
      'Mobile-optimised design',
    ],
    featured: false,
  },
  {
    label: 'Most Popular',
    title: 'Growth',
    desc: 'For businesses ready to grow online with SEO, Google visibility, and a site that converts.',
    features: [
      'Everything in Launch, plus:',
      'Up to 10 pages',
      'Full SEO & Google Business setup',
      'Analytics and conversion tracking',
      'Monthly performance report',
    ],
    featured: true,
  },
  {
    label: 'Full Service',
    title: 'Managed',
    desc: 'For businesses that want everything handled \u2014 updates, support, SEO, and ongoing optimisation.',
    features: [
      'Everything in Growth, plus:',
      'Unlimited content updates',
      'Monthly SEO optimisation',
      'Priority support & 24h response',
      'Dedicated account manager',
    ],
    featured: false,
  },
]

/* ─── FAQ DATA ─── */
const faqItems = [
  {
    q: 'What\u2019s included in a monthly website management plan?',
    a: 'Every plan includes monthly software updates (WordPress, plugins, themes), daily automated backups, uptime monitoring, security scanning, SSL management, and a monthly health report. Higher plans include content updates, priority support, and more.',
  },
  {
    q: 'How is this different from just having hosting?',
    a: 'Standard hosting gives you server space \u2014 that\u2019s it. Our management plans include everything needed to keep your site healthy: updates, security, backups, performance monitoring, and support. Hosting on its own does none of that.',
  },
  {
    q: 'What happens if my site gets hacked or goes down?',
    a: 'We respond immediately. With 24/7 uptime monitoring, we\u2019re usually alerted before you are. If your site is compromised, we isolate the issue, clean the site, restore from backup if needed, and harden security to prevent it happening again.',
  },
  {
    q: 'Can you manage a website that Morey Digital didn\u2019t build?',
    a: 'Yes. We can take over management of an existing website that was built by another agency or developer. We\u2019ll start with a full site audit to assess its current condition, and we\u2019ll be upfront about anything that needs to be fixed before we begin.',
  },
  {
    q: 'How do I request content updates?',
    a: 'Simply email or message us with the change you need. For plans that include content updates, we\u2019ll make the edit and confirm it\u2019s done \u2014 usually within 1\u20132 business days. We keep it simple.',
  },
  {
    q: 'Will I still have access to my own website?',
    a: 'Absolutely. You retain full ownership and admin access to your website at all times. We manage it on your behalf \u2014 we never take over or restrict your access.',
  },
  {
    q: 'What if I want to cancel?',
    a: 'Our management plans run monthly with no long-term contracts. You can cancel anytime. We\u2019ll provide a clean handover of your site and any relevant documentation.',
  },
  {
    q: 'Do you offer emergency support outside of the plan?',
    a: 'Yes. If something urgent comes up outside the scope of your plan, our team is available to help. We\u2019ll quote you clearly for any out-of-plan work before starting.',
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
export default function WebsiteManagementPage() {
  const heroRef = useReveal()
  const whyRef = useReveal()
  const includesRef = useReveal()
  const processRef = useReveal()
  const plansRef = useReveal()
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
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '60%', '--glow-y': '45%' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-jade/10 border border-jade/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-jade animate-pulse" />
              <span className="text-jade text-xs font-body font-medium">Website Management & Maintenance for Irish Businesses</span>
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 break-words">
              Keep Your Website Secure, Updated &{' '}
              <span className="text-jade">Running Smoothly</span>{' '}
              &mdash; Every Month
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-body font-medium leading-relaxed mb-6 max-w-3xl mx-auto">
              Proactive, fully managed website care. Trusted by Irish businesses who want complete confidence in their online presence &mdash; without the hassle of managing it themselves.
            </p>

            <p className="text-white/80 font-body text-sm leading-relaxed mb-4 max-w-2xl mx-auto">
              At Morey Digital, we keep your website performing at its best every single month. Our fully managed maintenance service handles updates, security monitoring, backups, and performance checks &mdash; so you never have to think about the technical side of your site again.
            </p>

            <p className="text-white/80 font-body text-sm leading-relaxed mb-10 max-w-2xl mx-auto">
              We take care of every update, every test, and every fix. You focus on running your business. We make sure your website is always online, always secure, and always working the way it should.
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

      {/* ── 2. WHAT SETS US APART ── */}
      <section ref={whyRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Why Us</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              What Sets Morey Digital Apart for Website Management?
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

      {/* ── 3. WHAT'S INCLUDED ── */}
      <section ref={includesRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">What&rsquo;s Included</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              What&rsquo;s Included in Our Website Management Service
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 reveal-stagger">
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

      {/* ── 4. HOW IT WORKS ── */}
      <section ref={processRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Our Process</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              How Our Monthly Management Works
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              A clear, five-step process. You always know exactly what&rsquo;s happening with your website.
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

      {/* ── 5. PLANS ── */}
      <section ref={plansRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Plans</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              Choose the Right Level of Support
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              All plans include monthly updates, backups, monitoring, and reporting. Upgrade any time as your needs grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 reveal-stagger w-full">
            {plans.map((plan, i) => (
              <div
                key={plan.title}
                className={`reveal glass-card p-8 transition-all relative ${
                  plan.featured
                    ? 'border-jade/30 bg-jade/[0.04] ring-1 ring-jade/20'
                    : 'glass-card-hover'
                }`}
                style={{ '--reveal-index': i }}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-jade text-white text-xs font-heading font-bold rounded-full">
                    Most Popular
                  </div>
                )}

                <span className="text-jade text-xs font-body font-medium uppercase tracking-wider">{plan.label}</span>
                <h3 className="font-heading font-bold text-2xl text-[#1A3C6E] mt-2 mb-2">{plan.title}</h3>
                <p className="text-[#555555] font-body text-sm mb-6 leading-relaxed">{plan.desc}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm font-body">
                      <Check size={16} className="text-jade mt-0.5 flex-shrink-0" />
                      <span className="text-[#555555]">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-lg font-heading font-semibold text-sm transition-all group ${
                    plan.featured
                      ? 'bg-jade text-white hover:bg-jade-400'
                      : 'border border-gray-200 text-[#1A3C6E] hover:bg-gray-100'
                  }`}
                >
                  Get Started
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-[#555555] font-body text-sm mt-8 reveal">
            Not sure which plan is right for you?{' '}
            <Link to="/contact" className="text-jade hover:underline">Get in touch</Link>{' '}
            and we&rsquo;ll recommend the best fit for your business.
          </p>
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
              Ready to Stop Worrying About Your Website?
            </h2>
            <p className="text-white/80 font-body text-lg mb-8 max-w-xl mx-auto">
              Let Morey Digital handle the technical side so you can focus on your business. Get a free, no-obligation quote today.
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
