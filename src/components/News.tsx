import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Quote, Heart, Star, ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "./TranslationContext";
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import local testimonial images
import StaciMike from '../assets/testimonials/Staci_Mike.jpg';
import carter from '../assets/testimonials/carter.png';
import jameyandfamily from '../assets/testimonials/jameyandfamily.png';
import tyrell from '../assets/testimonials/tyArab.jpg';
import jay from '../assets/testimonials/Jay.png';
import mercedes from '../assets/testimonials/mercedes.png';
import seanfromoh from '../assets/testimonials/seanfromoh.png';
import user8 from '../assets/testimonials/Staci_Mike.jpg';

export function News() {
  const { translations } = useTranslation();
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const testimonials = [
    {
      name: "Staci & Mike",
      story: "My name is Staci & my life partner Mike. We want to express a huge appreciation to the founder of WAM (Tonya)...",
      type: "testimonial"
    },
    {
      name: "Carter",
      story: "I'm blessed to have met Tonya, the founder of WAM, back in 2010...",
      type: "testimonial"
    },
    {
      name: "Jamey & Family",
      story: "Jamey is a resident of SLC and a loyal advocate for the unhoused and underprivileged...",
      type: "success story"
    },
    {
      name: "Tyrell",
      story: "I am Ty, WAM found me during 2020, at 17 years old, on the streets...",
      type: "testimonial"
    },
    {
      name: "Jay",
      story: "I am Jay, I am a recovering addict and suicide survivor...",
      type: "testimonial"
    },
    {
      name: "Mercedes",
      story: "Mercedes was a young girl in a youth shelter being treated poorly...",
      type: "success story"
    },
    {
      name: "Sean - from OH",
      story: "WAM found me in a graveyard in OH one afternoon. I was not well...",
      type: "testimonial"
    }
  ];

  // Array of local images for testimonials
  const profileImages = [StaciMike, carter, jameyandfamily, tyrell, jay, mercedes, seanfromoh, user8];

  return (
    <section
      id="testimonials"
      className="pt-0 pb-5 relative overflow-hidden border-t border-b border-light border-opacity-50"
      style={{ background: '#FFFFFF' }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="p-8 max-w-4xl mx-auto text-center">
            <h2 className="text-lg md:text-xl font-bold mb-10" style={{ fontFamily: 'Georgia, serif', color: '#581c87' }}>
              {translations.news?.title || "Testimonials & Success Stories"}
            </h2>
            <p className="text-sm md:text-base text-black max-w-3xl mx-auto leading-relaxed">
              {translations.news?.subtitle || "These are just some of the people WAM has helped journey from barely surviving to thriving!"}<br />
              <span className="text-indigo-600 font-semibold italic text-base">
                {translations.news?.description || "We help by providing love, support, and resources to those in need, with real results and without abandonment."}
              </span>
            </p>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid lg:grid-cols-2 gap-8 -mt-16 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const image = profileImages[index % profileImages.length]; // cycle through images
            return (
              <div key={index} className={`group transition-all duration-700 hover:scale-[1.02] ${
                index === testimonials.length - 1 && testimonials.length % 2 !== 0 ? 'lg:col-span-2 lg:max-w-3xl lg:mx-auto' : ''
              }`}>
                <Card className="glass-morphism glass-shine h-full overflow-hidden border-0 shadow-2xl">
                  <CardContent className="p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <Badge 
                        variant="secondary" 
                        className="bg-gradient-to-r from-purple-100 to-amber-50 text-purple-900 border border-purple-200/50 px-4 py-1.5 text-sm font-semibold capitalize shadow-sm"
                      >
                        {testimonial.type === "testimonial" && <Heart className="w-4 h-4 mr-2" />}
                        {testimonial.type === "success story" && <Star className="w-4 h-4 mr-2" />}
                        {testimonial.type}
                      </Badge>
                      <Quote className="w-8 h-8 text-purple-300 rotate-180" />
                    </div>

                    {/* Profile */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full blur-sm opacity-70"></div>
                        <ImageWithFallback
                          src={image}
                          alt={testimonial.name}
                          className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-purple-900 text-lg">{testimonial.name}</h3>
                        <p className="text-purple-600 text-sm font-medium">WAM Alliance Client</p>
                      </div>
                    </div>

                    {/* Story */}
                    <div className="flex-1 mb-6">
                      <blockquote className="text-gray-700 leading-relaxed text-sm italic relative">
                        <Quote className="w-6 h-6 text-purple-200 absolute -top-2 -left-2" />
                        <div className="relative z-10 pl-4">
                          <p className={`transition-all duration-300 ${!expandedCards.includes(index) ? 'line-clamp-4' : ''}`}>
                            {testimonial.story}
                          </p>
                          {testimonial.story.length > 200 && (
                            <button
                              onClick={() => toggleExpanded(index)}
                              className="mt-2 text-purple-600 hover:text-purple-800 font-medium text-xs transition-colors duration-200 flex items-center gap-1"
                            >
                              {expandedCards.includes(index) ? (
                                <>
                                  Read Less <ChevronUp className="w-3 h-3" />
                                </>
                              ) : (
                                <>
                                  Read More <ChevronDown className="w-3 h-3" />
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
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <div className="text-xs text-purple-500 font-medium">
                          Verified Impact Story
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
