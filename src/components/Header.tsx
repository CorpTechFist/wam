import { Button } from "./ui/button";
import { Menu, X, ChevronDown, Phone, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import logoImage from "../assets/logo/logo.png";

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Header({ currentPage = "home", onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBoardDropdown, setShowBoardDropdown] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      setShowDropdown(false);
      setShowBoardDropdown(false);
    };

    if (showDropdown || showBoardDropdown) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showDropdown, showBoardDropdown]);

  const navigationItems = [
    { name: "WAM Alliance", href: "home" },
    { name: "Testimonials", href: "news" },
    { name: "Donors", href: "services" },
    { name: "Donate Now", href: "contact" },
  ];

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
    setShowDropdown(false);
    setShowBoardDropdown(false);
  };

  return (
   <nav className="fixed top-0 w-full shadow-lg lg:flex" style={{
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 50%, rgba(255, 255, 255, 0.98) 100%)',
      backdropFilter: 'blur(25px) saturate(1.2)',
      borderBottom: '1px solid rgba(139, 92, 246, 0.15)',
      boxShadow: '0 8px 32px rgba(139, 92, 246, 0.12), 0 4px 16px rgba(255, 215, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      zIndex: 1050,
      minHeight: '80px',
      position: 'relative',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div className="max-w-full flex items-center w-full" style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        margin: '0',
        padding: '0',
        border: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        position: 'relative',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
      }}>
        
        {/* Brand/Logo Section */}
        <button 
          onClick={() => handleNavigation('home')}
          className="flex items-center gap-3 group transition-all duration-300 hover:scale-105"
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            flexShrink: 0
          }}
        >
          <button 
            onClick={() => handleNavigation('home')}
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img 
              src={logoImage} 
              alt="WAM Alliance Logo" 
              style={{
                height: 'auto',
                width: '140px',
                display: 'block',
                margin: '0'
              }}
            />
          </button>
        </button>

        {/* Desktop Navigation - Always Visible */}
        <div className="hidden lg:flex items-center justify-between flex-1 ml-8">
          
          {/* Main Navigation Links - Pill Container */}
          <div className="flex items-center gap-1 flex-1 justify-center" style={{
            background: 'rgba(249, 250, 251, 0.8)',
            padding: '4px',
            borderRadius: '100px',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.8)'
          }}>
            
            {/* Home */}
            <button
              className="border-0 px-4 py-1.5 rounded-full relative overflow-hidden"
              style={{
                background: currentPage === 'home' 
                  ? 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)'
                  : 'transparent',
                color: currentPage === 'home' ? '#FFFFFF' : '#6B7280',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                fontSize: '0.875rem',
                fontWeight: '600',
                letterSpacing: '-0.01em',
                boxShadow: currentPage === 'home' ? '0 4px 12px rgba(139, 92, 246, 0.3)' : 'none'
              }}
              onClick={() => handleNavigation('home')}
              onMouseOver={(e) => {
                if (currentPage !== 'home') {
                  e.currentTarget.style.background = 'rgba(243, 244, 246, 0.8)';
                  e.currentTarget.style.color = '#111827';
                }
              }}
              onMouseOut={(e) => {
                if (currentPage !== 'home') {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#6B7280';
                }
              }}
            >
              WAM Alliance
            </button>
            
            {/* About Us Dropdown */}
            <div className="relative">
              <button
                className="border-0 px-4 py-1.5 rounded-full flex items-center gap-1.5"
                style={{
                  background: (currentPage === 'about' || currentPage === 'our-progress' || currentPage === 'contact-us')
                    ? 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)'
                    : 'transparent',
                  color: (currentPage === 'about' || currentPage === 'our-progress' || currentPage === 'contact-us') ? '#FFFFFF' : '#6B7280',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  letterSpacing: '-0.01em',
                  boxShadow: (currentPage === 'about' || currentPage === 'our-progress' || currentPage === 'contact-us') ? '0 4px 12px rgba(139, 92, 246, 0.3)' : 'none'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDropdown(!showDropdown);
                  onNavigate('about');
                }}
                onMouseOver={(e) => {
                  if (!(currentPage === 'about' || currentPage === 'our-progress' || currentPage === 'contact-us')) {
                    e.currentTarget.style.background = 'rgba(243, 244, 246, 0.8)';
                    e.currentTarget.style.color = '#111827';
                  }
                }}
                onMouseOut={(e) => {
                  if (!(currentPage === 'about' || currentPage === 'our-progress' || currentPage === 'contact-us')) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#6B7280';
                  }
                }}
              >
                About Us
                <ChevronDown className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} size={14} />
              </button>
              
              {showDropdown && (
                <div 
                  className="absolute shadow-xl border-0 mt-2 bg-white rounded-2xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.98)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '16px',
                    minWidth: '180px',
                    top: '100%',
                    left: '0',
                    zIndex: 1000,
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04)',
                    animation: 'slideDown 0.3s ease-out'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-2">
                    <button
                      className="w-full text-left py-2.5 px-4 border-0 bg-transparent rounded-xl"
                      onClick={() => handleNavigation('our-progress')}
                      style={{ 
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: '#6B7280'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(243, 244, 246, 0.8)';
                        e.currentTarget.style.color = '#111827';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#6B7280';
                      }}
                    >
                      Programs and Projects
                    </button>
                    <button
                      className="w-full text-left py-2.5 px-4 border-0 bg-transparent rounded-xl"
                      onClick={() => handleNavigation('contact-us')}
                      style={{ 
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: '#6B7280'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(243, 244, 246, 0.8)';
                        e.currentTarget.style.color = '#111827';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#6B7280';
                      }}
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Board of Directors Dropdown */}
            <div className="relative">
              <button
                className="border-0 px-4 py-1.5 rounded-full flex items-center gap-1.5"
                style={{
                  background: (currentPage === 'board-of-directors' || currentPage === 'tonya-bio' || currentPage === 'rob-bio' || currentPage === 'diane-bio' || currentPage === 'danielle-bio' || currentPage === 'wajid-bio')
                    ? 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)'
                    : 'transparent',
                  color: (currentPage === 'board-of-directors' || currentPage === 'tonya-bio' || currentPage === 'rob-bio' || currentPage === 'diane-bio' || currentPage === 'danielle-bio' || currentPage === 'wajid-bio') ? '#FFFFFF' : '#6B7280',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  letterSpacing: '-0.01em',
                  boxShadow: (currentPage === 'board-of-directors' || currentPage === 'tonya-bio' || currentPage === 'rob-bio' || currentPage === 'diane-bio' || currentPage === 'danielle-bio' || currentPage === 'wajid-bio') ? '0 4px 12px rgba(139, 92, 246, 0.3)' : 'none'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowBoardDropdown(!showBoardDropdown);
                  onNavigate('board-of-directors');
                }}
                onMouseOver={(e) => {
                  if (!(currentPage === 'board-of-directors' || currentPage === 'tonya-bio' || currentPage === 'rob-bio' || currentPage === 'diane-bio' || currentPage === 'danielle-bio' || currentPage === 'wajid-bio')) {
                    e.currentTarget.style.background = 'rgba(243, 244, 246, 0.8)';
                    e.currentTarget.style.color = '#111827';
                  }
                }}
                onMouseOut={(e) => {
                  if (!(currentPage === 'board-of-directors' || currentPage === 'tonya-bio' || currentPage === 'rob-bio' || currentPage === 'diane-bio' || currentPage === 'danielle-bio' || currentPage === 'wajid-bio')) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#6B7280';
                  }
                }}
              >
                Board of Directors
                <ChevronDown className={`transition-transform duration-300 ${showBoardDropdown ? 'rotate-180' : ''}`} size={14} />
              </button>
              
              {showBoardDropdown && (
                <div 
                  className="absolute shadow-xl border-0 mt-2 bg-white rounded-2xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.98)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '16px',
                    minWidth: '260px',
                    top: '100%',
                    left: '0',
                    zIndex: 1000,
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04)',
                    animation: 'slideDown 0.3s ease-out'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-2">
                    {[
                      { key: 'tonya-bio', label: "Tonya Jones Smith (President)" },
                      { key: 'rob-bio', label: "Robert Smith (Vice President/CFO)" },
                      { key: 'diane-bio', label: "Diane Jones (Director/Secretary)" },
                      { key: 'danielle-bio', label: "Danielle Ortega (Paralegal)" },
                      { key: 'wajid-bio', label: "Wajid Bhat (Engineering)" },
                      { key: 'dummy-bio', label: "John Anderson (Advisor)" }
                    ].map((item) => (
                      <button
                        key={item.key}
                        className="w-full text-left py-2.5 px-4 border-0 bg-transparent rounded-xl"
                        onClick={() => handleNavigation(item.key)}
                        style={{ 
                          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          color: '#6B7280'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = 'rgba(243, 244, 246, 0.8)';
                          e.currentTarget.style.color = '#111827';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#6B7280';
                        }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Items */}
            {navigationItems.slice(1).map((item) => (
              <button
                key={item.name}
                className="border-0 px-4 py-1.5 rounded-full"
                style={{
                  background: currentPage === item.href 
                    ? 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)'
                    : 'transparent',
                  color: currentPage === item.href ? '#FFFFFF' : '#6B7280',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  letterSpacing: '-0.01em',
                  boxShadow: currentPage === item.href ? '0 4px 12px rgba(139, 92, 246, 0.3)' : 'none'
                }}
                onClick={() => handleNavigation(item.href)}
                onMouseOver={(e) => {
                  if (currentPage !== item.href) {
                    e.currentTarget.style.background = 'rgba(243, 244, 246, 0.8)';
                    e.currentTarget.style.color = '#111827';
                  }
                }}
                onMouseOut={(e) => {
                  if (currentPage !== item.href) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#6B7280';
                  }
                }}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button 
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border-0"
              style={{
                color: '#6B7280',
                background: 'transparent',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}
              onClick={() => {
                const confirmed = window.confirm("☑️ Open this link in FaceTime");
                if (confirmed) {
                  const userAgent = navigator.userAgent.toLowerCase();
                  if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('mac')) {
                    window.open('facetime://+1234567890', '_self');
                  } else if (userAgent.includes('android')) {
                    window.open('tel:+1234567890', '_self');
                  } else {
                    window.open('facetime://+1234567890', '_self') || window.open('tel:+1234567890', '_self');
                  }
                }
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(243, 244, 246, 0.8)';
                e.currentTarget.style.color = '#111827';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#6B7280';
              }}
            >
              <Phone size={16} />
              Call
            </button>
            
            <button 
              className="px-5 py-1.5 text-white rounded-full border-0"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                fontWeight: '600',
                fontSize: '0.875rem',
                letterSpacing: '-0.01em',
                boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
              }}
              onClick={() => handleNavigation('need-help-now')}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(139, 92, 246, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.3)';
              }}
            >
              REACH OUT!
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="border-0 p-2.5 rounded-xl lg:hidden"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: 'rgba(139, 92, 246, 0.08)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)';
            e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(139, 92, 246, 0.08)';
            e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {isMenuOpen ? <X size={24} style={{ color: '#8B5CF6' }} /> : <Menu size={24} style={{ color: '#8B5CF6' }} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t" style={{
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)'
        }}>
          <div className="max-w-full py-4 px-4">
            
            {/* Mobile Main Navigation */}
            <div className="mb-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  className={`w-full text-left py-3 px-4 mb-2 rounded-lg ${
                    currentPage === item.href 
                      ? 'text-white' 
                      : 'text-gray-900'
                  }`}
                  style={{
                    background: currentPage === item.href 
                      ? 'linear-gradient(45deg, #7c3aed, #d946ef)' 
                      : 'rgba(124, 58, 237, 0.05)',
                    border: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => handleNavigation(item.href)}
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            {/* Mobile About Section */}
            <div className="mb-4">
              <button
                className={`w-full text-left py-3 px-4 mb-2 rounded-lg ${
                  currentPage === 'about' 
                    ? 'text-white' 
                    : 'text-gray-900'
                }`}
                style={{
                  background: currentPage === 'about' 
                    ? 'linear-gradient(45deg, #7c3aed, #d946ef)' 
                    : 'rgba(124, 58, 237, 0.05)',
                  border: 'none'
                }}
                onClick={() => handleNavigation('about')}
              >
                About Us
              </button>
              <div className="pl-4 border-l-2" style={{ borderColor: 'rgba(124, 58, 237, 0.2)' }}>
                <button
                  className={`w-full text-left py-2 px-3 mb-2 rounded-lg ${
                    currentPage === 'our-progress' 
                      ? 'text-purple-600' 
                      : 'text-gray-500'
                  }`}
                  style={{ 
                    border: 'none',
                    fontSize: '0.9rem',
                    background: currentPage === 'our-progress' ? 'rgba(124, 58, 237, 0.1)' : 'transparent'
                  }}
                  onClick={() => handleNavigation('our-progress')}
                >
                  Our Progress
                </button>
                <button
                  className={`w-full text-left py-2 px-3 mb-2 rounded-lg ${
                    currentPage === 'contact-us' 
                      ? 'text-purple-600' 
                      : 'text-gray-500'
                  }`}
                  style={{ 
                    border: 'none',
                    fontSize: '0.9rem',
                    background: currentPage === 'contact-us' ? 'rgba(124, 58, 237, 0.1)' : 'transparent'
                  }}
                  onClick={() => handleNavigation('contact-us')}
                >
                  Contact Us
                </button>
              </div>
            </div>
            
            {/* Mobile Board of Directors Section */}
            <div className="mb-4">
              <button
                className={`w-full text-left py-3 px-4 mb-2 rounded-lg ${
                  currentPage === 'board-of-directors' 
                    ? 'text-white' 
                    : 'text-gray-900'
                }`}
                style={{
                  background: currentPage === 'board-of-directors' 
                    ? 'linear-gradient(45deg, #7c3aed, #d946ef)' 
                    : 'rgba(124, 58, 237, 0.05)',
                  border: 'none'
                }}
                onClick={() => handleNavigation('board-of-directors')}
              >
                Board of Directors
              </button>
              <div className="pl-4 border-l-2" style={{ borderColor: 'rgba(124, 58, 237, 0.2)' }}>
                {[
                  { key: 'tonya-bio', label: "Tonya Jones Smith (President)" },
                  { key: 'rob-bio', label: "Robert Smith (Vice President/CFO)" },
                  { key: 'diane-bio', label: "Diane Jones (Director/Secretary)" },
                  { key: 'danielle-bio', label: "Danielle Ortega (Paralegal)" },
                  { key: 'wajid-bio', label: "Wajid Bhat (Engineering)" }
                ].map((item) => (
                  <button
                    key={item.key}
                    className={`w-full text-left py-2 px-3 mb-1 rounded-lg ${
                      currentPage === item.key 
                        ? 'text-purple-600' 
                        : 'text-gray-500'
                    }`}
                    style={{ 
                      border: 'none',
                      fontSize: '0.9rem',
                      background: currentPage === item.key ? 'rgba(124, 58, 237, 0.1)' : 'transparent'
                    }}
                    onClick={() => handleNavigation(item.key)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile Action Buttons */}
            <div className="pt-4 border-t">
              <div className="grid gap-3">
                <button 
                  className="border border-purple-600 flex items-center justify-center py-3 rounded-lg"
                  style={{
                    borderColor: '#7c3aed',
                    color: '#7c3aed'
                  }}
                  onClick={() => {
                    const confirmed = window.confirm("☑️ Open this link in FaceTime");
                    if (confirmed) {
                      const userAgent = navigator.userAgent.toLowerCase();
                      if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('mac')) {
                        window.open('facetime://+1234567890', '_self');
                      } else if (userAgent.includes('android')) {
                        window.open('tel:+1234567890', '_self');
                      } else {
                        window.open('facetime://+1234567890', '_self') || window.open('tel:+1234567890', '_self');
                      }
                    }
                  }}
                >
                  <Phone size={16} className="mr-2" />
                  Call Now
                </button>
                
                <button 
                  className="py-3 text-white rounded-lg"
                  style={{
                    background: 'linear-gradient(45deg, #7c3aed, #d946ef)',
                    border: 'none'
                  }}
                  onClick={() => handleNavigation('need-help-now')}
                >
                  Get Help Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}