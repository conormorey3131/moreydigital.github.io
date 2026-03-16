import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, FileText } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function TermsOfServicePage() {
  const heroRef = useReveal()
  const contentRef = useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Terms of Service | Morey Digital'
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
              <FileText size={14} className="text-jade" />
              <span className="text-jade text-xs font-body font-medium">Legal</span>
            </span>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-[1.1] mb-6">
              Terms of Service
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
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Morey Digital website (moreydigital.ie) and the services we provide. By accessing our website or engaging our services, you agree to be bound by these Terms. Morey Digital is operated by Conor Morey, based in Clare, Ireland.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">2. Services</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed">
                Morey Digital provides web design and development, website management, search engine optimisation (SEO), eCommerce development, branding, and ongoing digital growth support for businesses. The specific scope of any project or engagement will be outlined in a separate proposal or agreement provided to you before work begins.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">3. Quotes and Proposals</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed">
                All quotes and proposals provided by Morey Digital are valid for 30 days from the date of issue unless otherwise stated. Quotes are based on the information provided at the time and may be revised if the scope of work changes. A project is only confirmed once both parties have agreed to the scope, timeline, and pricing in writing.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">4. Payment Terms</h2>
              <ul className="space-y-2 text-[#1A1A1A] font-body text-sm leading-relaxed list-disc list-inside">
                <li>For project-based work, a deposit of 50% is required before work begins, with the remaining balance due upon completion and before the final handover or launch.</li>
                <li>For monthly management and retainer plans, payment is due at the beginning of each billing cycle.</li>
                <li>All prices are quoted in Euro (&euro;) and are exclusive of VAT unless otherwise stated.</li>
                <li>Late payments may incur additional charges. We reserve the right to pause or suspend services in the event of non-payment.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">5. Client Responsibilities</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed mb-3">
                To ensure smooth delivery of our services, you agree to:
              </p>
              <ul className="space-y-2 text-[#1A1A1A] font-body text-sm leading-relaxed list-disc list-inside">
                <li>Provide all necessary content, images, branding materials, and access credentials in a timely manner.</li>
                <li>Provide feedback and approvals within reasonable timeframes to avoid project delays.</li>
                <li>Ensure that any content you provide does not infringe on the intellectual property rights of any third party.</li>
                <li>Maintain the confidentiality of any login credentials shared during the project.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">6. Intellectual Property</h2>
              <ul className="space-y-2 text-[#1A1A1A] font-body text-sm leading-relaxed list-disc list-inside">
                <li>Upon full payment, ownership of the final deliverables (website design, branding assets, etc.) transfers to the client.</li>
                <li>Morey Digital retains the right to display completed work in our portfolio and marketing materials unless otherwise agreed.</li>
                <li>Any third-party assets (stock images, fonts, plugins, themes) are subject to their own licensing terms and remain the property of their respective owners.</li>
                <li>Source code for custom-built websites is transferred to the client upon full payment. Third-party themes, plugins, or templates remain subject to their own licences.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">7. Revisions and Scope Changes</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed">
                Each project includes a defined number of revision rounds as outlined in the project proposal. Additional revisions or changes to the original scope may incur extra charges, which will be communicated and agreed upon before proceeding.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">8. Website Management Plans</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed">
                Monthly management plans are billed on a recurring basis. Either party may cancel a plan with 30 days&rsquo; written notice. Upon cancellation, any work completed up to that point remains the client&rsquo;s property. We are not liable for issues arising from the client making changes to their website outside of our management scope.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">9. Limitation of Liability</h2>
              <ul className="space-y-2 text-[#1A1A1A] font-body text-sm leading-relaxed list-disc list-inside">
                <li>Morey Digital will make every reasonable effort to deliver high-quality work. However, we do not guarantee specific results from SEO, advertising, or marketing services, as outcomes depend on many external factors.</li>
                <li>We are not liable for any indirect, incidental, or consequential damages arising from the use of our services or your website.</li>
                <li>Our total liability for any claim related to our services shall not exceed the total amount paid by you for the specific service in question.</li>
                <li>We are not responsible for website downtime, data loss, or security breaches caused by third-party hosting providers, plugins, or platforms outside of our control.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">10. Cancellation and Refunds</h2>
              <ul className="space-y-2 text-[#1A1A1A] font-body text-sm leading-relaxed list-disc list-inside">
                <li>If you wish to cancel a project after work has begun, the deposit is non-refundable as it covers the initial planning, design, and development work already completed.</li>
                <li>If Morey Digital is unable to deliver the agreed services, we will issue a proportionate refund for any work not yet completed.</li>
                <li>Monthly management plans can be cancelled with 30 days&rsquo; notice. No refunds are issued for the current billing period.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">11. Confidentiality</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed">
                Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the project. This includes business strategies, login credentials, customer data, and financial information. This obligation survives the termination of any agreement.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">12. Third-Party Services</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed">
                Our services may involve the use of third-party platforms, tools, and services (e.g. WordPress, Shopify, Google Analytics, Stripe). Morey Digital is not responsible for the terms, policies, availability, or performance of these third-party services. Use of such services is subject to their own terms and conditions.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">13. Website Use</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed mb-3">
                When using this website, you agree not to:
              </p>
              <ul className="space-y-2 text-[#1A1A1A] font-body text-sm leading-relaxed list-disc list-inside">
                <li>Use the site for any unlawful purpose or in a way that could damage, disable, or impair the site.</li>
                <li>Attempt to gain unauthorised access to any part of the website or its systems.</li>
                <li>Reproduce, distribute, or modify any content from this website without prior written consent.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">14. Governing Law</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of Ireland. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Ireland.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">15. Changes to These Terms</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed">
                We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Continued use of our website or services after changes are posted constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-[#1A3C6E] mb-3">16. Contact Us</h2>
              <p className="text-[#1A1A1A] font-body text-sm leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
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
