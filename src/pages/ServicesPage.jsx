import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Building, 
  TrendingUp, 
  PiggyBank, 
  FileText, 
  Shield, 
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const ServicesPage = () => {
  const coreServices = [
    {
      icon: <Building className="h-12 w-12 text-blue-600" />,
      title: "SMSF Establishment & Administration",
      description: "Complete setup and ongoing management with integrated compliance monitoring, annual financial statements, tax returns, and strategic advice.",
      features: [
        "Deed preparation and ASIC registrations",
        "Fixed-fee annual compliance",
        "Proactive regulatory monitoring",
        "Corporate secretarial duties"
      ],
      link: "/services/smsf-establishment"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: "SMSF Property Investment Strategies",
      description: "Expert guidance on property acquisition through SMSFs, including LRBA structuring, compliance coordination, and project management.",
      features: [
        "Residential & commercial property advice",
        "Limited Recourse Borrowing Arrangements",
        "ATO safe harbour compliance",
        "Professional network coordination"
      ],
      link: "/services/property-investment"
    },
    {
      icon: <PiggyBank className="h-12 w-12 text-blue-600" />,
      title: "Retirement Income Planning & Pensions",
      description: "Optimised pension strategies with Centrelink integration, tax-effective income streams, and estate planning coordination.",
      features: [
        "Account-based pension setup",
        "Transition-to-Retirement strategies",
        "Centrelink eligibility optimisation",
        "Death benefit nominations"
      ],
      link: "/services/retirement-planning"
    },
    {
      icon: <FileText className="h-12 w-12 text-blue-600" />,
      title: "Estate Planning & Wealth Transfer",
      description: "Integrated tax strategy with estate planning to create intergenerational solutions and optimise wealth transfer outcomes.",
      features: [
        "Death benefit nomination strategies",
        "Trust structure integration",
        "Multi-generational planning",
        "Tax-effective wealth transfer"
      ],
      link: "/services"
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Investment Management & Portfolio Construction",
      description: "Bespoke portfolio construction using superannuation platforms and IDPS accounts, designed for each client's risk profile and objectives.",
      features: [
        "Tailored investment portfolios",
        "Independent research backing",
        "Sophisticated investor products",
        "Ongoing portfolio monitoring"
      ],
      link: "/services"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Life Risk Advice & Claims Processing",
      description: "Strategic insurance advice with full process management from policy selection to claims processing, structured for tax efficiency.",
      features: [
        "Insurance needs analysis",
        "Tax-efficient structuring",
        "Policy implementation",
        "Claims advocacy and processing"
      ],
      link: "/services"
    }
  ]

  const additionalServices = [
    "Bare Trust Advice & LRBA Structuring",
    "Centrelink & Age Pension Optimisation",
    "Business Succession & SMSF Integration",
    "SMSF Audit Coordination",
    "Tax Strategy & Contribution Planning",
    "Entity Structuring Advice"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Integrated SMSF Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Our dual-licensing model eliminates the fragmentation that characterises most SMSF service delivery. 
              Receive seamless, coordinated strategies that optimise tax, investment, and estate planning objectives simultaneously.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
              Discover Your SMSF Potential
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive SMSF solutions delivered through our integrated approach, 
              combining technical expertise with strategic advice under one roof.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors mt-auto"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Advantage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Integration Advantage
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                While competitors often treat SMSF compliance, investment management, and estate planning 
                as separate service lines, our dual-licensing model enables us to deliver seamless, 
                coordinated strategies that optimise outcomes across all areas.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">No Fragmentation</h3>
                    <p className="text-gray-600">
                      One team, one relationship, coordinated outcomes across all SMSF aspects
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Strategic Coordination</h3>
                    <p className="text-gray-600">
                      Tax, investment, and estate planning strategies work together for optimal results
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Proactive Management</h3>
                    <p className="text-gray-600">
                      Continuous monitoring and adjustment as regulations and circumstances change
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Specialised Services</h3>
              <div className="grid grid-cols-1 gap-3">
                {additionalServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-white rounded-lg border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Professional Network Integration</h4>
                <p className="text-gray-600 text-sm">
                  We work seamlessly with your existing accountants, solicitors, and other advisers, 
                  enhancing rather than competing with established relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Service Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't believe in cookie-cutter solutions. Every strategy is tailored to your unique 
              circumstances, goals, and risk profile.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Relationship-Focused</h3>
              <p className="text-gray-600">
                We build long-term relationships from accumulation through pension phase and estate planning. 
                Our clients become part of our extended family.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Over Quantity</h3>
              <p className="text-gray-600">
                We prioritise service excellence over volume growth. Our 100% referral-based model 
                ensures we attract clients who value quality advice.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outcome-Driven</h3>
              <p className="text-gray-600">
                Every strategy is designed with your specific outcomes in mind. We measure success 
                by your results, not our revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Integrated SMSF Excellence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover how our comprehensive approach can eliminate the fragmentation in your SMSF management 
            while optimising outcomes across all areas of your retirement strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
              Book Your Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Download Service Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

