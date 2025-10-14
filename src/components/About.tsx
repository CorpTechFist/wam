import { Card, CardContent } from "./ui/card";
import { Users, Shield, Heart, TrendingUp, Crown, Scale } from "lucide-react";
import { useTranslation } from "./TranslationContext";

export function About() {
  const { translations } = useTranslation();
  
  return (
    <section id="about" className="py-5 position-relative overflow-hidden bg-white" style={{ backgroundColor: '#ffffff' }}>
      <div className="container-fluid px-4 position-relative" style={{ zIndex: 10 }}>
        {/* Core Values */}
        <div className="pt-20 pb-16 px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="relative mb-8">
              <h3 className="text-3xl md:text-4xl lg:text-5xl mb-6" style={{ 
                background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 25%, #FFD700 50%, #8b5cf6 75%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                letterSpacing: '-0.02em'
              }}>
                {translations.about?.coreValues || "OUR CORE VALUES"}
              </h3>
            </div>
            
            {/* Decorative Dots */}
            <div className="flex justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg shadow-purple-300"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-300"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg shadow-purple-300"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Community Card */}
            <Card className="bg-white border-2 border-purple-200/60 rounded-3xl shadow-xl shadow-purple-100/50 overflow-hidden relative group hover:shadow-2xl hover:shadow-purple-200/60 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center shadow-lg">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <h4 className="text-center text-2xl mb-4" style={{ 
                  background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #FFD700 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '700'
                }}>
                  {translations.about?.communityTitle || "Community"}
                </h4>
                <p className="text-gray-700 leading-relaxed text-center">
                  {translations.about?.communityDescription || "We cultivate inclusive circles where every voice is heard, every story honored, and collective strength lifts us all"}
                </p>
              </CardContent>
            </Card>

            {/* Independence Card */}
            <Card className="bg-white border-2 border-purple-200/60 rounded-3xl shadow-xl shadow-purple-100/50 overflow-hidden relative group hover:shadow-2xl hover:shadow-purple-200/60 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center shadow-lg">
                    <Shield className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
                <h4 className="text-center text-2xl mb-4" style={{ 
                  background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #FFD700 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '700'
                }}>
                  {translations.about?.empowermentTitle || "Independence"}
                </h4>
                <p className="text-gray-700 leading-relaxed text-center">
                  {translations.about?.empowermentDescription || "We equip you with the skills and confidence to navigate challenges on your own terms, fostering resilience and self-reliance."}
                </p>
              </CardContent>
            </Card>

            {/* Compassion Card */}
            <Card className="bg-white border-2 border-purple-200/60 rounded-3xl shadow-xl shadow-purple-100/50 overflow-hidden relative group hover:shadow-2xl hover:shadow-purple-200/60 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center shadow-lg">
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <h4 className="text-center text-2xl mb-4" style={{ 
                  background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #FFD700 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '700'
                }}>
                  {translations.about?.inclusionTitle || "Compassion"}
                </h4>
                <p className="text-gray-700 leading-relaxed text-center">
                  {translations.about?.inclusionDescription || "We meet you with empathy and respect, recognizing the courage it takes to confront pain and the power of shared humanity."}
                </p>
              </CardContent>
            </Card>

            {/* Growth Mindset Card */}
            <Card className="bg-white border-2 border-purple-200/60 rounded-3xl shadow-xl shadow-purple-100/50 overflow-hidden relative group hover:shadow-2xl hover:shadow-purple-200/60 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
                <h4 className="text-center text-2xl mb-4" style={{ 
                  background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #FFD700 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '700'
                }}>
                  {translations.about?.missionTitle || "Growth Mindset"}
                </h4>
                <p className="text-gray-700 leading-relaxed text-center">
                  {translations.about?.missionDescription || "We believe in continuous learning and unlearning—embracing curiosity, adaptability, and the freedom to rewrite your narrative."}
                </p>
              </CardContent>
            </Card>

            {/* Worthiness Card */}
            <Card className="bg-white border-2 border-purple-200/60 rounded-3xl shadow-xl shadow-purple-100/50 overflow-hidden relative group hover:shadow-2xl hover:shadow-purple-200/60 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center shadow-lg">
                    <Crown className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <h4 className="text-center text-2xl mb-4" style={{ 
                  background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #FFD700 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '700'
                }}>
                  {translations.about?.visionTitle || "Worthiness"}
                </h4>
                <p className="text-gray-700 leading-relaxed text-center">
                  {translations.about?.visionDescription || "We remind you daily that you are already worthy of love, belonging, and joy, just as you are."}
                </p>
              </CardContent>
            </Card>

            {/* Advocacy Card */}
            <Card className="bg-white border-2 border-purple-200/60 rounded-3xl shadow-xl shadow-purple-100/50 overflow-hidden relative group hover:shadow-2xl hover:shadow-purple-200/60 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center shadow-lg">
                    <Scale className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
                <h4 className="text-center text-2xl mb-4" style={{ 
                  background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #FFD700 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '700'
                }}>
                  {translations.about?.integrityTitle || "Advocacy"}
                </h4>
                <p className="text-gray-700 leading-relaxed text-center">
                  {translations.about?.integrityDescription || "Justice & Democracy We champion constitutional rights, due process, and democratic freedoms, advocating for systemic change and equal protection under the law for every survivor."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}