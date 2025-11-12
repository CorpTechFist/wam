import { useTranslation } from "../TranslationContext";
import { ImageIcon } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

import TonyaImage from "../../assets/board/Tonya.webp";
import RobertImage from "../../assets/board/rob.png";
import DianeImage from "../../assets/board/Diane.JPEG";
import DanielleImage from "../../assets/testimonials/DanielleOrtega.jpeg";
import WajidImage from "../../assets/board/wajid.jpeg";

interface BoardOfDirectorsPageProps {
  onNavigate?: (section: string) => void;
}

export function BoardOfDirectorsPage({ onNavigate }: BoardOfDirectorsPageProps) {
  const { translations } = useTranslation();

  const members = [
    {
      name: "Tonya Jones Smith",
      title: "President",
      image: TonyaImage,
      bioId: "tonya-bio",
    },
    {
      name: "Robert Smith",
      title: "Vice President / CFO",
      image: RobertImage,
      bioId: "rob-bio",
    },
    {
      name: "Diane Jones",
      title: "Secretary",
      image: DianeImage,
      bioId: "diane-bio",
    },
    {
      name: "Danielle Ortega",
      title: "Board of Directors Paralegal",
      image: DanielleImage,
      bioId: "danielle-bio",
    },
    {
      name: "Wajid Bhat",
      title: "Engineering",
      image: WajidImage,
      bioId: "wajid-bio",
    },
  ];

  return (
    <div className="py-16 px-4 bg-white text-gray-800">
      <div className="container mx-auto max-w-6xl text-center">

        {/* Title */}
          <h1
  className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight pb-2 font-bold tracking-tight text-violet-700"
  style={{ WebkitTextFillColor: "#7c3aed" }}
>
          Board of Directors
        </h1>

        {/* Decorative dots */}
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600"></div>
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-500"></div>
        </div>

        {/* Intro Text */}
        <div className="max-w-3xl mx-auto mb-12 text-justify text-lg text-gray-600 leading-relaxed space-y-6">
          <p>
            Our certified Board of Directors are driven by the passion to make our world a better place.
          </p>
          <p>
            Join We All Matter Alliance Team by applying through email with your resume and biography.
          </p>
          <p>
            We are a welcoming, loving, passionate, and innovative group who believes loving yourself
            is the beginning to a better world!
          </p>
          <p>
            WE ARE THE CHANGE!
          </p>
        </div>

        {/* CTA Button */}
        <div
          onClick={() => onNavigate?.("contact-us")}
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-4 px-10 text-center font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer mb-16"
        >
          Be the Change!
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {members.map((member, index) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => onNavigate?.(member.bioId)}
            >
              {/* Image */}
              <div className="mb-4 relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-purple-400 transition-all duration-300 bg-gray-50">
                  {member.image ? (
                    <ImageWithFallback
                      src={member.image}
                      alt={`${member.name} professional headshot`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <ImageIcon className="w-14 h-14 text-gray-300" />
                    </div>
                  )}
                </div>
                <div className=""></div>
              </div>

              {/* Info */}
              <div className="text-center space-y-1">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 uppercase tracking-wide">{member.title}</p>

                {/* View Profile Link */}
                <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-purple-600 inline-flex items-center gap-1">
                    View Profile
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
