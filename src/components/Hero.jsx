import { Link } from 'react-router-dom'
import { ArrowRight, Eye } from 'lucide-react'

function BrowserCard() {
  return (
    <div className="glass-card p-3 w-56 float-slow" style={{ animationDelay: '0s' }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        <div className="ml-2 flex-1 h-5 rounded bg-white/5 flex items-center px-2">
          <span className="text-[9px] text-gray-500 font-body">yoursite.ie</span>
        </div>
      </div>
      {/* Layout skeleton */}
      <div className="space-y-2">
        <div className="h-16 rounded bg-gradient-to-br from-jade/20 to-jade/5 flex items-center justify-center">
          <span className="text-[10px] text-jade/60 font-heading font-semibold">HERO</span>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 h-8 rounded bg-white/5" />
          <div className="flex-1 h-8 rounded bg-white/5" />
          <div className="flex-1 h-8 rounded bg-white/5" />
        </div>
        <div className="h-6 rounded bg-white/[0.03]" />
      </div>
    </div>
  )
}

function RankCard() {
  return (
    <div className="glass-card p-3 w-48 float-medium" style={{ animationDelay: '0.8s' }}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-gray-400 font-body uppercase tracking-wider">Google Rank</span>
        <span className="text-jade text-xs font-heading font-bold">#1</span>
      </div>
      <div className="space-y-1.5">
        {[
          { keyword: '"plumber ennis"', w: '95%' },
          { keyword: '"café limerick"', w: '82%' },
          { keyword: '"auto repair clare"', w: '74%' },
        ].map((item) => (
          <div key={item.keyword}>
            <div className="flex justify-between mb-0.5">
              <span className="text-[9px] text-gray-500 font-body">{item.keyword}</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-jade/60 to-jade"
                style={{ width: item.w }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AnalyticsCard() {
  return (
    <div className="glass-card p-3 w-52 float-slow" style={{ animationDelay: '1.5s' }}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-gray-400 font-body uppercase tracking-wider">Monthly Visitors</span>
        <span className="text-jade text-xs font-heading font-bold">+38%</span>
      </div>
      <div className="flex items-end gap-1 h-12">
        {[35, 42, 38, 55, 48, 62, 58, 72, 68, 85, 78, 92].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-jade/30 to-jade/60"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-[10px] text-gray-500 font-body">2,847 visits</span>
        <Eye size={12} className="text-gray-500" />
      </div>
    </div>
  )
}

function SupportCard() {
  return (
    <div className="glass-card p-3 w-56 float-fast" style={{ animationDelay: '0.4s' }}>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-jade/20 flex items-center justify-center flex-shrink-0">
          <span className="text-jade text-xs font-heading font-bold">C</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] text-white font-body font-medium">Website updated</p>
          <p className="text-[9px] text-gray-500 font-body">2 mins ago</p>
        </div>
        <span className="text-[9px] text-jade bg-jade/10 px-1.5 py-0.5 rounded font-body">Done</span>
      </div>
      <div className="mt-2 h-1.5 rounded-full bg-white/5">
        <div className="h-full rounded-full bg-jade w-full transition-all" />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-dots" />
      <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '30%', '--glow-y': '40%' }} />
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] max-w-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,200,150,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 break-words">
              We Build, Launch & Manage{' '}
              <span className="text-jade">High-Performing Websites</span>{' '}
              for Irish Businesses
            </h1>

            <p className="text-lg text-gray-400 font-body leading-relaxed mb-8 max-w-xl">
              From design and development to SEO, Google Business and ongoing support —
              we handle everything so you can focus on running your business. Based in Clare, working nationwide.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-jade text-dark font-heading font-bold rounded-lg hover:bg-jade-400 transition-all group"
              >
                Get a Free Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-white font-heading font-semibold rounded-lg hover:bg-white/5 transition-all"
              >
                See Our Services
              </a>
            </div>

            {/* Trust stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: '100%', label: 'Mobile-First' },
                { value: 'IE', label: 'Based in Ireland' },
                { value: '24h', label: 'Response Time' },
                { value: '∞', label: 'Ongoing Support' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-jade font-heading font-bold text-xl">{stat.value}</div>
                  <div className="text-gray-500 text-xs font-body mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Floating UI cards */}
          <div className="hidden lg:block relative h-[520px]">
            <div className="absolute top-0 right-0">
              <BrowserCard />
            </div>
            <div className="absolute top-32 left-0">
              <RankCard />
            </div>
            <div className="absolute top-[270px] right-4">
              <AnalyticsCard />
            </div>
            <div className="absolute bottom-0 left-4">
              <SupportCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
