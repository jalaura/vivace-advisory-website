import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import SMSFEstablishmentPage from './pages/SMSFEstablishmentPage'
import PropertyInvestmentPage from './pages/PropertyInvestmentPage'
import RetirementPlanningPage from './pages/RetirementPlanningPage'
import ContactPage from './pages/ContactPage'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/smsf-establishment" element={<SMSFEstablishmentPage />} />
          <Route path="/services/property-investment" element={<PropertyInvestmentPage />} />
          <Route path="/services/retirement-planning" element={<RetirementPlanningPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

