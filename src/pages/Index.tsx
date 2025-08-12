import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import ServiceArea from "@/components/ServiceArea";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CaseStudies from "@/components/CaseStudies";

import OurDifference from "@/components/OurDifference";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen"> 
      <SEO
        title="AI Photobooth Rental Kuala Lumpur & Selangor | Instamedia"
        description="Premium AI photobooth rental across KL & Selangor. Instant AR filters, custom branding, QR sharing, and professional prints. Perfect for weddings and corporate events."
        canonical={typeof window !== "undefined" ? window.location.href : undefined}
      />
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <Services />
      <ServiceArea />
      <BeforeAfterSlider />
      <CaseStudies />
      
      <OurDifference />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
