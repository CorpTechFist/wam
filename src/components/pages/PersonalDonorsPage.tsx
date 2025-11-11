import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Users, Heart, Star, Gift } from "lucide-react";
import { useTranslation } from "../TranslationContext";
import donorsImage from 'asset/0ac45be3ff4699bae26fbda27fa3b09f73de9747.png';

export function PersonalDonorsPage() {
  const { translations } = useTranslation();

  const donors = [
    {
      name: "Sarah Johnson",
      amount: "$500",
      message: "Proud to support WAM Alliance's mission of creating inclusive communities.",
      icon: Heart,
      type: "Monthly Supporter"
    },
    {
      name: "Michael Chen",
      amount: "$1,200",
      message: "Education and advocacy are key to building a better world for everyone.",
      icon: Star,
      type: "Major Donor"
    },
    {
      name: "Maria Rodriguez",
      amount: "$250",
      message: "Every small contribution matters. We all matter, and together we make a difference.",
      icon: Users,
      type: "Community Champion"
    },
    {
      name: "David Thompson",
      amount: "$750",
      message: "Supporting WAM Alliance because inclusion and equality should not be privileges.",
      icon: Gift,
      type: "Annual Supporter"
    },
    {
      name: "Jennifer Lee",
      amount: "$300",
      message: "Grateful to be part of a movement that truly believes we all matter.",
      icon: Heart,
      type: "Regular Contributor"
    },
    {
      name: "Robert Martinez",
      amount: "$900",
      message: "Investing in social impact and community well-being is investing in our future.",
      icon: Star,
      type: "Impact Investor"
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 md:px-8 bg-white relative z-10" style={{ backgroundColor: '#ffffff', backgroundImage: 'none' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Modern Header Section */}
        <div className="text-center mb-20">
          <div className="relative mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6" style={{ 
              background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 25%, #FFD700 50%, #8b5cf6 75%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '700',
              letterSpacing: '-0.02em'
            }}>
              OUR VALUED DONORS
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-5 mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              We here at WAM are utterly grateful for each and every donor!
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether it is cash or items, it all helps in large amounts.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              If we each donated what it costs for a cup of coffee each day,
              the results would be greater quality of life for individuals and their families that are less fortunate.
            </p>
          </div>
         
          <p className="inline-flex items-center px-6 py-3 text-xl" style={{ 
          
            color: '#9d3df7ff',
            fontWeight: '600',
            letterSpacing: '0.08em',
            borderRadius: '12px',
           
          }}>
            WE ARE THE CHANGE!
          </p>
        
          {/* Decorative Dots */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg shadow-purple-300"></div>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-300"></div>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg shadow-purple-300"></div>
          </div>
        </div>

        {/* Donor Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* All Our Online Donors */}
          <Card className="bg-white border-2 border-purple-200/60 rounded-3xl shadow-xl shadow-purple-100/50 overflow-hidden relative group hover:shadow-2xl hover:shadow-purple-200/60 transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <CardContent className="p-8 md:p-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-center text-2xl mb-6" style={{ 
                background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #FFD700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700'
              }}>
                ALL OUR ONLINE DONORS
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Too all those who have donated through our FB Fundraising site, WAM site, Venmo, and PayPal. The people and WAM are grateful beyond words. We are indebted to each and every one of you.
              </p>
            </CardContent>
          </Card>

          {/* Anonymous Donors */}
          <Card className="bg-white border-2 border-purple-200/60 rounded-3xl shadow-xl shadow-purple-100/50 overflow-hidden relative group hover:shadow-2xl hover:shadow-purple-200/60 transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <CardContent className="p-8 md:p-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <h3 className="text-center text-2xl mb-6" style={{ 
                background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #FFD700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700'
              }}>
                ANONYMOUS DONORS
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                To all the anonymous donors - THANK YOU! We are grateful for your support and wish many blessings to all of you who gave a little that equated to A LOT!
              </p>
            </CardContent>
          </Card>

          {/* Gerry - Repeated Donor */}
          <Card className="bg-white border-2 border-purple-200/60 rounded-3xl shadow-xl shadow-purple-100/50 overflow-hidden relative group hover:shadow-2xl hover:shadow-purple-200/60 transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        
            <CardContent className="p-8 md:p-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center shadow-lg">
                  <Gift className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-center text-2xl mb-6" style={{ 
                background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #FFD700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700'
              }}>
                GERRY - REPEATED DONOR
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Thank you to Gerry, she has been donating to our cause for a couple years now, bringing hope and warmth to many of those in need. We here at WAM are utterly grateful for Gerry and her warm heart!
              </p>
            </CardContent>
          </Card>

          {/* Katherine */}
          <Card className="bg-white border-2 border-purple-200/60 rounded-3xl shadow-xl shadow-purple-100/50 overflow-hidden relative group hover:shadow-2xl hover:shadow-purple-200/60 transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <CardContent className="p-8 md:p-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <h3 className="text-center text-2xl mb-6" style={{ 
                background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #FFD700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700'
              }}>
                KATHERINE
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Katherine is another donor who gave a new start to a life that needed it! We all can be angels like Katherine - for just dollars we are saving lives.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Kathleen McGowen - Featured Full Width */}
        <Card className="bg-white border-2 border-purple-300/60 rounded-3xl shadow-2xl shadow-purple-200/60 overflow-hidden relative group hover:shadow-3xl hover:shadow-purple-300/70 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 via-yellow-400 to-purple-500"></div>
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 via-yellow-400 to-purple-500"></div>
          <CardContent className="p-10 md:p-14">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-200 to-yellow-100 flex items-center justify-center shadow-xl">
                <Star className="w-10 h-10 text-purple-700 fill-yellow-400" />
              </div>
            </div>
            <a 
              href="https://www.kathleenmcgowan.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center text-3xl md:text-4xl mb-8 block transition-all duration-300 group/link"
              style={{ 
                background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 25%, #FFD700 50%, #8b5cf6 75%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                textDecoration: 'underline',
                textDecorationColor: '#a78bfa'
              }}
            >
              KATHLEEN McGOWEN
            </a>
            <p className="text-gray-700 leading-relaxed text-center text-lg max-w-3xl mx-auto">
              Thank you to Kathleen and her group for showing their love by donating to our mission. WAM is grateful to have such powerfully divine supporters.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}