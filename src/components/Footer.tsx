import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Youtube, 
  Facebook,
  ArrowUp,
  ChevronDown,
  Building2
} from "lucide-react";


interface FooterProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Footer({ currentPage = "home", onNavigate }: FooterProps) {

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.dispatchEvent(new CustomEvent('navigate', { detail: page }));
    }

    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/weallmatteralliance", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/wam-alliance/", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative overflow-hidden">
        {/* Enhanced sunset gradient background */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-accent/20 to-secondary/15"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-slate-50/92 backdrop-blur-[30px] backdrop-saturate-[1.3] backdrop-brightness-110 border border-primary/40 border-t border-primary/10 shadow-[0_32px_100px_rgba(139,92,246,0.25),0_20px_60px_rgba(255,215,0,0.15),0_8px_25px_rgba(167,139,250,0.12),0_4px_12px_rgba(139,92,246,0.1)] rounded-lg overflow-hidden"></div>
      <div className="w-full px-6 py-6 relative z-10 bg-[rgb(255,255,255)]">
        {/* Purple and Indigo Gradient Top Line */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #8B5CF6 0%, #6366F1 50%, #8B5CF6 100%)',
          boxShadow: '0 2px 12px rgba(139, 92, 246, 0.5)'
        }}></div>

        {/* Newsletter Section */}


        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 font-serif antialiased tracking-wide leading-relaxed">
          {/* Address Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5" style={{ color: '#8B5CF6' }} />
              <h4 className="text-lg text-foreground tracking-wider">ADDRESS</h4>
            </div>
            <div className="space-y-4 pl-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground italic">Sandy, UT 84094, US</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <div className="border border-muted-foreground/30 px-3 py-1 hover:border-indigo-500/50 transition-colors">
                  <a href="tel:3854144144" className="text-sm text-muted-foreground hover:text-indigo-600 transition-colors">
                    3854144144
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <a 
                  href="mailto:weallmatter@wamalliance.org" 
                  className="text-sm text-muted-foreground hover:text-indigo-600 transition-colors underline decoration-indigo-300/30 hover:decoration-indigo-600"
                >
                  weallmatter@wamalliance.org
                </a>
              </div>
            </div>
          </div>

          {/* Pages Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #A78BFA 100%)'
              }}>
                <div className="w-2 h-2 rounded-full" style={{
                  background: 'linear-gradient(135deg, #C4B5FD 0%, #E0E7FF 100%)'
                }}></div>
              </div>
              <h4 className="text-lg text-foreground tracking-wider">PAGES</h4>
            </div>
            <ul className="space-y-3 pl-8 text-black">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary"></div>
                <button 
                  onClick={() => handleNavigation('home')}
                  className={`text-sm text-muted-foreground hover:text-indigo-600 transition-colors duration-300 text-left ${
                    currentPage === 'home' ? 'text-primary' : ''
                  }`}
                >
                  WAM Alliance
                </button>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary"></div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className={`flex items-center text-sm text-muted-foreground hover:text-indigo-600 transition-colors duration-300 text-left group ${
                      currentPage === 'about' || currentPage === 'our-progress' || currentPage === 'contact-us' ? 'text-primary' : ''
                    }`}>
                      About Us
                      <ChevronDown className="w-3 h-3 ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="start" 
                    side="top"
                    className="w-56 bg-white/98 backdrop-blur-md border border-indigo-300/30 shadow-2xl"
                  >
                    <DropdownMenuItem
                      onClick={() => handleNavigation('our-progress')}
                      className={`px-4 py-3 text-sm text-gray-900 hover:bg-indigo-100/80 hover:text-indigo-700 transition-colors duration-300 cursor-pointer ${
                        currentPage === 'our-progress' ? 'text-primary bg-primary/10' : ''
                      }`}
                    >
                     Programs and Projects
                    </DropdownMenuItem>
                   <DropdownMenuItem
                      onClick={() => handleNavigation('resources-partnering-agencies')}
                      className={`px-4 py-3 text-sm text-gray-900 hover:bg-indigo-100/80 hover:text-indigo-700 transition-colors duration-300 cursor-pointer ${
                        currentPage === 'our-progress' ? 'text-primary bg-primary/10' : ''
                      }`}
                    >
                     Trusted Partners
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => handleNavigation('contact-us')}
                      className={`px-4 py-3 text-sm text-gray-900 hover:bg-indigo-100/80 hover:text-indigo-700 transition-colors duration-300 cursor-pointer ${
                        currentPage === 'contact-us' ? 'text-primary bg-primary/10' : ''
                      }`}
                    >
                      Contact Us
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary"></div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className={`flex items-center text-sm text-muted-foreground hover:text-indigo-600 transition-colors duration-300 text-left group ${
                      currentPage === 'board-of-directors' || currentPage === 'tonya-bio' || currentPage === 'rob-bio' || currentPage === 'diane-bio' || currentPage === 'danielle-bio' || currentPage === 'wajid-bio' || currentPage === 'dummy-bio' ? 'text-primary' : ''
                    }`}>
                      Board of Directors
                      <ChevronDown className="w-3 h-3 ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="start" 
                    side="top"
                    className="w-64 bg-white/98 backdrop-blur-md border border-indigo-300/30 shadow-2xl"
                  >
                    <DropdownMenuItem
                      onClick={() => handleNavigation('tonya-bio')}
                      className={`px-4 py-3 text-sm text-gray-900 hover:bg-indigo-100/80 hover:text-indigo-700 transition-colors duration-300 cursor-pointer ${
                        currentPage === 'tonya-bio' ? 'text-primary bg-primary/10' : ''
                      }`}
                    >
                      Tonya Jones Smith (President)
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleNavigation('rob-bio')}
                      className={`px-4 py-3 text-sm text-gray-900 hover:bg-indigo-100/80 hover:text-indigo-700 transition-colors duration-300 cursor-pointer ${
                        currentPage === 'rob-bio' ? 'text-primary bg-primary/10' : ''
                      }`}
                    >
                      Robert Smith (Vice President/CFO)
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleNavigation('diane-bio')}
                      className={`px-4 py-3 text-sm text-gray-900 hover:bg-indigo-100/80 hover:text-indigo-700 transition-colors duration-300 cursor-pointer ${
                        currentPage === 'diane-bio' ? 'text-primary bg-primary/10' : ''
                      }`}
                    >
                      Diane Jones (Director/Secretary)
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleNavigation('danielle-bio')}
                      className={`px-4 py-3 text-sm text-gray-900 hover:bg-indigo-100/80 hover:text-indigo-700 transition-colors duration-300 cursor-pointer ${
                        currentPage === 'danielle-bio' ? 'text-primary bg-primary/10' : ''
                      }`}
                    >
                      Danielle Ortega (Paralegal)
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleNavigation('wajid-bio')}
                      className={`px-4 py-3 text-sm text-gray-900 hover:bg-indigo-100/80 hover:text-indigo-700 transition-colors duration-300 cursor-pointer ${
                        currentPage === 'wajid-bio' ? 'text-primary bg-primary/10' : ''
                      }`}
                    >
                      Wajid Bhat (Engineering)
                    </DropdownMenuItem>
                   
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
               <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary"></div>
                <button 
                  onClick={() => handleNavigation('volunteers')}
                  className={`text-sm text-muted-foreground hover:text-indigo-600 transition-colors duration-300 text-left ${
                    currentPage === 'volunteers' ? 'text-primary' : ''
                  }`}
                >
                  Volunteers
                </button>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary"></div>
                <button 
                  onClick={() => handleNavigation('news')}
                  className={`text-sm text-muted-foreground hover:text-indigo-600 transition-colors duration-300 text-left ${
                    currentPage === 'news' ? 'text-primary' : ''
                  }`}
                >
                  Testimonials
                </button>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary"></div>
                <button 
                  onClick={() => handleNavigation('services')}
                  className={`text-sm text-muted-foreground hover:text-indigo-600 transition-colors duration-300 text-left ${
                    currentPage === 'services' ? 'text-primary' : ''
                  }`}
                >
                  Donors
                </button>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary"></div>
                <button 
                  onClick={() => handleNavigation('contact')}
                  className={`text-sm text-muted-foreground hover:text-indigo-600 transition-colors duration-300 text-left ${
                    currentPage === 'contact' ? 'text-primary' : ''
                  }`}
                >
                  Donate Now
                </button>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #A78BFA 100%)'
              }}>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{
                  background: 'linear-gradient(135deg, #C4B5FD 0%, #E0E7FF 100%)'
                }}></div>
              </div>
              <h4 className="text-lg text-foreground tracking-wider">FOLLOW US</h4>
            </div>
            <ul className="space-y-4 pl-8">
              <li className="group">
                <a href="http://www.facebook.com/weallmatteralliance" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-2 hover:bg-indigo-100/60 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Facebook className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-indigo-600 transition-colors">Facebook</span>
                </a>
              </li>
              <li className="group">
                <a href="http://www.linkedin.com/company/wam-alliance" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-2 hover:bg-indigo-100/60 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-700 to-blue-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-indigo-600 transition-colors">LinkedIn</span>
                </a>
              </li>
             
              <li className="group">
                <a href="https://www.alignable.com/biz?_seid=12819622753&_tid=3058668" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-2 hover:bg-indigo-100/60 transition-all duration-300">
                  <div className="w-8 h-8 bg-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Building2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-indigo-600 transition-colors">Alignable</span>
                </a>
              </li>
            </ul>
          </div>

          {/* All Rights Reserved Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #A78BFA 100%)'
              }}>
                <div className="w-2 h-2 rounded-full" style={{
                  background: 'linear-gradient(135deg, #C4B5FD 0%, #E0E7FF 100%)'
                }}></div>
              </div>
              <h4 className="text-lg text-foreground tracking-wider">ALL RIGHTS RESERVED.</h4>
            </div>
            <div className="space-y-3 pl-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary/60 mt-2 flex-shrink-0"></div>
                <p className="text-xs text-muted-foreground italic leading-relaxed">
                  We are designated tax-exempt under section 501(c)3 of the Internal Revenue Code.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary/60 mt-2 flex-shrink-0"></div>
                <p className="text-xs text-muted-foreground italic leading-relaxed">
                  Tax ID 92-3961002. Contributions are tax-deductible to the fullest extent of the law.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary"></div>
              <span>© 2025 Techfist Global InC</span>
            </div>
            <div className="flex items-center space-x-6">
              <button onClick={() => handleNavigation('privacy-policy')} className="flex items-center gap-1 hover:text-indigo-600 transition-colors mr-4">
                <div className="w-1 h-1 bg-primary"></div>
                Privacy Policy
              </button>
              <button onClick={() => handleNavigation('terms-of-service')} className="flex items-center gap-1 hover:text-indigo-600 transition-colors mr-8">
                <div className="w-1 h-1 bg-primary"></div>
                Terms of Service
              </button>
            </div>
          </div>
          
          {/* Back to Top Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="group relative overflow-hidden bg-gradient-to-r from-indigo-600/12 via-indigo-500/8 to-indigo-600/12 border-2 border-indigo-500/30 hover:border-indigo-600/55 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-1 rounded-[9px] w-12 h-12 p-0 flex items-center justify-center text-[20px] hover:bg-gradient-to-r hover:from-indigo-600/18 hover:via-indigo-500/14 hover:to-indigo-600/18"
          >
            <ArrowUp className="w-7 h-7 group-hover:-translate-y-3 group-hover:scale-125 transition-all duration-500 ease-out text-indigo-800 group-hover:text-indigo-900 drop-shadow-lg group-hover:drop-shadow-xl filter group-hover:brightness-110" />
          </Button>
        </div>
      </div>
      </footer>
    </>
  );
}