import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  RefreshCw,
  Eye,
  ShieldAlert,
  Layers,
  BellRing,
  Wrench,
  CheckCircle,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

/* ─── SEO ─── */
function PageMeta() {
  useEffect(() => {
    document.title = 'Website Software Updates & Security Patching Ireland | Morey Digital'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Morey Digital manages all website software updates and security patching for Irish businesses \u2014 protecting against new threats before they can cause damage.')
    }
  }, [])
  return null
}

/* ─── FEATURE CARDS DATA ─── */
const featureCards = [
  {
    icon: ShieldAlert,
    title: 'Protection Before a Fix Exists',
    desc: 'When a new vulnerability is discovered in popular website software, we apply a protective block against known exploit patterns immediately \u2014 before the official patch is even released. Your site is never left exposed waiting for a developer to catch up.',
  },
  {
    icon: Layers,
    title: 'Firewall-Level Security',
    desc: 'Threats are filtered and blocked at the network edge before they reach your website server. Malicious traffic is stopped in its tracks \u2014 your actual site never even sees the attack.',
  },
  {
    icon: BellRing,
    title: 'Active Threat Monitoring',
    desc: 'We track global vulnerability disclosures, malware reports, and security blacklists continuously. The moment a threat relevant to your site\u2019s software is identified, we act \u2014 not when you report a problem.',
  },
  {
    icon: Wrench,
    title: 'Safe, Tested Updates',
    desc: 'When official patches and software updates are available, we test them in a staging environment first and deploy them cleanly. No rushed updates pushed directly to your live site and hoping for the best.',
  },
]

/* ─── WHY IT MATTERS DATA ─── */
const whyItems = [
  {
    label: 'Hackers target outdated software automatically',
    desc: 'Automated bots scan the internet continuously, looking for websites running known vulnerable software. They don\u2019t target specific businesses \u2014 they just find unlocked doors.',
  },
  {
    label: 'A vulnerability can be exploited within hours',
    desc: 'Once a security weakness is made public, hackers move fast. There\u2019s often a window of hours \u2014 not days \u2014 before attacks begin. Waiting for a manual update isn\u2019t fast enough.',
  },
  {
    label: 'Outdated plugins are the most common cause of hacks',
    desc: 'The overwhelming majority of website hacks don\u2019t involve sophisticated targeted attacks. They exploit publicly known weaknesses in plugins and themes that simply haven\u2019t been updated.',
  },
  {
    label: 'A hacked website affects your search rankings',
    desc: 'Google actively flags and removes compromised websites from search results. Getting de-indexed can take weeks to recover from \u2014 and is entirely avoidable with proper patching.',
  },
  {
    label: 'Your visitors\u2019 data can be at risk',
    desc: 'A compromised website can expose customer data, payment details, or contact information. Even if you don\u2019t think you hold sensitive data, you may be wrong \u2014 and the consequences of a breach are serious.',
  },
  {
    label: 'Manual update processes leave gaps',
    desc: 'Relying on a developer to manually update your site every few months is not a security strategy. Vulnerabilities are discovered and exploited between those visits.',
  },
]

/* ─── BIGGER PICTURE DATA ─── */
const biggerPictureItems = [
  {
    label: 'Website Security & Malware Protection',
    desc: 'Active firewall protection, malware scanning, and intrusion detection \u2014 running continuously to keep threats out.',
    linkText: 'Learn more about our Security service',
    to: '/services/website-security',
  },
  {
    label: 'Daily Backups & Disaster Recovery',
    desc: 'If something does go wrong, a clean recent backup means we can restore your site fast \u2014 minimising downtime and data loss.',
    linkText: 'Learn more about our Backups service',
    to: '/services/backups',
  },
  {
    label: 'Website Speed & Performance',
    desc: 'Keeping software updated often improves performance too. We ensure every update is applied cleanly without slowing your site down.',
    linkText: 'Learn more about our Performance service',
    to: '/services/website-performance',
  },
  {
    label: 'Monthly Maintenance & Reporting',
    desc: 'Every month you receive a clear report of what was updated, what was checked, and what we found \u2014 full visibility with no technical jargon.',
    linkText: 'See our Maintenance service',
    to: '/services/website-management',
  },
  {
    label: 'Ongoing Support',
    desc: 'Our team is available to answer questions, investigate anything unusual, and respond quickly if there\u2019s ever a problem. You\u2019re not on your own.',
    linkText: 'Contact us',
    to: '/contact',
  },
]

/* ─── WHY MOREY DIGITAL DATA ─── */
const whyMoreyItems = [
  {
    title: 'We Handle Everything \u2014 You Handle Nothing',
    desc: 'You don\u2019t need to know what version your plugins are running or whether your theme has a known vulnerability. That\u2019s our job. We monitor it, manage it, and fix it \u2014 without you having to ask.',
  },
  {
    title: 'We Test Before We Update',
    desc: 'We don\u2019t push software updates directly to your live site. Updates are tested in a staging environment first, so a bad update never breaks your live website in front of your customers.',
  },
  {
    title: 'We Act Before You Ask',
    desc: 'We monitor vulnerability databases and security feeds continuously. When a relevant threat is identified, we act on it proactively \u2014 not reactively after something has gone wrong.',
  },
  {
    title: 'We Explain What We Did, in Plain English',
    desc: 'Every month your report tells you exactly what was updated, what security issues were addressed, and what the status of your website is. No technical jargon \u2014 just clear, useful information.',
  },
  {
    title: 'We\u2019re an Irish Team Working With Irish Businesses',
    desc: 'We understand the Irish business context \u2014 from the busy trading periods to the local competitive landscape. We\u2019re available by phone or email when you need us, not just via a ticket system.',
  },
]

/* ─── PROCESS STEPS DATA ─── */
const processSteps = [
  {
    num: 1,
    label: 'Threat Discovered',
    title: 'A New Vulnerability Is Identified',
    desc: 'Security researchers or our monitoring systems identify a new weakness in website software \u2014 a plugin, a theme, or the website platform itself. This is logged and assessed immediately for relevance to your site.',
  },
  {
    num: 2,
    label: 'Protective Block Applied',
    title: 'We Block the Threat at the Firewall Level',
    desc: 'Before an official software fix exists, we apply a targeted protective rule at the firewall level that blocks known exploit attempts against the vulnerability. Your site is protected immediately \u2014 even before a patch is released.',
  },
  {
    num: 3,
    label: 'Official Update Deployed',
    title: 'The Official Fix Is Tested and Applied Safely',
    desc: 'When the software developer releases an official update that fixes the vulnerability, we test it in a staging environment first to make sure it doesn\u2019t break anything on your site \u2014 then deploy it cleanly.',
  },
  {
    num: 4,
    label: 'Verified & Reported',
    title: 'We Confirm It\u2019s Fixed and Include It in Your Report',
    desc: 'We verify the vulnerability has been fully resolved, monitor for any anomalies, and include a summary in your next monthly report \u2014 so you always know what was found and what was done about it.',
  },
]

/* ─── FAQ DATA ─── */
const faqItems = [
  {
    q: 'What is security patching and do I really need it?',
    a: 'Security patching means keeping your website software up to date with the latest security fixes \u2014 and applying protective measures against new threats even before the official fix is available. Every website needs this. Outdated website software is the leading cause of hacks, and it doesn\u2019t matter how big or small your business is \u2014 automated bots scan every website they can find, looking for known vulnerabilities.',
  },
  {
    q: 'What software on my website needs to be kept updated?',
    a: 'A typical website is made up of several pieces of software \u2014 the core platform (such as WordPress), a set of plugins or extensions that add functionality, and a theme that controls the design. All of these receive security updates from their developers, and all of them need to be kept current. We manage the full stack for you.',
  },
  {
    q: 'What happens if I don\u2019t update my website software?',
    a: 'Outdated software creates security holes that hackers actively scan for and exploit. The consequences can include your website being defaced, injected with malware, used to send spam, or taken offline entirely. Google may also blacklist your site, removing it from search results until the problem is resolved.',
  },
  {
    q: 'Can updates break my website?',
    a: 'They can, which is exactly why we test updates in a staging environment before deploying them to your live site. Pushing untested updates directly to a live website is one of the most common causes of avoidable website problems. Our process eliminates that risk.',
  },
  {
    q: 'How is this different from just updating plugins myself?',
    a: 'Clicking \u201cUpdate\u201d in your WordPress dashboard only applies updates that are already available \u2014 and it doesn\u2019t protect you during the gap between when a vulnerability is discovered and when a fix is released. Our approach includes proactive protection during that gap, proper testing before deployment, and continuous monitoring for new threats.',
  },
  {
    q: 'Is this included in your website management plans?',
    a: 'Yes. Software updates and security patching are a core part of all our monthly website management plans. You don\u2019t need to purchase it separately \u2014 it\u2019s built in as standard, because we don\u2019t believe any managed website should be without it.',
  },
  {
    q: 'How quickly do you respond when a new vulnerability is discovered?',
    a: 'We monitor global vulnerability disclosures continuously. When a new threat relevant to your website\u2019s software is identified, we typically apply protective measures within hours \u2014 not days. For critical vulnerabilities, we act immediately.',
  },
  {
    q: 'Do I get a report of what was updated?',
    a: 'Yes. Every month you receive a clear report covering all updates applied, any security issues that were addressed, and the current status of your website\u2019s software. It\u2019s written in plain English so you always know exactly what\u2019s happening with your site.',
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
export default function UpdatesPatchingPage() {
  const heroRef = useReveal()
  const explainerRef = useReveal()
  const featuresRef = useReveal()
  const whyRef = useReveal()
  const bigPictureRef = useReveal()
  const whyMoreyRef = useReveal()
  const processRef = useReveal()
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
              <span className="text-jade text-xs font-body font-medium uppercase tracking-wider">Software Updates & Security Patching</span>
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 break-words">
              Your Website Software Is Always Up to Date &mdash;{' '}
              <span className="text-jade">Protected Against New Threats Before They&rsquo;re Exploited</span>
            </h1>

            <p className="text-lg sm:text-xl text-white font-body font-medium leading-relaxed mb-4 max-w-3xl mx-auto">
              Outdated plugins, themes, and website software are the number one cause of website hacks. Morey Digital monitors for new vulnerabilities and applies protective measures the moment a threat is identified &mdash; often before an official fix even exists.
            </p>

            <p className="text-white/80 font-body text-sm leading-relaxed mb-10 max-w-3xl mx-auto">
              Most website owners don&rsquo;t realise that a vulnerability can be discovered in popular website software today, and hackers can start exploiting it within hours. If you&rsquo;re waiting for your developer to notice and manually update your site, there&rsquo;s a window where your business is exposed. We close that window for you.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jade text-white font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-base"
            >
              Get a Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Hero feature badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jade/10 border border-jade/20">
                <ShieldCheck size={16} className="text-jade" />
                <span className="text-white/80 text-xs font-body font-medium">Proactive Vulnerability Protection</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jade/10 border border-jade/20">
                <RefreshCw size={16} className="text-jade" />
                <span className="text-white/80 text-xs font-body font-medium">Managed Software Updates</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jade/10 border border-jade/20">
                <Eye size={16} className="text-jade" />
                <span className="text-white/80 text-xs font-body font-medium">24/7 Threat Monitoring</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PLAIN ENGLISH EXPLAINER ── */}
      <section ref={explainerRef} className="relative py-16 lg:py-24 overflow-hidden bg-white">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="reveal">
            <div className="glass-card p-8 sm:p-10 border-l-[3px] border-l-jade">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#1A3C6E] mb-6">
                What Does &lsquo;Security Patching&rsquo; Actually Mean?
              </h2>
              <div className="space-y-4">
                <p className="text-[#333333] font-body text-base leading-relaxed">
                  Your website is built using software &mdash; a platform, a set of plugins, and a theme. The companies that make this software regularly discover security weaknesses in their own products. When they do, they release a fix (called a &lsquo;patch&rsquo;). The problem is: there&rsquo;s always a gap between when a weakness is discovered and when the fix is released and applied.
                </p>
                <p className="text-[#333333] font-body text-base leading-relaxed">
                  That gap is when hackers strike. They scan thousands of websites looking for ones running vulnerable software &mdash; and they do it automatically, constantly. A website with an unpatched vulnerability can be compromised within hours of the weakness becoming known, before most website owners even know there&rsquo;s a problem.
                </p>
                <p className="text-[#333333] font-body text-base leading-relaxed">
                  Security patching &mdash; including what&rsquo;s known as &lsquo;virtual patching&rsquo; &mdash; means applying a protective layer that blocks attacks targeting known weaknesses, even before the official software fix is available. It&rsquo;s the difference between locking your door and waiting until someone tries to break in to realise you should have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. 4 FEATURE ICONS ── */}
      <section ref={featuresRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">How We Protect You</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              How We Protect Your Website from New Threats
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
            {featureCards.map((card, i) => (
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

      {/* ── 4. WHY IT MATTERS ── */}
      <section ref={whyRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '60%', '--glow-y': '30%' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Why It Matters</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              Why Keeping Your Website Software Updated Matters
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              Most website hacks are entirely preventable. Here&rsquo;s what&rsquo;s at stake when software updates are neglected.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 reveal-stagger">
            {whyItems.map((item, i) => (
              <div
                key={item.label}
                className="reveal flex items-start gap-4 p-5 glass-card transition-all"
                style={{ '--reveal-index': i }}
              >
                <CheckCircle size={22} className="text-jade flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-bold text-base text-[#1A3C6E] mb-1">{item.label}</h3>
                  <p className="text-[#555555] font-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PART OF A BIGGER PICTURE ── */}
      <section ref={bigPictureRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Complete Protection</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              Updates & Patching Are Part of a Complete Protection Layer
            </h2>
          </div>

          <div className="reveal">
            <div className="glass-card p-8 sm:p-10">
              <p className="text-[#333333] font-body text-base leading-relaxed mb-8">
                Security patching on its own is not enough. At Morey Digital, it&rsquo;s one part of a layered approach to keeping your website safe, fast, and running reliably for your business.
              </p>
              <div className="space-y-6">
                {biggerPictureItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <CheckCircle size={22} className="text-jade flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading font-bold text-base text-[#1A3C6E] mb-1">{item.label}</h3>
                      <p className="text-[#555555] font-body text-sm leading-relaxed mb-1">{item.desc}</p>
                      <Link
                        to={item.to}
                        className="text-jade font-body text-sm hover:underline inline-flex items-center gap-1"
                      >
                        {item.linkText}
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WHY MOREY DIGITAL ── */}
      <section ref={whyMoreyRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '40%', '--glow-y': '50%' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Why Us</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              Why Irish Businesses Choose Morey Digital to Manage Their Website Updates
            </h2>
          </div>

          <div className="space-y-5 reveal">
            {whyMoreyItems.map((item) => (
              <div key={item.title} className="flex items-start gap-5 p-6 glass-card transition-all">
                <div className="w-1 flex-shrink-0 self-stretch bg-jade rounded-full" />
                <div>
                  <h4 className="font-heading font-bold text-base text-[#1A3C6E] mb-2">{item.title}</h4>
                  <p className="text-[#555555] font-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. HOW IT WORKS ── */}
      <section ref={processRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Our Process</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              How Our Update & Patching Process Works
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              A clear process that keeps your website protected at every stage &mdash; from new threat discovery through to confirmed resolution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className="reveal glass-card p-7 text-center transition-all"
                style={{ '--reveal-index': i }}
              >
                <div className="w-10 h-10 rounded-full bg-jade/10 border border-jade/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-jade text-sm font-heading font-bold">{step.num}</span>
                </div>
                <span className="text-jade text-xs font-body font-medium uppercase tracking-wider">{step.label}</span>
                <h3 className="font-heading font-bold text-sm text-[#1A3C6E] mt-2 mb-3">{step.title}</h3>
                <p className="text-[#555555] font-body text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ── */}
      <section ref={faqRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
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

      {/* ── 9. FINAL CTA ── */}
      <section ref={ctaRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#1A3C6E]">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '50%' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Is Your Website Running Outdated Software Right Now?
            </h2>
            <p className="text-white/80 font-body text-lg mb-8 max-w-xl mx-auto">
              Most Irish business websites are. Get in touch for a free audit and we&rsquo;ll tell you exactly what needs updating &mdash; and put a plan in place to keep it protected from now on.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-jade text-white font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group text-base"
            >
              Get a Free Quote
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
