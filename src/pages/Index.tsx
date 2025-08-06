import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import ServiceArea from "@/components/ServiceArea";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import OurDifference from "@/components/OurDifference";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <Services />
      <ServiceArea />
      <BeforeAfterSlider />
      <CaseStudies />
      <Pricing />
      <OurDifference />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
