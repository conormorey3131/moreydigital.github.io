import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Bug,
  Lock,
  Settings,
  KeyRound,
  RefreshCw,
  Activity,
  FileCheck,
  Wifi,
  AlertTriangle,
  TrendingDown,
  Search,
  Star,
  AlertOctagon,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

/* ─── SEO ─── */
function PageMeta() {
  useEffect(() => {
    document.title = 'Website Security & Malware Protection Ireland | Morey Digital'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Morey Digital protects Irish business websites from hacks, malware, and attacks. Proactive security monitoring, malware removal, and ongoing protection built in.')
    }
  }, [])
  return null
}

/* ─── WHY SECURITY MATTERS DATA ─── */
const whyCards = [
  {
    icon: ShieldCheck,
    title: 'Your Website is a Target \u2014 Even If You\u2019re Small',
    desc: 'Automated bots and hacking tools scan thousands of websites every hour looking for vulnerabilities. Small Irish business websites are targeted just as often as large ones \u2014 because they\u2019re often less protected. A security-first approach is the only reliable defence.',
  },
  {
    icon: Settings,
    title: 'We Handle It So You Don\u2019t Have To',
    desc: 'Security isn\u2019t something you should be managing yourself. We configure, monitor, and actively maintain security for every website we manage \u2014 spotting and blocking threats before they cause damage, so you can focus on your business.',
  },
  {
    icon: Bug,
    title: 'Stop Attacks Before They Happen',
    desc: 'The best security is the kind that prevents problems entirely. We monitor for malware, block suspicious login attempts, apply security patches promptly, and maintain the protections that keep hackers out \u2014 before they get a chance to do damage.',
  },
]

/* ─── WHAT'S INCLUDED DATA ─── */
const serviceItems = [
  {
    icon: Lock,
    title: 'SSL Certificate \u2014 Installed & Maintained',
    desc: 'Your SSL certificate keeps your website secure and shows visitors the padlock they trust. We install and manage SSL renewals automatically \u2014 so it never expires and your site never shows a security warning to potential customers.',
  },
  {
    icon: Bug,
    title: 'Regular Malware Scans',
    desc: 'We run regular automated scans of your website to detect malware, backdoors, and injected malicious code. If anything is found, we act immediately to clean and restore your site before it causes harm to your visitors or your reputation.',
  },
  {
    icon: KeyRound,
    title: 'Login Attack Prevention',
    desc: 'Automated bots constantly try to guess website passwords through repeated login attempts. We implement protections that detect and block these attacks before they can gain access to your website\u2019s admin area.',
  },
  {
    icon: RefreshCw,
    title: 'Security Updates Applied Promptly',
    desc: 'Outdated WordPress core files, themes, and plugins are the most common way websites get hacked. We apply security updates on a regular cycle \u2014 testing them first, then deploying them \u2014 so your site is never left running vulnerable software.',
  },
  {
    icon: Activity,
    title: '24/7 Uptime & Blacklist Monitoring',
    desc: 'If your website goes down or gets blacklisted by Google (a common outcome of a hack), we get alerted immediately. We monitor your site around the clock and respond fast \u2014 so problems are resolved before they seriously impact your business.',
  },
  {
    icon: FileCheck,
    title: 'GDPR-Compliant Security Practices',
    desc: 'All security measures we implement follow GDPR requirements for protecting customer data. This includes secure data transmission (HTTPS), access controls, and data handling practices that protect your customers and keep you compliant with Irish and EU law.',
  },
  {
    icon: Wifi,
    title: 'Protection Against Traffic Attacks',
    desc: 'DDoS attacks flood websites with fake traffic until they crash. We implement protections that detect and block these attacks at the network level \u2014 keeping your site online even when it\u2019s being targeted.',
  },
  {
    icon: AlertTriangle,
    title: 'Fast Response If Something Goes Wrong',
    desc: 'Despite the best precautions, incidents can still occur. If your site is compromised, we respond immediately \u2014 isolating the issue, cleaning the site, restoring from backup if needed, and hardening security to prevent recurrence. You\u2019re never left dealing with it alone.',
  },
]

/* ─── BUSINESS IMPACT DATA ─── */
const impactItems = [
  {
    icon: TrendingDown,
    title: 'Your Website Goes Offline',
    desc: 'A hacked or compromised website can be taken down entirely \u2014 by the attack itself or by your hosting provider. Every hour offline is enquiries you\u2019re not receiving, sales you\u2019re not making, and customers finding your competitors instead.',
  },
  {
    icon: Search,
    title: 'Google Flags Your Site as Dangerous',
    desc: 'If malware is detected on your website, Google can blacklist it \u2014 showing a \u201cThis site may harm your computer\u201d warning to anyone who tries to visit. Recovering from a Google blacklist takes time and can destroy your search rankings.',
  },
  {
    icon: Star,
    title: 'Customer Trust Takes Months to Rebuild',
    desc: 'Customers who visit a hacked or defaced website \u2014 or who receive spam from a compromised email \u2014 lose confidence in your business fast. That damage to your reputation doesn\u2019t disappear when the site is fixed. Prevention is far cheaper than recovery.',
  },
  {
    icon: AlertOctagon,
    title: 'Potential GDPR Fines and Legal Issues',
    desc: 'If your website is hacked and customer data is exposed, you may have obligations under GDPR to report the breach \u2014 and potentially face fines. Proper security measures reduce this risk significantly and demonstrate that your business takes data protection seriously.',
  },
]

/* ─── HACK RECOVERY STEPS DATA ─── */
const recoverySteps = [
  { num: 1, label: 'Immediate assessment', desc: 'we identify exactly what happened and how' },
  { num: 2, label: 'Site isolation', desc: 'we contain the damage to stop it spreading' },
  { num: 3, label: 'Malware removal', desc: 'every infected file is found and cleaned' },
  { num: 4, label: 'Backup restoration', desc: 'if needed, we restore to a clean version' },
  { num: 5, label: 'Security hardening', desc: 'we close the vulnerabilities that were exploited' },
  { num: 6, label: 'Ongoing monitoring', desc: 'we put protections in place to prevent recurrence' },
]

/* ─── FAQ DATA ─── */
const faqItems = [
  {
    q: 'Does my small business website really need security?',
    a: 'Yes. Small business websites are actually targeted more frequently than large ones, because they\u2019re often less well protected. Automated hacking tools scan thousands of sites every day looking for outdated software and weak points. Size doesn\u2019t protect you \u2014 proper security does.',
  },
  {
    q: 'What\u2019s the most common way Irish business websites get hacked?',
    a: 'The most common cause is outdated software \u2014 an old version of WordPress, an unpatched plugin, or a theme with a known vulnerability. Regular, properly managed updates are the single most effective way to prevent the majority of hacks.',
  },
  {
    q: 'What happens if my site gets blacklisted by Google?',
    a: 'We respond immediately. We clean the site, remove the malicious code, and submit a reconsideration request to Google. Recovery time varies, but acting fast significantly reduces the impact. Sites on our management plans are monitored for blacklist status \u2014 so we\u2019re often aware before you are.',
  },
  {
    q: 'Is security included in your website management plans?',
    a: 'Yes. All our monthly management plans include security scanning, malware monitoring, SSL management, and regular security updates. Security isn\u2019t an optional extra \u2014 it\u2019s built into every plan.',
  },
  {
    q: 'Can you take over security for a website that Morey Digital didn\u2019t build?',
    a: 'Yes. We can onboard existing websites onto our management plans, starting with a full security audit. We\u2019ll identify any existing issues, fix them, and then maintain ongoing security from that point forward.',
  },
  {
    q: 'Do I need to do anything myself to keep my site secure?',
    a: 'Very little. On our management plans, we handle the ongoing security work for you. The main thing we ask is that you use a strong, unique password for your admin account and let us know if you notice anything unusual. Everything else is covered.',
  },
  {
    q: 'What is GDPR and how does it relate to website security?',
    a: 'GDPR is the EU law that governs how businesses handle personal data. If your website collects any personal information \u2014 contact form submissions, email addresses, or payment details \u2014 you have legal obligations to protect that data. Proper website security is a key part of GDPR compliance.',
  },
  {
    q: 'How quickly do you respond to a security incident?',
    a: 'For clients on management plans, we monitor continuously and aim to respond to security alerts within hours. For emergency hack recovery enquiries from non-clients, contact us directly at conor@moreydigital.ie and we\u2019ll prioritise your case.',
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
export default function WebsiteSecurityPage() {
  const heroRef = useReveal()
  const introRef = useReveal()
  const whyRef = useReveal()
  const servicesRef = useReveal()
  const impactRef = useReveal()
  const recoveryRef = useReveal()
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
              <span className="text-jade text-xs font-body font-medium uppercase tracking-wider">Website Security & Malware Protection</span>
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 break-words">
              Protect Your Business Website From{' '}
              <span className="text-jade">Hacks, Malware & Attacks</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-body font-medium leading-relaxed mb-4 max-w-3xl mx-auto">
              Your website holds your reputation, your customer data, and your ability to do business online. A hacked or compromised site doesn&rsquo;t just cause downtime &mdash; it damages trust that takes months to rebuild.
            </p>

            <p className="text-gray-400 font-body text-sm leading-relaxed mb-10 max-w-3xl mx-auto">
              Morey Digital builds security into every website we create and actively monitors and maintains security for every site on our management plans. We handle the technical protection so you never have to worry about whether your site is safe.
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
                <span className="text-white/80 text-xs font-body font-medium">Proactive Monitoring</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jade/10 border border-jade/20">
                <Bug size={16} className="text-jade" />
                <span className="text-white/80 text-xs font-body font-medium">Malware Detection & Removal</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jade/10 border border-jade/20">
                <Lock size={16} className="text-jade" />
                <span className="text-white/80 text-xs font-body font-medium">Irish-Based Security Support</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. INTRO STATEMENT ── */}
      <section ref={introRef} className="relative py-16 lg:py-24 overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <p className="text-lg md:text-xl text-white/60 font-body leading-relaxed">
              Website security is no longer something Irish businesses can ignore. Hackers target small business websites automatically and constantly &mdash; looking for outdated software, weak passwords, and unpatched vulnerabilities. A compromised website doesn&rsquo;t just go offline. It can expose your customers&rsquo; data, get blacklisted by Google, and destroy the trust you&rsquo;ve spent years building.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. WHY WEBSITE SECURITY MATTERS ── */}
      <section ref={whyRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Why It Matters</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              Why Website Security Is Critical for Your Business
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

      {/* ── 4. WHAT'S INCLUDED ── */}
      <section ref={servicesRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '60%', '--glow-y': '30%' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">What&rsquo;s Included</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              How We Keep Your Website Secure
            </h2>
            <p className="text-gray-400 font-body mt-4 max-w-2xl mx-auto">
              Every website we manage includes a layered set of security measures &mdash; not a single checkbox, but proper ongoing protection.
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

      {/* ── 5. BUSINESS IMPACT ── */}
      <section ref={impactRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Business Impact</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              What a Hacked Website Actually Costs Your Business
            </h2>
            <p className="text-gray-400 font-body mt-4 max-w-2xl mx-auto">
              Security incidents aren&rsquo;t just a technical problem. They have direct, lasting business consequences.
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
                    <h3 className="font-heading font-bold text-base text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 font-body text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. HACK RECOVERY ── */}
      <section ref={recoveryRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '40%', '--glow-y': '50%' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Hack Recovery</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
              Already Been Hacked? We Can Help.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start reveal">
            {/* Left column — copy */}
            <div>
              <p className="text-gray-300 font-body text-base leading-relaxed">
                Website hacks happen to Irish businesses every day &mdash; and getting the right help quickly makes a huge difference to how fast you recover and how much damage is done. If your website has been compromised, taken down, or flagged by Google, contact us immediately. We&rsquo;ll assess the situation, clean the site, restore from backup where needed, and put proper ongoing protections in place so it doesn&rsquo;t happen again.
              </p>
            </div>

            {/* Right column — recovery process card */}
            <div className="glass-card p-8 border-l-[3px] border-l-jade">
              <h3 className="font-heading font-bold text-lg text-white mb-6">Our Hack Recovery Process</h3>
              <div className="space-y-5">
                {recoverySteps.map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-jade/10 border border-jade/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-jade text-xs font-heading font-bold">{step.num}</span>
                    </div>
                    <div>
                      <span className="font-heading font-semibold text-white text-sm">{step.label}</span>
                      <span className="text-gray-400 font-body text-sm"> &mdash; {step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="text-jade font-heading font-semibold text-sm hover:underline inline-flex items-center gap-1"
                >
                  Contact us about a compromised website
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ── */}
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

      {/* ── 8. FINAL CTA ── */}
      <section ref={ctaRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '50%' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Don&rsquo;t Wait Until Your Website Gets Hacked
            </h2>
            <p className="text-gray-400 font-body text-lg mb-8 max-w-xl mx-auto">
              Proactive security is far cheaper and less stressful than dealing with an attack after the fact. Get in touch today and we&rsquo;ll make sure your website is properly protected.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jade text-dark font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-base"
            >
              Get a Free Security Consultation
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
