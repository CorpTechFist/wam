import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Heart, Star, Building, Users, Award, Target } from "lucide-react";
import { useTranslation } from "../TranslationContext";
import { unsplash_tool } from "../../tools";

export function SponsorsPage() {
  const { translations } = useTranslation();

  const sponsors = [
    {
      name: "LOVE ME TEA",
      type: "Holistic Wellness Partner",
      description: "Love Me Tea is a proud Sponsor of WAM Alliance. Holistic products that help those suffering from trauma ailments & more.",
      website: "https://lovemeteas.com/",
      icon: Heart,
      category: "Wellness & Health"
    },
    {
      name: "Community Partners",
      type: "Local Business Network",
      description: "Local businesses that support our mission through partnerships and community engagement.",
      icon: Building,
      category: "Community Support"
    },
    {
      name: "Educational Sponsors",
      type: "Learning & Development",
      description: "Organizations supporting our educational programs and community workshops.",
      icon: Target,
      category: "Education"
    },
    {
      name: "Healthcare Partners",
      type: "Wellness Supporters",
      description: "Healthcare organizations providing resources and support for our wellness initiatives.",
      icon: Star,
      category: "Healthcare"
    },
    {
      name: "Corporate Allies",
      type: "Business Partnerships",
      description: "Corporate sponsors who champion inclusivity and social impact in their communities.",
      icon: Award,
      category: "Corporate"
    },
    {
      name: "Non-Profit Collaborators",
      type: "Mission Aligned Partners",
      description: "Fellow non-profit organizations working together to create lasting community change.",
      icon: Users,
      category: "Non-Profit"
    }
  ];

  const sponsorshipLevels = [
    {
      level: "Platinum Sponsors",
      amount: "$5,000+",
      benefits: "Premier visibility, co-branding opportunities, exclusive event access",
      color: "from-purple-400 to-pink-400"
    },
    {
      level: "Gold Sponsors", 
      amount: "$2,500+",
      benefits: "Major visibility, event recognition, partnership opportunities",
      color: "from-yellow-400 to-orange-400"
    },
    {
      level: "Silver Sponsors",
      amount: "$1,000+", 
      benefits: "Significant visibility, community recognition, networking access",
      color: "from-gray-300 to-gray-400"
    },
    {
      level: "Community Sponsors",
      amount: "$500+",
      benefits: "Local recognition, community impact visibility, appreciation events",
      color: "from-blue-400 to-cyan-400"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Purple/Gold Accent Border Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-yellow-500 to-purple-600"></div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(139 92 246) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Page Title */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-yellow-50 border-2 border-yellow-400 rounded-none mb-6">
              <Award className="w-5 h-5 text-yellow-600" />
              <span className="text-sm tracking-wider text-yellow-800">VALUED PARTNERSHIPS</span>
            </div>
            <h1 className="text-3xl md:text-5xl tracking-tight text-purple-900 mb-4">
              {translations.donationPages?.sponsorsTitle || "Our Partners"}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto"></div>
          </div>

          {/* Introduction Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 border-2 border-purple-200 p-8 md:p-12 shadow-xl">
              <div className="space-y-6 text-center">
                <p className="text-lg text-gray-800 leading-relaxed">
                  {translations.donationPages?.sponsorsDescription || "Discover our valued partners who support WAM Alliance in making a difference in our communities."}
                </p>
                <p className="text-gray-800 leading-relaxed">
                  They are essential partners in creating inclusive communities where everyone matters.
                </p>
                <div className="pt-4">
                  <p className="text-2xl text-purple-700 tracking-wide">
                    {translations.donationPages?.weAreTheChange || "WE ARE THE CHANGE!"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Partners Section */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl text-center text-purple-900 mb-8 tracking-wide">
              Featured Partners
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Love Me Tea */}
              <Card className="bg-white border-2 border-purple-300 hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 overflow-hidden group">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 h-2"></div>
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-none flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <Badge className="mb-3 bg-purple-100 text-purple-800 border border-purple-300 hover:bg-purple-200">
                        <Star className="w-3 h-3 mr-1" />
                        HOLISTIC WELLNESS
                      </Badge>
                      <h3 className="text-xl mb-3">
                        <a 
                          href="https://lovemeteas.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-700 hover:text-purple-900 transition-colors duration-300 hover:underline"
                        >
                          Love Me Tea
                        </a>
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Love Me Tea is a proud sponsor of WAM Alliance. Holistic products that help those suffering from trauma ailments & more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Techfist Global */}
              <Card className="bg-white border-2 border-yellow-400 hover:border-yellow-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 overflow-hidden group">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2"></div>
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-none flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Building className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <Badge className="mb-3 bg-yellow-100 text-yellow-800 border border-yellow-300 hover:bg-yellow-200">
                        <Target className="w-3 h-3 mr-1" />
                        TECHNOLOGY PARTNER
                      </Badge>
                      <h3 className="text-xl mb-3">
                        <a 
                          href="https://techfistglobal.com/#myhome" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-700 hover:text-purple-900 transition-colors duration-300 hover:underline"
                        >
                          Techfist Global
                        </a>
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Techfist Global is a proud sponsor of WAM Alliance. Empowering communities through innovative technology solutions and digital transformation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Partnership Benefits Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-2 border-purple-300 p-8 md:p-10 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-purple-900 mb-3">
                    Partnership Impact
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our partners play a crucial role in supporting WAM Alliance's mission to create inclusive communities. Through their generous support and collaboration, we're able to expand our reach and make a meaningful difference in the lives of those we serve.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t-2 border-purple-200">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 border-2 border-purple-300 mb-3">
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-purple-900 mb-2">Community Impact</h4>
                  <p className="text-sm text-gray-600">Supporting inclusive communities</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 border-2 border-yellow-400 mb-3">
                    <Star className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h4 className="text-purple-900 mb-2">Shared Values</h4>
                  <p className="text-sm text-gray-600">Committed to positive change</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 border-2 border-purple-300 mb-3">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-purple-900 mb-2">Lasting Partnership</h4>
                  <p className="text-sm text-gray-600">Building a better tomorrow</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
         <div className="text-center max-w-3xl mx-auto">
  <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 md:p-10 text-white shadow-2xl">
    <h3 className="text-2xl mb-4">Become a Partner</h3>
    <p className="mb-6 text-purple-100 leading-relaxed">
      Interested in partnering with WAM Alliance? Join us in making a difference in our communities and supporting those who need it most.
    </p>
    <button
      onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact-us' }))}
      className="inline-block px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-purple-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    >
      Contact Us
    </button>
  </div>
</div>

        </div>
      </div>
      
      {/* Purple/Gold Accent Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-yellow-500 to-purple-600"></div>
    </div>
  );
}