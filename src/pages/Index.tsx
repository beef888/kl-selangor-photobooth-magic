import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServiceArea from "@/components/ServiceArea";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CaseStudies from "@/components/CaseStudies";
import OurDifference from "@/components/OurDifference";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <ServiceArea />
      <BeforeAfterSlider />
      <CaseStudies />
      <OurDifference />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
