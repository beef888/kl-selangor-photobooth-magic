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
        <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-float" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
          <span className="text-sm font-medium">5-Star Rated Service by Aipixel</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg text-shadow-lg animate-slide-up">
          <span className="drop-shadow-2xl">
            #1 AI Photobooth Rental in
          </span>
          <span className="bg-gradient-primary bg-clip-text text-transparent block drop-shadow-2xl">
            Kuala Lumpur & Selangor
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <strong>Aipixel</strong> serves all of KL, Selangor, and the Klang Valley with our exclusive in-house AI software
        </p>
        
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-80 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Premium AI photobooth rental Kuala Lumpur & Selangor by <strong>Aipixel</strong>. Instant AR filters, custom branding, QR sharing & professional printing.
          Purpose-built for corporate events, conferences, trade shows, brand activations and enterprise functions across KL & Selangor.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform">
            Get Corporate Quote
          </Button>
          
          <div className="flex gap-3">
            <Button variant="cta" size="lg" className="flex items-center gap-2 hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
              Call Aipixel Sales in KL
            </Button>
            
            <Button variant="whatsapp" size="lg" className="flex items-center gap-2 hover:scale-105 transition-transform">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Aipixel (KL & Selangor)
            </Button>
          </div>
        </div>
        
        <div className="text-sm opacity-75 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          ✓ Free Setup & Demo • ✓ Same-Day Booking Available • ✓ Local Aipixel KL & Selangor Team
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-glow/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-secondary/20 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;