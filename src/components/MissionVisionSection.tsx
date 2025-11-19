import { useState } from "react";
import { useTranslation } from "./TranslationContext";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";

export function MissionVisionSection() {
  const { t } = useTranslation();

  const [showFullMission, setShowFullMission] = useState(false);
  const [showFullVision, setShowFullVision] = useState(false);

  const missionText = t("mission.text");
  const visionText = t("vision.text");

  const paragraphStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: "1.05rem",
    lineHeight: 1.9,
    color: "#374151",
      };

  return (
  <section className="w-full py-16 px-4 md:px-20 space-y-16 md:space-y-32 bg-white">


      {/* ==============================
          GLOBAL HEADER (Sparkles, Title, Tagline)
      =============================== */}
<div className="text-center max-w-4xl mx-auto mb-14 px-4">

  {/* MAIN TITLE */}
  <h1
    className="
      text-4xl 
      md:text-6xl 
      font-extrabold 
      leading-tight 
      bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 
      bg-clip-text 
      text-transparent 
      drop-shadow-sm
    "
    style={{ letterSpacing: "-0.5px" }}
  >
    {t("mission.weAreTheChange")}
  </h1>

  {/* TAGLINE */}
  <p
    className="
      mt-4 
      text-lg 
      md:text-2xl 
      font-semibold 
      tracking-wide 
      bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500 
      bg-clip-text 
      text-transparent 
      drop-shadow 
    "
    style={{ letterSpacing: "0.3px" }}
  >
    {t("mission.tagline")}
  </p>

</div>


      {/* ==============================
          MISSION SECTION
      =============================== */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-gray-10 p-6 md:p-12 shadow-md rounded-xl">


        {/* TEXT LEFT */}
        <div className="pr-8 md:pr-12">
          <h2
            className="text-3xl md:text-4xl font-extrabold mt-3 mb-6"
            style={{ color: "#7c3aed" }}
          >
            {t("mission.ourMission")}
          </h2>

          <p
            style={{
              ...paragraphStyle,
              maxHeight: showFullMission ? "100%" : "10rem",
              overflow: "hidden",

                fontFamily: "Inter, &quot;system-ui&quot;, &quot;sans-serif&quot;; letter-spacing: 0.2px; color: rgb(75, 85, 99); font-size: 1.125rem; font-weight: 500; line-height: 1.8"
             
            }}
          >
            {missionText}
          </p>

          <button
            onClick={() => setShowFullMission(!showFullMission)}
            className="mt-6 flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition"
          >
            {showFullMission ? (
              <>
                {t("mission.showLess")} <ChevronUp size={18} />
              </>
            ) : (
              <>
                {t("mission.readMore")} <ChevronDown size={18} />
              </>
            )}
          </button>
        </div>

        {/* IMAGE RIGHT */}
        <div className="w-full flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?w=900&auto=format&fit=crop&q=60"
            alt="Mission"
            className="w-full max-h-[420px] object-cover rounded-2xl shadow-lg"
          />
        </div>
   </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-gray-10 p-6 md:p-12 shadow-md rounded-xl mt-6">



      {/* ==============================
          VISION SECTION
      =============================== */}
      

        {/* IMAGE LEFT */}
        <div className="w-full flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?w=900&auto=format&fit=crop&q=60"
            alt="Vision"
            className="w-full max-h-[420px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* TEXT RIGHT */}
        <div className="pl-8 md:pl-12">
          <h2
            className="text-3xl md:text-4xl font-extrabold mt-3 mb-6"
            style={{ color: "#7c3aed" }}
          >
            {t("mission.ourVision")}
          </h2>

          <p
            style={{
              ...paragraphStyle,
              maxHeight: showFullVision ? "100%" : "10rem",
              overflow: "hidden",
                fontFamily: "Inter, &quot;system-ui&quot;, &quot;sans-serif&quot;; letter-spacing: 0.2px; color: rgb(75, 85, 99); font-size: 1.125rem; font-weight: 500; line-height: 1.8"
             
            }}
          >
            {visionText}
          </p>

          <button
            onClick={() => setShowFullVision(!showFullVision)}
            className="mt-6 flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition"
          >
            {showFullVision ? (
              <>
                {t("mission.showLess")} <ChevronUp size={18} />
              </>
            ) : (
              <>
                {t("mission.readMore")} <ChevronDown size={18} />
              </>
            )}
          </button>
        </div>
      </div>

    </section>
  );
}
