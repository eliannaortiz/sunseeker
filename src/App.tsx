import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import AllInclusiveHighlights from './components/Sections/AllInclusiveHighlights';
import FeaturedAmenities from './components/Sections/FeaturedAmenities';
import QuickOverview from './components/Sections/QuickOverview';
import RoomsAndSuites from './components/Sections/RoomsAndSuites';
import DiningExperience from './components/Sections/DiningExperience';
import ActivitiesEntertainment from './components/Sections/ActivitiesEntertainment';
import AllInclusivePackages from './components/Sections/AllInclusivePackages';
import SpaWellness from './components/Sections/SpaWellness';
import PhotoGallery from './components/Sections/PhotoGallery';
import ReviewsTestimonials from './components/Sections/ReviewsTestimonials';
import LocationContact from './components/Sections/LocationContact';
import EventsWeddings from './components/Sections/EventsWeddings';
import SeasonalOffers from './components/Sections/SeasonalOffers';
import BookingSystem from './components/Sections/BookingSystem';
import ScrollToTop from './components/UI/ScrollToTop';
import QuickBookingWidget from './components/UI/QuickBookingWidget';
import SectionDivider from './components/UI/SectionDivider';
import LiveChat from './components/UI/LiveChat';
import NewsletterSignup from './components/UI/NewsletterSignup';
import AccessibilityMenu from './components/UI/AccessibilityMenu';
import PerformanceMonitor from './components/UI/PerformanceMonitor';

function App() {
  return (
    <div className="min-h-screen">
      {/* Skip to main content for screen readers */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <SectionDivider variant="wave" color="white" />
        <AllInclusiveHighlights />
        <SectionDivider variant="curve" color="cyan" flip />
        <FeaturedAmenities />
        <SectionDivider variant="wave" color="yellow" />
        <QuickOverview />
        <SectionDivider variant="curve" color="white" flip />
        <RoomsAndSuites />
        <SectionDivider variant="wave" color="cyan" />
        <DiningExperience />
        <SectionDivider variant="curve" color="white" flip />
        <ActivitiesEntertainment />
        <SectionDivider variant="wave" color="white" />
        <AllInclusivePackages />
        <SectionDivider variant="curve" color="cyan" flip />
        <SpaWellness />
        <SectionDivider variant="wave" color="white" />
        <PhotoGallery />
        <SectionDivider variant="curve" color="cyan" flip />
        <ReviewsTestimonials />
        <SectionDivider variant="wave" color="white" />
        <LocationContact />
        <SectionDivider variant="curve" color="cyan" flip />
        <EventsWeddings />
        <SectionDivider variant="wave" color="white" />
        <SeasonalOffers />
        <SectionDivider variant="curve" color="cyan" flip />
        <BookingSystem />
        
        {/* Newsletter Signup Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="container mx-auto px-4">
            <NewsletterSignup />
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Interactive Elements */}
      <ScrollToTop />
      <QuickBookingWidget />
      <LiveChat />
      <AccessibilityMenu />
      <PerformanceMonitor />
    </div>
  );
}

export default App;