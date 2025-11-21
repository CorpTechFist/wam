import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Gift, Car, Home, Shirt, Book, Heart, Calendar } from "lucide-react";
import { useTranslation } from "../TranslationContext";

export function OtherDonationsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20 pb-8 relative overflow-hidden bg-white" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}


          {/* Donation Types Grid */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="pt-7 px-6 md:px-12 pb-24 text-center relative z-30">
              {/* Decorative Elements */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-yellow-400/20 rounded-full blur-3xl"></div>
              
              {/* Title with Modern Styling */}
              <div className="relative mb-8">
                              <h3 className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight pb-2 font-bold tracking-tight text-violet-700"
  style={{ WebkitTextFillColor: "#7c3aed" }}
>
                  WE ALL MATTER ALLIANCE
                </h3>
                <h3 className="text-2xl md:text-3xl" style={{ 
               
                  WebkitTextFillColor: '#7c3aed',
                  backgroundClip: 'text',
                  fontWeight: '600'
                }}>
                  {t("titleSub")}
                </h3>
              </div>
              
              {/* Description Card */}
              <div className="max-w-3xl mx-auto mb-12">
                <div className="bg-gradient-to-br from-purple-50/80 via-white to-yellow-50/60 border-2 border-purple-200/60 rounded-2xl p-8 md:p-10 shadow-xl shadow-purple-100/50 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                  
                  <div className="flex items-start gap-3 mb-6">
                    <Gift className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-800 leading-relaxed text-left text-lg">
                     {t("descriptionIntro")} <span className="text-purple-700" style={{ fontWeight: '600' }}>{t("descriptionItems")}</span>,{t("descriptionThanks")}
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600"></div>
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
                    <p className="text-xl md:text-2xl" style={{ 
                      background: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #FFD700 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '700',
                      fontStyle: 'italic',
                      letterSpacing: '0.02em'
                    }}>
                      {t("everythingCounts")}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Call to Action Section */}
              <div className="flex flex-col items-center justify-center space-y-8">
                {/* Decorative Icon */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-yellow-400 opacity-20 blur-2xl rounded-full"></div>
                  <Heart className="w-16 h-16 text-purple-600 relative animate-pulse-soft" />
                </div>
                
                {/* Enhanced Button */}
                <button 
                  onClick={() => {
                    const event = new CustomEvent('navigate', { detail: 'donation-scheduling' });
                    window.dispatchEvent(event);
                  }}
                  className="group px-12 py-5 transition-all duration-500 shadow-[0_10px_40px_rgba(139,92,246,0.3)] hover:shadow-[0_20px_60px_rgba(139,92,246,0.4)] transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-600 text-white border-2 border-purple-400/30 rounded-full outline-none relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="flex items-center gap-3 relative z-10">
                    <Calendar className="w-5 h-5" />
                    <span className="text-lg" style={{ fontWeight: '600' }}>{t("ctaButton")}</span>
                  </div>
                </button>
                
                {/* Decorative Dots */}
                <div className="flex justify-center gap-3 mt-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg shadow-purple-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg shadow-purple-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Guidelines Section */}

        </div>
      </div>
    </div>
  );
}