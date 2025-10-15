import { Button } from "./ui/button";
import { Menu, X, ChevronDown, Phone, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import logoImage from "../assets/logo/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavigation = (section: string) => {
    const target = document.getElementById(section);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(section);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 relative">
        {/* Brand/Logo Section */}
        <button
          onClick={() => handleNavigation("home")}
          className="absolute left-8 flex items-center gap-3 group transition-all duration-300 hover:scale-105"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <img
            src={logoImage}
            alt="WAM Alliance Logo"
            style={{
              height: "auto",
              width: "140px",
              display: "block",
              marginTop: "8px",
            }}
          />
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-10 text-gray-800 font-medium items-center">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "initiatives", label: "Initiatives" },
            { id: "contact", label: "Contact" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.id)}
              className={`relative hover:text-blue-600 transition-colors duration-300 ${
                activeSection === link.id ? "text-blue-600" : ""
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-blue-600 rounded-full transition-all duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <Button
            onClick={() => handleNavigation("donate")}
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 rounded-full px-4 py-2"
          >
            <Heart className="w-4 h-4" />
            Donate
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-[100%] left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 md:hidden">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "initiatives", label: "Initiatives" },
              { id: "contact", label: "Contact" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id)}
                className={`text-gray-700 text-lg hover:text-blue-600 transition-colors duration-300 ${
                  activeSection === link.id ? "text-blue-600" : ""
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
