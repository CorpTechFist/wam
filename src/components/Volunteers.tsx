import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Quote,
  ChevronDown,
  ChevronUp,
  Star,
  User,
  Mail,
  Sparkles,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Local images (replace with your own volunteer images if available)
import sireen from "../assets/icons/sireen.jpg";
 import leeann from "../assets/icons/Leeann.jpeg";
import Anika from "../assets/icons/Anika.jpeg";

export function Volunteers() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
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
      image: sireen,
    },
    {
      name: "Leeann Hymas",
      title: "Project Volunteer & Community Builder",
      story:
        "Born in Hawaii and raised across the globe, Leeann Hymas grew up in a military family that instilled in her the values of discipline, service, and community. Constant relocation gave her a deep appreciation for diverse cultures and the importance of showing up for others—no matter where you are.\n\nThough Leeann once dreamed of joining the military herself, she faced barriers as an LGBTQAI2S individual from a young age. Rather than let that stop her, she chose to live with the same integrity and commitment to service that she admired in those around her.\n\nHer life has become a testament to quiet strength, personal growth, and unwavering support for those in need. Leeann brings a rich background in food service and security to her volunteer work, along with a creative spirit expressed through art, video, and gaming.\n\nHer hands-on approach and compassionate presence make her a vital part of the We All Matter Alliance team. Whether helping at events, supporting outreach, or simply listening with empathy, Leeann lives as if she had served—and in many ways, she has. Her journey reminds us that service isn’t defined by uniforms—it’s defined by heart.",
      role: "Project Coordinator",
      type: "Featured Volunteer",
      email: "",
      image: leeann,
    },
    {
      name: "Anika Curtis",
      title: "Creative Volunteer & Community Advocate",
      story:
        "Anika Curtis is a passionate artist and dedicated volunteer whose creativity is rooted in healing and purpose. Born in California and shaped by experiences across multiple states, Anika ultimately found her home in Utah—where she chose to be closer to family and step into her calling as an advocate for those whose voices often go unheard.\n\nFor Anika, art is more than expression—it’s liberation. She uses painting, design, and mixed media as a way to process emotion, release stress, and transform personal experiences into something tangible and uplifting.\n\nHer work reflects a deep sensitivity to the struggles of others and a fierce commitment to justice, empathy, and inclusion. As a volunteer with We All Matter Alliance, Anika brings her creative gifts into every project she touches.\n\nWhether helping with outreach materials, supporting community events, or simply showing up with compassion and care, she embodies the spirit of service through artistry. Her presence reminds us that healing isn’t just about systems—it’s about connection, color, and courage.",
      role: "Project Coordinator",
      type: "Featured Volunteer",
      email: "",
      image: Anika,
    },
  ];

  return (
    <section
      id="volunteers"
      className="pt-0 pb-10 relative overflow-hidden border-t border-b border-white"
      style={{ background: "#ffffff" }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
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

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {volunteers.map((volunteer, index) => {
            const expanded = expandedCards.includes(index);
            return (
              <div
                key={index}
                className="transition-all duration-500 hover:scale-[1.01]"
              >
                <Card className=" shadow-xl bg-white/90 backdrop-blur-md hover:shadow-2xl hover:border-purple-400 transition-all duration-500">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <Badge
                        variant="secondary"
                        className="bg-gradient-to-r from-purple-100 to-amber-50 text-purple-900 border border-purple-200/50 px-4 py-1.5 text-sm font-semibold capitalize shadow-sm"
                      >
                        <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
                        {volunteer.type}
                      </Badge>
                      <Quote className="w-8 h-8 text-purple-300 rotate-180" />
                    </div>

                    {/* Profile */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full blur opacity-60"></div>
                        <ImageWithFallback
                          src={volunteer.image}
                          alt={volunteer.name}
                          className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-purple-900 text-lg">
                          {volunteer.name}
                        </h3>
                        <p className="text-purple-600 text-sm font-medium">{volunteer.role}</p>
                        <p className="text-purple-500 text-xs italic">{volunteer.title}</p>
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
                              maxHeight: expanded ? "1000px" : "100px",
                            }}
                          >
                            {volunteer.story.split("\n\n").map((p, i) => (
                              <p key={i} className="mb-2 last:mb-0">
                                {p}
                              </p>
                            ))}
                          </div>
                          {volunteer.story.length > 200 && (
                            <button
                              onClick={() => toggleExpanded(index)}
                              className="mt-2 text-purple-600 hover:text-purple-800 font-medium text-sm flex items-center gap-1 transition-colors"
                            >
                              {expanded ? (
                                <>
                                  Read Less <ChevronUp className="w-4 h-4" />
                                </>
                              ) : (
                                <>
                                  Read More <ChevronDown className="w-4 h-4" />
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </blockquote>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-purple-100 pt-4 mt-auto flex justify-between items-center">
                     

                      {volunteer.email && (
                        <a
                          href={`mailto:${volunteer.email}`}
                          className="flex items-center gap-2 text-purple-600 hover:text-purple-800 text-sm font-medium"
                        >
                          <Mail className="w-4 h-4" /> Contact
                        </a>
                      )}
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
