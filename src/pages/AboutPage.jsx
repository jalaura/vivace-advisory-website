import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Award, 
  GraduationCap, 
  Users, 
  Heart,
  Building,
  TrendingUp,
  Shield,
  CheckCircle
} from 'lucide-react'

const AboutPage = () => {
  const qualifications = [
    "Executive MBA, University of the Sunshine Coast",
    "Bachelor of Business (Accounting & Finance)",
    "Registered SMSF Auditor (non-active retired)",
    "Tax Agent Licence: 26 008 299",
    "Financial Adviser - Unrestricted",
    "FAAA Membership #352263",
    "SMSF Association Member #60243"
  ]

  const values = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Relationships First",
      description: "We build solid, long-lasting genuine relationships based on mutual respect and trust. We hope to see these through from accumulation to pension phase and estate planning."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Specialisation Over Scale",
      description: "We don't try to be everything to everyone. We are unapologetically specialists, not generalists, allowing us to deliver exceptional outcomes in SMSF strategies."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Work-Life Balance",
      description: "Culture matters deeply. We value work-life balance and mental health as core principles, with flexible hours so we don't miss our loved ones' special moments."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-yellow-500 text-black mb-6 text-sm font-medium">
              <Award className="h-4 w-4 mr-2" />
              SMSF Firm of the Year Nominee 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Stacy Giovinazzo
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Principal & Founder of Vivacè Advisory - Where two decades of SMSF expertise 
              meets genuine care for client outcomes
            </p>
          </div>
        </div>
      </section>

      {/* Stacy's Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A Journey of Foresight and Specialisation
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Having started in SMSF accounting nearly two decades ago, back when journals were handwritten 
                  and adding machines were standard, I recognised early that regulatory reform would reshape 
                  the industry - and frankly, they needed to.
                </p>
                <p>
                  After managing a large SMSF team in my 20s, I began to see the limitations of remaining 
                  solely in accounting and knew I would eventually hit a ceiling. Anticipating these shifts, 
                  around 12 years ago I stepped out of a purely accounting role and leveraged my qualifications 
                  to pursue a multi-disciplinary path.
                </p>
                <p>
                  I became a registered financial adviser while maintaining a strong focus on SMSF accounting 
                  and technical advice. As legislative changes took hold, many accountants became paralysed, 
                  unable to act without risking compliance breaches, often to the detriment of client outcomes.
                </p>
                <p>
                  This foresight laid the foundation for Vivacè Advisory's dual-licensing model, which today 
                  combines unrestricted financial planning and tax agent services under one roof. What could 
                  have been a destabilising period became a catalyst for growth - hard work paying off.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Qualifications</h3>
              <div className="space-y-3">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{qual}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center space-x-2 text-yellow-800">
                  <Award className="h-5 w-5" />
                  <span className="font-semibold">Recent Recognition</span>
                </div>
                <p className="text-yellow-700 mt-2">
                  Nominated for SMSF Adviser of the Year and SMSF Firm of the Year 2025 - 
                  recognition of our commitment to excellence and client outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Vivacè Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vivacè (Viv-ah-chi) is an Italian word meaning 'lively' or 'vivid' - it indicates that 
              a music piece's tempo should be played quickly and energetically. Our brand highlights 
              that legislation is always changing and we need to be dynamic to stay on top.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Sets Vivacè Apart
            </h2>
            <p className="text-xl text-gray-600">
              We don't compare ourselves to others - we focus on being the best version of ourselves
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Unique Approach</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-2 flex-shrink-0">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Boutique Excellence</h4>
                    <p className="text-gray-600">
                      We are a team of three, yet we have over 40 years of combined experience. 
                      Vivacè operates with a flat organisational structure where everyone collaborates 
                      and treats each other equally.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg p-2 flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">100% Referral Growth</h4>
                    <p className="text-gray-600">
                      We've never initiated any formal marketing; our growth has been completely organic, 
                      built on trust, relationships, and consistently strong outcomes. This ensures we 
                      attract high-quality clients aligned with our values.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-lg p-2 flex-shrink-0">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technology & Security</h4>
                    <p className="text-gray-600">
                      We use Hub24's Class Super, Now Infinity & Hub24 to create a fully integrated 
                      ecosystem. Cyber security is paramount with multi-factor authentication and 
                      100% onshore operations significantly lowering our cyber-security risk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Community Involvement</h3>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Urban Angels Community Kitchen</h4>
                <p className="text-gray-700 mb-4">
                  We are proud to be part of Urban Angels Community Kitchen, part of IFYS - 
                  a platform for bringing the community together, creating and distributing 
                  nutritious frozen meals for people who need support.
                </p>
                <p className="text-gray-700">
                  The kitchen helps beyond food and provides programs for young parents, 
                  real-life work experience, mentoring and training for people of all abilities. 
                  From producing a few hundred meals a few years ago to tens of thousands today.
                </p>
              </div>
              
              <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
                "You spend almost half your waking life at work, and we value work-life balance 
                and mental health as part of our core principles."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience the Personal Touch of Boutique Excellence
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to work with a team that treats you like family while delivering institutional-quality expertise? 
            Let's discuss how our integrated approach can optimise your SMSF outcomes.
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
            Book Your Personal Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

