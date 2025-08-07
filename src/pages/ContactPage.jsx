import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Award,
  Shield,
  Users,
  CheckCircle
} from 'lucide-react'

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      title: "Phone",
      details: "07 5221 5545",
      description: "Speak directly with our experienced team"
    },
    {
      icon: <Mail className="h-8 w-8 text-green-600" />,
      title: "Email", 
      details: "admin@vivaceadvisory.com.au",
      description: "Send us your questions or documents"
    },
    {
      icon: <MapPin className="h-8 w-8 text-purple-600" />,
      title: "Location",
      details: "Sunshine Coast, QLD",
      description: "100% Australian-based team"
    }
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "8:30 AM - 5:00 PM" },
    { day: "Saturday", hours: "By Appointment" },
    { day: "Sunday", hours: "Closed" }
  ]

  const whyChooseUs = [
    {
      icon: <Award className="h-6 w-6 text-yellow-500" />,
      title: "Award-Winning Expertise",
      description: "SMSF Firm of the Year nominee with 20+ years experience"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "100% Australian-Based",
      description: "All work performed onshore with enhanced security"
    },
    {
      icon: <Users className="h-6 w-6 text-green-500" />,
      title: "100% Referral-Driven",
      description: "Grown entirely through trust and professional referrals"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Ready to experience the Vivacè difference? Contact our award-winning team 
              to discuss how we can optimise your SMSF strategies and retirement outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Call Now: 07 5221 5545
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the contact method that works best for you. Our team is ready to discuss 
              your SMSF needs and answer any questions you may have.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 mb-2">
                    {method.details}
                  </p>
                  <p className="text-gray-600">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Hours */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Complete the form below and we'll get back to you within one business day. 
                For urgent matters, please call us directly.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="Your phone number" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current SMSF Balance (if applicable)
                  </label>
                  <Input placeholder="e.g., $500,000" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How can we help you? *
                  </label>
                  <Textarea 
                    placeholder="Please describe your SMSF needs or questions..."
                    rows={4}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Phone</option>
                    <option>Email</option>
                    <option>Either</option>
                  </select>
                </div>
                
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Office Hours & Additional Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-blue-700 text-sm">
                      <strong>Note:</strong> We offer flexible appointment times to accommodate 
                      your schedule, including early morning and evening consultations by arrangement.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Vivacè Advisory?</h3>
                  <div className="space-y-4">
                    {whyChooseUs.map((reason, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="bg-gray-100 rounded-lg p-2 flex-shrink-0">
                          {reason.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{reason.title}</h4>
                          <p className="text-gray-600 text-sm">{reason.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Initial Consultation</h4>
                        <p className="text-gray-600 text-sm">Comprehensive assessment of your current situation and goals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Strategic Recommendations</h4>
                        <p className="text-gray-600 text-sm">Tailored strategies based on your unique circumstances</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Ongoing Partnership</h4>
                        <p className="text-gray-600 text-sm">Long-term relationship from accumulation to estate planning</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Credentials & Registrations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our qualifications and registrations ensure you receive advice from properly 
              credentialed professionals operating under strict regulatory oversight.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">ABN</h3>
              <p className="text-gray-600">18 993 426 426</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Tax Agent Licence</h3>
              <p className="text-gray-600">26 008 299</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">AFSL</h3>
              <p className="text-gray-600">Authorised Rep of AVALONfs Pty Ltd AFSL 437518</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Professional Bodies</h3>
              <p className="text-gray-600">FAAA & SMSF Association Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Take the first step towards optimising your SMSF strategy. Contact us today 
            to schedule your consultation with Gold Coast's award-winning SMSF specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
              Book Your Consultation Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Call 07 5221 5545
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

