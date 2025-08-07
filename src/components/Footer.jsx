import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Award } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              Vivacè
              <span className="text-yellow-400 text-sm ml-1">advisory</span>
            </div>
            <p className="text-blue-100 mb-4 max-w-md">
              Gold Coast's award-winning SMSF specialists. Where ordinary ends and expertise begins. 
              100% Australian-based. 100% referral-driven. 100% focused on your SMSF success.
            </p>
            <div className="flex items-center space-x-2 text-yellow-400 mb-2">
              <Award className="h-5 w-5" />
              <span className="text-sm">SMSF Firm of the Year Nominee 2025</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link to="/services/smsf-establishment" className="hover:text-white transition-colors">
                  SMSF Establishment
                </Link>
              </li>
              <li>
                <Link to="/services/property-investment" className="hover:text-white transition-colors">
                  Property Investment
                </Link>
              </li>
              <li>
                <Link to="/services/retirement-planning" className="hover:text-white transition-colors">
                  Retirement Planning
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>07 5221 5545</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>admin@vivaceadvisory.com.au</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Sunshine Coast, QLD</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-100 text-sm mb-4 md:mb-0">
              <p>ABN: 18 993 426 426 | Tax Agent Licence: 26 008 299</p>
              <p>Authorised Representatives of AVALONfs Pty Ltd AFSL 437518</p>
            </div>
            <div className="text-blue-100 text-sm">
              © 2025 Vivacè Advisory. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

