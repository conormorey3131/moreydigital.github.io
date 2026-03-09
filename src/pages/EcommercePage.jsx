import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  ChevronDown,
  ShoppingCart,
  CreditCard,
  Smartphone,
  Package,
  BarChart2,
  Mail,
  Palette,
  Search,
  ShieldCheck,
  MapPin,
  TrendingUp,
  Zap,
  RefreshCw,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

/* ─── SEO ─── */
function PageMeta() {
  useEffect(() => {
    document.title = 'eCommerce Development & Support Ireland | Morey Digital'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Morey Digital builds and manages online stores for Irish businesses. Shopify and WooCommerce development, payment integration, and ongoing eCommerce support. Based in Clare, working nationwide.')
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

/* ─── WHY ECOMMERCE DATA ─── */
const whyItems = [
  {
    icon: ShieldCheck,
    title: 'Built for the Irish Market',
    desc: 'We understand Irish consumers, Irish payment preferences, and what Irish eCommerce businesses need to compete. Your store is built with local customers in mind \u2014 not a generic international template.',
  },
  {
    icon: MapPin,
    title: 'Local, Hands-On Support',
    desc: 'You\u2019re working with a team based in Ireland who knows your business. No overseas support queues \u2014 just fast, direct help from people who built your store and understand how it works.',
  },
  {
    icon: TrendingUp,
    title: 'Designed to Convert',
    desc: 'Every product page, category layout, and checkout flow is designed with one goal: turning browsers into buyers. We don\u2019t just make your store look good \u2014 we make it sell.',
  },
  {
    icon: Zap,
    title: 'Fast, Reliable Performance',
    desc: 'Slow eCommerce sites lose sales. We build stores that load fast on every device, handle traffic spikes without breaking, and give your customers a smooth, frustration-free shopping experience.',
  },
  {
    icon: RefreshCw,
    title: 'Ongoing Management Available',
    desc: 'We don\u2019t disappear after launch. Our monthly management plans cover product updates, promotional pages, performance reviews, and technical support \u2014 so your store stays in peak condition.',
  },
  {
    icon: CreditCard,
    title: 'Secure Payment Integration',
    desc: 'Stripe, PayPal, and all major payment gateways integrated securely. Your customers can pay confidently, and you get paid reliably \u2014 with proper security and PCI compliance handled for you.',
  },
]

/* ─── FEATURES DATA ─── */
const features = [
  {
    icon: Palette,
    title: 'Custom Store Design',
    desc: 'A professionally designed storefront that reflects your brand and gives customers confidence from the moment they land. No generic themes \u2014 your store looks and feels unique.',
  },
  {
    icon: Package,
    title: 'Product Catalogue Setup',
    desc: 'Full product setup including categories, variants, images, descriptions, and pricing. We structure your catalogue so customers find what they need quickly and easily.',
  },
  {
    icon: CreditCard,
    title: 'Payment Gateway Integration',
    desc: 'Stripe, PayPal, and other payment providers connected securely. Customers can pay with cards, digital wallets, and buy-now-pay-later options \u2014 whatever suits your market.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-Optimised Checkout',
    desc: 'Over 60% of online purchases happen on mobile. Your checkout is designed to be fast and frictionless on every screen size \u2014 reducing cart abandonment and increasing completed orders.',
  },
  {
    icon: Mail,
    title: 'Email Marketing Integration',
    desc: 'Connect your store to Klaviyo, Mailchimp, or your preferred email platform. Automated abandoned cart emails, order confirmations, and marketing campaigns \u2014 all set up and ready to go.',
  },
  {
    icon: Search,
    title: 'SEO & Product Discoverability',
    desc: 'Your products need to be found on Google. We optimise product pages, category structure, and metadata so your store ranks for the searches your customers are actually making.',
  },
  {
    icon: BarChart2,
    title: 'Analytics & Conversion Tracking',
    desc: 'Google Analytics, conversion tracking, and eCommerce reporting set up from day one. You\u2019ll know exactly where your traffic comes from and which products are performing best.',
  },
  {
    icon: ShoppingCart,
    title: 'Ongoing Store Management',
    desc: 'Product updates, seasonal promotions, performance reviews, and technical support. Our monthly plans keep your store running smoothly and looking fresh \u2014 without you having to manage it yourself.',
  },
]

/* ─── APPROACH DATA ─── */
const approachBlocks = [
  {
    title: 'Strategy & Store Planning',
    desc: 'We start by understanding your products, your customers, and your business goals. We map out your store structure, define your product categories, and plan the customer journey before any design work begins. This ensures your store is built around how your customers actually shop.',
    pills: ['Your Products', 'Your Customers', 'Your Goals'],
  },
  {
    title: 'Design & Build',
    desc: 'Your store is custom-designed to match your brand and optimised for conversions. Every page \u2014 from the homepage to the checkout \u2014 is built to guide customers towards completing a purchase. We handle product uploads, payment setup, shipping configuration, and all the technical details.',
    pills: ['Brand-Aligned', 'Conversion-Focused', 'Fully Configured'],
  },
  {
    title: 'Launch & Ongoing Support',
    desc: 'We test everything thoroughly before launch \u2014 across all devices and payment methods. After launch, we\u2019re on hand for product updates, promotional campaigns, performance reviews, and any technical issues. Your store is never left to run itself.',
    pills: ['Fully Tested', 'Managed Support', 'Always Evolving'],
  },
]

/* ─── SELECTED WORK ─── */
const projects = [
  {
    name: 'Vamp Lingerie',
    industry: 'eCommerce & Fashion',
    location: 'Ireland',
    service: 'Online Store Design & Build',
    image: 'images/vamp_up.webp',
    url: 'https://vamplingerie.com/',
  },
  {
    name: 'Cruz Ireland',
    industry: 'eCommerce & Retail',
    location: 'Ireland',
    service: 'eCommerce Store Design',
    image: 'images/cruz.webp',
    url: 'https://cruzireland.com/',
  },
  {
    name: "Paul's Parts",
    industry: 'Automotive Parts',
    location: 'Ireland',
    service: 'eCommerce Store & Ongoing Improvements',
    image: 'images/parts.png',
    url: 'https://paulsparts.ie/',
  },
]

/* ─── FAQ DATA ─── */
const faqItems = [
  {
    q: 'Shopify or WooCommerce \u2014 which should I use?',
    a: 'It depends on your business. Shopify is ideal if you want a fully hosted, easy-to-manage platform with minimal technical overhead. WooCommerce is better if you need more flexibility, already have a WordPress site, or want full control over your store. We\u2019ll recommend the right platform based on your specific needs.',
  },
  {
    q: 'How much does an eCommerce website cost?',
    a: 'Every project is scoped individually. A simple Shopify store with 20 products is very different to a WooCommerce build with custom functionality and integrations. We provide a detailed, fixed-price quote before any work starts \u2014 no hidden costs.',
  },
  {
    q: 'Can you migrate my existing store to a new platform?',
    a: 'Yes. We handle platform migrations regularly \u2014 moving products, customers, orders, and SEO data from one system to another. We plan migrations carefully to minimise downtime and protect your search rankings.',
  },
  {
    q: 'Do you handle product photography and content?',
    a: 'We can advise on product photography best practices and recommend trusted partners for professional shoots. For product descriptions and store copy, we can work with content you provide or connect you with a specialist copywriter.',
  },
  {
    q: 'Will my store work on mobile?',
    a: 'Absolutely. Every store we build is mobile-first. The majority of online shopping now happens on phones \u2014 your store will look and work perfectly on every screen size, with a checkout flow optimised for mobile users.',
  },
  {
    q: 'What happens after my store launches?',
    a: 'We offer monthly eCommerce management plans that cover product updates, promotional pages, performance monitoring, and technical support. You\u2019re never left to figure things out on your own \u2014 we\u2019re here for the long term.',
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
export default function EcommercePage() {
  const heroRef = useReveal()
  const whyRef = useReveal()
  const featuresRef = useReveal()
  const approachRef = useReveal()
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
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '45%' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-jade/10 border border-jade/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-jade animate-pulse" />
              <span className="text-jade text-xs font-body font-medium">eCommerce Development & Support</span>
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 break-words">
              Online Stores Built to{' '}
              <span className="text-jade">Sell</span> &mdash; and Supported to Keep Selling
            </h1>

            <p className="text-gray-300 font-body text-base sm:text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
              Whether you&rsquo;re launching your first online store or scaling an existing one, Morey Digital delivers eCommerce solutions built for the Irish market. We handle design, product setup, payment integration, and ongoing support.
            </p>

            <p className="text-gray-400 font-body text-sm leading-relaxed mb-10 max-w-3xl mx-auto">
              Your store will look great, convert well, and run reliably. And with our ongoing management plans, you&rsquo;re never left to figure it out alone.
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

      {/* ── 2. WHY CHOOSE US ── */}
      <section ref={whyRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Why Us</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              Why Irish Businesses Choose Morey Digital for eCommerce
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
                <h3 className="font-heading font-bold text-base text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHAT'S INCLUDED ── */}
      <section ref={featuresRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '65%', '--glow-y': '30%' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">What&rsquo;s Included</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              Everything You Need to Sell Online
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 reveal-stagger">
            {features.map((item, i) => (
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
                    <h3 className="font-heading font-bold text-base text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 font-body text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OUR APPROACH ── */}
      <section ref={approachRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Our Process</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              How We Build Your Online Store
            </h2>
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

      {/* ── 5. PORTFOLIO PLACEHOLDER ── */}
      <section ref={portfolioRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '50%' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Our Work</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              Online Stores We&rsquo;ve Built
            </h2>
            <p className="text-gray-400 font-body mt-4 max-w-2xl mx-auto">
              eCommerce projects built for Irish businesses. More case studies coming soon.
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

      {/* ── 6. FAQ ── */}
      <section ref={faqRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade-subtle" />
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

      {/* ── 7. FINAL CTA ── */}
      <section ref={ctaRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '50%' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Ready to Launch an Online Store That Actually Sells?
            </h2>
            <p className="text-gray-400 font-body text-lg mb-8 max-w-xl mx-auto">
              Get a free, no-obligation quote. We&rsquo;ll talk through your products, your goals, and what your store needs to succeed.
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
