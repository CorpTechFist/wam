import { Badge } from "./ui/badge";
import { Star, Info } from "lucide-react";
import { useTranslation } from "./TranslationContext";

export function OurProgress() {
  const { translations } = useTranslation();
  return (
    <div className="relative overflow-hidden">
      <section className="py-16 relative overflow-hidden">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-white"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header with modern styling */}
          <div className="text-center mb-16 space-y-6">
              <div className="relative mb-8">
             <h2
  className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-[1.3] pb-2"
  style={{
    background:
      "linear-gradient(135deg, #7c3aed 0%, #a78bfa 25%, #FFD700 50%, #8b5cf6 75%, #7c3aed 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    display: "inline-block",
    paddingBottom: "0.15em", // ✅ prevents g/j clipping
  }}
>
  Programs and Future Projects
</h2>

            </div>
           
            {/* Modern disclaimer card */}
            <div className="max-w-3xl mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-purple-200/50 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
                    boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
                  }}>
                    <Info className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed font-normal flex-1 pt-1">
                    {translations.ourProgress?.disclaimer || "Each program is subject to changes. Each qualified person must be accepted into the program before they receive funds and/or services."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive Grid Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Established Organization Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-purple-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wider text-purple-900 not-italic flex-1 leading-snug">
                      {translations.ourProgress?.established || "FORMALLY ESTABLISHED ORGANIZATION & BOARD OF DIRECTORS"}
                    </h3>
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-medium shrink-0" style={{
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
                      color: 'white',
                      boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
                    }}>
                      {translations.ourProgress?.year2023 || "2023"}
                    </span>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed font-normal">
                    {translations.ourProgress?.establishedDesc || "WAM Alliance formally established in the state of Utah and with this IRS as a 501(c)(3) organization."}
                  </p>
                </div>
              </div>

          

              {/* Talent Recruitment Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-violet-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wider text-violet-900 not-italic flex-1 leading-snug">
                      {translations.ourProgress?.talentRecruitment || "TALENT RECRUITMENT"}
                    </h3>
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-medium shrink-0 bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md">
                      {translations.ourProgress?.talentRecruitmentPeriod || "2024 - Present"}
                    </span>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed font-normal">
                    {translations.ourProgress?.talentRecruitmentDesc || "WAM Will be recruiting talent to assist with social media marketing, as well as donor/sponsorship campaigning."}
                  </p>
                </div>
              </div>

              {/* No Strings Attached Program Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-purple-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wider text-purple-900 not-italic flex-1 leading-snug">
                      {translations.ourProgress?.noStringsProgram || "NO STRINGS ATTACHED PROGRAM"}
                    </h3>
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-medium shrink-0" style={{
                      background: 'linear-gradient(135deg, #A855F7 0%, #6366F1 100%)',
                      color: 'white',
                      boxShadow: '0 4px 12px rgba(168, 85, 247, 0.3)'
                    }}>
                      {translations.ourProgress?.year2024 || "2024"}
                    </span>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed font-normal">
                    {translations.ourProgress?.noStringsProgramDesc || "Program funded solely by donations and grant money, to provide funding for legal documentation, qualified medical costs, application fees, as well as other fees associated with required documentation, medical to secure housing and/or state benefits."}
                  </p>
                </div>
              </div>

             

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}