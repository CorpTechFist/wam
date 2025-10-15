import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { OurProgress } from "./components/OurProgress";
import { ContactUs } from "./components/ContactUs";
import { Volunteer } from "./components/Volunteer";
import { VolunteerApplication } from "./components/VolunteerApplication";
import { NeedHelpNow } from "./components/NeedHelpNow";
import { ModernBackground } from "./components/ModernBackground";
import { TranslationProvider } from "./components/TranslationContext";


// Import page components
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { ServicesPage } from "./components/pages/ServicesPage";
import { MembersPage } from "./components/pages/MembersPage";
import { NewsPage } from "./components/pages/NewsPage";
import { ContactPage } from "./components/pages/ContactPage";
import { TonyaBioPage } from "./components/pages/TonyaBioPage";
import { RobBioPage } from "./components/pages/RobBioPage";
import { DianeBioPage } from "./components/pages/DianeBioPage";
import { DanielleBioPage } from "./components/pages/DanielleBioPage";
import { WajidBioPage } from "./components/pages/WajidBioPage";
import { DummyBioPage } from "./components/pages/DummyBioPage";
import { DummyBio2Page } from "./components/pages/DummyBio2Page";
import { BoardOfDirectorsPage } from "./components/pages/BoardOfDirectorsPage";
import { PersonalDonorsPage } from "./components/pages/PersonalDonorsPage";
import { CashDonationsPage } from "./components/pages/CashDonationsPage";
import { OtherDonationsPage } from "./components/pages/OtherDonationsPage";
import { DonationSchedulingPage } from "./components/pages/DonationSchedulingPage";
import { SponsorsPage } from "./components/pages/SponsorsPage";
import { PrivacyPolicyPage } from "./components/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./components/pages/TermsOfServicePage";
import { ResourcesPartneringAgenciesPage } from "./components/pages/ResourcesPartneringAgenciesPage";


export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen for custom navigation events from volunteer link
  useEffect(() => {
    const handleCustomNavigation = (event: CustomEvent) => {
      handleNavigation(event.detail);
    };

    window.addEventListener('navigate', handleCustomNavigation as EventListener);
    
    return () => {
      window.removeEventListener('navigate', handleCustomNavigation as EventListener);
    };
  }, []);

  return (
    <TranslationProvider>
      <div className="min-h-screen text-foreground relative">
        <ModernBackground />
        <Header currentPage={currentPage} onNavigate={handleNavigation} />
        <Banner />
        
        {currentPage === "home" && <HomePage />}
        
        {currentPage === "about" && <AboutPage />}
        
        {currentPage === "services" && <ServicesPage />}
        
        {currentPage === "members" && <MembersPage />}
        
        {currentPage === "board-of-directors" && <BoardOfDirectorsPage onNavigate={handleNavigation} />}
        
        {currentPage === "news" && <NewsPage />}
        
        {currentPage === "contact" && <ContactPage />}
        
        {currentPage === "our-progress" && <OurProgress />}
        
        {currentPage === "contact-us" && <ContactUs />}
        
        {currentPage === "volunteer" && <Volunteer />}
        
        {currentPage === "volunteer-application" && <VolunteerApplication />}
        
        {currentPage === "need-help-now" && <NeedHelpNow />}
        
        {currentPage === "tonya-bio" && <TonyaBioPage />}
        
        {currentPage === "rob-bio" && <RobBioPage />}
        
        {currentPage === "diane-bio" && <DianeBioPage />}
        
        {currentPage === "danielle-bio" && <DanielleBioPage />}
        
        {currentPage === "wajid-bio" && <WajidBioPage />}
        
        {currentPage === "dummy-bio" && <DummyBioPage onNavigate={handleNavigation} />}
        
        {currentPage === "dummy-bio-2" && <DummyBio2Page onNavigate={handleNavigation} />}
        
        {currentPage === "personal-donors" && <PersonalDonorsPage />}
        
        {currentPage === "cash-donations" && <CashDonationsPage />}
        
        {currentPage === "other-donations" && <OtherDonationsPage />}
        
        {currentPage === "donation-scheduling" && <DonationSchedulingPage />}
        
        {currentPage === "sponsors" && <SponsorsPage />}
        
        {currentPage === "privacy-policy" && <PrivacyPolicyPage />}
        
        {currentPage === "terms-of-service" && <TermsOfServicePage />}
        
        {currentPage === "resources-partnering-agencies" && <ResourcesPartneringAgenciesPage />}
        
        <Footer currentPage={currentPage} onNavigate={handleNavigation} />
      </div>
    </TranslationProvider>
  );
}