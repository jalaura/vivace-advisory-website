import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="Vivace Advisory Home">
            <div className="text-2xl font-bold text-blue-900">
              Vivacè
              <span className="text-yellow-500 text-sm ml-1">advisory</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            <Link to="/" className="text-gray-700 hover:text-blue-900 transition-colors" role="menuitem">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group" role="menuitem">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-900 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                aria-label="Services menu"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border transition-all duration-200 ${
                  servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                role="menu"
                aria-label="Services submenu"
              >
                <div className="py-2">
                  <Link 
                    to="/services/smsf-establishment" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                    role="menuitem"
                  >
                    SMSF Establishment & Administration
                  </Link>
                  <Link 
                    to="/services/property-investment" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                    role="menuitem"
                  >
                    SMSF Property Investment
                  </Link>
                  <Link 
                    to="/services/retirement-planning" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                    role="menuitem"
                  >
                    Retirement Income Planning
                  </Link>
                  <Link 
                    to="/services" 
                    className="block px-4 py-2 text-sm text-blue-900 font-medium hover:bg-blue-50"
                    role="menuitem"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/about" className="text-gray-700 hover:text-blue-900 transition-colors" role="menuitem">
              About
            </Link>
            
            <Link to="/contact" className="text-gray-700 hover:text-blue-900 transition-colors" role="menuitem">
              Contact
            </Link>

            <Button className="bg-blue-900 hover:bg-blue-800 text-white" aria-label="Book Consultation">
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-900"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden" role="menu" aria-label="Mobile navigation menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-900"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-900"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-900"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-900"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white" aria-label="Book Consultation">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

