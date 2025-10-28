import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Quote,
  ChevronDown,
  ChevronUp,
  Sparkles,
  User,
  Mail,
} from "lucide-react";

export function Volunteers() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index],
    );
  };

  const volunteers = [
    {
      name: "Sireen Beseiso",
      title: "Humanitarian Advocate & Community Organizer",
      story:
        "Sireen is a devoted mother, tireless volunteer, and fierce advocate for the people of Gaza and Palestine. Originally from Gaza, she now lives in Utah with her son Aiden and her parents, where she continues her mission to uplift those affected by war, displacement, and humanitarian crisis.\n\nAs a single mother, Sireen balances the demands of parenting with an unwavering commitment to justice. She has helped deliver life-saving aid to families in Gaza and supported those who fled to Egypt, organizing donations, coordinating relief efforts, and raising awareness about the urgent need for ceasefire and compassion.\n\nHer work is deeply personal—rooted in love for her homeland and the people still suffering under siege. Whether she's gathering supplies, speaking out for peace, or building support networks, Sireen leads with empathy, resilience, and purpose.\n\nAt WAM Alliance, Sireen brings lived experience, cultural insight, and a warrior's heart to every initiative. Her presence reminds us that advocacy is not just a cause—it's a calling.",
      role: "Project Coordinator",
      type: "Featured Volunteer",
      email: "aidensroots@gmail.com",
    },
  ];

  return (
    <section
      id="volunteers"
      className="pt-0 pb-8 relative overflow-hidden border-t border-b border-white"
      style={{ background: "#ffffff" }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="p-6 max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl mb-6"
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
              Our Amazing Volunteers
            </h2>
            <p className="text-sm md:text-base text-black max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated volunteers who make WAM Alliance's mission possible!
              <br />
              <span className="text-indigo-600 font-semibold italic text-base">
                These compassionate individuals donate their time, skills, and hearts to help our community thrive.
              </span>
            </p>
          </div>
        </div>

        {/* Featured Volunteer Card */}
        <div className="max-w-3xl mx-auto">
          {volunteers.map((volunteer, index) => {
            const expanded = expandedCards.includes(index);

            return (
              <div
                key={index}
                className="transition-all duration-500 hover:scale-[1.01]"
              >
                <Card className="glass-morphism border-2 border-purple-300 shadow-2xl bg-white/95 backdrop-blur-md hover:shadow-3xl hover:border-purple-500 transition-all duration-500 relative overflow-hidden">
                  {/* Decorative gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-amber-400 to-purple-500"></div>
                  
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge
                        variant="secondary"
                        className="bg-gradient-to-r from-purple-200 to-amber-100 text-purple-900 border-2 border-purple-300/50 px-3 py-1 text-xs font-bold shadow-lg"
                      >
                        <Sparkles className="w-3.5 h-3.5 mr-1 text-purple-600" />
                        {volunteer.type}
                      </Badge>
                      <Quote className="w-7 h-7 text-purple-300 rotate-180" />
                    </div>

                    {/* Profile */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-amber-500 to-purple-500 rounded-full blur opacity-60 animate-pulse"></div>
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 via-amber-400 to-purple-500 flex items-center justify-center border-3 border-white shadow-xl">
                          <User className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-purple-900 text-lg md:text-xl mb-0.5 leading-tight">
                          {volunteer.name}
                        </h3>
                        <p className="text-purple-700 font-semibold text-sm leading-tight">
                          {volunteer.role}
                        </p>
                        <p className="text-purple-600 text-xs font-medium italic mt-0.5">
                          {volunteer.title}
                        </p>
                      </div>
                    </div>

                    {/* Story */}
                    <div className="mb-4">
                      <blockquote className="text-gray-800 text-sm leading-relaxed relative">
                        <Quote className="w-4 h-4 text-purple-200 absolute -top-1.5 -left-1.5" />
                        <div className="relative z-10 pl-5">
                          <div
                            className={`transition-[max-height] duration-500 ease-in-out overflow-hidden`}
                            style={{
                              maxHeight: expanded ? "2000px" : "80px",
                            }}
                          >
                            {volunteer.story.split("\n\n").map((paragraph, i) => (
                              <p key={i} className="mb-2.5 last:mb-0">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                          {volunteer.story.length > 180 && (
                            <button
                              onClick={() => toggleExpanded(index)}
                              className="mt-2 text-purple-600 hover:text-purple-800 font-semibold text-xs flex items-center gap-1 transition-colors group"
                            >
                              {expanded ? (
                                <>
                                  Read Less{" "}
                                  <ChevronUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                                </>
                              ) : (
                                <>
                                  Read More{" "}
                                  <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </blockquote>
                    </div>

                    {/* Footer - Contact Button */}
                    <div className="border-t border-purple-200 pt-3 flex justify-end">
                      <a
                        href={`mailto:${volunteer.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-amber-400 text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg hover:from-purple-600 hover:to-amber-500 transition-all duration-300"
                      >
                        <Mail className="w-4 h-4" />
                        Contact Now
                      </a>
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
