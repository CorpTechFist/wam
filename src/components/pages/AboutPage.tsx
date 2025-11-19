import { About } from "../About";
import { useTranslation } from "../TranslationContext";

export function AboutPage() {
  const { t } = useTranslation();
  
  try {
    return (
      <main className="py-8 relative overflow-hidden bg-white" style={{ backgroundColor: '#ffffff' }}>
        <div>
          <About />
        </div>
        
        {/* JOIN THE MOVEMENT Section */}
        <div className="container mx-auto px-4 mt-12 pt-8">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-10/12 xl:w-8/12">
              <div className="relative">
                <div className="bg-white border-2 border-purple-200/60 rounded-3xl shadow-2xl shadow-purple-200/60 overflow-hidden relative group hover:shadow-3xl hover:shadow-purple-300/70 transition-all duration-300 p-12 md:p-16">
                  {/* Top gradient accent line */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 via-yellow-400 to-purple-500"></div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-purple-400/10 to-yellow-400/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-8 right-8 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Icon badge */}
                    <div className="flex justify-center mb-8">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-yellow-100 flex items-center justify-center shadow-xl shadow-purple-200/50 border-2 border-purple-200/60">
                        <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Main heading with gradient */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8" style={{ 
                      background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 25%, #FFD700 50%, #8b5cf6 75%, #7c3aed 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '700',
                      letterSpacing: '0.02em'
                    }}>
                      {t('aboutPage.joinMovement')}
                    </h2>
                    
                    {/* Decorative separator */}
                    <div className="flex justify-center gap-2 mb-8">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg shadow-purple-300"></div>
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-300"></div>
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg shadow-purple-300"></div>
                    </div>
                    
                    {/* Description text */}
                    <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
                      {t('aboutPage.movementDescription')}
                    </p>
                    
                    {/* Call to action badge */}
                    <div className="mt-10 flex justify-center">
                      <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-50 to-yellow-50 border-2 border-purple-200/60 rounded-full shadow-lg">
                        <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-purple-700" style={{ fontWeight: '600', letterSpacing: '0.05em' }}>
                          {t('aboutPage.beTheChange')}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom gradient accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 via-yellow-400 to-purple-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Board of Directors Button Section */}
        <div className="container mx-auto px-4 mt-12 pt-8 mb-8">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-6/12 xl:w-4/12">
              <div className="text-center">
                <button 
                  onClick={() => {
                    const event = new CustomEvent('navigate', { detail: 'board-of-directors' });
                    window.dispatchEvent(event);
                  }}
                  className="bg-purple-500 text-white px-8 py-4 rounded-full shadow-sm uppercase font-bold border-0 text-lg"
                  style={{
                    letterSpacing: '1px',
                    fontSize: '1rem',
                    backgroundColor: '#8b5cf6',
                    borderColor: '#8b5cf6'
                  }}
                >
                  BOARD OF DIRECTORS
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("AboutPage render error:", error);
    return (
      <main>
        <div className="pt-24 text-center">
          <h1>Loading About...</h1>
        </div>
      </main>
    );
  }
}