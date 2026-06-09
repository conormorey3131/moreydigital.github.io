import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  Shield,
  Zap,
  MessageSquare,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

/* ─── SEO ─── */
function PageMeta() {
  useEffect(() => {
    document.title = 'Contact Us | Morey Digital — Get a Free Quote for Your Website Project'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Get in touch with Morey Digital. Request a free, no-obligation quote for website design, development, management, SEO, or any digital project. Based in Clare, working nationwide across Ireland.')
    }
  }, [])
  return null
}

/* ─── CONTACT DETAILS DATA ─── */
const contactDetails = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+353 87 399 9296',
    href: 'tel:+353873999296',
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    value: 'Message us on WhatsApp',
    href: 'https://wa.me/353873999296',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'conor@moreydigital.ie',
    href: 'mailto:conor@moreydigital.ie',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Clare, Ireland — working nationwide',
    href: null,
  },
]

/* ─── SERVICE OPTIONS ─── */
const serviceOptions = [
  'Website Design & Development',
  'Website Management & Maintenance',
  'SEO & Google Business Optimisation',
  'eCommerce Development & Support',
  'Branding & Digital Assets',
  'Ongoing Growth Support',
  'Other / Not Sure',
]

/* ─── FAQ DATA ─── */
const faqItems = [
  {
    q: 'Is there any cost for the initial consultation?',
    a: 'No. Every enquiry starts with a free, no-obligation conversation. We\u2019ll discuss your goals, answer your questions, and give you an honest recommendation \u2014 no pressure, no hard sell.',
  },
  {
    q: 'How quickly will I hear back?',
    a: 'We respond to all enquiries within 24 hours on business days. Most of the time, you\u2019ll hear from us the same day.',
  },
  {
    q: 'What happens after I submit the form?',
    a: 'We\u2019ll review your enquiry and get back to you to arrange a short call or meeting. From there, we\u2019ll put together a tailored proposal based on your goals and budget.',
  },
]

/* ─── WHAT HAPPENS NEXT STEPS ─── */
const nextSteps = [
  'We review your enquiry and get back to you within 24 hours.',
  'We arrange a short call to understand your goals and requirements.',
  'We put together a tailored proposal with clear pricing \u2014 no surprises.',
]

/* ─── PAGE COMPONENT ─── */
export default function ContactPage() {
  const heroRef = useReveal()
  const formRef = useReveal()
  const faqRef = useReveal()
  const ctaRef = useReveal()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'db0855d6-e6d7-4311-84de-a39a0e86e1cb',
          subject: `New enquiry from ${formData.name} — Morey Digital`,
          from_name: formData.name,
          ...formData,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', business: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-[#1A1A1A] font-body text-sm placeholder-gray-500 focus:outline-none focus:border-jade/40 focus:ring-1 focus:ring-jade/20 transition-colors'

  return (
    <>
      <PageMeta />

      {/* ── 1. PAGE HERO ── */}
      <section ref={heroRef} className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden bg-[#1A3C6E]">
        <div className="absolute inset-0 grid-dots" />
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '50%' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-jade/10 border border-jade/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-jade animate-pulse" />
              <span className="text-jade text-xs font-body font-medium">Get in Touch</span>
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 break-words">
              Let&rsquo;s Talk About Your{' '}
              <span className="text-jade">Next Project</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 font-body leading-relaxed max-w-2xl mx-auto">
              Whether you need a new website, ongoing management, or help growing your online presence &mdash; we&rsquo;re here to help. Send us a message, give us a call, or reach out on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. FORM + CONTACT DETAILS ── */}
      <section ref={formRef} className="relative py-16 lg:py-24 overflow-hidden bg-white">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="reveal">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* ── LEFT: Contact Form (3/5 width) ── */}
              <div className="lg:col-span-3">
                <div className="glass-card p-8 sm:p-10">
                  {status === 'success' ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-jade/10 border border-jade/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={32} className="text-jade" />
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-[#1A3C6E] mb-3">
                        Message Sent Successfully
                      </h3>
                      <p className="text-[#555555] font-body text-sm leading-relaxed mb-6 max-w-md mx-auto">
                        Thanks for getting in touch. We&rsquo;ll review your enquiry and get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-[#1A3C6E] font-heading font-semibold text-sm rounded-lg hover:bg-gray-100 transition-all"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#1A3C6E] mb-2">
                          Send Us a Message
                        </h2>
                        <p className="text-[#555555] font-body text-sm">
                          Fill in the form below and we&rsquo;ll get back to you within 24 hours.
                        </p>
                      </div>

                      {status === 'error' && (
                        <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20 mb-6">
                          <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-red-400 font-body text-sm font-medium">Something went wrong.</p>
                            <p className="text-red-400/70 font-body text-xs mt-1">
                              Please try again, or email us directly at{' '}
                              <a href="mailto:conor@moreydigital.ie" className="underline">conor@moreydigital.ie</a>
                            </p>
                          </div>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Row 1: Name + Email */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="name" className="block text-[#1A3C6E] font-body text-sm font-medium mb-2">
                              Full Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Murphy"
                              className={inputClasses}
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-[#1A3C6E] font-body text-sm font-medium mb-2">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@example.ie"
                              className={inputClasses}
                            />
                          </div>
                        </div>

                        {/* Row 2: Phone + Business */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="phone" className="block text-[#1A3C6E] font-body text-sm font-medium mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="087 123 4567"
                              className={inputClasses}
                            />
                          </div>
                          <div>
                            <label htmlFor="business" className="block text-[#1A3C6E] font-body text-sm font-medium mb-2">
                              Business Name
                            </label>
                            <input
                              type="text"
                              id="business"
                              name="business"
                              value={formData.business}
                              onChange={handleChange}
                              placeholder="Your Business Ltd"
                              className={inputClasses}
                            />
                          </div>
                        </div>

                        {/* Row 3: Service Dropdown */}
                        <div>
                          <label htmlFor="service" className="block text-[#1A3C6E] font-body text-sm font-medium mb-2">
                            What Service Are You Interested In?
                          </label>
                          <div className="relative">
                            <select
                              id="service"
                              name="service"
                              required
                              value={formData.service}
                              onChange={handleChange}
                              className={`${inputClasses} appearance-none cursor-pointer pr-10`}
                            >
                              <option value="" disabled>Select a service...</option>
                              {serviceOptions.map((opt) => (
                                <option key={opt} value={opt} className="bg-white text-[#1A1A1A]">
                                  {opt}
                                </option>
                              ))}
                            </select>
                            <ChevronDown
                              size={16}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                            />
                          </div>
                        </div>

                        {/* Row 4: Message */}
                        <div>
                          <label htmlFor="message" className="block text-[#1A3C6E] font-body text-sm font-medium mb-2">
                            Tell Us About Your Project
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us a bit about what you're looking for, your goals, and any other details that might help us understand your project..."
                            className={`${inputClasses} resize-none`}
                          />
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-jade text-white font-heading font-bold text-sm rounded-lg hover:bg-jade-400 transition-all group disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {status === 'submitting' ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>

              {/* ── RIGHT: Contact Details + Trust (2/5 width) ── */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Details Card */}
                <div className="glass-card p-8">
                  <h3 className="font-heading font-bold text-lg text-[#1A3C6E] mb-6">
                    Contact Details
                  </h3>
                  <div className="space-y-5">
                    {contactDetails.map((detail) => (
                      <div key={detail.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-jade/10 flex items-center justify-center flex-shrink-0">
                          <detail.icon size={18} className="text-jade" />
                        </div>
                        <div>
                          <p className="text-[#555555] font-body text-xs uppercase tracking-wider mb-0.5">
                            {detail.label}
                          </p>
                          {detail.href ? (
                            <a
                              href={detail.href}
                              className="text-[#1A3C6E] font-body text-sm hover:text-jade transition-colors"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <p className="text-[#1A3C6E] font-body text-sm">{detail.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="glass-card p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield size={18} className="text-jade flex-shrink-0" />
                      <p className="text-[#333333] font-body text-sm">
                        Free, no-obligation consultation
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap size={18} className="text-jade flex-shrink-0" />
                      <p className="text-[#333333] font-body text-sm">
                        Response within 24 hours
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageSquare size={18} className="text-jade flex-shrink-0" />
                      <p className="text-[#333333] font-body text-sm">
                        No jargon, ever
                      </p>
                    </div>
                  </div>
                </div>

                {/* What Happens Next Card */}
                <div className="glass-card p-8">
                  <h3 className="font-heading font-bold text-lg text-[#1A3C6E] mb-5">
                    What Happens Next?
                  </h3>
                  <div className="space-y-4">
                    {nextSteps.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-jade/10 border border-jade/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-jade font-heading font-bold text-xs">{i + 1}</span>
                        </div>
                        <p className="text-[#555555] font-body text-sm leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FAQ STRIP ── */}
      <section ref={faqRef} className="relative py-20 lg:py-28 overflow-hidden bg-[#D6E4F0]">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '40%', '--glow-y': '50%' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Common Questions</span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#1A3C6E] mt-3">
              Before You Reach Out
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 reveal-stagger">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="reveal glass-card glass-card-hover p-7 transition-all"
                style={{ '--reveal-index': i }}
              >
                <h3 className="font-heading font-bold text-base text-[#1A3C6E] mb-3">{item.q}</h3>
                <p className="text-[#555555] font-body text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FINAL CTA ── */}
      <section ref={ctaRef} className="relative py-20 lg:py-28 overflow-hidden bg-[#1A3C6E]">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
              Prefer to Talk Directly?
            </h2>
            <p className="text-white/80 font-body text-base mb-8 max-w-xl mx-auto">
              No forms needed. Give us a call, send a WhatsApp, or drop us an email &mdash; whatever suits you best.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+353873999296"
                className="inline-flex items-center gap-2 px-8 py-4 bg-jade text-white font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-base"
              >
                <Phone size={18} />
                Call Us
              </a>
              <a
                href="https://wa.me/353873999296"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-200 text-white font-heading font-semibold rounded-lg hover:bg-gray-100 hover:text-[#1A3C6E] transition-all text-base"
              >
                <MessageSquare size={18} />
                WhatsApp
              </a>
              <a
                href="mailto:conor@moreydigital.ie"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-200 text-white font-heading font-semibold rounded-lg hover:bg-gray-100 hover:text-[#1A3C6E] transition-all text-base"
              >
                <Mail size={18} />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
