import { useTranslation } from "../TranslationContext";
import { Button } from "../ui/button";
import { User, ImageIcon } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

import robertImage from '../../assets/board/rob.png';
import tonyaUpdatedImage from '../../assets/board/Tonya.webp';

import wajidUpdatedImage from '../../assets/board/wajid.jpeg';

import DianeJonesImage from '../../assets/testimonials/Diane Jones.png';

import DanielleOrtegaImage from '../../assets/testimonials/DanielleOrtega.jpeg';


interface BoardOfDirectorsPageProps {
  onNavigate: (page: string) => void;
}

export function BoardOfDirectorsPage({ onNavigate }: BoardOfDirectorsPageProps) {
  const { translations } = useTranslation();

  const boardMembers = [
    {
      name: "Tonya Jones Smith",
      title: "President",
      page: "tonya-bio",
      description: "Leading with passion and vision for social change"
    },
    {
      name: "Robert Smith", 
      title: "Vice President/CFO",
      page: "rob-bio",
      description: "Financial stewardship and strategic planning"
    },
    {
      name: "Diane Jones",
      title: "Director/Secretary", 
      page: "diane-bio",
      description: "Organizational excellence and community outreach"
    },
    {
      name: "Danielle Ortega",
      title: "Board of Directors Paralegal",
      page: "danielle-bio", 
      description: "Legal guidance and compliance oversight"
    },
    {
      name: "Wajid Bhat",
      title: "Engineering",
      page: "wajid-bio",
      description: "Technical innovation and digital transformation"
    },
    {
      name: "John Anderson",
      title: "Board Member",
      page: "dummy-bio-2",
      description: "Community advocacy and program development"
    }
  ];

  return (
    <div className="py-12 px-4 relative overflow-hidden bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="py-8 relative overflow-hidden">
            <style>{`
              .board-hero-section {
                background: white;
                border: 1px solid #e5e7eb;
                border-radius: 1rem;
                padding: 2rem 1.5rem;
                margin: 0 auto;
                max-width: 100%;
              }
              
              .board-title {
                color: #374151;
              }
              
              .board-text {
                color: #6b7280;
              }
            `}</style>
            <div className="board-hero-section">
              <div className="max-w-5xl mx-auto">
                {/* Title Section */}
                <div className="text-center mb-8 pb-6 border-b-2 border-gray-200">
                  <h1 className="board-title mb-4 tracking-tight">
                    {translations.boardOfDirectors?.title || "Board of Directors"}
                  </h1>
                  <p className="text-lg board-text leading-relaxed max-w-3xl mx-auto">
                    {translations.boardOfDirectors?.description || "Our certified Board of Directors are driven by the passion to make our world a better place."}
                  </p>
                </div>
                
                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Join Message Card */}
                  <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">Join Our Team</h3>
                        <p className="board-text leading-relaxed text-sm">
                          {translations.boardOfDirectors?.joinMessage || "Join We All Matter Alliance Team by applying through email with your resume and biography."}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Welcome Message Card */}
                  <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">Our Values</h3>
                        <p className="board-text leading-relaxed text-sm">
                          {translations.boardOfDirectors?.welcomeMessage || "We are a welcoming, loving, passionate, and innovative group who believes loving yourself is the beginning to a better world!"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Call to Action Banner */}
                <div className="bg-gradient-to-r from-purple-50 via-white to-purple-50 rounded-lg p-6 text-center border-l-4 border-r-4 border-purple-600 shadow-sm">
                  <p className="board-title tracking-widest uppercase">
                    {translations.hero?.changeMessage || "WE ARE THE CHANGE!"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-15 gap-2">
          
          {/* Tonya Jones Smith Card */}
          <div 
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-up flex flex-col items-center group cursor-pointer lg:col-span-5"
            style={{ animationDelay: '0s' }}
            onClick={() => onNavigate('tonya-bio')}
          >
            {/* Image Container */}
            <div className="mb-4 relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-purple-400 transition-all duration-300 bg-gray-50">
                <ImageWithFallback 
                  src={tonyaUpdatedImage}
                  alt="Tonya Jones Smith professional headshot"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ 
                    objectPosition: 'center center',  
                    transform: 'scale(1.1) translate(0, 0)'
                  }}
                />
              </div>
              {/* Status indicator */}
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            
            {/* Info Section */}
            <div className="text-center space-y-1">
              <h3 className="text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                Tonya Jones Smith
              </h3>
              <p className="text-sm text-gray-600 uppercase tracking-wide">
                President
              </p>
              
              {/* View Profile Link */}
              <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-purple-600 inline-flex items-center gap-1">
                  View Profile
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Robert Smith Card */}
          <div 
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-up flex flex-col items-center group cursor-pointer lg:col-span-5"
            style={{ animationDelay: '0.1s' }}
            onClick={() => onNavigate('rob-bio')}
          >
            {/* Image Container */}
            <div className="mb-4 relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-purple-400 transition-all duration-300 bg-gray-50">
                <ImageWithFallback 
                  src={robertImage}
                  alt="Robert Smith professional headshot"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ 
                    objectPosition: 'center center',
                    transform: 'scale(1.1) translate(0, 0)'
                  }}
                />
              </div>
              {/* Status indicator */}
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            
            {/* Info Section */}
            <div className="text-center space-y-1">
              <h3 className="text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                Robert Smith
              </h3>
              <p className="text-sm text-gray-600 uppercase tracking-wide">
                Vice President/CFO
              </p>
              
              {/* View Profile Link */}
              <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-purple-600 inline-flex items-center gap-1">
                  View Profile
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Diane Jones Card */}
         
<div 
  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-up flex flex-col items-center group cursor-pointer lg:col-span-5"
  style={{ animationDelay: '0.2s' }}
  onClick={() => onNavigate('diane-bio')}
>
  <div className="mb-4 relative">
    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-purple-400 transition-all duration-300 bg-gray-50">
     <ImageWithFallback 
  src={DianeJonesImage}
  alt="Diane Jones professional headshot"
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  style={{ objectPosition: 'center center' }}
/>

    </div>
    <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
  </div>

  <div className="text-center space-y-1">
    <h3 className="text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
      Diane Jones
    </h3>
    <p className="text-sm text-gray-600 uppercase tracking-wide">
      Secretary
    </p>
    <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-xs text-purple-600 inline-flex items-center gap-1">
        View Profile
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  </div>
</div>


          {/* Danielle Ortega Card */}
     <div 
  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-up flex flex-col items-center group cursor-pointer lg:col-span-5"
  style={{ animationDelay: '0.3s' }}
  onClick={() => onNavigate('danielle-bio')}
>
  {/* Image Container */}
  <div className="mb-4 relative">
    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-purple-400 transition-all duration-300 bg-gray-50">
      <ImageWithFallback
        src={DanielleOrtegaImage} // Use the imported image
        alt="Danielle Ortega professional headshot"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        style={{ objectPosition: 'center center' }}
      />
    </div>
    {/* Status indicator */}
    <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
  </div>
  
  {/* Info Section */}
  <div className="text-center space-y-1">
    <h3 className="text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
      Danielle Ortega
    </h3>
    <p className="text-sm text-gray-600 uppercase tracking-wide">
      Board of Directors Paralegal
    </p>
    
    {/* View Profile Link */}
    <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-xs text-purple-600 inline-flex items-center gap-1">
        View Profile
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  </div>
</div>


          {/* Wajid Bhat Card */}
          <div 
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-up flex flex-col items-center group cursor-pointer lg:col-span-5"
            style={{ animationDelay: '0.4s' }}
            onClick={() => onNavigate('wajid-bio')}
          >
            {/* Image Container */}
            <div className="mb-4 relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-purple-400 transition-all duration-300 bg-gray-50">
                <ImageWithFallback 
                  src={wajidUpdatedImage}
                  alt="Wajid Bhat professional headshot"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ 
                    objectPosition: 'center center',
                    transform: 'scale(1.1) translate(0, 0)'
                  }}
                />
              </div>
              {/* Status indicator */}
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            
            {/* Info Section */}
            <div className="text-center space-y-1">
              <h3 className="text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                Wajid Bhat
              </h3>
              <p className="text-sm text-gray-600 uppercase tracking-wide">
                Engineering
              </p>
              
              {/* View Profile Link */}
              <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-purple-600 inline-flex items-center gap-1">
                  View Profile
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

      

        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">

        </div>
      </div>
    </div>
  );
}