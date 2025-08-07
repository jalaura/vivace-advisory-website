import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Building, 
  CheckCircle, 
  AlertTriangle,
  FileText,
  Shield,
  Calculator,
  Users,
  ArrowRight,
  Clock,
  DollarSign
} from 'lucide-react'

const SMSFEstablishmentPage = () => {
  const establishmentSteps = [
    {
      step: "1",
      title: "Strategic Assessment",
      description: "Comprehensive evaluation of your circumstances, goals, and SMSF suitability including asset protection and investment flexibility analysis."
    },
    {
      step: "2", 
      title: "Structure Design",
      description: "Customised SMSF structure design including trustee arrangements, investment strategy development, and integration with existing structures."
    },
    {
      step: "3",
      title: "Legal Documentation",
      description: "Professional deed preparation, ASIC registrations, ABN applications, and all required legal documentation for compliant establishment."
    },
    {
      step: "4",
      title: "System Setup",
      description: "Technology platform integration, banking arrangements, investment account setup, and ongoing administration system implementation."
    },
    {
      step: "5",
      title: "Compliance Framework",
      description: "Initial compliance setup, regulatory monitoring systems, and proactive management framework to ensure ongoing compliance."
    },
    {
      step: "6",
      title: "Ongoing Support",
      description: "Continuous strategic advice, annual compliance, tax returns, and adaptation to regulatory changes throughout the fund's lifecycle."
    }
  ]

  const suitabilityFactors = [
    {
      icon: <DollarSign className="h-6 w-6 text-green-500" />,
      title: "Balance Considerations",
      description: "While $200,000 is often cited as a minimum, we evaluate total circumstances including growth potential, contribution capacity, and strategic objectives."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Asset Protection Benefits",
      description: "SMSFs provide enhanced asset protection compared to industry funds, particularly important for business owners and high-net-worth individuals."
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: "Control & Flexibility",
      description: "Direct investment control, timing flexibility, and ability to implement sophisticated strategies not available through retail funds."
    },
    {
      icon: <FileText className="h-6 w-6 text-orange-500" />,
      title: "Estate Planning Integration",
      description: "Superior estate planning opportunities through death benefit nominations, trust integration, and multi-generational wealth transfer strategies."
    }
  ]

  const ongoingServices = [
    "Annual financial statements and tax returns",
    "Quarterly compliance monitoring and reporting", 
    "Investment strategy reviews and updates",
    "Regulatory change notifications and implementation",
    "Corporate secretarial duties and record keeping",
    "Audit coordination and management",
    "Strategic advice and optimisation opportunities",
    "Death benefit and estate planning reviews"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-500 text-black mb-6 text-sm font-medium">
                <Building className="h-4 w-4 mr-2" />
                SMSF Establishment & Administration
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SMSF Establishment & Administration
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Complete setup and ongoing management with integrated compliance monitoring, 
                strategic advice, and seamless coordination across all aspects of your SMSF journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
                  Assess SMSF Suitability
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Download Setup Guide
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Why Choose Our SMSF Service?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Dual-licensed integration (Financial Planning + Tax Agent)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Fixed-fee annual compliance with no surprises</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>100% Australian-based team and data security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Proactive regulatory monitoring and updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMSF Suitability Assessment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Is an SMSF Right for You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SMSF suitability extends far beyond simple balance thresholds. We evaluate your complete 
              circumstances to determine if an SMSF aligns with your strategic objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {suitabilityFactors.map((factor, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 rounded-lg p-3 flex-shrink-0">
                      {factor.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {factor.title}
                      </h3>
                      <p className="text-gray-600">
                        {factor.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Important Considerations</h3>
                <p className="text-yellow-700">
                  SMSF establishment is a significant decision that requires ongoing commitment to compliance 
                  and administration. Our comprehensive assessment ensures you understand both the opportunities 
                  and responsibilities before proceeding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Establishment Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Establishment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated approach streamlines what is typically a fragmented process involving multiple providers. 
              One team, one relationship, seamless outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {establishmentSteps.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg relative">
                <CardContent className="p-8">
                  <div className="absolute -top-4 -left-4 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Administration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Ongoing Administration
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                SMSF establishment is just the beginning. Our ongoing administration service ensures 
                your fund remains compliant while optimising opportunities as regulations and 
                circumstances change.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span className="font-semibold text-gray-900">Fixed-Fee Structure</span>
                </div>
                <p className="text-gray-600 ml-9">
                  Transparent, predictable pricing with no hidden costs or surprise fees. 
                  You know exactly what your SMSF administration will cost each year.
                </p>
                
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-green-600" />
                  <span className="font-semibold text-gray-900">Proactive Compliance</span>
                </div>
                <p className="text-gray-600 ml-9">
                  Continuous monitoring and proactive management prevents issues before they 
                  become problems, ensuring your fund maintains good standing with regulators.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ongoing Services Include:</h3>
              <div className="space-y-3">
                {ongoingServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-white rounded-lg border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Technology Integration</h4>
                <p className="text-gray-600 text-sm">
                  We use Hub24's Class Super, Now Infinity & Hub24 to create a fully integrated 
                  ecosystem across administration, compliance, and reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Advantage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Vivacè Integration Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dual-licensing model eliminates the coordination challenges that plague traditional 
              SMSF service delivery, providing seamless integration across all aspects of your fund.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">No Fragmentation</h3>
              <p className="text-gray-600">
                Unlike traditional models requiring separate accounting, advisory, and administrative 
                providers, we deliver all services under one roof with perfect coordination.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Calculator className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Optimisation</h3>
              <p className="text-gray-600">
                Continuous strategic review ensures your SMSF structure and strategies remain 
                optimal as regulations change and your circumstances evolve.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Relationships</h3>
              <p className="text-gray-600">
                Direct access to our experienced team with personal relationships that span 
                decades, not call centres or offshore support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Establish Your SMSF with Confidence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our comprehensive assessment will determine if an SMSF aligns with your strategic objectives 
            while our integrated approach ensures seamless establishment and ongoing management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
              Book SMSF Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Download Establishment Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SMSFEstablishmentPage

