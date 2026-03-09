import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Eye,
  Lock,
  Users,
  TrendingDown,
  BadgeCheck,
  Globe,
  ShieldAlert,
  Wifi,
  KeyRound,
  Bot,
  Search,
  Wrench,
  Zap,
  PiggyBank,
  Star,
  RefreshCw,
  DatabaseBackup,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

/* ─── SEO ─── */
function PageMeta() {
  useEffect(() => {
    document.title = 'Website Security for Irish Businesses | Morey Digital'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Morey Digital protects Irish business websites around the clock \u2014 firewall protection, malware scanning, DDoS blocking, brute force prevention, and more. Built into every plan.')
    }
  }, [])
  return null
}

/* ─── WHY SECURITY MATTERS DATA ─── */
const whyCards = [
  {
    icon: Users,
    title: 'Protect Your Customers and Your Reputation',
    paras: [
      'Your customers trust you with their contact details, payment information, and personal data. A compromised website can expose all of it \u2014 and the reputational damage from a data breach can be far harder to recover from than the technical fix.',
      'A secure website signals to every visitor that you take their privacy seriously. That trust directly affects whether new customers choose you, and whether existing ones come back.',
    ],
  },
  {
    icon: TrendingDown,
    title: 'Avoid Costly Downtime and Lost Revenue',
    paras: [
      'When a website is taken down by a hack or security breach, the clock is ticking. Every hour offline means missed enquiries, lost sales, and frustrated customers who may not come back. For eCommerce sites, the impact is immediate and measurable.',
      'Preventive security is far less expensive than incident recovery. A managed approach to security means the problems that cost thousands to fix simply don\u2019t happen in the first place.',
    ],
  },
  {
    icon: BadgeCheck,
    title: 'Build Confidence With Every Visitor',
    paras: [
      'New visitors to your website decide within seconds whether they trust you enough to make an enquiry or a purchase. A site that\u2019s clearly secure \u2014 with HTTPS, no warnings, and fast, reliable performance \u2014 builds that confidence from the first click.',
      'Businesses that actively manage their website security aren\u2019t just protecting themselves. They\u2019re demonstrating professionalism and reliability to every potential customer who lands on their site.',
    ],
  },
]

/* ─── WHAT'S INCLUDED DATA ─── */
const includedItems = [
  {
    icon: Globe,
    title: 'Secure Data in Transit',
    desc: 'All data transmitted between your website and your visitors is encrypted using HTTPS \u2014 the secure web standard. We configure and enforce this across your entire site, so no sensitive information is ever passed in plain text. This is required for GDPR compliance and for customer trust.',
  },
  {
    icon: ShieldAlert,
    title: 'Web Application Firewall (WAF)',
    desc: 'A Web Application Firewall sits between the internet and your website, filtering out malicious traffic before it reaches your server. It blocks automated attack tools, probing bots, and known exploit attempts \u2014 stopping threats at the door rather than dealing with the damage afterwards. See our dedicated Firewall & Malware Protection service for more detail.',
    linkText: 'Learn more',
    to: '/services/website-security',
  },
  {
    icon: Lock,
    title: 'SSL Certificate Management',
    desc: 'Your SSL certificate is what puts the padlock in your browser and enables HTTPS. We provision, configure, and automatically renew your SSL certificate \u2014 so it never expires and your visitors never see a security warning that makes them question whether your site is safe.',
  },
  {
    icon: Wifi,
    title: 'DDoS Attack Protection',
    desc: 'A Distributed Denial of Service (DDoS) attack floods your website with fake traffic until it crashes under the load. We provide active protection against DDoS attacks at multiple levels \u2014 keeping your site online even when it\u2019s being deliberately targeted by this type of attack.',
  },
  {
    icon: KeyRound,
    title: 'Brute Force Attack Prevention',
    desc: 'Hackers use automated tools to try thousands of username and password combinations until they find one that works \u2014 this is called a brute force attack. We detect and block these attempts automatically, preventing unauthorised access to your website\u2019s admin area and hosting environment.',
  },
  {
    icon: Bot,
    title: 'Bad Bot Blocking',
    desc: 'Not all website traffic comes from real people. Automated bots constantly crawl the web \u2014 many of them looking for vulnerabilities, scraping content, or wasting your server resources. We operate multiple layers of bot filtering to block malicious and nuisance bots while letting legitimate traffic through.',
  },
  {
    icon: Search,
    title: 'Malware Scanning',
    desc: 'We run regular malware scans across your website\u2019s files and database, checking for signs of compromise \u2014 backdoors, injected scripts, phishing pages, spam content, and other malicious code. If anything is found, we act immediately. Prevention is the goal, but fast detection is the safety net.',
  },
  {
    icon: Wrench,
    title: 'Security Patching & Updates',
    desc: 'Outdated website software is the most common attack vector for hackers. We keep your website\u2019s platform, plugins, and theme up to date \u2014 and apply protective security patches immediately when new vulnerabilities are discovered, before an official fix is even available. See our dedicated Updates & Patching service for more detail.',
    linkText: 'Learn more',
    to: '/services/updates-patching',
  },
]

/* ─── BUSINESS BENEFITS DATA ─── */
const benefitItems = [
  {
    icon: ShieldCheck,
    title: 'Protects Your Business Reputation',
    desc: 'A hacked or defaced website \u2014 or one that appears compromised to visitors \u2014 can undo years of trust-building in a matter of hours. Active security prevents the kind of incidents that cause lasting damage to how your business is perceived.',
  },
  {
    icon: Zap,
    title: 'Reduces Downtime and Revenue Loss',
    desc: 'Security incidents are one of the most common causes of unexpected website downtime. With proper protections in place, the attacks that would take your site offline simply don\u2019t get through \u2014 keeping your website working and your revenue flowing.',
  },
  {
    icon: PiggyBank,
    title: 'Lowers Your Long-Term Costs',
    desc: 'Recovering from a hacked website is expensive \u2014 cleaning up malware, fixing damage, rebuilding lost trust. Prevention costs a fraction of recovery. Managed security isn\u2019t an overhead; it\u2019s the cheaper option over any meaningful time horizon.',
  },
  {
    icon: Star,
    title: 'Builds Customer Confidence',
    desc: 'Visitors notice when a website feels secure and professional. HTTPS, fast load times, no warnings or errors \u2014 these signals tell your customers that you\u2019re a business they can trust. That confidence translates directly into enquiries, sales, and returning customers.',
  },
]

/* ─── HUB CARDS DATA ─── */
const hubCards = [
  {
    icon: ShieldAlert,
    title: 'Firewall & Malware Protection',
    desc: 'Active Web Application Firewall, malware scanning, intrusion detection, and rapid response if something is found. The frontline of your website\u2019s defences.',
    to: '/services/website-security',
  },
  {
    icon: RefreshCw,
    title: 'Software Updates & Patching',
    desc: 'Managed updates for all website software, plus proactive security patching that protects against new vulnerabilities before an official fix is released.',
    to: '/services/updates-patching',
  },
  {
    icon: DatabaseBackup,
    title: 'Backups & Disaster Recovery',
    desc: 'Daily automated backups stored offsite, multiple restore points, uptime monitoring, and fast recovery if something does go wrong.',
    to: '/services/backups',
  },
]

/* ─── FAQ DATA ─── */
const faqItems = [
  {
    q: 'Is website security really necessary for a small Irish business?',
    a: 'Yes \u2014 and small businesses are often more vulnerable than large ones, not less. Automated hacking tools don\u2019t distinguish between a multinational and a local tradesperson\u2019s website. They scan every site they can find looking for known weaknesses. A small business with an unmanaged website is often an easier target than a large company with a dedicated IT team. The good news is that proper security doesn\u2019t require a large budget \u2014 it just needs to be managed correctly.',
  },
  {
    q: 'What\u2019s the most common way websites get hacked?',
    a: 'The overwhelming majority of website hacks exploit outdated software \u2014 specifically plugins, themes, or the website platform itself running a version with a known security vulnerability. Automated tools scan millions of websites looking for sites running these outdated versions. This is why keeping software updated and applying security patches quickly is so important.',
  },
  {
    q: 'What does HTTPS mean and why does my website need it?',
    a: 'HTTPS means that the connection between your website and your visitors is encrypted \u2014 any data passed between them (contact form submissions, payment details, login credentials) is secure in transit and can\u2019t be intercepted. All modern websites need HTTPS. Browsers actively warn visitors when a site doesn\u2019t have it, which damages trust and can reduce the number of people willing to contact or buy from you.',
  },
  {
    q: 'What happens if my website gets hacked despite having security in place?',
    a: 'No security solution is 100% guaranteed \u2014 but layered protection combined with daily backups means that even if something does get through, the impact is contained and recovery is fast. We detect issues quickly through active monitoring, restore from a clean recent backup, investigate the root cause, and fix it to prevent recurrence. You\u2019re never on your own dealing with it.',
  },
  {
    q: 'What is a DDoS attack and is my website at risk?',
    a: 'A DDoS (Distributed Denial of Service) attack floods a website with massive amounts of fake traffic until the server can\u2019t cope and the site crashes. Small business websites can be targeted \u2014 sometimes deliberately, sometimes as collateral damage from large-scale attacks. We provide DDoS protection as standard so your site stays online even during an active attack.',
  },
  {
    q: 'Do I need to do anything to keep my website secure?',
    a: 'On a Morey Digital managed plan, the answer is essentially no \u2014 we handle the monitoring, updates, patching, scanning, and firewall management. The main thing we ask of you is to use a strong, unique password for your website admin account and to let us know if you ever notice anything unusual. We take care of the rest.',
  },
  {
    q: 'Will security measures slow my website down?',
    a: 'Done properly, no \u2014 and in many cases the opposite is true. Filtering out bad bot traffic reduces the load on your server, and a well-configured security setup can actually improve performance. We ensure that security and speed work together, not against each other.',
  },
  {
    q: 'Is website security covered in all Morey Digital plans?',
    a: 'Yes. Core security features \u2014 SSL management, firewall protection, malware scanning, and software updates \u2014 are included in all our management plans. More advanced features like enhanced monitoring, faster response times, and extended backup retention are available on higher-tier plans.',
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
export default function WebsiteSecurityOverviewPage() {
  const heroRef = useReveal()
  const whyRef = useReveal()
  const includedRef = useReveal()
  const benefitsRef = useReveal()
  const hubRef = useReveal()
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
              <span className="text-jade text-xs font-body font-medium uppercase tracking-wider">Website Security</span>
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 break-words">
              Your Website Is Protected Around the Clock &mdash;{' '}
              <span className="text-jade">So You Can Focus on Running Your Business</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-body font-medium leading-relaxed mb-4 max-w-3xl mx-auto">
              Cyber threats don&rsquo;t stop at 5pm. Morey Digital provides layered, always-on website security that blocks attacks, prevents downtime, and keeps your customers&rsquo; trust intact &mdash; day and night.
            </p>

            <p className="text-gray-400 font-body text-sm leading-relaxed mb-3 max-w-3xl mx-auto">
              Your website is more than a marketing tool &mdash; it&rsquo;s a business asset. A hack, a data breach, or a prolonged outage doesn&rsquo;t just cost money to fix. It damages your reputation, affects your search rankings, and shakes the confidence of your customers. The good news: with the right protection in place, almost all of it is preventable.
            </p>

            <p className="text-gray-400 font-body text-sm leading-relaxed mb-10 max-w-3xl mx-auto">
              Morey Digital builds security into every website we manage &mdash; not as an optional extra, but as a core part of how we work. From firewall protection and malware scanning to brute force blocking and SSL management, your website is actively defended at every layer.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jade text-dark font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-base"
            >
              Get a Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Hero feature badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jade/10 border border-jade/20">
                <ShieldCheck size={16} className="text-jade" />
                <span className="text-white/80 text-xs font-body font-medium">Always-On Protection</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jade/10 border border-jade/20">
                <Eye size={16} className="text-jade" />
                <span className="text-white/80 text-xs font-body font-medium">24/7 Active Monitoring</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jade/10 border border-jade/20">
                <Lock size={16} className="text-jade" />
                <span className="text-white/80 text-xs font-body font-medium">SSL & Data Security</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHY WEBSITE SECURITY MATTERS ── */}
      <section ref={whyRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Why It Matters</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              Why Website Security Matters for Your Business
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
                {card.paras.map((para, j) => (
                  <p key={j} className={`text-gray-400 font-body text-sm leading-relaxed ${j > 0 ? 'mt-3' : ''}`}>
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHAT'S INCLUDED ── */}
      <section ref={includedRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '60%', '--glow-y': '30%' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">What&rsquo;s Included</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              What&rsquo;s Included in Morey Digital Website Security
            </h2>
            <p className="text-gray-400 font-body mt-4 max-w-2xl mx-auto">
              Security isn&rsquo;t a single feature &mdash; it&rsquo;s a layered set of protections working together. Here&rsquo;s what we put in place for every website we manage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 reveal-stagger">
            {includedItems.map((item, i) => (
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
                    {item.linkText && item.to && (
                      <Link
                        to={item.to}
                        className="text-jade font-body text-sm hover:underline inline-flex items-center gap-1 mt-2"
                      >
                        {item.linkText}
                        <ArrowRight size={12} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. BUSINESS BENEFITS ── */}
      <section ref={benefitsRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Business Benefits</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              The Business Benefits of a Properly Secured Website
            </h2>
            <p className="text-gray-400 font-body mt-4 max-w-2xl mx-auto">
              Security investment isn&rsquo;t just about avoiding the worst &mdash; it actively improves how your business performs online.
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

      {/* ── 5. SECURITY SUB-SERVICES HUB ── */}
      <section ref={hubRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '50%' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Our Services</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              Explore Our Security Services in More Detail
            </h2>
            <p className="text-gray-400 font-body mt-4 max-w-2xl mx-auto">
              Each area of website security has its own dedicated service &mdash; click through to learn exactly what&rsquo;s involved and what we include.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
            {hubCards.map((card, i) => (
              <Link
                key={card.to}
                to={card.to}
                className="reveal glass-card glass-card-hover p-8 border-t-[3px] border-t-jade transition-all group block"
                style={{ '--reveal-index': i }}
              >
                <div className="w-14 h-14 rounded-2xl bg-jade/10 border border-jade/20 flex items-center justify-center mb-5">
                  <card.icon size={28} className="text-jade" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 font-body text-sm leading-relaxed mb-4">{card.desc}</p>
                <span className="text-jade font-heading font-semibold text-sm inline-flex items-center gap-1 group-hover:underline">
                  Learn more
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
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
              Your Website Should Be Protected Right Now &mdash; Not After Something Goes Wrong
            </h2>
            <p className="text-gray-400 font-body text-lg mb-8 max-w-xl mx-auto">
              Most Irish business websites are running with security gaps that could be closed today. Get in touch for a free review and we&rsquo;ll tell you exactly where you stand.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jade text-dark font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-base"
            >
              Get a Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="mt-6">
              <Link
                to="/services/website-management"
                className="text-jade font-heading font-semibold text-sm hover:underline inline-flex items-center gap-1"
              >
                Or explore our Website Management Plans
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
