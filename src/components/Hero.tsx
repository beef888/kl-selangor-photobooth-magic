import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Star } from "lucide-react";
import heroImage from "@/assets/kl-cityscape-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm font-medium">5-Star Rated Service</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg text-shadow-lg">
          <span className="drop-shadow-2xl">
            #1 AI Photobooth Rental in
          </span>
          <span className="bg-gradient-primary bg-clip-text text-transparent block drop-shadow-2xl">
            Kuala Lumpur & Selangor
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed opacity-90">
          We serve all of KL, Selangor, and the Klang Valley with our exclusive in-house AI software
        </p>
        
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-80">
          Premium AI photobooth rental Kuala Lumpur & Selangor. Instant AR filters, custom branding, QR sharing & professional printing. 
          Perfect for weddings, corporate events, and celebrations across KL, Petaling Jaya, Shah Alam & Selangor.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Get Free Quote for Selangor Events
          </Button>
          
          <div className="flex gap-3">
            <Button variant="cta" size="lg" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now to Book Your AI Photobooth in Kuala Lumpur
            </Button>
            
            <Button variant="whatsapp" size="lg" className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us for KL AI Photobooth Rental
            </Button>
          </div>
        </div>
        
        <div className="text-sm opacity-75">
          ✓ Free Setup & Demo • ✓ Same-Day Booking Available • ✓ Local KL & Selangor Team
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-glow/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;