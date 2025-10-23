import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Users, Shield, Heart } from "lucide-react";
import { useTranslation } from "./TranslationContext";
import { ImageWithFallback } from './figma/ImageWithFallback';
import donorImage from 'figma:asset/68c16c033605004c6e9b7b3532fbe93693d87955.png';

export function Services() {
  const { translations } = useTranslation();

  return (
    <section id="services" className="pt-24 pb-5 position-relative overflow-hidden border-top border-bottom border-light border-opacity-50" style={{
      background: '#FFFFFF'
    }}>
      <div className="container mx-auto px-4 relative z-10 py-16">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#581c87' }}>
              DONORS
            </h2>
            <p className="text-base md:text-lg text-card-foreground max-w-3xl mx-auto leading-relaxed mb-4">
              WAM works with mainly personal donations, and company sponsors.
            </p>
            <p className="text-base md:text-lg text-card-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              WAM Alliance welcomes and accepts all donations with the utmost gratitude, and we are thankful to all those that contribute to our cause.
            </p>
            <p className="text-lg md:text-xl font-bold" style={{ fontStyle: 'italic', color: '#4f46e5' }}>
              WE ARE THE CHANGE!
            </p>
          </div>
        </div>

        {/* Donors Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-white border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200 hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-32 h-32 rounded-3xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-purple-100 to-purple-50 border-4 border-purple-200 shadow-lg">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1697665387559-253e7a645e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGRvbm9ycyUyMGNoYXJpdHklMjBnaXZpbmclMjBoYW5kc3xlbnwxfHx8fDE3NTk0MzIwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Personal Donors"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <button 
                    onClick={() => {
                      const event = new CustomEvent('navigate', { detail: 'personal-donors' });
                      window.dispatchEvent(event);
                    }}
                    className="text-2xl md:text-3xl font-bold mb-4 underline cursor-pointer hover:text-purple-700 transition-colors"
                    style={{ color: '#7c3aed' }}
                  >
                    {translations.donationPages?.personalDonorsTitle || "PERSONAL DONORS"}
                  </button>
                  <p className="text-card-foreground leading-relaxed text-base md:text-lg">
                    {translations.donationPages?.personalDonorsDesc || "We have some personal donors that WAM could not exist without."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200 hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-50 border-4 border-purple-200 rounded-3xl overflow-hidden flex-shrink-0 shadow-lg">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1712903276360-20f76efac6f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBzcG9uc29ycyUyMGJ1c2luZXNzJTIwcGFydG5lcnNoaXB8ZW58MXx8fHwxNzU5NDMyMDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Corporate Sponsors"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <button 
                    onClick={() => {
                      const event = new CustomEvent('navigate', { detail: 'sponsors' });
                      window.dispatchEvent(event);
                    }}
                    className="text-2xl md:text-3xl font-bold mb-4 underline cursor-pointer hover:text-purple-700 transition-colors"
                    style={{ color: '#7c3aed' }}
                  >
                    {translations.donationPages?.sponsorsTitle || "PARTNERS"}
                  </button>
                  <p className="text-card-foreground leading-relaxed text-base md:text-lg">
                    {translations.donationPages?.sponsorsDescription || "Discover our valued sponsors who support WAM Alliance in making a difference in our communities."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}