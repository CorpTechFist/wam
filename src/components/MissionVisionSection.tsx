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
    textAlign: "justify",
  };

  return (
    <section className="w-full py-20 px-6 md:px-20 space-y-32 bg-white">

      {/* ==============================
          GLOBAL HEADER (Sparkles, Title, Tagline)
      =============================== */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        

        <h1
  className="text-6xl md:text-xl mt-6 mb-4 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 bg-clip-text text-transparent font-extrabold"
>
  {t("mission.weAreTheChange")}
</h1>


        <p className="text-gray-600 text-xl bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 bg-clip-text text-transparent font-extrabold">
          {t("mission.tagline")}
        </p>
      </div>

      {/* ==============================
          MISSION SECTION
      =============================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center bg-gray-50 p-12 shadow-md rounded-xl">

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
<div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center bg-gray-50 p-12 shadow-md rounded-xl"

 style={{ marginTop: "20px" }}>


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
