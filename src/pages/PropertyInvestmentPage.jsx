import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Building2, 
  CheckCircle, 
  AlertTriangle,
  Home,
  TrendingUp,
  Shield,
  FileText,
  Users,
  ArrowRight,
  MapPin,
  DollarSign
} from 'lucide-react'

const PropertyInvestmentPage = () => {
  const propertyTypes = [
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: "Residential Property",
      description: "Houses, apartments, and townhouses for rental income and capital growth within your SMSF structure.",
      features: [
        "Rental income tax benefits in pension phase",
        "Capital gains tax exemptions when in pension",
        "Borrowing capacity through LRBAs",
        "Diversification from traditional investments"
      ]
    },
    {
      icon: <Building2 className="h-8 w-8 text-green-600" />,
      title: "Commercial Property",
      description: "Office buildings, warehouses, and retail spaces, including the unique opportunity to lease back to your business.",
      features: [
        "Higher rental yields than residential",
        "Lease-back arrangements with your business",
        "Professional tenant relationships",
        "Potential for significant capital appreciation"
      ]
    }
  ]

  const lrbaProcess = [
    {
      step: "1",
      title: "Structure Assessment",
      description: "Evaluate your SMSF's capacity for borrowing and determine optimal LRBA structure for your circumstances."
    },
    {
      step: "2",
      title: "Bare Trust Setup",
      description: "Establish compliant bare trust arrangements with proper documentation and ATO safe harbour compliance."
    },
    {
      step: "3",
      title: "Property Acquisition",
      description: "Coordinate with brokers, solicitors, and lenders to execute the property purchase through the LRBA structure."
    },
    {
      step: "4",
      title: "Ongoing Management",
      description: "Monitor compliance, manage loan obligations, and optimise the investment strategy throughout the holding period."
    }
  ]

  const goldCoastAdvantages = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-500" />,
      title: "Local Market Expertise",
      description: "Deep understanding of Gold Coast property markets, growth corridors, and investment opportunities."
    },
    {
      icon: <Users className="h-6 w-6 text-green-500" />,
      title: "Professional Network",
      description: "Established relationships with local solicitors, brokers, valuers, and property managers for seamless transactions."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-500" />,
      title: "Market Insights",
      description: "Regular market analysis and insights specific to Gold Coast property trends and SMSF investment opportunities."
    }
  ]

  const complianceRequirements = [
    "Property must be acquired at market value",
    "Cannot be purchased from related parties",
    "Must be held for genuine retirement purposes",
    "Rental arrangements must be at market rates",
    "Regular valuations required for compliance",
    "Proper documentation and record keeping essential"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-500 text-black mb-6 text-sm font-medium">
                <Building2 className="h-4 w-4 mr-2" />
                SMSF Property Investment
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SMSF Property Investment Strategies
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Expert guidance on property acquisition through SMSFs, including LRBA structuring, 
                compliance coordination, and comprehensive project management from evaluation to settlement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
                  Explore Property Options
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-900">
                  Download Property Guide
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Gold Coast Property Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Strong rental demand and growth potential</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Diverse property types and price points</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Tourism and population growth drivers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Infrastructure development and connectivity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              SMSF Property Investment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SMSFs can invest in both residential and commercial property, each offering unique 
              advantages and strategic opportunities for your retirement planning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {propertyTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gray-100 rounded-lg p-3">
                      {type.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {type.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {type.description}
                  </p>
                  <div className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <Building2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Commercial Property Lease-Back Opportunity</h3>
                <p className="text-blue-700">
                  Business owners can purchase commercial property through their SMSF and lease it back to their 
                  operating business, creating a tax-effective wealth transfer strategy while securing business premises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LRBA Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Limited Recourse Borrowing Arrangements (LRBAs)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              LRBAs enable your SMSF to borrow money to purchase property, significantly increasing your 
              investment capacity while maintaining compliance with superannuation regulations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lrbaProcess.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg relative">
                <CardContent className="p-6">
                  <div className="absolute -top-4 -left-4 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">LRBA Compliance Requirements</h3>
                <p className="text-yellow-700">
                  LRBAs must comply with strict regulatory requirements including single acquirable asset rules, 
                  limited recourse provisions, and arm's length terms. Our expertise ensures full compliance 
                  while optimising your investment structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Coast Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Gold Coast Property Market Expertise
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our deep understanding of the Gold Coast property market, combined with our extensive 
                professional network, ensures you receive expert guidance tailored to local opportunities 
                and market conditions.
              </p>
              
              <div className="space-y-6">
                {goldCoastAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gray-100 rounded-lg p-2 flex-shrink-0">
                      {advantage.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                      <p className="text-gray-600">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Property Investment Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Strategic Assessment</h4>
                    <p className="text-gray-600 text-sm">Evaluate your SMSF's investment capacity and property investment suitability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Market Analysis</h4>
                    <p className="text-gray-600 text-sm">Identify suitable properties and growth areas aligned with your investment strategy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Structure Implementation</h4>
                    <p className="text-gray-600 text-sm">Establish compliant LRBA structures and coordinate all legal requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Acquisition Management</h4>
                    <p className="text-gray-600 text-sm">Project manage the entire acquisition process from offer to settlement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">5</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                    <p className="text-gray-600 text-sm">Continuous compliance monitoring and strategic optimisation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Regulations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compliance & Regulatory Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SMSF property investment is subject to strict regulatory requirements. Our expertise ensures 
              full compliance while optimising your investment outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Compliance Requirements</h3>
                <div className="space-y-3">
                  {complianceRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Compliance Advantage</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Proactive Monitoring</h4>
                      <p className="text-gray-600 text-sm">Continuous compliance monitoring prevents issues before they arise</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Documentation</h4>
                      <p className="text-gray-600 text-sm">Comprehensive record keeping and documentation for audit readiness</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Regulatory Updates</h4>
                      <p className="text-gray-600 text-sm">Immediate notification and implementation of regulatory changes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Network</h4>
                      <p className="text-gray-600 text-sm">Coordination with specialist SMSF lawyers and auditors</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Explore SMSF Property Investment?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Discover how property investment through your SMSF can enhance your retirement outcomes 
            while benefiting from our Gold Coast market expertise and comprehensive compliance management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
              Book Property Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-900">
              Download Property Investment Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PropertyInvestmentPage

