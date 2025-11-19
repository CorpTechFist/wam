import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Quote,
  Heart,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useTranslation } from "./TranslationContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Local images
import StaciMike from "../assets/testimonials/Staci_Mike.jpg";
import carter from "../assets/testimonials/carter.png";
import jameyandfamily from "../assets/testimonials/jameyandfamily.png";
import tyrell from "../assets/testimonials/tyArab.jpg";
import jay from "../assets/testimonials/Jay.png";
import mercedes from "../assets/testimonials/mercedes.png";
import seanfromoh from "../assets/testimonials/seanfromoh.png";

export function Testimonials() {
  const { t } = useTranslation();
  const [expandedCards, setExpandedCards] = useState<number[]>(
    [],
  );

  const toggleExpanded = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index],
    );
  };

  const testimonials = [
    {
      name: "Staci & Mike",
      story: t('testimonials.stories.staciMike'),
      type: t('testimonials.type.testimonial'),
    },
    {
      name: "Carter",
      story: t('testimonials.stories.carter'),
      type: t('testimonials.type.testimonial'),
    },
    {
      name: "Jamey & Family",
      story: t('testimonials.stories.jameyFamily'),
      type: t('testimonials.type.successStory'),
    },
    {
      name: "Tyrell",
      story: t('testimonials.stories.tyrell'),
      type: t('testimonials.type.testimonial'),
    },
    {
      name: "Jay",
      story: t('testimonials.stories.jay'),
      type: t('testimonials.type.testimonial'),
    },
    {
      name: "Mercedes",
      story: t('testimonials.stories.mercedes'),
      type: t('testimonials.type.successStory'),
    },
    {
      name: "Sean - from OH",
      story: t('testimonials.stories.seanFromOh'),
      type: t('testimonials.type.testimonial'),
    },
  ];

  const profileImages = [
    StaciMike,
    carter,
    jameyandfamily,
    tyrell,
    jay,
    mercedes,
    seanfromoh,
  ];

  return (
    <section
      id="testimonials"
      className="pt-0 pb-10 relative overflow-hidden border-t border-b border-white"
      style={{ background: "#ffffff" }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="p-8 max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl mb-10"
              style={{
                background:
                  "linear-gradient(135deg, #7c3aed 0%, #a78bfa 25%, #FFD700 50%, #8b5cf6 75%, #7c3aed 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "700",
                letterSpacing: "-0.02em",
              }}
            >
              {t('testimonials.title')}
            </h2>
            <p className="text-sm md:text-base text-black max-w-3xl mx-auto leading-relaxed">
              {t('testimonials.subtitle')}
              <br />
              <span className="text-indigo-600 font-semibold italic text-base">
                {t('testimonials.description')}
              </span>
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const image =
              profileImages[index % profileImages.length];
            const expanded = expandedCards.includes(index);

            return (
              <div
                key={index}
                className={`transition-all duration-500 hover:scale-[1.01] ${
                  index === testimonials.length - 1 &&
                  testimonials.length % 2 !== 0
                    ? "lg:col-span-2 lg:max-w-3xl lg:mx-auto"
                    : ""
                }`}
              >
                <Card className="border border-purple-200 shadow-xl bg-white/90 backdrop-blur-md hover:shadow-2xl hover:border-purple-400 transition-all duration-500">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <Badge
                        variant="secondary"
                        className="bg-gradient-to-r from-purple-100 to-amber-50 text-purple-900 border border-purple-200/50 px-4 py-1.5 text-sm font-semibold capitalize shadow-sm"
                      >
                        {testimonial.type === "testimonial" && (
                          <Heart className="w-4 h-4 mr-2 text-purple-600" />
                        )}
                        {testimonial.type ===
                          "success story" && (
                          <Star className="w-4 h-4 mr-2 text-amber-500" />
                        )}
                        {testimonial.type}
                      </Badge>
                      <Quote className="w-8 h-8 text-purple-300 rotate-180" />
                    </div>

                    {/* Profile */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full blur opacity-60"></div>
                        <ImageWithFallback
                          src={image}
                          alt={testimonial.name}
                          className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-purple-900 text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-purple-600 text-sm font-medium">
                          {t('testimonials.client')}
                        </p>
                      </div>
                    </div>

                    {/* Story */}
                    <div className="mb-6">
                      <blockquote className="text-gray-800 text-base leading-relaxed italic relative">
                        <Quote className="w-5 h-5 text-purple-200 absolute -top-2 -left-2" />
                        <div className="relative z-10 pl-6">
                          <div
                            className={`transition-[max-height] duration-500 ease-in-out overflow-hidden`}
                            style={{
                              maxHeight: expanded
                                ? "1000px"
                                : "100px",
                            }}
                          >
                            <p
                              style={{
                                fontFamily:
                                  "Inter, system-ui, sans-serif",
                              }}
                            >
                              {testimonial.story}
                            </p>
                          </div>
                          {testimonial.story.length > 180 && (
                            <button
                              onClick={() =>
                                toggleExpanded(index)
                              }
                              className="mt-2 text-purple-600 hover:text-purple-800 font-medium text-sm flex items-center gap-1 transition-colors"
                            >
                              {expanded ? (
                                <>
                                  {t('testimonials.readLess')}{" "}
                                  <ChevronUp className="w-4 h-4" />
                                </>
                              ) : (
                                <>
                                  {t('testimonials.readMore')}{" "}
                                  <ChevronDown className="w-4 h-4" />
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </blockquote>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-purple-100 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <div className="text-xs text-purple-500 font-medium">
                          {t('testimonials.verified')}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}