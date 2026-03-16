import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ChevronDown,
  TrendingUp,
  MousePointerClick,
  ShieldCheck,
  Gauge,
  Image,
  Zap,
  Server,
  Activity,
  RefreshCw,
  Smartphone,
  BarChart2,
  ShoppingCart,
  Search,
  Star,
  TrendingDown,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

/* ─── SEO ─── */
function PageMeta() {
  useEffect(() => {
    document.title = 'Website Speed & Performance Optimisation Ireland | Morey Digital'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Morey Digital builds and maintains fast-loading websites for Irish businesses. Better speed means better Google rankings, more trust, and more customers.')
    }
  }, [])
  return null
}

/* ─── WHY SPEED MATTERS DATA ─── */
const whyCards = [
  {
    icon: TrendingUp,
    title: 'Better Google Rankings',
    desc: 'Google uses page speed as a direct ranking factor. Faster sites score higher on Core Web Vitals \u2014 Largest Contentful Paint, First Input Delay, and Cumulative Layout Shift \u2014 which means better search positions and more organic traffic without paying for ads.',
  },
  {
    icon: MousePointerClick,
    title: 'More Visitors Stay and Convert',
    desc: '53% of mobile users abandon a site that takes more than 3 seconds to load. A fast, responsive site keeps visitors engaged, reduces bounce rates, and dramatically increases the chance they\u2019ll make an enquiry or complete a purchase.',
  },
  {
    icon: ShieldCheck,
    title: 'A Slow Site Damages Your Reputation',
    desc: 'Speed is tied to trust. A slow, clunky website signals to potential customers that your business is outdated or unprofessional \u2014 before they\u2019ve even read a word. A fast site does the opposite: it builds immediate confidence.',
  },
]

/* ─── WHAT WE DO DATA ─── */
const serviceItems = [
  {
    icon: Gauge,
    title: 'Built Fast From the Start',
    desc: 'We don\u2019t build first and optimise later. Every site we create uses clean, lightweight code, minimal plugin bloat, and a properly configured setup that loads quickly on every device from day one.',
  },
  {
    icon: Image,
    title: 'Images That Load Instantly',
    desc: 'Unoptimised images are one of the biggest causes of slow websites. We compress and convert every image to modern formats (WebP), properly size them for each screen, and use lazy loading so pages feel instant.',
  },
  {
    icon: Zap,
    title: 'Pages Served at Full Speed',
    desc: 'We implement page caching and use content delivery networks (CDNs) so your website loads fast for visitors anywhere in Ireland \u2014 and beyond. Cached pages load in milliseconds, not seconds.',
  },
  {
    icon: Server,
    title: 'Hosting That Doesn\u2019t Slow You Down',
    desc: 'Cheap shared hosting is one of the most common causes of slow Irish business websites. All sites we manage are hosted on fast, reliable infrastructure using SSD storage and modern server configurations built for performance.',
  },
  {
    icon: Activity,
    title: 'We Track Your Speed Scores',
    desc: 'Google\u2019s Core Web Vitals are the key speed metrics that affect your search rankings. We monitor these for every site we manage and address any issues before they affect your visibility or user experience.',
  },
  {
    icon: RefreshCw,
    title: 'Updates Applied Without Breaking Performance',
    desc: 'Outdated plugins and themes are a major cause of performance degradation over time. As part of our monthly management plans, every update is tested before being applied \u2014 so your site stays fast and nothing breaks.',
  },
  {
    icon: Smartphone,
    title: 'Fast on Every Phone and Screen',
    desc: 'More than 60% of Irish web traffic comes from mobile devices. We specifically optimise load times and performance for mobile \u2014 not just desktop \u2014 because that\u2019s where most of your customers are browsing.',
  },
  {
    icon: BarChart2,
    title: 'You Can See the Results',
    desc: 'As part of our monthly management plans, you receive a performance report showing your site\u2019s speed scores and Core Web Vitals. No guessing \u2014 just clear data showing how your website is performing over time.',
  },
]

/* ─── BUSINESS BENEFITS DATA ─── */
const benefitItems = [
  {
    icon: ShoppingCart,
    title: 'More Visitors Become Customers',
    desc: 'Every second of load time delay reduces conversions. A site that loads in under 2 seconds converts significantly better than one that takes 5 seconds. Faster websites generate more enquiries, more calls, and more sales from the same amount of traffic.',
  },
  {
    icon: Search,
    title: 'Higher Search Rankings',
    desc: 'Google rewards fast websites with better rankings. Improving your Core Web Vitals scores directly improves where you appear in local search results \u2014 meaning more people find your business without you having to spend more on ads.',
  },
  {
    icon: Star,
    title: 'Instant Trust and Credibility',
    desc: 'A fast, smooth website immediately signals that your business is professional and reliable. It\u2019s one of the first things customers experience \u2014 and it shapes their entire perception of your business before they\u2019ve read a single word.',
  },
  {
    icon: TrendingDown,
    title: 'Fewer Visitors Leaving Immediately',
    desc: 'Slow sites bleed traffic. Visitors who leave before a page loads are lost forever. A fast site keeps people engaged long enough to see what you offer \u2014 and that directly improves every downstream metric: time on site, pages viewed, and conversions.',
  },
]

/* ─── CORE WEB VITALS DATA ─── */
const vitals = [
  {
    abbr: 'LCP',
    name: 'Largest Contentful Paint',
    explanation: 'Measures how long it takes for the largest visible element on your page to load \u2014 usually a hero image or headline. This is what users perceive as your page \u2018appearing\u2019.',
    target: 'Under 2.5 seconds',
  },
  {
    abbr: 'INP',
    name: 'Interaction to Next Paint',
    explanation: 'Measures how quickly your page responds when a visitor clicks a button or link. A slow response makes the site feel broken or laggy \u2014 even if it\u2019s loaded.',
    target: 'Under 200ms',
  },
  {
    abbr: 'CLS',
    name: 'Cumulative Layout Shift',
    explanation: 'Measures how much the page visually shifts around while loading \u2014 buttons that move, text that jumps. A high score frustrates users and signals poor build quality to Google.',
    target: 'Under 0.1',
  },
]

/* ─── FAQ DATA ─── */
const faqItems = [
  {
    q: 'Why is my website so slow?',
    a: 'The most common causes are poor hosting, unoptimised images, too many plugins, outdated software, and no caching setup. Often it\u2019s a combination of several of these. We can audit your site and give you a clear picture of what\u2019s causing the slowdown and how to fix it.',
  },
  {
    q: 'How do I know if my website is slow?',
    a: 'You can check your site\u2019s speed for free using Google PageSpeed Insights (pagespeed.web.dev) or GTmetrix. A score below 50 on mobile is a serious problem. If you\u2019re not sure how to interpret the results, get in touch and we\u2019ll explain what they mean for your business.',
  },
  {
    q: 'Does website speed actually affect Google rankings?',
    a: 'Yes \u2014 directly. Google uses Core Web Vitals scores as a ranking signal. A slow website will rank lower than a faster competitor, even if all other factors are equal. Improving speed is one of the most reliable ways to improve organic search visibility.',
  },
  {
    q: 'Will improving speed help me get more enquiries?',
    a: 'Yes. Research consistently shows that faster load times lead to higher conversion rates. Every second of delay reduces the likelihood of a visitor taking action. Improving from a 5-second load time to under 2 seconds can meaningfully increase the number of enquiries your site generates.',
  },
  {
    q: 'Can you speed up my existing website?',
    a: 'Yes. We can audit your current website, identify the specific issues causing slowness, and carry out a performance optimisation project to improve load times. In some cases a rebuild on a cleaner platform delivers better long-term results \u2014 we\u2019ll advise honestly after the audit.',
  },
  {
    q: 'Is performance included in your monthly management plans?',
    a: 'Yes. All our monthly Website Management plans include ongoing performance monitoring. We track Core Web Vitals, apply updates that maintain performance, and flag any degradation in your monthly report. Performance isn\u2019t a one-off fix \u2014 it needs ongoing attention.',
  },
  {
    q: 'What\u2019s a good page load speed to aim for?',
    a: 'Google recommends pages load in under 2.5 seconds on mobile for a good user experience. Under 1 second is excellent. Most slow Irish business websites are loading in 5\u201310 seconds on mobile \u2014 which is costing them real business every day.',
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
export default function WebsitePerformancePage() {
  const heroRef = useReveal()
  const whyRef = useReveal()
  const servicesRef = useReveal()
  const benefitsRef = useReveal()
  const vitalsRef = useReveal()
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
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '45%', '--glow-y': '45%' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-jade/10 border border-jade/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-jade animate-pulse" />
              <span className="text-jade text-xs font-body font-medium">Website Speed & Performance</span>
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 break-words">
              Fast Websites Win More Business &mdash;{' '}
              <span className="text-jade">Speed, Performance & Google Rankings</span> in One
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-body font-medium leading-relaxed mb-4 max-w-3xl mx-auto">
              A website that loads slowly is losing you customers every single day. Speed affects your Google rankings, your bounce rate, and whether visitors trust you enough to get in touch.
            </p>

            <p className="text-white/80 font-body text-sm leading-relaxed mb-10 max-w-3xl mx-auto">
              Every website Morey Digital builds is optimised for speed from the ground up &mdash; fast hosting, clean code, compressed images, and proper technical setup. And for sites we manage monthly, we monitor and maintain performance on an ongoing basis so it never quietly degrades over time.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jade text-white font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-base"
            >
              Get a Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="text-white/80 font-body text-base leading-relaxed mt-12 max-w-3xl mx-auto">
              Website speed is no longer optional. It directly affects every critical aspect of your online success &mdash; visibility, trust, and conversions. A slow site isn&rsquo;t just frustrating; it&rsquo;s actively costing your business.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. WHY SPEED MATTERS ── */}
      <section ref={whyRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Why It Matters</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              Why Website Speed Is Critical for Your Business
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
                <h3 className="font-heading font-bold text-lg text-[#1A3C6E] mb-3">{card.title}</h3>
                <p className="text-[#555555] font-body text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE DO ── */}
      <section ref={servicesRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">What We Do</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              How We Build and Maintain Fast Websites
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              Every Morey Digital website is built with performance in mind from day one. Here&rsquo;s exactly what we do.
            </p>
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

      {/* ── 4. BUSINESS BENEFITS ── */}
      <section ref={benefitsRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Business Impact</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              What a Fast Website Actually Delivers
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              Speed isn&rsquo;t a technical detail &mdash; it&rsquo;s a business advantage that shows up directly in your results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 reveal-stagger">
            {benefitItems.map((item, i) => (
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

      {/* ── 5. CORE WEB VITALS ── */}
      <section ref={vitalsRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Core Web Vitals</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              Understanding Core Web Vitals
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              Core Web Vitals are the three speed metrics Google uses to measure user experience. They directly affect your search rankings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
            {vitals.map((vital, i) => (
              <div
                key={vital.abbr}
                className="reveal glass-card p-8 text-center transition-all"
                style={{ '--reveal-index': i }}
              >
                <span className="font-heading font-extrabold text-4xl text-jade block mb-2">
                  {vital.abbr}
                </span>
                <h3 className="font-heading font-bold text-base text-[#1A3C6E] mb-4">
                  {vital.name}
                </h3>
                <p className="text-[#555555] font-body text-sm leading-relaxed mb-5">
                  {vital.explanation}
                </p>
                <span className="inline-flex px-3 py-1.5 rounded-full bg-jade/10 border border-jade/20 text-jade text-xs font-body font-medium">
                  {vital.target}
                </span>
              </div>
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
              Is Your Website Fast Enough to Win Business?
            </h2>
            <p className="text-white/80 font-body text-lg mb-8 max-w-xl mx-auto">
              Get a free speed audit and find out exactly what&rsquo;s slowing your site down &mdash; and what it&rsquo;s costing you. No obligation, no jargon.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jade text-white font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-base"
            >
              Get a Free Speed Audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="mt-6">
              <Link
                to="/services/website-management"
                className="text-jade font-heading font-semibold text-sm hover:underline inline-flex items-center gap-1"
              >
                Or view our Website Management Plans
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
