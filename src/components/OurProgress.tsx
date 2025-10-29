import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Star, Info } from "lucide-react";
import { useTranslation } from "./TranslationContext";

export function OurProgress() {
  const { translations } = useTranslation();
  const [showFullAiden, setShowFullAiden] = useState(false);

  const aidenFullText =
    "Aiden's Roots is a humanitarian initiative led by Palestinian American advocate Sireen Hamdi Beseiso, under the umbrella of WAM Alliance. Named in honor of her son, Aiden, this project is rooted in compassion, resilience, and the urgent call to support displaced and injured Palestinians—especially children and families affected by war. Born from lived experience and a survivor's heart, Aiden's Roots provides direct aid to those in crisis, including food, clean water, shelter, clothing, medical treatment, and educational support. Over the past two years, Sireen has helped coordinate the evacuation of injured children from Gaza to Egypt and the United States, working with organizations like PCRF and Heal Palestine to secure visas, transportation, and life-saving care. Through Aiden's Roots, Sireen has helped deliver tents, parcels, and safe housing to families who fled with nothing. She's personally assisted in the evacuation and treatment of her cousins Sara and Ahd—both severely injured—ensuring they received urgent medical attention in New York, South Carolina, and Colorado. This project is more than aid—it's advocacy. Aiden's Roots calls for ceasefire, healing, and global solidarity. It mobilizes volunteers, amplifies survivor stories, and builds bridges between communities in Utah, Egypt, and Gaza. At its core, Aiden's Roots is a mother's mission to protect, uplift, and never forget. It's a lifeline for those who remain and a beacon for those who've fled.";

  const aidenShortText =
    "Aiden's Roots is a humanitarian initiative led by Palestinian American advocate Sireen Hamdi Beseiso, under the umbrella of WAM Alliance. Named in honor of her son, Aiden, this project is rooted in compassion, resilience, and the urgent call to support displaced and injured Palestinians—especially children and families affected by war.";

  return (
    <div className="relative overflow-hidden">
      <section className="py-16 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-white"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
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
                  paddingBottom: "0.15em",
                }}
              >
                Programs and Future Projects
              </h2>
            </div>

            {/* Disclaimer */}
            <div className="max-w-3xl mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-purple-200/50 shadow-lg">
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
                      boxShadow:
                        "0 4px 12px rgba(139, 92, 246, 0.3)",
                    }}
                  >
                    <Info className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed font-normal flex-1 pt-1 text-justify">
                    {translations.ourProgress?.disclaimer ||
                      "Each program is subject to changes. Each qualified person must be accepted into the program before they receive funds and/or services."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Program Cards */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Established Organization */}
            <Card
              title={
                translations.ourProgress?.established ||
                "FORMALLY ESTABLISHED ORGANIZATION & BOARD OF DIRECTORS"
              }
              year={
                translations.ourProgress?.year2023 || "2023"
              }
              desc={
                translations.ourProgress?.establishedDesc ||
                "WAM Alliance formally established in the state of Utah and with the IRS as a 501(c)(3) organization."
              }
            />

            {/* Talent Recruitment */}
            <Card
              title={
                translations.ourProgress?.talentRecruitment ||
                "TALENT RECRUITMENT"
              }
              year={
                translations.ourProgress
                  ?.talentRecruitmentPeriod || "2024 - Present"
              }
              desc={
                translations.ourProgress
                  ?.talentRecruitmentDesc ||
                "WAM will be recruiting talent to assist with social media marketing, as well as donor/sponsorship campaigning."
              }
            />

            {/* No Strings Attached Program */}
            <Card
              title={
                translations.ourProgress?.noStringsProgram ||
                "NO STRINGS ATTACHED PROGRAM"
              }
              year={
                translations.ourProgress?.year2024 || "2024"
              }
              desc={
                translations.ourProgress
                  ?.noStringsProgramDesc ||
                "Program funded solely by donations and grant money, to provide funding for legal documentation, qualified medical costs, application fees, as well as other fees associated with required documentation, medical to secure housing and/or state benefits."
              }
            />

            {/* Techfist Sponsor */}
            <Card
              title={
                "Techfist Global Inc - A Proud Sponsor of WAM Alliance"
              }
              year={
                translations.ourProgress?.year2024 || "2024"
              }
              desc={
                "Techfist Global stands as a proud sponsor and technological partner of WAM Alliance. Providing advanced digital solutions, strategic design, and scalable systems to amplify impact across global networks, bridging innovation with purpose to inspire sustainability, inclusion, and collective growth."
              }
            />

            {/* Aiden's Roots */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-purple-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wider text-purple-900 flex-1 leading-snug">
                    Aiden's Roots - A Project of WAM Alliance
                  </h3>
                  <span
                    className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-medium"
                    style={{
                      background:
                        "linear-gradient(135deg, #A855F7 0%, #6366F1 100%)",
                      color: "white",
                      boxShadow:
                        "0 4px 12px rgba(168, 85, 247, 0.3)",
                    }}
                  >
                    {translations.ourProgress?.year2024 ||
                      "2024"}
                  </span>
                </div>

                <p className="text-base text-gray-700 leading-relaxed font-normal text-justify">
                  {showFullAiden
                    ? aidenFullText
                    : aidenShortText}
                </p>
                <button
                  onClick={() =>
                    setShowFullAiden(!showFullAiden)
                  }
                  className="mt-4 text-purple-600 font-medium hover:text-purple-800 transition-all duration-300"
                >
                  {showFullAiden
                    ? "Read Less ↑"
                    : "Read More ↓"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ✅ Reusable Card Component */
function Card({
  title,
  year,
  desc,
}: {
  title: string;
  year: string;
  desc: string;
}) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
      <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-purple-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wider text-purple-900 flex-1 leading-snug text-justify">
            {title}
          </h3>
          <span
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-medium shrink-0"
            style={{
              background:
                "linear-gradient(135deg, #A855F7 0%, #6366F1 100%)",
              color: "white",
              boxShadow: "0 4px 12px rgba(168, 85, 247, 0.3)",
            }}
          >
            {year}
          </span>
        </div>

        <p className="text-base text-gray-700 leading-relaxed font-normal text-justify">
          {desc}
        </p>
      </div>
    </div>
  );
}
