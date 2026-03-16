import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ChevronDown,
  DatabaseBackup,
  RotateCcw,
  Activity,
  Store,
  ShoppingBag,
  CalendarCheck,
  CheckCircle,
  Lock,
  Globe,
  ShieldAlert,
  RefreshCw,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

/* ─── SEO ─── */
function PageMeta() {
  useEffect(() => {
    document.title = 'Website Backups & Disaster Recovery Ireland | Morey Digital'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Morey Digital provides daily automated website backups and fast disaster recovery for Irish businesses. If something goes wrong, we get you back online fast.')
    }
  }, [])
  return null
}

/* ─── WHO THIS IS FOR DATA ─── */
const whoCards = [
  {
    icon: Store,
    title: 'Local & Service Businesses',
    desc: 'If your website generates enquiries, phone calls, or quote requests, downtime directly costs you business. Our backup and recovery service means you\u2019re never more than hours away from being fully operational again.',
  },
  {
    icon: ShoppingBag,
    title: 'eCommerce & Online Shops',
    desc: 'For online stores, every hour offline is lost sales and abandoned customers. We back up your full store \u2014 products, orders, customer data \u2014 and can restore it fast so your revenue stream is protected.',
  },
  {
    icon: CalendarCheck,
    title: 'Hospitality, Tourism & Booking Sites',
    desc: 'If your website takes bookings or reservations, downtime during peak periods can be devastating. We keep a clean, recent backup ready to restore at any time \u2014 including evenings, weekends, and busy seasons.',
  },
]

/* ─── CHECKLIST DATA ─── */
const checklistItems = [
  {
    label: 'Daily automated backups',
    desc: 'Your full website \u2014 all files and your database \u2014 is backed up automatically every day without you having to do anything.',
  },
  {
    label: 'Offsite backup storage',
    desc: 'Backups are stored separately from your live website, so a hosting issue can never wipe out both your site and its backup at the same time.',
  },
  {
    label: 'Multiple restore points',
    desc: 'We retain multiple days of backups so you can restore to yesterday, last week, or further back \u2014 not just the most recent version.',
  },
  {
    label: 'Fast manual restoration',
    desc: 'If something goes wrong, we restore your site as quickly as possible \u2014 minimising the time your website is down or broken.',
  },
  {
    label: '24/7 uptime monitoring',
    desc: 'We monitor your website around the clock and get alerted the moment it goes offline \u2014 often before you even notice.',
  },
  {
    label: 'Pre-update backup snapshots',
    desc: 'Before any major update or change is applied to your site, we take a snapshot so we can instantly roll back if anything breaks.',
  },
  {
    label: 'Monthly backup confirmation',
    desc: 'Your monthly report confirms that backups are running successfully \u2014 so you always know your protection is working.',
  },
  {
    label: 'Recovery support included',
    desc: 'If a restore is ever needed, our team handles it for you. You don\u2019t need to know how \u2014 just contact us and we take care of it.',
  },
]

/* ─── HOW IT WORKS DATA ─── */
const processSteps = [
  {
    num: 1,
    label: 'Assess',
    title: 'We Audit Your Current Setup',
    desc: 'We review your website, its content, and how critical it is to your business. This shapes the backup frequency, retention period, and recovery approach that\u2019s right for you.',
  },
  {
    num: 2,
    label: 'Protect',
    title: 'Daily Backups Are Configured and Running',
    desc: 'We set up automated daily backups of your full website \u2014 files and database \u2014 stored securely offsite. Every update or significant change is also snapshotted before it goes live.',
  },
  {
    num: 3,
    label: 'Monitor',
    title: 'Uptime Monitoring Runs Around the Clock',
    desc: 'We monitor your website 24/7. If it goes offline for any reason, we\u2019re alerted immediately and begin investigating \u2014 often before your customers or your team notice anything is wrong.',
  },
  {
    num: 4,
    label: 'Respond',
    title: 'Fast Response When Something Goes Wrong',
    desc: 'If your site breaks, gets hacked, or goes down, we act fast. We assess what happened, select the right restore point, and get your site back up as quickly as possible \u2014 keeping you informed throughout.',
  },
  {
    num: 5,
    label: 'Report',
    title: 'Monthly Confirmation and Reporting',
    desc: 'Every month your report confirms that backups are running successfully, that your site has been online, and flags anything that needs attention. No guessing \u2014 just clear, regular confirmation that your website is protected.',
  },
]

/* ─── PLAN COMPARISON DATA ─── */
const planFeatures = [
  { label: 'Backup frequency', launch: 'Daily', growth: 'Daily', managed: 'Daily' },
  { label: 'Backup retention', launch: '7 days', growth: '14 days', managed: '30 days' },
  { label: 'Offsite backup storage', launch: true, growth: true, managed: true },
  { label: 'Pre-update snapshots', launch: true, growth: true, managed: true },
  { label: 'Uptime monitoring', launch: true, growth: true, managed: true },
  { label: 'Restore on request', launch: 'Within 24hrs', growth: 'Within 8hrs', managed: 'Within 4hrs' },
  { label: 'Support response time', launch: 'Next business day', growth: 'Same business day', managed: 'Priority same day' },
  { label: 'Monthly backup report', launch: true, growth: true, managed: true },
  { label: 'Dedicated account manager', launch: false, growth: false, managed: true },
]

/* ─── WHAT WE MONITOR DATA ─── */
const monitorItems = [
  {
    icon: Activity,
    title: 'Website Uptime',
    desc: 'External checks confirm your website is accessible and responding correctly. We\u2019re alerted within minutes if it goes offline for any reason.',
  },
  {
    icon: Lock,
    title: 'SSL Certificate Status',
    desc: 'We monitor your SSL certificate and manage renewals automatically \u2014 so it never expires and your visitors never see a security warning.',
  },
  {
    icon: DatabaseBackup,
    title: 'Backup Success & Integrity',
    desc: 'We verify that every scheduled backup completes successfully. If a backup fails, we\u2019re alerted immediately so it can be investigated and resolved.',
  },
  {
    icon: Globe,
    title: 'Domain & DNS Health',
    desc: 'We monitor your domain expiry and DNS records \u2014 because an expired domain or misconfigured DNS setting can take your website offline just as effectively as a server failure.',
  },
  {
    icon: ShieldAlert,
    title: 'Google Blacklist Status',
    desc: 'If your website is flagged by Google as dangerous or compromised, we\u2019re notified immediately \u2014 so we can act before it damages your search rankings or drives visitors away.',
  },
  {
    icon: RefreshCw,
    title: 'Software Version Health',
    desc: 'We track whether your WordPress core, plugins, and themes are up to date. Outdated software is the most common cause of security vulnerabilities and performance degradation.',
  },
]

/* ─── RECOVERY STEPS DATA ─── */
const recoverySteps = [
  { num: 1, label: 'We detect the issue', desc: 'often before you do, via uptime monitoring' },
  { num: 2, label: 'We assess the cause', desc: 'hack, failed update, hosting issue, or human error' },
  { num: 3, label: 'We select the right restore point', desc: 'the most recent clean version of your site' },
  { num: 4, label: 'We restore your website', desc: 'getting it back online as fast as possible' },
  { num: 5, label: 'We investigate the root cause', desc: 'and fix it to prevent recurrence' },
  { num: 6, label: 'We report to you', desc: 'a clear summary of what happened and what we did' },
]

/* ─── FAQ DATA ─── */
const faqItems = [
  {
    q: 'How often is my website backed up?',
    a: 'On all our plans, your website is backed up automatically every day. Depending on your plan, we retain between 7 and 30 days of backup history \u2014 so you always have multiple restore points available, not just the most recent one.',
  },
  {
    q: 'Where are my backups stored?',
    a: 'Backups are stored in a separate, secure offsite location \u2014 completely independent from where your website is hosted. This means a hosting problem can never destroy both your live site and its backup at the same time.',
  },
  {
    q: 'How long does it take to restore a website from backup?',
    a: 'It depends on the plan and the size of the site, but most restorations are completed within a few hours of the request. On our Managed plan, we aim to have sites restored within 4 hours. We keep you informed throughout the process.',
  },
  {
    q: 'Will I lose any content if my site is restored from a backup?',
    a: 'Any content added or changed after the most recent backup would need to be re-added after a restore. This is why daily backups matter \u2014 the maximum you would typically lose is one day\u2019s worth of changes. For high-traffic or frequently updated sites, we can discuss more frequent backup schedules.',
  },
  {
    q: 'What\u2019s the difference between a backup and uptime monitoring?',
    a: 'A backup is a saved copy of your website that can be restored if something goes wrong. Uptime monitoring is an active check that confirms your website is online and responding correctly right now. Both are essential \u2014 one protects you from data loss, the other ensures you know immediately if your site goes down.',
  },
  {
    q: 'Can you restore my website if it was hacked?',
    a: 'Yes. If your site is compromised by a hack or malware, we restore it from the most recent clean backup \u2014 before the infection occurred \u2014 and then harden the security to prevent the same attack from happening again.',
  },
  {
    q: 'Do you back up eCommerce stores and databases?',
    a: 'Yes. A full backup includes both your website files and your database \u2014 which contains your products, orders, customer records, and all your site\u2019s content. Everything is backed up, not just the design files.',
  },
  {
    q: 'What if I accidentally delete something on my website?',
    a: 'That\u2019s one of the most common reasons for a restore request \u2014 and it\u2019s exactly what backups are for. Contact us, tell us what was deleted and roughly when, and we\u2019ll restore it from the appropriate backup point.',
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

/* ─── PLAN TABLE CELL RENDERER ─── */
function PlanCell({ value }) {
  if (value === true) {
    return <CheckCircle size={18} className="text-jade mx-auto" />
  }
  if (value === false) {
    return <span className="text-gray-300">&mdash;</span>
  }
  return <span className="text-[#555555] text-sm font-body">{value}</span>
}

/* ─── MOBILE PLAN CARD ─── */
function MobilePlanCard({ planName, planKey, highlighted }) {
  return (
    <div className={`glass-card p-6 ${highlighted ? 'border-l-[3px] border-l-jade' : ''}`}>
      <div className="flex items-center gap-2 mb-5">
        <h3 className="font-heading font-bold text-lg text-[#1A3C6E]">{planName}</h3>
        {highlighted && (
          <span className="px-2 py-0.5 rounded-full bg-jade/10 border border-jade/20 text-jade text-[10px] font-body font-medium uppercase tracking-wider">
            Most Popular
          </span>
        )}
      </div>
      <div className="space-y-3">
        {planFeatures.map((f) => (
          <div key={f.label} className="flex items-center justify-between gap-3">
            <span className="text-[#555555] font-body text-sm">{f.label}</span>
            <PlanCell value={f[planKey]} />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── PAGE COMPONENT ─── */
export default function BackupsPage() {
  const heroRef = useReveal()
  const introRef = useReveal()
  const whoRef = useReveal()
  const checklistRef = useReveal()
  const processRef = useReveal()
  const plansRef = useReveal()
  const monitorRef = useReveal()
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
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#1A3C6E]">
        <div className="absolute inset-0 grid-dots" />
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '45%', '--glow-y': '45%' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-jade/10 border border-jade/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-jade animate-pulse" />
              <span className="text-jade text-xs font-body font-medium uppercase tracking-wider">Website Backups & Disaster Recovery</span>
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 break-words">
              If Something Goes Wrong With Your Website &mdash;{' '}
              <span className="text-jade">We Get You Back Online Fast</span>
            </h1>

            <p className="text-lg sm:text-xl text-white font-body font-medium leading-relaxed mb-4 max-w-3xl mx-auto">
              Every website we manage is backed up automatically every day. If something breaks &mdash; a bad update, a hack, human error, or a hosting issue &mdash; we restore it quickly with minimal disruption to your business.
            </p>

            <p className="text-white/80 font-body text-sm leading-relaxed mb-10 max-w-3xl mx-auto">
              Your website is a business asset. Losing it &mdash; even temporarily &mdash; means lost enquiries, lost trust, and potentially lost data. Morey Digital ensures that no matter what happens, there&rsquo;s always a clean, recent version of your site ready to be restored. We handle everything so you don&rsquo;t have to.
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
                <DatabaseBackup size={16} className="text-jade" />
                <span className="text-white/80 text-xs font-body font-medium">Daily Automated Backups</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jade/10 border border-jade/20">
                <RotateCcw size={16} className="text-jade" />
                <span className="text-white/80 text-xs font-body font-medium">Fast Restore on Request</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jade/10 border border-jade/20">
                <Activity size={16} className="text-jade" />
                <span className="text-white/80 text-xs font-body font-medium">24/7 Uptime Monitoring</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. INTRO STATEMENT ── */}
      <section ref={introRef} className="relative py-16 lg:py-24 overflow-hidden bg-white">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <p className="text-lg md:text-xl text-[#555555] font-body leading-relaxed">
              When your website drives enquiries, bookings, or sales, every minute it&rsquo;s offline costs you real money and real trust. A proper backup and recovery setup isn&rsquo;t a luxury &mdash; it&rsquo;s basic protection for every Irish business with a website that matters to their livelihood.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. WHO THIS IS FOR ── */}
      <section ref={whoRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Who We Help</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              Who This Service Is For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
            {whoCards.map((card, i) => (
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

      {/* ── 4. WHAT YOU GET — CHECKLIST ── */}
      <section ref={checklistRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '60%', '--glow-y': '30%' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">What You Get</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              What&rsquo;s Included in Every Backup & Recovery Plan
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              Here&rsquo;s exactly what we put in place for every website we manage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 reveal-stagger">
            {checklistItems.map((item, i) => (
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

      {/* ── 5. HOW IT WORKS ── */}
      <section ref={processRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Our Process</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              How Our Backup & Recovery Process Works
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              A clear, structured process that means your website is always protected and recoverable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 reveal-stagger">
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

      {/* ── 6. PLAN COMPARISON ── */}
      <section ref={plansRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '40%' }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Compare Plans</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              Backup & Recovery Across Our Plans
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              All plans include daily backups and uptime monitoring. Higher plans add faster response times, more restore points, and priority support.
            </p>
          </div>

          {/* Desktop table — hidden on mobile */}
          <div className="hidden md:block reveal">
            <div className="glass-card overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-jade/[0.12]">
                    <th className="px-6 py-4 font-heading font-semibold text-sm text-[#1A3C6E]">Feature</th>
                    <th className="px-6 py-4 font-heading font-semibold text-sm text-jade text-center">Launch Plan</th>
                    <th className="px-6 py-4 font-heading font-semibold text-sm text-jade text-center">Growth Plan</th>
                    <th className="px-6 py-4 font-heading font-semibold text-sm text-jade text-center relative">
                      <span className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 py-0.5 rounded-t-md bg-jade/20 border border-jade/30 border-b-0 text-jade text-[10px] font-body font-medium uppercase tracking-wider">
                        Most Popular
                      </span>
                      Managed Plan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {planFeatures.map((f, i) => (
                    <tr
                      key={f.label}
                      className={i % 2 === 0 ? 'bg-gray-50' : ''}
                    >
                      <td className="px-6 py-4 text-sm text-[#333333] font-body">{f.label}</td>
                      <td className="px-6 py-4 text-center"><PlanCell value={f.launch} /></td>
                      <td className="px-6 py-4 text-center"><PlanCell value={f.growth} /></td>
                      <td className="px-6 py-4 text-center bg-gray-100 border-l border-gray-200"><PlanCell value={f.managed} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile cards — visible on mobile only */}
          <div className="md:hidden space-y-4 reveal">
            <MobilePlanCard planName="Launch Plan" planKey="launch" />
            <MobilePlanCard planName="Growth Plan" planKey="growth" />
            <MobilePlanCard planName="Managed Plan" planKey="managed" highlighted />
          </div>

          <p className="text-[#555555] font-body text-sm text-center mt-8">
            Need a faster recovery time or a custom setup? Get in touch and we&rsquo;ll tailor a plan around your specific requirements.
          </p>
        </div>
      </section>

      {/* ── 7. WHAT WE MONITOR ── */}
      <section ref={monitorRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="absolute inset-0 glow-jade-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Monitoring</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              What We Monitor to Keep Your Website Safe
            </h2>
            <p className="text-[#555555] font-body mt-4 max-w-2xl mx-auto">
              Uptime monitoring is only one part of keeping your website running reliably. Here&rsquo;s everything we watch.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {monitorItems.map((item, i) => (
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

      {/* ── 8. WHAT HAPPENS WHEN SOMETHING GOES WRONG ── */}
      <section ref={recoveryRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '40%', '--glow-y': '50%' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 reveal">
            <span className="text-jade text-sm font-body font-medium uppercase tracking-wider">Disaster Recovery</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C6E] mt-3">
              What Happens If Your Website Goes Down
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start reveal">
            {/* Left column — copy */}
            <div className="space-y-4">
              <p className="text-[#333333] font-body text-base leading-relaxed">
                When something goes wrong with a website &mdash; and at some point, something always does &mdash; the speed and clarity of the response makes all the difference. With Morey Digital managing your website, you don&rsquo;t need to know what to do. We do.
              </p>
              <p className="text-[#333333] font-body text-base leading-relaxed">
                Whether it&rsquo;s a broken update, a hosting issue, a hack, or an accidental deletion, our process is the same: assess quickly, restore from the most recent clean backup, get you back online, and make sure the same thing can&rsquo;t happen again.
              </p>
            </div>

            {/* Right column — recovery process card */}
            <div className="glass-card p-8 border-l-[3px] border-l-jade">
              <h3 className="font-heading font-bold text-lg text-[#1A3C6E] mb-6">What We Do When Your Site Goes Down</h3>
              <div className="space-y-5">
                {recoverySteps.map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-jade/10 border border-jade/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-jade text-xs font-heading font-bold">{step.num}</span>
                    </div>
                    <div>
                      <span className="font-heading font-semibold text-[#1A3C6E] text-sm">{step.label}</span>
                      <span className="text-[#555555] font-body text-sm"> &mdash; {step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ── */}
      <section ref={faqRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#D6E4F0]">
        <div className="absolute inset-0 glow-jade-subtle" />
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

      {/* ── 10. FINAL CTA ── */}
      <section ref={ctaRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#1A3C6E]">
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '50%', '--glow-y': '50%' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Is Your Website Backed Up Right Now?
            </h2>
            <p className="text-white/80 font-body text-lg mb-8 max-w-xl mx-auto">
              Most Irish business websites have no reliable backup in place &mdash; and discover that fact only when something goes wrong. Don&rsquo;t wait to find out the hard way. Get in touch today.
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
