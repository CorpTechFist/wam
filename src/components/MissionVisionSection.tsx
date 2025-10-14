import { useTranslation } from "./TranslationContext";

export function MissionVisionSection() {
  const { translations } = useTranslation();
  
  return (
    <div className="w-full">
      <div className="text-center">
        <div className="glass-morphism pb-16 pt-16 w-full h-full" style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 248, 255, 0.92) 100%)',
          backdropFilter: 'blur(20px)',
          border: '2px solid transparent',
          borderRadius: '0',
          boxShadow: '0 20px 60px rgba(139, 92, 246, 0.25), 0 8px 25px rgba(102, 126, 234, 0.2)',
          marginTop: '0',
          marginBottom: '0',
          marginLeft: '0',
          marginRight: '0',
          paddingBottom: '4rem',
          width: '100%'
        }}>
          {/* Motivational Header Section */}
          <div className="text-center mb-20 pb-16" style={{
            borderBottom: '1px solid rgba(139, 92, 246, 0.35)'
          }}>
            <h2 className="text-3xl mb-16" style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 30%, #6366F1 70%, #818CF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: "'Inter', 'SF Pro Display', 'system-ui', 'sans-serif'",
              letterSpacing: '1px',
              fontWeight: '700',
              textShadow: '0 2px 4px rgba(139, 92, 246, 0.2)'
            }}>
              LEARN TO FORGIVE & LOVE YOURSELF!
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              <p className="text-xl mb-0 px-3" style={{
                color: '#1a202c',
                fontFamily: "'Inter', 'system-ui', 'sans-serif'",
                letterSpacing: '0.5px',
                fontWeight: '600',
                fontStyle: 'italic'
              }}>
                {translations.hero?.changeMessage || "BE the Change!"}
              </p>
              
              <div className="hidden md:block" style={{
                width: '2px',
                height: '30px',
                background: 'linear-gradient(180deg, #8B5CF6 0%, #A78BFA 100%)',
                borderRadius: '1px',
                opacity: '0.7'
              }}></div>
              
              <p className="text-lg mb-0 px-3" style={{
                fontFamily: "'Inter', 'system-ui', 'sans-serif'",
                letterSpacing: '0.3px',
                color: '#1a202c',
                fontWeight: '500'
              }}>
                {translations.hero?.freedomMessage || "We are active advocates for FREEDOM and JUSTICE for ALL!"}
              </p>
            </div>
          </div>

          {/* Mission and Vision Section */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch px-8">
            {/* Mission Section */}
            <div className="flex flex-col h-full">
              <div className="md:pr-8">
                <h2 className="text-2xl mb-8 text-center" style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6366F1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: "'Lora', 'Georgia', 'serif'",
                  letterSpacing: '0.8px',
                  fontWeight: '700',
                  textShadow: '0 2px 4px rgba(139, 92, 246, 0.2)'
                }}>
                  Our Mission
                </h2>

                <div className="space-y-4">
                  <p className="mb-0" style={{
                    fontFamily: "'Inter', 'system-ui', 'sans-serif'",
                    fontWeight: '500',
                    letterSpacing: '0.3px',
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    color: '#1a202c',
                    textAlign: 'justify',
                    hyphens: 'auto'
                  }}>
                    {translations.hero?.missionDescription || "At We All Matter Alliance, every board member has walked through deep wounds and emerged into the light. We draw on our lived experience to fuel compassion, empathy, and unwavering dedication. We uplift every soul who reaches out by providing practical tools, heartfelt support, and a community that holds you up. Our goal is to move you from barely surviving to fully thriving—one step, one story, one triumph at a time. We are also active defenders of constitutional protections, due process, and democratic principles, ensuring every survivor's rights are honored and upheld."}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Vertical Divider - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2" style={{
              transform: 'translateX(-50%)',
              width: '3px',
              top: '15%',
              bottom: '15%',
              background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.3) 0%, rgba(255, 215, 0, 0.5) 25%, rgba(167, 139, 250, 0.4) 50%, rgba(255, 215, 0, 0.5) 75%, rgba(139, 92, 246, 0.3) 100%)',
              boxShadow: '0 0 12px rgba(139, 92, 246, 0.4), 0 0 24px rgba(255, 215, 0, 0.2)',
              borderRadius: '2px'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.9) 0%, rgba(139, 92, 246, 0.8) 100%)',
                border: '2px solid rgba(255, 255, 255, 0.9)',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(255, 215, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.5)'
              }}></div>
            </div>

            {/* Vision Section */}
            <div className="flex flex-col h-full">
              <div className="md:pl-8">
                <h2 className="text-2xl mb-8 text-center" style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6366F1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: "'Lora', 'Georgia', 'serif'",
                  letterSpacing: '0.8px',
                  fontWeight: '700',
                  textShadow: '0 2px 4px rgba(139, 92, 246, 0.2)'
                }}>
                  Our Vision
                </h2>

                <div className="space-y-4">
                  <p className="mb-0" style={{
                    fontFamily: "'Inter', 'system-ui', 'sans-serif'",
                    fontWeight: '500',
                    letterSpacing: '0.3px',
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    color: '#1a202c',
                    textAlign: 'justify',
                    hyphens: 'auto'
                  }}>
                    {translations.hero?.visionDescription || "We envision a world where trauma survivors feel seen, heard, and equipped to heal themselves. We champion understanding of the many paths to recovery—from peer support circles and holistic practices to evidence-based therapies. We provide resources, support, skills, and training to suicide loss survivors, trauma survivors, LGBTQa2s+ individuals, and those wrongfully accused. By broadening awareness and knowledge, we ignite hope, spark transformation, and nurture a culture of enduring resilience, civic engagement, and justice for all."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
