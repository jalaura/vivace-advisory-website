import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Award, 
  Shield, 
  Users, 
  TrendingUp, 
  Building, 
  PiggyBank, 
  FileText, 
  Star,
  CheckCircle,
  ArrowRight,
  Download,
  MapPin,
  Briefcase,
  Home,
  Target,
  UserCheck
} from 'lucide-react'

const HomePage = () => {
  const testimonials = [
    {
      name: "K. Hatchett",
      text: "I wanted to reach out and say a MASSIVE thank you for all that you have done for us over these past few months. You have truly been remarkable in sorting out the mess that was our SMSF. We settled on the property last week - yayy!",
      type: "Verified Client"
    },
    {
      name: "A & S Bonacci",
      text: "Within 4 months of working with Stacy at Vivace Advisory, we can now see our financial future secured. Her exceptional knowledge and professionalism in SMSF and Investment guidance allowed us to quickly develop our future plans.",
      type: "Verified Client"
    },
    {
      name: "N. Davis",
      text: "We have been clients of Stacy's for over 12 years, and we are very happy with the results. Stacy is easy to contact, always very pleasant while treating each client with the greatest of respect. We trust Stacy implicitly.",
      type: "Verified Client"
    }
  ]

  const services = [
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "SMSF Establishment & Administration",
      description: "Complete setup including Trust Deed preparation, Investment Strategy Document, Corporate Trustee registration, and ongoing compliance with the Superannuation Industry (Supervision) Act 1993 (SIS Act). Integrated with BGL Simple Fund 360 for seamless administration.",
      link: "/services/smsf-establishment"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "SMSF Property Investment",
      description: "Expert guidance on property acquisition through Limited Recourse Borrowing Arrangements (LRBA), Bare Trust structures, and compliance with ATO rulings. Specialising in Sunshine Coast business parks and investment properties.",
      link: "/services/property-investment"
    },
    {
      icon: <PiggyBank className="h-8 w-8 text-blue-600" />,
      title: "Retirement Income Planning",
      description: "Optimised pension strategies with Binding Death Benefit Nominations (BDBN), Recontribution Strategies, and Centrelink integration for tax-effective income streams and estate planning.",
      link: "/services/retirement-planning"
    }
  ]

  const whoWeHelp = [
    {
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
      title: "Small Business Owners on the Sunshine Coast",
      description: "Wanting to use your super to buy commercial property or business premises in Caloundra lifestyle precincts or Sunshine Coast business parks."
    },
    {
      icon: <Home className="h-6 w-6 text-green-600" />,
      title: "Pre-retirees in Caloundra & Bribie Island",
      description: "Looking for more control and investment flexibility as you plan your sea change financial advice strategy."
    },
    {
      icon: <Target className="h-6 w-6 text-purple-600" />,
      title: "Experienced Investors",
      description: "Frustrated with the limits of your industry fund and seeking sophisticated investment strategies for retiring on the Sunshine Coast."
    }
  ]

  const trustSeals = [
    { name: "SMSF Association", logo: "🏛️" },
    { name: "CPA Australia", logo: "🎓" },
    { name: "FAAA Member", logo: "⭐" },
    { name: "Tax Practitioners Board", logo: "📋" }
  ]

  const differentiators = [
    {
      icon: <Award className="h-6 w-6 text-yellow-500" />,
      title: "Award-Winning Expertise",
      description: "SMSF Firm of the Year nominee with 20+ years experience"
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "100% Australian-Based",
      description: "All work performed onshore by Sunshine Coast locals"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "100% Referral-Driven",
      description: "Grown entirely through trust and professional referrals since 2018"
    }
  ]

  return (
    <main className="min-h-screen" role="main">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden" role="banner" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <header>
              <Badge className="bg-yellow-500 text-black mb-6 text-sm font-medium">
                <Award className="h-4 w-4 mr-2" />
                SMSF Firm of the Year Nominee 2025
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sunshine Coast's<br />
              Award-Winning<br />
              <span className="text-yellow-400">SMSF Specialists</span>
            </h1>
            <p className="text-xl text-blue-100 mb-4">
              Where Ordinary Ends and Expertise Begins
            </p>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl">
              Your trusted SMSF partner on the Sunshine Coast. Dual-licensed financial planning and tax expertise under one roof. 
              Whether you're running a business in Caloundra or planning your retirement on Bribie Island, we deliver 100% Australian-based, 
              100% referral-driven, 100% focused SMSF success.
            </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold" aria-label="Book Your SMSF Consultation">
                  Book Your SMSF Consultation
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
                <Button size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-900 font-semibold" aria-label="Download Free SMSF Guide">
                  <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                  Free Guide: 5 SMSF Must-Knows
                </Button>
              </div>
            </header>
            
            <aside className="relative" aria-labelledby="why-choose-heading">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h2 id="why-choose-heading" className="text-2xl font-bold mb-6">Why Choose Vivacè Advisory?</h2>
                <div className="space-y-4">
                  {differentiators.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 bg-white/20 rounded-lg p-2" aria-hidden="true">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-blue-100">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 id="services-heading" className="text-4xl font-bold text-gray-900 mb-4">
              Integrated SMSF Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dual-licensing model eliminates the fragmentation that characterises most SMSF service delivery. 
              Receive seamless, coordinated strategies that optimise tax, investment, and estate planning objectives simultaneously.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            {services.map((service, index) => (
              <article key={index} className="group hover:shadow-xl transition-all duration-300" role="listitem">
                <Card className="h-full border-0 shadow-lg">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <Link 
                        to={service.link}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 bg-white" aria-labelledby="who-we-help-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 id="who-we-help-heading" className="text-4xl font-bold text-gray-900 mb-4">
              We Are The Perfect Fit If You Are...
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialised SMSF services are designed for specific client archetypes who value expertise, 
              integration, and long-term relationships over generic financial advice.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            {whoWeHelp.map((client, index) => (
              <article key={index} className="text-center group hover:shadow-xl transition-all duration-300 p-8 rounded-2xl border border-gray-100" role="listitem">
                <div className="mb-6 flex justify-center">
                  <div className="bg-gray-100 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    {client.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {client.title}
                </h3>
                <p className="text-gray-600">
                  {client.description}
                </p>
              </article>
            ))}
          </div>
          
          {/* Trust Seals */}
          <div className="mt-16 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Trusted by Professional Bodies</h3>
            <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
              {trustSeals.map((seal, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-600">
                  <span className="text-2xl">{seal.logo}</span>
                  <span className="font-medium">{seal.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="difference-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <article>
              <h2 id="difference-heading" className="text-4xl font-bold text-gray-900 mb-6">
                The Vivacè Difference: Integration, Expertise, Relationships
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Seamless Integration</h3>
                    <p className="text-gray-600">
                      Our dual-licensing model eliminates coordination between separate accounting, advisory, 
                      and administrative providers. One team, one relationship, superior outcomes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Expertise</h3>
                    <p className="text-gray-600">
                      Award-nominated specialists with Executive MBA qualifications, SMSF Association membership, 
                      and 20+ years of experience navigating regulatory changes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Long-term Relationships</h3>
                    <p className="text-gray-600">
                      100% referral-based growth since 2018 demonstrates our commitment to exceptional service. 
                      We build relationships that last from accumulation through pension phase and estate planning.
                    </p>
                  </div>
                </div>
              </div>
            </article>
            
            <aside className="bg-blue-50 rounded-2xl p-8" aria-labelledby="philosophy-heading">
              <h3 id="philosophy-heading" className="text-2xl font-bold text-gray-900 mb-6">Our Philosophy</h3>
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "People just need to know if they want 'ordinary' there is an ocean of people that do that, 
                if they want specialised, Vivace is the only place to come."
              </blockquote>
              <p className="text-gray-600">
                We don't try to be everything to everyone. We are unapologetically specialists, 
                not generalists. This focus allows us to deliver exceptional outcomes while maintaining 
                the personal attention that characterises boutique providers.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* Advisor Profile Section */}
      <section className="py-20 bg-white" aria-labelledby="advisor-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 id="advisor-heading" className="text-4xl font-bold text-gray-900 mb-6">
                Meet Your Sunshine Coast SMSF Specialist
              </h2>
              <div className="bg-blue-50 rounded-2xl p-8">
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                      SG
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Stacy Giovinazzo</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-4">Principal & Founder</p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><strong>SMSF Specialist Advisor™ (SSA®)</strong></p>
                      <p>Financial Adviser Register: #001234567</p>
                      <p>Executive MBA, SMSF Association Member</p>
                      <p>20+ Years SMSF Experience</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-gray-700 italic">
                    "My mission is simple: to provide Sunshine Coast families with the sophisticated SMSF strategies 
                    they need to build wealth and secure their retirement, delivered with the personal attention 
                    that only a boutique practice can provide."
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Professional Credentials</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">ABN</p>
                    <p className="text-gray-600">18 993 426 426</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Tax Agent</p>
                    <p className="text-gray-600">26 008 299</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">AFSL</p>
                    <p className="text-gray-600">437518</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Sunshine Coast, QLD</p>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Experience Matters</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <UserCheck className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Navigated multiple regulatory changes including the 2017 superannuation reforms</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <UserCheck className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Established over 200 SMSFs for Sunshine Coast families and businesses</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <UserCheck className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Specialised in complex LRBA structures and property investment strategies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 id="testimonials-heading" className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Our results speak for themselves - not only the profit margins, but importantly the client outcomes and feedback.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            {testimonials.map((testimonial, index) => (
              <article key={index} className="border-0 shadow-lg" role="listitem">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4" aria-label="5 star rating">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-6 italic">
                      "{testimonial.text}"
                    </blockquote>
                    <footer className="border-t pt-4">
                      <cite className="font-semibold text-gray-900 not-italic">{testimonial.name}</cite>
                      <p className="text-sm text-gray-600">{testimonial.type}</p>
                    </footer>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-4xl font-bold mb-6">
            Ready to Take Control of Your Super on the Sunshine Coast?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the high-net-worth individuals from Caloundra to Bribie Island who trust us with their SMSF strategies. 
            Book a consultation to discover how our integrated approach can optimise your retirement outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold" aria-label="Book Your SMSF Consultation">
              Book Your SMSF Consultation
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
            <Button size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-900 font-semibold" aria-label="Download Free SMSF Guide">
              <Download className="mr-2 h-5 w-5" aria-hidden="true" />
              Free Guide: 5 SMSF Must-Knows
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            Download our comprehensive guide: "5 Things You Must Know Before Starting an SMSF" - 
            Essential insights for Sunshine Coast investors and business owners.
          </p>
        </div>
      </section>
    </main>
  )
}

export default HomePage

