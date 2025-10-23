import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Send, DollarSign, Gift } from "lucide-react";
import { useTranslation } from "./TranslationContext";

export function Contact() {
  const { translations } = useTranslation();

  const handleCashDonationsClick = () => {
    const event = new CustomEvent('navigate', { detail: 'cash-donations' });
    window.dispatchEvent(event);
  };

  const handleOtherDonationsClick = () => {
    const event = new CustomEvent('navigate', { detail: 'other-donations' });
    window.dispatchEvent(event);
  };

  return (
    <section id="contact" className="py-5 position-relative overflow-hidden border-top border-bottom border-light border-opacity-50 bg-white">
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="max-w-3xl mx-auto">
              <div className="relative mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6" style={{ 
                  background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 25%, #FFD700 50%, #8b5cf6 75%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '700',
                  letterSpacing: '-0.02em'
                }}>
                  DONATIONS
                </h1>
              </div>
              
              {/* Decorative Dots */}
              <div className="flex justify-center gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg shadow-purple-300"></div>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-300"></div>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg shadow-purple-300"></div>
              </div>
              
              <div className="space-y-5 text-foreground">
                <p className="text-base md:text-lg leading-relaxed">
                  WAM welcomes and accepts all donations. We are a registered 501(c)(3) organization with the IRS and all donations are subject to tax write offs.
                </p>
                
                <div className="py-4">
                  <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 border-2 border-purple-300 rounded-2xl p-6 shadow-lg">
                    <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1.5 rounded-full">
                      ✓
                    </Badge>
                    <p className="text-lg md:text-xl" style={{ fontStyle: 'italic', color: '#4f46e5', fontWeight: '600' }}>
                      100% of every donation goes directly to those we help - This is our promise to you!
                    </p>
                  </div>
                </div>
                
                <p className="text-base md:text-lg leading-relaxed">
                  WAM does not have paid Board of Directors, we serve others without strings attached, and ask for nothing in return except to love yourself!
                </p>
              </div>
            </div>
          </div>
          
          {/* Donation Cards */}
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Cash Donations Card */}
            <Card className="bg-white border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200 hover:-translate-y-2">
              <CardContent className="p-8 text-center flex flex-col gap-8">
                <div className="flex items-center justify-center">
                  <div className="w-48 h-48 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-100 to-purple-50 border-4 border-purple-200 shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1687914141292-906c2b2f5911?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNoJTIwbW9uZXklMjBkb25hdGlvbiUyMGNoYXJpdHl8ZW58MXx8fHwxNzU5NDM5ODgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Cash donations"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl" style={{ color: '#7c3aed' }}>
                    CASH DONATIONS
                  </h3>
                  <Button 
                    onClick={handleCashDonationsClick}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    Donate Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* All Other Donations Card */}
            <Card className="bg-white border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200 hover:-translate-y-2">
              <CardContent className="p-8 text-center flex flex-col gap-8">
                <div className="flex items-center justify-center">
                  <div className="w-48 h-48 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-100 to-purple-50 border-4 border-purple-200 shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1733809701005-0b1c0ad53c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZG9uYXRpb25zJTIwaXRlbXMlMjBnaWZ0c3xlbnwxfHx8fDE3NTk0Mzk4ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Other donations"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl" style={{ color: '#7c3aed' }}>
                    ALL OTHER DONATIONS
                  </h3>
                  <Button 
                    onClick={handleOtherDonationsClick}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    Donate Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}