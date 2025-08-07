import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  PiggyBank, 
  CheckCircle, 
  TrendingUp,
  Shield,
  Calculator,
  Users,
  ArrowRight,
  Clock,
  DollarSign,
  FileText,
  Heart
} from 'lucide-react'

const RetirementPlanningPage = () => {
  const pensionTypes = [
    {
      icon: <PiggyBank className="h-8 w-8 text-blue-600" />,
      title: "Account-Based Pensions",
      description: "Flexible retirement income streams with tax-free earnings in pension phase and minimum payment requirements.",
      benefits: [
        "Tax-free investment earnings",
        "Flexible payment amounts above minimums",
        "Capital preservation potential",
        "Death benefit flexibility"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Transition to Retirement (TTR)",
      description: "Strategic income streams for those still working, enabling salary sacrifice optimisation and early access to super.",
      benefits: [
        "Access super while still working",
        "Salary sacrifice tax benefits",
        "Gradual transition to retirement",
        "Preservation of working income"
      ]
    }
  ]

  const centrelinkBenefits = [
    {
      title: "Asset Test Optimisation",
      description: "Strategic structuring of assets to maximise Age Pension entitlements while maintaining investment returns."
    },
    {
      title: "Income Test Management", 
      description: "Careful management of assessable income to optimise the interaction between pension payments and Centrelink benefits."
    },
    {
      title: "Timing Strategies",
      description: "Strategic timing of pension commencements and asset restructuring to maximise lifetime Centrelink benefits."
    },
    {
      title: "Ongoing Monitoring",
      description: "Regular reviews to ensure continued compliance and optimisation as circumstances and regulations change."
    }
  ]

  const planningProcess = [
    {
      step: "1",
      title: "Retirement Goals Assessment",
      description: "Comprehensive evaluation of your retirement lifestyle goals, income requirements, and risk tolerance."
    },
    {
      step: "2",
      title: "Current Position Analysis", 
      description: "Detailed analysis of your current superannuation, investments, and other assets to determine retirement readiness."
    },
    {
      step: "3",
      title: "Strategy Development",
      description: "Creation of integrated strategies combining SMSF pensions, Centrelink optimisation, and tax efficiency."
    },
    {
      step: "4",
      title: "Implementation",
      description: "Execution of pension establishment, investment restructuring, and Centrelink applications as required."
    },
    {
      step: "5",
      title: "Ongoing Management",
      description: "Regular monitoring, adjustments, and optimisation to ensure your retirement plan remains on track."
    }
  ]

  const taxBenefits = [
    "Tax-free investment earnings in pension phase",
    "No capital gains tax on pension assets",
    "Tax-free pension payments for over 60s",
    "Concessional tax treatment for under 60s",
    "Death benefit tax optimisation",
    "Strategic timing of pension commencements"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-500 text-black mb-6 text-sm font-medium">
                <PiggyBank className="h-4 w-4 mr-2" />
                Retirement Income Planning
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Retirement Income Planning & Pensions
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Optimised pension strategies with Centrelink integration, tax-effective income streams, 
                and comprehensive estate planning coordination for your ideal retirement lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
                  Plan Your Retirement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
                  Download Retirement Guide
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Retirement Planning Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Tax-free investment earnings in pension phase</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Centrelink Age Pension optimisation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Flexible income stream management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Estate planning integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pension Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              SMSF Pension Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from flexible pension options designed to provide optimal retirement income 
              while maximising tax benefits and maintaining investment control.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pensionTypes.map((type, index) => (
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
                    <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                    {type.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Centrelink Integration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Centrelink & Age Pension Optimisation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Many high-net-worth individuals are surprised to discover their potential Centrelink eligibility. 
              Our expertise in this area represents a significant value-add that competitors often overlook.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {centrelinkBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Centrelink Expertise Advantage</h3>
                <p className="text-gray-700 mb-4">
                  Our deep understanding of the complex interaction between SMSF pensions and Centrelink 
                  entitlements enables us to structure strategies that maximise your total retirement income.
                </p>
                <p className="text-gray-700">
                  This specialised knowledge often results in thousands of dollars in additional annual 
                  income that would otherwise be missed through traditional retirement planning approaches.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-4">Potential Annual Benefits</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Single Age Pension (max)</span>
                    <span className="font-semibold text-gray-900">$29,023</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Couple Age Pension (max)</span>
                    <span className="font-semibold text-gray-900">$43,715</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Plus additional benefits</span>
                      <span className="text-sm text-gray-600">Healthcare, concessions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Retirement Planning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach that integrates all aspects of your retirement strategy 
              for optimal outcomes and peace of mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {planningProcess.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg relative">
                <CardContent className="p-6 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
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
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Maximise Your Tax Benefits
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                SMSF pensions provide significant tax advantages that can substantially increase 
                your retirement income compared to traditional accumulation phase investments.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calculator className="h-6 w-6 text-purple-600" />
                  <span className="font-semibold text-gray-900">Tax-Free Earnings</span>
                </div>
                <p className="text-gray-600 ml-9">
                  Investment earnings within pension accounts are completely tax-free, 
                  significantly boosting your long-term returns.
                </p>
                
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  <span className="font-semibold text-gray-900">No Capital Gains Tax</span>
                </div>
                <p className="text-gray-600 ml-9">
                  Capital gains on assets held in pension phase are completely exempt from tax, 
                  providing significant advantages for growth-oriented investments.
                </p>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tax Benefits Include:</h3>
              <div className="space-y-3">
                {taxBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-white rounded-lg border border-purple-200">
                <h4 className="font-semibold text-gray-900 mb-2">Example Tax Savings</h4>
                <p className="text-gray-600 text-sm">
                  A $1 million pension account earning 6% annually saves approximately $18,000 
                  in tax each year compared to accumulation phase, totaling $360,000 over 20 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estate Planning Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Estate Planning Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your retirement planning doesn't end with your lifetime. We integrate estate planning 
              considerations to ensure optimal outcomes for your beneficiaries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Death Benefit Nominations</h3>
                <p className="text-gray-600">
                  Strategic binding and non-binding nominations to ensure your superannuation 
                  benefits are distributed according to your wishes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tax Optimisation</h3>
                <p className="text-gray-600">
                  Minimise tax implications for beneficiaries through strategic structuring 
                  of death benefits and pension reversions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Family Protection</h3>
                <p className="text-gray-600">
                  Ensure your retirement savings provide ongoing security for your family 
                  through appropriate beneficiary planning and trust integration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Optimise Your Retirement Income?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Discover how our integrated approach to retirement planning can maximise your income 
            through strategic pension management, Centrelink optimisation, and tax-effective structuring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
              Book Retirement Planning Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
              Download Retirement Planning Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RetirementPlanningPage

