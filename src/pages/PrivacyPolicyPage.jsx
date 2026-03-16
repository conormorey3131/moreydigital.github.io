import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function PrivacyPolicyPage() {
  const heroRef = useReveal()
  const contentRef = useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Privacy Policy | Morey Digital'
  }, [])

  return (
    <div className="bg-white">
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-[#1A3C6E]">
        <div className="absolute inset-0 grid-dots" />
        <div className="absolute inset-0 glow-jade" style={{ '--glow-x': '40%', '--glow-y': '50%' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-jade/10 border border-jade/20 mb-6">
              <Shield size={14} className="text-jade" />
              <span className="text-jade text-xs font-body font-medium">Legal</span>
            </span>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-[1.1] mb-6">
              Privacy Policy
            </h1>

            <p className="text-white/80 font-body text-base max-w-2xl mx-auto">
              Last updated: 9 March 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section ref={contentRef} className="relative pb-24 lg:pb-32 overflow-hidden bg-white">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="reveal glass-card p-8 sm:p-10 lg:p-12 space-y-8">

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">1. Introduction</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed">
                Morey Digital (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website moreydigital.ie and use our services. We are based in Clare, Ireland and operate in accordance with the General Data Protection Regulation (GDPR) and Irish data protection law.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">2. Information We Collect</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed mb-3">
                We may collect the following types of information:
              </p>
              <ul className="space-y-2 text-[#1A1A1A] font-body text-sm leading-relaxed list-disc list-inside">
                <li><strong className="text-[#1A3C6E]">Personal information</strong> &mdash; name, email address, phone number, and business name when you contact us through our website, email, or phone.</li>
                <li><strong className="text-[#1A3C6E]">Usage data</strong> &mdash; information about how you use our website, including pages visited, time spent on the site, and referring URLs. This is collected through Google Analytics.</li>
                <li><strong className="text-[#1A3C6E]">Cookies and tracking technologies</strong> &mdash; we use cookies and similar technologies to improve your browsing experience and analyse website traffic.</li>
                <li><strong className="text-[#1A3C6E]">Communication data</strong> &mdash; any information you provide when you contact us via email, phone, or contact forms.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">3. How We Use Your Information</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-[#1A1A1A] font-body text-sm leading-relaxed list-disc list-inside">
                <li>Respond to your enquiries and provide quotes</li>
                <li>Deliver and manage our web design, SEO, and digital marketing services</li>
                <li>Communicate with you about your project or account</li>
                <li>Improve our website, services, and user experience</li>
                <li>Analyse website traffic and usage patterns</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed mb-3">
                Under GDPR, we process your personal data on the following legal bases:
              </p>
              <ul className="space-y-2 text-[#1A1A1A] font-body text-sm leading-relaxed list-disc list-inside">
                <li><strong className="text-[#1A3C6E]">Consent</strong> &mdash; when you voluntarily submit your information via a contact form or email.</li>
                <li><strong className="text-[#1A3C6E]">Contractual necessity</strong> &mdash; when processing is necessary to fulfil a contract or provide services you have requested.</li>
                <li><strong className="text-[#1A3C6E]">Legitimate interest</strong> &mdash; for website analytics and improving our services, where this does not override your rights.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">5. Cookies</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed mb-3">
                Our website uses cookies to enhance your experience. Cookies are small text files stored on your device. We use:
              </p>
              <ul className="space-y-2 text-[#1A1A1A] font-body text-sm leading-relaxed list-disc list-inside">
                <li><strong className="text-[#1A3C6E]">Essential cookies</strong> &mdash; required for the website to function properly.</li>
                <li><strong className="text-[#1A3C6E]">Analytics cookies</strong> &mdash; Google Analytics cookies to understand how visitors interact with our website. These collect anonymised data.</li>
              </ul>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed mt-3">
                You can manage or disable cookies through your browser settings. Disabling certain cookies may affect website functionality.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">6. Data Sharing and Third Parties</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed mb-3">
                We do not sell, trade, or rent your personal information to third parties. We may share information with:
              </p>
              <ul className="space-y-2 text-[#1A1A1A] font-body text-sm leading-relaxed list-disc list-inside">
                <li><strong className="text-[#1A3C6E]">Google Analytics</strong> &mdash; for website traffic analysis (anonymised data).</li>
                <li><strong className="text-[#1A3C6E]">Hosting providers</strong> &mdash; our website is hosted on GitHub Pages.</li>
                <li><strong className="text-[#1A3C6E]">Service providers</strong> &mdash; trusted third-party tools used to deliver our services (e.g. email, project management).</li>
                <li><strong className="text-[#1A3C6E]">Legal requirements</strong> &mdash; if required by law, regulation, or legal process.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">7. Data Retention</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed">
                We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Contact form submissions and project-related communications are typically retained for the duration of our business relationship and for a reasonable period thereafter.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">8. Your Rights Under GDPR</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed mb-3">
                As a data subject under GDPR, you have the right to:
              </p>
              <ul className="space-y-2 text-[#1A1A1A] font-body text-sm leading-relaxed list-disc list-inside">
                <li><strong className="text-[#1A3C6E]">Access</strong> &mdash; request a copy of the personal data we hold about you.</li>
                <li><strong className="text-[#1A3C6E]">Rectification</strong> &mdash; request correction of inaccurate or incomplete data.</li>
                <li><strong className="text-[#1A3C6E]">Erasure</strong> &mdash; request deletion of your personal data (&ldquo;right to be forgotten&rdquo;).</li>
                <li><strong className="text-[#1A3C6E]">Restriction</strong> &mdash; request restriction of processing of your data.</li>
                <li><strong className="text-[#1A3C6E]">Portability</strong> &mdash; request transfer of your data in a structured, machine-readable format.</li>
                <li><strong className="text-[#1A3C6E]">Objection</strong> &mdash; object to processing based on legitimate interest.</li>
                <li><strong className="text-[#1A3C6E]">Withdraw consent</strong> &mdash; where processing is based on consent, you may withdraw it at any time.</li>
              </ul>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed mt-3">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:conor@moreydigital.ie" className="text-jade hover:underline">conor@moreydigital.ie</a>.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">9. Data Security</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed">
                We take reasonable technical and organisational measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">10. Children&rsquo;s Privacy</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed">
                Our website and services are not directed at individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such data, please contact us and we will promptly delete it.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">11. Changes to This Policy</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. Any changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. We encourage you to review this page periodically.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">12. Contact Us</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed">
                If you have any questions about this Privacy Policy or how we handle your data, please contact us:
              </p>
              <ul className="mt-3 space-y-1 text-[#1A1A1A] font-body text-sm">
                <li><strong className="text-[#1A3C6E]">Email:</strong>{' '}
                  <a href="mailto:conor@moreydigital.ie" className="text-jade hover:underline">conor@moreydigital.ie</a>
                </li>
                <li><strong className="text-[#1A3C6E]">Phone:</strong>{' '}
                  <a href="tel:+353873999296" className="text-jade hover:underline">+353 87 399 9296</a>
                </li>
                <li><strong className="text-[#1A3C6E]">Location:</strong> Clare, Ireland</li>
              </ul>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed mt-3">
                You also have the right to lodge a complaint with the Data Protection Commission (DPC) of Ireland at{' '}
                <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer" className="text-jade hover:underline">www.dataprotection.ie</a>.
              </p>
            </div>
          </div>

          {/* Back to home */}
          <div className="text-center mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-jade font-heading font-semibold text-sm hover:gap-3 transition-all group"
            >
              Back to Home
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
