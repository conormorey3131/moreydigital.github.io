import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import WebsiteDesignPage from './pages/WebsiteDesignPage'
import WebsiteManagementPage from './pages/WebsiteManagementPage'
import WebDesignPage from './pages/WebDesignPage'
import CustomDesignPage from './pages/CustomDesignPage'
import IntegrationsPage from './pages/IntegrationsPage'
import EcommercePage from './pages/EcommercePage'
import WebsiteSecurityOverviewPage from './pages/WebsiteSecurityOverviewPage'
import WebsitePerformancePage from './pages/WebsitePerformancePage'
import WebsiteSecurityPage from './pages/WebsiteSecurityPage'
import UpdatesPatchingPage from './pages/UpdatesPatchingPage'
import BackupsPage from './pages/BackupsPage'
import SeoPage from './pages/SeoPage'
import PlansPage from './pages/PlansPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'

const base = import.meta.env.BASE_URL

export default function App() {
  return (
    <BrowserRouter basename={base}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/website-design-development" element={<WebsiteDesignPage />} />
          <Route path="/services/website-management" element={<WebsiteManagementPage />} />
          <Route path="/services/web-design" element={<WebDesignPage />} />
          <Route path="/services/custom-design" element={<CustomDesignPage />} />
          <Route path="/services/integrations" element={<IntegrationsPage />} />
          <Route path="/services/ecommerce" element={<EcommercePage />} />
          <Route path="/services/website-security-overview" element={<WebsiteSecurityOverviewPage />} />
          <Route path="/services/website-performance" element={<WebsitePerformancePage />} />
          <Route path="/services/website-security" element={<WebsiteSecurityPage />} />
          <Route path="/services/updates-patching" element={<UpdatesPatchingPage />} />
          <Route path="/services/backups" element={<BackupsPage />} />
          <Route path="/services/seo" element={<SeoPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
