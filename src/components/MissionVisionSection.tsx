
import { useState } from "react";
import { useTranslation } from "./TranslationContext";
import { ChevronDown, ChevronUp } from "lucide-react";

export function MissionVisionSection() {
  const { language, t } = useTranslation();

  const [showFullMission, setShowFullMission] = useState(false);
  const [showFullVision, setShowFullVision] = useState(false);

  const missionText = t('mission.text');
  const visionText = t('vision.text');

  const paragraphStyle = {
    fontFamily: "'Inter', 'system-ui', 'sans-serif'",
    fontWeight: 500,
    letterSpacing: "0.3px",
    fontSize: "1rem",
    lineHeight: 1.8,
    color: "#111827",
    textAlign: "justify" as const,
    hyphens: "auto" as const,
    marginBottom: "1rem",
  };

  const gradientButtonStyle = {
    background:
      "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 40%, #6366F1 80%, #A78BFA 100%)",
    color: "white",
    border: "none",
    borderRadius: "9999px",
    padding: "8px 16px",
    fontSize: "0.9rem",
    fontWeight: 600,
    letterSpacing: "0.5px",
    cursor: "pointer",
    boxShadow:
      "0 4px 15px rgba(139, 92, 246, 0.25), 0 2px 6px rgba(99, 102, 241, 0.2)",
    transition: "all 0.3s ease",
  };

  const hoverStyle = {
    transform: "translateY(-2px)",
    boxShadow:
      "0 6px 20px rgba(139, 92, 246, 0.35), 0 3px 8px rgba(99, 102, 241, 0.25)",
  };

  return (
    <div className="w-full">
      <div className="text-center">
        <div
          className=" w-full py-16 px-6 md:px-16"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 248, 255, 0.92) 100%)",
            backdropFilter: "blur(20px)",
            borderRadius: "12px",
            boxShadow:
              "0 20px 60px rgba(241, 239, 244, 0.25), 0 8px 25px rgba(244, 246, 251, 0.2)",
          }}
        >
          {/* Header */}
          <div
            className="text-center mb-15 pb-16"
            style={{
              borderBottom:
                "1px solid rgba(246, 245, 248, 0.35)",
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              <h2
                className="text-xl mb-0 px-3 bold font-semibold"
                style={{
                  background:
                    "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 30%, #6366F1 70%, #818CF8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "0.8px",
                  fontWeight: "700",
                }}
              >
                {t('mission.weAreTheChange')}
              </h2>
              <div
                className="hidden md:block"
                style={{
                  width: "2px",
                  height: "30px",
                  background:
                    "linear-gradient(180deg, #8B5CF6 0%, #A78BFA 100%)",
                  opacity: "0.7",
                }}
              ></div>
              <h2
                className="text-lg mb-0 px-3"
                style={{
                  background:
                    "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 30%, #6366F1 70%, #818CF8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "0.8px",
                  fontWeight: "700",
                }}
              >
                {t('mission.tagline')}
              </h2>
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* Mission */}
            <div className="flex flex-col relative md:pr-8">
              <h2
                className="text-2xl mb-8 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6366F1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "'Lora', 'Georgia', 'serif'",
                  fontWeight: "700",
                }}
              >
                {t('mission.ourMission')}
              </h2>

              <p
                style={{
                  ...paragraphStyle,
                  maxHeight: showFullMission ? "100%" : "12rem",
                  overflow: "hidden",
                  transition: "max-height 0.5s ease",
                }}
              >
                {missionText}
              </p>

              <button
                onClick={() =>
                  setShowFullMission(!showFullMission)
                }
                onMouseEnter={(e) =>
                  Object.assign(
                    e.currentTarget.style,
                    hoverStyle,
                  )
                }
                onMouseLeave={(e) =>
                  Object.assign(
                    e.currentTarget.style,
                    gradientButtonStyle,
                  )
                }
                style={gradientButtonStyle}
                className="mx-auto flex items-center gap-2 mt-2"
              >
                {showFullMission ? (
                  <>
                    {t('mission.showLess')} <ChevronUp size={18} />
                  </>
                ) : (
                  <>
                    {t('mission.readMore')} <ChevronDown size={18} />
                  </>
                )}
              </button>
            </div>

            {/* Divider */}
            <div
              className="hidden md:block absolute left-1/2"
              style={{
                transform: "translateX(-50%)",
                width: "3px",
                top: "15%",
                bottom: "15%",
                background:
                  "linear-gradient(180deg, rgba(139, 92, 246, 0.3) 0%, rgba(255, 215, 0, 0.5) 50%, rgba(139, 92, 246, 0.3) 100%)",
                borderRadius: "2px",
              }}
            ></div>

            {/* Vision */}
            <div className="flex flex-col relative md:pl-8">
              <h2
                className="text-2xl mb-8 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6366F1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "'Lora', 'Georgia', 'serif'",
                  fontWeight: "700",
                }}
              >
                {t('mission.ourVision')}
              </h2>

              <p
                style={{
                  ...paragraphStyle,
                  maxHeight: showFullVision ? "100%" : "12rem",
                  overflow: "hidden",
                  transition: "max-height 0.5s ease",
                }}
              >
                {visionText}
              </p>

              <button
                onClick={() =>
                  setShowFullVision(!showFullVision)
                }
                onMouseEnter={(e) =>
                  Object.assign(
                    e.currentTarget.style,
                    hoverStyle,
                  )
                }
                onMouseLeave={(e) =>
                  Object.assign(
                    e.currentTarget.style,
                    gradientButtonStyle,
                  )
                }
                style={gradientButtonStyle}
                className="mx-auto flex items-center gap-2 mt-2"
              >
                {showFullVision ? (
                  <>
                    {t('mission.showLess')} <ChevronUp size={18} />
                  </>
                ) : (
                  <>
                    {t('mission.readMore')} <ChevronDown size={18} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}