import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "../assets/logo/logo.png";

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Header({ currentPage = "home", onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBoardDropdown, setShowBoardDropdown] = useState(false);

  // ✅ Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowDropdown(false);
      setShowBoardDropdown(false);
    };

    if (showDropdown || showBoardDropdown) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDropdown, showBoardDropdown]);

  const navigationItems = [
    { name: "WAM Alliance", href: "home" },
    { name: "Testimonials", href: "news" },
    { name: "Donors", href: "services" },
    { name: "Donate Now", href: "contact" },
    { name: "Volunteers", href: "volunteers" },
  ];

  const handleNavigation = (page: string) => {
    if (onNavigate) onNavigate(page);
    setIsMenuOpen(false);
    setShowDropdown(false);
    setShowBoardDropdown(false);
  };

  return (
    <nav
      className="fixed top-0 w-full shadow-lg lg:flex"
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 50%, rgba(255, 255, 255, 0.98) 100%)",
        backdropFilter: "blur(25px) saturate(1.2)",
        borderBottom: "1px solid rgba(139, 92, 246, 0.15)",
        boxShadow:
          "0 8px 32px rgba(139, 92, 246, 0.12), 0 4px 16px rgba(255, 215, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
        zIndex: 1050,
        minHeight: "80px",
        position: "relative",
      }}
    >
      <div className="max-w-full flex items-center w-full">
        {/* ✅ Brand / Logo */}
        <button
          onClick={() => handleNavigation("home")}
          className="flex items-center gap-3 group transition-all duration-300 hover:scale-105"
        >
          <img
            src={logoImage}
            alt="WAM Alliance Logo"
            style={{ width: "140px", height: "auto" }}
          />
        </button>

        {/* ✅ Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between flex-1 ml-8">
          <div
            className="flex items-center gap-1 flex-1 justify-center"
            style={{
              background: "rgba(249, 250, 251, 0.8)",
              padding: "4px",
              borderRadius: "100px",
              border: "1px solid rgba(0, 0, 0, 0.06)",
            }}
          >
            {/* Home */}
            <button
              className="border-0 px-4 py-1.5 rounded-full"
              style={{
                background:
                  currentPage === "home"
                    ? "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)"
                    : "transparent",
                color: currentPage === "home" ? "#FFF" : "#6B7280",
              }}
              onClick={() => handleNavigation("home")}
            >
              WAM Alliance
            </button>

            {/* About Dropdown */}
            <div className="relative">
              <button
                className="border-0 px-4 py-1.5 rounded-full flex items-center gap-1.5"
                style={{
                  background:
                    currentPage === "about" ||
                    currentPage === "our-progress" ||
                    currentPage === "contact-us"
                      ? "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)"
                      : "transparent",
                  color:
                    currentPage === "about" ||
                    currentPage === "our-progress" ||
                    currentPage === "contact-us"
                      ? "#FFF"
                      : "#6B7280",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDropdown(!showDropdown);
                }}
              >
                About Us
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                  size={14}
                />
              </button>

              {showDropdown && (
                <div className="absolute bg-white shadow-xl rounded-2xl mt-2">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    onClick={() => handleNavigation("our-progress")}
                  >
                    Programs and Projects
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    onClick={() => handleNavigation("contact-us")}
                  >
                    Contact Us
                  </button>
                </div>
              )}
            </div>

            {/* Board Dropdown */}
            <div className="relative">
              <button
                className="border-0 px-4 py-1.5 rounded-full flex items-center gap-1.5"
                style={{
                  background:
                    currentPage === "board-of-directors" ||
                    currentPage.includes("-bio")
                      ? "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)"
                      : "transparent",
                  color:
                    currentPage === "board-of-directors" ||
                    currentPage.includes("-bio")
                      ? "#FFF"
                      : "#6B7280",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowBoardDropdown(!showBoardDropdown);
                }}
              >
                Board of Directors
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    showBoardDropdown ? "rotate-180" : ""
                  }`}
                  size={14}
                />
              </button>

              {showBoardDropdown && (
                <div className="absolute bg-white shadow-xl rounded-2xl mt-2 min-w-[260px]">
                  {[
                    { key: "tonya-bio", label: "Tonya Jones Smith (President)" },
                    {
                      key: "rob-bio",
                      label: "Robert Smith (Vice President/CFO)",
                    },
                    { key: "diane-bio", label: "Diane Jones (Secretary)" },
                    { key: "danielle-bio", label: "Danielle Ortega (Paralegal)" },
                    { key: "wajid-bio", label: "Wajid Bhat (Engineering)" },
                  ].map((member) => (
                    <button
                      key={member.key}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                      onClick={() => handleNavigation(member.key)}
                    >
                      {member.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Other Pages */}
            {navigationItems.slice(1).map((item) => (
              <button
                key={item.href}
                className="border-0 px-4 py-1.5 rounded-full"
                style={{
                  background:
                    currentPage === item.href
                      ? "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)"
                      : "transparent",
                  color: currentPage === item.href ? "#FFF" : "#6B7280",
                }}
                onClick={() => handleNavigation(item.href)}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => {
                const confirmed = window.confirm(
                  "☑️ Open this link in FaceTime?"
                );
                if (confirmed) {
                  window.open("facetime://+13854144144", "_self");
                }
              }}
            >
              <Phone size={16} />
              Call
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold"
              onClick={() => handleNavigation("need-help-now")}
            >
              REACH OUT!
            </Button>
          </div>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          className="border-0 p-2.5 rounded-xl lg:hidden ml-auto mr-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-white/90 backdrop-blur-xl">
          <div className="p-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                className={`block w-full text-left px-4 py-2 rounded-lg ${
                  currentPage === item.href
                    ? "bg-purple-600 text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => handleNavigation(item.href)}
              >
                {item.name}
              </button>
            ))}

            {/* Mobile About Dropdown */}
            <div>
              <button
                className="block w-full text-left px-4 py-2 rounded-lg text-gray-800 hover:bg-gray-100"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                About Us
              </button>
              {showDropdown && (
                <div className="pl-4 border-l border-gray-200">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => handleNavigation("our-progress")}
                  >
                    Programs and Projects
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => handleNavigation("contact-us")}
                  >
                    Contact Us
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Board Dropdown */}
            <div>
              <button
                className="block w-full text-left px-4 py-2 rounded-lg text-gray-800 hover:bg-gray-100"
                onClick={() => setShowBoardDropdown(!showBoardDropdown)}
              >
                Board of Directors
              </button>
              {showBoardDropdown && (
                <div className="pl-4 border-l border-gray-200">
                  {[
                    { key: "tonya-bio", label: "Tonya Jones Smith" },
                    { key: "rob-bio", label: "Robert Smith" },
                    { key: "diane-bio", label: "Diane Jones" },
                    { key: "danielle-bio", label: "Danielle Ortega" },
                    { key: "wajid-bio", label: "Wajid Bhat" },
                  ].map((item) => (
                    <button
                      key={item.key}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => handleNavigation(item.key)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
