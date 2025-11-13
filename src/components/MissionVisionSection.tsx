import { useState } from "react";
import { useTranslation } from "./TranslationContext";
import { ChevronDown, ChevronUp } from "lucide-react";

export function MissionVisionSection() {
  const { translations } = useTranslation();

  const [showFullMission, setShowFullMission] = useState(false);
  const [showFullVision, setShowFullVision] = useState(false);

  const missionText =
    translations.hero?.missionDescription?.length > 50
      ? translations.hero.missionDescription
      : `At We All Matter Alliance, we believe that every soul—no matter their story—deserves dignity, healing, and a chance to thrive.

Born from lived experience and boundless compassion, our mission is to walk beside those navigating the shadows of suicide loss, trauma, domestic violence, injustice, and systemic marginalization. We serve individuals and families who are unhoused, low-income, court-ordered for community service, or silenced by circumstance—offering not just resources, but refuge.

Through legal advocacy, trauma-informed support, and practical tools for rebuilding, we create pathways to empowerment. And in partnership with TechFistGlobal.com, we extend our reach through intelligent automation and accessible digital services—bridging the gap between need and opportunity with innovation and care.

We are defenders of justice, champions of equity, and architects of change. From surviving to thriving, we walk with our community—one step, one story, one triumph at a time.

Because at We All Matter Alliance, healing isn’t just possible—it’s sacred.

WE ARE THE CHANGE!`;

  const visionText =
    translations.hero?.visionDescription?.length > 50
      ? translations.hero.visionDescription
      : `We envision a world where trauma survivors feel seen, heard, and equipped to heal themselves. We champion understanding of the many paths to recovery—from peer support circles and holistic practices to evidence-based therapies. We provide resources, support, skills, and training to suicide loss survivors, trauma survivors, LGBTQa2s+ individuals, and those wrongfully accused. By broadening awareness and knowledge, we ignite hope, spark transformation, and nurture a culture of enduring resilience, civic engagement, and justice for all.`;

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
            style={{ borderBottom: "1px solid rgba(246, 245, 248, 0.35)" }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              <h2
                className="text-xl mb-0 px-3 italic font-semibold"
                style={{
                  background:
                    "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 30%, #6366F1 70%, #818CF8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "0.8px",
                  fontWeight: "700",
                }}
              >
                We Are The Change!
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
                Elevating lives, advocates for humanity and FREEDOM for ALL
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
                Our Mission
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
                onClick={() => setShowFullMission(!showFullMission)}
                onMouseEnter={(e) =>
                  Object.assign(e.currentTarget.style, hoverStyle)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.currentTarget.style, gradientButtonStyle)
                }
                style={gradientButtonStyle}
                className="mx-auto flex items-center gap-2 mt-2"
              >
                {showFullMission ? (
                  <>
                    Show Less <ChevronUp size={18} />
                  </>
                ) : (
                  <>
                    Read More <ChevronDown size={18} />
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
                Our Vision
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
                onClick={() => setShowFullVision(!showFullVision)}
                onMouseEnter={(e) =>
                  Object.assign(e.currentTarget.style, hoverStyle)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.currentTarget.style, gradientButtonStyle)
                }
                style={gradientButtonStyle}
                className="mx-auto flex items-center gap-2 mt-2"
              >
                {showFullVision ? (
                  <>
                    Show Less <ChevronUp size={18} />
                  </>
                ) : (
                  <>
                    Read More <ChevronDown size={18} />
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
