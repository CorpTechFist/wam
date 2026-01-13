import React, { useState } from "react";
import { Info } from "lucide-react";
import { useTranslation } from "./TranslationContext";

export function ProgramsandProjects() {
  const { t } = useTranslation();
  const [showFullAden, setShowFullAden] = useState(false);
  const [showFullTechfist, setShowFullTechfist] = useState(false);
  const [showFullCommunity, setShowFullCommunity] = useState(false);
  const donateLabel = t("ourProgress.donateButton");
  const learnMoreLabel = "Learn More";

  const handleDonateClick = () => {
    window.dispatchEvent(new CustomEvent("navigate", { detail: "cash-donations" }));
  };

  const handleVolunteerClick = () => {
    window.dispatchEvent(new CustomEvent("navigate", { detail: "volunteer-application" }));
  };

  const AdenFullText =
    "Aden's Roots is a humanitarian initiative led by Palestinian American advocate Sireen Hamdi Beseiso, under the umbrella of WAM Alliance. Named in honor of her son, Aden, this project is rooted in compassion, resilience, and the urgent call to support displaced and injured Palestinians—especially children and families affected by war. Born from lived experience and a survivor's heart, Aden's Roots provides direct aid to those in crisis, including food, clean water, shelter, clothing, medical treatment, and educational support. Over the past two years, Sireen has helped coordinate the evacuation of injured children from Gaza to Egypt and the United States, working with organizations like PCRF and Heal Palestine to secure visas, transportation, and life-saving care. Through Aden's Roots, Sireen has helped deliver tents, parcels, and safe housing to families who fled with nothing. She's personally assisted in the evacuation and treatment of her cousins Sara and Ahd—both severely injured—ensuring they received urgent medical attention in New York, South Carolina, and Colorado. This project is more than aid—it's advocacy. Aden's Roots calls for ceasefire, healing, and global solidarity. It mobilizes volunteers, amplifies survivor stories, and builds bridges between communities in Utah, Egypt, and Gaza. At its core, Aden's Roots is a mother's mission to protect, uplift, and never forget. It's a lifeline for those who remain and a beacon for those who've fled.";

  const AdenShortText =
    "Aden's Roots is a humanitarian initiative led by Palestinian American advocate Sireen Hamdi Beseiso, under the umbrella of WAM Alliance. Named in honor of her son, Aden, this project is rooted in compassion, resilience, and the urgent call to support displaced and injured Palestinians—especially children and families affected by war.";
  const techfistFullText = t("ourProgress.techfistDesc");
  const techfistShortText = `${techfistFullText.split(". ")[0]}.`;
  const communityFullText =
    "This program is a lifeline for individuals and families who are unhoused, struggling, or simply trying to survive another day. Once a month in Salt Lake City, we open our arms—and our resources—to anyone in need of clothing, food, and basic essentials. What begins as a simple distribution becomes something far more powerful: connection, compassion, and the reminder that every person deserves dignity. This program is fueled entirely by the generosity of people who believe in humanity. Donors and sponsors make it possible for us to provide the items that matter most in moments of crisis: clean clothing, nourishing food, warm coats, sturdy shoes, sleeping bags, water, finger foods, and sanitary wipes. These essentials are more than supplies—they are hope, comfort, and survival. Your support helps us show up, month after month, for those who have been overlooked or forgotten. Together, we can ensure that no one in our community faces hardship alone.";
  const communityShortText = `${communityFullText.split(". ")[0]}.`;

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
                className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight pb-2 font-bold tracking-tight text-violet-700"
                style={{ WebkitTextFillColor: "#7c3aed" }}
              >
                 {t('ourProgress.title')}
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
                      boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)",
                    }}
                  >
                    <Info className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed font-normal flex-1 pt-1 text-justify">
                    {t("ourProgress.disclaimer") ||
                      "Each program is subject to changes. Each qualified person must be accepted into the program before they receive funds and/or services."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Program Cards Grid - Fixed Height Isolation */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <Card
              title= { t("ourProgress.established") ||"FORMALLY ESTABLISHED NON PROFIT ORGANIZATION"}
              desc={  t("ourProgress.establishedDesc") ||"We All Matter Alliance was formally established in the state of Utah and registered as a 501(c)(3) with the IRS."}
              onDonate={handleVolunteerClick}
              donateLabel={learnMoreLabel}
            />
            <Card
              title={t('ourProgress.techfistTitle')}
              desc={techfistFullText}
              shortDesc={techfistShortText}
              isExpandable
              isExpanded={showFullTechfist}
              onToggle={() => setShowFullTechfist(!showFullTechfist)}
              onDonate={handleDonateClick}
              donateLabel={donateLabel}
            />
            <Card
              title="COMMUNITY DRIVE PROGRAM"
              desc={communityFullText}
              shortDesc={communityShortText}
              isExpandable
              isExpanded={showFullCommunity}
              onToggle={() => setShowFullCommunity(!showFullCommunity)}
            />
            <Card
              title={ t("ourProgress.noStringsProgram") ||"NO STRINGS ATTACHED PROGRAM"}
              desc= {t("ourProgress.noStringsProgramDesc") ||"This program is funded solely by donations and grant support and provides Emergency Essentials — including utility assistance, gas cards, and train/bus passes — as well as direct financial help for legal documentation, qualified medical costs, application fees, and other necessary expenses associated with securing required documents, medical evaluations, housing, and access to state benefits; all assistance is delivered with dignity and no obligation to recipients."}
              onDonate={handleDonateClick}
              donateLabel={donateLabel}
            />
            {/* Left Card - CSW */}
            <div className="self-start">
              <Card
                  title={t('ourProgress.cswTitle')}
                desc={t('ourProgress.cswDesc')}
                onDonate={handleDonateClick}
                donateLabel={donateLabel}
              />
            </div>

            {/* Right Card - Aden's Roots Program */}
            <div className="self-start">
              <div className="group relative transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-purple-200/50 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wider text-purple-900 flex-1 leading-snug">
                      {t('ourProgress.adenRootsTitle')}
                    </h3>
                  </div>

                  {/* ✅ Smooth Expand - Without Affecting Neighbor */}
                  <div
                    className="overflow-hidden transition-[max-height] duration-700 ease-in-out"
                    style={{
                      maxHeight: showFullAden ? "1200px" : "140px",
                    }}
                  >
                    <p className="text-base text-gray-700 leading-relaxed font-normal text-justify">
                     {t('ourProgress.adenRootsFull')}
                    </p>
                  </div>

                  <button
                    onClick={() => setShowFullAden(!showFullAden)}
                    className="mt-4 text-purple-600 font-medium hover:text-purple-800 transition-all duration-300"
                  >
                    {showFullAden ? t('ourProgress.readLess')
                      : t('ourProgress.readMore')}
                  </button>

                  <div className="mt-6">
                    <button
                      onClick={handleDonateClick}
                      className="inline-flex items-center justify-center px-6 py-2 rounded-full text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
                        border: "1px solid rgba(99, 102, 241, 0.3)",
                      }}
                    >
                      {donateLabel}
                    </button>
                  </div>
                </div>
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
  shortDesc,
  isExpandable,
  isExpanded,
  onToggle,
  onDonate,
  donateLabel,
}: {
  title: string;
  year?: string;
  desc: string;
  shortDesc?: string;
  isExpandable?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
  onDonate?: () => void;
  donateLabel?: string;
}) {
  const { t } = useTranslation();
  return (
    <div className="group relative transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
      <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-purple-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wider text-purple-900 flex-1 leading-snug text-justify">
            {title}
          </h3>
          {year ? (
            <span
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-medium shrink-0"
              style={{
                background: "linear-gradient(135deg, #A855F7 0%, #6366F1 100%)",
                color: "white",
                boxShadow: "0 4px 12px rgba(168, 85, 247, 0.3)",
              }}
            >
              {year}
            </span>
          ) : null}
        </div>
        {isExpandable ? (
          <>
            <div
              className="overflow-hidden transition-[max-height] duration-700 ease-in-out"
              style={{
                maxHeight: isExpanded ? "1200px" : "140px",
              }}
            >
              <p className="text-base text-gray-700 leading-relaxed font-normal text-justify">
                {isExpanded || !shortDesc ? desc : shortDesc}
              </p>
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={onToggle}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onToggle?.();
                }
              }}
              className="mt-4 text-purple-600 font-medium hover:text-purple-800 transition-all duration-300"
            >
              {isExpanded ? t('ourProgress.readLess') : t('ourProgress.readMore')}
            </div>
          </>
        ) : (
          <p className="text-base text-gray-700 leading-relaxed font-normal text-justify">
            {desc}
          </p>
        )}
        {onDonate && donateLabel && (
          <div className="mt-6">
            <button
              onClick={onDonate}
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
                border: "1px solid rgba(99, 102, 241, 0.3)",
              }}
            >
              {donateLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
