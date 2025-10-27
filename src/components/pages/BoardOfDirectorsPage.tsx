import { useTranslation } from "../TranslationContext";
import TonyaImage from "../../assets/board/Tonya.webp";
import RobertImage from "../../assets/board/rob.png";
import DianeImage from "../../assets/testimonials/Diane Jones.png";
import DanielleImage from "../../assets/testimonials/DanielleOrtega.jpeg";
import WajidImage from "../../assets/board/wajid.jpeg";

interface BoardOfDirectorsPageProps {
  onNavigate?: (section: string) => void;
}

export function BoardOfDirectorsPage({ onNavigate }: BoardOfDirectorsPageProps) {
  const { translations } = useTranslation();

  const members = [
    { name: "Tonya Jones Smith", title: "President", image: TonyaImage },
    { name: "Robert Smith", title: "Vice President / CFO", image: RobertImage },
    { name: "Diane Jones", title: "Secretary", image: DianeImage },
    { name: "Danielle Ortega", title: "Board of Directors Paralegal", image: DanielleImage },
    { name: "Wajid Bhat", title: "Engineering", image: WajidImage },
  ];

  return (
    <div className="py-12 px-4 bg-white text-gray-800">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Title Section */}
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{
            background:
              "linear-gradient(135deg, #7c3aed 0%, #a78bfa 25%, #ffd700 50%, #8b5cf6 75%, #7c3aed 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Board of Directors
        </h1>

        <div className="flex justify-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600"></div>
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-500"></div>
        </div>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Our certified Board of Directors are driven by the passion to make our world a better place.
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
            <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase">Join Our Team</h3>
            <p className="text-sm text-gray-600">
              Join We All Matter Alliance Team by applying through email with your resume and biography.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
            <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase">Our Values</h3>
            <p className="text-sm text-gray-600">
              We are a welcoming, loving, passionate, and innovative group who believes loving yourself is the beginning to a better world!
            </p>
          </div>
        </div>

        {/* CTA */}
  <div
  onClick={() => onNavigate?.("contact-us")}
  className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-6 text-center font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
>
  Be the Change!
</div>



      </div>

      {/* Board Members */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12 max-w-6xl mx-auto">
        {members.map((member) => (
          <div
            key={member.name}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition flex flex-col items-center group"
          >
            <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-purple-400 transition-all bg-gray-50">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-gray-900 font-bold group-hover:text-purple-700 transition">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600 uppercase tracking-wide">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
