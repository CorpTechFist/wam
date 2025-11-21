import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useTranslation } from "./TranslationContext";
import { Heart, Users, Calendar, MessageSquare, Utensils, Award, ArrowRight } from "lucide-react";

export function Volunteer() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Purple/Gold Accent Border Top */}
     
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(139 92 246) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <section className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Page Title */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-purple-50 border-2 border-purple-200 rounded-none mb-6">
                <Heart className="w-5 h-5 text-purple-600" />
                <span className="text-sm tracking-wider text-purple-800">{t('volunteer.makeADifference')}</span>
              </div>
              <h1 className="text-3xl md:text-5xl tracking-tight text-purple-900 mb-4">
                {t('volunteer.title')}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto mb-6"></div>
              <h2 className="text-2xl md:text-3xl text-purple-700 italic mb-8">
                {t('volunteer.subtitle')}
              </h2>
            </div>

            {/* Introduction Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 border-2 border-purple-200 p-8 md:p-12 shadow-xl">
                <div className="space-y-6 text-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Award className="w-6 h-6 text-purple-600" />
                    <h3 className="text-xl text-purple-900">{t('volunteer.whyVolunteer')}</h3>
                  </div>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    {t('volunteer.requirement1')}
                  </p>
                  <div className="border-t-2 border-purple-200 pt-6 mt-6">
                    <p className="text-gray-800 leading-relaxed">
                      {t('volunteer.requirement2')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteer Opportunities */}
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl text-center text-purple-900 mb-8 tracking-wide">
                {t('volunteer.opportunities')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Advocacy Group */}
                <Card className="bg-white border-2 border-purple-400 hover:border-purle-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 overflow-hidden group">
                  
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-none flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl text-purple-900 mb-3">
                          {t('volunteer.advocacyGroup')}
                        </h3>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                          {t('volunteer.advocacyGroupDesc')}
                        </p>
                        <Button
                          onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'volunteer-application' }))}
                          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-2 border-purple-400 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                          {t('volunteer.volunteerButton')}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Fundraising/Events */}
                <Card className="bg-white border-2 border-purple-400 hover:border-purle-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 overflow-hidden group">
                
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-none flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl text-purple-900 mb-3">
                          {t('volunteer.fundraisingEvents')}
                        </h3>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                          {t('volunteer.fundraisingEventsDesc')}
                        </p>
                        <Button
                          onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'volunteer-application' }))}
                          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-2 border-purple-400 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                          {t('volunteer.volunteerButton')}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Meal Prep & Delivery */}
                <Card className="bg-white border-2 border-purple-400 hover:border-purle-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 overflow-hidden group">
                 
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-none flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Utensils className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl text-purple-900 mb-3">
                          {t('volunteer.mealPrepDelivery')}
                        </h3>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                          {t('volunteer.mealPrepDeliveryDesc')}
                        </p>
                        <Button
                          onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'volunteer-application' }))}
                          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-2 border-purple-400 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                          {t('volunteer.volunteerButton')}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media Associate */}
                <Card className="bg-white border-2 border-purple-400 hover:border-purple-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 overflow-hidden group">
              
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-none flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <MessageSquare className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl text-purple-900 mb-3">
                          {t('volunteer.socialMediaAssociate')}
                        </h3>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                          {t('volunteer.socialMediaAssociateDesc')}
                        </p>
                        <Button
                          onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'volunteer-application' }))}
                          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-2 border-purple-400 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                          {t('volunteer.volunteerButton')}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 md:p-10 text-white shadow-2xl text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Heart className="w-6 h-6" />
                  <h3 className="text-2xl">{t('volunteer.ctaTitle')}</h3>
                </div>
                <p className="text-purple-100 leading-relaxed mb-6">
                  {t('volunteer.ctaDescription')}
                </p>
                <Button
                  onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'volunteer-application' }))}
                  className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 border-2 border-yellow-400 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 px-8 py-3"
                >
                  {t('volunteer.ctaButton')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     
    </div>
  );
}