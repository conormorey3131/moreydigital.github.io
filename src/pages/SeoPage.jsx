import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ChevronDown,
  Search,
  TrendingUp,
  MousePointerClick,
  MapPin,
  Target,
  Globe,
  Star,
  Eye,
  FileText,
  BarChart2,
  Users,
  Store,
  Camera,
  ThumbsUp,
  MessageSquare,
  ClipboardList,
  Check,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

/* ─── SEO ─── */
function PageMeta() {
  useEffect(() => {
    document.title = 'SEO & Google Business Optimisation Ireland | Morey Digital'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Morey Digital provides SEO and Google Business Profile management for Irish businesses. Get found by the customers already searching for what you offer.')
    }
  }, [])
  return null
}

/* ─── WHY SEO MATTERS DATA ─── */
const whyCards = [
  {
    icon: TrendingUp,
    title: 'Your Competitors Are Already Ranking',
    desc: 'If you\'re not appearing in search results, your competitors are taking those customers instead. Every day your website isn\'t optimised for search is a day you\'re losing business to someone who is. SEO isn\'t optional anymore \u2014 it\'s the baseline for being visible online.',
  },
  {
    icon: MousePointerClick,
    title: 'Organic Traffic Converts Better',
    desc: 'People who find you through Google are actively searching for what you offer. They have intent. That makes organic search traffic one of the highest-converting channels available \u2014 far more effective than interruption-based advertising. SEO brings you customers who are already looking to buy.',
  },
  {
    icon: MapPin,
    title: 'Local Search Drives Real Business',
    desc: 'When someone searches "plumber near me" or "restaurant in Ennis", Google shows local results first. If your business isn\'t optimised for local search, you\'re invisible to the people most likely to become customers. Local SEO puts you in front of buyers in your area when it matters most.',
  },
]

/* ─── WHAT WE DO DATA ─── */
const serviceItems = [
  {
    icon: FileText,
    title: 'On-Page SEO',
    desc: 'We optimise every page of your website \u2014 titles, meta descriptions, headings, content structure, internal linking, and image alt text. These are the signals Google reads to understand what your pages are about and when to show them in search results.',
  },
  {
    icon: MapPin,
    title: 'Local SEO Strategy',
    desc: 'We build a local SEO strategy tailored to your area \u2014 whether that\'s a single town, a county, or nationwide. This includes location-specific landing pages, local citations, schema markup, and content that targets the way Irish customers actually search.',
  },
  {
    icon: Store,
    title: 'Google Business Profile Management',
    desc: 'Your Google Business Profile is often the first thing customers see. We fully set up, optimise, and manage your profile \u2014 business info, categories, photos, posts, Q&A, and review responses \u2014 so it works as hard as your website does.',
  },
  {
    icon: Target,
    title: 'Keyword Research',
    desc: 'We identify the exact search terms your ideal customers are using and build your content strategy around them. No guesswork \u2014 we use real search data to target keywords with genuine buying intent and realistic ranking potential for your business.',
  },
  {
    icon: Globe,
    title: 'Technical SEO',
    desc: 'Fast load times, mobile usability, proper indexing, clean site architecture, structured data, XML sitemaps, and Core Web Vitals optimisation. We handle the technical foundation that Google needs to crawl, understand, and rank your website properly.',
  },
  {
    icon: Eye,
    title: 'Competitor Analysis',
    desc: 'We analyse what your competitors are doing in search \u2014 what they\'re ranking for, where their links come from, and where the gaps are. This gives us a clear strategy to outperform them in the areas that matter most to your business.',
  },
  {
    icon: BarChart2,
    title: 'Monthly Ranking Reports',
    desc: 'You get clear monthly reports showing where your site ranks for target keywords, how your organic traffic is trending, and what actions were taken. No vanity metrics \u2014 just the data that shows whether SEO is actually driving results for your business.',
  },
  {
    icon: ThumbsUp,
    title: 'Review Generation & Reputation',
    desc: 'Online reviews directly affect your local rankings and customer trust. We help you set up systems to generate more genuine reviews, respond professionally, and manage your online reputation across Google and other platforms.',
  },
]

/* ─── GOOGLE BUSINESS PROFILE FEATURES ─── */
const gbpFeatures = [
  'Business information, hours, and contact details fully optimised',
  'Categories and attributes configured for maximum visibility',
  'Regular Google Posts to keep your profile active and engaging',
  'Photo uploads \u2014 business, team, products, and projects',
  'Q&A section monitored and answered',
  'Review monitoring with professional response management',
  'Insights and analytics reporting on profile performance',
  'Multi-location management for businesses with multiple sites',
]

/* ─── BUSINESS BENEFITS DATA ─── */
const benefitItems = [
  {
    icon: Users,
    title: 'More Customers Find You',
    desc: 'The top three Google results get over 60% of all clicks. Moving from page two to page one for even a few key search terms can transform the number of enquiries your business receives \u2014 without spending a cent on advertising.',
  },
  {
    icon: Star,
    title: 'Builds Long-Term Authority',
    desc: 'Unlike paid ads that stop the moment you stop paying, SEO compounds over time. Every piece of optimised content, every quality backlink, and every month of consistent work builds your site\'s authority \u2014 making it harder for competitors to overtake you.',
  },
  {
    icon: Search,
    title: 'Reduces Your Dependence on Ads',
    desc: 'Organic search traffic is free. A well-optimised website generates leads around the clock without ongoing ad spend. Many of our clients use SEO as their primary lead generation channel \u2014 reducing or eliminating their need for paid advertising over time.',
  },
  {
    icon: MessageSquare,
    title: 'Better Quality Enquiries',
    desc: 'SEO targets people who are actively searching for what you offer. These are high-intent visitors \u2014 they\'re further along the buying journey than someone who saw an ad. That means the enquiries you get from organic search are more likely to convert into paying customers.',
  },
]

/* ─── FAQ DATA ─── */
const faqItems = [
  {
    q: 'How long does SEO take to show results?',
    a: 'SEO is a long-term strategy. Most businesses start seeing measurable improvements in rankings and traffic within 3\u20136 months, with significant results building over 6\u201312 months. The timeline depends on your starting position, competition level, and how aggressively we pursue opportunities. We provide monthly reports so you can track progress from day one.',
  },
  {
    q: 'Do I need SEO if I already have a website?',
    a: 'Having a website and having a website that ranks on Google are two very different things. Most business websites are built with little or no SEO consideration. Without proper optimisation, your site is effectively invisible to the people searching for your services. SEO is what makes your website actually work as a business tool.',
  },
  {
    q: 'What\'s the difference between SEO and Google Ads?',
    a: 'Google Ads puts you at the top of search results instantly \u2014 but you pay for every click, and the traffic stops the moment you stop paying. SEO is the process of earning your way into the organic (non-paid) results. It takes longer to build, but the traffic it generates is free and compounds over time. Most successful businesses use both, but SEO delivers the better long-term return on investment.',
  },
  {
    q: 'What is a Google Business Profile and why does it matter?',
    a: 'Your Google Business Profile is the panel that appears on the right side of Google search results and on Google Maps when someone searches for your business or your type of business locally. It shows your name, address, phone number, reviews, photos, hours, and more. For local businesses, it\'s often the single most important factor in whether a customer contacts you or goes to a competitor.',
  },
  {
    q: 'Can you help with SEO for an existing website?',
    a: 'Yes. We can audit your existing website, identify the specific SEO issues holding you back, and carry out a structured optimisation programme to improve your rankings. In some cases, a site rebuild delivers better long-term results \u2014 we\'ll advise honestly after the initial audit.',
  },
  {
    q: 'How do you choose which keywords to target?',
    a: 'We use a combination of search volume data, competitor analysis, and commercial intent to identify the keywords that will drive the most valuable traffic to your business. We focus on terms that real customers are actually searching for \u2014 not generic industry jargon. Every keyword we target has a clear path to generating enquiries or revenue.',
  },
  {
    q: 'Is SEO included in your website management plans?',
    a: 'Basic on-page SEO is included in all websites we build. Ongoing SEO \u2014 keyword research, content optimisation, local SEO work, Google Business Profile management, and monthly reporting \u2014 is available as an add-on to any management plan or as a standalone service.',
  },
  {
    q: 'Do you guarantee first page rankings?',
    a: 'No reputable SEO provider guarantees specific rankings \u2014 and you should be cautious of anyone who does. Google\'s algorithm considers hundreds of factors and changes regularly. What we do guarantee is a structured, transparent process built on best practices, measurable progress reported monthly, and a clear strategy to improve your visibility over time.',
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
export default function SeoPage() {
  const heroRef = useReveal()
  const whyRef = useReveal()
  const servicesRef = useReveal()
  const gbpRef = useReveal()
  const benefitsRef = useReveal()
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
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '45%', '--glow-y': '45%' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-jade/10 border border-jade/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-jade animate-pulse" />
              <span className="text-jade text-xs font-body font-medium uppercase tracking-wider">SEO & Google Business</span>
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 break-words">
              Get Found by the Customers Already{' '}
              <span className="text-jade">Searching for What You Offer</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-body font-medium leading-relaxed mb-4 max-w-3xl mx-auto">
              If your business isn&rsquo;t showing up in Google search results, you&rsquo;re invisible to the people most likely to buy from you. Morey Digital provides practical, results-focused SEO that gets Irish businesses found online.
            </p>

            <p className="text-gray-400 font-body text-sm leading-relaxed mb-10 max-w-3xl mx-auto">
              We handle everything &mdash; on-page optimisation, local SEO, Google Business Profile management, keyword research, technical SEO, and monthly reporting. No jargon, no vanity metrics. Just a clear strategy to improve your visibility and bring in more business from organic search.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jade text-dark font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-base"
            >
              Get a Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Hero feature badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jade/10 border border-jade/20">
                <Search size={16} className="text-jade" />
                <span className="text-white/80 text-xs font-body font-medium">On-Page & Technical SEO</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jade/10 border border-jade/20">
                <MapPin size={16} className="text-jade" />
                <span className="text-white/80 text-xs font-body font-medium">Local SEO for Ireland</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jade/10 border border-jade/20">
                <Store size={16} className="text-jade" />
                <span className="text-white/80 text-xs font-body font-medium">Google Business Profile</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHY SEO MATTERS ── */}
      <section ref={whyRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Why It Matters</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              Why SEO Is Critical for Your Business
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

      {/* ── 3. WHAT WE DO ── */}
      <section ref={servicesRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '60%', '--glow-y': '30%' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">What We Do</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              How We Improve Your Search Visibility
            </h2>
            <p className="text-gray-400 font-body mt-4 max-w-2xl mx-auto">
              SEO isn&rsquo;t a single task &mdash; it&rsquo;s a structured, ongoing process. Here&rsquo;s exactly what we do to get your business ranking.
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
                    <h3 className="font-heading font-bold text-base text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 font-body text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. GOOGLE BUSINESS PROFILE ── */}
      <section ref={gbpRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="reveal">
            <div className="glass-card p-8 sm:p-10 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Text column */}
                <div className="lg:w-1/2">
                  <div className="w-14 h-14 rounded-2xl bg-jade/10 border border-jade/20 flex items-center justify-center mb-5">
                    <Store size={28} className="text-jade" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
                    Google Business Profile Management
                  </h2>
                  <p className="text-jade font-body font-semibold text-base mb-6">
                    The most overlooked tool for local businesses in Ireland.
                  </p>
                  <p className="text-gray-400 font-body text-sm leading-relaxed mb-4">
                    Your Google Business Profile is often the very first impression a potential customer gets of your business. It appears in Google Search, Google Maps, and the local pack &mdash; the map results that appear above standard search listings for local queries.
                  </p>
                  <p className="text-gray-400 font-body text-sm leading-relaxed mb-4">
                    An incomplete or neglected profile tells customers you don&rsquo;t care about your online presence. A fully optimised, actively managed profile tells them you&rsquo;re professional, established, and ready for their business.
                  </p>
                  <p className="text-gray-400 font-body text-sm leading-relaxed">
                    We handle the complete setup, optimisation, and ongoing management of your Google Business Profile &mdash; so it works as a genuine lead generation tool, not just a listing.
                  </p>
                </div>

                {/* Features column */}
                <div className="lg:w-1/2">
                  <div className="glass-card p-6 sm:p-8 bg-white/[0.02]">
                    <p className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-5">
                      What&rsquo;s Included
                    </p>
                    <ul className="space-y-3">
                      {gbpFeatures.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Check size={16} className="text-jade mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 font-body text-sm leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. BUSINESS BENEFITS ── */}
      <section ref={benefitsRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '40%', '--glow-y': '60%' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Business Impact</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              What SEO Actually Delivers for Your Business
            </h2>
            <p className="text-gray-400 font-body mt-4 max-w-2xl mx-auto">
              SEO isn&rsquo;t just about rankings. It&rsquo;s about generating real, measurable business results from organic search.
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
                    <h3 className="font-heading font-bold text-base text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 font-body text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
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
              Ready to Start Ranking on Google?
            </h2>
            <p className="text-gray-400 font-body text-lg mb-8 max-w-xl mx-auto">
              Book an SEO audit and find out exactly where your website stands &mdash; and what it would take to start ranking for the searches that matter to your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jade text-dark font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-base"
            >
              Book an SEO Audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="mt-6">
              <Link
                to="/plans"
                className="text-jade font-heading font-semibold text-sm hover:underline inline-flex items-center gap-1"
              >
                Or view our Plans & Pricing
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
