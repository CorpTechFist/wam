import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Users, Globe, Briefcase, Heart, Shield, HandHeart } from "lucide-react";
import { useTranslation } from "../TranslationContext";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import secondSecondCoalitionLogo from '../../assets/testimonials/3dedd5dd8d7d270478c178c7d281ad8f8472cbc4.png';
import restorativeHealthLogo from '../../assets/testimonials/405f03c1c531c3311c5195fab0ee137f0a463a0e.png';
import techfistLogo from '../../assets/logo/tfglogo.png'
export function TrustedPartners() {
  const { translations } = useTranslation();

  const agencies = [
    {
      name: "Community Health Partners",
      type: "Healthcare Resources",
      description: "Providing mental health resources, counseling services, and wellness programs for community members in need.",
      icon: Heart,
      category: "Healthcare",
      services: ["Mental Health Counseling", "Crisis Support", "Wellness Programs"]
    },
    {
      name: "Legal Aid Services",
      type: "Legal Support",
      description: "Offering free legal assistance, advocacy, and representation for individuals facing legal challenges.",
      icon: Shield,
      category: "Legal Aid",
      services: ["Legal Consultation", "Court Representation", "Document Assistance"]
    },
    {
      name: "Employment Resource Center",
      type: "Career Development",
      description: "Supporting job seekers with career counseling, skill development, and employment placement services.",
      icon: Briefcase,
      category: "Employment",
      services: ["Job Placement", "Skills Training", "Resume Building"]
    },
    {
      name: "Housing Assistance Network",
      type: "Housing Support",
      description: "Connecting individuals and families with affordable housing options and emergency shelter services.",
      icon: Users,
      category: "Housing",
      services: ["Emergency Shelter", "Housing Placement", "Rental Assistance"]
    },
    {
      name: "Educational Support Alliance",
      type: "Learning Resources",
      description: "Providing educational support, tutoring, and scholarship opportunities for students of all ages.",
      icon: Globe,
      category: "Education",
      services: ["Tutoring Programs", "Scholarships", "Adult Education"]
    },
    {
      name: "Food Security Coalition",
      type: "Nutrition Support",
      description: "Ensuring community members have access to nutritious food through food banks and meal programs.",
      icon: HandHeart,
      category: "Food Security",
      services: ["Food Banks", "Meal Programs", "Nutrition Education"]
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Purple/Gold Accent Border Top */}
      <div className="absolute top-0 left-0 right-0 h-1 "></div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(139 92 246) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Page Title */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-purple-50 border-2 border-purple-200 rounded-none mb-6">
              <Heart className="w-5 h-5 text-purple-600" />
              <span className="text-sm tracking-wider text-purple-800">COMMUNITY RESOURCES</span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight pb-2 font-bold tracking-tight text-violet-700"
  style={{ WebkitTextFillColor: "#7c3aed" }}
>
              Resources & Partnering Agencies
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 border-2 border-purple-200 p-8 md:p-12 shadow-xl">
              <div className="space-y-6 text-gray-800 leading-relaxed">
                <p className="text-lg">
                  This is a page where you can find additional resources in the local SLC, Utah area. These are resources we feel are truly helping and serving others, with success and love.
                </p>
                
                <p>
                  We do not want to send those in need to a place where they go unheard and are poorly treated by the staff.
                </p>
                
                <div className="bg-white border-l-4 border-purple-600 p-6 my-8 shadow-md">
                  <p className="text-purple-900">
                    WAM is currently working on building a Resource Space privately funded, to help those get off the street and into a safe environment, without the Federal Government regulating where funds are spent.
                  </p>
                </div>
                
                <p>
                  We value and believe everyone has the right to love, shelter & food, alternative mental health care to aid in personal growth, and a pursuit of one's own happiness.
                </p>
                
                <p>
                  Here at WAM we support and guide those in need, from barely surviving to thriving.
                </p>
                
                <div className="text-center py-6 mt-8">
                  <p className="text-xl italic text-purple-700 border-t-2 border-b-2 border-yellow-500 py-4 inline-block px-8">
                    Loving yourself is the first step in recovering from any event.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Resource Cards Section */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl text-center text-purple-900 mb-8 tracking-wide">
              Our Trusted Partners
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Resource Card */}
              <Card className="bg-white border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 h-2"></div>
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-20 h-20 flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
                      <ImageWithFallback
                        src={secondSecondCoalitionLogo}
                        alt="2ND % 2ND Coalition Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-3 bg-purple-100 text-purple-800 border border-purple-300 hover:bg-purple-200">
                        <Shield className="w-3 h-3 mr-1" />
                        RESOURCE
                      </Badge>
                      <h3 className="text-lg mb-2">
                        <a 
                          href="https://www.facebook.com/people/2nd-2nd-Coalition/100089123541728/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-700 hover:text-purple-900 transition-colors duration-300 hover:underline"
                        >
                          2ND % 2ND Coalition
                        </a>
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">Nonprofit Helping those in the SLC Area.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Partnering Agency Card */}
              <Card className="bg-white border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 h-2"></div>
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-40 h-40   flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
                      <ImageWithFallback
                        src={restorativeHealthLogo}
                        alt="Restorative Health Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                     <Badge className="mb-3 bg-purple-100 text-purple-800 border border-purple-300 hover:bg-purple-200">
                        <HandHeart className="w-3 h-3 mr-1" />
                        PARTNERING AGENCY
                      </Badge>
                      <h3 className="text-lg mb-2">
                        <a 
                          href="https://www.restorativehealthprimarycare.com/home" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-700 hover:text-purple-900 transition-colors duration-300 hover:underline"
                        >
                          Restorative Health
                        </a>
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">World class health care with options for our LGBTQ+ community and those looking to improve quality of life.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

                {/* Partnering Agency Card */}
             <Card className="bg-white border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 h-2"></div>
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                <div className="w-40 h-40  flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
  <div className="w-full h-full transform scale-125">
    <ImageWithFallback
      src={techfistLogo}
      alt="Techfist Global IN Logo"
      className="w-full h-full object-contain"
    />
  </div>
</div>

                    <div className="flex-1">
 <Badge className="mb-3 bg-purple-100 text-purple-800 border border-purple-300 hover:bg-purple-200">
                        <HandHeart className="w-3 h-3 mr-1" />
                        PARTNERING AGENCY
                      </Badge>
                      <h3 className="text-lg mb-2">
                        <a 
                          href="https://techfistglobal.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-700 hover:text-purple-900 transition-colors duration-300 hover:underline"
                        >
                          Techfisht Global Inc
                        </a>
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">In partnership with TechFist Global, We All Matter drives the power of technology to amplify change, empower people, and build a better tomorrow.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  );
}