import React from "react";
import { useTranslation } from "./TranslationContext";
import {
  Heart,
  Users,
  Star,
  Shield,
  ArrowRight,
} from "lucide-react";
import { MissionVisionSection } from "./MissionVisionSection";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import inspirationalImage from "../assets/0171452568de81e96062980d7275744de3cb58d1.png";
import professionalInspirationImage from "../assets/1745a03711af08d8d076fb7f1ba38a35a613b46a.png";
import wamLogo from "../assets/logo/logo.png";
import newWamLogo from "../assets/20dbb544fb86c05707443f40e892c6190ad0bdf2.png";

import rupeeMoneyBag from "../assets/testimonials/rupee-money-bag.png";
import volunteersHeart from "../assets/testimonials/e94c6b67a088ca39f05bf8d83c9ed01bf20c3ed8.png";
import donationJarHeart from "../assets/testimonials/50652cac7f0e51cd0cb4b7f95cd3f83dea7ad73f.png";
import partnerHandshake from "../assets/testimonials/5c9b6ed20c02c9c67cc93d7e56e0ca0e05f88fa0.png";
import asianBusinessmanPayment from "../assets/testimonials/d81f7c6638e6dd3e1ff2dc3e01f08e1c79c15c2e.png";

export function Hero() {
  const { translations, t } = useTranslation();

  const handleNavigation = (route: string) => {
    window.dispatchEvent(
      new CustomEvent("navigate", { detail: route }),
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 255, 0.95) 100%)",
        paddingTop: "0px",
        paddingBottom: "0px",
      }}
    >
      <div className="w-full">
        <div className="flex flex-wrap justify-center">
          <div className="w-full bg-[rgb(255,255,255)]">
            {/* Combined Mission, Vision & Motivational Section */}

            {/* Main Header - Integrated Banner */}
            <div className="mb-12 bg-[rgb(255,255,255)]">
              {/* WAM Alliance Professional Full-Width Banner */}

              {/* Three Card Grid - Mission & Vision Side by Side */}
              <div className="w-full">
                {/* Mission and Vision Cards - Side by Side */}

                {/* Learn to Forgive & Love Yourself - No Card */}
                <MissionVisionSection />
              </div>

              {/* Need Help Section with Side Buttons */}
              <div className="flex justify-center mb-20">
                {/* Professional Crisis Support Card */}
                <div
                  className=" py-10 px-10 w-full"
                  style={{
                    backdropFilter: "blur(25px)",
                    boxShadow:
                      "0 0px 0px rgba(162, 129, 247, 0.12), 0 15px 35px rgba(244, 244, 244, 0.02), 0 8px 20px rgba(236, 237, 247, 0.11)",
                    borderRadius: "0px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/* Decorative gradient accent */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                    }}
                  ></div>

                  {/* Professional Header with Icon */}
                  <div className="text-center mb-8">
                    <div className="flex justify-center items-center gap-3 mb-5">
                   
                      <h2
                        className="text-3xl mb-0"
                        style={{
                          background:
                            "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6366F1 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          fontFamily:
                            "'Inter', 'SF Pro Display', 'system-ui', 'sans-serif'",
                          letterSpacing: "0.5px",
                          fontWeight: "800",
                        }}
                      >
                        {t('hero.standWithYou')}
                      </h2>
                    </div>

                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 xl:w-7/12">
                        <p
                          className="mb-0"
                          style={{
                            fontFamily:
                              "'Inter', 'system-ui', 'sans-serif'",
                            fontWeight: "500",
                            fontSize: "1.1rem",
                            lineHeight: "1.65",
                            color: "#4B5563",
                            textAlign: "center",
                          }}
                        >
                          {t('hero.supportMessage')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Inspirational Cards */}
                  <div className="flex flex-wrap gap-6 justify-center mb-8 px-4">
                    {/* Don't Give Up Card */}
                    <div className="w-full md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
                      <div
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 255, 0.95) 100%)",
                          borderRadius: "20px",
                          overflow: "hidden",
                          border:
                            "1px solid rgba(244, 242, 247, 0.15)",
                          boxShadow:
                            "0 8px 24px rgba(243, 240, 248, 0.12), 0 4px 12px rgba(99, 102, 241, 0.08)",
                          transition:
                            "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          height: "100%",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(-8px)";
                          e.currentTarget.style.boxShadow =
                            "0 20px 40px rgba(139, 92, 246, 0.2), 0 12px 24px rgba(99, 102, 241, 0.15)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(0)";
                          e.currentTarget.style.boxShadow =
                            "0 8px 24px rgba(139, 92, 246, 0.12), 0 4px 12px rgba(99, 102, 241, 0.08)";
                        }}
                      >
                        <div
                          className="relative"
                          style={{
                            height: "200px",
                            overflow: "hidden",
                          }}
                        >
                          <ImageWithFallback
                            src="https://media.istockphoto.com/id/509855920/photo/dont-give-up.jpg?s=612x612&w=0&k=20&c=HmCoCPpykkJDT07JNTe3xPIuH70L9-C7wgVICruNaHM="
                            alt="Don't Give Up"
                            className="w-full h-full"
                            style={{ objectFit: "cover" }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              inset: 0,
                              background:
                                "linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.05) 100%)",
                            }}
                          ></div>
                        </div>
                        <div className="p-6 text-center">
                          <h3
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              color: "#1e293b",
                              fontSize: "1.5rem",
                              letterSpacing: "-0.01em",
                              fontWeight: "700",
                              marginBottom: "0",
                            }}
                          >
                            {t('hero.dontGiveUp')}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* You Are Not Alone Card */}
                    <div className="w-full md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
                      <div
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 255, 0.95) 100%)",
                          borderRadius: "20px",
                          overflow: "hidden",
                          border:
                            "1px solid rgba(139, 92, 246, 0.15)",
                          boxShadow:
                            "0 8px 24px rgba(139, 92, 246, 0.12), 0 4px 12px rgba(99, 102, 241, 0.08)",
                          transition:
                            "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          height: "100%",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(-8px)";
                          e.currentTarget.style.boxShadow =
                            "0 20px 40px rgba(139, 92, 246, 0.2), 0 12px 24px rgba(99, 102, 241, 0.15)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(0)";
                          e.currentTarget.style.boxShadow =
                            "0 8px 24px rgba(139, 92, 246, 0.12), 0 4px 12px rgba(99, 102, 241, 0.08)";
                        }}
                      >
                        <div
                          className="relative"
                          style={{
                            height: "200px",
                            overflow: "hidden",
                          }}
                        >
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1589732559738-0b1fa45ca085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzdXBwb3J0JTIwdG9nZXRoZXIlMjBub3QlMjBhbG9uZXxlbnwxfHx8fDE3NTk5NDg0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="You Are Not Alone"
                            className="w-full h-full"
                            style={{ objectFit: "cover" }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              inset: 0,
                              background:
                                "linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.05) 100%)",
                            }}
                          ></div>
                        </div>
                        <div className="p-6 text-center">
                          <h3
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              color: "#1e293b",
                              fontSize: "1.5rem",
                              letterSpacing: "-0.01em",
                              fontWeight: "700",
                              marginBottom: "0",
                            }}
                          >
                            {t('hero.notAlone')}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* You Matter Card */}
                    <div className="w-full md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
                      <div
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 255, 0.95) 100%)",
                          borderRadius: "20px",
                          overflow: "hidden",
                          border:
                            "1px solid rgba(139, 92, 246, 0.15)",
                          boxShadow:
                            "0 8px 24px rgba(139, 92, 246, 0.12), 0 4px 12px rgba(99, 102, 241, 0.08)",
                          transition:
                            "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          height: "100%",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(-8px)";
                          e.currentTarget.style.boxShadow =
                            "0 20px 40px rgba(139, 92, 246, 0.2), 0 12px 24px rgba(99, 102, 241, 0.15)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(0)";
                          e.currentTarget.style.boxShadow =
                            "0 8px 24px rgba(139, 92, 246, 0.12), 0 4px 12px rgba(99, 102, 241, 0.08)";
                        }}
                      >
                        <div
                          className="relative"
                          style={{
                            height: "200px",
                            overflow: "hidden",
                          }}
                        >
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1576031620050-4e0f4eef36eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3UlMjBtYXR0ZXIlMjBzZWxmJTIwd29ydGglMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NTk5NDg0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="You Matter"
                            className="w-full h-full"
                            style={{ objectFit: "cover" }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              inset: 0,
                              background:
                                "linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.05) 100%)",
                            }}
                          ></div>
                        </div>
                        <div className="p-6 text-center">
                          <h3
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              color: "#1e293b",
                              fontSize: "1.5rem",
                              letterSpacing: "-0.01em",
                              fontWeight: "700",
                              marginBottom: "0",
                            }}
                          >
                            {t('hero.youMatter')}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Call-to-Action */}
                  <div className="text-center">
                    <div className="flex flex-wrap justify-center gap-4">
                      <button
                        className="bg-purple-600 border-purple-400 text-white px-8 py-4 flex items-center gap-2"
                        style={{
                          border: "none",
                          color: "white",
                          fontFamily:
                            "'Inter', 'system-ui', 'sans-serif'",
                          fontSize: "0.95rem",
                          fontWeight: "600",
                          letterSpacing: "0.3px",
                          borderRadius: "14px",
                          position: "relative",
                          overflow: "hidden",

                          cursor: "pointer",
                          transition:
                            "transform 0.2s ease, box-shadow 0.2s ease",
                        }}
                        onClick={() =>
                          handleNavigation("need-help-now")
                        }
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(-2px)";
                          e.currentTarget.style.boxShadow =
                            "0 16px 40px rgba(139, 92, 246, 0.4), 0 8px 20px rgba(99, 102, 241, 0.3)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(0)";
                          e.currentTarget.style.boxShadow =
                            "0 12px 30px rgba(139, 92, 246, 0.35), 0 6px 15px rgba(99, 102, 241, 0.25)";
                        }}
                      >
                        <Shield className="w-5 h-5" />
                        <span>{t('hero.getSupport')}</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Trust indicators */}
                    <div
                      className="flex flex-wrap justify-center items-center gap-6 mt-6"
                      style={{
                        borderTop:
                          "1px solid rgba(139, 92, 246, 0.15)",
                        paddingTop: "20px",
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background: "#10B981",
                            boxShadow:
                              "0 0 10px rgba(16, 185, 129, 0.5)",
                          }}
                        ></div>
                        <span
                          style={{
                            fontFamily:
                              "'Inter', 'system-ui', 'sans-serif'",
                            fontSize: "0.875rem",
                            color: "#6B7280",
                            fontWeight: "500",
                          }}
                        >
                          {t('hero.available247')}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-purple-600" />
                        <span
                          style={{
                            fontFamily:
                              "'Inter', 'system-ui', 'sans-serif'",
                            fontSize: "0.875rem",
                            color: "#6B7280",
                            fontWeight: "500",
                          }}
                        >
                          {t('hero.confidential')}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-purple-600" />
                        <span
                          style={{
                            fontFamily:
                              "'Inter', 'system-ui', 'sans-serif'",
                            fontSize: "0.875rem",
                            color: "#6B7280",
                            fontWeight: "500",
                          }}
                        >
                          {t('hero.compassionateCare')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Promise Section */}
              <div className="mb-0">
                <div className="px-8 py-1 mx-auto max-w-7xl">
                  {/* Title Section with decorative elements */}
                  <div className="text-center mb-12 relative">
                    {
                      <div className="inline-flex items-center justify-center mb-6">
                        <div
                          style={{
                            width: "40px",
                            height: "2px",
                            background:
                              "linear-gradient(90deg, transparent 0%, #8B5CF6 100%)",
                            marginRight: "16px",
                          }}
                        ></div>
                        <Star
                          className="w-6 h-6"
                          style={{ color: "#8B5CF6" }}
                        />
                        <div
                          style={{
                            width: "40px",
                            height: "2px",
                            background:
                              "linear-gradient(90deg, #8B5CF6 0%, transparent 100%)",
                            marginLeft: "16px",
                          }}
                        ></div>
                      </div>
                    }

                    <h2
                      className="mb-0"
                      style={{
                        fontFamily:
                          "'Inter', 'SF Pro Display', 'system-ui', 'sans-serif'",
                        letterSpacing: "0.5px",
                        background:
                          "linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #7C3AED 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        fontSize: "2.5rem",
                        fontWeight: "700",
                        lineHeight: "1.2",
                      }}
                    >
                      {t('hero.ourPromise')}
                    </h2>
                  </div>

                  {/* Promise Text */}
                  <div className="text-center mb-16">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 xl:w-8/12">
                        <p
                          className="mb-0"
                          style={{
                            fontFamily:
                              "'Inter', 'system-ui', 'sans-serif'",
                            letterSpacing: "0.2px",
                            color: "#4B5563",
                            fontSize: "1.125rem",
                            fontWeight: "500",
                            lineHeight: "1.8",
                          }}
                        >
                          {t('hero.promiseText')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Cards */}
                  {/* First Row - 3 Cards */}
                  <div className="flex flex-wrap gap-8 justify-center mb-8">
                    {/* Donate Card */}
                    <div className="w-full lg:w-[calc(33.333%-1.5rem)] md:w-[calc(50%-1rem)] sm:w-full">
                      <div
                        className="bg-white h-full cursor-pointer group"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 255, 0.95) 100%)",
                          borderRadius: "20px",
                          cursor: "pointer",
                          transition:
                            "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          aspectRatio: "1",
                          height: "auto",
                          border:
                            "1px solid rgba(139, 92, 246, 0.15)",
                          boxShadow:
                            "0 8px 24px rgba(139, 92, 246, 0.12), 0 4px 12px rgba(99, 102, 241, 0.08)",
                          overflow: "hidden",
                        }}
                        onClick={() =>
                          handleNavigation("cash-donations")
                        }
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(-8px) scale(1.02)";
                          e.currentTarget.style.boxShadow =
                            "0 20px 40px rgba(139, 92, 246, 0.2), 0 12px 24px rgba(99, 102, 241, 0.15)";
                          e.currentTarget.style.borderColor =
                            "rgba(139, 92, 246, 0.3)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 8px 24px rgba(139, 92, 246, 0.12), 0 4px 12px rgba(99, 102, 241, 0.08)";
                          e.currentTarget.style.borderColor =
                            "rgba(139, 92, 246, 0.15)";
                        }}
                      >
                        <div className="flex flex-col h-full">
                          <div className="flex-grow relative overflow-hidden">
                            <ImageWithFallback
                              src={rupeeMoneyBag}
                              alt="Donation Charity Giving"
                              className="w-full h-full"
                              style={{
                                objectFit: "cover",
                                transition:
                                  "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                inset: 0,
                                background:
                                  "linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.05) 100%)",
                              }}
                            ></div>
                          </div>
                          <div
                            className="p-5"
                            style={{
                              borderTop:
                                "1px solid rgba(139, 92, 246, 0.1)",
                            }}
                          >
                            <h5
                              className="mb-1"
                              style={{
                                fontFamily:
                                  "'Inter', sans-serif",
                                color: "#1e293b",
                                fontSize: "1.125rem",
                                letterSpacing: "-0.01em",
                                fontWeight: "600",
                              }}
                            >
                              {t('hero.card.donate.title')}
                            </h5>
                            <p
                              className="mb-0"
                              style={{
                                fontSize: "0.875rem",
                                color: "#64748b",
                                lineHeight: "1.5",
                                fontWeight: "500",
                              }}
                            >
                              {t('hero.card.donate.subtitle')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Volunteer Card */}
                    <div className="w-full lg:w-[calc(33.333%-1.5rem)] md:w-[calc(50%-1rem)] sm:w-full">
                      <div
                        className="bg-white h-full cursor-pointer group"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 255, 0.95) 100%)",
                          borderRadius: "20px",
                          cursor: "pointer",
                          transition:
                            "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          aspectRatio: "1",
                          height: "auto",
                          border:
                            "1px solid rgba(139, 92, 246, 0.15)",
                          boxShadow:
                            "0 8px 24px rgba(139, 92, 246, 0.12), 0 4px 12px rgba(99, 102, 241, 0.08)",
                          overflow: "hidden",
                        }}
                        onClick={() =>
                          handleNavigation("volunteer")
                        }
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(-8px) scale(1.02)";
                          e.currentTarget.style.boxShadow =
                            "0 20px 40px rgba(139, 92, 246, 0.2), 0 12px 24px rgba(99, 102, 241, 0.15)";
                          e.currentTarget.style.borderColor =
                            "rgba(139, 92, 246, 0.3)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 8px 24px rgba(139, 92, 246, 0.12), 0 4px 12px rgba(99, 102, 241, 0.08)";
                          e.currentTarget.style.borderColor =
                            "rgba(139, 92, 246, 0.15)";
                        }}
                      >
                        <div className="flex flex-col h-full">
                          <div className="flex-grow relative overflow-hidden">
                            <ImageWithFallback
                              src="https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwZG9uYXRpbmclMjBjaGFyaXR5JTIwdm9sdW50ZWVyJTIwY29tbXVuaXR5fGVufDF8fHx8MTc1OTk0ODE4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                              alt="Volunteer Helping Hands Community Service"
                              className="w-full h-full"
                              style={{
                                objectFit: "cover",
                                transition:
                                  "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                inset: 0,
                                background:
                                  "linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.05) 100%)",
                              }}
                            ></div>
                          </div>
                          <div
                            className="p-5"
                            style={{
                              borderTop:
                                "1px solid rgba(139, 92, 246, 0.1)",
                            }}
                          >
                            <h5
                              className="mb-1"
                              style={{
                                fontFamily:
                                  "'Inter', sans-serif",
                                color: "#1e293b",
                                fontSize: "1.125rem",
                                letterSpacing: "-0.01em",
                                fontWeight: "600",
                              }}
                            >
                              {t('hero.card.volunteer.title')}
                            </h5>
                            <p
                              className="mb-0"
                              style={{
                                fontSize: "0.875rem",
                                color: "#64748b",
                                lineHeight: "1.5",
                                fontWeight: "500",
                              }}
                            >
                              {t('hero.card.volunteer.subtitle')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Clothing & Food Supplies Card */}
                    <div className="w-full lg:w-[calc(33.333%-1.5rem)] md:w-[calc(50%-1rem)] sm:w-full">
                      <div
                        className="bg-white h-full cursor-pointer group"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 255, 0.95) 100%)",
                          borderRadius: "20px",
                          cursor: "pointer",
                          transition:
                            "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          aspectRatio: "1",
                          height: "auto",
                          border:
                            "1px solid rgba(139, 92, 246, 0.15)",
                          boxShadow:
                            "0 8px 24px rgba(139, 92, 246, 0.12), 0 4px 12px rgba(99, 102, 241, 0.08)",
                          overflow: "hidden",
                        }}
                        onClick={() =>
                          handleNavigation("other-donations")
                        }
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(-8px) scale(1.02)";
                          e.currentTarget.style.boxShadow =
                            "0 20px 40px rgba(139, 92, 246, 0.2), 0 12px 24px rgba(99, 102, 241, 0.15)";
                          e.currentTarget.style.borderColor =
                            "rgba(139, 92, 246, 0.3)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 8px 24px rgba(139, 92, 246, 0.12), 0 4px 12px rgba(99, 102, 241, 0.08)";
                          e.currentTarget.style.borderColor =
                            "rgba(139, 92, 246, 0.15)";
                        }}
                      >
                        <div className="flex flex-col h-full">
                          <div className="flex-grow relative overflow-hidden">
                            <ImageWithFallback
                              src="https://images.unsplash.com/photo-1705579609365-5e0b857bd038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNoZWNraW5nJTIwbGlzdCUyMGRvbmF0ZWQlMjBjbG90aGVzJTIwY2hhcml0eSUyMHBhY2tpbmclMjBib3hlc3xlbnwxfHx8fDE3NTk5NDY0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                              alt="Clothing & Food Supplies Donation"
                              className="w-full h-full"
                              style={{
                                objectFit: "cover",
                                transition:
                                  "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                inset: 0,
                                background:
                                  "linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.02) 100%)",
                              }}
                            ></div>
                          </div>
                          <div
                            className="p-5"
                            style={{
                              borderTop:
                                "1px solid rgba(139, 92, 246, 0.1)",
                            }}
                          >
                            <h5
                              className="mb-1"
                              style={{
                                fontFamily:
                                  "'Inter', sans-serif",
                                color: "#1e293b",
                                fontSize: "1.125rem",
                                letterSpacing: "-0.01em",
                                fontWeight: "600",
                              }}
                            >
                              {t('hero.card.clothing.title')}
                            </h5>
                            <p
                              className="mb-0"
                              style={{
                                fontSize: "0.875rem",
                                color: "#64748b",
                                lineHeight: "1.5",
                                fontWeight: "500",
                              }}
                            >
                              {t('hero.card.clothing.subtitle')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Second Row - 2 Cards */}
                  <div className="flex flex-wrap gap-8 justify-center">
                    {/* Sponsors Card */}
                    <div className="w-full lg:w-[calc(33.333%-1.5rem)] md:w-[calc(50%-1rem)] sm:w-full">
                      <div
                        className="bg-white h-full cursor-pointer group"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 255, 0.95) 100%)",
                          borderRadius: "20px",
                          cursor: "pointer",
                          transition:
                            "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          aspectRatio: "1",
                          height: "auto",
                          border:
                            "1px solid rgba(139, 92, 246, 0.15)",
                          boxShadow:
                            "0 8px 24px rgba(139, 92, 246, 0.12), 0 4px 12px rgba(99, 102, 241, 0.08)",
                          overflow: "hidden",
                        }}
                        onClick={() =>
                          handleNavigation(
                            "trusted-partners",
                          )
                        }
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(-8px) scale(1.02)";
                          e.currentTarget.style.boxShadow =
                            "0 20px 40px rgba(139, 92, 246, 0.2), 0 12px 24px rgba(99, 102, 241, 0.15)";
                          e.currentTarget.style.borderColor =
                            "rgba(139, 92, 246, 0.3)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 8px 24px rgba(139, 92, 246, 0.12), 0 4px 12px rgba(99, 102, 241, 0.08)";
                          e.currentTarget.style.borderColor =
                            "rgba(139, 92, 246, 0.15)";
                        }}
                      >
                        <div className="flex flex-col h-full">
                          <div className="flex-grow relative overflow-hidden">
                            <ImageWithFallback
                              src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbGxhYm9yYXRpb24lMjBwYXJ0bmVyc2hpcCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTk5NDc5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                              alt="Business Partnership Collaboration"
                              className="w-full h-full"
                              style={{
                                objectFit: "cover",
                                transition:
                                  "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                inset: 0,
                                background:
                                  "linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.05) 100%)",
                              }}
                            ></div>
                          </div>
                          <div
                            className="p-5"
                            style={{
                              borderTop:
                                "1px solid rgba(139, 92, 246, 0.1)",
                            }}
                          >
                            <h5
                              className="mb-1"
                              style={{
                                fontFamily:
                                  "'Inter', sans-serif",
                                color: "#1e293b",
                                fontSize: "1.125rem",
                                letterSpacing: "-0.01em",
                                fontWeight: "600",
                              }}
                            >
                              {t('hero.card.resources.title')}
                            </h5>
                            <p
                              className="mb-0"
                              style={{
                                fontSize: "0.875rem",
                                color: "#64748b",
                                lineHeight: "1.5",
                                fontWeight: "500",
                              }}
                            >
                              {t('hero.card.resources.subtitle')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Donors Card */}
                    <div className="w-full lg:w-[calc(33.333%-1.5rem)] md:w-[calc(50%-1rem)] sm:w-full">
                      <div
                        className="bg-white h-full cursor-pointer group"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 255, 0.95) 100%)",
                          borderRadius: "20px",
                          cursor: "pointer",
                          transition:
                            "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          aspectRatio: "1",
                          height: "auto",
                          border:
                            "1px solid rgba(139, 92, 246, 0.15)",
                          boxShadow:
                            "0 8px 24px rgba(139, 92, 246, 0.12), 0 4px 12px rgba(99, 102, 241, 0.08)",
                          overflow: "hidden",
                        }}
                        onClick={() =>
                          handleNavigation("personal-donors")
                        }
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(-8px) scale(1.02)";
                          e.currentTarget.style.boxShadow =
                            "0 20px 40px rgba(139, 92, 246, 0.2), 0 12px 24px rgba(99, 102, 241, 0.15)";
                          e.currentTarget.style.borderColor =
                            "rgba(139, 92, 246, 0.3)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 8px 24px rgba(139, 92, 246, 0.12), 0 4px 12px rgba(99, 102, 241, 0.08)";
                          e.currentTarget.style.borderColor =
                            "rgba(139, 92, 246, 0.15)";
                        }}
                      >
                        <div className="flex flex-col h-full">
                          <div className="flex-grow relative overflow-hidden">
                            <ImageWithFallback
                              src=" https://images.unsplash.com/photo-1745962979027-c5e51183cf40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=900"
                              className="w-full h-full"
                              style={{
                                objectFit: "cover",
                                transition:
                                  "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                inset: 0,
                                background:
                                  "linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.05) 100%)",
                              }}
                            ></div>
                          </div>
                          <div
                            className="p-5"
                            style={{
                              borderTop:
                                "1px solid rgba(139, 92, 246, 0.1)",
                            }}
                          >
                            <h5
                              className="mb-1"
                              style={{
                                fontFamily:
                                  "'Inter', sans-serif",
                                color: "#1e293b",
                                fontSize: "1.125rem",
                                letterSpacing: "-0.01em",
                                fontWeight: "600",
                              }}
                            >
                              {t('hero.card.donors.title')}
                            </h5>
                            <p
                              className="mb-0"
                              style={{
                                fontSize: "0.875rem",
                                color: "#64748b",
                                lineHeight: "1.5",
                                fontWeight: "500",
                              }}
                            >
                              {t('hero.card.donors.subtitle')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant Decorative Elements */}
          <div className="absolute top-20 left-10 opacity-10 pointer-events-none">
            <div
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            ></div>
          </div>

          <div className="absolute bottom-20 right-10 opacity-10 pointer-events-none">
            <div
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
                filter: "blur(50px)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}