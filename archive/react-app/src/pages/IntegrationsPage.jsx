import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ChevronDown,
  CreditCard,
  Wallet,
  ShoppingBag,
  ShoppingCart,
  Mail,
  MailOpen,
  Users,
  BarChart2,
  MapPin,
  Calendar,
  CalendarCheck,
  Receipt,
  Activity,
  TrendingUp,
  MessageCircle,
  Zap,
  Smile,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

/* ─── SEO ─── */
function PageMeta() {
  useEffect(() => {
    document.title = 'Platform Integrations & Connected Websites Ireland | Morey Digital'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Morey Digital connects your website to the tools your business already uses \u2014 booking systems, CRMs, payment gateways, and more. Built for Irish businesses.')
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
    title: 'We Start by Understanding Your Systems',
    desc: 'Before any technical work begins, we map out your existing tools, your data flows, and what you\u2019re trying to achieve. Whether it\u2019s connecting a booking system, syncing a CRM, or automating an email sequence \u2014 we design the integration around how your business actually works, not the other way around.',
    pills: ['Your Tools', 'Your Workflow', 'Your Goals'],
  },
  {
    title: 'Simple for Users, Powerful Behind the Scenes',
    desc: 'The best integrations are invisible to your customers. They just experience a fast, seamless, connected journey \u2014 making a booking, completing a payment, or receiving the right follow-up automatically. We handle the complexity behind the scenes so everything feels effortless on the front end.',
    pills: ['Seamless UX', 'Real-Time Data', 'Automated Flows'],
  },
  {
    title: 'Built for Performance and Security',
    desc: 'Every integration we build is implemented with proper authentication, error handling, and security best practices. Your customer data stays protected, your integrations stay reliable, and everything is tested thoroughly before it goes live on your site.',
    pills: ['Secure by Default', 'Always Available', 'Properly Tested'],
  },
]

/* ─── POWER SECTIONS DATA ─── */
const powerSections = [
  {
    title: 'Your Website Talks to Your Other Tools',
    paragraphs: [
      'We connect your website to the CRMs, booking platforms, payment gateways, and business tools you already use \u2014 so your data flows automatically without anyone having to copy it manually. A new enquiry on your website can automatically update your CRM, trigger a confirmation email, and notify your team.',
      'Your website becomes a central hub that communicates with everything else in your business \u2014 keeping information accurate, reducing admin time, and removing the gaps where things fall through the cracks.',
    ],
    pills: ['Live Data', 'Auto-Sync', 'Connected Tools'],
  },
  {
    title: 'A Website That Always Reflects Reality',
    paragraphs: [
      'Static websites show outdated information until someone manually updates them. Connected websites pull live data \u2014 current availability, real pricing, up-to-date stock levels, live booking slots \u2014 automatically and accurately.',
      'Dynamic content keeps your site relevant, reduces the risk of errors, and means your customers always see the right information at the right time, without you having to maintain it manually.',
    ],
    pills: ['Live Availability', 'Auto-Updated', 'Always Accurate'],
  },
]

/* ─── INTEGRATION BADGES DATA ─── */
// TODO: Replace badge pills with actual logos when brand assets are available
const integrationBadges = [
  { name: 'Stripe', icon: CreditCard },
  { name: 'PayPal', icon: Wallet },
  { name: 'Shopify', icon: ShoppingBag },
  { name: 'WooCommerce', icon: ShoppingCart },
  { name: 'Mailchimp', icon: Mail },
  { name: 'Klaviyo', icon: MailOpen },
  { name: 'HubSpot', icon: Users },
  { name: 'Google Analytics', icon: BarChart2 },
  { name: 'Google Business', icon: MapPin },
  { name: 'Calendly', icon: Calendar },
  { name: 'Booksy', icon: CalendarCheck },
  { name: 'Xero', icon: Receipt },
  { name: 'Meta / Facebook Pixel', icon: Activity },
  { name: 'Google Ads', icon: TrendingUp },
  { name: 'WhatsApp Business', icon: MessageCircle },
  { name: 'Zapier', icon: Zap },
]

/* ─── SMARTER CHOICE DATA ─── */
const smarterBlocks = [
  {
    title: 'One Action, Multiple Systems Updated Automatically',
    paragraphs: [
      'We build integrations that trigger a chain of automated actions from a single customer interaction. When someone submits an enquiry on your website, we can automatically: add them to your CRM, send them a personalised confirmation email, notify the right member of your team, and log the lead in your reporting system.',
      'This kind of automation saves hours of manual work every week, reduces the chance of leads being missed, and ensures every customer gets a fast, professional response \u2014 without anyone having to do it manually each time.',
    ],
    pills: ['Saves Time', 'No Missed Leads', 'Consistent Follow-Up'],
  },
  {
    title: 'Your Data, Consistent Across Every System',
    paragraphs: [
      'When your website, your CRM, your booking system, and your email platform are all connected and in sync, you eliminate the problems that come from data living in too many separate places \u2014 outdated records, duplicate entries, and information that doesn\u2019t match up.',
      'We build integrations following a single source of truth approach \u2014 any update made in one system is automatically reflected everywhere else. Accurate data, less admin, and full confidence in what your systems are telling you.',
    ],
    pills: ['Accurate Data', 'No Duplicates', 'Fully in Sync'],
  },
]

/* ─── BUSINESS IMPACT DATA ─── */
const impactItems = [
  {
    icon: Zap,
    title: 'Less Manual Work, Fewer Errors',
    desc: 'Automating the flow of data between your website and your business tools cuts down significantly on manual data entry, copy-pasting, and the errors that come with them. Your team spends less time on admin and more time on work that actually matters.',
  },
  {
    icon: Smile,
    title: 'A Faster, More Professional Customer Experience',
    desc: 'When your systems are connected, customers get instant confirmations, accurate availability, and seamless transactions \u2014 without delays caused by manual processes. That responsiveness builds trust and makes your business feel more professional.',
  },
  {
    icon: BarChart2,
    title: 'Better Visibility Across Your Business',
    desc: 'Connected systems mean your data is accurate and up to date across every platform. You get a clearer picture of what\u2019s working \u2014 enquiries, bookings, sales \u2014 without having to manually check multiple tools and try to reconcile inconsistent numbers.',
  },
  {
    icon: TrendingUp,
    title: 'A Foundation That Grows With You',
    desc: 'API-connected websites scale far more easily than disconnected ones. As your business grows and your toolset evolves, your website can be updated and extended to connect with new systems \u2014 without needing to start from scratch.',
  },
]

/* ─── FAQ DATA ─── */
const faqItems = [
  {
    q: 'What is a platform integration?',
    a: 'A platform integration connects your website to an external tool or service so they can share data and trigger actions automatically. For example, connecting your website to your CRM so new enquiries appear there instantly, or linking it to Stripe so payments are processed directly on your site.',
  },
  {
    q: 'Do I need integrations on my website?',
    a: 'Not every business does \u2014 but if you\u2019re manually copying data between systems, if customers have to wait for confirmations, or if your website can\u2019t show live availability or pricing, integrations will save you significant time and improve the experience for your customers.',
  },
  {
    q: 'What tools can you integrate with?',
    a: 'We work with most major platforms \u2014 Stripe, PayPal, Shopify, WooCommerce, Mailchimp, Klaviyo, HubSpot, Google Analytics, Calendly, Xero, Zapier, Meta Pixel, Google Ads, and many more. If a tool has an API, we can almost certainly connect it to your website.',
  },
  {
    q: 'How long does an integration project take?',
    a: 'It depends on the complexity. A simple integration \u2014 like connecting a contact form to Mailchimp \u2014 can be done in a day. A more complex setup involving multiple systems, custom data flows, or real-time syncing will take longer and is scoped individually. We always agree timelines clearly before starting.',
  },
  {
    q: 'Will integrations slow my website down?',
    a: 'Not if they\u2019re built properly. We implement integrations with caching, proper error handling, and performance optimisation so they don\u2019t impact page speed. We test load times before and after every integration to make sure your site stays fast.',
  },
  {
    q: 'Is my customers\u2019 data safe with third-party integrations?',
    a: 'Yes. We follow security best practices for every integration \u2014 proper authentication, encrypted connections (HTTPS), and minimal data exposure. We only send the data each platform needs, and we follow GDPR requirements for any customer data that flows between systems.',
  },
  {
    q: 'Can you integrate with a tool I already use that isn\u2019t on your list?',
    a: 'Almost certainly yes. Most modern business tools have APIs. Send us details of what you\u2019re using and what you want it to connect to \u2014 we\u2019ll tell you quickly whether it\u2019s possible and how we\u2019d approach it.',
  },
  {
    q: 'What if the integration breaks or something goes wrong?',
    a: 'Integrations are covered under our monthly Website Management & Maintenance plans. We monitor for errors, handle updates when third-party platforms change their APIs, and fix any issues quickly. You\u2019re not left dealing with technical problems on your own.',
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
        style={{ maxHeight: isOpen ? '400px' : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <div className="px-6 pb-6 pt-0">
          <p className="text-[#555555] font-body text-sm leading-relaxed">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

/* ─── PAGE COMPONENT ─── */
export default function IntegrationsPage() {
  const heroRef = useReveal()
  const approachRef = useReveal()
  const powerRef = useReveal()
  const badgesRef = useReveal()
  const smarterRef = useReveal()
  const impactRef = useReveal()
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
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '45%', '--glow-y': '50%' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-jade/10 border border-jade/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-jade animate-pulse" />
              <span className="text-jade text-xs font-body font-medium">Platform Integrations & Connected Websites</span>
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 break-words">
              Connect Your Website to the Tools That{' '}
              <span className="text-jade">Power Your Business</span>
            </h1>

            <p className="text-white font-body text-base sm:text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
              A static website that just sits there is a missed opportunity. The businesses getting the most from their websites have connected them to the platforms they already use every day &mdash; booking systems, payment processors, email marketing tools, CRMs, and more.
            </p>

            <p className="text-white/80 font-body text-sm leading-relaxed mb-10 max-w-3xl mx-auto">
              Morey Digital builds websites that work intelligently alongside your business systems. That means less manual work, fewer errors, better customer experiences, and a website that does far more than just look good.
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

      {/* ── 2. OUR APPROACH ── */}
      <section ref={approachRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Our Approach</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              Our Approach to Integrations & Connected Websites
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              We believe your website should work with your business, not separately from it. Every integration we build is planned carefully and implemented cleanly.
            </p>
          </div>

          <div className="space-y-8 reveal-stagger">
            {approachBlocks.map((block, i) => (
              <div
                key={block.title}
                className="reveal glass-card p-8 sm:p-10 transition-all"
                style={{ '--reveal-index': i }}
              >
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#1A3C6E] mb-4">
                  {block.title}
                </h3>
                <p className="text-[#555555] font-body text-sm leading-relaxed mb-6">
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

      {/* ── 3. THE POWER OF A CONNECTED WEBSITE ── */}
      <section ref={powerRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '60%', '--glow-y': '35%' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Connected Websites</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              What a Connected Website Can Do for Your Business
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
                    <div className="lg:w-3/5">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#1A3C6E] mb-5">
                        {section.title}
                      </h3>
                      {section.paragraphs.map((para, j) => (
                        <p key={j} className="text-[#555555] font-body text-sm leading-relaxed mb-4">
                          {para}
                        </p>
                      ))}
                    </div>
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

      {/* ── 4. INTEGRATION LOGO STRIP ── */}
      <section ref={badgesRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Platforms</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              Tools & Platforms We Integrate With
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              We connect Irish business websites to the platforms that matter most.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 reveal-stagger">
            {integrationBadges.map((badge, i) => (
              <div
                key={badge.name}
                className="reveal flex items-center gap-3 bg-gray-100 border border-gray-200 rounded-xl py-3 px-4 hover:border-jade/25 transition-all"
                style={{ '--reveal-index': i }}
              >
                <badge.icon size={18} className="text-jade flex-shrink-0" />
                <span className="text-[#333333] font-body text-sm">{badge.name}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-[#555555] font-body text-sm mt-8 reveal">
            Don&rsquo;t see the tool you use?{' '}
            <Link to="/contact" className="text-jade hover:underline">Get in touch</Link>{' '}
            &mdash; if it has an API, we can almost certainly connect it.
          </p>
        </div>
      </section>

      {/* ── 5. WHY A CONNECTED WEBSITE IS SMARTER ── */}
      <section ref={smarterRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '40%', '--glow-y': '50%' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Smarter Websites</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              Why a Connected Website Is the Smarter Choice
            </h2>
          </div>

          <div className="space-y-10 reveal-stagger">
            {smarterBlocks.map((block, i) => (
              <div
                key={block.title}
                className="reveal glass-card p-8 sm:p-10 transition-all"
                style={{ '--reveal-index': i }}
              >
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#1A3C6E] mb-5">
                  {block.title}
                </h3>
                {block.paragraphs.map((para, j) => (
                  <p key={j} className="text-[#555555] font-body text-sm leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
                <div className="flex flex-wrap gap-2 mt-2">
                  {block.pills.map((pill) => (
                    <BadgePill key={pill} text={pill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. BUSINESS IMPACT ── */}
      <section ref={impactRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Business Impact</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              What Integrations Actually Deliver for Your Business
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              The right connections between your website and your tools deliver real, measurable improvements to how your business runs.
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
                    <h3 className="font-heading font-bold text-base text-[#1A3C6E] mb-2">{item.title}</h3>
                    <p className="text-[#555555] font-body text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ── */}
      <section ref={faqRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '40%' }} />
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

      {/* ── 8. FINAL CTA ── */}
      <section ref={ctaRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#1A3C6E]">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '50%' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Ready to Build a Website That Works Smarter for Your Business?
            </h2>
            <p className="text-white/80 font-body text-lg mb-8 max-w-xl mx-auto">
              Tell us what tools you use and what you&rsquo;re trying to achieve. We&rsquo;ll map out the right integrations and give you a clear, no-obligation quote.
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
