import { Link } from 'react-router-dom'
import { ArrowRight, Check, Star } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const plans = [
  {
    label: 'One-Off Project',
    title: 'Starter Website',
    price: '€499',
    priceSuffix: 'one-off',
    priceNote: 'then €39/month for hosting, security & updates',
    desc: 'A professional, fast-loading website built for your business — designed to make a great first impression and convert visitors into enquiries.',
    features: [
      'Custom design — built for your brand',
      'Mobile-responsive and fast-loading',
      'Up to 5 pages',
      'Contact form set up and tested',
      'Basic SEO setup included',
    ],
    featured: false,
  },
  {
    label: 'Monthly Service',
    title: 'Website Management',
    price: '€150',
    priceSuffix: '/month',
    priceNote: 'Price depends on site size and support level',
    desc: 'Everything your website needs to stay secure, fast, and up to date — handled for you every month.',
    features: [
      'Software updates — platform, plugins & theme',
      'Security monitoring & malware scanning',
      'Daily automated backups',
      'Uptime monitoring — 24/7 alerts',
    ],
    featured: true,
  },
  {
    label: 'Monthly Service',
    title: 'eCommerce Website',
    price: '€350',
    priceSuffix: '/month',
    priceNote: 'Price varies by store size and integrations',
    desc: 'A fully functional online store built on Shopify or WooCommerce — designed to sell from day one.',
    features: [
      'Shopify or WooCommerce — right fit for you',
      'Custom storefront design',
      'Payment gateway integration',
      'Mobile-optimised checkout',
      'Ongoing support for store changes',
    ],
    featured: false,
  },
]

export default function Plans() {
  const ref = useReveal()

  return (
    <section id="plans" ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '50%' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 reveal">
          <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Plans</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
            Simple Plans, No Surprises
          </h2>
          <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
            Transparent pricing for Irish businesses. Choose what fits — and get in touch for a free, no-obligation quote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 reveal-stagger w-full">
          {plans.map((plan, i) => (
            <div
              key={plan.title}
              className="reveal relative transition-all"
              style={{ '--reveal-index': i }}
            >
              {plan.featured && (
                <div className="flex justify-center mb-[-14px] relative z-10">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-jade text-white font-heading font-bold text-xs uppercase tracking-wider">
                    <Star size={12} className="fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`glass-card p-8 h-full flex flex-col ${
                  plan.featured
                    ? ''
                    : 'glass-card-hover'
                }`}
                style={
                  plan.featured
                    ? {
                        border: '1px solid rgba(244,123,32,0.4)',
                        boxShadow: '0 0 30px rgba(244,123,32,0.08)',
                      }
                    : undefined
                }
              >
                <span className="inline-block px-3 py-1 rounded-full bg-jade/10 border border-jade/20 text-jade text-[11px] font-body font-semibold uppercase tracking-wider mb-4 self-start">
                  {plan.label}
                </span>

                <h3 className="font-heading font-bold text-2xl text-[#1A3C6E] mb-2">{plan.title}</h3>
                <p className="text-[#555555] font-body text-sm mb-5 leading-relaxed">{plan.desc}</p>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[#555555] font-body text-xs">From</span>
                  </div>
                  <p className="font-heading font-extrabold text-3xl text-jade leading-none mt-1">{plan.price}</p>
                  <p className="text-[#555555] font-body text-xs mt-1">{plan.priceSuffix}</p>
                  <p className="text-[#555555] font-body text-[11px] mt-1">{plan.priceNote}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
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
                      : 'border border-jade text-jade hover:bg-jade hover:text-dark'
                  }`}
                >
                  Get a Quote
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <Link
            to="/plans"
            className="text-jade font-heading font-semibold text-sm hover:underline inline-flex items-center gap-1"
          >
            See Full Pricing &amp; Details
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
