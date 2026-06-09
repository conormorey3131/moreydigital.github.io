import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

/* ─── MENU DATA ─── */
const serviceMenu = [
  {
    label: 'Website Design & Development',
    to: '/services/website-design-development',
    children: [
      { label: 'Web Design', to: '/services/web-design' },
      { label: 'Custom Website Design', to: '/services/custom-design' },
      { label: 'eCommerce Development', to: '/services/ecommerce' },
      { label: 'Platform Integrations', to: '/services/integrations' },
    ],
  },
  {
    label: 'Website Management & Maintenance',
    to: '/services/website-management',
    children: [
      { label: 'Website Security Overview', to: '/services/website-security-overview' },
      { label: 'Website Speed & Performance', to: '/services/website-performance' },
      { label: 'Security & Malware Protection', to: '/services/website-security' },
      { label: 'Software Updates & Patching', to: '/services/updates-patching' },
      { label: 'Backups & Disaster Recovery', to: '/services/backups' },
      { label: 'Monthly Updates & Maintenance', to: '/services/website-management' },
      { label: 'SEO & Google Visibility', to: '/services/seo' },
    ],
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [activeL1, setActiveL1] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const dropdownRef = useRef(null)
  const hoverTimeout = useRef(null)
  const location = useLocation()
  const isServicesSection = location.pathname.startsWith('/services')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close everything on route change
  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
    setActiveL1(null)
    setMobileExpanded(null)
  }, [location])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
        setActiveL1(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Clean up hover timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    }
  }, [])

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setServicesOpen(false)
      setActiveL1(null)
    }, 150)
  }

  // Check if a route is active (exact or child match)
  const isL1Active = (item) =>
    location.pathname === item.to ||
    (item.children && item.children.some((c) => location.pathname === c.to))

  const panelClasses =
    'bg-white border border-gray-200 shadow-xl rounded-xl py-2'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/90 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-[#1A3C6E]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between w-full h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-jade flex items-center justify-center font-heading font-bold text-white text-sm">
              M
            </div>
            <span className="font-heading font-bold text-lg text-white group-hover:text-jade transition-colors">
              Morey Digital
            </span>
          </Link>

          {/* Desktop nav — hidden below md */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {/* ── Services two-level dropdown ── */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => {
                  setServicesOpen(!servicesOpen)
                  if (servicesOpen) setActiveL1(null)
                }}
                className={`flex items-center gap-1 text-sm transition-colors font-body whitespace-nowrap ${
                  isServicesSection ? 'text-jade' : 'text-white/70 hover:text-white'
                }`}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 flex">
                  {/* ── First-level panel ── */}
                  <div className={`${panelClasses} w-[260px]`}>
                    {serviceMenu.map((item, i) => {
                      const active = isL1Active(item)
                      const hovered = activeL1 === i
                      return (
                        <Link
                          key={item.to}
                          to={item.to}
                          onMouseEnter={() => setActiveL1(i)}
                          className={`flex items-center justify-between px-4 py-3 text-sm font-body transition-all duration-200 ${
                            active
                              ? 'text-jade bg-jade/[0.08] border-l-2 border-jade'
                              : hovered
                                ? 'text-jade bg-jade/[0.08]'
                                : 'text-[#555555] hover:text-[#F47B20] hover:bg-jade/[0.08]'
                          } ${!active ? 'border-l-2 border-transparent' : ''}`}
                        >
                          <span>{item.label}</span>
                          {item.children && item.children.length > 0 && (
                            <ChevronRight size={14} className="flex-shrink-0 opacity-60" />
                          )}
                        </Link>
                      )
                    })}
                  </div>

                  {/* ── Second-level panel ── */}
                  {activeL1 !== null && serviceMenu[activeL1]?.children?.length > 0 && (
                    <div className={`${panelClasses} w-[220px] ml-1`}>
                      {serviceMenu[activeL1].children.map((child) => {
                        const childActive = location.pathname === child.to
                        return (
                          <Link
                            key={child.to}
                            to={child.to}
                            className={`block px-4 py-3 text-sm font-body transition-all duration-200 ${
                              childActive
                                ? 'text-jade bg-jade/[0.08] border-l-2 border-jade'
                                : 'text-[#555555] hover:text-[#F47B20] hover:bg-jade/[0.08] border-l-2 border-transparent'
                            }`}
                          >
                            {child.label}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>

            <Link
              to="/plans"
              className={`text-sm transition-colors font-body whitespace-nowrap ${
                location.pathname === '/plans' ? 'text-jade' : 'text-white/70 hover:text-white'
              }`}
            >
              Plans
            </Link>
            <Link
              to="/about"
              className={`text-sm transition-colors font-body whitespace-nowrap ${
                location.pathname === '/about' ? 'text-jade' : 'text-white/70 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hidden md:inline-flex px-5 py-2.5 bg-jade text-white font-heading font-semibold text-sm rounded-lg hover:bg-jade-400 transition-colors whitespace-nowrap flex-shrink-0"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile toggle — visible below md */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white/70 hover:text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[900px] border-b border-white/5' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 bg-dark-100/95 backdrop-blur-lg space-y-1">
          {/* Services link */}
          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className={`block py-3 transition-colors font-body ${
              location.pathname === '/services' ? 'text-jade' : 'text-white/70 hover:text-white'
            }`}
          >
            Services
          </Link>

          {/* Mobile accordion for service categories */}
          {serviceMenu.map((item, i) => (
            <div key={item.to}>
              {/* First-level item with expand toggle */}
              <div className="flex items-center border-l border-white/10">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`flex-1 block py-3 pl-4 text-sm transition-colors font-body ${
                    isL1Active(item) ? 'text-jade' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && item.children.length > 0 && (
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === i ? null : i)}
                    className="p-3 text-white/60 hover:text-white transition-colors"
                    aria-label={`Expand ${item.label}`}
                  >
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${mobileExpanded === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                )}
              </div>

              {/* Second-level sub-items */}
              {item.children && item.children.length > 0 && (
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: mobileExpanded === i ? `${item.children.length * 52}px` : '0px',
                    opacity: mobileExpanded === i ? 1 : 0,
                  }}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      onClick={() => setOpen(false)}
                      className={`block py-3 pl-8 text-xs transition-colors font-body border-l border-white/10 ${
                        location.pathname === child.to
                          ? 'text-jade'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            to="/plans"
            onClick={() => setOpen(false)}
            className={`block py-3 transition-colors font-body ${
              location.pathname === '/plans' ? 'text-jade' : 'text-white/70 hover:text-white'
            }`}
          >
            Plans
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className={`block py-3 transition-colors font-body ${
              location.pathname === '/about' ? 'text-jade' : 'text-white/70 hover:text-white'
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block mt-4 px-5 py-3 bg-jade text-white font-heading font-semibold text-sm rounded-lg text-center hover:bg-jade-400 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}
