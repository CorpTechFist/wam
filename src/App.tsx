import { useState, useEffect } from "react";
import { Header } from './components/Header';
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { ProgramsandProjects } from "./components/ProgramsandProjects";
import { ContactUs } from "./components/ContactUs";
import { Volunteer } from "./components/Volunteer";
import { VolunteerApplication } from "./components/VolunteerApplication";
import { NeedHelpNow } from "./components/NeedHelpNow";
import { ModernBackground } from "./components/ModernBackground";
import { TranslationProvider } from "./components/TranslationContext";

// Import all pages
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { DonorsPage } from "./components/pages/DonorsPage";
import { MembersPage } from "./components/pages/MembersPage";
import { TestimonialsPage } from "./components/pages/TestimonialPage";
import { DonateNowPage } from "./components/pages/DonateNowPage";
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
import { PartnersPage } from "./components/pages/PartnersPage";
import { PrivacyPolicyPage } from "./components/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./components/pages/TermsOfServicePage";
import { TrustedPartnersPage} from "./components/pages/TrustedPartnersPage";
import { VolunteersPage } from "./components/pages/VolunteersPage";

export default function App() {
  // ✅ Initialize from URL hash or default to "home"
  const getInitialPage = () => {
    const hash = window.location.hash.slice(1);
    return hash || "home";
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);

  // ✅ Centralized navigation function
  const handleNavigation = (page: string) => {
    setCurrentPage(page);

    // Update browser history and URL hash
    window.history.pushState({ page }, '', `#${page}`);

    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ✅ Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const page = event.state?.page || getInitialPage();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // ✅ Custom event listener for programmatic navigation
  useEffect(() => {
    const handleCustomNavigation = (event: CustomEvent) => {
      handleNavigation(event.detail);
    };

    window.addEventListener('navigate', handleCustomNavigation as EventListener);
    return () => {
      window.removeEventListener('navigate', handleCustomNavigation as EventListener);
    };
  }, []);

  // ✅ Render
  return (
    <TranslationProvider>
      <div className="min-h-screen text-foreground relative">
        <ModernBackground />
        <Header currentPage={currentPage} onNavigate={handleNavigation} />
        <Banner />

        {/* Pages */}
        {currentPage === "home" && <HomePage />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "donors" && <DonorsPage />}
        {currentPage === "members" && <MembersPage />}
        {currentPage === "board-of-directors" && (
          <BoardOfDirectorsPage onNavigate={handleNavigation} />
        )}
        {currentPage === "testimonials" && <TestimonialsPage />}
        {currentPage === "donate-now" && <DonateNowPage />}
        {currentPage === "programs-and-projects" && <ProgramsandProjects />}
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
        {currentPage === "partners" && <PartnersPage />}
        {currentPage === "privacy-policy" && <PrivacyPolicyPage />}
        {currentPage === "terms-of-service" && <TermsOfServicePage />}
        {currentPage === "trusted-partners" && (
          <TrustedPartnersPage/>
        )}
        {currentPage === "volunteers" && <VolunteersPage />}

        <Footer currentPage={currentPage} onNavigate={handleNavigation} />
      </div>
    </TranslationProvider>
  );
}
